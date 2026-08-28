import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { connectToDatabase } from "@/server/db/connection";
import {
  InterviewSession,
  InterviewQuestion,
  InterviewAnswer
} from "@/server/db/models/Interview";
import { evaluateAnswer } from "@/server/agents/interviewAgent";
import { z } from "zod";

const BodySchema = z.object({
  sessionId: z.string(),
  questionId: z.string(),
  answerText: z.string().min(1)
});

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const parsed = BodySchema.safeParse(await req.json());
  if (!parsed.success) return NextResponse.json({ error: "Invalid request body" }, { status: 400 });

  await connectToDatabase();

  const interviewSession = await InterviewSession.findById(parsed.data.sessionId);
  if (!interviewSession) return NextResponse.json({ error: "Session not found." }, { status: 404 });
  if (interviewSession.status !== "in_progress") {
    return NextResponse.json({ error: "This interview session has ended." }, { status: 400 });
  }

  const question = await InterviewQuestion.findById(parsed.data.questionId);
  if (!question) return NextResponse.json({ error: "Question not found." }, { status: 404 });

  // Save the raw answer first, unconditionally
  const answer = await InterviewAnswer.create({
    questionId: question._id,
    sessionId: interviewSession._id,
    answerText: parsed.data.answerText
  });

  // Adaptive decision: this is the agent reasoning live, not a scripted flow
  const evaluation = await evaluateAnswer(
    interviewSession.candidateId.toString(),
    interviewSession._id.toString(),
    question.questionText,
    parsed.data.answerText
  );

  answer.evaluation = {
    depthScore: evaluation.depthScore,
    action: evaluation.action,
    notes: evaluation.notes
  };
  await answer.save();

  interviewSession.questionsAsked += 1;
  const budgetExhausted = interviewSession.questionsAsked >= interviewSession.questionBudget;

  let nextQuestion = null;

  if (!budgetExhausted && (evaluation.action === "follow_up" || evaluation.action === "probe_weakness")) {
    // Ask an adaptive follow-up grounded in what the candidate actually said
    const allQuestionsInSession = await InterviewQuestion.countDocuments({
      sessionId: interviewSession._id
    });
    nextQuestion = await InterviewQuestion.create({
      sessionId: interviewSession._id,
      questionText: evaluation.followUpQuestion || "Can you tell me more about that?",
      type: question.type,
      topic: question.topic,
      difficulty: question.difficulty,
      orderIndex: allQuestionsInSession,
      followUpOf: question._id
    });
  } else if (!budgetExhausted) {
    // Move to the next planned question in the backbone
    const nextPlannedIndex = interviewSession.plannedQuestionIndex + 1;
    nextQuestion = await InterviewQuestion.findOne({
      sessionId: interviewSession._id,
      followUpOf: { $exists: false },
      orderIndex: nextPlannedIndex
    });
    if (nextQuestion) {
      interviewSession.plannedQuestionIndex = nextPlannedIndex;
    }
  }

  const interviewComplete = budgetExhausted || !nextQuestion;
  if (interviewComplete) {
    interviewSession.status = "completed";
    interviewSession.completedAt = new Date();
  }

  await interviewSession.save();

  return NextResponse.json({
    evaluation,
    nextQuestion,
    interviewComplete,
    questionsAsked: interviewSession.questionsAsked,
    questionBudget: interviewSession.questionBudget
  });
}

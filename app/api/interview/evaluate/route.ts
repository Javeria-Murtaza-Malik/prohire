import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { connectToDatabase } from "@/server/db/connection";
import {
  InterviewSession,
  InterviewQuestion,
  InterviewAnswer,
  InterviewScore
} from "@/server/db/models/Interview";
import {
  generateFinalScore,
  TranscriptEntry
} from "@/server/agents/interviewAgent";
import { z } from "zod";

const BodySchema = z.object({
  sessionId: z.string()
});

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const parsed = BodySchema.safeParse(await req.json());

  if (!parsed.success) {
    return NextResponse.json(
      { error: "sessionId is required" },
      { status: 400 }
    );
  }

  await connectToDatabase();

  const interviewSession = await InterviewSession.findById(
    parsed.data.sessionId
  );

  if (!interviewSession) {
    return NextResponse.json(
      { error: "Session not found." },
      { status: 404 }
    );
  }

  const existingScore = await InterviewScore.findOne({
    sessionId: interviewSession._id
  });

  if (existingScore) {
    return NextResponse.json({ score: existingScore });
  }

  const questions = await InterviewQuestion.find({
    sessionId: interviewSession._id
  }).sort({
    orderIndex: 1
  });

  const answers = await InterviewAnswer.find({
    sessionId: interviewSession._id
  });

  const answersByQuestion = new Map(
    answers.map((a) => [a.questionId.toString(), a])
  );

  const transcript: TranscriptEntry[] = [];

  for (const q of questions) {
    const answer = answersByQuestion.get(q._id.toString());

    if (!answer) {
      continue;
    }

    const entry: TranscriptEntry = {
      questionText: q.questionText,
      answerText: answer.answerText
    };

    if (answer.evaluation?.depthScore !== undefined) {
      entry.depthScore = answer.evaluation.depthScore;
    }

    transcript.push(entry);
  }

  if (transcript.length === 0) {
    return NextResponse.json(
      { error: "No answers recorded for this session." },
      { status: 400 }
    );
  }

  try {
    const finalScore = await generateFinalScore(
      interviewSession.candidateId.toString(),
      interviewSession._id.toString(),
      transcript
    );

    const score = await InterviewScore.create({
      sessionId: interviewSession._id,
      ...finalScore
    });

    if (interviewSession.status !== "completed") {
      interviewSession.status = "completed";
      interviewSession.completedAt = new Date();
      await interviewSession.save();
    }

    return NextResponse.json({ score });
  } catch (err) {
    console.error("Final scoring error:", err);

    return NextResponse.json(
      { error: "Failed to generate final evaluation." },
      { status: 500 }
    );
  }
}

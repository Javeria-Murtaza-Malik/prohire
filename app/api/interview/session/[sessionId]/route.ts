import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { connectToDatabase } from "@/server/db/connection";
import {
  InterviewSession,
  InterviewQuestion,
  InterviewAnswer
} from "@/server/db/models/Interview";

export async function GET(req: NextRequest, { params }: { params: { sessionId: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await connectToDatabase();

  const interviewSession = await InterviewSession.findById(params.sessionId);
  if (!interviewSession) return NextResponse.json({ error: "Session not found." }, { status: 404 });

  const questions = await InterviewQuestion.find({ sessionId: interviewSession._id }).sort({
    createdAt: 1
  });
  const answers = await InterviewAnswer.find({ sessionId: interviewSession._id });
  const answeredQuestionIds = new Set(answers.map((a) => a.questionId.toString()));

  const pendingQuestion = questions.find((q) => !answeredQuestionIds.has(q._id.toString())) || null;

  return NextResponse.json({
    session: interviewSession,
    pendingQuestion,
    answeredCount: answers.length
  });
}

import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { connectToDatabase } from "@/server/db/connection";
import { CandidateProfile } from "@/server/db/models/CandidateProfile";
import { Job } from "@/server/db/models/Job";
import { InterviewSession, InterviewQuestion } from "@/server/db/models/Interview";
import { planInterviewQuestions } from "@/server/agents/interviewAgent";
import { z } from "zod";

const BodySchema = z.object({
  jobId: z.string(),
  mode: z.enum(["text", "voice"]).default("text"),
  language: z.enum(["en", "ur", "roman_ur"]).default("en")
});

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const parsed = BodySchema.safeParse(await req.json());
  if (!parsed.success) return NextResponse.json({ error: "Invalid request body" }, { status: 400 });

  await connectToDatabase();

  const userId = (session.user as { id: string }).id;
  const profile = await CandidateProfile.findOne({ userId });
  if (!profile) return NextResponse.json({ error: "Complete your profile first." }, { status: 400 });

  const job = await Job.findById(parsed.data.jobId);
  if (!job) return NextResponse.json({ error: "Job not found." }, { status: 404 });

  const interviewSession = await InterviewSession.create({
    candidateId: profile._id,
    jobId: job._id,
    mode: parsed.data.mode,
    language: parsed.data.language,
    status: "in_progress",
    questionBudget: 8,
    questionsAsked: 0
  });

  try {
    const plan = await planInterviewQuestions(profile, job);

    const createdQuestions = [];
    for (let i = 0; i < plan.questions.length; i++) {
      const q = plan.questions[i];
      const question = await InterviewQuestion.create({
        sessionId: interviewSession._id,
        questionText: q.questionText,
        type: q.type,
        topic: q.topic,
        difficulty: q.difficulty,
        orderIndex: i
      });
      createdQuestions.push(question);
    }

    interviewSession.questionsAsked = 1;
    await interviewSession.save();

    return NextResponse.json({
      sessionId: interviewSession._id,
      firstQuestion: createdQuestions[0],
      totalPlanned: createdQuestions.length
    });
  } catch (err) {
    console.error("Interview start error:", err);
    interviewSession.status = "abandoned";
    await interviewSession.save();
    return NextResponse.json({ error: "Failed to start interview." }, { status: 500 });
  }
}

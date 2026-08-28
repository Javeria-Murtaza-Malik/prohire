import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { connectToDatabase } from "@/server/db/connection";
import { CandidateProfile } from "@/server/db/models/CandidateProfile";
import { Match } from "@/server/db/models/Match";
import { InterviewSession, InterviewScore } from "@/server/db/models/Interview";
import { CareerRoadmap } from "@/server/db/models/CareerRoadmap";
import { runCareerAgent } from "@/server/agents/careerAgent";

export async function POST() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await connectToDatabase();

  const userId = (session.user as { id: string }).id;
  const profile = await CandidateProfile.findOne({ userId });
  if (!profile) return NextResponse.json({ error: "Complete your profile first." }, { status: 400 });

  const recentMatches = await Match.find({ candidateId: profile._id }).sort({ createdAt: -1 }).limit(10);
  const recentMissingSkills = recentMatches.map((m) => m.missingSkills);

  const recentSessions = await InterviewSession.find({
    candidateId: profile._id,
    status: "completed"
  })
    .sort({ createdAt: -1 })
    .limit(5);

  const sessionIds = recentSessions.map((s) => s._id);
  const scores = await InterviewScore.find({ sessionId: { $in: sessionIds } });
  const recentInterviewWeaknesses = scores.map((s) => s.weaknesses);

  try {
    const roadmapOutput = await runCareerAgent({
      candidate: profile,
      recentMissingSkills,
      recentInterviewWeaknesses
    });

    const roadmap = await CareerRoadmap.create({
      candidateId: profile._id,
      ...roadmapOutput
    });

    return NextResponse.json({ roadmap });
  } catch (err) {
    console.error("Roadmap generation error:", err);
    return NextResponse.json({ error: "Failed to generate roadmap." }, { status: 500 });
  }
}

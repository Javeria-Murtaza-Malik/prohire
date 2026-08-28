import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { connectToDatabase } from "@/server/db/connection";
import { CandidateProfile } from "@/server/db/models/CandidateProfile";
import { Job } from "@/server/db/models/Job";
import { Match } from "@/server/db/models/Match";
import { runJobMatchAgent } from "@/server/agents/jobMatchAgent";
import { checkRateLimit } from "@/server/security/rateLimit";

export async function POST() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const userId = (session.user as { id: string }).id;
  const rateLimit = checkRateLimit(`match-run:${userId}`);
  if (!rateLimit.allowed) {
    return NextResponse.json({ error: "Too many requests. Please wait a moment." }, { status: 429 });
  }

  await connectToDatabase();

  const profile = await CandidateProfile.findOne({ userId });
  if (!profile) {
    return NextResponse.json({ error: "Complete your profile first." }, { status: 400 });
  }

  const jobs = await Job.find();
  if (jobs.length === 0) {
    return NextResponse.json({ error: "No jobs available yet. Run the seed script." }, { status: 404 });
  }

  const results = [];
  for (const job of jobs) {
    const result = await runJobMatchAgent(profile, job);

    const match = await Match.findOneAndUpdate(
      { candidateId: profile._id, jobId: job._id },
      {
        candidateId: profile._id,
        jobId: job._id,
        matchScore: result.matchScore,
        embeddingScore: result.embeddingScore,
        skillOverlapScore: result.skillOverlapScore,
        llmAdjustment: result.llmAdjustment,
        matchedSkills: result.matchedSkills,
        missingSkills: result.missingSkills,
        explanation: result.explanation
      },
      { upsert: true, new: true }
    );

    results.push({ job, match });
  }

  results.sort((a, b) => b.match.matchScore - a.match.matchScore);

  return NextResponse.json({ results });
}

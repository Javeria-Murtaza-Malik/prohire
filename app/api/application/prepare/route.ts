import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { connectToDatabase } from "@/server/db/connection";
import { CandidateProfile } from "@/server/db/models/CandidateProfile";
import { Job } from "@/server/db/models/Job";
import { Application } from "@/server/db/models/Application";
import { runApplicationAgent } from "@/server/agents/applicationAgent";
import { z } from "zod";

const BodySchema = z.object({ jobId: z.string() });

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const parsed = BodySchema.safeParse(await req.json());
  if (!parsed.success) return NextResponse.json({ error: "jobId is required" }, { status: 400 });

  await connectToDatabase();

  const userId = (session.user as { id: string }).id;
  const profile = await CandidateProfile.findOne({ userId });
  if (!profile) return NextResponse.json({ error: "Complete your profile first." }, { status: 400 });

  const job = await Job.findById(parsed.data.jobId);
  if (!job) return NextResponse.json({ error: "Job not found." }, { status: 404 });

  try {
    const result = await runApplicationAgent(profile, job);

    const application = await Application.findOneAndUpdate(
      { candidateId: profile._id, jobId: job._id },
      {
        candidateId: profile._id,
        jobId: job._id,
        status: "draft",
        coverLetter: result.coverLetter,
        factCheckNotes: result.factCheckNotes
      },
      { upsert: true, new: true }
    );

    return NextResponse.json({ application });
  } catch (err) {
    console.error("Application prep error:", err);
    return NextResponse.json({ error: "Failed to prepare application." }, { status: 500 });
  }
}

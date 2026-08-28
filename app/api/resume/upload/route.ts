import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { connectToDatabase } from "@/server/db/connection";
import { CandidateProfile } from "@/server/db/models/CandidateProfile";
import { validateResumeFile } from "@/server/security/fileValidation";
import { extractResumeText } from "@/server/resume/extractText";
import { runResumeAgent } from "@/server/agents/resumeAgent";
import { checkRateLimit } from "@/server/security/rateLimit";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const userId = (session.user as { id: string }).id;

  const rateLimit = checkRateLimit(`resume-upload:${userId}`);
  if (!rateLimit.allowed) {
    return NextResponse.json({ error: "Too many requests. Please wait a moment and try again." }, { status: 429 });
  }

  const formData = await req.formData();
  const file = formData.get("resume") as File | null;
  if (!file) {
    return NextResponse.json({ error: "No file uploaded." }, { status: 400 });
  }

  const validation = validateResumeFile({ type: file.type, size: file.size });
  if (!validation.valid) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  await connectToDatabase();

  const profile = await CandidateProfile.findOne({ userId });
  if (!profile) {
    return NextResponse.json({ error: "Create your profile before uploading a resume." }, { status: 400 });
  }

  try {
    const buffer = Buffer.from(await file.arrayBuffer());
    const resumeText = await extractResumeText(buffer, file.type);

    if (resumeText.trim().length < 20) {
      return NextResponse.json(
        { error: "Couldn't extract readable text from this file. Try a different PDF/DOCX." },
        { status: 422 }
      );
    }

    const analysis = await runResumeAgent({
      candidateId: profile._id.toString(),
      resumeText
    });

    profile.resumeParsed = {
      ...analysis,
      rawTextExcerpt: resumeText.slice(0, 500)
    };
    // Merge extracted skills into the profile's skill list without duplicates
    const mergedSkills = Array.from(new Set([...(profile.skills || []), ...analysis.skills]));
    profile.skills = mergedSkills;
    await profile.save();

    return NextResponse.json({ analysis, profile });
  } catch (err) {
    console.error("Resume processing error:", err);
    return NextResponse.json(
      { error: "Failed to process resume. Please try again." },
      { status: 500 }
    );
  }
}

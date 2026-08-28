import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { connectToDatabase } from "@/server/db/connection";
import { CandidateProfile } from "@/server/db/models/CandidateProfile";
import { generateEmbedding } from "@/server/embeddings/embed";
import { z } from "zod";

const ProfileSchema = z.object({
  fullName: z.string().min(1),
  university: z.string().optional(),
  education: z
    .array(
      z.object({
        degree: z.string(),
        institution: z.string(),
        fieldOfStudy: z.string().optional(),
        startYear: z.number().optional(),
        endYear: z.number().optional()
      })
    )
    .default([]),
  skills: z.array(z.string()).default([]),
  experience: z
    .array(
      z.object({
        title: z.string(),
        company: z.string(),
        startDate: z.string().optional(),
        endDate: z.string().optional(),
        description: z.string().optional(),
        isCurrent: z.boolean().optional()
      })
    )
    .default([]),
  projects: z
    .array(
      z.object({
        name: z.string(),
        description: z.string(),
        technologies: z.array(z.string()).default([]),
        link: z.string().optional()
      })
    )
    .default([]),
  certifications: z
    .array(z.object({ name: z.string(), issuer: z.string(), year: z.number().optional() }))
    .default([]),
  githubUrl: z.string().optional(),
  linkedinUrl: z.string().optional(),
  portfolioUrl: z.string().optional(),
  preferredRole: z.string().optional(),
  preferredLocation: z.string().optional(),
  remotePref: z.enum(["remote", "onsite", "hybrid", "no_preference"]).optional(),
  expectedSalaryPKR: z.number().optional(),
  availability: z.string().optional()
});

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await connectToDatabase();
  const profile = await CandidateProfile.findOne({ userId: (session.user as { id: string }).id });
  return NextResponse.json({ profile });
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const parsed = ProfileSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 });
  }

  await connectToDatabase();

  const userId = (session.user as { id: string }).id;

  // Build a text summary for embedding so job matching has something to compare against.
  const summaryText = [
    parsed.data.fullName,
    parsed.data.preferredRole,
    parsed.data.skills.join(", "),
    parsed.data.experience.map((e) => `${e.title} at ${e.company}: ${e.description || ""}`).join(". "),
    parsed.data.projects.map((p) => `${p.name}: ${p.description}`).join(". ")
  ].join(". ");

  const profileEmbedding = await generateEmbedding(summaryText);

  const profile = await CandidateProfile.findOneAndUpdate(
    { userId },
    { ...parsed.data, userId, profileEmbedding },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );

  return NextResponse.json({ profile });
}

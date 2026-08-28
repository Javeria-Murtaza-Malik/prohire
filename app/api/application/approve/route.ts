import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { connectToDatabase } from "@/server/db/connection";
import { Application } from "@/server/db/models/Application";
import { z } from "zod";

const BodySchema = z.object({
  applicationId: z.string(),
  decision: z.enum(["approve", "reject"])
});

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const parsed = BodySchema.safeParse(await req.json());
  if (!parsed.success) return NextResponse.json({ error: "Invalid request body" }, { status: 400 });

  await connectToDatabase();

  const application = await Application.findById(parsed.data.applicationId);
  if (!application) return NextResponse.json({ error: "Application not found." }, { status: 404 });

  // This is the explicit human-in-the-loop gate: no application ever moves
  // to "sent" without this endpoint being called by the candidate themselves.
  application.status = parsed.data.decision === "approve" ? "approved" : "rejected_by_candidate";
  if (parsed.data.decision === "approve") {
    application.approvedAt = new Date();
  }
  await application.save();

  return NextResponse.json({ application });
}

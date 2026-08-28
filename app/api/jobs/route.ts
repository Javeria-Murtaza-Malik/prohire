import { NextResponse } from "next/server";
import { connectToDatabase } from "@/server/db/connection";
import { Job } from "@/server/db/models/Job";

export async function GET() {
  await connectToDatabase();
  const jobs = await Job.find().sort({ createdAt: -1 }).limit(50);
  return NextResponse.json({ jobs });
}

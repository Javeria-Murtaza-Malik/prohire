import { NextResponse } from "next/server";
import { connectToDatabase } from "@/server/db/connection";

export async function GET() {
  try {
    await connectToDatabase();
    return NextResponse.json({ status: "ok", db: "connected", timestamp: new Date().toISOString() });
  } catch (err) {
    return NextResponse.json(
      { status: "error", message: err instanceof Error ? err.message : String(err) },
      { status: 500 }
    );
  }
}

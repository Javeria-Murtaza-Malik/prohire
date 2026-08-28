import { completeStructured, wrapAsData } from "../llm/client";
import { ResumeAnalysisSchema, ResumeAnalysis } from "../llm/schemas";
import { AgentRun } from "../db/models/AgentRun";
import { Types } from "mongoose";

const SYSTEM_PROMPT = `You are the Resume Intelligence Agent, part of the ProHire AI career platform.
Your ONLY job: analyze raw resume text and extract structured information.

Rules:
- Extract only what is actually present in the resume text. Never invent skills, roles, or achievements.
- If a job description is provided for comparison, identify missing keywords relevant to that job.
- Output suggestions that are specific and actionable, not generic advice.
- Respond with ONLY valid JSON matching this exact shape:
{
  "skills": string[],
  "experience": string[],
  "education": string[],
  "achievements": string[],
  "missingKeywords": string[],
  "suggestions": string[]
}`;

export interface ResumeAgentInput {
  candidateId: string;
  resumeText: string;
  targetJobDescription?: string;
}

export async function runResumeAgent(input: ResumeAgentInput): Promise<ResumeAnalysis> {
  const start = Date.now();
  const userPrompt = [
    wrapAsData("resume_text", input.resumeText),
    input.targetJobDescription
      ? wrapAsData("target_job_description", input.targetJobDescription)
      : "No target job description provided - analyze the resume standalone."
  ].join("\n\n");

  let output: ResumeAnalysis | undefined;
  let success = true;
  let errorMessage: string | undefined;

  try {
    output = await completeStructured({ systemPrompt: SYSTEM_PROMPT, userPrompt }, ResumeAnalysisSchema);
  } catch (err) {
    success = false;
    errorMessage = err instanceof Error ? err.message : String(err);
    throw err;
  } finally {
    await AgentRun.create({
      candidateId: new Types.ObjectId(input.candidateId),
      agentName: "resumeAgent",
      input: { resumeTextLength: input.resumeText.length, hasTargetJob: !!input.targetJobDescription },
      output: success ? output! : {},
      modelUsed: process.env.LLM_PROVIDER === "mock" ? "mock" : "qwen-plus",
      latencyMs: Date.now() - start,
      success,
      errorMessage
    });
  }

  return output!;
}

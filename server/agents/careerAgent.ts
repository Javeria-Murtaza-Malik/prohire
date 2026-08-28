import { completeStructured, wrapAsData } from "../llm/client";
import { CareerRoadmapOutputSchema, CareerRoadmapOutput } from "../llm/schemas";
import { AgentRun } from "../db/models/AgentRun";
import { ICandidateProfile } from "../db/models/CandidateProfile";
import { Types } from "mongoose";

const SYSTEM_PROMPT = `You are the Career Intelligence Agent, part of the ProHire platform.
You receive a candidate's profile plus their accumulated match and interview history,
and produce a personalized, realistic skill roadmap.

Rules:
- Ground skillGaps in patterns actually visible in the provided data (missing skills
  across multiple job matches, weaknesses noted in interview feedback) - not generic advice.
- roadmapSteps should be sequenced, realistic for a working student/early-career candidate
  (assume ~5-10 hours/week available), and each step needs a concrete resource suggestion.
- suggestedRoles should be roles the candidate is close to qualifying for now, not aspirational
  senior roles.
- Respond with ONLY valid JSON matching this exact shape:
{ "skillGaps": string[], "suggestedRoles": string[],
  "roadmapSteps": [{ "order": number, "title": string, "description": string,
    "estimatedWeeks": number, "resources": [{ "name": string, "url": string (optional), "type": "course"|"project"|"reading" }] }] }`;

export interface CareerAgentInput {
  candidate: ICandidateProfile;
  recentMissingSkills: string[][];
  recentInterviewWeaknesses: string[][];
}

export async function runCareerAgent(input: CareerAgentInput): Promise<CareerRoadmapOutput> {
  const start = Date.now();
  const userPrompt = [
    wrapAsData(
      "candidate_profile",
      JSON.stringify({
        skills: input.candidate.skills,
        preferredRole: input.candidate.preferredRole,
        experience: input.candidate.experience
      })
    ),
    wrapAsData("recent_missing_skills_from_job_matches", JSON.stringify(input.recentMissingSkills)),
    wrapAsData("recent_interview_weaknesses", JSON.stringify(input.recentInterviewWeaknesses))
  ].join("\n\n");

  let result: CareerRoadmapOutput | undefined;
  let success = true;
  let errorMessage: string | undefined;

  try {
    result = await completeStructured({ systemPrompt: SYSTEM_PROMPT, userPrompt }, CareerRoadmapOutputSchema);
  } catch (err) {
    success = false;
    errorMessage = err instanceof Error ? err.message : String(err);
    throw err;
  } finally {
    await AgentRun.create({
      candidateId: input.candidate._id,
      agentName: "careerAgent",
      input: { skillCount: input.candidate.skills?.length ?? 0 },
      output: success ? (result as unknown as Record<string, unknown>) : {},
      modelUsed: process.env.LLM_PROVIDER === "mock" ? "mock" : "qwen-plus",
      latencyMs: Date.now() - start,
      success,
      errorMessage
    });
  }

  return result!;
}

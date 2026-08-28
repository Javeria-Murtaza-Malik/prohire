import { completeStructured, wrapAsData } from "../llm/client";
import { JobMatchExplanationSchema } from "../llm/schemas";
import { cosineSimilarity } from "../embeddings/embed";
import { AgentRun } from "../db/models/AgentRun";
import { ICandidateProfile } from "../db/models/CandidateProfile";
import { IJob } from "../db/models/Job";
import { Types } from "mongoose";

const SYSTEM_PROMPT = `You are the Job Discovery Agent, part of the ProHire AI career platform.
You receive a candidate's profile and a job posting. Your job is to add QUALITATIVE
judgment on top of an already-computed quantitative match score - not to invent the score yourself.

Rules:
- llmAdjustment must be between -10 and +10. Use it to reflect nuance a rule-based
  skill match can't capture: transferable skills, project relevance, seniority fit.
- Never use age, gender, religion, ethnicity, or any protected attribute in your reasoning,
  even if such information appears in the provided data - ignore it entirely.
- matchedSkills and missingSkills must be grounded in the actual candidate skills and
  job requirements provided - do not invent skills that appear in neither list.
- explanation must be 2-4 sentences, specific to this candidate and this job, and
  understandable to a non-technical reader.
- Respond with ONLY valid JSON matching this exact shape:
{
  "llmAdjustment": number,
  "matchedSkills": string[],
  "missingSkills": string[],
  "explanation": string
}`;

export interface JobMatchResult {
  matchScore: number;
  embeddingScore: number;
  skillOverlapScore: number;
  llmAdjustment: number;
  matchedSkills: string[];
  missingSkills: string[];
  explanation: string;
}

function normalizeSkill(skill: string): string {
  const synonyms: Record<string, string> = {
    js: "javascript",
    "node": "node.js",
    nodejs: "node.js",
    reactjs: "react",
    ts: "typescript"
  };
  const lower = skill.trim().toLowerCase();
  return synonyms[lower] || lower;
}

function computeSkillOverlap(candidateSkills: string[], jobRequirements: string[]): {
  score: number;
  matched: string[];
  missing: string[];
} {
  const candidateSet = new Set(candidateSkills.map(normalizeSkill));
  const requirementSet = jobRequirements.map(normalizeSkill);

  const matched: string[] = [];
  const missing: string[] = [];

  for (const req of requirementSet) {
    if (candidateSet.has(req)) {
      matched.push(req);
    } else {
      missing.push(req);
    }
  }

  const score = requirementSet.length === 0 ? 1 : matched.length / requirementSet.length;
  return { score, matched, missing };
}

export async function runJobMatchAgent(
  candidate: ICandidateProfile,
  job: IJob
): Promise<JobMatchResult> {
  const start = Date.now();

  const embeddingScore =
    candidate.profileEmbedding && job.embedding
      ? cosineSimilarity(candidate.profileEmbedding, job.embedding)
      : 0.5; // neutral fallback if embeddings aren't ready yet

  const { score: skillOverlapScore, matched, missing } = computeSkillOverlap(
    candidate.skills || [],
    job.requirements || []
  );

  const userPrompt = [
    wrapAsData(
      "candidate_profile",
      JSON.stringify({
        skills: candidate.skills,
        experience: candidate.experience,
        projects: candidate.projects,
        preferredRole: candidate.preferredRole
      })
    ),
    wrapAsData(
      "job_posting",
      JSON.stringify({
        title: job.title,
        description: job.description,
        requirements: job.requirements,
        seniority: job.seniority
      })
    ),
    `Computed rule-based data (for your reference, do not recompute): matchedSkills=${JSON.stringify(
      matched
    )}, missingSkills=${JSON.stringify(missing)}`
  ].join("\n\n");

  let llmAdjustment = 0;
  let matchedSkills = matched;
  let missingSkills = missing;
  let explanation = "";
  let success = true;
  let errorMessage: string | undefined;

  try {
    const llmResult = await completeStructured(
      { systemPrompt: SYSTEM_PROMPT, userPrompt },
      JobMatchExplanationSchema
    );
    llmAdjustment = llmResult.llmAdjustment;
    matchedSkills = llmResult.matchedSkills.length ? llmResult.matchedSkills : matched;
    missingSkills = llmResult.missingSkills.length ? llmResult.missingSkills : missing;
    explanation = llmResult.explanation;
  } catch (err) {
    success = false;
    errorMessage = err instanceof Error ? err.message : String(err);
    explanation =
      "Match computed from skill overlap and profile similarity (qualitative explanation unavailable).";
  } finally {
    await AgentRun.create({
      candidateId: candidate._id,
      agentName: "jobMatchAgent",
      input: { jobId: job._id, jobTitle: job.title },
      output: { embeddingScore, skillOverlapScore, llmAdjustment, matchedSkills, missingSkills },
      modelUsed: process.env.LLM_PROVIDER === "mock" ? "mock" : "qwen-plus",
      latencyMs: Date.now() - start,
      success,
      errorMessage
    });
  }

  // Hybrid score: 40% embedding similarity + 40% rule-based skill overlap + 20% LLM adjustment
  const baseScore = embeddingScore * 40 + skillOverlapScore * 40;
  const adjustedScore = baseScore + llmAdjustment * 2; // llmAdjustment (-10..10) scaled into the remaining 20-pt band
  const matchScore = Math.max(0, Math.min(100, Math.round(adjustedScore)));

  return {
    matchScore,
    embeddingScore,
    skillOverlapScore,
    llmAdjustment,
    matchedSkills,
    missingSkills,
    explanation
  };
}

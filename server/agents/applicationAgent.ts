import { completeStructured, wrapAsData } from "../llm/client";
import { CoverLetterSchema } from "../llm/schemas";
import { AgentRun } from "../db/models/AgentRun";
import { ICandidateProfile } from "../db/models/CandidateProfile";
import { IJob } from "../db/models/Job";

const SYSTEM_PROMPT = `You are the Application Agent, part of the ProHire AI career platform.
You write a short, genuine cover letter for a candidate applying to a specific job.

CRITICAL RULES:
- You may ONLY reference experience, projects, skills, and education that appear
  explicitly in the candidate_profile data provided. NEVER invent or exaggerate
  a claim the candidate has not made about themselves.
- For every specific claim you make in the cover letter, list it in "claimsUsed"
  along with which profile field it came from (e.g. "experience[0]", "projects[1]").
- Keep the tone genuine and specific to this candidate - avoid generic phrases like
  "I am a hardworking team player."
- 150-220 words.
- Respond with ONLY valid JSON matching this exact shape:
{
  "coverLetter": string,
  "claimsUsed": [{ "claim": string, "verifiedAgainstProfileField": string }]
}`;

export interface ApplicationAgentResult {
  coverLetter: string;
  factCheckNotes: string[];
}

export async function runApplicationAgent(
  candidate: ICandidateProfile,
  job: IJob
): Promise<ApplicationAgentResult> {
  const start = Date.now();

  const userPrompt = [
    wrapAsData(
      "candidate_profile",
      JSON.stringify({
        fullName: candidate.fullName,
        skills: candidate.skills,
        experience: candidate.experience,
        projects: candidate.projects,
        certifications: candidate.certifications,
        education: candidate.education
      })
    ),
    wrapAsData(
      "job_posting",
      JSON.stringify({ title: job.title, company: job.company, description: job.description })
    )
  ].join("\n\n");

  let result;
  let success = true;
  let errorMessage: string | undefined;

  try {
    result = await completeStructured({ systemPrompt: SYSTEM_PROMPT, userPrompt }, CoverLetterSchema);
  } catch (err) {
    success = false;
    errorMessage = err instanceof Error ? err.message : String(err);
    throw err;
  } finally {
    await AgentRun.create({
      candidateId: candidate._id,
      agentName: "applicationAgent",
      input: { jobId: job._id, jobTitle: job.title },
      output: success ? result! : {},
      modelUsed: process.env.LLM_PROVIDER === "mock" ? "mock" : "qwen-plus",
      latencyMs: Date.now() - start,
      success,
      errorMessage
    });
  }

  // Post-generation verification pass: every claimed field reference must
  // actually resolve against the candidate's stored profile. This is the
  // guardrail that prevents fabricated qualifications from silently passing
  // through, independent of what the prompt asked the model to do.
  const factCheckNotes = result!.claimsUsed.map((c) => {
    const resolvable = resolveProfileField(candidate, c.verifiedAgainstProfileField);
    return resolvable
      ? `Verified: "${c.claim}" matches ${c.verifiedAgainstProfileField}`
      : `WARNING: could not verify "${c.claim}" against profile field ${c.verifiedAgainstProfileField}`;
  });

  return { coverLetter: result!.coverLetter, factCheckNotes };
}

function resolveProfileField(candidate: ICandidateProfile, path: string): boolean {
  try {
    const match = path.match(/^(\w+)\[(\d+)\]$/);
    if (match) {
      const [, field, indexStr] = match;
      const arr = (candidate as unknown as Record<string, unknown[]>)[field];
      return Array.isArray(arr) && arr.length > Number(indexStr);
    }
    return path in candidate;
  } catch {
    return false;
  }
}

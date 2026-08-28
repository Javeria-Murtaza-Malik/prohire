import { completeStructured, wrapAsData } from "../llm/client";
import {
  InterviewQuestionPlanSchema,
  AnswerEvaluationSchema,
  InterviewFinalScoreSchema,
  InterviewFinalScore
} from "../llm/schemas";
import { AgentRun } from "../db/models/AgentRun";
import { ICandidateProfile } from "../db/models/CandidateProfile";
import { IJob } from "../db/models/Job";
import { Types } from "mongoose";

/* ---------------- Question Plan ---------------- */

const PLAN_SYSTEM_PROMPT = `You are the AI Interview Agent, part of the ProHire platform.
Generate an interview question plan for a specific candidate applying to a specific job.

Rules:
- Generate exactly 4 opening questions: 2 technical, 1 behavioral, 1 project-specific.
- Technical questions must be grounded in skills the job requires AND the candidate claims to have.
- The project-specific question must reference an actual project from the candidate's profile.
- Vary difficulty 1-5 based on the candidate's stated experience level.
- Respond with ONLY valid JSON matching this exact shape:
{ "questions": [{ "questionText": string, "type": "technical"|"behavioral"|"project", "topic": string, "difficulty": number }] }`;

export async function planInterviewQuestions(candidate: ICandidateProfile, job: IJob) {
  const start = Date.now();
  const userPrompt = [
    wrapAsData(
      "candidate_profile",
      JSON.stringify({ skills: candidate.skills, experience: candidate.experience, projects: candidate.projects })
    ),
    wrapAsData("job_posting", JSON.stringify({ title: job.title, requirements: job.requirements }))
  ].join("\n\n");

  let result;
  let success = true;
  let errorMessage: string | undefined;
  try {
    result = await completeStructured(
      { systemPrompt: PLAN_SYSTEM_PROMPT, userPrompt },
      InterviewQuestionPlanSchema
    );
  } catch (err) {
    success = false;
    errorMessage = err instanceof Error ? err.message : String(err);
    throw err;
  } finally {
    await AgentRun.create({
      candidateId: candidate._id,
      agentName: "interviewAgent",
      input: { jobId: job._id, phase: "question_plan" },
      output: success ? result! : {},
      modelUsed: process.env.LLM_PROVIDER === "mock" ? "mock" : "qwen-plus",
      latencyMs: Date.now() - start,
      success,
      errorMessage
    });
  }
  return result!;
}

/* ---------------- Adaptive Answer Evaluation ---------------- */

const EVAL_SYSTEM_PROMPT = `You are the AI Interview Agent's real-time answer evaluator.
After each candidate answer, decide what happens next in the interview.

Rules:
- depthScore 1-5: how substantive and specific the answer was (not whether it's "correct" in a binary sense).
- action:
  - "follow_up": the answer was shallow or vague on a topic worth probing deeper (depthScore <= 2).
  - "probe_weakness": the answer revealed a specific gap worth exploring once more.
  - "next_planned": the answer was solid enough to move to the next planned question (depthScore >= 3).
- If action is "follow_up" or "probe_weakness", you MUST include a specific followUpQuestion
  that references something the candidate actually said - never a generic follow-up.
- Respond with ONLY valid JSON matching this exact shape:
{ "depthScore": number, "action": "follow_up"|"next_planned"|"probe_weakness", "notes": string, "followUpQuestion": string (optional) }`;

export async function evaluateAnswer(
  candidateId: string,
  sessionId: string,
  questionText: string,
  answerText: string
) {
  const start = Date.now();
  const userPrompt = [
    wrapAsData("question", questionText),
    wrapAsData("candidate_answer", answerText)
  ].join("\n\n");

  let result;
  let success = true;
  let errorMessage: string | undefined;
  try {
    result = await completeStructured({ systemPrompt: EVAL_SYSTEM_PROMPT, userPrompt }, AnswerEvaluationSchema);
  } catch (err) {
    success = false;
    errorMessage = err instanceof Error ? err.message : String(err);
    // graceful fallback: don't block the interview if evaluation fails once
    result = { depthScore: 3, action: "next_planned" as const, notes: "Evaluation unavailable, proceeding." };
  } finally {
    await AgentRun.create({
      candidateId: new Types.ObjectId(candidateId),
      sessionId: new Types.ObjectId(sessionId),
      agentName: "interviewAgent",
      input: { phase: "answer_evaluation", questionText, answerLength: answerText.length },
      output: result!,
      modelUsed: process.env.LLM_PROVIDER === "mock" ? "mock" : "qwen-plus",
      latencyMs: Date.now() - start,
      success,
      errorMessage
    });
  }
  return result!;
}

/* ---------------- Final Scoring ---------------- */

const FINAL_SCORE_SYSTEM_PROMPT = `You are the AI Interview Agent's final evaluation module.
You receive a full interview transcript (questions + answers + per-answer notes) and must
produce a final interview readiness evaluation.

Rules:
- Score each dimension 0-100, grounded in specific moments from the transcript.
- overall interview readiness score should weight: technical 30%, relevance 25%,
  problemSolving 20%, communication 15%, confidence 10% - but use judgment, don't just average blindly.
- strengths and weaknesses must reference specific answers, not generic statements.
- feedback must be constructive, specific, and actionable - written directly to the candidate.
- Never penalize based on accent, dialect, or non-native English phrasing - evaluate
  content and clarity of reasoning, not native fluency.
- Respond with ONLY valid JSON matching this exact shape:
{ "technical": number, "communication": number, "problemSolving": number, "relevance": number,
  "confidence": number, "overall": number, "strengths": string[], "weaknesses": string[], "feedback": string }`;

export interface TranscriptEntry {
  questionText: string;
  answerText: string;
  depthScore?: number;
}

export async function generateFinalScore(
  candidateId: string,
  sessionId: string,
  transcript: TranscriptEntry[]
): Promise<InterviewFinalScore> {
  const start = Date.now();
  const userPrompt = wrapAsData("interview_transcript", JSON.stringify(transcript, null, 2));

  let result: InterviewFinalScore | undefined;
  let success = true;
  let errorMessage: string | undefined;
  try {
    result = await completeStructured(
      { systemPrompt: FINAL_SCORE_SYSTEM_PROMPT, userPrompt },
      InterviewFinalScoreSchema
    );
  } catch (err) {
    success = false;
    errorMessage = err instanceof Error ? err.message : String(err);
    throw err;
  } finally {
    await AgentRun.create({
      candidateId: new Types.ObjectId(candidateId),
      sessionId: new Types.ObjectId(sessionId),
      agentName: "interviewAgent",
      input: { phase: "final_scoring", transcriptLength: transcript.length },
      output: success ? (result as unknown as Record<string, unknown>) : {},
      modelUsed: process.env.LLM_PROVIDER === "mock" ? "mock" : "qwen-plus",
      latencyMs: Date.now() - start,
      success,
      errorMessage
    });
  }
  return result!;
}

import { z } from "zod";

/**
 * Every agent output is validated against one of these schemas before
 * it is persisted or forwarded to another agent. If a model response
 * fails validation, the llmClient retries once with a stricter
 * "your last response did not match the schema" correction prompt,
 * then throws - callers must handle failure explicitly rather than
 * silently trusting malformed AI output.
 */

export const ResumeAnalysisSchema = z.object({
  skills: z.array(z.string()),
  experience: z.array(z.string()),
  education: z.array(z.string()),
  achievements: z.array(z.string()),
  missingKeywords: z.array(z.string()),
  suggestions: z.array(z.string())
});
export type ResumeAnalysis = z.infer<typeof ResumeAnalysisSchema>;

export const JobMatchExplanationSchema = z.object({
  llmAdjustment: z.number().min(-10).max(10),
  matchedSkills: z.array(z.string()),
  missingSkills: z.array(z.string()),
  explanation: z.string()
});
export type JobMatchExplanation = z.infer<typeof JobMatchExplanationSchema>;

export const CoverLetterSchema = z.object({
  coverLetter: z.string(),
  claimsUsed: z.array(
    z.object({
      claim: z.string(),
      verifiedAgainstProfileField: z.string()
    })
  )
});
export type CoverLetterOutput = z.infer<typeof CoverLetterSchema>;

export const InterviewQuestionPlanSchema = z.object({
  questions: z.array(
    z.object({
      questionText: z.string(),
      type: z.enum(["technical", "behavioral", "project"]),
      topic: z.string(),
      difficulty: z.number().min(1).max(5)
    })
  )
});
export type InterviewQuestionPlan = z.infer<typeof InterviewQuestionPlanSchema>;

export const AnswerEvaluationSchema = z.object({
  depthScore: z.number().min(1).max(5),
  action: z.enum(["follow_up", "next_planned", "probe_weakness"]),
  notes: z.string(),
  followUpQuestion: z.string().optional()
});
export type AnswerEvaluation = z.infer<typeof AnswerEvaluationSchema>;

export const InterviewFinalScoreSchema = z.object({
  technical: z.number().min(0).max(100),
  communication: z.number().min(0).max(100),
  problemSolving: z.number().min(0).max(100),
  relevance: z.number().min(0).max(100),
  confidence: z.number().min(0).max(100),
  overall: z.number().min(0).max(100),
  strengths: z.array(z.string()),
  weaknesses: z.array(z.string()),
  feedback: z.string()
});
export type InterviewFinalScore = z.infer<typeof InterviewFinalScoreSchema>;

export const CareerRoadmapOutputSchema = z.object({
  skillGaps: z.array(z.string()),
  suggestedRoles: z.array(z.string()),
  roadmapSteps: z.array(
    z.object({
      order: z.number(),
      title: z.string(),
      description: z.string(),
      estimatedWeeks: z.number(),
      resources: z.array(
        z.object({
          name: z.string(),
          url: z.string().optional(),
          type: z.enum(["course", "project", "reading"])
        })
      )
    })
  )
});
export type CareerRoadmapOutput = z.infer<typeof CareerRoadmapOutputSchema>;

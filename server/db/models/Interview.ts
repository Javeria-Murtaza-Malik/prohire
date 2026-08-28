import mongoose, { Schema, Model, Document, Types } from "mongoose";

/* ---------- InterviewSession ---------- */

export interface IInterviewSession extends Document {
  candidateId: Types.ObjectId;
  jobId: Types.ObjectId;
  mode: "text" | "voice";
  language: "en" | "ur" | "roman_ur";
  status: "in_progress" | "completed" | "abandoned";
  questionBudget: number; // hard cap on question count for the session
  questionsAsked: number;
  plannedQuestionIndex: number; // pointer into the original planned question backbone
  createdAt: Date;
  completedAt?: Date;
}

const InterviewSessionSchema = new Schema<IInterviewSession>({
  candidateId: { type: Schema.Types.ObjectId, ref: "CandidateProfile", required: true },
  jobId: { type: Schema.Types.ObjectId, ref: "Job", required: true },
  mode: { type: String, enum: ["text", "voice"], default: "text" },
  language: { type: String, enum: ["en", "ur", "roman_ur"], default: "en" },
  status: { type: String, enum: ["in_progress", "completed", "abandoned"], default: "in_progress" },
  questionBudget: { type: Number, default: 8 },
  questionsAsked: { type: Number, default: 0 },
  plannedQuestionIndex: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  completedAt: Date
});

export const InterviewSession: Model<IInterviewSession> =
  mongoose.models.InterviewSession ||
  mongoose.model<IInterviewSession>("InterviewSession", InterviewSessionSchema);

/* ---------- InterviewQuestion ---------- */

export interface IInterviewQuestion extends Document {
  sessionId: Types.ObjectId;
  questionText: string;
  type: "technical" | "behavioral" | "project";
  topic: string; // e.g. "React state management", "teamwork conflict"
  difficulty: 1 | 2 | 3 | 4 | 5;
  orderIndex: number;
  followUpOf?: Types.ObjectId; // references parent question if this is an adaptive follow-up
  createdAt: Date;
}

const InterviewQuestionSchema = new Schema<IInterviewQuestion>({
  sessionId: { type: Schema.Types.ObjectId, ref: "InterviewSession", required: true },
  questionText: { type: String, required: true },
  type: { type: String, enum: ["technical", "behavioral", "project"], required: true },
  topic: { type: String, required: true },
  difficulty: { type: Number, min: 1, max: 5, default: 3 },
  orderIndex: { type: Number, required: true },
  followUpOf: { type: Schema.Types.ObjectId, ref: "InterviewQuestion" },
  createdAt: { type: Date, default: Date.now }
});

export const InterviewQuestion: Model<IInterviewQuestion> =
  mongoose.models.InterviewQuestion ||
  mongoose.model<IInterviewQuestion>("InterviewQuestion", InterviewQuestionSchema);

/* ---------- InterviewAnswer ---------- */

export interface IInterviewAnswer extends Document {
  questionId: Types.ObjectId;
  sessionId: Types.ObjectId;
  answerText: string;
  evaluation?: {
    depthScore: number; // 1-5, how the evaluator rated this specific answer
    action: "follow_up" | "next_planned" | "probe_weakness";
    notes: string;
  };
  createdAt: Date;
}

const InterviewAnswerSchema = new Schema<IInterviewAnswer>({
  questionId: { type: Schema.Types.ObjectId, ref: "InterviewQuestion", required: true },
  sessionId: { type: Schema.Types.ObjectId, ref: "InterviewSession", required: true },
  answerText: { type: String, required: true },
  evaluation: {
    depthScore: Number,
    action: { type: String, enum: ["follow_up", "next_planned", "probe_weakness"] },
    notes: String
  },
  createdAt: { type: Date, default: Date.now }
});

export const InterviewAnswer: Model<IInterviewAnswer> =
  mongoose.models.InterviewAnswer ||
  mongoose.model<IInterviewAnswer>("InterviewAnswer", InterviewAnswerSchema);

/* ---------- InterviewScore ---------- */

export interface IInterviewScore extends Document {
  sessionId: Types.ObjectId;
  technical: number;
  communication: number;
  problemSolving: number;
  relevance: number;
  confidence: number;
  overall: number;
  strengths: string[];
  weaknesses: string[];
  feedback: string;
  createdAt: Date;
}

const InterviewScoreSchema = new Schema<IInterviewScore>({
  sessionId: { type: Schema.Types.ObjectId, ref: "InterviewSession", required: true, unique: true },
  technical: { type: Number, required: true },
  communication: { type: Number, required: true },
  problemSolving: { type: Number, required: true },
  relevance: { type: Number, required: true },
  confidence: { type: Number, required: true },
  overall: { type: Number, required: true },
  strengths: { type: [String], default: [] },
  weaknesses: { type: [String], default: [] },
  feedback: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export const InterviewScore: Model<IInterviewScore> =
  mongoose.models.InterviewScore ||
  mongoose.model<IInterviewScore>("InterviewScore", InterviewScoreSchema);

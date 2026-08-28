import mongoose, { Schema, Model, Document, Types } from "mongoose";

export interface IMatch extends Document {
  candidateId: Types.ObjectId;
  jobId: Types.ObjectId;
  matchScore: number; // 0-100, final hybrid score
  embeddingScore: number; // 0-1 cosine similarity
  skillOverlapScore: number; // 0-1 rule-based
  llmAdjustment: number; // -10 to +10
  matchedSkills: string[];
  missingSkills: string[];
  explanation: string;
  createdAt: Date;
}

const MatchSchema = new Schema<IMatch>({
  candidateId: { type: Schema.Types.ObjectId, ref: "CandidateProfile", required: true },
  jobId: { type: Schema.Types.ObjectId, ref: "Job", required: true },
  matchScore: { type: Number, required: true },
  embeddingScore: { type: Number, required: true },
  skillOverlapScore: { type: Number, required: true },
  llmAdjustment: { type: Number, default: 0 },
  matchedSkills: { type: [String], default: [] },
  missingSkills: { type: [String], default: [] },
  explanation: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

MatchSchema.index({ candidateId: 1, jobId: 1 }, { unique: true });

export const Match: Model<IMatch> =
  mongoose.models.Match || mongoose.model<IMatch>("Match", MatchSchema);

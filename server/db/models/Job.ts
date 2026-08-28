import mongoose, { Schema, Model, Document } from "mongoose";

export interface IJob extends Document {
  title: string;
  company: string;
  description: string;
  requirements: string[];
  location: string;
  remoteType: "remote" | "onsite" | "hybrid";
  salaryRangePKR?: { min: number; max: number };
  seniority: "internship" | "entry" | "mid" | "senior";
  source: "seed" | "manual";
  embedding?: number[];
  createdAt: Date;
}

const JobSchema = new Schema<IJob>({
  title: { type: String, required: true },
  company: { type: String, required: true },
  description: { type: String, required: true },
  requirements: { type: [String], default: [] },
  location: { type: String, required: true },
  remoteType: { type: String, enum: ["remote", "onsite", "hybrid"], required: true },
  salaryRangePKR: {
    min: Number,
    max: Number
  },
  seniority: {
    type: String,
    enum: ["internship", "entry", "mid", "senior"],
    required: true
  },
  source: { type: String, enum: ["seed", "manual"], default: "seed" },
  // Indexed via Atlas Vector Search (see /docs/atlas-vector-search-setup.md)
  embedding: { type: [Number], default: undefined },
  createdAt: { type: Date, default: Date.now }
});

export const Job: Model<IJob> = mongoose.models.Job || mongoose.model<IJob>("Job", JobSchema);

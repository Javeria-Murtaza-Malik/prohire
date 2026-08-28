import mongoose, { Schema, Model, Document, Types } from "mongoose";

export interface IApplication extends Document {
  candidateId: Types.ObjectId;
  jobId: Types.ObjectId;
  status: "draft" | "approved" | "rejected_by_candidate" | "sent";
  coverLetter: string;
  factCheckNotes: string[]; // claims verified against profile, for transparency
  approvedAt?: Date;
  createdAt: Date;
}

const ApplicationSchema = new Schema<IApplication>({
  candidateId: { type: Schema.Types.ObjectId, ref: "CandidateProfile", required: true },
  jobId: { type: Schema.Types.ObjectId, ref: "Job", required: true },
  status: {
    type: String,
    enum: ["draft", "approved", "rejected_by_candidate", "sent"],
    default: "draft"
  },
  coverLetter: { type: String, required: true },
  factCheckNotes: { type: [String], default: [] },
  approvedAt: Date,
  createdAt: { type: Date, default: Date.now }
});

export const Application: Model<IApplication> =
  mongoose.models.Application ||
  mongoose.model<IApplication>("Application", ApplicationSchema);

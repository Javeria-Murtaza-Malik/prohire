import mongoose, { Schema, Model, Document, Types } from "mongoose";

interface IRoadmapStep {
  order: number;
  title: string;
  description: string;
  estimatedWeeks: number;
  resources: { name: string; url?: string; type: "course" | "project" | "reading" }[];
}

export interface ICareerRoadmap extends Document {
  candidateId: Types.ObjectId;
  skillGaps: string[];
  suggestedRoles: string[];
  roadmapSteps: IRoadmapStep[];
  generatedAt: Date;
}

const RoadmapStepSchema = new Schema<IRoadmapStep>(
  {
    order: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    estimatedWeeks: { type: Number, required: true },
    resources: [
      {
        name: String,
        url: String,
        type: { type: String, enum: ["course", "project", "reading"] }
      }
    ]
  },
  { _id: false }
);

const CareerRoadmapSchema = new Schema<ICareerRoadmap>({
  candidateId: { type: Schema.Types.ObjectId, ref: "CandidateProfile", required: true },
  skillGaps: { type: [String], default: [] },
  suggestedRoles: { type: [String], default: [] },
  roadmapSteps: [RoadmapStepSchema],
  generatedAt: { type: Date, default: Date.now }
});

export const CareerRoadmap: Model<ICareerRoadmap> =
  mongoose.models.CareerRoadmap ||
  mongoose.model<ICareerRoadmap>("CareerRoadmap", CareerRoadmapSchema);

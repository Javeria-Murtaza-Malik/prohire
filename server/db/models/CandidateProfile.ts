import mongoose, { Schema, Model, Document, Types } from "mongoose";

interface IEducation {
  degree: string;
  institution: string;
  fieldOfStudy?: string;
  startYear?: number;
  endYear?: number;
  gpa?: string;
}

interface IExperience {
  title: string;
  company: string;
  startDate?: string;
  endDate?: string;
  description?: string;
  isCurrent?: boolean;
}

interface IProject {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
}

interface ICertification {
  name: string;
  issuer: string;
  year?: number;
}

interface IResumeParsed {
  skills: string[];
  experience: string[];
  education: string[];
  achievements: string[];
  missingKeywords: string[];
  suggestions: string[];
  rawTextExcerpt?: string;
}

export interface ICandidateProfile extends Document {
  userId: Types.ObjectId;
  fullName: string;
  university?: string;
  education: IEducation[];
  skills: string[];
  experience: IExperience[];
  projects: IProject[];
  certifications: ICertification[];
  githubUrl?: string;
  linkedinUrl?: string;
  portfolioUrl?: string;
  preferredRole?: string;
  preferredLocation?: string;
  remotePref?: "remote" | "onsite" | "hybrid" | "no_preference";
  expectedSalaryPKR?: number;
  availability?: string;
  resumeFileUrl?: string;
  resumeParsed?: IResumeParsed;
  profileEmbedding?: number[];
  createdAt: Date;
  updatedAt: Date;
}

const EducationSchema = new Schema<IEducation>(
  {
    degree: { type: String, required: true },
    institution: { type: String, required: true },
    fieldOfStudy: String,
    startYear: Number,
    endYear: Number,
    gpa: String
  },
  { _id: false }
);

const ExperienceSchema = new Schema<IExperience>(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    startDate: String,
    endDate: String,
    description: String,
    isCurrent: { type: Boolean, default: false }
  },
  { _id: false }
);

const ProjectSchema = new Schema<IProject>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    technologies: [String],
    link: String
  },
  { _id: false }
);

const CertificationSchema = new Schema<ICertification>(
  {
    name: { type: String, required: true },
    issuer: { type: String, required: true },
    year: Number
  },
  { _id: false }
);

const ResumeParsedSchema = new Schema<IResumeParsed>(
  {
    skills: [String],
    experience: [String],
    education: [String],
    achievements: [String],
    missingKeywords: [String],
    suggestions: [String],
    rawTextExcerpt: String
  },
  { _id: false }
);

const CandidateProfileSchema = new Schema<ICandidateProfile>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    fullName: { type: String, required: true },
    university: String,
    education: [EducationSchema],
    skills: { type: [String], default: [] },
    experience: [ExperienceSchema],
    projects: [ProjectSchema],
    certifications: [CertificationSchema],
    githubUrl: String,
    linkedinUrl: String,
    portfolioUrl: String,
    preferredRole: String,
    preferredLocation: String,
    remotePref: {
      type: String,
      enum: ["remote", "onsite", "hybrid", "no_preference"],
      default: "no_preference"
    },
    expectedSalaryPKR: Number,
    availability: String,
    resumeFileUrl: String,
    resumeParsed: ResumeParsedSchema,
    // 1536-dim embedding vector (matches DashScope text-embedding-v3 default dimension).
    // Indexed via an Atlas Vector Search index created directly in Atlas UI/CLI
    // (see /docs/atlas-vector-search-setup.md), not via Mongoose.
    profileEmbedding: { type: [Number], default: undefined }
  },
  { timestamps: true }
);

export const CandidateProfile: Model<ICandidateProfile> =
  mongoose.models.CandidateProfile ||
  mongoose.model<ICandidateProfile>("CandidateProfile", CandidateProfileSchema);

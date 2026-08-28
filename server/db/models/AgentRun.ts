import mongoose, { Schema, Model, Document, Types } from "mongoose";

/**
 * Every single agent invocation across the platform is recorded here:
 * which agent ran, what structured input it received, what structured
 * output it produced, which model served the request, and how long it took.
 *
 * This is the audit trail that proves the system is composed of real,
 * tool-using, stateful agents rather than freeform chatbot calls -
 * every output is schema-validated before being written here.
 */
export interface IAgentRun extends Document {
  sessionId?: Types.ObjectId; // optional: ties to an interview session, match run, etc.
  candidateId?: Types.ObjectId;
  agentName:
    | "resumeAgent"
    | "jobMatchAgent"
    | "applicationAgent"
    | "interviewAgent"
    | "careerAgent"
    | "orchestrator";
  input: Record<string, unknown>;
  output: Record<string, unknown>;
  modelUsed: string;
  latencyMs: number;
  success: boolean;
  errorMessage?: string;
  createdAt: Date;
}

const AgentRunSchema = new Schema<IAgentRun>({
  sessionId: { type: Schema.Types.ObjectId },
  candidateId: { type: Schema.Types.ObjectId, ref: "CandidateProfile" },
  agentName: {
    type: String,
    enum: [
      "resumeAgent",
      "jobMatchAgent",
      "applicationAgent",
      "interviewAgent",
      "careerAgent",
      "orchestrator"
    ],
    required: true
  },
  input: { type: Schema.Types.Mixed, required: true },
  output: { type: Schema.Types.Mixed, required: true },
  modelUsed: { type: String, required: true },
  latencyMs: { type: Number, required: true },
  success: { type: Boolean, required: true },
  errorMessage: String,
  createdAt: { type: Date, default: Date.now }
});

export const AgentRun: Model<IAgentRun> =
  mongoose.models.AgentRun || mongoose.model<IAgentRun>("AgentRun", AgentRunSchema);

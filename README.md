# ProHire — Your AI Career Agent

*From Profile to Placement.* An AI-native career platform for the Pakistani job market, built
around six coordinated agents rather than a single chatbot wrapper.

## What's included (complete MVP)

**6 Agents** (`/server/agents`)
- `resumeAgent.ts` — Resume Intelligence Agent: parses CVs into structured data, never invents claims
- `jobMatchAgent.ts` — Job Discovery Agent: hybrid score (40% embedding similarity + 40% rule-based skill overlap + 20% LLM qualitative adjustment), fully explainable
- `applicationAgent.ts` — Application Agent: generates cover letters with a post-generation fact-check pass against the verified profile; requires human approval before "sending"
- `interviewAgent.ts` — **the flagship**: plans role-specific questions, adaptively decides to follow up or move on after every answer, and produces a final rubric-based evaluation
- `careerAgent.ts` — Career Intelligence Agent: builds a roadmap from accumulated match/interview history, not a single session
- `orchestrator.ts` — deterministic state machine coordinating the journey (not an LLM call — intentionally auditable)

**Full user journey (UI)**
Landing → Signup/Login → Profile (+ resume upload) → Job Matches → Application Prep (+ approval gate) → Interview Room (text + voice) → Interview Report (radar chart) → Career Roadmap

**Audit trail**: every single agent call is logged to the `agentRuns` MongoDB collection with input, output, model used, latency, and success/failure — this is your proof of genuine agentic execution for judges.

## Setup

```bash
# 1. Install dependencies
cd prohire
npm install

# 2. MongoDB Atlas
#    Create a free M0 cluster at https://cloud.mongodb.com
#    Create a DB user, allow your IP (or 0.0.0.0/0 for the demo)
#    Copy the connection string

# 3. Environment
cp .env.example .env.local
```

Edit `.env.local`:
```
MONGODB_URI=<your Atlas connection string>
NEXTAUTH_SECRET=<run: openssl rand -base64 32>
NEXTAUTH_URL=http://localhost:3000
LLM_PROVIDER=mock
```

Keep `LLM_PROVIDER=mock` to run the entire app with zero API keys — every agent
returns realistic, schema-shaped mock data. Switch to `dashscope` + add
`DASHSCOPE_API_KEY` later with no code changes.

```bash
# 4. Seed Pakistan-relevant job postings (required before Job Matching works)
npm run seed

# 5. Run
npm run dev
```

Visit **http://localhost:3000**

## Demo walkthrough (matches the 4-minute pitch script)

1. Sign up → redirected to Profile
2. Fill in profile (name, skills, one experience entry, one project) → Save
3. Optionally upload a resume PDF/DOCX → watch the Resume Intelligence Agent extract skills live
4. Go to **Job Matches** → click "Run Job Discovery Agent" → see scored, explainable matches
5. Expand a match → "Prepare Application" → review the generated cover letter and fact-check notes → Approve
6. From a job match → "Practice Interview" → choose Text or Voice mode → answer a question shallowly on purpose → watch the adaptive follow-up fire
7. Finish the interview → **View My Report** → radar chart + strengths/weaknesses/feedback
8. **Generate My Career Roadmap** → sequenced skill plan with resources

## Switching to real DashScope calls

```
LLM_PROVIDER=dashscope
DASHSCOPE_API_KEY=<your key>
```
No other changes — every agent calls the same `completeStructured()` function
in `server/llm/client.ts` regardless of provider.

## Project structure

```
/app                        Next.js App Router pages + API routes
/app/api/...                Thin route handlers — auth, validation, calling /server
/server/agents               The 6 agents + orchestrator
/server/llm                  Provider-agnostic LLM client, Zod schemas, mock provider
/server/db/models            Mongoose models (9 collections)
/server/embeddings           Embedding generation + cosine similarity
/server/resume               PDF/DOCX text extraction
/server/security             Rate limiting, file validation
/components                  Shared UI (Navbar, charts, agent status pills, job cards)
/scripts/seedJobs.ts         Pakistan-relevant seed job dataset
```

## Known limitations (intentional MVP scope)

- Job dataset is curated/seeded, not scraped live — stated explicitly, this is by design so agent quality gets the engineering time instead
- Voice mode uses the browser's Web Speech API (Chrome recommended) rather than a backend ASR/TTS service — zero cost, works for the demo
- No recruiter-side portal, payments, or mass-apply automation — deliberately out of scope
- Atlas Vector Search index must be created manually in the Atlas UI for the `embedding` fields on `jobs` and `candidateProfiles` if you want true vector search in production; the app works correctly without it since matching also uses rule-based skill overlap and LLM scoring

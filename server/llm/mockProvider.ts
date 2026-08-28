import { CompletionRequest } from "./client";

/**
 * A deterministic mock provider so the entire agent pipeline can be built,
 * run, and demoed locally before a DashScope API key is wired up.
 * It inspects the system prompt to figure out which agent is calling
 * and returns a plausible, schema-shaped JSON response.
 *
 * Switch LLM_PROVIDER=dashscope in .env.local once a real key is ready -
 * no other code changes needed, since every agent calls completeStructured()
 * the same way regardless of provider.
 */
export async function mockComplete(req: CompletionRequest): Promise<string> {
  const sys = req.systemPrompt.toLowerCase();

  // simulate network latency so loading states can be tested
  await new Promise((r) => setTimeout(r, 400));

  if (sys.includes("resume intelligence")) {
    return JSON.stringify({
      skills: ["JavaScript", "React", "Node.js", "MongoDB", "Git"],
      experience: ["Frontend Developer Intern at a local Karachi startup (6 months)"],
      education: ["BS Computer Science, FAST-NUCES"],
      achievements: ["Built and shipped a full-stack e-commerce project as final year project"],
      missingKeywords: ["TypeScript", "unit testing", "CI/CD"],
      suggestions: [
        "Quantify project impact with numbers (e.g. users served, performance improvements).",
        "Add a dedicated skills section grouping languages, frameworks, and tools.",
        "Mention TypeScript experience if any, it's frequently required for the roles you're targeting."
      ]
    });
  }

  if (sys.includes("job discovery") || sys.includes("job matching")) {
    return JSON.stringify({
      llmAdjustment: 4,
      matchedSkills: ["React", "JavaScript", "Git"],
      missingSkills: ["TypeScript", "Docker"],
      explanation:
        "Strong overlap on core frontend skills and relevant internship experience. The role lists TypeScript and Docker as preferred, not required, which slightly limits an otherwise strong fit."
    });
  }

  if (sys.includes("application agent") || sys.includes("cover letter")) {
    return JSON.stringify({
      coverLetter:
        "Dear Hiring Team,\n\nI'm excited to apply for this role. During my internship, I worked directly with React and Node.js to ship features used by real customers, and my final year project involved building a complete e-commerce platform from scratch. I'd welcome the chance to bring that hands-on experience to your team.\n\nRegards,\n[Candidate Name]",
      claimsUsed: [
        { claim: "worked with React and Node.js during internship", verifiedAgainstProfileField: "experience[0]" },
        { claim: "built a full-stack e-commerce platform", verifiedAgainstProfileField: "projects[0]" }
      ]
    });
  }

  if (sys.includes("interview question")) {
    return JSON.stringify({
      questions: [
        { questionText: "Walk me through how React's virtual DOM improves rendering performance.", type: "technical", topic: "React rendering", difficulty: 3 },
        { questionText: "Tell me about a time you disagreed with a teammate on a technical decision.", type: "behavioral", topic: "conflict resolution", difficulty: 2 },
        { questionText: "In your e-commerce project, how did you handle state management across components?", type: "project", topic: "state management", difficulty: 3 },
        { questionText: "How would you optimize an API endpoint that's responding slowly under load?", type: "technical", topic: "performance", difficulty: 4 }
      ]
    });
  }

  if (sys.includes("evaluate this interview answer") || sys.includes("answer evaluation")) {
    return JSON.stringify({
      depthScore: 3,
      action: "follow_up",
      notes: "Answer was correct but surface-level, did not mention reconciliation or the fiber architecture.",
      followUpQuestion: "Can you go one level deeper - what specifically changed with React Fiber that enabled this?"
    });
  }

  if (sys.includes("final interview evaluation") || sys.includes("overall interview score")) {
    return JSON.stringify({
      technical: 72,
      communication: 78,
      problemSolving: 68,
      relevance: 80,
      confidence: 65,
      overall: 73,
      strengths: [
        "Clear, structured answers to behavioral questions",
        "Solid grasp of fundamental React concepts"
      ],
      weaknesses: [
        "Technical answers stayed surface-level on follow-up",
        "Occasional hedging language reduced perceived confidence"
      ],
      feedback:
        "You communicate clearly and your project experience is genuine, which came through well. To strengthen technical depth, practice explaining not just what a concept does but why it works that way - interviewers probe for this with follow-ups. Reducing filler phrases like 'I think maybe' will also make your answers land with more authority."
    });
  }

  if (sys.includes("career intelligence") || sys.includes("roadmap")) {
    return JSON.stringify({
      skillGaps: ["TypeScript", "System design fundamentals", "Testing (Jest/RTL)"],
      suggestedRoles: ["Frontend Developer", "Full Stack Developer (Junior)"],
      roadmapSteps: [
        {
          order: 1,
          title: "Learn TypeScript fundamentals",
          description: "Convert one existing React project to TypeScript to learn by doing.",
          estimatedWeeks: 2,
          resources: [{ name: "TypeScript Handbook", type: "reading" }]
        },
        {
          order: 2,
          title: "Add automated tests to a project",
          description: "Add Jest + React Testing Library tests to your e-commerce project.",
          estimatedWeeks: 2,
          resources: [{ name: "Testing Library docs", type: "reading" }]
        },
        {
          order: 3,
          title: "Study system design basics",
          description: "Understand basic scalability concepts relevant to junior interviews.",
          estimatedWeeks: 3,
          resources: [{ name: "freeCodeCamp system design intro", type: "course" }]
        }
      ]
    });
  }

  return JSON.stringify({ note: "mock provider: no matching agent pattern found" });
}

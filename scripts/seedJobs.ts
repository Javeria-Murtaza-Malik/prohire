/**
 * Run with: npm run seed
 * Populates a curated, Pakistan-relevant job dataset and generates
 * embeddings for each posting so the Job Matching Agent has real
 * data to work against via vector similarity.
 */
import { config } from "dotenv";
config({ path: ".env.local" });
import mongoose from "mongoose";
import { Job } from "../server/db/models/Job";
import { generateEmbedding } from "../server/embeddings/embed";

const SEED_JOBS = [
  {
    title: "Frontend Developer (React)",
    company: "Bazaar Technologies",
    description:
      "We're looking for a Frontend Developer to build customer-facing features for our B2B e-commerce platform serving retailers across Pakistan. You'll work closely with our design and backend teams using React and TypeScript.",
    requirements: ["React", "JavaScript", "TypeScript", "CSS", "Git"],
    location: "Karachi, Pakistan",
    remoteType: "hybrid" as const,
    salaryRangePKR: { min: 80000, max: 150000 },
    seniority: "entry" as const
  },
  {
    title: "Junior Full Stack Developer",
    company: "Systems Limited",
    description:
      "Join our engineering team building enterprise applications for international clients. Strong fundamentals in JavaScript and databases required, MERN stack experience preferred.",
    requirements: ["JavaScript", "Node.js", "MongoDB", "React", "REST APIs"],
    location: "Lahore, Pakistan",
    remoteType: "onsite" as const,
    salaryRangePKR: { min: 90000, max: 160000 },
    seniority: "entry" as const
  },
  {
    title: "Software Engineering Intern",
    company: "Careem",
    description:
      "6-month internship for final-year CS students. Work on real production code alongside senior engineers, with mentorship and a possible full-time conversion at the end.",
    requirements: ["Python", "Git", "Data Structures", "Algorithms"],
    location: "Karachi, Pakistan",
    remoteType: "onsite" as const,
    salaryRangePKR: { min: 40000, max: 60000 },
    seniority: "internship" as const
  },
  {
    title: "Remote Frontend Developer",
    company: "Arbisoft",
    description:
      "Fully remote role building web applications for US-based clients. Looking for someone comfortable with React, TypeScript, and working in an agile, async-first team.",
    requirements: ["React", "TypeScript", "Redux", "Jest"],
    location: "Remote (Pakistan-based)",
    remoteType: "remote" as const,
    salaryRangePKR: { min: 130000, max: 220000 },
    seniority: "mid" as const
  },
  {
    title: "Backend Developer (Node.js)",
    company: "TPS Worldwide",
    description:
      "Build and maintain scalable APIs powering our fintech products. Experience with Node.js, databases, and understanding of security best practices required.",
    requirements: ["Node.js", "Express", "MongoDB", "REST APIs", "Docker"],
    location: "Islamabad, Pakistan",
    remoteType: "hybrid" as const,
    salaryRangePKR: { min: 100000, max: 180000 },
    seniority: "mid" as const
  },
  {
    title: "Data Analyst (Fresh Graduate)",
    company: "Jazz",
    description:
      "Entry-level data analyst role for fresh graduates with strong Excel and SQL skills. Training provided on internal BI tools.",
    requirements: ["SQL", "Excel", "Data Visualization", "Python"],
    location: "Islamabad, Pakistan",
    remoteType: "onsite" as const,
    salaryRangePKR: { min: 60000, max: 100000 },
    seniority: "entry" as const
  },
  {
    title: "Freelance WordPress Developer",
    company: "Local Client Network",
    description:
      "Ongoing freelance opportunities building and customizing WordPress sites for small Pakistani businesses. Flexible hours, project-based pay.",
    requirements: ["WordPress", "PHP", "CSS", "JavaScript"],
    location: "Remote (Pakistan-based)",
    remoteType: "remote" as const,
    salaryRangePKR: { min: 30000, max: 80000 },
    seniority: "entry" as const
  },
  {
    title: "Mobile App Developer (React Native)",
    company: "Zameen.com",
    description:
      "Build features for Pakistan's largest property portal's mobile app, used by millions of users. React Native experience and an eye for UX required.",
    requirements: ["React Native", "JavaScript", "REST APIs", "Git"],
    location: "Lahore, Pakistan",
    remoteType: "hybrid" as const,
    salaryRangePKR: { min: 110000, max: 190000 },
    seniority: "mid" as const
  }
];

async function seed() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI not set");

  await mongoose.connect(uri);
  console.log("Connected to MongoDB. Seeding jobs...");

  await Job.deleteMany({ source: "seed" });

  for (const jobData of SEED_JOBS) {
    const embeddingText = `${jobData.title} ${jobData.description} ${jobData.requirements.join(", ")}`;
    const embedding = await generateEmbedding(embeddingText);
    await Job.create({ ...jobData, source: "seed", embedding });
    console.log(`Seeded: ${jobData.title} at ${jobData.company}`);
  }

  console.log(`Done. ${SEED_JOBS.length} jobs seeded.`);
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});

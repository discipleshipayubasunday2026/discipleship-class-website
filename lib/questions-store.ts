import { promises as fs } from "fs";
import path from "path";

export type QuestionRecord = {
  id: string;
  name: string;
  email: string;
  subject: string;
  topic: string;
  question: string;
  category: string;
  urgency: string;
  summary: string;
  status: string;
  createdAt: string;
  aiResponse?: string;
};

const DATA_FILE = path.join(process.cwd(), "data", "questions.json");

const seedQuestions: QuestionRecord[] = [
  {
    id: "sample-1",
    name: "Grace",
    email: "grace@example.com",
    subject: "Understanding Faith",
    topic: "Faith and Christian Growth",
    question: "I don't fully understand the relationship between faith and works. Can you explain it in a simple and practical way?",
    category: "Faith",
    urgency: "Medium",
    summary: "Questions about how faith and works relate in Christian life.",
    status: "Open",
    createdAt: "2026-09-10T09:00:00.000Z",
    aiResponse:
      "Faith is the foundation of the Christian life, and works are the visible expression of that faith. The Bible teaches that genuine faith leads to obedience, love, and good fruit, but salvation is not earned by works. The key is to see faith as trust in Christ, and works as the natural result of that trust. As you grow, pray for wisdom and study Scripture carefully with a trusted translation.",
  },
  {
    id: "sample-2",
    name: "Daniel",
    email: "daniel@example.com",
    subject: "Prayer and Guidance",
    topic: "Prayer",
    question: "How can I pray more consistently when I feel distracted, tired, or discouraged?",
    category: "Prayer",
    urgency: "High",
    summary: "Looking for practical guidance on consistent prayer and discernment.",
    status: "In Progress",
    createdAt: "2026-09-08T09:00:00.000Z",
    aiResponse:
      "Consistency in prayer often begins with the decision to pray honestly, not perfectly. Start small, set a regular rhythm, and bring your real heart before God. Even short prayers can become a habit of trust and dependence, especially when life feels busy or weary.",
  },
  {
    id: "sample-3",
    name: "Maya",
    email: "maya@example.com",
    subject: "Christian Living",
    topic: "Christian Living",
    question: "What does it look like to live out the Christian life in ordinary daily situations?",
    category: "Christian Living",
    urgency: "Low",
    summary: "Seeking examples of everyday obedience and a Christlike life.",
    status: "Resolved",
    createdAt: "2026-09-02T09:00:00.000Z",
    aiResponse:
      "Ordinary Christian living is marked by love, humility, and obedience. It often shows up in how we respond to others, how we handle conflict, and whether our actions match our words. God forms Christlikeness through steady faithfulness, prayer, and Scripture.",
  },
];

async function ensureDataFile() {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });

  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, JSON.stringify(seedQuestions, null, 2), "utf8");
  }
}

export async function readQuestions(): Promise<QuestionRecord[]> {
  await ensureDataFile();

  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    const parsed = JSON.parse(raw) as QuestionRecord[];

    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
  } catch {
    // fall through to seed data if the file is corrupted or empty
  }

  await fs.writeFile(DATA_FILE, JSON.stringify(seedQuestions, null, 2), "utf8");
  return seedQuestions;
}

export async function appendQuestion(question: QuestionRecord) {
  const existing = await readQuestions();
  const next = [question, ...existing];
  await fs.writeFile(DATA_FILE, JSON.stringify(next, null, 2), "utf8");
  return question;
}

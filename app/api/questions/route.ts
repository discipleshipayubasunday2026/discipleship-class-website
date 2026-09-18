import { NextRequest, NextResponse } from "next/server";
import { appendQuestion } from "../../../lib/questions-store";

const allowedCategories = [
  "Bible Study",
  "Faith",
  "Prayer",
  "Christian Living",
  "Discipleship",
  "Church/Class",
  "Assignment",
  "General",
] as const;

const allowedUrgency = ["Low", "Medium", "High", "Critical"] as const;

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const { name, email, subject, topic, question } = payload ?? {};

    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }

    if (!email || typeof email !== "string" || !/\S+@\S+\.\S+/.test(email.trim())) {
      return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
    }

    if (!subject || typeof subject !== "string" || !subject.trim()) {
      return NextResponse.json({ error: "Question subject is required." }, { status: 400 });
    }

    if (!question || typeof question !== "string" || !question.trim()) {
      return NextResponse.json({ error: "Question is required." }, { status: 400 });
    }

    if (question.trim().length < 20) {
      return NextResponse.json({ error: "Please add more detail so the question can be helpful." }, { status: 400 });
    }

    if (question.trim().length > 2000) {
      return NextResponse.json({ error: "Question must be 2000 characters or fewer." }, { status: 400 });
    }

    const normalizedTopic = typeof topic === "string" ? topic.trim() : "";
    const derivedCategory = (() => {
      if (normalizedTopic && allowedCategories.includes(normalizedTopic as (typeof allowedCategories)[number])) {
        return normalizedTopic;
      }

      const normalizedSubject = subject.trim().toLowerCase();

      if (normalizedSubject.includes("faith")) return "Faith";
      if (normalizedSubject.includes("prayer")) return "Prayer";
      if (normalizedSubject.includes("assignment")) return "Assignment";
      if (normalizedSubject.includes("church") || normalizedSubject.includes("class")) return "Church/Class";
      if (normalizedSubject.includes("bible")) return "Bible Study";
      if (normalizedSubject.includes("discipleship")) return "Discipleship";
      if (normalizedSubject.includes("living") || normalizedSubject.includes("life")) return "Christian Living";

      return "General";
    })();

    const derivedUrgency = question.trim().length > 600 ? "High" : "Medium";

    const savedQuestion = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      topic: normalizedTopic || derivedCategory,
      question: question.trim(),
      category: derivedCategory,
      urgency: derivedUrgency,
      summary: `Question submitted about ${subject.trim()}.`,
      status: "Open",
      createdAt: new Date().toISOString(),
    };

    await appendQuestion(savedQuestion);

    return NextResponse.json(
      {
        success: true,
        message: "Question submitted successfully.",
        question: savedQuestion,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Question submission error:", error);
    return NextResponse.json(
      { error: "Something went wrong while submitting your question. Please try again." },
      { status: 500 },
    );
  }
}

"use client";

import { FormEvent, useState } from "react";

const availableTopics = [
  "General",
  "Bible Study",
  "Faith",
  "Prayer",
  "Christian Living",
  "Discipleship",
  "Church/Class",
  "Assignment",
] as const;

const initialForm = {
  name: "",
  email: "",
  subject: "",
  topic: "General",
  question: "",
};

export default function AskQuestionPage() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors: Record<string, string> = {};

    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!form.email.trim()) nextErrors.email = "Email is required.";
    if (!/\S+@\S+\.\S+/.test(form.email)) nextErrors.email = "Please enter a valid email address.";
    if (!form.subject.trim()) nextErrors.subject = "Question subject is required.";
    if (!form.question.trim()) nextErrors.question = "Question is required.";
    if (form.question.trim().length < 20) nextErrors.question = "Please provide a bit more detail so we can help you well.";
    if (form.question.trim().length > 2000) nextErrors.question = "Question must be 2000 characters or fewer.";

    return nextErrors;
  };

  const handleChange = (field: keyof typeof initialForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setIsSubmitting(true);
    setSubmitted(false);

    try {
      const response = await fetch("/api/questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong while submitting your question.");
      }

      setSubmitted(true);
      setForm(initialForm);
      setErrors({});
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong while submitting your question. Please try again.";
      setErrors({ form: message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Ask a question</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
          We are here to help you grow in wisdom
        </h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <form onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">Name</label>
              <input
                id="name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                placeholder="John Doe"
              />
              {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">Email</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                placeholder="john@example.com"
              />
              {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-700">Question subject</label>
            <input
              id="subject"
              value={form.subject}
              onChange={(e) => handleChange("subject", e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
              placeholder="Understanding Faith"
            />
            {errors.subject && <p className="mt-2 text-sm text-red-600">{errors.subject}</p>}
          </div>

          <div className="mt-6">
            <label htmlFor="topic" className="mb-2 block text-sm font-medium text-slate-700">Lesson / Topic</label>
            <select
              id="topic"
              value={form.topic}
              onChange={(e) => handleChange("topic", e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
            >
              {availableTopics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-6">
            <label htmlFor="question" className="mb-2 block text-sm font-medium text-slate-700">Question</label>
            <textarea
              id="question"
              value={form.question}
              onChange={(e) => handleChange("question", e.target.value)}
              rows={8}
              maxLength={2000}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
              placeholder="I don't fully understand the relationship between faith and works. Can you explain it?"
            />
            <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
              <span>{form.question.length}/2000 characters</span>
              <span>Helpful, specific questions get better guidance.</span>
            </div>
            {errors.question && <p className="mt-2 text-sm text-red-600">{errors.question}</p>}
          </div>

          {errors.form && <p className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{errors.form}</p>}

          {submitted && (
            <p className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
              Your question was submitted successfully. The discipleship guide will respond as soon as it is ready.
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:bg-emerald-300"
          >
            {isSubmitting ? "Submitting..." : "Ask AI for Guidance"}
          </button>
        </form>

        <aside className="rounded-[2rem] border border-slate-200 bg-slate-900 p-6 text-white shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Helpful notes</p>
          <h2 className="mt-4 text-3xl font-bold">What happens next?</h2>
          <ul className="mt-8 space-y-5 text-slate-200">
            {[
              "Share the question as clearly as possible.",
              "Include the lesson or topic if it helps provide context.",
              "The guidance is educational and Christ-centered.",
              "Questions may be categorized, summarized, and tracked later.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}

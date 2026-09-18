"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export type DashboardQuestion = {
  id: string;
  subject: string;
  summary: string;
  category: string;
  urgency: string;
  status: string;
  createdAt: string;
};

const filters = ["All", "Open", "In Progress", "Resolved"] as const;
type Filter = (typeof filters)[number];

export function DashboardQuestions({ questions }: { questions: DashboardQuestion[] }) {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const visibleQuestions = useMemo(() => {
    if (activeFilter === "All") {
      return questions;
    }

    return questions.filter((question) => question.status === activeFilter);
  }, [activeFilter, questions]);

  return (
    <div className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="text-2xl font-bold text-slate-900">Recent questions</h2>
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                filter === activeFilter ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {visibleQuestions.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-10 text-center">
            <p className="text-lg font-semibold text-slate-900">No questions match this filter.</p>
            <p className="mt-2 text-sm text-slate-600">Try another status or submit a new question.</p>
          </div>
        ) : (
          visibleQuestions.map((question) => (
            <div key={question.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{question.subject}</h3>
                  <p className="mt-2 text-sm text-slate-600">{question.summary}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-700">{question.category}</span>
                  <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700">{question.urgency}</span>
                  <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">{question.status}</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
                <span>{new Date(question.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                <Link href={`/requests/${question.id}`} className="font-semibold text-emerald-700 hover:text-emerald-800">
                  View Details
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

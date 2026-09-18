import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { DashboardQuestions } from "../../components/dashboard-questions";
import { LogoutButton } from "../../components/logout-button";
import { readQuestions } from "../../lib/questions-store";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("discipleship_session");

  if (!session?.value) {
    redirect("/login");
  }

  const questions = await readQuestions();
  const userName = session.value === "demo-admin" ? "Grace" : "Disciple";
  const totalQuestions = questions.length;
  const openCount = questions.filter((question) => question.status === "Open").length;
  const inProgressCount = questions.filter((question) => question.status === "In Progress").length;
  const resolvedCount = questions.filter((question) => question.status === "Resolved").length;

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Dashboard</p>
          <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-900">Welcome back, {userName}</h1>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/ask-question" className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800">
            Ask Your First Question
          </Link>
          <LogoutButton />
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "Total Questions", value: String(totalQuestions), tone: "bg-emerald-50 text-emerald-700" },
          { label: "Open", value: String(openCount), tone: "bg-blue-50 text-blue-700" },
          { label: "In Progress", value: String(inProgressCount), tone: "bg-amber-50 text-amber-700" },
          { label: "Resolved", value: String(resolvedCount), tone: "bg-violet-50 text-violet-700" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${stat.tone}`}>{stat.label}</div>
            <p className="mt-5 text-3xl font-black text-slate-900">{stat.value}</p>
          </div>
        ))}
      </div>

      <DashboardQuestions questions={questions.map((question) => ({
        id: question.id,
        subject: question.subject,
        summary: question.summary,
        category: question.category,
        urgency: question.urgency,
        status: question.status,
        createdAt: question.createdAt,
      }))} />
    </div>
  );
}

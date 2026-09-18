import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { LogoutButton } from "../../../components/logout-button";
import { readQuestions } from "../../../lib/questions-store";

export default async function RequestDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const cookieStore = await cookies();
  const session = cookieStore.get("discipleship_session");

  if (!session?.value) {
    redirect("/login");
  }

  const { id } = await params;
  const questions = await readQuestions();
  const question = questions.find((item) => item.id === id);

  if (!question) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="text-3xl font-black text-slate-900">Request not found</h1>
        <p className="mt-4 text-slate-600">This request could not be found or may no longer be available.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Request details</p>
          <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-900">{question.subject}</h1>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/dashboard" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Back to Dashboard</Link>
          <Link href="/ask-question" className="rounded-full bg-emerald-700 px-4 py-2 text-sm font-semibold text-white">Ask Another Question</Link>
          <LogoutButton />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">{question.topic}</span>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">{question.category}</span>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">{question.urgency}</span>
              <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">{question.status}</span>
            </div>

            <div className="space-y-6 text-slate-600">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Submitted</p>
                <p className="mt-2 text-base">{new Date(question.createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Question</p>
                <p className="mt-2 text-lg leading-8">{question.question}</p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">AI Discipleship Guide</p>
                <p className="mt-2 text-lg leading-8 text-slate-700">{question.aiResponse ?? "This question is awaiting a discipleship response."}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-slate-900 p-6 text-white shadow-sm">
          <h2 className="text-2xl font-bold">AI Summary</h2>
          <p className="mt-4 text-base leading-7 text-slate-200">{question.summary}</p>

          <div className="mt-8 space-y-4 text-sm">
            <div>
              <p className="text-slate-400">Category</p>
              <p className="mt-1 font-semibold text-white">{question.category}</p>
            </div>
            <div>
              <p className="text-slate-400">Urgency</p>
              <p className="mt-1 font-semibold text-white">{question.urgency}</p>
            </div>
            <div>
              <p className="text-slate-400">Status</p>
              <p className="mt-1 font-semibold text-white">{question.status}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

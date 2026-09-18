import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { readQuestions } from "../../lib/questions-store";

export default async function ProfilePage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("discipleship_session");

  if (!session?.value) {
    redirect("/login");
  }

  const questions = await readQuestions();
  const name = session.value === "demo-admin" ? "Grace" : "Disciple";
  const email = "grace@example.com";
  const recent = questions.slice(0, 3);

  return (
    <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Profile</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900">Your discipleship profile</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-700 text-2xl font-bold text-white">
            {name.charAt(0)}
          </div>

          <h2 className="mt-6 text-2xl font-bold text-slate-900">{name}</h2>
          <p className="mt-2 text-slate-600">{email}</p>

          <div className="mt-8 space-y-4 text-sm text-slate-600">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-slate-500">Member since</p>
              <p className="mt-1 font-semibold text-slate-900">September 2026</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-slate-500">Questions submitted</p>
              <p className="mt-1 font-semibold text-slate-900">{questions.length}</p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Recent activity</h2>
          <div className="mt-6 space-y-4">
            {recent.map((question) => (
              <div key={question.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold text-slate-900">{question.subject}</h3>
                  <span className="rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-700">
                    {question.status}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{question.summary}</p>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                  <span>{question.category}</span>
                  <Link href={`/requests/${question.id}`} className="font-semibold text-emerald-700">
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

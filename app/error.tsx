"use client";

import Link from "next/link";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-rose-100 text-3xl font-black text-rose-600">
        !
      </div>
      <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-rose-600">Something went wrong</p>
      <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900">We hit an unexpected issue</h2>
      <p className="mt-4 text-lg text-slate-600">
        Try refreshing this page or return to the dashboard.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-800"
        >
          Try again
        </button>
        <Link href="/dashboard" className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:border-slate-300">
          Dashboard
        </Link>
      </div>
    </div>
  );
}

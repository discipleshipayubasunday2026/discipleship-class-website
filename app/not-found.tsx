import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-3xl font-black text-emerald-700">
        404
      </div>
      <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Not found</p>
      <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900">This page isn’t here yet</h1>
      <p className="mt-4 text-lg text-slate-600">
        The page you are looking for may have moved, or it may still be under development.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/" className="rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-800">
          Go home
        </Link>
        <Link href="/dashboard" className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:border-slate-300">
          Dashboard
        </Link>
      </div>
    </div>
  );
}

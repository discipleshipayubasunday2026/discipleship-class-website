export default function Loading() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <div className="animate-pulse space-y-5">
          <div className="h-4 w-32 rounded-full bg-slate-200" />
          <div className="h-10 w-3/4 rounded-xl bg-slate-200" />
          <div className="h-4 w-full rounded-full bg-slate-200" />
          <div className="h-4 w-5/6 rounded-full bg-slate-200" />
          <div className="h-32 rounded-2xl bg-slate-100" />
        </div>
      </div>
    </div>
  );
}

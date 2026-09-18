import Link from "next/link";

const resources = [
  {
    title: "Daily Reflection Guide",
    description: "A short rhythm for personal prayer, Scripture reading, and applying one truth to life today.",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    title: "Bible Study Practices",
    description: "Simple methods for reading the Bible with understanding, context, and a heart for application.",
    accent: "from-sky-500 to-cyan-500",
  },
  {
    title: "Prayer & Listening",
    description: "A guide to pray with honesty, patience, and trust while listening for God’s direction.",
    accent: "from-violet-500 to-indigo-500",
  },
];

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Resources</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
          Tools to help you keep growing
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          These resources are designed to support discipleship with practical guidance, prayerful reflection, and a steady rhythm of learning.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {resources.map((resource) => (
          <article key={resource.title} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <div className={`h-2 bg-gradient-to-r ${resource.accent}`} />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-slate-900">{resource.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{resource.description}</p>
              <Link href="/ask-question" className="mt-6 inline-flex text-sm font-semibold text-emerald-700 hover:text-emerald-800">
                Ask a question about this →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

import Link from "next/link";

const values = [
  {
    title: "Biblical Foundations",
    text: "We help disciples connect their questions to Scripture, truth, and mature Christian living.",
  },
  {
    title: "Gentle Guidance",
    text: "Every response is designed to be encouraging, clear, and respectful rather than overwhelming.",
  },
  {
    title: "Spiritual Maturity",
    text: "The goal is not just information, but growth in faith, character, and obedience to Christ.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">About the class</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            A place for learning, asking, and growing together
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            The discipleship class exists to help believers grow in understanding, prayer, obedience, and Christ-centered living. Questions are welcome, and learning is intended to be practical and life-giving.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"
            alt="Believers learning together in fellowship"
            className="h-[420px] w-full object-cover"
          />
        </div>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {values.map((item) => (
          <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-4 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
              {item.title}
            </div>
            <p className="text-base leading-7 text-slate-600">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-[2rem] bg-slate-900 p-8 text-white shadow-xl lg:p-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Our mission</p>
            <h2 className="mt-4 text-3xl font-bold">Helping disciples become mature followers of Christ</h2>
          </div>
          <div className="text-lg leading-8 text-slate-200">
            This platform exists to make discipleship clearer, more accessible, and more encouraging. It gives members a structured way to ask questions, reflect on lessons, and continue growing in faith and wisdom.
          </div>
        </div>
      </div>

      <div className="mt-14 flex justify-center">
        <Link href="/ask-question" className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-base font-semibold text-white transition hover:bg-emerald-800">
          Ask a Question
        </Link>
      </div>
    </div>
  );
}

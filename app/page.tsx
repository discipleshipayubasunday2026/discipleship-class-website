import Link from "next/link";

const heroImageUrl = "https://images.unsplash.com/photo-1519638399535-1b036603ac77?auto=format&fit=crop&w=1200&q=80";

const learnTopics = [
  "Lessons and biblical teaching",
  "Personal discipleship growth",
  "Prayer, faith, and Christian living",
  "Support for class assignments",
];

const featureCards = [
  {
    title: "Learn",
    text: "Explore teachings, key themes, and practical guidance for spiritual growth in a Christ-centered learning environment.",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    title: "Ask Questions",
    text: "Submit questions about faith, Bible study, discipleship, assignments, and daily Christian life.",
    accent: "from-sky-500 to-cyan-500",
  },
  {
    title: "AI-Powered Guidance",
    text: "Receive thoughtful, Biblically grounded responses designed to support and encourage spiritual maturity.",
    accent: "from-violet-500 to-indigo-500",
  },
  {
    title: "Track Your Growth",
    text: "Follow your conversations, review past questions, and see how your learning journey develops over time.",
    accent: "from-amber-500 to-orange-500",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.15),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Growing in Christ
              </span>
              <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Grow. Learn. Ask. Become.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Your discipleship journey is a journey of growth. Ask questions, explore lessons, and receive helpful guidance whenever you need it.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/ask-question" className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-800">
                  Ask a Question
                </Link>
                <Link href="/about" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900">
                  Explore Discipleship
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-600">
                <div>
                  <p className="text-2xl font-bold text-slate-900">12+</p>
                  <p>lessons</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">24/7</p>
                  <p>support</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">Guided</p>
                  <p>development</p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
              <div className="relative">
                <img
                  src={heroImageUrl}
                  alt="Jesus gathering with his disciples"
                  className="h-[480px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">Today’s focus</p>
                      <h2 className="mt-2 text-2xl font-bold">Faith and Growth</h2>
                    </div>
                    <div className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-200">
                      Active
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {learnTopics.map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-900/40 p-3 backdrop-blur-sm">
                        <div className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                        <p className="text-sm text-slate-100">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">A better way to grow</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Built for discipleship, reflection, and practical wisdom
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featureCards.map((card) => (
            <div key={card.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className={`h-2 bg-gradient-to-r ${card.accent}`} />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Featured lessons</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Study the Word. Grow in faith. Live with purpose.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "The Fruit of the Spirit",
                text: "Discover how the Holy Spirit shapes character, love, patience, and obedience in everyday life.",
                tag: "Character",
              },
              {
                title: "Prayer and Dependence",
                text: "Learn to pray with honesty, humility, and trust as a rhythm of spiritual growth.",
                tag: "Prayer",
              },
              {
                title: "Following Christ Daily",
                text: "Understand what it means to live as a disciple through service, wisdom, and obedience.",
                tag: "Discipleship",
              },
            ].map((lesson) => (
              <div key={lesson.title} className="rounded-[2rem] border border-slate-700 bg-slate-800/80 p-6 shadow-lg shadow-slate-950/20">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">{lesson.tag}</p>
                <h3 className="mt-4 text-2xl font-bold text-white">{lesson.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{lesson.text}</p>
                <Link href="/ask-question" className="mt-6 inline-flex items-center text-sm font-semibold text-emerald-300 hover:text-emerald-200">
                  Ask a question about this topic →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Why this matters</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Ask honest questions. Grow with clarity.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Discipleship is not about having perfect answers—it is about learning, listening, and walking closely with Christ. This platform creates a safe space for questions, encouragement, and continued growth.
              </p>
              <div className="mt-8 flex flex-col gap-4">
                <div className="flex items-start gap-4 rounded-2xl border border-slate-200 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">✓</div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Clear biblical teaching</h3>
                    <p className="mt-1 text-sm text-slate-600">Guidance that helps disciples understand Scripture and practical faith.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-2xl border border-slate-200 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-700">✓</div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Personal support</h3>
                    <p className="mt-1 text-sm text-slate-600">A place to seek direction for assignment questions and spiritual concerns.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-900 p-8 text-white shadow-xl">
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Platform overview</p>
              <h3 className="mt-4 text-2xl font-bold">You can expect:</h3>
              <div className="mt-8 space-y-5">
                {[
                  "Bible-study friendly guidance",
                  "A respectful and encouraging experience",
                  "Thoughtful summaries and follow-ups",
                  "Progress tracking for every disciple",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-800 p-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">•</span>
                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-emerald-600 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100">A healthy rhythm</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                Grow through study, prayer, and practical obedience.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-emerald-50/90">
                Discipleship is most effective when it becomes a consistent rhythm, not a one-time event. This space is designed to encourage steady steps toward maturity.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/ask-question" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-emerald-700 transition hover:bg-emerald-50">
                  Start your journey
                </Link>
                <Link href="/about" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-emerald-500/20 px-6 py-3 text-base font-semibold text-white transition hover:bg-emerald-500/30">
                  Learn more
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { title: "Study", text: "Read Scripture with purpose and reflection." },
                { title: "Pray", text: "Bring your questions and struggles honestly before God." },
                { title: "Live", text: "Apply what you learn in daily obedience and service." },
              ].map((item) => (
                <div key={item.title} className="rounded-[1.75rem] border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-100">{item.title}</p>
                  <p className="mt-4 text-base leading-7 text-white/95">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

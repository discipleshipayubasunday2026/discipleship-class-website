import Link from "next/link";

const lessons = [
  {
    title: "The Fruit of the Spirit",
    tag: "Character",
    description:
      "Learn how love, joy, peace, patience, and self-control become visible evidence of a transformed life in Christ.",
  },
  {
    title: "Prayer and Dependence",
    tag: "Prayer",
    description:
      "Explore how prayer shapes trust, humility, and reliance on God in daily decision-making and spiritual growth.",
  },
  {
    title: "Following Christ Daily",
    tag: "Discipleship",
    description:
      "Understand what it means to live with obedience, service, and Christlike love in ordinary moments.",
  },
  {
    title: "Living by Faith",
    tag: "Faith",
    description:
      "Study how faith grows through Scripture, prayer, and a life of trusting God even when the path is uncertain.",
  },
  {
    title: "Bible Study Foundations",
    tag: "Bible Study",
    description:
      "Develop a practical method for reading Scripture with understanding, reflection, and application.",
  },
  {
    title: "Serving with Purpose",
    tag: "Christian Living",
    description:
      "See how Christlike service reveals the heart of discipleship in relationships, church life, and community.",
  },
];

export default function LessonsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Lessons</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
          Grow in wisdom, faith, and daily obedience
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          These lessons are designed to help disciples move from knowledge to practice, building a life shaped by Christ.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {lessons.map((lesson) => (
          <article key={lesson.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">{lesson.tag}</p>
            <h2 className="mt-4 text-2xl font-bold text-slate-900">{lesson.title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">{lesson.description}</p>
            <Link href="/ask-question" className="mt-6 inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-800">
              Ask a question about this lesson →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

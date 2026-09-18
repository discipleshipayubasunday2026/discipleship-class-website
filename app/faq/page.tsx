const faqs = [
  {
    question: "Who is this website for?",
    answer:
      "This platform is for anyone seeking biblical teaching, practical discipleship, and a welcoming place to ask honest questions about faith and Christian growth.",
  },
  {
    question: "Do I need to be in a class to use it?",
    answer:
      "No. It is designed to support both new learners and ongoing students who want a place for prayer, reflection, and guided study.",
  },
  {
    question: "Is this meant to replace pastoral guidance?",
    answer:
      "This site is meant to supplement discipleship and study. It is not a substitute for pastoral care, church leadership, or professional counseling.",
  },
  {
    question: "Can I submit a question anonymously?",
    answer:
      "You may submit a question using your name and email, but the experience is meant to be respectful, safe, and encouraging.",
  },
  {
    question: "How do I know the guidance is grounded in Scripture?",
    answer:
      "The content is designed with a Christ-centered, biblically informed approach, encouraging truth, prayer, and faithful application to daily life.",
  },
];

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">FAQ</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
          Common questions about the class
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          A few helpful answers to guide new and returning learners as they grow in faith and discipleship.
        </p>
      </div>

      <div className="mt-12 space-y-5">
        {faqs.map((item) => (
          <div key={item.question} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">{item.question}</h2>
            <p className="mt-3 text-base leading-7 text-slate-600">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

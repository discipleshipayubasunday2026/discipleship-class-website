export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Terms</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
          Terms of Use
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          By using this website, you agree to participate in a Christ-centered learning environment with respect, humility, and honesty.
        </p>

        <div className="mt-10 space-y-8 text-slate-700">
          <section>
            <h2 className="text-xl font-bold text-slate-900">Purpose</h2>
            <p className="mt-3 leading-7">
              This site is intended to support discipleship, Christian learning, prayer, and biblical reflection. Content should be treated as educational and supportive, not as a substitute for pastoral counseling or formal church leadership.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Respectful use</h2>
            <p className="mt-3 leading-7">
              We expect all users to engage respectfully, with kindness and integrity. Offensive, abusive, or harmful conduct is not acceptable and may result in removal of access.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Content responsibility</h2>
            <p className="mt-3 leading-7">
              Users are responsible for the content they submit, including questions, comments, and requests. Please ensure your submissions are respectful, truthful, and appropriate for a faith-based learning context.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Changes</h2>
            <p className="mt-3 leading-7">
              These terms may be updated from time to time to reflect the needs of the class and the platform. Continued use after updates indicates acceptance of the revised terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

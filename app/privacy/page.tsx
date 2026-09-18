export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Privacy</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          We are committed to protecting the privacy of our learners, members, and visitors. Information shared on this platform is used to support discipleship, communication, and access to learning resources.
        </p>

        <div className="mt-10 space-y-8 text-slate-700">
          <section>
            <h2 className="text-xl font-bold text-slate-900">What we collect</h2>
            <p className="mt-3 leading-7">
              We may collect basic profile data, account information, prayer requests, and questions submitted through the platform. This helps us provide relevant support and maintain a secure learning environment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">How we use it</h2>
            <p className="mt-3 leading-7">
              Your information is used to create a personal experience, respond to submitted questions, maintain class records, and improve the quality of discipleship support offered through the website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Your responsibility</h2>
            <p className="mt-3 leading-7">
              Please do not share sensitive personal information in public submissions or messages. Only share what you are comfortable providing for care, support, and communication.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Contact</h2>
            <p className="mt-3 leading-7">
              If you have questions about this policy or how your information is handled, please contact support@discipleshipclass.org.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

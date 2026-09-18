import type { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import { LogoutButton } from "../components/logout-button";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discipleship Class Website",
  description: "A discipleship platform for learning, asking questions, and tracking spiritual growth.",
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/lessons", label: "Lessons" },
  { href: "/resources", label: "Resources" },
  { href: "/faq", label: "FAQ" },
  { href: "/ask-question", label: "Ask a Question" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/profile", label: "Profile" },
];

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies();
  const hasSession = Boolean(cookieStore.get("discipleship_session")?.value);

  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-slate-50 text-slate-900 antialiased">
        <div className="min-h-screen flex flex-col">
          <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
              <Link href="/" className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold text-white">
                  DC
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                    Discipleship
                  </p>
                  <p className="text-lg font-bold text-slate-900">Class Network</p>
                </div>
              </Link>

              <nav className="hidden items-center gap-6 md:flex">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-slate-600 transition hover:text-emerald-700"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-3">
                {hasSession ? (
                  <>
                    <Link
                      href="/profile"
                      className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-emerald-200 hover:text-emerald-700 sm:inline-flex"
                    >
                      Profile
                    </Link>
                    <LogoutButton />
                  </>
                ) : (
                  <Link
                    href="/login"
                    className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-emerald-200 hover:text-emerald-700 sm:inline-flex"
                  >
                    Sign in
                  </Link>
                )}
                <Link
                  href="/ask-question"
                  className="inline-flex rounded-full bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
                >
                  Ask a Question
                </Link>
              </div>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
                  Discipleship Class
                </p>
                <p className="mt-4 text-sm text-slate-300">
                  A place for growing in faith, asking honest questions, and pursuing Christ-centered learning.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-100">Explore</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  <li><Link href="/about" className="hover:text-white">About</Link></li>
                  <li><Link href="/lessons" className="hover:text-white">Lessons</Link></li>
                  <li><Link href="/resources" className="hover:text-white">Resources</Link></li>
                  <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
                  <li><Link href="/ask-question" className="hover:text-white">Ask a Question</Link></li>
                  <li><Link href="/dashboard" className="hover:text-white">Dashboard</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-100">Resources</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                  <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
                  <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-100">Support</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  <li>support@discipleshipclass.org</li>
                  <li>Monday – Friday</li>
                  <li>9:00 AM – 5:00 PM</li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "Grace", email: "grace@example.com", password: "password123", confirmPassword: "password123" });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Registration failed.");
      }

      window.location.href = "/dashboard";
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Registration failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="mx-auto max-w-md px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Create account</p>
        <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-900">Registration</h1>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Name</label>
            <input value={form.name} onChange={(e) => handleChange("name", e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3" placeholder="Jane Doe" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
            <input value={form.email} onChange={(e) => handleChange("email", e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3" placeholder="jane@example.com" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
            <input value={form.password} onChange={(e) => handleChange("password", e.target.value)} type="password" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3" placeholder="••••••••" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Confirm Password</label>
            <input value={form.confirmPassword} onChange={(e) => handleChange("confirmPassword", e.target.value)} type="password" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3" placeholder="••••••••" />
          </div>

          {error && <p className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}

          <button disabled={isSubmitting} className="w-full rounded-full bg-emerald-700 px-5 py-3 font-semibold text-white hover:bg-emerald-800 disabled:cursor-not-allowed disabled:bg-emerald-300">
            {isSubmitting ? "Creating account..." : "Register"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          Already have an account? <Link href="/login" className="font-semibold text-emerald-700">Login</Link>
        </p>
      </div>
    </div>
  );
}

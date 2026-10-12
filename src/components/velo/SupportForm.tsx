"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const PRIORITIES = [
  "Low — General inquiry",
  "Medium — Account support",
  "High — Transaction issue",
  "Urgent — Security concern",
];

export function SupportForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    priority: PRIORITIES[1],
    message: "",
  });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email.includes("@") || !form.subject || !form.message) return;
    setSent(true);
  }

  const input =
    "h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-[14px] text-navy-900 placeholder:text-slate-400 outline-none transition-colors focus:border-velo-400 focus:ring-2 focus:ring-velo-100 dark:text-white dark:focus:ring-velo-400/25 dark:bg-white/5";

  if (sent) {
    return (
      <div className="rounded-3xl border border-mint-400/30 bg-mint-400/8 p-10 text-center">
        <CheckCircle2 className="mx-auto h-14 w-14 text-mint-500" />
        <h3 className="mt-5 font-[family-name:var(--font-poppins)] text-2xl font-extrabold text-navy-900 dark:text-white">
          Thank you! Your message has been sent.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-[14.5px] leading-relaxed text-slate-500">
          We&apos;ll get back to you within 2 hours. For urgent security concerns, call our 24/7
          emergency line — it rings a human immediately.
        </p>
        <button
          onClick={() => {
            setSent(false);
            setForm({ name: "", email: "", subject: "", priority: PRIORITIES[1], message: "" });
          }}
          className="mt-7 inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-[13.5px] font-semibold text-navy-900 transition-colors hover:border-velo-300 dark:text-white"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-3xl border border-slate-100 bg-white p-7 shadow-[0_20px_60px_-30px_rgba(12,41,71,0.25)] sm:p-9 dark:bg-white/5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="sf-name" className="text-[12.5px] font-bold uppercase tracking-wide text-navy-900 dark:text-white">
            Full Name *
          </label>
          <input
            id="sf-name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Amara Okafor"
            className={`mt-2 ${input}`}
          />
        </div>
        <div>
          <label htmlFor="sf-email" className="text-[12.5px] font-bold uppercase tracking-wide text-navy-900 dark:text-white">
            Email Address *
          </label>
          <input
            id="sf-email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@example.com"
            className={`mt-2 ${input}`}
          />
        </div>
        <div>
          <label htmlFor="sf-subject" className="text-[12.5px] font-bold uppercase tracking-wide text-navy-900 dark:text-white">
            Subject *
          </label>
          <input
            id="sf-subject"
            required
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            placeholder="Transfer not delivered"
            className={`mt-2 ${input}`}
          />
        </div>
        <div>
          <label htmlFor="sf-priority" className="text-[12.5px] font-bold uppercase tracking-wide text-navy-900 dark:text-white">
            Priority Level
          </label>
          <select
            id="sf-priority"
            value={form.priority}
            onChange={(e) => setForm({ ...form, priority: e.target.value })}
            className={`mt-2 ${input}`}
          >
            {PRIORITIES.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="sf-message" className="text-[12.5px] font-bold uppercase tracking-wide text-navy-900 dark:text-white">
            Message *
          </label>
          <textarea
            id="sf-message"
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Tell us what happened, including any transaction references…"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-[14px] text-navy-900 placeholder:text-slate-400 outline-none transition-colors focus:border-velo-400 focus:ring-2 focus:ring-velo-100 dark:text-white dark:focus:ring-velo-400/25 dark:bg-white/5"
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-velo-500 px-8 py-4 text-[15px] font-semibold text-white shadow-glow-blue transition-all hover:-translate-y-0.5 hover:bg-velo-400 sm:w-auto"
      >
        <Send className="h-4.5 w-4.5" />
        Send Message
      </button>
      <p className="mt-4 text-[12.5px] text-slate-400">
        We respond within 2 hours. Urgent security concerns are triaged immediately, 24/7.
      </p>
    </form>
  );
}

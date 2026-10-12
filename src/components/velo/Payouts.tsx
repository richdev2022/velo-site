"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Globe2,
  Send,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Eyebrow, Reveal, Stagger, StaggerItem } from "./primitives";

const Globe3D = dynamic(() => import("./Globe3D"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-28 w-28 animate-pulse rounded-full bg-velo-500/15" />
    </div>
  ),
});

const CORRIDORS = [
  { flag: "🇺🇸", to: "United States", time: "Same day", rail: "ACH / Wire" },
  { flag: "🇬🇧", to: "United Kingdom", time: "Seconds", rail: "FPS" },
  { flag: "🇪🇺", to: "Eurozone", time: "Seconds", rail: "SEPA Instant" },
  { flag: "🇲🇽", to: "Mexico", time: "Seconds", rail: "SPEI" },
  { flag: "🇧🇷", to: "Brazil", time: "Seconds", rail: "PIX" },
  { flag: "🇨🇴", to: "Colombia", time: "Seconds", rail: "Bre-B" },
  { flag: "🇳🇬", to: "Nigeria", time: "Seconds", rail: "NIP" },
  { flag: "🇰🇪", to: "Kenya", time: "Minutes", rail: "M-PESA" },
  { flag: "🇬🇭", to: "Ghana", time: "Minutes", rail: "MoMo" },
  { flag: "🇿🇦", to: "South Africa", time: "Minutes", rail: "PayShap" },
  { flag: "🇨🇳", to: "China", time: "Same day", rail: "UnionPay" },
  { flag: "🇮🇳", to: "India", time: "Same day", rail: "IMPS / UPI" },
  { flag: "🇦🇪", to: "UAE", time: "Same day", rail: "UAEFTS" },
  { flag: "🇨🇦", to: "Canada", time: "Minutes", rail: "Interac" },
  { flag: "🇯🇵", to: "Japan", time: "Same day", rail: "Zengin" },
  { flag: "🇦🇺", to: "Australia", time: "Minutes", rail: "NPP / PayID" },
];

const STEPS = [
  {
    icon: Send,
    title: "Choose destination & amount",
    body: "Pick any of 80+ countries, enter the amount and see the exact fee and arrival time before you send. No surprises, ever.",
  },
  {
    icon: Zap,
    title: "We route the smart way",
    body: "Our routing engine picks the fastest, cheapest local rail automatically — from SEPA Instant to PIX to M-PESA.",
  },
  {
    icon: CheckCircle2,
    title: "Track to delivery",
    body: "Follow every payout in real time with status updates. Recipient gets an instant notification when funds land.",
  },
];

const GUARANTEES = [
  { icon: Clock3, label: "90% of payouts arrive in under 2 minutes" },
  { icon: ShieldCheck, label: "Licensed partners in every corridor" },
  { icon: Globe2, label: "80+ countries, 30+ currencies" },
];

export function Payouts() {
  return (
    <section id="payouts" className="relative overflow-hidden bg-background py-20 sm:py-28">
      <div className="absolute inset-0 bg-grid-light opacity-50 dark:opacity-[0.04]" aria-hidden="true" />
      <div
        className="absolute -left-32 top-40 h-[380px] w-[380px] rounded-full opacity-15 blur-[110px]"
        style={{ background: "radial-gradient(closest-side, #10b981, transparent)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* copy + steps */}
          <div>
            <Reveal>
              <Eyebrow>International payouts</Eyebrow>
              <h2 className="font-display mt-5 text-[32px] font-bold leading-[1.12] text-foreground sm:text-[46px]">
                Send money to{" "}
                <span className="text-gradient-blue">80+ countries</span> like it&apos;s next door
              </h2>
              <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-muted-foreground sm:text-[16.5px]">
                Pay suppliers, family or your global team straight from any wallet. One flat,
                honest fee. Local rails on both ends. Real-time tracking from &quot;sent&quot; to
                &quot;received.&quot;
              </p>
            </Reveal>

            <Stagger className="mt-9 flex flex-col gap-4" gap={0.12}>
              {STEPS.map((s, i) => (
                <StaggerItem key={s.title}>
                  <div className="group flex items-start gap-4.5 rounded-3xl border border-line bg-card p-5.5 shadow-sm transition-all hover:-translate-y-1 hover:border-velo-400/40 hover:shadow-card-lift">
                    <div className="relative">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-velo-500 to-velo-700 text-white shadow-glow-blue transition-transform group-hover:scale-110">
                        <s.icon className="h-5.5 w-5.5" />
                      </span>
                      <span className="font-display absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-navy-900 text-[10.5px] font-bold text-white shadow-md">
                        {i + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display text-[16.5px] font-bold text-foreground">
                        {s.title}
                      </h3>
                      <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Stagger className="mt-7 flex flex-wrap gap-2.5" gap={0.08}>
              {GUARANTEES.map((g) => (
                <StaggerItem key={g.label}>
                  <span className="inline-flex items-center gap-2 rounded-full bg-velo-500/12 px-4 py-2 text-[12.5px] font-semibold text-velo-700 dark:text-velo-200">
                    <g.icon className="h-4 w-4" />
                    {g.label}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* 3D globe + corridors */}
          <Reveal delay={0.1}>
            <div className="relative">
              {/* 3D globe panel */}
              <div className="conic-border rounded-[28px] p-[1.5px] shadow-[0_40px_110px_-35px_rgba(8,28,49,0.7)]">
                <div className="relative overflow-hidden rounded-[26px] bg-navy-950">
                  <div className="absolute inset-0 bg-grid-dark opacity-60" aria-hidden="true" />
                  <div
                    className="absolute left-1/2 top-1/2 h-[300px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[90px]"
                    style={{ background: "radial-gradient(closest-side, #2196F3, transparent)" }}
                    aria-hidden="true"
                  />
                  <div className="relative h-[340px] sm:h-[400px]">
                    <Globe3D />
                  </div>
                  <div className="relative flex items-center justify-between border-t border-white/8 px-5 py-3.5">
                    <p className="flex items-center gap-2 text-[12.5px] font-medium text-white/80">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute h-2 w-2 animate-pulse-ring rounded-full bg-mint-400" />
                        <span className="h-2 w-2 rounded-full bg-mint-400" />
                      </span>
                      Live — Lagos → 80+ countries
                    </p>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-velo-300">
                      3D network view
                    </span>
                  </div>
                </div>
              </div>

              {/* corridor grid */}
              <div className="relative mt-6 rounded-[28px] border border-line bg-card p-6 shadow-card-lift sm:p-7">
                <div className="flex items-center justify-between">
                  <p className="font-display text-[16px] font-bold text-foreground">
                    Popular payout corridors
                  </p>
                  <span className="rounded-full bg-mint-500/12 px-3 py-1 text-[11.5px] font-bold text-mint-600 dark:text-mint-400">
                    LIVE
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-2">
                  {CORRIDORS.map((c, i) => (
                    <motion.div
                      key={c.to}
                      initial={{ opacity: 0, scale: 0.94 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ delay: i * 0.045, duration: 0.4 }}
                      className="group flex items-center justify-between gap-2 rounded-2xl border border-line bg-section px-4 py-3.5 transition-all hover:-translate-y-0.5 hover:border-velo-400/45 hover:shadow-md"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-[19px]">{c.flag}</span>
                        <div>
                          <p className="text-[13px] font-semibold text-foreground">{c.to}</p>
                          <p className="text-[10.5px] text-muted-foreground">
                            {c.rail} · {c.time}
                          </p>
                        </div>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 transition-all group-hover:translate-x-0.5 group-hover:text-velo-500" />
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between rounded-2xl bg-navy-900 px-5 py-4 text-white">
                  <div>
                    <p className="font-display text-[14px] font-bold">+ 64 more countries</p>
                    <p className="text-[11.5px] text-white/55">
                      New corridors added every quarter
                    </p>
                  </div>
                  <a
                    href="/download"
                    className="rounded-full bg-velo-500 px-4 py-2.5 text-[12.5px] font-semibold transition-all hover:-translate-y-0.5 hover:bg-velo-400"
                  >
                    Send now
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

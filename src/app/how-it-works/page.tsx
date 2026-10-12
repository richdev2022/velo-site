import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Smartphone,
  UserCheck,
  Wallet,
  ShieldCheck,
  Zap,
  Landmark,
  Coins,
  Gift,
} from "lucide-react";
import { PageHero, Section, CtaBand } from "@/components/velo/page-parts";
import { Reveal, Eyebrow } from "@/components/velo/primitives";
import { RAILS } from "@/data/site";

export const metadata: Metadata = {
  title: "How Velo Works",
  description:
    "From download to your first international payment in minutes — how Velo works, step by step.",
};

const STEPS = [
  {
    icon: Smartphone,
    title: "Download & sign up",
    text: "Get the app or open the web app. Register with your phone number and email — two minutes, no paperwork.",
  },
  {
    icon: UserCheck,
    title: "Verify your identity once",
    text: "Complete BVN/NIN-backed KYC with a selfie check. It's a one-time step that unlocks everything and keeps the platform safe.",
  },
  {
    icon: Wallet,
    title: "Fund your wallet",
    text: "Add money by bank transfer, card or crypto — instantly. Your multi-currency wallets are ready to hold, convert and spend.",
  },
  {
    icon: Globe,
    title: "Get your global accounts",
    text: "Claim your USD, EUR, GBP, MXN, BRL and COP account details in your own name. Share them with clients, platforms and employers.",
  },
  {
    icon: Zap,
    title: "Move money everywhere",
    text: "Send locally in seconds, receive like a local in six currencies, convert at fair rates and pay out to 80+ countries.",
  },
  {
    icon: ShieldCheck,
    title: "Bank with confidence",
    text: "Every transaction is encrypted, monitored and alerted in real time — with human support available 24/7.",
  },
];

const FEATURE_MAP = [
  { icon: Landmark, title: "Receive like a local", href: "/products/multicurrency-accounts", text: "6 currencies, your name, local rails." },
  { icon: Coins, title: "Hold & convert", href: "/products/currency-wallets", text: "Multi-currency wallets with live rates." },
  { icon: Globe, title: "Pay out globally", href: "/products/global-payouts", text: "80+ countries, transparent fees." },
  { icon: Gift, title: "Trade gift cards", href: "/products/gift-cards", text: "Buy & sell 50+ brands instantly." },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How Velo Works"
        title="From download to your first payment"
        highlight="in minutes."
        description="No branches. No paperwork. No waiting rooms. Here's the entire journey, step by step."
      />

      <Section className="bg-white">
        <div className="relative">
          {/* connector line */}
          <div className="absolute left-[27px] top-4 hidden h-[calc(100%-2rem)] w-0.5 bg-gradient-to-b from-velo-200 via-velo-300 to-mint-400/50 lg:block" aria-hidden="true" />
          <div className="flex flex-col gap-8">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="flex gap-6 lg:gap-8">
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-velo-500 to-velo-600 font-[family-name:var(--font-poppins)] text-lg font-extrabold text-white shadow-glow-blue">
                    {i + 1}
                  </div>
                  <div className="flex-1 rounded-3xl border border-slate-100 bg-slate-50/50 p-6 transition-all hover:border-velo-200 hover:bg-white hover:shadow-[0_20px_44px_-20px_rgba(33,150,243,0.22)] sm:p-7">
                    <div className="flex items-center gap-3">
                      <s.icon className="h-5.5 w-5.5 text-velo-600" />
                      <h3 className="font-[family-name:var(--font-poppins)] text-[18px] font-bold text-navy-900">
                        {s.title}
                      </h3>
                    </div>
                    <p className="mt-3 max-w-3xl text-[14.5px] leading-relaxed text-slate-500">
                      {s.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-12 text-center">
          <Link
            href="/download"
            className="group inline-flex items-center gap-2 rounded-full bg-velo-500 px-8 py-4 text-[15px] font-semibold text-white shadow-glow-blue transition-all hover:-translate-y-0.5 hover:bg-velo-400"
          >
            Start step one now
            <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </Section>

      {/* rails available once verified */}
      <Section className="bg-slate-50">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>What You Unlock</Eyebrow>
          <h2 className="mt-5 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            The global finance suite, <span className="text-gradient-blue">day one</span>
          </h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-slate-500">
            Verification unlocks your local account details across all six currencies.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RAILS.map((r, i) => (
            <Reveal key={r.code} delay={i * 0.05}>
              <div className="flex items-center gap-4 rounded-3xl border border-slate-100 bg-white p-5 transition-all hover:-translate-y-1 hover:border-velo-200 hover:shadow-[0_20px_44px_-20px_rgba(33,150,243,0.22)]">
                <span className="text-3xl">{r.flag}</span>
                <div className="flex-1">
                  <p className="font-[family-name:var(--font-poppins)] text-[15.5px] font-bold text-navy-900">
                    {r.code} — {r.rail}
                  </p>
                  <p className="text-[12.5px] text-slate-500">{r.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURE_MAP.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06}>
              <Link
                href={f.href}
                className="group flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-velo-200 hover:shadow-[0_24px_50px_-20px_rgba(33,150,243,0.28)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-velo-500 to-velo-600 text-white">
                  <f.icon className="h-5.5 w-5.5" />
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-poppins)] text-[16px] font-bold text-navy-900">
                  {f.title}
                </h3>
                <p className="mt-2 flex-1 text-[13px] text-slate-500">{f.text}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-velo-600">
                  Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}

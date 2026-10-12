import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Heart,
  Landmark,
  Lightbulb,
  Smartphone,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { PageHero, Section, CtaBand } from "@/components/velo/page-parts";
import { Reveal, Stagger, StaggerItem } from "@/components/velo/primitives";
import { Eyebrow } from "@/components/velo/primitives";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Velo is operated by Velo Finance LTD (RC 8304903) — reimagining banking for the modern world: fast, secure, borderless, and inclusive. Our mission, vision and values.",
};

const VALUES = [
  {
    icon: Users,
    title: "Customer Obsession",
    text: "Every roadmap item starts with a real customer problem, not a boardroom idea. We measure ourselves by the money and time we give back to people.",
  },
  {
    icon: Sparkles,
    title: "Radical Transparency",
    text: "Fees shown before you confirm, rates you can verify, and honest product terms written in plain language — no fine-print tricks, ever.",
  },
  {
    icon: Landmark,
    title: "Trust & Security",
    text: "Bank-grade encryption, licensed partners and 24/7 fraud monitoring. We treat your money with the paranoia it deserves so you don't have to.",
  },
  {
    icon: Lightbulb,
    title: "Relentless Innovation",
    text: "From instant rails to multi-currency accounts, we build the infrastructure Africa's global generation deserves — then make it feel effortless.",
  },
  {
    icon: Globe,
    title: "Borderless By Default",
    text: "We design for the freelancer paid in dollars, the trader in naira, and the diaspora supporting family — one platform for every border you cross.",
  },
  {
    icon: Heart,
    title: "Inclusive Finance",
    text: "No maintenance fees, simple onboarding and human support in your language. Banking built for everyone, not just the already-banked.",
  },
];

const DIFFERENT = [
  {
    icon: Smartphone,
    title: "Built for the African experience",
    text: "We're not another bank — we're a financial platform designed specifically around how Africans live, earn and support family: irregular income, cross-border lives, and mobile-first everything.",
  },
  {
    icon: Target,
    title: "One platform, every money job",
    text: "Banking, payments, cards, savings, investments, global accounts and gift cards live in one app with one balance sheet. Stop juggling six apps to run one financial life.",
  },
  {
    icon: Globe,
    title: "Genuinely global rails",
    text: "USD, EUR, GBP, MXN, BRL and COP account details issued in your name, payouts to 80+ countries, and conversions at rates displayed honestly before you confirm.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Velo"
        title="Banking built for a"
        highlight="borderless future."
        description={`${SITE.legalName} (RC ${SITE.rcNumber}) — reimagining banking for the modern world: fast, secure, borderless, and inclusive.`}
      >
        <blockquote className="max-w-2xl rounded-3xl border border-slate-200/80 bg-white/75 p-7 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/6 dark:shadow-none">
          <p className="text-[16px] font-medium leading-relaxed text-slate-700 dark:text-white/85">
            “At Velo, we don&apos;t just move money; we move ambitions, trust, and possibilities —
            across every border and into every future.”
          </p>
          <footer className="mt-4 text-[13px] font-semibold text-velo-600 dark:text-velo-300">
            — Velo Leadership Team
          </footer>
        </blockquote>
      </PageHero>

      {/* mission & vision */}
      <Section className="bg-white dark:bg-navy-950">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-velo-100/80 bg-gradient-to-br from-velo-50/70 via-card to-velo-50/40 p-8 sm:p-10 dark:border-velo-500/20 dark:from-velo-500/10 dark:via-card dark:to-mint-500/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-velo-500 to-velo-600 text-white shadow-glow-blue">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="mt-6 font-[family-name:var(--font-poppins)] text-2xl font-extrabold tracking-tight text-foreground">
                Our Mission
              </h2>
              <p className="mt-4 text-[15.5px] leading-[1.85] text-muted-foreground">
                To give every African — at home and abroad — access to world-class financial
                tools without barriers, hidden fees or branch queues. We exist to move money the
                way the internet moves everything else: instantly, transparently and fairly. That
                means an account you can open in minutes, payments that arrive in seconds, and
                pricing you can verify before you commit. For the freelancer invoicing New York
                from Enugu, the trader converting daily, and the mother in Port Harcourt receiving
                support from London — our mission is the same: your money, moving at the speed of
                your life.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="h-full rounded-3xl border border-mint-400/30 bg-gradient-to-br from-mint-400/10 via-card to-velo-50/50 p-8 sm:p-10 dark:border-mint-400/20 dark:from-mint-400/8 dark:via-card dark:to-velo-500/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-mint-500 to-mint-400 text-white">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h2 className="mt-6 font-[family-name:var(--font-poppins)] text-2xl font-extrabold tracking-tight text-foreground">
                Our Vision
              </h2>
              <p className="mt-4 text-[15.5px] leading-[1.85] text-muted-foreground">
                A world where where you were born never limits what your money can do. We are
                building the financial operating system for the African decade: one platform that
                holds your naira, dollars, euros and pounds side by side; receives payments like a
                local in six currencies; invests back home while you live abroad; and treats every
                customer — student, trader, SME or diaspora professional — with the same
                transparency and respect. Not a bank you endure. A platform you love, that happens
                to move your money perfectly.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* core values */}
      <Section className="bg-section">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Core Values</Eyebrow>
          <h2 className="mt-5 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Principles that guide{" "}
            <span className="text-gradient-blue">everything we do</span>
          </h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-muted-foreground">
            From product development to customer service, these are the rules we ship by.
          </p>
        </Reveal>
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v) => (
            <StaggerItem key={v.title}>
              <div className="h-full rounded-3xl border border-line bg-card p-7 shadow-[0_2px_20px_-8px_rgba(12,41,71,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-velo-300/60 hover:shadow-[0_24px_50px_-20px_rgba(33,150,243,0.25)] dark:shadow-none">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-velo-50 text-velo-600 dark:bg-velo-500/15 dark:text-velo-300">
                  <v.icon className="h-5.5 w-5.5" />
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-poppins)] text-[17px] font-bold text-foreground">
                  {v.title}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* what sets us apart */}
      <Section className="bg-white dark:bg-navy-950">
        <Reveal className="max-w-2xl">
          <Eyebrow>What Sets Us Apart</Eyebrow>
          <h2 className="mt-5 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Not just another bank
          </h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-muted-foreground">
            We&apos;re a financial platform built specifically for the African experience — here&apos;s
            what that actually means in practice.
          </p>
        </Reveal>
        <div className="mt-10 flex flex-col gap-5">
          {DIFFERENT.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.08}>
              <div className="grid items-center gap-6 rounded-3xl border border-line bg-gradient-to-r from-muted/60 to-card p-7 shadow-[0_2px_20px_-8px_rgba(12,41,71,0.08)] transition-all duration-300 hover:border-velo-300/60 sm:grid-cols-[auto_1fr] sm:p-8 dark:shadow-none">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-velo-500 to-velo-600 text-white shadow-glow-blue">
                  <d.icon className="h-6.5 w-6.5" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-poppins)] text-[19px] font-bold text-foreground">
                    {d.title}
                  </h3>
                  <p className="mt-2.5 max-w-3xl text-[14.5px] leading-relaxed text-muted-foreground">
                    {d.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* company strip */}
      <Section className="band">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>The Company</Eyebrow>
            <h2 className="mt-5 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight sm:text-4xl">
              {SITE.legalName}
              <span className="block text-[15px] font-medium text-slate-500 dark:text-white/50">
                RC {SITE.rcNumber} · Austin · Enugu · Port Harcourt · Abuja
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-[1.85] text-slate-600 dark:text-white/60">
              Velo operates from four offices across the United States and Nigeria, serving a
              global community of individuals, businesses and diaspora customers. We partner with
              licensed financial institutions and regulated payment providers to deliver safe,
              compliant and genuinely modern banking — combining African insight with global
              standards.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/careers"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-velo-500 px-7 py-3.5 text-[14.5px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-velo-400"
              >
                Join the team
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/support"
                className="glass-float inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[14.5px] font-semibold text-slate-800 transition-all hover:bg-white dark:text-white dark:hover:bg-white/12"
              >
                Contact us
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="grid gap-4 sm:grid-cols-2">
              {SITE.addresses.map((a) => (
                <div key={a.city} className="rounded-2xl border border-slate-200/80 bg-white/75 p-5 backdrop-blur dark:border-white/10 dark:bg-white/5">
                  <p className="text-[13px] font-bold uppercase tracking-wider text-velo-600 dark:text-velo-300">
                    {a.city}
                  </p>
                  {a.lines.map((l) => (
                    <p key={l} className="mt-1 text-[12.5px] leading-relaxed text-slate-500 dark:text-white/55">
                      {l}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Layers,
  ShieldCheck,
  Smartphone,
  Sparkles,
  UserPlus,
} from "lucide-react";
import { Eyebrow, Reveal, Stagger, StaggerItem, TiltCard, SpotlightCard } from "./primitives";
import { SITE } from "@/data/site";
import { getByCategory } from "@/data/products";
import { ProductIcon } from "./ProductIcon";

/* ------------------------- Value props (old site) ------------------------ */

const VALUES = [
  {
    icon: Globe,
    title: "Borderless Banking",
    text: "One app, one account, many countries. Send and receive money across borders with ease.",
  },
  {
    icon: Smartphone,
    title: "Human-Centered, Tech-Driven",
    text: "Intuitive, mobile-first UX designed for the way you live — banking that feels effortless.",
  },
  {
    icon: ShieldCheck,
    title: "Radical Transparency",
    text: "No hidden fees. No stress. No jargon. Just honest, transparent banking you can verify.",
  },
  {
    icon: Layers,
    title: "All-In-One Platform",
    text: "A full operating system for individuals, families, and small businesses — 20 products and counting.",
  },
];

export function ValueProps() {
  return (
    <section className="relative bg-background py-16 sm:py-24">
      <div
        className="absolute left-1/2 top-0 h-[280px] w-[680px] -translate-x-1/2 rounded-full opacity-[0.06] blur-[110px] dark:opacity-[0.07]"
        style={{ background: "radial-gradient(closest-side, #2196F3, transparent)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Driven by Innovation</Eyebrow>
          <h2 className="mt-5 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Reimagining banking for the{" "}
            <span className="text-gradient-blue">modern world</span>
          </h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-muted-foreground">
            Fast, secure, borderless, and inclusive — four principles behind every product we ship.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <StaggerItem key={v.title}>
              <SpotlightCard className="group h-full rounded-3xl border border-line bg-card shadow-[0_2px_20px_-8px_rgba(12,41,71,0.10)] transition-all duration-300 hover:-translate-y-1.5 hover:border-velo-400/50 hover:shadow-[0_28px_56px_-22px_rgba(33,150,243,0.35)]">
                {/* crisp gradient hairline reveals on hover */}
                <span className="card-hairline" aria-hidden="true" />
                {/* oversized index watermark */}
                <span
                  className="pointer-events-none absolute right-5 top-4 select-none font-[family-name:var(--font-poppins)] text-[46px] font-extrabold leading-none text-foreground/[0.05] transition-colors duration-300 group-hover:text-velo-500/20 dark:text-white/[0.06]"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative z-10 p-7">
                  {/* solid icon tile — crisp transform on hover, no blur glow */}
                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-velo-500 to-velo-600 text-white shadow-[0_10px_26px_-10px_rgba(33,150,243,0.60)] ring-1 ring-velo-400/30 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
                      <v.icon className="h-5.5 w-5.5" />
                    </div>
                  </div>
                  <h3 className="mt-5 font-[family-name:var(--font-poppins)] text-[17px] font-bold text-foreground">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{v.text}</p>
                  <span className="mt-5 flex items-center gap-1.5 text-[12.5px] font-bold uppercase tracking-wide text-velo-600 opacity-0 transition-all duration-300 group-hover:opacity-100 dark:text-velo-300">
                    Why it matters
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* --------------------- Product showcase (old core 3) -------------------- */

const CORE = [
  {
    icon: "Smartphone",
    title: "Digital Accounts",
    text: "A full bank account in your phone — open in minutes, zero maintenance fees, 24/7 banking.",
    image: "/media/hero-main.png",
    alt: "Young entrepreneur using the Velo app on a smartphone",
  },
  {
    icon: "Globe",
    title: "Local & Cross-Border Payments",
    text: "Instant local transfers and payments to 180+ countries — with rates you can verify.",
    image: "/site/global-payment.jpg",
    alt: "Man making a cross-border payment on a city street",
  },
  {
    icon: "CreditCard",
    title: "Physical & Virtual Cards",
    text: "A Verve debit card for Nigeria and virtual cards for everywhere else — issued in seconds.",
    image: "/site/virtual-card.webp",
    alt: "Woman holding a Velo virtual card while shopping online",
  },
];

export function CoreProducts() {
  const individuals = getByCategory("individuals");
  return (
    <section className="relative overflow-hidden bg-section py-16 sm:py-24">
      <div className="absolute inset-0 bg-grid-light opacity-60 dark:opacity-[0.04]" aria-hidden="true" />
      <div
        className="absolute -left-40 top-1/4 h-[400px] w-[400px] rounded-full bg-velo-500/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Core Products</Eyebrow>
          <h2 className="mt-5 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Our <span className="text-gradient-blue">Core Products</span>
          </h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-muted-foreground">
            Comprehensive financial solutions designed for the modern African lifestyle — plus a
            full global finance suite.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {CORE.map((c) => (
            <StaggerItem key={c.title}>
              <TiltCard max={5} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-card shadow-card-lift transition-all duration-300 hover:-translate-y-1.5 hover:border-velo-400/40 hover:shadow-[0_30px_60px_-24px_rgba(33,150,243,0.4)]">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={c.image}
                      alt={c.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/55 via-transparent to-transparent" />
                    <div className="shine-sweep absolute inset-0" aria-hidden="true" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-velo-500/12 text-velo-500 transition-colors dark:text-velo-300">
                      <ProductIcon name={c.icon} className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-[family-name:var(--font-poppins)] text-[18px] font-bold text-foreground">
                      {c.title}
                    </h3>
                    <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-muted-foreground">
                      {c.text}
                    </p>
                    <Link
                      href="/products"
                      className="mt-5 inline-flex w-fit items-center gap-1.5 text-[13.5px] font-semibold text-velo-600 transition-colors hover:text-velo-500 dark:text-velo-300"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>

        {/* quick catalog strip */}
        <Reveal className="mt-10">
          <Link
            href="/products"
            className="group block rounded-3xl border border-velo-500/25 bg-gradient-to-r from-velo-500/12 via-transparent to-mint-500/10 p-6 transition-all hover:border-velo-400/50 sm:p-7"
          >
            <div className="flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-center">
              <div>
                <h3 className="font-[family-name:var(--font-poppins)] text-[17px] font-bold text-foreground">
                  Explore the complete catalog — {individuals.length * 5}+ features across 5 categories
                </h3>
                <p className="mt-1.5 max-w-2xl text-[13.5px] text-muted-foreground">
                  Individuals · Businesses · Diaspora · Global Finance · Referrals — every product
                  has its own detail page.
                </p>
              </div>
              <span className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-[14px] font-semibold text-white transition-all hover:-translate-y-0.5 dark:bg-velo-500 dark:hover:bg-velo-400">
                View Products &amp; Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------- Cards showcase (video + real imagery) ------------- */

export function CardsShowcase({ video = false }: { video?: boolean }) {
  return (
    <section className="band relative overflow-hidden py-16 sm:py-24">
      <div
        className="absolute right-[-160px] top-[-120px] h-[460px] w-[560px] rounded-full bg-velo-500/8 blur-[130px] dark:bg-velo-500/14"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-30%] left-[-10%] h-[420px] w-[520px] rounded-full bg-mint-500/6 blur-[130px] dark:bg-mint-500/10"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Velo Cards</Eyebrow>
            <h2 className="mt-5 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight sm:text-4xl">
              Your perfect{" "}
              <span className="bg-gradient-to-r from-velo-600 to-mint-500 bg-clip-text text-transparent dark:from-velo-300 dark:to-mint-400">
                payment companion
              </span>
            </h2>
            <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-slate-600 dark:text-white/60">
              Choose between our sleek physical debit card or instant virtual cards — or get both
              for ultimate flexibility. Freeze, limit and control everything from the app.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200/80 bg-white/75 p-5 backdrop-blur transition-all hover:-translate-y-1 hover:border-velo-400/50 hover:shadow-[0_20px_44px_-20px_rgba(33,150,243,0.35)] dark:border-white/10 dark:bg-white/5 dark:hover:border-velo-400/40 dark:hover:bg-white/8">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-velo-500/12 text-velo-600 dark:bg-velo-500/20 dark:text-velo-300">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="mt-3.5 font-[family-name:var(--font-poppins)] text-[15.5px] font-bold text-slate-900 dark:text-white">
                  Physical Naira Card
                </h3>
                <ul className="mt-3 flex flex-col gap-2 text-[13px] text-slate-500 dark:text-white/55">
                  <li>• Fast and secure in-person payments</li>
                  <li>• Accepted at any ATM and POS in Nigeria</li>
                  <li>• Naira card for all daily transactions</li>
                </ul>
                <Link
                  href="/products/physical-naira-card"
                  className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-velo-600 hover:text-velo-500 dark:text-velo-300 dark:hover:text-velo-200"
                >
                  Explore card <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="rounded-2xl border border-slate-200/80 bg-white/75 p-5 backdrop-blur transition-all hover:-translate-y-1 hover:border-mint-400/50 hover:shadow-[0_20px_44px_-20px_rgba(16,185,129,0.35)] dark:border-white/10 dark:bg-white/5 dark:hover:border-mint-400/40 dark:hover:bg-white/8">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-mint-500/12 text-mint-600 dark:bg-mint-500/20 dark:text-mint-400">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="mt-3.5 font-[family-name:var(--font-poppins)] text-[15.5px] font-bold text-slate-900 dark:text-white">
                  Virtual Cards
                </h3>
                <ul className="mt-3 flex flex-col gap-2 text-[13px] text-slate-500 dark:text-white/55">
                  <li>• Instant virtual card generation in seconds</li>
                  <li>• Spend in any currency worldwide</li>
                  <li>• Disposable numbers for enhanced security</li>
                </ul>
                <Link
                  href="/products/virtual-card"
                  className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-velo-600 hover:text-velo-500 dark:text-velo-300 dark:hover:text-velo-200"
                >
                  Explore virtual cards <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <Link
              href="/download"
              className="group relative mt-8 inline-flex items-center gap-2 overflow-hidden rounded-full bg-velo-500 px-7 py-3.5 text-[14.5px] font-semibold text-white shadow-glow-blue transition-all hover:-translate-y-0.5 hover:bg-velo-400"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" aria-hidden="true" />
              <span className="relative flex items-center gap-2">
                Get Your Card Now
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <div className="relative mx-auto max-w-[540px]">
              {/* 3D tilt video panel */}
              <TiltCard max={7}>
                <div className="conic-border rounded-[28px] p-[1.5px] shadow-[0_50px_130px_-40px_rgba(0,0,0,0.85)]">
                  <div className="relative overflow-hidden rounded-[26px] bg-navy-900">
                    {video ? (
                      <video
                        src="/media/cards.mp4"
                        poster="/media/cards-3d.png"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="aspect-[16/10] h-auto w-full object-cover"
                      />
                    ) : (
                      <Image
                        src="/media/cards-3d.png"
                        alt="3D render of premium Velo payment cards"
                        width={1024}
                        height={1024}
                        className="aspect-[16/10] h-auto w-full object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
                      <p className="text-[12.5px] font-medium text-white/85">
                        Physical + virtual — one tap in the app
                      </p>
                      <span className="glass-dark rounded-full px-3 py-1.5 text-[10.5px] font-semibold text-velo-200">
                        3D · Velo Cards
                      </span>
                    </div>
                  </div>
                </div>
              </TiltCard>

              {/* real customer photos floating */}
              <motion.div
                initial={{ rotate: -4, y: 0 }}
                whileInView={{ rotate: -3, y: [0, -10, 0] }}
                viewport={{ once: true }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-4 w-[42%] overflow-hidden rounded-2xl border border-white/15 shadow-2xl sm:-left-10"
              >
                <Image
                  src="/site/card-holding.webp"
                  alt="Man holding a Velo Verve debit card"
                  width={1500}
                  height={1000}
                  className="h-auto w-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="absolute -right-3 -top-8 w-[34%] overflow-hidden rounded-2xl border border-white/15 shadow-2xl sm:-right-8"
              >
                <Image
                  src="/site/virtual-card.webp"
                  alt="Woman using a Velo virtual card online"
                  width={1500}
                  height={1000}
                  className="h-auto w-full object-cover"
                />
              </motion.div>
            </div>
            <div className="h-14 sm:h-10" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------- Journeys (old site) -------------------------- */

const JOURNEYS = [
  {
    emoji: "💼",
    title: "Freelancer",
    stat: "Client Payment — $2,500",
    text: "Receive global payments instantly and manage multiple currencies effortlessly.",
    href: "/products/multicurrency-accounts",
    image: "/media/journey-freelancer.jpg",
  },
  {
    emoji: "📈",
    title: "Trader",
    stat: "USD/NGN +2.4%",
    text: "Real-time exchange rates and lightning-fast currency conversions at great prices.",
    href: "/products/currency-wallets",
    image: "/media/journey-trader.jpg",
  },
  {
    emoji: "🌍",
    title: "Diaspora",
    stat: "Sending to Family — $500 → ₦760,000",
    text: "Stay connected to home with seamless international transfers and support tools.",
    href: "/products/diaspora-account",
    image: "/media/journey-diaspora.jpg",
  },
  {
    emoji: "🎓",
    title: "Student",
    stat: "Tuition Goal — 75%",
    text: "Smart savings goals and transparent fees for education expenses.",
    href: "/products/savings-investment",
    image: "/media/journey-student.jpg",
  },
];

export function Journeys() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>For Every Journey</Eyebrow>
          <h2 className="mt-5 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Banking for <span className="text-gradient-blue">every journey</span>
          </h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-muted-foreground">
            Whatever your hustle, Velo meets you exactly where you are.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {JOURNEYS.map((j) => (
            <StaggerItem key={j.title}>
              <Link
                href={j.href}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-card shadow-[0_2px_20px_-8px_rgba(12,41,71,0.10)] transition-all duration-300 hover:-translate-y-1.5 hover:border-velo-400/40 hover:shadow-[0_24px_50px_-20px_rgba(33,150,243,0.32)]"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={j.image}
                    alt={`${j.title} using Velo Finance`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/10 to-transparent" />
                  <span className="glass-dark absolute left-3.5 top-3.5 flex h-9 w-9 items-center justify-center rounded-xl text-lg">
                    {j.emoji}
                  </span>
                  <p className="absolute bottom-3 left-3.5 right-3.5 inline-flex w-fit rounded-full bg-velo-500/85 px-3 py-1 text-[11px] font-bold text-white backdrop-blur">
                    {j.stat}
                  </p>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-[family-name:var(--font-poppins)] text-[17px] font-bold text-foreground">
                    {j.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-muted-foreground">{j.text}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-velo-600 dark:text-velo-300">
                    See how
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* --------------------------- Partners strip ----------------------------- */

export function Partners() {
  return (
    <section className="border-y border-line bg-section py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="text-[12.5px] font-bold uppercase tracking-wider text-muted-foreground">
            Partners — working with industry leaders to provide you the best banking experience
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {SITE.partners.map((p) => (
              <div
                key={p.name}
                className="relative h-12 w-28 opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 dark:opacity-85 dark:grayscale-0"
              >
                <Image
                  src={p.image}
                  alt={`${p.name} partner logo`}
                  fill
                  sizes="112px"
                  className="object-contain"
                />
              </div>
            ))}
            <div className="flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-[12.5px] font-semibold text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-velo-500" /> YouVerify Partner
            </div>
            <div className="flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-[12.5px] font-semibold text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-velo-500" /> Interswitch Partner
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------- Referral band (₦500) ------------------------- */

const COINS = ["🇺🇸", "🇪🇺", "🇬🇧", "🇲🇽", "🇧🇷", "🇨🇴"];

export function ReferralBand() {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-24">
      <div
        className="absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/10 blur-[130px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="shine-sweep relative overflow-hidden rounded-[32px] bg-gradient-to-br from-navy-900 via-navy-950 to-velo-800 p-8 text-white sm:p-12 lg:p-14">
          <div className="absolute inset-0 bg-grid-dark opacity-60" aria-hidden="true" />
          {/* floating currency coins */}
          {COINS.map((flag, i) => (
            <motion.span
              key={flag}
              aria-hidden="true"
              className="glass-dark absolute hidden h-11 w-11 items-center justify-center rounded-2xl text-xl shadow-xl lg:flex"
              style={{
                left: `${6 + i * 16}%`,
                top: i % 2 === 0 ? "8%" : "78%",
                animation: `floatY ${5 + (i % 3)}s ease-in-out ${i * 0.7}s infinite`,
              }}
            >
              {flag}
            </motion.span>
          ))}

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-gold-400/15 px-4 py-1.5 text-[12.5px] font-semibold text-gold-400">
                🎉 Limited Time Offer
              </span>
              <h2 className="mt-5 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight sm:text-4xl">
                Earn Together —{" "}
                <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
                  ₦500 for every friend
                </span>
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/60">
                Earn ₦500 for every friend who joins Velo. They get ₦500 too! Unlimited referrals,
                instant credit, real money.
              </p>
              <Link
                href="/products/referral-program"
                className="group relative mt-7 inline-flex items-center gap-2 overflow-hidden rounded-full bg-velo-500 px-7 py-3.5 text-[14.5px] font-semibold text-white shadow-glow-blue transition-all hover:-translate-y-0.5 hover:bg-velo-400"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" aria-hidden="true" />
                <span className="relative flex items-center gap-2">
                  <UserPlus className="h-4.5 w-4.5" />
                  Open Account Now to Start Earning
                </span>
              </Link>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex flex-col gap-3">
                {[
                  { n: 1, title: "Share your code", text: "Send your unique referral code to friends" },
                  { n: 2, title: "They sign up & verify", text: "Complete KYC and fund with ₦1,000+" },
                  { n: 3, title: "Both earn ₦500!", text: "Instant bonus credited to both accounts" },
                ].map((s, i) => (
                  <motion.div
                    key={s.n}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.14, duration: 0.55 }}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/6 p-4 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-gold-400/40"
                  >
                    <span className="font-display flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-500 text-[15px] font-extrabold text-navy-950 shadow-lg shadow-gold-500/25">
                      {s.n}
                    </span>
                    <div>
                      <p className="text-[14.5px] font-bold">{s.title}</p>
                      <p className="text-[12.5px] text-white/55">{s.text}</p>
                    </div>
                  </motion.div>
                ))}
                <div className="mt-1 flex items-center justify-center gap-3 rounded-2xl border border-dashed border-gold-400/40 bg-gold-400/8 p-4">
                  <span className="font-display text-2xl font-extrabold text-gold-400">₦500</span>
                  <span className="text-gold-400/70">+</span>
                  <span className="font-display text-2xl font-extrabold text-gold-400">₦500</span>
                  <span className="text-[12.5px] text-white/55">— everyone wins 🎉</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

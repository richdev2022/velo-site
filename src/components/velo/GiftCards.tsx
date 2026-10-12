"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgePercent,
  CreditCard,
  RefreshCcw,
  ShieldCheck,
  ShoppingBag,
  Store,
  Timer,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { Eyebrow, Reveal, Stagger, StaggerItem } from "./primitives";

const BRANDS = [
  { name: "Amazon", color: "#FF9900" },
  { name: "Steam", color: "#1B2838" },
  { name: "Apple", color: "#333333" },
  { name: "Google Play", color: "#34A853" },
  { name: "PlayStation", color: "#0070D1" },
  { name: "Xbox", color: "#107C10" },
  { name: "Netflix", color: "#E50914" },
  { name: "Spotify", color: "#1DB954" },
  { name: "eBay", color: "#E53238" },
  { name: "Walmart", color: "#0071CE" },
  { name: "Sephora", color: "#000000" },
  { name: "Nike", color: "#111111" },
];

const FEATURES = [
  {
    icon: ShoppingBag,
    title: "Buy at the best rates",
    body: "Purchase gift cards for top global brands at rates consistently below face value. Pay from any wallet — USD, NGN, EUR or GBP.",
    tag: "Up to 5% below face value",
  },
  {
    icon: TrendingUp,
    title: "Sell in minutes",
    body: "Turn unused cards into instant cash. Upload the card, we verify it automatically, and funds hit your wallet — typically in under 3 minutes.",
    tag: "Up to 92% payout rate",
  },
  {
    icon: ShieldCheck,
    title: "Fraud-proof verification",
    body: "Every card passes through automated balance checks and fraud screening before money moves. Both buyers and sellers are protected.",
    tag: "Zero-chargeback guarantee",
  },
  {
    icon: RefreshCcw,
    title: "Trade both directions",
    body: "The only app where you can buy a card this morning and sell it this afternoon — with live rate quotes for both sides.",
    tag: "Live two-way rates",
  },
];

const STEPS = [
  { icon: Store, title: "Pick a card", body: "Choose from 50+ global brands with live buy & sell rates shown upfront." },
  { icon: CreditCard, title: "Pay or upload", body: "Pay from any wallet to buy — or upload card details to sell securely." },
  { icon: Timer, title: "Instant settlement", body: "Cards are delivered to your inbox instantly; sales are paid to your wallet in minutes." },
];

export function GiftCards() {
  return (
    <section id="giftcards" className="band relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-grid-adapt" aria-hidden="true" />
      <div
        className="absolute right-[-8%] top-[-10%] h-[420px] w-[520px] rounded-full opacity-15 blur-[120px] dark:opacity-25"
        style={{ background: "radial-gradient(closest-side, #F59E0B, transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-20%] left-[-6%] h-[380px] w-[460px] rounded-full opacity-12 blur-[110px] dark:opacity-20"
        style={{ background: "radial-gradient(closest-side, #2196F3, transparent)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>Gift cards</Eyebrow>
          <h2 className="font-display mt-5 text-[32px] font-bold leading-[1.12] text-slate-900 dark:text-white sm:text-[46px]">
            Buy &amp; sell gift cards,{" "}
            <span className="bg-gradient-to-r from-gold-500 to-velo-500 bg-clip-text text-transparent dark:from-gold-400 dark:to-velo-300">
              instantly
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15.5px] leading-relaxed text-slate-600 dark:text-white/60 sm:text-[16.5px]">
            The smartest gift card exchange for Africa and beyond. Trade 50+ international brands
            with live rates, automated verification and payouts that actually land in minutes.
          </p>
        </Reveal>

        {/* brand chips marquee */}
        <div className="mask-fade-x mt-10 overflow-hidden">
          <div className="flex w-max animate-marquee-fast gap-3.5">
            {[...BRANDS, ...BRANDS].map((b, i) => (
              <span
                key={`${b.name}-${i}`}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-2xl border border-slate-200/90 bg-white/85 px-4.5 py-3 text-[13.5px] font-semibold text-slate-800 shadow-sm backdrop-blur transition-colors hover:bg-white dark:border-white/12 dark:bg-white/7 dark:text-white/85 dark:shadow-none dark:hover:bg-white/12"
                aria-hidden={i >= BRANDS.length}
              >
                <span
                  className="flex h-6 w-6 items-center justify-center rounded-lg text-[10px] font-black text-white"
                  style={{ background: b.color }}
                >
                  {b.name.charAt(0)}
                </span>
                {b.name}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* image + rate card */}
          <Reveal className="relative">
            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="conic-border relative rounded-[28px] p-[1.5px] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.7)]"
            >
              <div className="relative overflow-hidden rounded-[26px]">
                <Image
                  src="/media/giftcards.png"
                  alt="Collection of colorful gift cards available on Velo Finance"
                  width={1344}
                  height={768}
                  className="h-auto w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                <div className="shine-sweep absolute inset-0" aria-hidden="true" />
              </div>
            </motion.div>

            {/* floating rate card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative mt-4 w-full rounded-3xl border border-slate-200/90 bg-white/90 p-5 shadow-2xl shadow-slate-900/10 backdrop-blur sm:absolute sm:-bottom-8 sm:left-8 sm:right-auto sm:mt-0 sm:w-[380px] dark:border-white/10 dark:bg-navy-900/90 dark:shadow-black/40"
            >
              <div className="flex items-center justify-between">
                <p className="font-display text-[13.5px] font-bold text-slate-900 dark:text-white">
                  Live sell rates
                </p>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-mint-500/20 px-2.5 py-1 text-[10.5px] font-bold text-mint-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mint-400" />
                  UPDATED 12s AGO
                </span>
              </div>
              <div className="mt-3.5 space-y-2.5">
                {[
                  { brand: "Amazon", value: "$100", payout: "₦152,000", rate: "92%" },
                  { brand: "Steam", value: "$100", payout: "₦148,500", rate: "90%" },
                  { brand: "Apple", value: "$100", payout: "₦151,200", rate: "91.5%" },
                ].map((r) => (
                  <div
                    key={r.brand}
                    className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-2.5 dark:border-white/8 dark:bg-white/6"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gold-400/20 text-[10.5px] font-black text-gold-600 dark:text-gold-400">
                        {r.brand.charAt(0)}
                      </span>
                      <div>
                        <p className="text-[12.5px] font-semibold text-slate-900 dark:text-white">
                          {r.brand} <span className="text-slate-400 dark:text-white/40">{r.value}</span>
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[12.5px] font-bold text-mint-600 dark:text-mint-400">{r.payout}</p>
                      <p className="text-[10px] text-slate-400 dark:text-white/40">{r.rate} payout</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </Reveal>

          {/* features */}
          <div className="flex flex-col gap-4 pt-6 lg:pt-0">
            <Stagger className="flex flex-col gap-4" gap={0.12}>
              {FEATURES.map((f) => (
                <StaggerItem key={f.title}>
                  <div className="group rounded-3xl border border-slate-200/80 bg-white/75 p-6 shadow-sm backdrop-blur transition-all hover:bg-white hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:bg-white/9">
                    <div className="flex items-start gap-4.5">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-400 to-gold-500 text-navy-950 shadow-lg transition-transform group-hover:scale-110">
                        <f.icon className="h-5.5 w-5.5" />
                      </span>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-display text-[17px] font-bold text-slate-900 dark:text-white">
                            {f.title}
                          </h3>
                          <span className="rounded-full bg-velo-500/12 px-2.5 py-0.5 text-[10.5px] font-bold text-velo-600 dark:bg-velo-500/20 dark:text-velo-200">
                            {f.tag}
                          </span>
                        </div>
                        <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-600 dark:text-white/60">
                          {f.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>

        {/* mini steps */}
        <Stagger className="mt-20 grid gap-5 md:grid-cols-3" gap={0.14}>
          {STEPS.map((s, i) => (
            <StaggerItem key={s.title}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-200/80 bg-white/75 p-7 shadow-sm backdrop-blur transition-all hover:-translate-y-1.5 hover:bg-white hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:bg-white/8">
                <span className="font-display absolute -right-3 -top-5 text-[84px] font-black text-slate-900/[0.04] transition-colors group-hover:text-velo-500/15 dark:text-white/5">
                  {i + 1}
                </span>
                <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-velo-500 text-white shadow-glow-blue">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display relative mt-4 text-[17px] font-bold text-slate-900 dark:text-white">
                  {s.title}
                </h3>
                <p className="relative mt-2 text-[13.5px] leading-relaxed text-slate-600 dark:text-white/60">
                  {s.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-8 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/80 px-5 py-2.5 text-[12.5px] font-medium text-slate-600 shadow-sm backdrop-blur dark:border-white/12 dark:bg-white/5 dark:text-white/65 dark:shadow-none">
            <BadgePercent className="h-4 w-4 text-gold-500 dark:text-gold-400" />
            Rates refresh every 60 seconds — what you see is exactly what you get
          </span>
          <span className="sr-only">
            <Wallet className="h-4 w-4" />
          </span>
        </Reveal>
      </div>
    </section>
  );
}

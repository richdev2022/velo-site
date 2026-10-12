"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDownToLine,
  BadgeCheck,
  Building2,
  Check,
  Copy,
  Landmark,
  QrCode,
  Wallet,
} from "lucide-react";
import { Eyebrow, Reveal, Stagger, StaggerItem } from "./primitives";

type Rail = {
  code: string;
  currency: string;
  flag: string;
  network: string;
  networkFull: string;
  accent: string;
  fields: { label: string; value: string; mono?: boolean }[];
  received: { amount: string; from: string; time: string }[];
  blurb: string;
  icon: React.ComponentType<{ className?: string }>;
};

const RAILS: Rail[] = [
  {
    code: "USD",
    currency: "US Dollar",
    flag: "🇺🇸",
    network: "ACH · Wire · FedNow",
    networkFull: "U.S. bank account & routing number issued in your name",
    accent: "#2196F3",
    blurb:
      "Receive USD like an American business. Give clients your own routing and account numbers — payments land via ACH, Wire or FedNow.",
    icon: Landmark,
    fields: [
      { label: "Beneficiary", value: "Adaeze Okafor" },
      { label: "Bank", value: "Community Federal Savings Bank" },
      { label: "Routing (ABA)", value: "026073150", mono: true },
      { label: "Account number", value: "8310••••4821", mono: true },
      { label: "Account type", value: "Checking" },
      { label: "Address", value: "275 Battery St, San Francisco, CA" },
    ],
    received: [
      { amount: "+ $4,250.00", from: "Stripe payout — ACH", time: "2m ago" },
      { amount: "+ $1,180.00", from: "Client invoice · Acme LLC", time: "1h ago" },
      { amount: "+ $12,000.00", from: "Wire — international", time: "Yesterday" },
    ],
  },
  {
    code: "EUR",
    currency: "Euro",
    flag: "🇪🇺",
    network: "SEPA · SEPA Instant",
    networkFull: "Euro-denominated IBAN issued in your name",
    accent: "#10B981",
    blurb:
      "A real European IBAN for accepting SEPA transfers from 36 countries. Funds arrive in seconds with SEPA Instant.",
    icon: Building2,
    fields: [
      { label: "Beneficiary", value: "Adaeze Okafor" },
      { label: "Bank", value: "Velo Finance Europe" },
      { label: "IBAN", value: "LT12 3250••••7734 9218", mono: true },
      { label: "BIC / SWIFT", value: "REVOLT21", mono: true },
      { label: "Currency", value: "EUR" },
      { label: "Scheme", value: "SEPA & SEPA Instant" },
    ],
    received: [
      { amount: "+ €2,400.00", from: "Shopify Europe payout", time: "just now" },
      { amount: "+ €980.50", from: "Client · Berlin GmbH", time: "3h ago" },
      { amount: "+ €5,600.00", from: "SEPA Instant · Amsterdam", time: "Yesterday" },
    ],
  },
  {
    code: "GBP",
    currency: "British Pound",
    flag: "🇬🇧",
    network: "FPS · CHAPS",
    networkFull: "Unique UK account number & sort code for Faster Payments",
    accent: "#8B5CF6",
    blurb:
      "Your own UK sort code and account number to receive Faster Payments from anyone in Britain — instantly, 24/7.",
    icon: Landmark,
    fields: [
      { label: "Beneficiary", value: "Adaeze Okafor" },
      { label: "Bank", value: "Velo Finance UK" },
      { label: "Sort code", value: "04-00-72", mono: true },
      { label: "Account number", value: "••••••1092", mono: true },
      { label: "Currency", value: "GBP" },
      { label: "Scheme", value: "Faster Payments (FPS)" },
    ],
    received: [
      { amount: "+ £3,120.00", from: "Marketplace payout · London", time: "5m ago" },
      { amount: "+ £740.00", from: "Consulting client", time: "2h ago" },
      { amount: "+ £9,000.00", from: "CHAPS settlement", time: "Mon" },
    ],
  },
  {
    code: "MXN",
    currency: "Mexican Peso",
    flag: "🇲🇽",
    network: "SPEI",
    networkFull: "CLABE account number for receiving SPEI payments in Mexico",
    accent: "#F59E0B",
    blurb:
      "Get a Mexican CLABE to receive SPEI transfers from across Latin America — the way 50 million Mexicans pay.",
    icon: Wallet,
    fields: [
      { label: "Beneficiary", value: "Adaeze Okafor" },
      { label: "Institution", value: "Velo Finance México" },
      { label: "CLABE", value: "0021 8000••••3387 104", mono: true },
      { label: "Currency", value: "MXN" },
      { label: "Scheme", value: "SPEI" },
      { label: "Settlement", value: "Instant, 24/7" },
    ],
    received: [
      { amount: "+ $18,400.00 MXN", from: "Cliente · Ciudad de México", time: "12m ago" },
      { amount: "+ $6,200.00 MXN", from: "Marketplace · Guadalajara", time: "4h ago" },
      { amount: "+ $40,000.00 MXN", from: "SPEI · Monterrey", time: "Fri" },
    ],
  },
  {
    code: "BRL",
    currency: "Brazilian Real",
    flag: "🇧🇷",
    network: "PIX",
    networkFull: "BR Code (PIX key) for receiving instant PIX payments",
    accent: "#34D399",
    blurb:
      "Receive PIX — Brazil's instant payment rail used by 150+ million people. Your BR Code settles in under 2 seconds.",
    icon: QrCode,
    fields: [
      { label: "Beneficiary", value: "Adaeze Okafor" },
      { label: "Institution", value: "Velo Finance Brasil" },
      { label: "PIX key (BR Code)", value: "velo••••@velofinance", mono: true },
      { label: "Currency", value: "BRL" },
      { label: "Scheme", value: "PIX (Banco Central do Brasil)" },
      { label: "Settlement", value: "Instant, 24/7" },
    ],
    received: [
      { amount: "+ R$ 5,780.00", from: "PIX · São Paulo", time: "just now" },
      { amount: "+ R$ 1,950.00", from: "Loja online · Rio", time: "1h ago" },
      { amount: "+ R$ 12,300.00", from: "PIX · Recife", time: "Thu" },
    ],
  },
  {
    code: "COP",
    currency: "Colombian Peso",
    flag: "🇨🇴",
    network: "Bre-B",
    networkFull: "Unique account number to receive Bre-B payments in Colombia",
    accent: "#FBBF24",
    blurb:
      "Tap into Colombia's new instant payments system, Bre-B. One account number, instant settlement, zero friction.",
    icon: ArrowDownToLine,
    fields: [
      { label: "Beneficiary", value: "Adaeze Okafor" },
      { label: "Institution", value: "Velo Finance Colombia" },
      { label: "Bre-B key", value: "•••• 7841 2205", mono: true },
      { label: "Currency", value: "COP" },
      { label: "Scheme", value: "Bre-B (Banco de la República)" },
      { label: "Settlement", value: "Instant, 24/7" },
    ],
    received: [
      { amount: "+ $4,300,000 COP", from: "Cliente · Bogotá", time: "22m ago" },
      { amount: "+ $1,150,000 COP", from: "Tienda · Medellín", time: "3h ago" },
      { amount: "+ $8,900,000 COP", from: "Bre-B · Cali", time: "Wed" },
    ],
  },
];

export function Rails() {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState<string | null>(null);
  const rail = RAILS[active];

  function copy(label: string, value: string) {
    navigator.clipboard?.writeText(value).catch(() => {});
    setCopied(label);
    setTimeout(() => setCopied(null), 1600);
  }

  return (
    <section id="rails" className="relative overflow-hidden bg-section py-20 sm:py-28">
      <div className="absolute inset-0 bg-dots opacity-40" aria-hidden="true" />
      <div
        className="absolute -top-32 right-0 h-[420px] w-[520px] rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(closest-side, #2196F3, transparent)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>Supported payment rails</Eyebrow>
          <h2 className="font-display mt-5 text-[32px] font-bold leading-[1.12] text-foreground sm:text-[46px]">
            Your own account in six currencies,{" "}
            <span className="text-gradient-blue">issued in your name</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15.5px] leading-relaxed text-muted-foreground sm:text-[16.5px]">
            Stop losing clients to expensive wire transfers. Receive payments exactly like a local
            business in the US, Europe, UK, Mexico, Brazil and Colombia — then hold, convert or
            withdraw whenever you want.
          </p>
        </Reveal>

        {/* currency tab switcher */}
        <Reveal delay={0.1} className="mt-10">
          <div
            className="mx-auto flex max-w-3xl gap-2 overflow-x-auto rounded-2xl border border-line bg-card p-2 shadow-sm no-scrollbar"
            role="tablist"
            aria-label="Choose currency"
          >
            {RAILS.map((r, i) => (
              <button
                key={r.code}
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={`relative flex min-w-[86px] flex-1 items-center justify-center gap-1.5 rounded-xl px-3 py-2.5 text-[13.5px] font-semibold transition-all ${
                  active === i
                    ? "text-white"
                    : "text-muted-foreground hover:bg-velo-500/10 hover:text-velo-600 dark:hover:text-velo-200"
                }`}
              >
                {active === i && (
                  <motion.span
                    layoutId="rail-pill"
                    className="absolute inset-0 rounded-xl shadow-glow-blue"
                    style={{ background: r.accent }}
                    transition={{ type: "spring", stiffness: 320, damping: 30 }}
                  />
                )}
                <span className="relative text-[15px]">{r.flag}</span>
                <span className="relative">{r.code}</span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* panel */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={rail.code}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]"
            >
              {/* account details card */}
              <div className="overflow-hidden rounded-3xl border border-line bg-card shadow-card-lift">
                <div
                  className="flex flex-wrap items-center justify-between gap-3 px-6 py-5 sm:px-8"
                  style={{
                    background: `linear-gradient(100deg, ${rail.accent}14, transparent 60%)`,
                  }}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-2xl text-[22px] shadow-inner"
                      style={{ background: `${rail.accent}1a` }}
                    >
                      {rail.flag}
                    </span>
                    <div>
                      <p className="font-display flex items-center gap-1.5 text-[17px] font-bold text-foreground">
                        {rail.code} {rail.currency} Account
                        <BadgeCheck className="h-4.5 w-4.5" style={{ color: rail.accent }} />
                      </p>
                      <p className="text-[12.5px] font-medium text-muted-foreground">{rail.networkFull}</p>
                    </div>
                  </div>
                  <span
                    className="rounded-full px-3.5 py-1.5 text-[11.5px] font-bold tracking-wide"
                    style={{ background: `${rail.accent}1a`, color: rail.accent }}
                  >
                    {rail.network}
                  </span>
                </div>

                <div className="grid gap-x-8 gap-y-4 px-6 py-6 sm:grid-cols-2 sm:px-8">
                  {rail.fields.map((f) => (
                    <div
                      key={f.label}
                      className="group flex items-center justify-between gap-3 border-b border-dashed border-line pb-3.5"
                    >
                      <div className="min-w-0">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/85">
                          {f.label}
                        </p>
                        <p
                          className={`mt-1 truncate text-[14px] font-semibold text-foreground ${
                            f.mono ? "font-mono tracking-wide" : ""
                          }`}
                        >
                          {f.value}
                        </p>
                      </div>
                      <button
                        onClick={() => copy(f.label, f.value)}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground/50 transition-all hover:bg-velo-500/10 hover:text-velo-500"
                        aria-label={`Copy ${f.label}`}
                      >
                        {copied === f.label ? (
                          <Check className="h-4 w-4 text-mint-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  ))}
                </div>

                <div className="border-t border-line bg-section px-6 py-4 sm:px-8">
                  <p className="text-[12.5px] leading-relaxed text-muted-foreground">{rail.blurb}</p>
                </div>
              </div>

              {/* incoming payments feed */}
              <div className="flex flex-col gap-4">
                <div className="rounded-3xl border border-line bg-card p-6 shadow-card-lift">
                  <div className="flex items-center justify-between">
                    <p className="font-display text-[15px] font-bold text-foreground">
                      Incoming {rail.code} payments
                    </p>
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute h-full w-full animate-pulse-ring rounded-full bg-mint-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-mint-500" />
                    </span>
                  </div>
                  <div className="mt-4 flex flex-col gap-3">
                    {rail.received.map((tx, i) => (
                      <motion.div
                        key={tx.from}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + i * 0.12 }}
                        className="flex items-center justify-between rounded-2xl border border-line bg-section px-4 py-3.5 transition-colors hover:border-velo-400/45 hover:bg-velo-500/10"
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className="flex h-9 w-9 items-center justify-center rounded-xl"
                            style={{ background: `${rail.accent}1a`, color: rail.accent }}
                          >
                            <ArrowDownToLine className="h-4.5 w-4.5" />
                          </span>
                          <div>
                            <p className="text-[13.5px] font-semibold text-foreground">
                              {tx.from}
                            </p>
                            <p className="text-[11.5px] text-muted-foreground/85">{tx.time}</p>
                          </div>
                        </div>
                        <p className="text-[13.5px] font-bold text-mint-500">{tx.amount}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl bg-navy-900 p-6 text-white shadow-card-lift">
                  <p className="font-display text-[15px] font-bold">
                    Get your {rail.code} account in 3 minutes
                  </p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-white/60">
                    No paperwork. No minimum balance. Just verify your identity once and every
                    currency account unlocks instantly.
                  </p>
                  <a
                    href="/download"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-velo-500 px-5 py-3 text-[13.5px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-velo-400"
                  >
                    Claim my {rail.code} account
                    <ArrowDownToLine className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* how it works */}
        <Stagger className="mt-16 grid gap-5 md:grid-cols-3" gap={0.14}>
          {[
            {
              step: "01",
              title: "Verify once",
              body: "Complete a one-time KYC with your BVN/NIN or passport. Every rail unlocks immediately after approval.",
            },
            {
              step: "02",
              title: "Share your details",
              body: "Send your USD routing number, EUR IBAN, GBP sort code, CLABE, PIX key or Bre-B number to clients and platforms.",
            },
            {
              step: "03",
              title: "Receive & control",
              body: "Funds land in your multi-currency wallet in seconds. Hold, convert at live rates or pay out — your money, your move.",
            },
          ].map((s) => (
            <StaggerItem key={s.step}>
              <div className="group h-full rounded-3xl border border-line bg-card p-7 transition-all hover:-translate-y-1.5 hover:border-velo-400/35 hover:shadow-card-lift">
                <span className="font-display text-[13px] font-bold tracking-widest text-velo-400">
                  STEP {s.step}
                </span>
                <h3 className="font-display mt-2.5 text-[18.5px] font-bold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-muted-foreground">{s.body}</p>
                <div className="mt-5 h-1 w-10 rounded-full bg-velo-500/25 transition-all duration-300 group-hover:w-16 group-hover:bg-velo-500" />
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

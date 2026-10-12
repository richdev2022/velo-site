"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowLeftRight,
  Coins,
  Repeat2,
  Sparkles,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { Eyebrow, Reveal, Stagger, StaggerItem } from "./primitives";

/* ---------------- data ---------------- */

const CURRENCIES = [
  { code: "USD", flag: "🇺🇸", name: "US Dollar", perUSD: 1 },
  { code: "EUR", flag: "🇪🇺", name: "Euro", perUSD: 0.921 },
  { code: "GBP", flag: "🇬🇧", name: "British Pound", perUSD: 0.784 },
  { code: "MXN", flag: "🇲🇽", name: "Mexican Peso", perUSD: 17.08 },
  { code: "BRL", flag: "🇧🇷", name: "Brazilian Real", perUSD: 5.46 },
  { code: "COP", flag: "🇨🇴", name: "Colombian Peso", perUSD: 4052 },
  { code: "NGN", flag: "🇳🇬", name: "Nigerian Naira", perUSD: 1483 },
  { code: "GHS", flag: "🇬🇭", name: "Ghanaian Cedi", perUSD: 15.4 },
  { code: "KES", flag: "🇰🇪", name: "Kenyan Shilling", perUSD: 129.2 },
  { code: "CAD", flag: "🇨🇦", name: "Canadian Dollar", perUSD: 1.36 },
];

const FEAT_COLUMNS = [
  {
    icon: Wallet,
    title: "Hold 10+ currencies side by side",
    body: "One wallet, every currency you trade in. Switch between balances with a tap and always know exactly what you own in your home currency.",
    points: ["Live total in your base currency", "Per-currency cards & account numbers", "Instant internal transfers between Velo users"],
  },
  {
    icon: Repeat2,
    title: "Convert at mid-market rates",
    body: "No hidden margin games. You see the real rate before you commit, conversion is instant, and fees are shown upfront — from 0.4%.",
    points: ["Mid-market rate engine", "Fees from 0.4% — displayed upfront", "Rate alerts straight to your phone"],
  },
  {
    icon: Coins,
    title: "Auto-convert & treasury rules",
    body: "Set smart rules once: keep 20% of every USD payment in dollars, auto-sweep the rest to Naira, and smooth out volatility without lifting a finger.",
    points: ["Percentage-based auto-sweep", "Scheduled conversions", "Volatility protection"],
  },
];

/* ---------------- converter ---------------- */

function Converter() {
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("NGN");
  const [amount, setAmount] = useState("1000");
  const [tick, setTick] = useState(0);

  // gentle live-rate simulation
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 3200);
    return () => clearInterval(id);
  }, []);

  const rate = useMemo(() => {
    const jitter = 1 + (Math.sin(tick * 7.3) * 0.0035 + (tick % 2 === 0 ? 0.0008 : -0.0006));
    const f = CURRENCIES.find((c) => c.code === from)!;
    const t = CURRENCIES.find((c) => c.code === to)!;
    return (t.perUSD / f.perUSD) * jitter;
  }, [from, to, tick]);

  const num = parseFloat(amount.replace(/,/g, "")) || 0;
  const converted = num * rate;
  const fee = Math.max(converted * 0.004, 0);
  const convertedStr = converted.toLocaleString("en-US", { maximumFractionDigits: 2 });

  function swap() {
    setFrom(to);
    setTo(from);
  }

  return (
    <div className="relative overflow-hidden rounded-[28px] bg-navy-950 p-6 shadow-[0_30px_90px_-25px_rgba(8,28,49,0.75)] sm:p-8">
      <div className="absolute inset-0 bg-grid-dark" aria-hidden="true" />
      <div
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-30 blur-[90px]"
        style={{ background: "radial-gradient(closest-side, #2196F3, transparent)" }}
        aria-hidden="true"
      />

      <div className="relative">
        <div className="flex items-center justify-between">
          <p className="font-display text-[16px] font-bold text-white">Live converter</p>
          <span className="glass-dark inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold text-mint-400">
            <Sparkles className="h-3 w-3" /> Mid-market
          </span>
        </div>

        <div className="mt-5 space-y-3">
          <CurrencyField
            label="You convert"
            value={amount}
            onChange={(v) => setAmount(v.replace(/[^0-9.]/g, ""))}
            code={from}
            onCode={setFrom}
            exclude={[to]}
          />
          <div className="relative z-10 flex justify-center">
            <button
              onClick={swap}
              aria-label="Swap currencies"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-navy-900 text-velo-300 shadow-lg transition-all hover:rotate-180 hover:border-velo-400 hover:text-velo-200"
            >
              <ArrowLeftRight className="h-5 w-5" />
            </button>
          </div>
          <CurrencyField
            key={`out-${convertedStr}`}
            label="They receive"
            value={convertedStr}
            readOnly
            code={to}
            onCode={setTo}
            exclude={[from]}
            flash
          />
        </div>

        <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4.5 py-3.5">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-wider text-white/45">
              1 {from} → {to}
            </p>
            <p className="mt-0.5 font-mono text-[15px] font-semibold text-velo-200">
              {rate.toLocaleString("en-US", { maximumFractionDigits: rate > 100 ? 1 : 4 })}
            </p>
          </div>
          <div className="text-right">
            <p className="text-[11px] font-medium uppercase tracking-wider text-white/45">
              Velo fee
            </p>
            <p className="mt-0.5 text-[15px] font-semibold text-white">
              0.4% <span className="text-white/40">({fee.toLocaleString("en-US", { maximumFractionDigits: 2 })} {to})</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CurrencyField({
  label,
  value,
  onChange,
  readOnly = false,
  code,
  onCode,
  exclude,
  flash = false,
}: {
  label: string;
  value: string;
  onChange?: (v: string) => void;
  readOnly?: boolean;
  code: string;
  onCode: (c: string) => void;
  exclude: string[];
  flash?: boolean;
}) {
  const c = CURRENCIES.find((x) => x.code === code)!;
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`rounded-2xl border p-4 transition-colors ${
        flash ? "animate-rate-flash border-mint-500/40" : "border-white/12"
      } bg-white/6`}
    >
      <p className="text-[11px] font-medium uppercase tracking-wider text-white/45">{label}</p>
      <div className="mt-2 flex items-center justify-between gap-3">
        <input
          inputMode="decimal"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          readOnly={readOnly}
          placeholder="0.00"
          className="w-full min-w-0 bg-transparent font-display text-[24px] font-bold text-white outline-none placeholder:text-white/25 sm:text-[27px]"
        />
        <div className="relative shrink-0">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1.5 rounded-xl bg-white/10 px-3 py-2.5 text-[13.5px] font-semibold text-white transition-colors hover:bg-white/15"
            aria-expanded={open}
            aria-haspopup="listbox"
          >
            <span className="text-[16px]">{c.flag}</span> {c.code}
            <svg width="9" height="6" viewBox="0 0 9 6" className={`transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true">
              <path d="M1 1l3.5 3.5L8 1" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
            </svg>
          </button>
          {open && (
            <ul
              role="listbox"
              className="absolute right-0 z-30 mt-2 max-h-56 w-44 overflow-y-auto rounded-2xl border border-white/15 bg-navy-900 p-1.5 shadow-2xl no-scrollbar"
            >
              {CURRENCIES.filter((x) => !exclude.includes(x.code)).map((x) => (
                <li key={x.code}>
                  <button
                    role="option"
                    aria-selected={x.code === code}
                    onClick={() => {
                      onCode(x.code);
                      setOpen(false);
                    }}
                    className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-[13px] font-medium transition-colors ${
                      x.code === code ? "bg-velo-500/25 text-white" : "text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span className="text-[15px]">{x.flag}</span>
                    <span className="flex-1 truncate">{x.name}</span>
                    <span className="text-[11px] text-white/40">{x.code}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------------- section ---------------- */

export function Wallets() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="wallets" className="band relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-grid-adapt opacity-70" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-0 h-[300px] w-[700px] -translate-x-1/2 rounded-full opacity-10 blur-[120px] dark:opacity-20"
        style={{ background: "radial-gradient(closest-side, #2196F3, transparent)" }}
        aria-hidden="true"
      />

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>Multi-currency wallets</Eyebrow>
          <h2 className="font-display mt-5 text-[32px] font-bold leading-[1.12] text-slate-900 dark:text-white sm:text-[46px]">
            Hold it. Convert it.{" "}
            <span className="text-gradient-blue">Master it.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15.5px] leading-relaxed text-slate-600 dark:text-white/60 sm:text-[16.5px]">
            Every payment that lands in your virtual accounts lives in its own wallet. Convert
            between currencies instantly at rates that actually respect you.
          </p>
        </Reveal>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal delay={0.05}>
            <Converter />
          </Reveal>

          <Stagger className="flex flex-col gap-4" gap={0.14}>
            {FEAT_COLUMNS.map((f) => (
              <StaggerItem key={f.title}>
                <div className="group rounded-3xl border border-slate-200/80 bg-white/75 p-6 shadow-sm backdrop-blur transition-all hover:bg-white hover:shadow-lg sm:p-7 dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:bg-white/9">
                  <div className="flex items-start gap-4.5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-velo-500 to-velo-700 text-white shadow-glow-blue transition-transform group-hover:scale-110">
                      <f.icon className="h-5.5 w-5.5" />
                    </span>
                    <div>
                      <h3 className="font-display text-[17.5px] font-bold text-slate-900 dark:text-white">{f.title}</h3>
                      <p className="mt-2 text-[14px] leading-relaxed text-slate-600 dark:text-white/60">{f.body}</p>
                      <ul className="mt-3.5 flex flex-col gap-1.5">
                        {f.points.map((p) => (
                          <li key={p} className="flex items-center gap-2 text-[13px] text-velo-700/90 dark:text-velo-200/90">
                            <span className="h-1.5 w-1.5 rounded-full bg-velo-400" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* rate board */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="relative mt-14 overflow-hidden rounded-3xl border border-slate-200/80 bg-white/70 shadow-sm dark:border-white/10 dark:bg-white/4"
        >
          <div
            className="animate-glow-pulse absolute -right-20 -top-24 h-56 w-56 rounded-full opacity-15 blur-[80px] dark:opacity-25"
            style={{ background: "radial-gradient(closest-side, #2196F3, transparent)" }}
            aria-hidden="true"
          />
          <div className="relative flex items-center justify-between border-b border-slate-200/80 px-6 py-4 dark:border-white/10">
            <p className="font-display text-[14.5px] font-bold text-slate-900 dark:text-white">Today&apos;s rate board</p>
            <span className="inline-flex items-center gap-1.5 text-[11.5px] font-medium text-slate-500 dark:text-white/45">
              <TrendingUp className="h-3.5 w-3.5 text-mint-400" />
              <TrendingDown className="h-3.5 w-3.5 text-rose-400" />
              updating live
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {CURRENCIES.slice(0, 10).map((c, i) => {
              const up = i % 3 !== 1;
              return (
                <div
                  key={c.code}
                  className="flex items-center justify-between gap-2 border-b border-slate-100 px-5 py-4 transition-all hover:bg-slate-50 sm:border-r dark:border-white/6 dark:hover:bg-white/8"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-[17px]">{c.flag}</span>
                    <div>
                      <p className="text-[13px] font-bold text-slate-900 dark:text-white">{c.code}/USD</p>
                      <p className="text-[10.5px] text-slate-400 dark:text-white/40">{c.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-[12.5px] font-semibold text-velo-600 dark:text-velo-200">
                      {c.perUSD.toLocaleString("en-US", { maximumFractionDigits: c.perUSD > 100 ? 1 : 3 })}
                    </p>
                    <p className={`text-[10.5px] font-semibold ${up ? "text-mint-400" : "text-rose-400"}`}>
                      {up ? "▲" : "▼"} {(0.12 + (i % 4) * 0.09).toFixed(2)}%
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

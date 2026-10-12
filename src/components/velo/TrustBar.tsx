"use client";

import { Counter, Stagger, StaggerItem } from "./primitives";

const STATS = [
  { value: 40000, suffix: "+", label: "Active users", decimals: 0 },
  { value: 27, suffix: "", label: "Countries served", decimals: 0 },
  { value: 4.2, prefix: "$", suffix: "B+", label: "Processed volume", decimals: 1 },
  { value: 99.98, suffix: "%", label: "Platform uptime", decimals: 2 },
];

const PERKS = [
  { flag: "🇺🇸", name: "United States", note: "ACH + Wire" },
  { flag: "🇪🇺", name: "Eurozone", note: "SEPA + SEPA Instant" },
  { flag: "🇬🇧", name: "United Kingdom", note: "FPS + BACS" },
  { flag: "🇲🇽", name: "Mexico", note: "SPEI" },
  { flag: "🇧🇷", name: "Brazil", note: "PIX" },
  { flag: "🇨🇴", name: "Colombia", note: "Bre-B" },
  { flag: "🇳🇬", name: "Nigeria", note: "NIP Instant" },
  { flag: "🇰🇪", name: "Kenya", note: "M-PESA" },
  { flag: "🇬🇭", name: "Ghana", note: "Mobile Money" },
  { flag: "🇿🇦", name: "South Africa", note: "PayShap" },
  { flag: "🇨🇦", name: "Canada", note: "Interac" },
  { flag: "🇦🇪", name: "UAE", note: "UAEFTS" },
];

export function TrustBar() {
  return (
    <section className="relative bg-white py-16 sm:py-20 dark:bg-navy-950">
      <div className="absolute inset-0 bg-grid-light opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Stagger className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((s) => (
            <StaggerItem key={s.label} className="text-center">
              <p className="font-display text-[34px] font-bold text-velo-900 sm:text-[42px] dark:text-white">
                <Counter
                  to={s.value}
                  prefix={s.prefix ?? ""}
                  suffix={s.suffix}
                  decimals={s.decimals}
                />
              </p>
              <p className="mt-1 text-[13.5px] font-medium text-slate-500">{s.label}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-14">
          <p className="text-center text-[12.5px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            Receive like a local in the world&apos;s biggest economies
          </p>
          <Stagger
            className="mt-7 flex flex-wrap items-center justify-center gap-2.5"
            gap={0.05}
          >
            {PERKS.map((p) => (
              <StaggerItem key={p.name}>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-[12.5px] font-medium text-slate-600 shadow-sm transition-all hover:-translate-y-0.5 hover:border-velo-200 hover:text-velo-700 hover:shadow-md dark:hover:text-velo-300 dark:hover:border-velo-400/40 dark:bg-white/5">
                  <span className="text-[15px]">{p.flag}</span>
                  {p.name}
                  <span className="text-[10.5px] text-slate-400">{p.note}</span>
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

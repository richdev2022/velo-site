import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

export interface LegalSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  subsections?: { title: string; paragraphs?: string[]; bullets?: string[] }[];
}

export function LegalShell({
  title,
  updated,
  intro,
  sections,
  children,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
  children?: ReactNode;
}) {
  return (
    <>
      <section className="band relative overflow-hidden pb-14 pt-12 sm:pb-16">
        <div className="absolute inset-0 bg-grid-adapt opacity-40" aria-hidden="true" />
        <div
          className="absolute -top-32 left-1/2 h-[360px] w-[680px] -translate-x-1/2 rounded-full bg-velo-500/8 blur-[120px] dark:bg-velo-500/14"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12.5px] text-slate-500 dark:text-white/45">
            <Link href="/" className="transition-colors hover:text-slate-800 dark:hover:text-white/80">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/legal/privacy" className="transition-colors hover:text-slate-800 dark:hover:text-white/80">Legal</Link>
          </nav>
          <h1 className="mt-7 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-[15.5px] leading-relaxed text-slate-600 dark:text-white/60">{intro}</p>
          <p className="glass-float mt-4 inline-flex rounded-full px-4 py-1.5 text-[12px] font-semibold text-velo-600 dark:text-velo-300">
            Last updated: {updated}
          </p>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="flex flex-col gap-12">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-[family-name:var(--font-poppins)] text-[22px] font-extrabold tracking-tight text-navy-900 sm:text-[26px]">
                  {s.title}
                </h2>
                {s.paragraphs?.map((p) => (
                  <p key={p.slice(0, 40)} className="mt-4 text-[15px] leading-[1.9] text-slate-600">
                    {p}
                  </p>
                ))}
                {s.bullets && (
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {s.bullets.map((b) => (
                      <li key={b.slice(0, 40)} className="flex items-start gap-3 text-[14.5px] leading-relaxed text-slate-600">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-velo-500" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
                {s.subsections?.map((sub) => (
                  <div key={sub.title} className="mt-6">
                    <h3 className="font-[family-name:var(--font-poppins)] text-[17px] font-bold text-navy-900">
                      {sub.title}
                    </h3>
                    {sub.paragraphs?.map((p) => (
                      <p key={p.slice(0, 40)} className="mt-3 text-[14.5px] leading-[1.9] text-slate-600">
                        {p}
                      </p>
                    ))}
                    {sub.bullets && (
                      <ul className="mt-3 flex flex-col gap-2.5">
                        {sub.bullets.map((b) => (
                          <li key={b.slice(0, 40)} className="flex items-start gap-3 text-[14.5px] leading-relaxed text-slate-600">
                            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-velo-500" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
          {children}
          <div className="mt-14 rounded-3xl border border-velo-100 bg-velo-50/60 p-7 dark:border-velo-500/20 dark:bg-velo-500/10">
            <p className="text-[14.5px] leading-relaxed text-slate-600">
              Questions about this policy? Contact our team at{" "}
              <a href="mailto:info@velofinance.co" className="font-semibold text-velo-600">
                info@velofinance.co
              </a>{" "}
              or call{" "}
              <a href="tel:+2347007003300" className="font-semibold text-velo-600">
                +234 700 700 3300
              </a>
              . See also our{" "}
              <Link href="/legal/terms" className="font-semibold text-velo-600">Terms of Service</Link>{" "}
              and{" "}
              <Link href="/legal/cookies" className="font-semibold text-velo-600">Cookie Policy</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

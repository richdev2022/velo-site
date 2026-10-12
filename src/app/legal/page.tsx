import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, FileText, Scale, ShieldCheck, UserRoundX } from "lucide-react";
import { PageHero, Section } from "@/components/velo/page-parts";
import { Reveal } from "@/components/velo/primitives";

export const metadata: Metadata = {
  alternates: { canonical: "/legal" },
  title: "Legal",
  description: "Velo legal documents — privacy policy, terms of service, cookie policy and account deletion.",
};

const DOCS = [
  {
    icon: ShieldCheck,
    title: "Privacy Policy",
    text: "How we collect, use, store and protect your personal information.",
    href: "/legal/privacy",
  },
  {
    icon: Scale,
    title: "Terms & Conditions",
    text: "The agreement governing your use of Velo's services.",
    href: "/legal/terms",
  },
  {
    icon: FileText,
    title: "Cookie Policy",
    text: "Cookies and similar technologies — what we use and why.",
    href: "/legal/cookies",
  },
  {
    icon: UserRoundX,
    title: "Delete Account",
    text: "Delete your account and understand what happens to your data.",
    href: "/delete-account",
  },
];

export default function LegalPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="The fine print,"
        highlight="in plain language."
        description="Everything governing your relationship with Velo — written to be read, not hidden."
      />
      <Section className="bg-white dark:bg-navy-950">
        <div className="grid gap-5 sm:grid-cols-2">
          {DOCS.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.06}>
              <Link
                href={d.href}
                className="group flex h-full flex-col rounded-3xl border border-slate-100 bg-slate-50/50 p-7 transition-all hover:-translate-y-1 hover:border-velo-200 hover:bg-white hover:shadow-[0_24px_50px_-20px_rgba(33,150,243,0.25)] dark:hover:border-velo-400/40 dark:hover:bg-white/10"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-velo-50 text-velo-600 transition-colors group-hover:bg-velo-500 group-hover:text-white dark:text-velo-400 dark:bg-velo-500/15">
                    <d.icon className="h-6 w-6" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-velo-500" />
                </div>
                <h2 className="mt-5 font-[family-name:var(--font-poppins)] text-[18px] font-bold text-navy-900 dark:text-white">
                  {d.title}
                </h2>
                <p className="mt-2 text-[13.5px] leading-relaxed text-slate-500">{d.text}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

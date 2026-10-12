import type { Metadata } from "next";
import Link from "next/link";
import {
  Apple,
  Chrome,
  PlayCircle,
  Smartphone,
  QrCode,
  ShieldCheck,
  Zap,
  Globe,
  Check,
} from "lucide-react";
import { PageHero, Section, CtaBand } from "@/components/velo/page-parts";
import { Reveal, Eyebrow } from "@/components/velo/primitives";

export const metadata: Metadata = {
  alternates: { canonical: "/download" },
  title: "Download the App",
  description:
    "Download Velo for iOS, Android or use the web app — open a free account in minutes and start borderless banking today.",
};

const PLATFORMS = [
  {
    icon: Apple,
    store: "App Store",
    note: "iOS 14 and above",
    primary: true,
  },
  {
    icon: PlayCircle,
    store: "Google Play",
    note: "Android 8 and above",
    primary: true,
  },
  {
    icon: Chrome,
    store: "Web App",
    note: "Any modern browser — nothing to install",
    primary: false,
  },
];

const REASONS = [
  { icon: Globe, text: "Receive like a local in USD, EUR, GBP, MXN, BRL & COP" },
  { icon: Zap, text: "Instant local transfers and cross-border payments" },
  { icon: ShieldCheck, text: "Bank-grade security with biometric login" },
];

export default function DownloadPage() {
  return (
    <>
      <PageHero
        eyebrow="Download Velo"
        title="Your bank, in your pocket —"
        highlight="everywhere on earth."
        description="Open a free account in minutes. Hold multi-currency wallets, receive international payments, trade gift cards and more — from one beautiful app."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {PLATFORMS.map((p) => (
            <a
              key={p.store}
              href="#"
              className="group flex items-center gap-4 rounded-3xl border border-white/12 bg-white/6 p-5 backdrop-blur transition-all hover:-translate-y-1 hover:border-velo-400/50 hover:bg-white/10"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-velo-500/15 text-velo-300 transition-colors group-hover:bg-velo-500 group-hover:text-white">
                <p.icon className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-[10.5px] font-semibold uppercase tracking-wider text-white/45">
                  {p.store === "Web App" ? "Open in" : "Get it on"}
                </span>
                <span className="block text-[16px] font-bold text-white">{p.store}</span>
                <span className="block text-[11px] text-white/45">{p.note}</span>
              </span>
            </a>
          ))}
        </div>
      </PageHero>

      <Section className="bg-white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Get Started in Minutes</Eyebrow>
            <h2 className="mt-5 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Three minutes to a{" "}
              <span className="text-gradient-blue">global bank account</span>
            </h2>
            <p className="mt-4 max-w-xl text-[15.5px] leading-[1.85] text-slate-500">
              Download, sign up with your phone number, verify your identity once — and you&apos;re in.
              Your naira wallet is live immediately, and your six international account details are
              ready to share with clients, platforms and employers the moment KYC completes.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              {REASONS.map((r) => (
                <div key={r.text} className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50/60 p-4.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-velo-50 text-velo-600">
                    <r.icon className="h-5 w-5" />
                  </span>
                  <p className="text-[14px] font-medium text-navy-900">{r.text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mx-auto flex max-w-md flex-col items-center gap-6 rounded-[32px] border border-slate-100 bg-gradient-to-b from-slate-50 to-white p-8 shadow-[0_30px_70px_-30px_rgba(12,41,71,0.3)]">
              <div className="flex h-40 w-40 items-center justify-center rounded-3xl bg-navy-950 p-3">
                <QrCode className="h-full w-full text-white" strokeWidth={1.2} />
              </div>
              <div className="text-center">
                <p className="font-[family-name:var(--font-poppins)] text-[17px] font-bold text-navy-900">
                  Scan to download
                </p>
                <p className="mt-1.5 text-[13px] text-slate-500">
                  Point your camera at the code — the right store opens automatically.
                </p>
              </div>
              <div className="flex w-full items-center justify-center gap-2 rounded-full bg-velo-50 px-5 py-3 text-[13px] font-semibold text-velo-700">
                <Smartphone className="h-4.5 w-4.5" /> Free on iOS &amp; Android
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Prefer Web?</Eyebrow>
          <h2 className="mt-5 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Everything works in the <span className="text-gradient-blue">browser too</span>
          </h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-slate-500">
            The Velo web app mirrors the mobile experience — same wallets, same transfers, same
            security — perfect for desktop work.
          </p>
        </Reveal>
        <Reveal className="mt-10 text-center" delay={0.1}>
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-7 py-3.5 text-[14px] font-semibold text-navy-900 transition-all hover:border-velo-300 hover:text-velo-600"
          >
            <Check className="h-4 w-4 text-mint-500" /> See how the web app works
          </Link>
        </Reveal>
      </Section>

      <CtaBand />
    </>
  );
}

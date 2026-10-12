import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  Bell,
  Database,
  FileCheck2,
  Fingerprint,
  Lock,
  MessageSquareWarning,
  MonitorSmartphone,
  ShieldCheck,
  Phone,
} from "lucide-react";
import { PageHero, Section, CtaBand } from "@/components/velo/page-parts";
import { Reveal, Stagger, StaggerItem, Eyebrow } from "@/components/velo/primitives";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  alternates: { canonical: "/security" },
  title: "Security",
  description:
    "Advanced protection and transparent practices to keep your money and data safe — multi-layer security, compliance and 24/7 monitoring at Velo.",
};

const LAYERS = [
  {
    icon: Lock,
    title: "Encryption Everywhere",
    text: "Every session, transaction and message is encrypted in transit and at rest using bank-grade TLS and AES standards. Your data is unreadable to anyone but you.",
  },
  {
    icon: Fingerprint,
    title: "Biometric & Device Binding",
    text: "Face and fingerprint login, plus device binding that only lets your registered phone operate your account — even a stolen password is useless.",
  },
  {
    icon: MonitorSmartphone,
    title: "24/7 Fraud Monitoring",
    text: "Machine-learning models score every transaction in real time, flag anomalies in milliseconds and hold suspicious activity before money moves.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Segregated",
    text: "Customer funds are held with licensed partner banks and segregated from company funds. Your money is never our working capital.",
  },
  {
    icon: Database,
    title: "Data Minimisation",
    text: "We collect only what regulation requires, never sell your data, and give you full control to export or delete your account at any time.",
  },
  {
    icon: Bell,
    title: "Real-Time Alerts",
    text: "Push notifications for every login, transfer and card charge mean you spot anything unusual in seconds — and freeze everything in one tap.",
  },
];

const COMPLIANCE = [
  "Licensed and regulated financial partners",
  "Bank-level data protection standards",
  "Independent security audits",
  "AML & sanctions screening on every transaction",
  "KYC verification on every account",
  "PCI-DSS compliant card processing",
];

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Security — Our Priority"
        title="Your money, protected"
        highlight="at every layer."
        description="Advanced protection and transparent practices to keep your money and data safe — from device-level biometrics to global compliance."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/download"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-velo-500 px-7 py-3.5 text-[14.5px] font-semibold text-white shadow-glow-blue transition-all hover:-translate-y-0.5 hover:bg-velo-400"
          >
            Learn About Our Security
          </Link>
          <a
            href="#compliance"
            className="glass-dark inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[14.5px] font-semibold text-white transition-all hover:bg-white/12"
          >
            <FileCheck2 className="h-4.5 w-4.5 text-velo-300" />
            View Compliance Practices
          </a>
        </div>
      </PageHero>

      {/* multi-layer security */}
      <Section className="bg-white">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Multi-Layer Security</Eyebrow>
          <h2 className="mt-5 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Protected at <span className="text-gradient-blue">every interaction</span>
          </h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-slate-500">
            Every aspect of our platform is designed with security at its core — six layers that
            work together around the clock.
          </p>
        </Reveal>
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LAYERS.map((l) => (
            <StaggerItem key={l.title}>
              <div className="h-full rounded-3xl border border-slate-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-velo-200 hover:shadow-[0_24px_50px_-20px_rgba(33,150,243,0.25)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-velo-500 to-velo-600 text-white shadow-glow-blue">
                  <l.icon className="h-5.5 w-5.5" />
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-poppins)] text-[17px] font-bold text-navy-900">
                  {l.title}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-slate-500">{l.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* compliance */}
      <Section id="compliance" className="bg-slate-50">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Compliance & Regulations</Eyebrow>
            <h2 className="mt-5 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Adhering to the highest{" "}
              <span className="text-gradient-blue">international standards</span>
            </h2>
            <p className="mt-4 text-[15.5px] leading-[1.85] text-slate-500">
              We adhere to the highest international standards and regulatory requirements. Velo
              is licensed and regulated through financial partners across Africa and
              internationally, ensuring your deposits are protected and our operations meet the
              highest standards. Every account passes KYC verification, every transaction is
              screened against sanctions lists, and our infrastructure is audited independently.
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {["Verified & Audited", "Trusted by Regulators", "Funds Segregated"].map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-2 rounded-full border border-mint-400/30 bg-mint-400/10 px-4 py-2 text-[12.5px] font-semibold text-mint-500"
                >
                  <ShieldCheck className="h-4 w-4" /> {b}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_20px_60px_-30px_rgba(12,41,71,0.3)]">
              <p className="text-[12px] font-bold uppercase tracking-wider text-velo-600">
                Our compliance checklist
              </p>
              <ul className="mt-5 flex flex-col gap-4">
                {COMPLIANCE.map((c) => (
                  <li key={c} className="flex items-center gap-3.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-velo-500/12">
                      <ShieldCheck className="h-4 w-4 text-velo-600" />
                    </span>
                    <span className="text-[14.5px] font-medium text-navy-900">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* personal security tips */}
      <Section className="bg-white">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Keep Yourself Protected</Eyebrow>
          <h2 className="mt-5 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Your data is safe with us —{" "}
            <span className="text-gradient-blue">and with you</span>
          </h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-slate-500">
            Advanced security measures work 24/7 to protect your financial information. A few
            habits make it unbreakable.
          </p>
        </Reveal>
        <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Enable biometric login", d: "Face ID or fingerprint beats any password you'll ever choose." },
            { t: "Never share OTPs", d: "No Velo staff will ever ask for your PIN, password or OTP codes — anyone who does is a fraudster." },
            { t: "Check links & apps", d: "Only download Velo from official stores and always check the sender's exact address." },
            { t: "Alert us instantly", d: "See something strange? Freeze your card in-app and contact support immediately." },
          ].map((s) => (
            <StaggerItem key={s.t}>
              <div className="h-full rounded-3xl border border-slate-100 bg-slate-50/60 p-6">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-mint-400/15 font-[family-name:var(--font-poppins)] text-[13px] font-extrabold text-mint-500">
                  ✓
                </span>
                <h3 className="mt-4 font-[family-name:var(--font-poppins)] text-[15.5px] font-bold text-navy-900">
                  {s.t}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-500">{s.d}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* report an issue */}
      <Section className="bg-navy-950 text-white">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow dark>Security Issues?</Eyebrow>
          <h2 className="mt-5 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight sm:text-4xl">
            Noticed something suspicious?
          </h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-white/60">
            If you notice any suspicious activity on your account or suspect a security breach,
            contact us immediately. Quick action protects your account and funds.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            {
              icon: Phone,
              title: "Emergency Hotline",
              text: SITE.phoneDisplay + " — 24/7 immediate assistance",
              cta: "Call now",
              href: `tel:${SITE.phone}`,
            },
            {
              icon: Bell,
              title: "In-App Alert",
              text: "Report directly from the app in two taps — instant triage.",
              cta: "Open the app",
              href: "/download",
            },
            {
              icon: MessageSquareWarning,
              title: "Online Form",
              text: "Detailed incident reporting with response within 2 hours.",
              cta: "Report issue",
              href: "/support#contact",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-velo-500/15 text-velo-300">
                  <c.icon className="h-5.5 w-5.5" />
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-poppins)] text-[17px] font-bold">
                  {c.title}
                </h3>
                <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-white/55">{c.text}</p>
                <Link
                  href={c.href}
                  className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-velo-500 px-5 py-2.5 text-[13px] font-semibold text-white transition-all hover:bg-velo-400"
                >
                  {c.cta} <AlertTriangle className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}

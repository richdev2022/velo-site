"use client";

import Image from "next/image";
import {
  Fingerprint,
  KeyRound,
  Lock,
  ShieldCheck,
  Server,
  Eye,
  FileCheck2,
  Globe,
} from "lucide-react";
import { Eyebrow, Reveal, Stagger, StaggerItem } from "./primitives";

const FEATURES = [
  {
    icon: Lock,
    title: "256-bit encryption, everywhere",
    body: "Every transaction, balance and document is protected with AES-256 encryption in transit and at rest — the same standard used by global banks.",
  },
  {
    icon: Fingerprint,
    title: "Biometric-grade identity",
    body: "Face-matching verification powered by industry-leading KYC partners. Your account details are issued only to you, in your legal name.",
  },
  {
    icon: Server,
    title: "Licensed & regulated partners",
    body: "We hold and move funds exclusively through licensed, audited financial institutions in every market we operate in.",
  },
  {
    icon: KeyRound,
    title: "Hardware-key 2FA",
    body: "Protect your account with app-based or hardware security keys. Device management, session control and instant freeze — built in.",
  },
  {
    icon: Eye,
    title: "Real-time fraud monitoring",
    body: "Machine-learning models score every transaction in milliseconds, blocking suspicious activity before money ever leaves.",
  },
  {
    icon: FileCheck2,
    title: "Segregated client funds",
    body: "Customer money is held in segregated accounts and never used for lending or trading. Your balance is your balance — always.",
  },
];

const BADGES = [
  { label: "PCI DSS Level 1", sub: "Card data security" },
  { label: "ISO 27001", sub: "Information security" },
  { label: "SOC 2 Type II", sub: "Audited controls" },
  { label: "GDPR Ready", sub: "Data privacy" },
];

export function Security() {
  return (
    <section id="security" className="relative overflow-hidden bg-background py-20 sm:py-28">
      <div className="absolute inset-0 bg-dots opacity-30" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow>Security &amp; trust</Eyebrow>
              <h2 className="font-display mt-5 text-[32px] font-bold leading-[1.12] text-foreground sm:text-[46px]">
                Your money,
                <br />
                guarded like{" "}
                <span className="text-gradient-blue">fort Knox</span>
              </h2>
              <p className="mt-5 max-w-lg text-[15.5px] leading-relaxed text-muted-foreground sm:text-[16.5px]">
                Moving money across borders demands more than good intentions. Velo is built on
                bank-grade infrastructure, licensed partners and relentless monitoring — so you can
                focus on growing your business, not checking your back.
              </p>
            </Reveal>

            <Reveal delay={0.12} className="mt-8">
              <div className="conic-border relative rounded-3xl p-[1.5px] shadow-card-lift">
                <div className="relative overflow-hidden rounded-[22px] bg-navy-950">
                  <Image
                    src="/media/security-shield.png"
                    alt="3D glass security shield — Velo bank-grade protection"
                    width={1024}
                    height={1024}
                    className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent" />
                  <p className="absolute bottom-4 left-5 right-5 text-[13px] font-medium text-white/90">
                    Bank-grade security — rendered in 3D, enforced in production.
                  </p>
                </div>
              </div>

              <div className="relative mt-4 overflow-hidden rounded-3xl shadow-card-lift">
                <Image
                  src="/media/currencies.png"
                  alt="US dollars, Euros and British pounds arranged with a smartphone"
                  width={1344}
                  height={768}
                  className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent" />
                <p className="absolute bottom-4 left-5 right-5 text-[13px] font-medium text-white/90">
                  Real money. Real rails. Real peace of mind.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.14} className="mt-6">
              <div className="grid grid-cols-2 gap-3.5">
                {BADGES.map((b) => (
                  <div
                    key={b.label}
                    className="flex items-center gap-3.5 rounded-2xl border border-line bg-card px-4.5 py-4 transition-all hover:border-velo-400/40 hover:bg-velo-500/6"
                  >
                    <ShieldCheck className="h-7 w-7 shrink-0 text-velo-500" />
                    <div>
                      <p className="text-[13.5px] font-bold text-foreground">{b.label}</p>
                      <p className="text-[11px] text-muted-foreground">{b.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.18} className="mt-6">
              <div className="flex items-center gap-4 rounded-3xl bg-navy-900 p-6 text-white">
                <Globe className="h-9 w-9 shrink-0 text-velo-400" />
                <p className="text-[13.5px] leading-relaxed text-white/75">
                  <strong className="font-semibold text-white">Insurance-backed custody.</strong>{" "}
                  Balances are safeguarded with licensed custodians and insured up to $100M in
                  aggregate coverage.
                </p>
              </div>
            </Reveal>
          </div>

          <Stagger className="grid content-start gap-4 sm:grid-cols-2" gap={0.1}>
            {FEATURES.map((f) => (
              <StaggerItem key={f.title}>
                <div className="group h-full rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-velo-200 hover:shadow-card-lift">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-velo-50 text-velo-600 transition-all group-hover:bg-velo-500 group-hover:text-white">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display mt-4 text-[15.5px] font-bold text-velo-900">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-500">{f.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

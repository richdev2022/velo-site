import type { Metadata } from "next";
import Link from "next/link";
import {
  Bot,
  ChevronDown,
  Clock,
  CreditCard,
  Globe,
  Headset,
  Mail,
  MessageCircle,
  Phone,
  Send,
  ShieldAlert,
  UserRound,
  Users,
  Zap,
} from "lucide-react";
import { PageHero, Section, CtaBand } from "@/components/velo/page-parts";
import { Reveal, Eyebrow } from "@/components/velo/primitives";
import { SupportForm } from "@/components/velo/SupportForm";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  alternates: { canonical: "/support" },
  title: "Support",
  description:
    "Get instant support through multiple channels — live chat, phone, email and our AI assistant. We're here 24/7 to help you succeed.",
};

const CHANNELS = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    text: "Get instant help from our support team — average response under 2 minutes.",
    cta: "Start Chat",
    href: "#contact",
  },
  {
    icon: Phone,
    title: "Call Us",
    text: "Speak directly with our experts.",
    cta: SITE.phoneDisplay,
    href: `tel:${SITE.phone}`,
  },
  {
    icon: Mail,
    title: "Email Support",
    text: "Send us detailed questions with attachments.",
    cta: SITE.email,
    href: `mailto:${SITE.email}`,
  },
];

const TOPICS = [
  { icon: UserRound, title: "Account & Onboarding", text: "Opening, KYC, limits and account settings." },
  { icon: Send, title: "Transfers & Payments", text: "Local, cross-border, payouts and status checks." },
  { icon: Globe, title: "Multi-Currency & FX", text: "Virtual accounts, wallets, conversions and rails." },
  { icon: CreditCard, title: "Cards", text: "Physical and virtual cards, freezes, limits and disputes." },
  { icon: Zap, title: "Bills & Top-ups", text: "Electricity, airtime, data, TV and scheduled payments." },
  { icon: ShieldAlert, title: "Security & Fraud", text: "Report suspicious activity — triaged immediately." },
];

const FAQS = [
  {
    q: "How do I open a Velo account?",
    a: "Download the app or use the web app, enter your phone number and email, complete BVN/NIN-backed KYC with a selfie check, and your account opens in under five minutes.",
  },
  {
    q: "How long do transfers take?",
    a: "Local Nigerian transfers settle in seconds. Cross-border transfers on instant rails (PIX, SPEI, FPS, SEPA Instant, FedNow) arrive in seconds to minutes; standard ACH/SEPA settle same or next business day.",
  },
  {
    q: "Are there any hidden fees?",
    a: "Never. Every fee is displayed on the confirmation screen before you approve a transaction, and account maintenance is free.",
  },
  {
    q: "What currencies can I hold?",
    a: "USD, EUR, GBP, NGN, MXN, BRL, COP and more — with virtual account details issued in your name for six currencies.",
  },
  {
    q: "How do I freeze my card?",
    a: "Open the app, go to Cards, select the card and tap Freeze. It takes effect instantly and you can unfreeze just as fast.",
  },
  {
    q: "Can I use Velo from abroad?",
    a: "Yes — Velo is built for the diaspora. Open remotely with international ID, receive like a local in six currencies, and manage everything from anywhere.",
  },
];

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        title="How can we"
        highlight="help you?"
        description="Get instant support through multiple channels — we're here 24/7 to help you succeed."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {CHANNELS.map((c) => (
            <a
              key={c.title}
              href={c.href}
              className="group rounded-3xl border border-white/10 bg-white/6 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-velo-400/50 hover:bg-white/10"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-velo-500/15 text-velo-300 transition-colors group-hover:bg-velo-500 group-hover:text-white">
                <c.icon className="h-5.5 w-5.5" />
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-poppins)] text-[16.5px] font-bold text-white">
                {c.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-white/55">{c.text}</p>
              <p className="mt-4 text-[13.5px] font-semibold text-velo-300">{c.cta}</p>
            </a>
          ))}
        </div>
      </PageHero>

      {/* help topics */}
      <Section className="bg-white">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Help Center</Eyebrow>
          <h2 className="mt-5 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Browse by <span className="text-gradient-blue">topic</span>
          </h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-slate-500">
            The fastest answers are usually one tap away — start with your topic.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TOPICS.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.05}>
              <div className="group h-full rounded-3xl border border-slate-100 bg-slate-50/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-velo-200 hover:bg-white hover:shadow-[0_24px_50px_-20px_rgba(33,150,243,0.22)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-velo-50 text-velo-600 transition-colors group-hover:bg-velo-500 group-hover:text-white">
                  <t.icon className="h-5.5 w-5.5" />
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-poppins)] text-[16.5px] font-bold text-navy-900">
                  {t.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-slate-500">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* AI assistant */}
      <Section className="bg-navy-950 text-white">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Eyebrow dark>Velo Assistant</Eyebrow>
            <h2 className="mt-5 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight sm:text-4xl">
              Meet your{" "}
              <span className="bg-gradient-to-r from-velo-300 to-mint-400 bg-clip-text text-transparent">
                AI-powered assistant
              </span>
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-[1.85] text-white/60">
              Our AI assistant helps with common questions, account issues and transaction support
              24/7 — balances, transfer status, card freezes and bill payments, resolved in
              seconds. Complex cases escalate to a human specialist with full context, so you
              never repeat yourself.
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {["Balance & statements", "Transfer status", "Card controls", "Bill payments", "Disputes"].map((t) => (
                <span key={t} className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[12.5px] font-medium text-white/70">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mx-auto max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-velo-500 to-velo-600 text-white">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[14px] font-bold">Velo Assistant</p>
                  <p className="flex items-center gap-1.5 text-[11.5px] text-mint-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-mint-400" /> Online — replies instantly
                  </p>
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-3">
                <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-white/8 px-4 py-3 text-[13px] leading-relaxed text-white/80">
                  Hi! I can help with account balance, transaction history, transfer status and
                  much more. How can I assist you today?
                </div>
                <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-velo-500 px-4 py-3 text-[13px] text-white">
                  Where is my transfer to GTBank?
                </div>
                <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-white/8 px-4 py-3 text-[13px] leading-relaxed text-white/80">
                  Your ₦45,000 transfer to GTBank was delivered successfully at 14:32 — receipt
                  #VR-88213. Anything else I can help with? 🎉
                </div>
              </div>
              <Link
                href="/download"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-velo-500 px-6 py-3.5 text-[13.5px] font-semibold text-white transition-all hover:bg-velo-400"
              >
                <Headset className="h-4.5 w-4.5" /> Start Chat with AI Assistant
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* contact info + form */}
      <Section id="contact" className="bg-slate-50">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <Eyebrow>Contact Information</Eyebrow>
            <h2 className="mt-5 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Send us a message
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-500">
              Have a specific question or need detailed support? Fill out the form and we&apos;ll get
              back to you within 2 hours.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              {[
                { icon: Clock, title: "Support Hours", text: "24/7 — we're always here for you" },
                { icon: Phone, title: "Phone Support", text: "International support available · Response within 2 hours" },
                { icon: Globe, title: "Languages", text: "English, French, Arabic · Hausa, Yoruba, Igbo" },
                { icon: Mail, title: "Email", text: SITE.email },
              ].map((c) => (
                <div key={c.title} className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-velo-50 text-velo-600">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[14px] font-bold text-navy-900">{c.title}</p>
                    <p className="mt-0.5 text-[13px] text-slate-500">{c.text}</p>
                  </div>
                </div>
              ))}
              <div className="rounded-2xl border border-gold-400/30 bg-gold-400/8 p-5">
                <p className="flex items-center gap-2 text-[13.5px] font-bold text-navy-900">
                  <ShieldAlert className="h-4.5 w-4.5 text-gold-500" /> Emergency Support
                </p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500">
                  Suspect fraud or account compromise? Call{" "}
                  <a href={`tel:${SITE.phone}`} className="font-semibold text-velo-600">
                    {SITE.phoneDisplay}
                  </a>{" "}
                  immediately — the emergency line is answered 24/7.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <SupportForm />
          </Reveal>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-5 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Frequently asked <span className="text-gradient-blue">questions</span>
            </h2>
            <p className="mt-4 text-[14.5px] leading-relaxed text-slate-500">
              Quick answers to the questions we hear most. Still stuck? The assistant or a human
              is one message away.
            </p>
          </Reveal>
          <div className="flex flex-col gap-3">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.05}>
                <details className="group rounded-2xl border border-slate-100 bg-slate-50/60 px-6 py-5 open:border-velo-100 open:bg-white open:shadow-[0_16px_40px_-18px_rgba(33,150,243,0.25)]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold text-navy-900 [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <ChevronDown className="h-5 w-5 shrink-0 text-velo-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-3.5 text-[14px] leading-relaxed text-slate-500">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}

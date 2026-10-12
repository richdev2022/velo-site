"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowUp,
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
} from "lucide-react";
import { SITE } from "@/data/site";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Products",
    links: [
      { label: "Digital Bank Account", href: "/products/digital-bank-account" },
      { label: "Cross-Border Payments", href: "/products/cross-border-payments" },
      { label: "Physical & Virtual Cards", href: "/products/physical-naira-card" },
      { label: "Business Account", href: "/products/business-current-account" },
      { label: "Savings & Investment", href: "/products/savings-investment" },
      { label: "All Products & Services", href: "/products" },
    ],
  },
  {
    title: "Global Finance",
    links: [
      { label: "Multi-Currency Accounts", href: "/products/multicurrency-accounts" },
      { label: "Multi-Currency Wallets", href: "/products/currency-wallets" },
      { label: "International Payouts", href: "/products/global-payouts" },
      { label: "Gift Card Buy & Sell", href: "/products/gift-cards" },
      { label: "Diaspora Account", href: "/products/diaspora-account" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog & Resources", href: "/resources" },
      { label: "Security", href: "/security" },
      { label: "How Velo Works", href: "/how-it-works" },
      { label: "Download the App", href: "/download" },
    ],
  },
  {
    title: "Support & Legal",
    links: [
      { label: "Help Center", href: "/support" },
      { label: "Contact Us", href: "/support#contact" },
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "Cookie Policy", href: "/legal/cookies" },
      { label: "Delete Account", href: "/delete-account" },
    ],
  },
];

const RAILS = ["USD · ACH", "EUR · SEPA", "GBP · FPS", "MXN · SPEI", "BRL · PIX", "COP · Bre-B"];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function subscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3200);
  }

  return (
    <footer className="relative overflow-hidden border-t border-slate-200/70 bg-slate-50 text-slate-900 dark:border-white/5 dark:bg-navy-950 dark:text-white">
      <div className="absolute inset-0 bg-grid-adapt opacity-40 dark:opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_2fr]">
          {/* brand + newsletter + contact */}
          <div>
            <Link href="/" aria-label="Velo Finance home" className="relative block h-9 w-[104px]">
              <Image
                src="/brand/velo-logo.png"
                alt="Velo"
                fill
                sizes="104px"
                className="object-contain object-left dark:hidden"
              />
              <Image
                src="/brand/velo-logo-white.png"
                alt="Velo"
                fill
                sizes="104px"
                className="hidden object-contain object-left dark:block"
              />
            </Link>
            <p className="mt-5 max-w-sm text-[13.5px] leading-relaxed text-slate-500 dark:text-white/50">
              {SITE.legalName} (RC {SITE.rcNumber}) — {SITE.description}
            </p>

            <div className="mt-6 flex flex-col gap-2.5 text-[13px] text-slate-600 dark:text-white/60">
              <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2.5 hover:text-velo-600 transition-colors w-fit dark:hover:text-velo-300">
                <Mail className="h-4 w-4 text-velo-500 dark:text-velo-400" /> {SITE.email}
              </a>
              <a href={`tel:${SITE.phone}`} className="inline-flex items-center gap-2.5 hover:text-velo-600 transition-colors w-fit dark:hover:text-velo-300">
                <Phone className="h-4 w-4 text-velo-500 dark:text-velo-400" /> {SITE.phoneDisplay}
              </a>
            </div>

            <form onSubmit={subscribe} className="mt-6 max-w-sm">
              <label htmlFor="newsletter" className="text-[12px] font-semibold uppercase tracking-wider text-slate-400 dark:text-white/45">
                Currency insights, weekly
              </label>
              <div className="mt-2.5 flex gap-2">
                <input
                  id="newsletter"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="h-12 w-full min-w-0 rounded-full border border-slate-300/90 bg-white px-5 text-[13.5px] text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-velo-400 dark:border-white/15 dark:bg-white/6 dark:text-white dark:placeholder:text-white/30 dark:focus:bg-white/10"
                />
                <button
                  type="submit"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-velo-500 text-white transition-all hover:bg-velo-400"
                  aria-label="Subscribe to newsletter"
                >
                  {subscribed ? <Check className="h-5 w-5" /> : <Send className="h-4.5 w-4.5" />}
                </button>
              </div>
              {subscribed && (
                <p className="mt-2 text-[12px] font-medium text-mint-600 dark:text-mint-400">
                  You&apos;re in! Watch your inbox every Monday.
                </p>
              )}
            </form>

            <div className="mt-6 flex gap-2.5">
              {[
                { icon: Twitter, label: "Twitter / X" },
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Facebook, label: "Facebook" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="/"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all hover:-translate-y-0.5 hover:border-velo-400 hover:text-velo-600 dark:border-white/12 dark:bg-white/5 dark:text-white/60 dark:hover:text-white"
                >
                  <s.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="text-[12.5px] font-bold uppercase tracking-wider text-slate-800 dark:text-white/80">
                  {col.title}
                </p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-[13px] text-slate-500 transition-colors hover:text-velo-600 dark:text-white/50 dark:hover:text-velo-300"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* offices */}
        <div className="mt-12 grid gap-4 rounded-3xl border border-slate-200/80 bg-white/70 p-6 sm:grid-cols-2 lg:grid-cols-4 dark:border-white/8 dark:bg-white/4">
          {SITE.addresses.map((a) => (
            <div key={a.city} className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-velo-500 dark:text-velo-400" />
              <div>
                <p className="text-[13px] font-semibold text-slate-800 dark:text-white/85">{a.city}</p>
                {a.lines.map((line) => (
                  <p key={line} className="text-[12px] leading-relaxed text-slate-500 dark:text-white/45">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* rails strip */}
        <div className="mt-10 flex flex-wrap items-center gap-2.5 border-t border-slate-200/80 pt-8 dark:border-white/8">
          <span className="text-[11.5px] font-semibold uppercase tracking-wider text-slate-400 dark:text-white/40">
            Payment rails:
          </span>
          {RAILS.map((r) => (
            <span
              key={r}
              className="rounded-full border border-slate-200/90 bg-white px-3.5 py-1.5 text-[11.5px] font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-white/55"
            >
              {r}
            </span>
          ))}
        </div>

        {/* bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-5 border-t border-slate-200/80 pt-8 sm:flex-row safe-bottom dark:border-white/8">
          <p className="text-[12px] text-slate-500 text-center sm:text-left dark:text-white/40">
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved. Velo Finance is a
            financial technology company, not a bank. Banking services provided by licensed
            partners.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all hover:-translate-y-1 hover:border-velo-400 hover:text-velo-600 dark:border-white/12 dark:bg-white/5 dark:text-white/60 dark:hover:text-white"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

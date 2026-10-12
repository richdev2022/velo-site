"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { Eyebrow, Reveal } from "./primitives";

const FAQS = [
  {
    q: "Are the virtual account details really issued in my name?",
    a: "Yes. When your KYC is approved we open a real sub-account for you with our licensed banking partners in the US, Europe, UK, Mexico, Brazil and Colombia. The beneficiary name on the account is your legal name (or your registered business name), which is exactly why clients and platforms can pay you like a local.",
  },
  {
    q: "How long does it take to open a multi-currency account?",
    a: "Most users are verified within 3 minutes. You need a valid government ID (BVN/NIN for Nigerians, or passport/international ID elsewhere), and that's it. All six currency accounts unlock simultaneously once verification passes.",
  },
  {
    q: "What can I do with money that lands in my wallets?",
    a: "Whatever you need: hold it in the original currency, convert instantly to any other supported currency at mid-market rates, pay out to 80+ countries, pay suppliers or family, order a Velo card, or buy gift cards. Your money moves at your speed.",
  },
  {
    q: "Which gift cards can I buy and sell?",
    a: "We support 50+ international brands including Amazon, Steam, Apple, Google Play, PlayStation, Xbox, Netflix, Spotify, eBay, Walmart, Nike and more. Sell rates go up to 92% of face value, and verification is fully automated — most sales settle to your wallet in under 3 minutes.",
  },
  {
    q: "How much does Velo cost?",
    a: "Opening an account and holding balances is completely free. Receiving payments via virtual accounts is free for most rails. Currency conversion starts at 0.4% and international payouts are a single flat fee shown before you confirm — never a surprise deduction.",
  },
  {
    q: "Is my money safe with Velo?",
    a: "Client funds are held with licensed, audited financial institutions in segregated accounts and are never used for lending. We're PCI DSS Level 1 and ISO 27001 certified, all traffic is AES-256 encrypted, and every transaction is monitored by real-time fraud models.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-background py-20 sm:py-28">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="font-display mt-5 text-[32px] font-bold leading-[1.12] text-foreground sm:text-[44px]">
            Questions? <span className="text-gradient-blue">Answered.</span>
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col gap-3.5">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.05}>
                <div
                  className={`overflow-hidden rounded-3xl border transition-all ${
                    isOpen
                      ? "border-velo-400/45 bg-velo-500/6 shadow-card-lift"
                      : "border-line bg-card hover:border-velo-400/30"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-[15.5px] font-bold text-foreground sm:text-[16.5px]">
                      {f.q}
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all ${
                        isOpen
                          ? "bg-velo-500 text-white shadow-glow-blue"
                          : "bg-velo-500/12 text-velo-600 dark:text-velo-300"
                      }`}
                    >
                      {isOpen ? <Minus className="h-4.5 w-4.5" /> : <Plus className="h-4.5 w-4.5" />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
                      >
                        <p className="px-6 pb-6 text-[14px] leading-relaxed text-muted-foreground">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import type { ReactNode } from "react";

/* ---------------- Shared page hero for standalone pages ---------------- */

export function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="band relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-adapt opacity-50" aria-hidden="true" />
      <div
        className="absolute -top-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-velo-500/8 blur-[130px] dark:bg-velo-500/16"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-52 right-[-140px] h-[380px] w-[520px] rounded-full bg-mint-500/6 blur-[120px] dark:bg-mint-500/8"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="glass-float inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12.5px] font-semibold uppercase tracking-wide text-velo-600 dark:text-velo-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-velo-400 opacity-60 animate-pulse-ring" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-velo-500" />
          </span>
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-5 max-w-4xl font-[family-name:var(--font-poppins)] text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
        >
          {title}{" "}
          {highlight && (
            <span className="bg-gradient-to-r from-velo-500 via-velo-400 to-mint-500 bg-clip-text text-transparent dark:from-velo-300 dark:via-velo-400 dark:to-mint-400">
              {highlight}
            </span>
          )}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-5 max-w-2xl text-[16px] leading-relaxed text-slate-600 sm:text-[17px] dark:text-white/60"
          >
            {description}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}

/* ---------------- CTA band used at the bottom of pages ---------------- */

export function CtaBand({
  title = "Ready to experience borderless banking?",
  subtitle = "Join the Velo movement today — your money, everywhere.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="band relative overflow-hidden py-20">
      <div
        className="absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-velo-500/8 blur-[130px] dark:bg-velo-500/14"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight sm:text-4xl"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-[16px] text-slate-600 dark:text-white/60"
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            href="/download"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-velo-500 px-8 py-4 text-[15px] font-semibold text-white shadow-glow-blue transition-all hover:-translate-y-0.5 hover:bg-velo-400 sm:w-auto"
          >
            Get Started Now
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/products"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 px-8 py-4 text-[15px] font-semibold text-slate-800 transition-all hover:border-velo-400 hover:text-velo-600 sm:w-auto dark:border-white/20 dark:text-white/90 dark:hover:border-velo-400 dark:hover:text-white"
          >
            Explore Products
          </Link>
        </motion.div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12.5px] text-slate-500 dark:text-white/45">
          {["Free account in 5 minutes", "No maintenance fees", "Cancel anytime"].map((t) => (
            <span key={t} className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-mint-400" /> {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Simple section shell ---------------- */

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

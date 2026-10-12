"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";
import { ArrowRight, ArrowDownToLine, PlayCircle, ShieldCheck, Star, TrendingUp, Zap } from "lucide-react";
import { Magnetic } from "./primitives";

/* pos values are collision-checked against the toast (top-left), balance card (bottom-left),
   and quote pill (right, xl+) at every stage size: md 600×338, lg 459×258, xl 576×324.
   Overhangs stay ≤ 24px and right-side chips sit fully inside the card, so no text is ever
   clipped at the viewport edge; cursor parallax is ±8px. */
const FLOATERS = [
  { flag: "🇺🇸", label: "USD Account", detail: "Routing •••• 2182", pos: "-left-4 top-[31%] lg:-left-6", show: "hidden md:block", delay: "0s" },
  { flag: "🇪🇺", label: "EUR IBAN", detail: "SEPA · +€2,400 in", pos: "right-3 top-[6%]", show: "hidden md:block", delay: "1.3s" },
  { flag: "🇬🇧", label: "GBP FPS", detail: "Sort code 04-00-72", pos: "-left-3 bottom-[38%] xl:-left-6", show: "hidden xl:block", delay: "0.7s" },
  { flag: "🇧🇷", label: "PIX received", detail: "+R$ 5,780 · 2s", pos: "right-3 top-[25%]", show: "hidden md:block", delay: "1.9s" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: d, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero({ video = false }: { video?: boolean }) {
  /* ---- mouse attraction: the whole visual stage gently follows the cursor ---- */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 55, damping: 16, mass: 0.7 });
  const smy = useSpring(my, { stiffness: 55, damping: 16, mass: 0.7 });
  const rotateY = useTransform(smx, [-0.5, 0.5], [-6, 6]);
  const rotateX = useTransform(smy, [-0.5, 0.5], [4.5, -4.5]);
  const chipX = useTransform(smx, [-0.5, 0.5], [8, -8]);
  const chipY = useTransform(smy, [-0.5, 0.5], [6, -6]);
  const orbX = useTransform(smx, [-0.5, 0.5], [34, -34]);
  const orbY = useTransform(smy, [-0.5, 0.5], [22, -22]);

  function onMouseMove(e: MouseEvent<HTMLElement>) {
    mx.set(e.clientX / window.innerWidth - 0.5);
    my.set(e.clientY / window.innerHeight - 0.5);
  }

  return (
    <section id="top" onMouseMove={onMouseMove} className="relative overflow-hidden bg-hero-mesh">
      {/* ---- adaptive backdrop: grid + aurora orbs ---- */}
      <div className="absolute inset-0 bg-grid-adapt" aria-hidden="true" />
      <motion.div
        style={{ x: orbX, y: orbY }}
        className="absolute -top-[30%] left-[-12%] h-[720px] w-[720px]"
      >
        <div
          className="animate-aurora h-full w-full rounded-full opacity-[0.14] blur-[130px] dark:opacity-[0.28]"
          style={{ background: "radial-gradient(closest-side, #2196F3, transparent)" }}
        />
      </motion.div>
      <motion.div
        style={{ x: chipX, y: chipY }}
        className="absolute top-[20%] right-[-14%] h-[640px] w-[640px]"
      >
        <div
          className="animate-aurora h-full w-full rounded-full opacity-[0.10] blur-[130px] dark:opacity-[0.16]"
          style={{ background: "radial-gradient(closest-side, #10b981, transparent)", animationDelay: "-6s" }}
        />
      </motion.div>
      <div
        className="animate-aurora absolute bottom-[-28%] left-[22%] h-[560px] w-[660px] rounded-full opacity-[0.10] blur-[120px] dark:opacity-[0.14]"
        style={{ background: "radial-gradient(closest-side, #7dd3fc, transparent)", animationDelay: "-11s" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:px-8 lg:pb-24 lg:pt-20">
        {/* ---------------- copy ---------------- */}
        <div className="text-center lg:text-left">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <span className="glass-float inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12.5px] font-medium text-velo-600 dark:text-velo-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute h-2 w-2 animate-pulse-ring rounded-full bg-mint-400" />
                <span className="h-2 w-2 rounded-full bg-mint-400" />
              </span>
              Banking built for a borderless future
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.08}
            className="font-display mt-6 text-[40px] font-bold leading-[1.06] tracking-tight text-slate-900 dark:text-white sm:text-[56px] lg:text-[64px]"
          >
            Bank without
            <br />
            <span className="text-gradient-blue">borders.</span> Get paid
            <br className="hidden sm:block" /> from anywhere.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.16}
            className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-slate-600 dark:text-white/65 lg:mx-0 sm:text-[17.5px]"
          >
            Own real account details in{" "}
            <strong className="font-semibold text-slate-900 dark:text-white/90">USD, EUR, GBP, MXN, BRL &amp; COP</strong>.
            Hold multi-currency wallets, convert at great rates, pay out to 80+ countries and trade
            gift cards — all in one beautiful app.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.24}
            className="mt-9 flex flex-col items-center gap-3.5 sm:flex-row lg:justify-start sm:justify-center"
          >
            <Magnetic className="w-full sm:w-auto">
              <a
                href="/download"
                className="group relative inline-flex w-full justify-center overflow-hidden rounded-full bg-velo-500 px-8 py-4 text-[15.5px] font-semibold text-white shadow-glow-blue transition-all hover:-translate-y-0.5 hover:bg-velo-400 sm:w-auto"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" aria-hidden="true" />
                <span className="relative flex items-center gap-2">
                  Open your free account
                  <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </Magnetic>
            <a
              href="/how-it-works"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300/90 bg-white/70 px-8 py-4 text-[15.5px] font-semibold text-slate-800 backdrop-blur transition-all hover:border-velo-400 hover:text-velo-600 dark:border-white/12 dark:bg-white/6 dark:text-white dark:hover:bg-white/12 sm:w-auto"
            >
              <PlayCircle className="h-5 w-5 text-velo-500 dark:text-velo-300" />
              See how it works
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.32}
            className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 lg:justify-start"
          >
            <span className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-white/60">
              <ShieldCheck className="h-4.5 w-4.5 text-mint-500 dark:text-mint-400" /> Bank-grade encryption
            </span>
            <span className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-white/60">
              <Zap className="h-4.5 w-4.5 text-gold-500 dark:text-gold-400" /> Instant settlements
            </span>
            <span className="flex items-center gap-1.5 text-[13px] text-slate-500 dark:text-white/60">
              <span className="flex text-gold-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </span>
              4.8 app rating
            </span>
          </motion.div>
        </div>

        {/* ---------------- video showcase (parallax stage) ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 44, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.95, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[600px] [perspective:1400px]"
        >
          {/* floating currency chips — drift against the cursor for depth */}
          {FLOATERS.map((f) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className={`absolute z-20 ${f.show} ${f.pos}`}
            >
              <motion.div style={{ x: chipX, y: chipY }}>
                <div
                  className="glass-float animate-float-y flex items-center gap-2.5 rounded-2xl px-3.5 py-2.5"
                  style={{ animationDelay: f.delay }}
                >
                  <span className="text-xl leading-none">{f.flag}</span>
                  <span className="flex flex-col leading-tight">
                    <span className="text-[11.5px] font-semibold text-slate-900 dark:text-white">{f.label}</span>
                    <span className="text-[10.5px] text-velo-600 dark:text-velo-200/80">{f.detail}</span>
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}

          {/* animated conic glow frame + video — tilts with the cursor */}
          <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}>
            <div className="conic-border rounded-[32px] p-[1.5px] shadow-[0_50px_140px_-40px_rgba(2,12,27,0.95)]">
              <div className="relative overflow-hidden rounded-[30px] bg-navy-900">
                {video ? (
                  <video
                    src="/media/hero.mp4"
                    poster="/media/hero-main.png"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="aspect-video h-auto w-full object-cover"
                  />
                ) : (
                  <img
                    src="/media/hero-main.png"
                    alt="Global professional managing international payments with Velo Finance"
                    className="aspect-video h-auto w-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/88 via-navy-950/8 to-transparent" />

                {/* live payment toast */}
                <motion.div
                  initial={{ opacity: 0, y: -18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.25, duration: 0.6 }}
                  className="glass-dark absolute left-4 top-4 flex items-center gap-2.5 rounded-2xl px-3.5 py-2.5 sm:left-5 sm:top-5"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-mint-500/20 text-mint-400">
                    <ArrowDownToLine className="h-4 w-4" />
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="text-[11.5px] font-semibold text-white">+ $4,250.00 received</span>
                    <span className="text-[10px] text-velo-200/75">USD ACH · just now</span>
                  </span>
                </motion.div>

                {/* balance glass card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                  className="glass-dark absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-2xl px-4 py-3.5 sm:bottom-5 sm:left-5 sm:right-auto sm:gap-6"
                >
                  <div>
                    <p className="text-[10.5px] font-medium uppercase tracking-wider text-white/50">
                      Total balance
                    </p>
                    <p className="font-display mt-0.5 text-[20px] font-bold text-white sm:text-[22px]">
                      $38,642{" "}
                      <span className="text-[13px] font-semibold text-mint-400">+2.6%</span>
                    </p>
                  </div>
                  <div className="hidden items-center gap-1.5 sm:flex">
                    {/* mini bars */}
                    <span className="flex h-8 items-end gap-1" aria-hidden="true">
                      {[38, 55, 42, 68, 58, 82, 74].map((h, i) => (
                        <motion.span
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: 1.5 + i * 0.09, duration: 0.5, ease: "easeOut" }}
                          className={`w-1.5 rounded-full ${i === 5 ? "bg-mint-400" : "bg-velo-400/70"}`}
                        />
                      ))}
                    </span>
                  </div>
                  <span className="glass-dark flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold text-velo-200">
                    <TrendingUp className="h-3.5 w-3.5" /> Live
                  </span>
                </motion.div>

                {/* quote pill */}
                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6, duration: 0.6 }}
                  className="absolute right-4 bottom-[86px] hidden max-w-[220px] rounded-2xl border border-white/12 bg-navy-950/70 p-3.5 backdrop-blur-md xl:block"
                >
                  <p className="text-[11.5px] font-medium leading-relaxed text-white/85">
                    “I got paid from the US in seconds — to my own USD account.”
                  </p>
                  <p className="mt-1.5 text-[10.5px] font-semibold text-velo-300">Adaeze · Lagos</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* under-glow */}
          <div
            className="animate-glow-pulse absolute -inset-x-8 -bottom-10 h-24 rounded-full opacity-35 blur-[60px] dark:opacity-60"
            style={{ background: "radial-gradient(closest-side, rgba(33,150,243,0.5), transparent)" }}
            aria-hidden="true"
          />
        </motion.div>
      </div>

      {/* currency marquee */}
      <div className="relative border-t border-slate-200/70 bg-white/55 py-4 backdrop-blur dark:border-white/8 dark:bg-navy-950/60">
        <div className="mask-fade-x overflow-hidden">
          <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, dup) => (
              <div key={dup} className="flex gap-10" aria-hidden={dup === 1}>
                {[
                  "USD ⇄ NGN", "EUR ⇄ NGN", "GBP ⇄ NGN", "USD ⇄ EUR", "GBP ⇄ EUR",
                  "MXN ⇄ USD", "BRL ⇄ USD", "COP ⇄ USD", "USD ⇄ GHS", "EUR ⇄ GBP",
                  "CAD ⇄ NGN", "USD ⇄ KES",
                ].map((pair) => (
                  <span
                    key={`${dup}-${pair}`}
                    className="flex items-center gap-2 text-[13px] font-medium tracking-wide text-slate-400 dark:text-white/45"
                  >
                    <span className="h-1 w-1 rounded-full bg-velo-500/70" />
                    {pair}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

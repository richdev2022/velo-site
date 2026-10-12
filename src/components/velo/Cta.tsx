"use client";

import { motion } from "framer-motion";
import { Apple, PlayCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { VeloMark } from "./VeloLogo";
import { Magnetic, Reveal } from "./primitives";

export function Cta({ video = false }: { video?: boolean }) {
  return (
    <section id="cta" className="relative overflow-hidden bg-background px-4 py-20 sm:px-6 sm:py-24">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[36px] bg-navy-900 px-6 py-16 text-center sm:px-12 sm:py-20">
          {/* video backdrop */}
          {video && (
            <video
              src="/media/globe.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover opacity-35"
              aria-hidden="true"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-900/70 to-navy-950/85" aria-hidden="true" />
          <div className="absolute inset-0 bg-grid-dark opacity-50" aria-hidden="true" />
          <div
            className="animate-glow-pulse absolute -left-24 -top-24 h-80 w-80 rounded-full opacity-40 blur-[100px]"
            style={{ background: "radial-gradient(closest-side, #2196F3, transparent)" }}
            aria-hidden="true"
          />
          <div
            className="animate-glow-pulse absolute -bottom-28 -right-16 h-80 w-80 rounded-full opacity-35 blur-[100px]"
            style={{ background: "radial-gradient(closest-side, #10b981, transparent)", animationDelay: "-2s" }}
            aria-hidden="true"
          />
          {/* orbiting chips */}
          <motion.div
            aria-hidden="true"
            className="glass-dark absolute right-[8%] top-[18%] hidden h-16 w-16 items-center justify-center rounded-2xl text-2xl shadow-2xl lg:flex"
            animate={{ y: [0, -16, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            🇺🇸
          </motion.div>
          <motion.div
            aria-hidden="true"
            className="glass-dark absolute bottom-[22%] left-[7%] hidden h-14 w-14 items-center justify-center rounded-2xl text-2xl shadow-2xl lg:flex"
            animate={{ y: [0, 14, 0], rotate: [0, -8, 0] }}
            transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          >
            🇪🇺
          </motion.div>

          <div className="relative">
            <span className="glass-dark mx-auto inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-[12.5px] font-semibold text-velo-200">
              <VeloMark size={18} />
              Free to open · 3-minute setup
            </span>

            <h2 className="font-display mx-auto mt-6 max-w-2xl text-[32px] font-bold leading-[1.1] text-white sm:text-[52px]">
              The world is about to become{" "}
              <span className="text-gradient-blue">your marketplace.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15.5px] leading-relaxed text-white/65 sm:text-[17px]">
              Join the movement receiving global payments with local account details, converting
              at honest rates and trading gift cards — all in one app.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <Magnetic className="w-full sm:w-auto">
                <a
                  href="/download"
                  className="group relative inline-flex w-full justify-center overflow-hidden rounded-full bg-velo-500 px-8 py-4 text-[15.5px] font-semibold text-white shadow-glow-blue transition-all hover:-translate-y-0.5 hover:bg-velo-400 sm:w-auto"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" aria-hidden="true" />
                  <span className="relative flex items-center justify-center gap-2">
                    Create free account
                    <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </Magnetic>
              <div className="flex w-full gap-3 sm:w-auto">
                <button className="glass-dark inline-flex flex-1 items-center justify-center gap-2.5 rounded-full px-6 py-4 text-[14px] font-semibold text-white transition-all hover:bg-white/12 sm:flex-none dark:hover:bg-white/10">
                  <Apple className="h-5 w-5" />
                  App Store
                </button>
                <button className="glass-dark inline-flex flex-1 items-center justify-center gap-2.5 rounded-full px-6 py-4 text-[14px] font-semibold text-white transition-all hover:bg-white/12 sm:flex-none dark:hover:bg-white/10">
                  <PlayCircle className="h-5 w-5" />
                  Google Play
                </button>
              </div>
            </div>

            <p className="mt-7 inline-flex items-center gap-2 text-[12.5px] text-white/50">
              <ShieldCheck className="h-4 w-4 text-mint-400" />
              No maintenance fees · No minimum balance · Cancel anytime
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

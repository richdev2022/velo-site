"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { Eyebrow, Reveal } from "./primitives";
import { FAQS } from "@/data/faq";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-white py-20 sm:py-28">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="font-display mt-5 text-[32px] font-bold leading-[1.12] text-velo-900 sm:text-[44px]">
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
                      ? "border-velo-200 bg-velo-50/50 shadow-card-lift"
                      : "border-slate-150 bg-white hover:border-velo-100"
                  }`}
                  style={{ borderColor: isOpen ? undefined : "#E8EEF5" }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-[15.5px] font-bold text-velo-900 sm:text-[16.5px]">
                      {f.q}
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all ${
                        isOpen ? "bg-velo-500 text-white" : "bg-velo-50 text-velo-600"
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
                        <p className="px-6 pb-6 text-[14px] leading-relaxed text-slate-600">
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

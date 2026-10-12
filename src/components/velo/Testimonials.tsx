"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { Eyebrow, Reveal, Stagger, StaggerItem, SpotlightCard } from "./primitives";

const TESTIMONIALS = [
  {
    name: "Chukwuemeka Obi",
    role: "Founder, Kainos Imports · Lagos",
    avatar: "/media/avatar-1.png",
    quote:
      "My US clients used to pay through middlemen who took 8% in fees. Now I send them my Velo USD routing number and the money lands in minutes. It changed my business completely.",
    highlight: "Saved 8% on every payment",
  },
  {
    name: "Ama Serwaa",
    role: "Owner, Serwaa Boutique · Accra",
    avatar: "/media/avatar-2.png",
    quote:
      "I sell to customers in the UK and Europe. Having my own sort code and IBAN makes my little boutique look and feel like a global company. Suppliers take me seriously now.",
    highlight: "Own GBP & EUR accounts",
  },
  {
    name: "Brian Kimani",
    role: "Software Developer · Nairobi",
    avatar: "/media/avatar-3.png",
    quote:
      "I get paid by a US startup every month. The GBP and USD accounts, instant conversion to KES at honest rates, plus buying Steam cards for my brothers — everything is in one app.",
    highlight: "Freelance income, simplified",
  },
];

const METRICS = [
  { value: "2 min", label: "Average account setup" },
  { value: "98.7%", label: "Transfers arrive instantly" },
  { value: "0.4%", label: "Conversion fee from" },
  { value: "24/7", label: "Human support" },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-section py-20 sm:py-28">
      <div className="absolute inset-0 bg-grid-light opacity-60 dark:opacity-[0.04]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>Loved worldwide</Eyebrow>
          <h2 className="font-display mt-5 text-[32px] font-bold leading-[1.12] text-foreground sm:text-[46px]">
            Real people,{" "}
            <span className="text-gradient-blue">really borderless</span> banking
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-3" gap={0.14}>
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.name} className="h-full">
              <SpotlightCard className="h-full rounded-[28px] border border-line bg-card shadow-sm transition-all hover:-translate-y-1.5 hover:border-velo-400/40 hover:shadow-card-lift">
                <figure className="relative z-10 flex h-full flex-col p-7">
                  <Quote className="absolute right-6 top-6 h-9 w-9 text-velo-500/15 transition-colors group-hover:text-velo-500/30 dark:text-velo-400/15" />
                  <div className="flex text-gold-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-[14.5px] leading-relaxed text-muted-foreground">
                    “{t.quote}”
                  </blockquote>
                  <span className="mt-4 inline-flex w-fit rounded-full bg-mint-500/12 px-3 py-1.5 text-[11.5px] font-bold text-mint-600 dark:text-mint-400">
                    {t.highlight}
                  </span>
                  <figcaption className="mt-5 flex items-center gap-3.5 border-t border-line pt-5">
                    <span className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-velo-500/25">
                      <Image
                        src={t.avatar}
                        alt={`${t.name} portrait`}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </span>
                    <div>
                      <p className="text-[14px] font-bold text-foreground">{t.name}</p>
                      <p className="text-[12px] text-muted-foreground">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.15} className="mt-14">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[28px] border border-line bg-line shadow-sm md:grid-cols-4">
            {METRICS.map((m) => (
              <div key={m.label} className="bg-card px-6 py-7 text-center transition-colors hover:bg-velo-500/5">
                <p className="font-display text-[26px] font-bold text-foreground sm:text-[30px]">
                  {m.value}
                </p>
                <p className="mt-1 text-[12.5px] font-medium text-muted-foreground">{m.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

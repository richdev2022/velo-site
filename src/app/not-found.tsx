import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-navy-950 px-4 py-20 text-white">
      <div className="absolute inset-0 bg-grid-dark opacity-50" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-1/2 h-[420px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-velo-500/14 blur-[130px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-lg text-center">
        <span className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-velo-500/15 text-velo-300">
          <Compass className="h-8 w-8" />
        </span>
        <h1 className="mt-7 font-[family-name:var(--font-poppins)] text-6xl font-extrabold tracking-tight">
          404
        </h1>
        <p className="mt-3 text-[17px] font-semibold text-white/85">
          This page wandered off the map
        </p>
        <p className="mt-2.5 text-[14.5px] leading-relaxed text-white/55">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back to
          solid ground.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-velo-500 px-7 py-3.5 text-[14.5px] font-semibold text-white shadow-glow-blue transition-all hover:-translate-y-0.5 hover:bg-velo-400 sm:w-auto"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back home
          </Link>
          <Link
            href="/products"
            className="glass-dark inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[14.5px] font-semibold text-white transition-all hover:bg-white/12 sm:w-auto dark:hover:bg-white/10"
          >
            Explore products
          </Link>
        </div>
      </div>
    </section>
  );
}

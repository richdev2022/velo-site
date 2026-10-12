import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <section className="band relative flex min-h-[70vh] items-center justify-center overflow-hidden px-4 py-20">
      <div className="absolute inset-0 bg-grid-adapt opacity-50" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-1/2 h-[420px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-velo-500/8 blur-[130px] dark:bg-velo-500/14"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-lg text-center">
        <span className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-velo-500/12 text-velo-600 dark:bg-velo-500/15 dark:text-velo-300">
          <Compass className="h-8 w-8" />
        </span>
        <h1 className="mt-7 font-[family-name:var(--font-poppins)] text-6xl font-extrabold tracking-tight">
          404
        </h1>
        <p className="mt-3 text-[17px] font-semibold text-slate-800 dark:text-white/85">
          This page wandered off the map
        </p>
        <p className="mt-2.5 text-[14.5px] leading-relaxed text-slate-500 dark:text-white/55">
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
            className="glass-float inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[14.5px] font-semibold text-slate-800 transition-all hover:bg-white sm:w-auto dark:text-white dark:hover:bg-white/12"
          >
            Explore products
          </Link>
        </div>
      </div>
    </section>
  );
}

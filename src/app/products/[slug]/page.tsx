import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleHelp,
  Sparkles,
} from "lucide-react";
import { CATEGORY_META, PRODUCTS, getProduct } from "@/data/products";
import { ProductIcon } from "@/components/velo/ProductIcon";
import { Reveal } from "@/components/velo/primitives";
import { CtaBand, Section } from "@/components/velo/page-parts";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found" };
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = CATEGORY_META[product.category];
  const related = PRODUCTS.filter(
    (p) => p.slug !== product.slug && p.category === product.category
  ).slice(0, 3);
  const relatedFill =
    related.length < 3
      ? PRODUCTS.filter(
          (p) => p.slug !== product.slug && !related.some((r) => r.slug === p.slug)
        ).slice(0, 3 - related.length)
      : [];
  const relatedAll = [...related, ...relatedFill];

  return (
    <>
      {/* hero */}
      <section className="band relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-adapt opacity-50" aria-hidden="true" />
        <div
          className="absolute -top-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-velo-500/8 blur-[130px] dark:bg-velo-500/16"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-12 sm:px-6 sm:pb-16 sm:pt-14">
          {/* breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[12.5px] text-slate-500 dark:text-white/45">
            <Link href="/" className="transition-colors hover:text-slate-800 dark:hover:text-white/80">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/products" className="transition-colors hover:text-slate-800 dark:hover:text-white/80">
              Products &amp; Services
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-velo-600 dark:text-velo-300">{category.short}</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-slate-800 dark:text-white/80">{product.name}</span>
          </nav>

          <div className="mt-9 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-velo-500 to-velo-600 text-white shadow-glow-blue">
                  <ProductIcon name={product.icon} className="h-6.5 w-6.5" />
                </div>
                <span className="glass-float rounded-full px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-wider text-velo-600 dark:text-velo-300">
                  {category.short}
                </span>
                {product.badge && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-mint-400/15 px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-wider text-mint-600 dark:text-mint-400">
                    <Sparkles className="h-3.5 w-3.5" /> {product.badge}
                  </span>
                )}
              </div>
              <h1 className="mt-6 font-[family-name:var(--font-poppins)] text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-3 text-[17px] font-medium text-velo-600 dark:text-velo-200">{product.tagline}</p>
              <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed text-slate-600 dark:text-white/60">
                {product.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/download"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-velo-500 px-7 py-3.5 text-[14.5px] font-semibold text-white shadow-glow-blue transition-all hover:-translate-y-0.5 hover:bg-velo-400"
                >
                  Get started free
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/support"
                  className="glass-float inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[14.5px] font-semibold text-slate-800 transition-all hover:bg-white dark:text-white dark:hover:bg-white/12"
                >
                  Talk to us
                </Link>
              </div>
            </div>

            {/* highlights panel */}
            <Reveal delay={0.15}>
              <div className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-7 dark:border-white/10 dark:bg-white/6 dark:shadow-none">
                <p className="text-[12px] font-bold uppercase tracking-wider text-velo-600 dark:text-velo-300">
                  Key benefits
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  {product.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint-400/20">
                        <Check className="h-3 w-3 text-mint-500 dark:text-mint-400" />
                      </span>
                      <span className="text-[13.5px] leading-relaxed text-slate-700 dark:text-white/80">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* overview */}
      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <Reveal>
            <p className="text-[12.5px] font-bold uppercase tracking-wider text-velo-600">
              Overview
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Why it matters
            </h2>
            <p className="mt-6 text-[16px] leading-[1.85] text-slate-600">{product.overview}</p>
          </Reveal>
          {product.image ? (
            <Reveal delay={0.12}>
              <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-[0_30px_70px_-30px_rgba(12,41,71,0.35)]">
                <img
                  src={product.image}
                  alt={product.imageAlt ?? product.name}
                  className="h-auto w-full object-cover"
                />
              </div>
            </Reveal>
          ) : (
            <Reveal delay={0.12}>
              <div className="rounded-3xl border border-velo-100 bg-gradient-to-br from-velo-50 via-white to-mint-400/10 p-8">
                <p className="text-[12.5px] font-bold uppercase tracking-wider text-velo-600">
                  Included in every account
                </p>
                <ul className="mt-5 flex flex-col gap-3.5">
                  {[
                    "Zero maintenance fees",
                    "Real-time transaction alerts",
                    "24/7 in-app support",
                    "Bank-grade encryption & fraud monitoring",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-3 text-[14.5px] font-medium text-navy-900">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-velo-500/12">
                        <Check className="h-3.5 w-3.5 text-velo-600" />
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/download"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-[13.5px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-navy-800"
                >
                  Open your account <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          )}
        </div>
      </Section>

      {/* features */}
      <Section className="bg-slate-50">
        <Reveal className="max-w-2xl">
          <p className="text-[12.5px] font-bold uppercase tracking-wider text-velo-600">
            Features
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Everything {product.name} does
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {product.features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06}>
              <div className="group h-full rounded-3xl border border-slate-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-velo-200 hover:shadow-[0_24px_50px_-20px_rgba(33,150,243,0.28)]">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-velo-50 font-[family-name:var(--font-poppins)] text-[13px] font-extrabold text-velo-600 transition-colors group-hover:bg-velo-500 group-hover:text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-[family-name:var(--font-poppins)] text-[16.5px] font-bold leading-snug text-navy-900">
                  {f.title}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-slate-500">{f.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* how it works */}
      {product.howItWorks && (
        <Section className="band">
          <Reveal className="max-w-2xl">
            <p className="text-[12.5px] font-bold uppercase tracking-wider text-velo-600 dark:text-velo-300">
              How it works
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight sm:text-4xl">
              Up and running in minutes
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {product.howItWorks.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="relative h-full rounded-3xl border border-slate-200/80 bg-white/70 p-7 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-none">
                  <span className="absolute -top-5 left-7 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-velo-500 to-velo-600 font-[family-name:var(--font-poppins)] text-[16px] font-extrabold text-white shadow-glow-blue">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-[family-name:var(--font-poppins)] text-[17px] font-bold text-slate-900 dark:text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-slate-600 dark:text-white/60">{s.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* faqs */}
      {product.faqs && product.faqs.length > 0 && (
        <Section className="bg-white">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <p className="text-[12.5px] font-bold uppercase tracking-wider text-velo-600">
                FAQ
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
                Common questions
              </h2>
              <p className="mt-4 text-[14.5px] leading-relaxed text-slate-500">
                Can&apos;t find your answer? Our support team is available 24/7.
              </p>
              <Link
                href="/support"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-[13.5px] font-semibold text-navy-900 transition-all hover:border-velo-300 hover:text-velo-600"
              >
                <CircleHelp className="h-4 w-4" /> Visit Help Center
              </Link>
            </Reveal>
            <div className="flex flex-col gap-3">
              {product.faqs.map((f, i) => (
                <Reveal key={f.q} delay={i * 0.06}>
                  <details className="group rounded-2xl border border-slate-100 bg-slate-50/60 px-6 py-5 transition-colors open:bg-white open:border-velo-100 open:shadow-[0_16px_40px_-18px_rgba(33,150,243,0.25)]">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold text-navy-900 [&::-webkit-details-marker]:hidden">
                      {f.q}
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-velo-50 text-velo-600 transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-3.5 text-[14px] leading-relaxed text-slate-500">{f.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* related */}
      <Section className="bg-slate-50">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[12.5px] font-bold uppercase tracking-wider text-velo-600">
              Keep exploring
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-poppins)] text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
              You may also like
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-velo-600 hover:text-velo-500"
          >
            View all products <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {relatedAll.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.07}>
              <Link
                href={`/products/${p.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-velo-200 hover:shadow-[0_24px_50px_-20px_rgba(33,150,243,0.28)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-velo-500 to-velo-600 text-white">
                  <ProductIcon name={p.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-poppins)] text-[16.5px] font-bold text-navy-900">
                  {p.name}
                </h3>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-slate-500">
                  {p.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-velo-600">
                  See details
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}

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
import { JsonLd } from "@/components/velo/JsonLd";
import { getSiteUrl } from "@/lib/site-url";

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
  if (!product)
    return { title: "Product not found", robots: { index: false } };

  const image = product.image ?? "/brand/og-image.jpg?v=2";
  const siteUrl = await getSiteUrl();

  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      type: "website",
      title: `${product.name} | Velo Finance`,
      description: product.description,
      url: `${siteUrl}/products/${product.slug}`,
      siteName: "Velo Finance",
      images: [{ url: image, alt: product.imageAlt ?? product.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Velo Finance`,
      description: product.description,
      images: [image],
    },
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
  const siteUrl = await getSiteUrl();

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: product.name,
    serviceType: CATEGORY_META[product.category].label,
    description: product.description,
    url: `${siteUrl}/products/${product.slug}`,
    image: `${siteUrl}${product.image ?? "/brand/og-image.jpg?v=2"}`,
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: "Worldwide",
    brand: { "@type": "Brand", name: "Velo Finance" },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Products & Services", item: `${siteUrl}/products` },
      { "@type": "ListItem", position: 3, name: product.name, item: `${siteUrl}/products/${product.slug}` },
    ],
  };

  return (
    <>
      <JsonLd data={[serviceLd, breadcrumbLd]} />
      {/* hero */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="absolute inset-0 bg-grid-dark opacity-50" aria-hidden="true" />
        <div
          className="absolute -top-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-velo-500/16 blur-[130px]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-12 sm:px-6 sm:pb-16 sm:pt-14">
          {/* breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[12.5px] text-white/45">
            <Link href="/" className="transition-colors hover:text-white/80">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/products" className="transition-colors hover:text-white/80">
              Products &amp; Services
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-velo-300">{category.short}</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white/80">{product.name}</span>
          </nav>

          <div className="mt-9 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-velo-500 to-velo-600 text-white shadow-glow-blue">
                  <ProductIcon name={product.icon} className="h-6.5 w-6.5" />
                </div>
                <span className="rounded-full border border-white/12 bg-white/6 px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-wider text-velo-300">
                  {category.short}
                </span>
                {product.badge && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-mint-400/15 px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-wider text-mint-400">
                    <Sparkles className="h-3.5 w-3.5" /> {product.badge}
                  </span>
                )}
              </div>
              <h1 className="mt-6 font-[family-name:var(--font-poppins)] text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-3 text-[17px] font-medium text-velo-200">{product.tagline}</p>
              <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed text-white/60">
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
                  className="glass-dark inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[14.5px] font-semibold text-white transition-all hover:bg-white/12 dark:hover:bg-white/10"
                >
                  Talk to us
                </Link>
              </div>
            </div>

            {/* highlights panel */}
            <Reveal delay={0.15}>
              <div className="glass-dark rounded-3xl border border-white/10 p-6 sm:p-7">
                <p className="text-[12px] font-bold uppercase tracking-wider text-velo-300">
                  Key benefits
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  {product.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint-400/20">
                        <Check className="h-3 w-3 text-mint-400" />
                      </span>
                      <span className="text-[13.5px] leading-relaxed text-white/80">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* overview */}
      <Section className="bg-white dark:bg-navy-950">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <Reveal>
            <p className="text-[12.5px] font-bold uppercase tracking-wider text-velo-600 dark:text-velo-400">
              Overview
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl dark:text-white">
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
              <div className="rounded-3xl border border-velo-100 bg-gradient-to-br from-velo-50 via-white to-mint-400/10 p-8 dark:from-velo-500/15 dark:border-velo-400/30 dark:via-white/5">
                <p className="text-[12.5px] font-bold uppercase tracking-wider text-velo-600 dark:text-velo-400">
                  Included in every account
                </p>
                <ul className="mt-5 flex flex-col gap-3.5">
                  {[
                    "Zero maintenance fees",
                    "Real-time transaction alerts",
                    "24/7 in-app support",
                    "Bank-grade encryption & fraud monitoring",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-3 text-[14.5px] font-medium text-navy-900 dark:text-white">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-velo-500/12">
                        <Check className="h-3.5 w-3.5 text-velo-600 dark:text-velo-400" />
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
          <p className="text-[12.5px] font-bold uppercase tracking-wider text-velo-600 dark:text-velo-400">
            Features
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl dark:text-white">
            Everything {product.name} does
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {product.features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06}>
              <div className="group h-full rounded-3xl border border-slate-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-velo-200 hover:shadow-[0_24px_50px_-20px_rgba(33,150,243,0.28)] dark:hover:border-velo-400/40 dark:bg-white/5">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-velo-50 font-[family-name:var(--font-poppins)] text-[13px] font-extrabold text-velo-600 transition-colors group-hover:bg-velo-500 group-hover:text-white dark:text-velo-400 dark:bg-velo-500/15">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-[family-name:var(--font-poppins)] text-[16.5px] font-bold leading-snug text-navy-900 dark:text-white">
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
        <Section className="bg-navy-950 text-white">
          <Reveal className="max-w-2xl">
            <p className="text-[12.5px] font-bold uppercase tracking-wider text-velo-300">
              How it works
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight sm:text-4xl">
              Up and running in minutes
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {product.howItWorks.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="relative h-full rounded-3xl border border-white/10 bg-white/5 p-7">
                  <span className="absolute -top-5 left-7 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-velo-500 to-velo-600 font-[family-name:var(--font-poppins)] text-[16px] font-extrabold text-white shadow-glow-blue">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-[family-name:var(--font-poppins)] text-[17px] font-bold">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-white/60">{s.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* faqs */}
      {product.faqs && product.faqs.length > 0 && (
        <Section className="bg-white dark:bg-navy-950">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <p className="text-[12.5px] font-bold uppercase tracking-wider text-velo-600 dark:text-velo-400">
                FAQ
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl dark:text-white">
                Common questions
              </h2>
              <p className="mt-4 text-[14.5px] leading-relaxed text-slate-500">
                Can&apos;t find your answer? Our support team is available 24/7.
              </p>
              <Link
                href="/support"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-[13.5px] font-semibold text-navy-900 transition-all hover:border-velo-300 hover:text-velo-600 dark:text-white dark:hover:text-velo-400"
              >
                <CircleHelp className="h-4 w-4" /> Visit Help Center
              </Link>
            </Reveal>
            <div className="flex flex-col gap-3">
              {product.faqs.map((f, i) => (
                <Reveal key={f.q} delay={i * 0.06}>
                  <details className="group rounded-2xl border border-slate-100 bg-slate-50/60 px-6 py-5 transition-colors open:bg-white open:border-velo-100 open:shadow-[0_16px_40px_-18px_rgba(33,150,243,0.25)] dark:open:border-velo-400/30 dark:open:bg-white/5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold text-navy-900 [&::-webkit-details-marker]:hidden dark:text-white">
                      {f.q}
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-velo-50 text-velo-600 transition-transform group-open:rotate-45 dark:text-velo-400 dark:bg-velo-500/15">
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
            <p className="text-[12.5px] font-bold uppercase tracking-wider text-velo-600 dark:text-velo-400">
              Keep exploring
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-poppins)] text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl dark:text-white">
              You may also like
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-velo-600 hover:text-velo-500 dark:text-velo-400"
          >
            View all products <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {relatedAll.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.07}>
              <Link
                href={`/products/${p.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-velo-200 hover:shadow-[0_24px_50px_-20px_rgba(33,150,243,0.28)] dark:hover:border-velo-400/40 dark:bg-white/5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-velo-500 to-velo-600 text-white">
                  <ProductIcon name={p.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-poppins)] text-[16.5px] font-bold text-navy-900 dark:text-white">
                  {p.name}
                </h3>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-slate-500">
                  {p.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-velo-600 dark:text-velo-400">
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

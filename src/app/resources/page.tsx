import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, BookOpen, Briefcase, Coins, Globe, LineChart, ShieldCheck } from "lucide-react";
import { PageHero, Section, CtaBand } from "@/components/velo/page-parts";
import { Reveal, Eyebrow, Stagger, StaggerItem } from "@/components/velo/primitives";
import { POSTS } from "@/data/blog";

export const metadata: Metadata = {
  alternates: { canonical: "/resources" },
  title: "Resources",
  description:
    "Empower yourself with knowledge, insights and tools to make smarter financial decisions — guides, blog posts and expert advice on personal and business finance.",
};

const GUIDES = [
  {
    icon: Globe,
    title: "International Transfers",
    text: "Fundamental concepts every banking customer should understand — rails, rates, fees and delivery times.",
    href: "/blog/evolution-of-cross-border-payments",
  },
  {
    icon: Briefcase,
    title: "SME Finance",
    text: "Financial management strategies for small and medium enterprises across African markets.",
    href: "/blog/sme-growth-africa-financing-expansion",
  },
  {
    icon: LineChart,
    title: "Investment Fundamentals",
    text: "Build wealth through smart investment strategies and portfolio management.",
    href: "/blog/smart-savings-strategies-african-millennials",
  },
  {
    icon: ShieldCheck,
    title: "Security & Protection",
    text: "Two-factor authentication, phishing defence and everyday account hygiene.",
    href: "/blog/digital-banking-security-protecting-data",
  },
  {
    icon: Coins,
    title: "Investment Back Home",
    text: "Specialized financial strategies for Africans living abroad — property, escrow and FX timing.",
    href: "/blog/currency-exchange-strategies-diaspora-communities",
  },
  {
    icon: BookOpen,
    title: "Family Financial Management",
    text: "Building generational wealth that survives you — assets, structure and education.",
    href: "/blog/building-generational-wealth-africa",
  },
];

export default function ResourcesPage() {
  const featured = POSTS.filter((p) => p.featured).slice(0, 3);
  const rest = POSTS.filter((p) => !featured.includes(p)).slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow="Financial Resources"
        title="Knowledge that makes you"
        highlight="smarter with money."
        description="Empower yourself with insights, tips and expert advice on personal and business finance — written for African realities and global lives."
      />

      {/* featured */}
      <Section className="bg-white">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>Latest from Velo</Eyebrow>
            <h2 className="mt-4 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Featured articles
            </h2>
          </div>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-velo-600 hover:text-velo-500"
          >
            View all posts
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <Stagger className="mt-10 grid gap-6 lg:grid-cols-3">
          {featured.map((post) => (
            <StaggerItem key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_2px_24px_-12px_rgba(12,41,71,0.18)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_56px_-24px_rgba(33,150,243,0.35)]"
              >
                {post.image ? (
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-navy-950/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-velo-300 backdrop-blur">
                      {post.category}
                    </span>
                  </div>
                ) : (
                  <div className="relative flex h-44 items-center justify-center bg-gradient-to-br from-navy-900 to-velo-800">
                    <span className="rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wide text-velo-300">
                      {post.category}
                    </span>
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-[family-name:var(--font-poppins)] text-[17.5px] font-bold leading-snug text-navy-900 group-hover:text-velo-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-slate-500">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between text-[12px] text-slate-400">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* guides */}
      <Section className="bg-slate-50">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Learning Paths</Eyebrow>
          <h2 className="mt-5 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Guides for every <span className="text-gradient-blue">money journey</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GUIDES.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05}>
              <Link
                href={g.href}
                className="group flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-velo-200 hover:shadow-[0_24px_50px_-20px_rgba(33,150,243,0.25)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-velo-50 text-velo-600 transition-colors group-hover:bg-velo-500 group-hover:text-white">
                  <g.icon className="h-5.5 w-5.5" />
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-poppins)] text-[16.5px] font-bold text-navy-900">
                  {g.title}
                </h3>
                <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-slate-500">{g.text}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-velo-600">
                  Read guide <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* more posts */}
      <Section className="bg-white">
        <Reveal>
          <Eyebrow>Keep Reading</Eyebrow>
          <h2 className="mt-4 font-[family-name:var(--font-poppins)] text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
            More insights
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4">
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50/50 p-6 transition-all duration-300 hover:border-velo-200 hover:bg-white hover:shadow-[0_20px_44px_-20px_rgba(33,150,243,0.25)] sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-velo-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-velo-700">
                      {post.category}
                    </span>
                    <span className="text-[12px] text-slate-400">
                      {post.date} · {post.readTime}
                    </span>
                  </div>
                  <h3 className="mt-2.5 font-[family-name:var(--font-poppins)] text-[17px] font-bold text-navy-900 group-hover:text-velo-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-1.5 max-w-3xl text-[13.5px] leading-relaxed text-slate-500">
                    {post.excerpt}
                  </p>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 text-velo-600 transition-all group-hover:border-velo-400 group-hover:bg-velo-500 group-hover:text-white">
                  <ArrowUpRight className="h-5 w-5" />
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

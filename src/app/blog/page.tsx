import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";
import { PageHero, Section, CtaBand } from "@/components/velo/page-parts";
import { Reveal, Eyebrow } from "@/components/velo/primitives";
import { POSTS } from "@/data/blog";

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: "Blog",
  description:
    "Insights, tips and expert advice on personal finance, cross-border payments, business banking and building wealth — from the Velo team.",
};

export default function BlogPage() {
  const [featured, ...rest] = POSTS;

  return (
    <>
      <PageHero
        eyebrow="The Velo Blog"
        title="Ideas, guides and"
        highlight="money intelligence."
        description="Deep dives on cross-border payments, savings strategy, business finance and security — written for the African experience and global lives."
      />

      <Section className="bg-white">
        {/* featured */}
        <Reveal>
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid overflow-hidden rounded-[32px] border border-slate-100 shadow-[0_20px_60px_-30px_rgba(12,41,71,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_36px_80px_-32px_rgba(33,150,243,0.4)] lg:grid-cols-2"
          >
            <div className="relative min-h-[260px]">
              {featured.image ? (
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-gradient-to-br from-navy-900 to-velo-800 p-10">
                  <span className="rounded-full bg-white/10 px-5 py-2 text-[12px] font-bold uppercase tracking-wide text-velo-300">
                    {featured.category}
                  </span>
                </div>
              )}
              <span className="absolute left-5 top-5 rounded-full bg-velo-500 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white shadow-lg">
                Featured
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <span className="text-[12px] font-bold uppercase tracking-wider text-velo-600">
                {featured.category}
              </span>
              <h2 className="mt-3 font-[family-name:var(--font-poppins)] text-2xl font-extrabold leading-snug tracking-tight text-navy-900 transition-colors group-hover:text-velo-600 sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-4 text-[14.5px] leading-relaxed text-slate-500">{featured.excerpt}</p>
              <div className="mt-6 flex items-center gap-4 text-[12.5px] text-slate-400">
                <span>{featured.author}</span>
                <span>{featured.date}</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> {featured.readTime}
                </span>
              </div>
            </div>
          </Link>
        </Reveal>

        {/* grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.06}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-slate-100 bg-slate-50/50 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-velo-200 hover:bg-white hover:shadow-[0_28px_56px_-24px_rgba(33,150,243,0.32)]"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-velo-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-velo-700">
                    {post.category}
                  </span>
                  <span className="text-[11.5px] text-slate-400">{post.readTime}</span>
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-poppins)] text-[18px] font-bold leading-snug text-navy-900 transition-colors group-hover:text-velo-600">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-slate-500">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                  <div>
                    <p className="text-[12.5px] font-semibold text-navy-900">{post.author}</p>
                    <p className="text-[11.5px] text-slate-400">{post.date}</p>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-velo-600 transition-all group-hover:border-velo-400 group-hover:bg-velo-500 group-hover:text-white">
                    <ArrowUpRight className="h-4.5 w-4.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}

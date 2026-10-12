import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ChevronRight, Clock, Share2 } from "lucide-react";
import { POSTS, getPost } from "@/data/blog";
import { Reveal } from "@/components/velo/primitives";
import { CtaBand } from "@/components/velo/page-parts";
import { JsonLd } from "@/components/velo/JsonLd";
import { SITE } from "@/data/site";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article not found", robots: { index: false } };

  const url = `${SITE.website}/blog/${post.slug}`;
  const image = post.image ?? "/brand/og-image.jpg";
  const publishedTime = new Date(post.date).toISOString();

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url,
      siteName: "Velo Finance",
      publishedTime,
      authors: [post.author],
      tags: [post.category, "Velo Finance", "cross-border payments"],
      images: [{ url: image, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE.website}${post.image ?? "/brand/og-image.jpg"}`,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: { "@type": "Organization", name: post.author, url: SITE.website },
    publisher: {
      "@type": "Organization",
      name: "Velo Finance",
      logo: { "@type": "ImageObject", url: `${SITE.website}/brand/velo-logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE.website}/blog/${post.slug}` },
    articleSection: post.category,
    inLanguage: "en",
  };

  const others = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={articleLd} />
      {/* hero */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="absolute inset-0 bg-grid-dark opacity-40" aria-hidden="true" />
        <div
          className="absolute -top-40 left-1/2 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-velo-500/16 blur-[130px]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl px-4 pb-14 pt-12 sm:px-6 sm:pb-16">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[12.5px] text-white/45">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/blog" className="hover:text-white/80 transition-colors">Blog</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-velo-300">{post.category}</span>
          </nav>

          <h1 className="mt-8 font-[family-name:var(--font-poppins)] text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-[44px]">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] text-white/55">
            <span className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-velo-500 to-velo-600 text-[13px] font-bold text-white">
                {post.author.charAt(0)}
              </span>
              <span>
                <span className="block font-semibold text-white/85">{post.author}</span>
                {post.authorRole && <span className="block text-[11.5px]">{post.authorRole}</span>}
              </span>
            </span>
            <span>{post.date}</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* body */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          {post.image && (
            <Reveal className="mb-10 overflow-hidden rounded-3xl border border-slate-100 shadow-[0_24px_60px_-30px_rgba(12,41,71,0.3)]">
              <Image
                src={post.image}
                alt={post.title}
                width={1400}
                height={800}
                className="h-auto w-full object-cover"
                priority
              />
            </Reveal>
          )}

          <Reveal>
            <div className="flex flex-col gap-6">
              {post.body.map((block, i) => {
                if (block.type === "h2") {
                  return (
                    <h2
                      key={i}
                      className="mt-4 font-[family-name:var(--font-poppins)] text-[24px] font-extrabold tracking-tight text-navy-900 sm:text-[28px]"
                    >
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "h3") {
                  return (
                    <h3
                      key={i}
                      className="mt-2 font-[family-name:var(--font-poppins)] text-[19px] font-bold text-navy-900"
                    >
                      {block.text}
                    </h3>
                  );
                }
                if (block.type === "ul") {
                  return (
                    <ul key={i} className="flex flex-col gap-3 pl-1">
                      {block.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-[15.5px] leading-[1.8] text-slate-600">
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-velo-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={i} className="text-[15.5px] leading-[1.9] text-slate-600">
                    {block.text}
                  </p>
                );
              })}
            </div>
          </Reveal>

          {/* share / back */}
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-velo-600 hover:text-velo-500"
            >
              <ArrowLeft className="h-4 w-4" /> Back to all articles
            </Link>
            <span className="inline-flex items-center gap-2 text-[13px] text-slate-400">
              <Share2 className="h-4 w-4" /> Share this article
            </span>
          </div>
        </div>
      </section>

      {/* related */}
      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
              Keep reading
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {others.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.07}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-velo-200 hover:shadow-[0_24px_50px_-20px_rgba(33,150,243,0.25)]"
                >
                  <span className="w-fit rounded-full bg-velo-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-velo-700">
                    {p.category}
                  </span>
                  <h3 className="mt-4 font-[family-name:var(--font-poppins)] text-[16.5px] font-bold leading-snug text-navy-900 group-hover:text-velo-600 transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[13px] leading-relaxed text-slate-500">{p.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-velo-600">
                    Read article <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

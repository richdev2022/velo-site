"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Search } from "lucide-react";
import {
  CATEGORY_META,
  CATEGORY_ORDER,
  PRODUCTS,
  type ProductCategory,
} from "@/data/products";
import { ProductIcon } from "./ProductIcon";
import { PageHero } from "./page-parts";

const TABS: (ProductCategory | "all")[] = ["all", ...CATEGORY_ORDER];

export function ProductsCatalog() {
  const params = useSearchParams();
  const router = useRouter();
  const initial = (params.get("tab") as ProductCategory) ?? "all";
  const [tab, setTab] = useState<ProductCategory | "all">(
    CATEGORY_ORDER.includes(initial) ? initial : "all"
  );
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const inTab = tab === "all" || p.category === tab;
      const inQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.features.some((f) => f.title.toLowerCase().includes(q));
      return inTab && inQuery;
    });
  }, [tab, query]);

  function switchTab(t: ProductCategory | "all") {
    setTab(t);
    router.replace(t === "all" ? "/products" : `/products?tab=${t}`, { scroll: false });
  }

  return (
    <>
      <PageHero
        eyebrow="Products & Services"
        title="Everything your money"
        highlight="will ever need."
        description="Comprehensive financial solutions for every stage of your journey — 26 products across individuals, businesses, diaspora, global finance and referrals. Every product has its own detail page."
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-white/35" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products — try 'card', 'crypto', 'IBAN'…"
              aria-label="Search products"
              className="h-13 w-full rounded-full border border-white/12 bg-white/7 py-3.5 pl-11 pr-5 text-[14px] text-white placeholder:text-white/35 outline-none backdrop-blur transition-colors focus:border-velo-400 focus:bg-white/10"
            />
          </div>
          <div className="flex flex-wrap gap-2 text-[12.5px] text-white/50">
            {["Instant transfers", "6 currency accounts", "Gift cards", "Business loans"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-2">
                <Check className="h-3.5 w-3.5 text-mint-400" /> {t}
              </span>
            ))}
          </div>
        </div>
      </PageHero>

      {/* tabs */}
      <div className="sticky top-[68px] z-30 border-b border-slate-100 bg-white/92 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl overflow-x-auto px-4 sm:px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-2 py-3.5">
            {TABS.map((t) => {
              const active = tab === t;
              const label = t === "all" ? "All Products" : CATEGORY_META[t].short;
              const count = t === "all" ? PRODUCTS.length : PRODUCTS.filter((p) => p.category === t).length;
              return (
                <button
                  key={t}
                  onClick={() => switchTab(t)}
                  className={`relative shrink-0 rounded-full px-4.5 py-2.5 text-[13.5px] font-semibold transition-all ${
                    active
                      ? "bg-navy-900 text-white shadow-md"
                      : "bg-slate-100/80 text-slate-500 hover:bg-slate-200/70 hover:text-navy-900"
                  }`}
                >
                  {label}
                  <span className={`ml-1.5 text-[11px] font-bold ${active ? "text-velo-300" : "text-slate-400"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* catalog */}
      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* category blurb */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="mb-10 max-w-2xl"
            >
              <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
                {tab === "all" ? "Browse everything" : CATEGORY_META[tab].label}
              </h2>
              <p className="mt-2.5 text-[15px] leading-relaxed text-slate-500">
                {tab === "all"
                  ? "Twenty-six products, one platform. Filter by category or search to find exactly what you need."
                  : CATEGORY_META[tab].blurb}
              </p>
            </motion.div>
          </AnimatePresence>

          {visible.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-14 text-center">
              <p className="font-[family-name:var(--font-poppins)] text-[17px] font-bold text-navy-900">
                No products match “{query}”
              </p>
              <p className="mt-2 text-[14px] text-slate-500">
                Try a different keyword — or browse all products.
              </p>
              <button
                onClick={() => { setQuery(""); switchTab("all"); }}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-[13.5px] font-semibold text-white hover:bg-navy-800"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {visible.map((p) => (
                  <motion.div
                    layout
                    key={p.slug}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35 }}
                  >
                    <Link
                      href={`/products/${p.slug}`}
                      className="group flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_2px_20px_-10px_rgba(12,41,71,0.14)] transition-all duration-300 hover:-translate-y-1.5 hover:border-velo-200 hover:shadow-[0_28px_56px_-22px_rgba(33,150,243,0.32)]"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-velo-500 to-velo-600 text-white shadow-glow-blue transition-transform duration-300 group-hover:scale-110">
                          <ProductIcon name={p.icon} className="h-5.5 w-5.5" />
                        </div>
                        {p.badge && (
                          <span className="rounded-full bg-mint-400/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-mint-500">
                            {p.badge}
                          </span>
                        )}
                      </div>
                      <h3 className="mt-5 font-[family-name:var(--font-poppins)] text-[17.5px] font-bold leading-snug text-navy-900">
                        {p.name}
                      </h3>
                      <p className="mt-1.5 text-[12.5px] font-medium text-velo-600">{p.tagline}</p>
                      <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-slate-500">
                        {p.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {p.highlights.slice(0, 2).map((h) => (
                          <span
                            key={h}
                            className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-500"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-velo-600 transition-colors group-hover:text-velo-500">
                        See details
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}

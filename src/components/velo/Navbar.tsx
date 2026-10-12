"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import {
  ArrowRight,
  Building2,
  ChevronDown,
  Coins,
  CreditCard,
  Gift,
  Globe,
  Menu,
  Send,
  Smartphone,
  Sparkles,
  Split,
  TrendingUp,
  UserPlus,
  Users,
  X,
  ShieldCheck,
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Smartphone,
  Globe,
  Send,
  Receipt: Smartphone,
  CreditCard,
  WalletCards: CreditCard,
  Users,
  Split,
  TrendingUp,
  Building2,
  FileText: Smartphone,
  Landmark: Building2,
  ShieldCheck,
  UserPlus,
  Gift,
  Globe2: Globe,
  Coins,
};

const PRODUCTS_MENU: {
  title: string;
  href: string;
  items: { label: string; sub: string; icon: string; href: string }[];
}[] = [
  {
    title: "Everyday Banking",
    href: "/products?tab=individuals",
    items: [
      { label: "Digital Bank Account", sub: "Open in 5 minutes", icon: "Smartphone", href: "/products/digital-bank-account" },
      { label: "Local Transfers", sub: "Instant, 24/7", icon: "Send", href: "/products/local-transfers" },
      { label: "Bills Payment", sub: "Everything in one place", icon: "Receipt", href: "/products/bills-payment" },
      { label: "Savings & Investment", sub: "Grow your wealth", icon: "TrendingUp", href: "/products/savings-investment" },
      { label: "Budget Management", sub: "Smart budgeting", icon: "TrendingUp", href: "/products/budget-management" },
    ],
  },
  {
    title: "Cards & Sharing",
    href: "/products?tab=individuals",
    items: [
      { label: "Physical Naira Card", sub: "Verve debit card", icon: "CreditCard", href: "/products/physical-naira-card" },
      { label: "Virtual Card", sub: "Spend worldwide", icon: "WalletCards", href: "/products/virtual-card" },
      { label: "Joint Account", sub: "Share finances", icon: "Users", href: "/products/joint-account" },
      { label: "Payment Splitting", sub: "Split any bill", icon: "Split", href: "/products/payment-splitting" },
    ],
  },
  {
    title: "Global Finance — New",
    href: "/products?tab=global",
    items: [
      { label: "Multi-Currency Accounts", sub: "USD · EUR · GBP · MXN · BRL · COP", icon: "Landmark", href: "/products/multicurrency-accounts" },
      { label: "Multi-Currency Wallets", sub: "Hold & convert 10+ currencies", icon: "Coins", href: "/products/currency-wallets" },
      { label: "International Payouts", sub: "Send to 80+ countries", icon: "Send", href: "/products/global-payouts" },
      { label: "Gift Cards", sub: "Buy & sell instantly", icon: "Gift", href: "/products/gift-cards" },
      { label: "Cross-Border Payments", sub: "180+ countries", icon: "Globe", href: "/products/cross-border-payments" },
      { label: "Referral Program", sub: "Earn ₦500 per friend", icon: "UserPlus", href: "/products/referral-program" },
    ],
  },
];

const LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Products & Services", href: "/products", menu: true },
  { label: "Support", href: "/support" },
  { label: "Resources", href: "/resources" },
  { label: "Security", href: "/security" },
  { label: "Careers", href: "/careers" },
];

function MenuIcon({ name, className }: { name: string; className?: string }) {
  const Ico = ICONS[name] ?? Smartphone;
  return <Ico className={className} />;
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileProducts, setMobileProducts] = useState(false);
  const pathname = usePathname();
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Announcement bar */}
      <div className="relative z-50 overflow-hidden bg-gradient-to-r from-velo-700 via-velo-500 to-velo-700 text-white">
        <div className="shine-sweep absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center text-[12.5px] font-medium sm:text-[13px]">
          <Sparkles className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">
            New — Get your own USD, EUR, GBP, MXN, BRL &amp; COP account details in minutes
          </span>
          <Link
            href="/products/multicurrency-accounts"
            className="hidden items-center gap-1 font-semibold underline underline-offset-4 transition-colors hover:text-velo-100 sm:inline-flex"
          >
            Learn more <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 border-b backdrop-blur-2xl transition-all duration-300 ${
          scrolled
            ? "border-slate-200/80 bg-white/85 shadow-lg shadow-slate-900/5 dark:border-white/10 dark:bg-navy-950/90 dark:shadow-navy-950/40"
            : "border-slate-200/60 bg-white/75 dark:border-white/5 dark:bg-navy-950"
        }`}
      >
        <nav className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link href="/" aria-label="Velo Finance home" className="relative h-9 w-[104px] shrink-0">
            {/* dark-text logo for light mode */}
            <Image
              src="/brand/velo-logo.png"
              alt="Velo"
              fill
              sizes="104px"
              className="object-contain object-left dark:hidden"
              priority
            />
            {/* white logo for dark mode */}
            <Image
              src="/brand/velo-logo-white.png"
              alt="Velo"
              fill
              sizes="104px"
              className="hidden object-contain object-left dark:block"
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-7 lg:flex">
            {LINKS.map((l) =>
              l.menu ? (
                <div
                  key={l.label}
                  onMouseEnter={() => setMenuOpen(true)}
                  onMouseLeave={() => setMenuOpen(false)}
                >
                  <Link
                    href={l.href}
                    className={`group relative inline-flex items-center gap-1 py-6 text-[14px] font-medium transition-colors ${
                      pathname.startsWith("/products")
                        ? "text-slate-900 dark:text-white"
                        : "text-slate-600 hover:text-slate-900 dark:text-white/75 dark:hover:text-white"
                    }`}
                  >
                    {l.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${menuOpen ? "rotate-180" : ""}`}
                    />
                    <span
                      className={`absolute bottom-3 left-0 h-0.5 rounded-full bg-gradient-to-r from-velo-400 to-mint-400 transition-all duration-300 ${
                        pathname.startsWith("/products") ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>

                  <AnimatePresence>
                    {menuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.985 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.99 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-1/2 top-full -translate-x-1/2 w-[860px]"
                      >
                        <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white/98 shadow-2xl shadow-slate-900/10 backdrop-blur-2xl dark:border-white/10 dark:bg-navy-950/97 dark:shadow-navy-950/70">
                          {/* 3 product columns */}
                          <div className="grid grid-cols-3 gap-7 p-7">
                            {PRODUCTS_MENU.map((col) => (
                              <div key={col.title}>
                                <Link
                                  href={col.href}
                                  className="text-[11px] font-bold uppercase tracking-wider text-velo-600 transition-colors hover:text-velo-500 dark:text-velo-300 dark:hover:text-velo-200"
                                >
                                  {col.title}
                                </Link>
                                <ul className="mt-3 flex flex-col gap-1">
                                  {col.items.map((it) => (
                                    <li key={it.label}>
                                      <Link
                                        href={it.href}
                                        className="group flex items-start gap-2.5 rounded-xl px-2.5 py-2 transition-colors hover:bg-slate-100/90 dark:hover:bg-white/6"
                                      >
                                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-velo-500/12 text-velo-600 transition-colors group-hover:bg-velo-500 group-hover:text-white dark:bg-velo-500/15 dark:text-velo-300">
                                          <MenuIcon name={it.icon} className="h-3.5 w-3.5" />
                                        </span>
                                        <span>
                                          <span className="block text-[13px] font-semibold leading-tight text-slate-800 group-hover:text-slate-950 dark:text-white/90 dark:group-hover:text-white">
                                            {it.label}
                                          </span>
                                          <span className="mt-0.5 block text-[11.5px] leading-tight text-slate-500 dark:text-white/40">
                                            {it.sub}
                                          </span>
                                        </span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>

                          {/* panel footer */}
                          <div className="flex items-center justify-between gap-4 border-t border-slate-100 bg-slate-50/70 px-7 py-4 dark:border-white/8 dark:bg-white/4">
                            <p className="text-[12.5px] font-medium text-slate-500 dark:text-white/45">
                              <ShieldCheck className="mr-1.5 inline h-4 w-4 text-mint-500 dark:text-mint-400" />
                              Free to open · Zero maintenance fees · No minimums
                            </p>
                            <Link
                              href="/products"
                              className="group inline-flex items-center gap-1.5 text-[13px] font-bold text-velo-600 transition-colors hover:text-velo-500 dark:text-velo-300 dark:hover:text-velo-200"
                            >
                              View all 26 products &amp; services
                              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`group relative py-2 text-[14px] font-medium transition-colors ${
                    pathname === l.href
                      ? "text-slate-900 dark:text-white"
                      : "text-slate-600 hover:text-slate-900 dark:text-white/75 dark:hover:text-white"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-gradient-to-r from-velo-400 to-mint-400 transition-all duration-300 ${
                      pathname === l.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              )
            )}
          </div>

          <div className="hidden items-center gap-2.5 lg:flex">
            <ThemeToggle />
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-[14px] font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-white/75 dark:hover:text-white"
            >
              How it works
            </Link>
            <a
              href="/support#contact"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-[14px] font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-white/75 dark:hover:text-white"
            >
              Sign in
            </a>
            <Link
              href="/download"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-velo-500 px-5 py-2.5 text-[14px] font-semibold text-white shadow-glow-blue transition-all hover:-translate-y-0.5 hover:bg-velo-400"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" aria-hidden="true" />
              <span className="relative flex items-center gap-2">
                Open an Account
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-slate-800 transition-colors hover:bg-slate-100 dark:text-white dark:hover:bg-white/10"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* scroll progress */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-velo-500 via-velo-300 to-mint-400"
          style={{ scaleX: scrollYProgress }}
          aria-hidden="true"
        />

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="max-h-[calc(100vh-68px)] overflow-y-auto border-b border-slate-200/80 bg-white/97 backdrop-blur-xl dark:border-white/10 dark:bg-navy-950/97 lg:hidden"
            >
              <div className="flex flex-col gap-1 px-5 py-5 pb-10">
                {/* Products accordion */}
                <button
                  onClick={() => setMobileProducts(!mobileProducts)}
                  className="flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-medium text-slate-800 transition-colors hover:bg-slate-100 dark:text-white/85 dark:hover:bg-white/10"
                  aria-expanded={mobileProducts}
                >
                  Products &amp; Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileProducts ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileProducts && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-0.5 pb-2 pl-3">
                        <Link
                          href="/products"
                          onClick={() => setOpen(false)}
                          className="rounded-lg bg-velo-500/12 px-4 py-3 text-[14px] font-semibold text-velo-600 dark:bg-velo-500/15 dark:text-velo-200"
                        >
                          View all products &amp; services →
                        </Link>
                        {PRODUCTS_MENU.flatMap((c) => c.items).map((it) => (
                          <Link
                            key={it.label}
                            href={it.href}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-[14px] text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-white/75 dark:hover:bg-white/8 dark:hover:text-white"
                          >
                            <MenuIcon name={it.icon} className="h-4 w-4 text-velo-500 dark:text-velo-400" />
                            {it.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {LINKS.filter((l) => !l.menu).map((l) => (
                  <motion.div key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3.5 text-[15px] font-medium text-slate-800 transition-colors hover:bg-slate-100 hover:text-slate-950 dark:text-white/85 dark:hover:bg-white/10 dark:hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
                <Link
                  href="/how-it-works"
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3.5 text-[15px] font-medium text-slate-800 transition-colors hover:bg-slate-100 hover:text-slate-950 dark:text-white/85 dark:hover:bg-white/10 dark:hover:text-white"
                >
                  How it works
                </Link>
                <div className="mt-3 flex flex-col gap-2.5 px-1">
                  <Link
                    href="/download"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-velo-500 px-5 py-3.5 text-[15px] font-semibold text-white"
                  >
                    Open an Account <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="/support#contact"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-5 py-3.5 text-[15px] font-semibold text-slate-800 dark:border-white/20 dark:text-white/90"
                  >
                    <Globe className="h-4 w-4" /> Sign in
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

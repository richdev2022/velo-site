import type { Metadata } from "next";
import { Hero } from "@/components/velo/Hero";
import { ValueProps, CoreProducts, CardsShowcase, Journeys, Partners, ReferralBand } from "@/components/velo/HomeSections";
import { Rails } from "@/components/velo/Rails";
import { Wallets } from "@/components/velo/Wallets";
import { Payouts } from "@/components/velo/Payouts";
import { GiftCards } from "@/components/velo/GiftCards";
import { Testimonials } from "@/components/velo/Testimonials";
import { Faq } from "@/components/velo/Faq";
import { Cta } from "@/components/velo/Cta";
import { JsonLd } from "@/components/velo/JsonLd";
import { FAQS } from "@/data/faq";
import { SITE } from "@/data/site";
import fs from "node:fs";
import path from "node:path";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  const heroVideo = fs.existsSync(
    path.join(process.cwd(), "public", "media", "hero.mp4")
  );

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url: SITE.website,
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={faqLd} />
      <Hero video={heroVideo} />
      <ValueProps />
      <Rails />
      <CoreProducts />
      <Wallets />
      <Payouts />
      <CardsShowcase />
      <GiftCards />
      <Journeys />
      <ReferralBand />
      <Partners />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  );
}

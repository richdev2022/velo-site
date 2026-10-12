import { Hero } from "@/components/velo/Hero";
import { ValueProps, CoreProducts, CardsShowcase, Journeys, Partners, ReferralBand } from "@/components/velo/HomeSections";
import { Rails } from "@/components/velo/Rails";
import { Wallets } from "@/components/velo/Wallets";
import { Payouts } from "@/components/velo/Payouts";
import { GiftCards } from "@/components/velo/GiftCards";
import { Testimonials } from "@/components/velo/Testimonials";
import { Faq } from "@/components/velo/Faq";
import { Cta } from "@/components/velo/Cta";
import fs from "node:fs";
import path from "node:path";

export default function Home() {
  const has = (file: string) =>
    fs.existsSync(path.join(process.cwd(), "public", "media", file));

  return (
    <>
      <Hero video={has("hero.mp4")} />
      <ValueProps />
      <Rails />
      <CoreProducts />
      <Wallets />
      <Payouts />
      <CardsShowcase video={has("cards.mp4")} />
      <GiftCards />
      <Journeys />
      <ReferralBand />
      <Partners />
      <Testimonials />
      <Faq />
      <Cta video={has("globe.mp4")} />
    </>
  );
}

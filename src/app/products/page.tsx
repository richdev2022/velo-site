import type { Metadata } from "next";
import { Suspense } from "react";
import { ProductsCatalog } from "@/components/velo/ProductsCatalog";
import { CtaBand } from "@/components/velo/page-parts";

export const metadata: Metadata = {
  alternates: { canonical: "/products" },
  title: "Products & Services",
  description:
    "Explore every Velo product: digital accounts, cross-border payments, cards, savings, business banking, diaspora services, multi-currency virtual accounts, wallets, international payouts and gift cards.",
};

export default function ProductsPage() {
  return (
    <>
      <Suspense fallback={<div className="min-h-[60vh] bg-white" />}>
        <ProductsCatalog />
      </Suspense>
      <CtaBand />
    </>
  );
}

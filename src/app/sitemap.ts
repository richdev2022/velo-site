import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";
import { PRODUCTS } from "@/data/products";
import { POSTS } from "@/data/blog";

const BASE = SITE.website; // https://velofinance.co

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/products`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/how-it-works`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/security`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/support`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/download`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/resources`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/blog`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/careers`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/legal`, lastModified, changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE}/legal/privacy`, lastModified, changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE}/legal/terms`, lastModified, changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE}/legal/cookies`, lastModified, changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE}/delete-account`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];

  const productRoutes: MetadataRoute.Sitemap = PRODUCTS.map((p) => ({
    url: `${BASE}/products/${p.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...blogRoutes];
}

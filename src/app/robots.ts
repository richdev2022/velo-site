import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

// Rendered per request so the sitemap link always points at the serving domain.
export const dynamic = "force-dynamic";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const base = await getSiteUrl();
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}

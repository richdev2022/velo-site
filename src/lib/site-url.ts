import { headers } from "next/headers";
import { SITE } from "@/data/site";

/**
 * Resolve the site's base URL at request time, so every absolute URL in the
 * rendered HTML (og:image, og:url, canonical, JSON-LD, sitemap, robots) adapts
 * to whichever domain the app is currently served from — velofinance.co today,
 * any other domain tomorrow, without code or build changes.
 *
 * Priority:
 *   1. NEXT_PUBLIC_SITE_URL env var (explicit pin; wins over the request host)
 *   2. Request host: x-forwarded-host (set by proxies/Cloudflare), else Host
 *      — scheme from x-forwarded-proto, defaulting to https for public hosts
 *      and http for localhost. Note: Next's own server auto-fills
 *      x-forwarded-proto from the socket ("http" for direct connections), so
 *      behind Cloudflare/nginx you get https, and a bare direct connection
 *      yields http — production should always sit behind the proxy/TLS.
 *   3. SITE.website from src/data/site.ts (build-time / no-request fallback).
 */
export async function getSiteUrl(): Promise<string> {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/+$/, "");

  const h = await headers();
  const host = ((h.get("x-forwarded-host") ?? h.get("host") ?? "")).split(",")[0].trim();
  if (!host) return SITE.website.replace(/\/+$/, "");

  const proto =
    (h.get("x-forwarded-proto") ?? "").split(",")[0].trim() ||
    (/^(localhost|127\.0\.0\.1|\[::1\])(:\d+)?$/.test(host) ? "http" : "https");

  return `${proto}://${host}`;
}

import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Velo Finance — Banking Built for a Borderless Future",
    short_name: "Velo",
    description:
      "Open free multi-currency virtual accounts, hold wallets in 10+ currencies, pay out to 80+ countries and trade gift cards — all in one app.",
    id: "/",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#0C2947",
    theme_color: "#0C2947",
    categories: ["finance", "business"],
    icons: [
      { src: "/favicon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/favicon.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/favicon.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}

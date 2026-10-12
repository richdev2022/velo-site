import type { Metadata, Viewport } from "next";
import { Poppins, Rubik } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Navbar } from "@/components/velo/Navbar";
import { Footer } from "@/components/velo/Footer";
import { JsonLd } from "@/components/velo/JsonLd";
import { SITE } from "@/data/site";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const SITE_URL = SITE.website; // https://velofinance.co
const SITE_NAME = "Velo Finance";
const DEFAULT_TITLE = `Velo — ${SITE.tagline}`;
const DEFAULT_DESCRIPTION =
  "Velo Finance is modern digital banking for a borderless world. Open free USD, EUR, GBP, MXN, BRL and COP virtual accounts in your name, hold multi-currency wallets, convert at mid-market rates, pay out to 80+ countries and trade gift cards — with transparent fees and bank-grade security.";
const OG_IMAGE = { url: "/brand/og-image.jpg?v=2", width: 1200, height: 630, type: "image/jpeg" };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Velo",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "Velo",
    "Velo Finance",
    "digital banking",
    "online banking",
    "cross-border payments",
    "borderless banking",
    "virtual accounts",
    "USD virtual account",
    "EUR IBAN",
    "GBP sort code",
    "SPEI CLABE",
    "PIX account Brazil",
    "multi-currency wallet",
    "currency exchange",
    "international transfers",
    "international payouts",
    "send money abroad",
    "receive money like a local",
    "gift cards",
    "buy gift cards",
    "sell gift cards",
    "fintech Africa",
    "diaspora banking",
    "diaspora payments",
    "freelancer banking",
    "velofinance.co",
  ],
  applicationName: SITE_NAME,
  authors: [{ name: "Velo Finance LTD", url: SITE_URL }],
  creator: "Velo Finance LTD",
  publisher: "Velo Finance LTD",
  category: "finance",
  formatDetection: { telephone: false, address: false, email: false },
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [{ ...OG_IMAGE, alt: "Velo — Banking Built for a Borderless Future. Multi-currency accounts, wallets, global payouts and gift cards." }],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: OG_IMAGE.url, width: 1200, height: 630, alt: "Velo — Banking Built for a Borderless Future" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0C2947" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  legalName: SITE.legalName,
  url: SITE_URL,
  logo: `${SITE_URL}/brand/velo-logo.png`,
  image: `${SITE_URL}/brand/og-image.jpg`,
  description: SITE.description,
  identifier: `RC ${SITE.rcNumber}`,
  email: SITE.email,
  telephone: SITE.phone,
  address: SITE.addresses.map((a) => ({
    "@type": "PostalAddress",
    streetAddress: a.lines[0],
    addressLocality: a.city,
    addressCountry: a.city === "Austin" ? "US" : "NG",
  })),
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      email: SITE.email,
      contactType: "customer support",
      availableLanguage: ["en"],
    },
  ],
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  alternateName: "Velo",
  url: SITE_URL,
  description: SITE.description,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${rubik.variable} antialiased bg-white text-foreground font-body dark:bg-navy-950`}
      >
        {/* class-based theming: follows OS preference by default, toggle overrides + persists */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <JsonLd data={[organizationLd, websiteLd]} />
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

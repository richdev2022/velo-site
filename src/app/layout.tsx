import type { Metadata, Viewport } from "next";
import { Poppins, Rubik } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Navbar } from "@/components/velo/Navbar";
import { Footer } from "@/components/velo/Footer";
import { MouseGlow } from "@/components/velo/MouseGlow";

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

export const metadata: Metadata = {
  title: {
    default: "Velo — Banking Built for a Borderless Future",
    template: "%s | Velo",
  },
  description:
    "Modern digital banking for Africans worldwide. Send money, receive like a local in 6 currencies, hold multi-currency wallets, trade gift cards and grow your wealth — with transparent fees and borderless banking.",
  keywords: [
    "Velo Finance",
    "digital banking",
    "cross-border payments",
    "virtual accounts",
    "USD virtual account",
    "EUR IBAN",
    "multi-currency wallet",
    "international transfers",
    "gift cards",
    "fintech Africa",
    "diaspora banking",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x64", type: "image/x-icon" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Velo — Banking Built for a Borderless Future",
    description:
      "Send money, receive like a local in 6 currencies, hold multi-currency wallets, trade gift cards and grow your wealth — all in one app.",
    siteName: "Velo Finance",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Velo — Banking Built for a Borderless Future",
    description:
      "Global virtual accounts, multi-currency wallets, international payouts and gift cards — all in one app.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0C2947",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${rubik.variable} antialiased bg-background text-foreground font-body`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <MouseGlow />
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

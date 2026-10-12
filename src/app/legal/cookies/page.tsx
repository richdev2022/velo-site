import type { Metadata } from "next";
import { LegalShell } from "@/components/velo/LegalShell";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How Velo uses cookies and similar technologies to keep our platform secure and improve your experience.",
};

export default function CookiePolicyPage() {
  return (
    <LegalShell
      title="Cookie Policy"
      updated="March 1, 2026"
      intro="This Cookie Policy explains how Velo uses cookies and similar technologies when you visit our website or use our app, and the choices you have."
      sections={[
        {
          title: "1. What Are Cookies?",
          paragraphs: [
            "Cookies are small text files stored on your device when you visit a website or use an app. They allow the platform to remember your actions and preferences over time, keep you signed in securely, and understand how the product is used so it can be improved. We also use similar technologies such as local storage and device identifiers, covered by this policy.",
          ],
        },
        {
          title: "2. Types of Cookies We Use",
          subsections: [
            {
              title: "Strictly Necessary Cookies",
              paragraphs: [
                "These are essential for the Services to function — authentication sessions, security tokens, fraud prevention signals and load balancing. They cannot be disabled because the platform cannot work without them.",
              ],
            },
            {
              title: "Preference Cookies",
              paragraphs: [
                "These remember your choices, such as language, theme and display settings, to give you a consistent experience across visits.",
              ],
            },
            {
              title: "Analytics Cookies",
              paragraphs: [
                "These help us understand which pages and features are used, how the app performs, and where users encounter problems. Data is aggregated and does not identify you personally.",
              ],
            },
            {
              title: "Security & Anti-Fraud Technologies",
              paragraphs: [
                "Device fingerprinting and session signals used to detect account takeover, bots and fraudulent behaviour. These are treated as strictly necessary for protecting your money.",
              ],
            },
          ],
        },
        {
          title: "3. Third-Party Cookies",
          paragraphs: [
            "Some partners set cookies through our platform to deliver their services — for example, payment processors verifying transactions securely, and analytics providers measuring aggregate usage. These third parties are bound by their own privacy obligations, and we do not permit advertising networks to track you on our platform.",
          ],
        },
        {
          title: "4. How to Control Cookies",
          bullets: [
            "Browser settings — you can block or delete cookies through your browser controls",
            "In-app preferences — manage optional tracking choices where offered",
            "Opt-out of analytics — contact us to disable analytics collection on your account",
            "Note that disabling strictly necessary cookies will prevent the app from functioning",
          ],
        },
        {
          title: "5. Updates & Contact",
          paragraphs: [
            "We may update this Cookie Policy as technologies or regulations change; the latest version is always available here. Questions or requests? Email info@velofinance.co.",
          ],
        },
      ]}
    />
  );
}

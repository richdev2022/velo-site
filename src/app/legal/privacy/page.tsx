import type { Metadata } from "next";
import { LegalShell } from "@/components/velo/LegalShell";

export const metadata: Metadata = {
  alternates: { canonical: "/legal/privacy" },
  title: "Privacy Policy",
  description:
    "How Velo collects, uses, stores and protects your personal information when you use our banking services, mobile application and website.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      updated="March 1, 2026"
      intro="At Velo, we are committed to protecting your privacy and handling your personal information with care and respect. This policy explains how we collect, use, store and protect your information when you use our services."
      sections={[
        {
          title: "1. Introduction",
          paragraphs: [
            'At Velo ("we," "our," or "us"), we are committed to protecting your privacy and handling your personal information with care and respect. This Privacy Policy explains how we collect, use, store, and protect your information when you use our banking services, mobile application, and website.',
            "By using our services, you agree to the collection and use of information in accordance with this policy. We encourage you to read this Privacy Policy carefully and contact us if you have any questions.",
          ],
        },
        {
          title: "2. Information We Collect",
          subsections: [
            {
              title: "Personal Information",
              paragraphs: ["When you create an account or use our services, we collect:"],
              bullets: [
                "Full name, date of birth, and contact information (email, phone number, address)",
                "Government-issued identification documents (passport, driver's license, national ID)",
                "Proof of address and other verification documents",
                "Employment information and income verification",
                "Bank account details and financial information",
                "Biometric data (fingerprint, facial recognition) for security purposes",
              ],
            },
            {
              title: "Transaction Information",
              bullets: [
                "Payment and transfer details, including amount, currency, and recipient information",
                "Account balance and transaction history",
                "Payment method information and preferences",
                "Geographic location data for fraud prevention",
              ],
            },
            {
              title: "Technical Information",
              bullets: [
                "Device information (model, operating system, unique identifiers)",
                "IP address and approximate location",
                "App usage data and diagnostics",
                "Cookies and similar tracking technologies",
              ],
            },
          ],
        },
        {
          title: "3. How We Use Your Information",
          bullets: [
            "Providing and maintaining our banking services",
            "Verifying your identity and preventing fraud",
            "Processing transactions and managing your account",
            "Complying with legal and regulatory obligations (AML, KYC, sanctions screening)",
            "Improving our products and developing new features",
            "Sending you service notifications, security alerts and (with your consent) marketing communications",
            "Providing customer support and resolving disputes",
          ],
          paragraphs: [
            "We do not sell your personal information to third parties, and we do not use your financial data for advertising profiling.",
          ],
        },
        {
          title: "4. How We Share Information",
          paragraphs: [
            "We share your information only as necessary to operate our services and comply with the law:",
          ],
          bullets: [
            "Licensed banking and payment partners who hold funds and process transactions",
            "Identity verification and compliance providers (KYC/AML screening)",
            "Card networks and processors for card issuance and payment authorisation",
            "Professional advisers, auditors and regulators where required by law",
            "Law enforcement or government authorities under valid legal process",
          ],
        },
        {
          title: "5. Data Security",
          paragraphs: [
            "We protect your information with bank-grade measures: TLS encryption in transit, AES encryption at rest, device binding, biometric access controls, and 24/7 fraud monitoring. Access to personal data is restricted to personnel who need it to serve you, under confidentiality obligations. Despite our safeguards, no system is perfectly secure — we encourage you to use strong authentication and alert us immediately at any sign of suspicious activity.",
          ],
        },
        {
          title: "6. Data Retention",
          paragraphs: [
            "We retain your personal information for as long as your account is active and for the period required by applicable financial regulations afterwards (typically five to ten years for transaction records). Biometric verification data is retained only for the period required for compliance and then deleted. When retention is no longer required, data is securely deleted or anonymised.",
          ],
        },
        {
          title: "7. Your Rights",
          bullets: [
            "Access — request a copy of the personal data we hold about you",
            "Rectification — correct inaccurate or incomplete information",
            "Erasure — request deletion, subject to legal retention requirements",
            "Portability — receive your data in a structured, commonly used format",
            "Objection and restriction — object to certain processing activities",
            "Withdraw consent — for optional processing such as marketing, at any time",
          ],
          paragraphs: [
            "To exercise any of these rights, contact info@velofinance.co or use the Delete Account page for account deletion requests. We respond to verified requests within 30 days.",
          ],
        },
        {
          title: "8. International Transfers",
          paragraphs: [
            "As a borderless platform, your information may be processed in countries other than your own. When we transfer data internationally, we apply appropriate safeguards including standard contractual clauses and partner due diligence to ensure your information receives equivalent protection.",
          ],
        },
        {
          title: "9. Children's Privacy",
          paragraphs: [
            "Our services are not directed to persons under 18, and we do not knowingly collect personal information from minors. If we learn that we have collected data from someone under 18, we will delete it promptly.",
          ],
        },
        {
          title: "10. Changes to This Policy",
          paragraphs: [
            "We may update this Privacy Policy as our services evolve or regulations change. Material changes will be communicated in-app and by email before they take effect. Continued use of our services after an update constitutes acceptance of the revised policy.",
          ],
        },
      ]}
    />
  );
}

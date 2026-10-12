import type { Metadata } from "next";
import { LegalShell } from "@/components/velo/LegalShell";

export const metadata: Metadata = {
  alternates: { canonical: "/legal/terms" },
  title: "Terms & Conditions",
  description:
    "The terms governing your use of Velo's banking services, mobile application and website.",
};

export default function TermsConditionsPage() {
  return (
    <LegalShell
      title="Terms & Conditions"
      updated="March 1, 2026"
      intro="These Terms & Conditions govern your access to and use of Velo's services. Please read them carefully — they form a binding agreement between you and Velo Finance LTD."
      sections={[
        {
          title: "1. Agreement to Terms",
          paragraphs: [
            'By opening a Velo account or using our website, mobile application or services (collectively, the "Services"), you agree to be bound by these Terms & Conditions and our Privacy Policy. If you do not agree, do not use the Services. Velo Finance LTD (RC 8304903), operating as "Velo," provides the Services through licensed banking and payment partners.',
          ],
        },
        {
          title: "2. Eligibility & Account Opening",
          bullets: [
            "You must be at least 18 years old and legally capable of entering binding contracts",
            "You must provide accurate, current and complete information during registration and KYC",
            "You may maintain only one personal account unless Velo approves additional structures (e.g., joint accounts)",
            "You are responsible for keeping your credentials, devices and OTPs secure",
          ],
          paragraphs: [
            "Providing false information, or using the Services on behalf of another person without authorisation, may result in immediate account suspension and reporting to authorities where required.",
          ],
        },
        {
          title: "3. Use of the Services",
          paragraphs: [
            "You agree to use the Services only for lawful purposes. You must not:",
          ],
          bullets: [
            "Use the Services for fraud, money laundering, terrorist financing, sanctions evasion or any illegal activity",
            "Misrepresent your identity or the purpose of transactions",
            "Interfere with, reverse-engineer or disrupt the platform's security or operation",
            "Circumvent limits, controls or verification requirements",
          ],
        },
        {
          title: "4. Transactions, Fees & Exchange Rates",
          bullets: [
            "Fees, exchange rates and the delivered amount are displayed before you confirm any transaction",
            "Once a transfer is confirmed and delivered, it generally cannot be reversed; recalls depend on receiving institutions",
            "Instant payment rails may settle in seconds; timelines for other corridors are estimates, not guarantees",
            "Currency conversions apply the rate shown at confirmation, including our disclosed margin",
          ],
        },
        {
          title: "5. Virtual Accounts & Multi-Currency Wallets",
          paragraphs: [
            "Virtual account details (including USD account/routing numbers, EUR IBAN, GBP account numbers, MXN CLABE, BRL BR Codes and COP accounts) are issued in your name through licensed partners for receiving payments. You may not use them for prohibited purposes such as third-party money transmission, gambling proceeds, or other restricted activities. Incoming payments that fail compliance screening may be held, returned or reported as required by law.",
          ],
        },
        {
          title: "6. Cards",
          paragraphs: [
            "Physical and virtual cards are issued subject to card network rules and our partner bank's terms. You must keep your PIN secure, report loss or theft immediately via the app, and review alerts for unauthorised charges. We may freeze a card where fraud is suspected to protect your funds.",
          ],
        },
        {
          title: "7. Savings, Investments & Gifts Cards",
          bullets: [
            "Savings and investment products carry terms displayed before you commit; early exit may attract the disclosed fees",
            "Investment returns are variable unless explicitly stated as fixed; past performance does not guarantee future results",
            "Gift card trades are final after verification; rates are locked at the time of quote acceptance",
          ],
        },
        {
          title: "8. Suspension & Termination",
          paragraphs: [
            "You may close your account at any time via the app or the Delete Account page. We may suspend or terminate access where we reasonably believe there is fraud, security risk, breach of these Terms or legal/regulatory obligation. Where permitted, we will notify you of the reason. Balances will be returned subject to compliance screening and applicable law.",
          ],
        },
        {
          title: "9. Liability",
          paragraphs: [
            "The Services are provided with reasonable skill and care, but we do not guarantee uninterrupted availability. To the maximum extent permitted by law, Velo is not liable for indirect or consequential losses, including loss of profit or opportunity. Nothing in these Terms limits liability that cannot be limited by law. Our aggregate liability for direct losses is limited to the total fees you paid to us in the six months preceding the claim, except where a higher limit applies by law.",
          ],
        },
        {
          title: "10. Changes, Governing Law & Contact",
          paragraphs: [
            "We may modify these Terms; material changes will be communicated in advance, and continued use constitutes acceptance. These Terms are governed by the laws applicable to Velo Finance LTD's operations, without prejudice to mandatory consumer protections in your jurisdiction. Questions? Contact info@velofinance.co.",
          ],
        },
      ]}
    />
  );
}

import type { Metadata } from "next";
import { Phone, Mail, ShieldAlert, TriangleAlert, Check } from "lucide-react";
import { PageHero, Section } from "@/components/velo/page-parts";
import { Reveal } from "@/components/velo/primitives";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  alternates: { canonical: "/delete-account" },
  title: "Delete Account",
  description:
    "How to delete your Velo account and what happens to your data — timelines, retained records and alternatives to deletion.",
};

const STEPS = [
  {
    title: "Withdraw or transfer your balance",
    text: "Move any remaining funds out of your wallet to your bank account. Deletion requests can only complete once your balance is zero.",
  },
  {
    title: "Cancel active subscriptions & cards",
    text: "Cancel any scheduled payments, pause recurring transfers and freeze or cancel your physical and virtual cards.",
  },
  {
    title: "Submit the deletion request",
    text: "In the app: Settings → Account → Delete Account. Or email us with the subject 'Account Deletion Request' from your registered email.",
  },
  {
    title: "Verify your identity",
    text: "We verify the request is genuinely yours — via in-app confirmation or an email/ID check. This protects you from unauthorised deletion.",
  },
  {
    title: "Confirmation & cooling-off period",
    text: "We confirm your request and begin processing. You have 14 days to change your mind by contacting support before deletion is finalised.",
  },
];

export default function DeleteAccountPage() {
  return (
    <>
      <PageHero
        eyebrow="Account Management"
        title="Delete your"
        highlight="Velo account."
        description="We're sorry to see you go. Here's exactly how deletion works, what gets erased and what regulation requires us to keep."
      />

      <Section className="bg-white dark:bg-navy-950">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl dark:text-white">
                How to delete your account
              </h2>
              <div className="mt-8 flex flex-col gap-5">
                {STEPS.map((s, i) => (
                  <div key={s.title} className="flex gap-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-velo-500 to-velo-600 font-[family-name:var(--font-poppins)] text-[14px] font-extrabold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-[family-name:var(--font-poppins)] text-[16.5px] font-bold text-navy-900 dark:text-white">
                        {s.title}
                      </h3>
                      <p className="mt-1.5 text-[14px] leading-relaxed text-slate-500">{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-10">
              <div className="rounded-3xl border border-gold-400/30 bg-gold-400/8 p-7">
                <p className="flex items-center gap-2.5 font-[family-name:var(--font-poppins)] text-[16px] font-bold text-navy-900 dark:text-white">
                  <TriangleAlert className="h-5 w-5 text-gold-500" />
                  Before you go — consider these alternatives
                </p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {[
                    "Experiencing a problem? Our 24/7 support can usually resolve issues same-day.",
                    "Taking a break? You can simply stop using the account — there are no maintenance fees.",
                    "Security concerns? We can freeze the account and issue new credentials instead of deletion.",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3 text-[13.5px] leading-relaxed text-slate-600">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint-500" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col gap-5">
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-slate-100 bg-slate-50/60 p-7">
                <h3 className="flex items-center gap-2.5 font-[family-name:var(--font-poppins)] text-[17px] font-bold text-navy-900 dark:text-white">
                  <ShieldAlert className="h-5 w-5 text-velo-600 dark:text-velo-400" /> What gets deleted
                </h3>
                <ul className="mt-4 flex flex-col gap-2.5 text-[13.5px] leading-relaxed text-slate-500">
                  <li>• Your profile, preferences and app settings</li>
                  <li>• Saved beneficiaries and payment methods</li>
                  <li>• Marketing data and analytics identifiers</li>
                  <li>• Device bindings and session tokens</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="rounded-3xl border border-slate-100 bg-slate-50/60 p-7">
                <h3 className="flex items-center gap-2.5 font-[family-name:var(--font-poppins)] text-[17px] font-bold text-navy-900 dark:text-white">
                  <ShieldAlert className="h-5 w-5 text-gold-500" /> What we must retain
                </h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-slate-500">
                  Financial regulations require us to keep transaction records, KYC documents and
                  compliance data (typically 5–10 years) even after deletion. This data is stored
                  securely, is not used for marketing, and is deleted when the retention period
                  ends. It can be released to you or authorities only under legal process.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="rounded-3xl border border-velo-100 bg-velo-50/60 p-7 dark:bg-velo-500/15 dark:border-velo-400/30">
                <h3 className="font-[family-name:var(--font-poppins)] text-[17px] font-bold text-navy-900 dark:text-white">
                  Need help right now?
                </h3>
                <div className="mt-4 flex flex-col gap-3">
                  <a
                    href={`mailto:${SITE.email}?subject=Account%20Deletion%20Request`}
                    className="inline-flex items-center gap-3 rounded-2xl border border-velo-100 bg-white px-5 py-4 text-[14px] font-semibold text-navy-900 transition-all hover:border-velo-300 dark:text-white dark:border-velo-400/30 dark:bg-white/5"
                  >
                    <Mail className="h-5 w-5 text-velo-600 dark:text-velo-400" /> {SITE.email}
                  </a>
                  <a
                    href={`tel:${SITE.phone}`}
                    className="inline-flex items-center gap-3 rounded-2xl border border-velo-100 bg-white px-5 py-4 text-[14px] font-semibold text-navy-900 transition-all hover:border-velo-300 dark:text-white dark:border-velo-400/30 dark:bg-white/5"
                  >
                    <Phone className="h-5 w-5 text-velo-600 dark:text-velo-400" /> {SITE.phoneDisplay}
                  </a>
                </div>
                <p className="mt-4 text-[12.5px] leading-relaxed text-slate-500">
                  Requests are processed within 30 days, with a 14-day cooling-off window during
                  which you can cancel.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}

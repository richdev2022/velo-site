import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Scale,
  Briefcase,
  GraduationCap,
  HeartHandshake,
  Laptop,
  Mail,
  Rocket,
  Users,
} from "lucide-react";
import { PageHero, Section, CtaBand } from "@/components/velo/page-parts";
import { Reveal, Eyebrow, Stagger, StaggerItem } from "@/components/velo/primitives";

export const metadata: Metadata = {
  alternates: { canonical: "/careers" },
  title: "Careers",
  description:
    "Help us build the future of African banking. Join a team of passionate innovators creating financial solutions that matter.",
};

const PERKS = [
  {
    icon: Rocket,
    title: "Build What Matters",
    text: "Your work moves real money for real people — freelancers paid on time, families supported, businesses grown. Impact isn't abstract here.",
  },
  {
    icon: Laptop,
    title: "Remote-First Flexibility",
    text: "Work from anywhere in our hubs or fully remote. We optimise for outcomes, not hours at a desk.",
  },
  {
    icon: GraduationCap,
    title: "Growth Budget",
    text: "Annual learning budget, conference support and internal mobility — we grow people, not just headcount.",
  },
  {
    icon: Scale,
    title: "Real Work-Life Balance",
    text: "Sustainable pace, generous leave and no glorifying burnout. Great products come from healthy teams.",
  },
  {
    icon: Award,
    title: "Meaningful Equity",
    text: "Every full-time teammate shares in what we're building together. When Velo wins, you win.",
  },
  {
    icon: HeartHandshake,
    title: "Comprehensive Benefits",
    text: "Health coverage, pension and wellness support for you and your dependents across all our locations.",
  },
];

const OPENINGS: { title: string; team: string; location: string; type: string }[] = [];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers — Join the Movement"
        title="Help us build the future of"
        highlight="African banking."
        description="Join a team of passionate innovators creating financial solutions that matter — used by individuals, businesses and diaspora communities every single day."
      >
        <div className="flex flex-wrap items-center gap-8 text-white/70">
          <span className="flex items-center gap-2.5 text-[14px]">
            <Users className="h-5 w-5 text-velo-300" /> 50+ Team Members
          </span>
          <span className="flex items-center gap-2.5 text-[14px]">
            <GlobeIcon /> Multiple Countries
          </span>
          <span className="flex items-center gap-2.5 text-[14px]">
            <Briefcase className="h-5 w-5 text-velo-300" /> Engineering · Product · Ops · Support
          </span>
        </div>
      </PageHero>

      {/* why work here */}
      <Section className="bg-white dark:bg-navy-950">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Why Work at Velo</Eyebrow>
          <h2 className="mt-5 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl dark:text-white">
            We&apos;re building something{" "}
            <span className="text-gradient-blue">extraordinary</span>
          </h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-slate-500">
            And we want you to be part of it — here&apos;s what life at Velo looks like.
          </p>
        </Reveal>
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PERKS.map((p) => (
            <StaggerItem key={p.title}>
              <div className="h-full rounded-3xl border border-slate-100 bg-slate-50/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-velo-200 hover:bg-white hover:shadow-[0_24px_50px_-20px_rgba(33,150,243,0.25)] dark:hover:border-velo-400/40 dark:hover:bg-white/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-velo-500 to-velo-600 text-white shadow-glow-blue">
                  <p.icon className="h-5.5 w-5.5" />
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-poppins)] text-[17px] font-bold text-navy-900 dark:text-white">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-slate-500">{p.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* openings */}
      <Section className="bg-slate-50">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Current Openings</Eyebrow>
          <h2 className="mt-5 font-[family-name:var(--font-poppins)] text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl dark:text-white">
            Open <span className="text-gradient-blue">positions</span>
          </h2>
        </Reveal>

        <Reveal className="mt-10">
          <div className="mx-auto max-w-2xl rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center dark:bg-white/5">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-velo-50 text-velo-600 dark:text-velo-400 dark:bg-velo-500/15">
              <Briefcase className="h-7 w-7" />
            </div>
            <h3 className="mt-5 font-[family-name:var(--font-poppins)] text-xl font-extrabold text-navy-900 dark:text-white">
              No openings available at the moment
            </h3>
            <p className="mx-auto mt-3 max-w-md text-[14px] leading-relaxed text-slate-500">
              We currently don&apos;t have any open positions, but we&apos;re always growing and looking for
              exceptional talent. Stay tuned for future opportunities!
            </p>
          </div>
        </Reveal>

        {/* talent pool */}
        <Reveal className="mt-10">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-[32px] bg-gradient-to-br from-navy-900 via-navy-950 to-velo-800 p-8 text-white sm:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-extrabold tracking-tight sm:text-3xl">
                  Want to be notified when new positions open up?
                </h3>
                <p className="mt-3 max-w-lg text-[14.5px] leading-relaxed text-white/60">
                  Join our talent pool — tell us who you are and what you do, and we&apos;ll reach out the
                  moment a role fits. No spam, just opportunities.
                </p>
              </div>
              <Link
                href={`mailto:careers@velofinance.co?subject=Joining%20the%20Velo%20Talent%20Pool`}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-velo-500 px-7 py-4 text-[14.5px] font-semibold text-white shadow-glow-blue transition-all hover:-translate-y-0.5 hover:bg-velo-400"
              >
                <Mail className="h-4.5 w-4.5" />
                Join Our Talent Pool
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </Section>

      <CtaBand />
    </>
  );
}

function GlobeIcon() {
  return (
    <span className="relative flex h-5 w-5 items-center justify-center">
      <span className="absolute h-5 w-5 rounded-full border-2 border-velo-300/60" />
      <span className="absolute h-5 w-0.5 rounded-full bg-velo-300/60" />
      <span className="absolute h-2.5 w-5 rounded-t-full border-2 border-b-0 border-velo-300/60" />
    </span>
  );
}

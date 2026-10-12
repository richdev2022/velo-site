"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Braces, Copy, Check, TerminalSquare, Webhook, ArrowRight } from "lucide-react";
import { Eyebrow, Reveal } from "./primitives";

const TABS = [
  {
    id: "accounts",
    label: "Create virtual account",
    lang: "bash",
    code: `curl -X POST https://api.velofinance.io/v1/virtual-accounts \\
  -H "Authorization: Bearer sk_live_…" \\
  -H "Content-Type: application/json" \\
  -d '{
    "currency": "USD",
    "customer_id": "cus_9f2ke02",
    "type": "individual"
  }'`,
    response: `{
  "status": "success",
  "data": {
    "account_id": "va_8xk21m",
    "currency": "USD",
    "routing_number": "026073150",
    "account_number": "8310482…",
    "status": "active"
  }
}`,
  },
  {
    id: "payout",
    label: "Send global payout",
    lang: "bash",
    code: `curl -X POST https://api.velofinance.io/v1/payouts \\
  -H "Authorization: Bearer sk_live_…" \\
  -H "Content-Type: application/json" \\
  -d '{
    "source_currency": "USD",
    "destination": {
      "country": "NG",
      "rail": "nip",
      "account_number": "0123456789",
      "bank_code": "058"
    },
    "amount": 2500
  }'`,
    response: `{
  "status": "success",
  "data": {
    "payout_id": "po_31ke9d",
    "state": "processing",
    "eta_seconds": 118,
    "fee": 3.5,
    "rate": 1483.12
  }
}`,
  },
  {
    id: "webhook",
    label: "Listen for webhooks",
    lang: "ts",
    code: `import { verifySignature } from "@velofinance/node";

app.post("/webhooks/velo", (req, res) => {
  const event = verifySignature(
    req.body,
    req.headers["x-velo-signature"],
    process.env.VELO_WEBHOOK_SECRET
  );

  switch (event.type) {
    case "virtual_account.credit":
      creditWallet(event.data);
      break;
    case "payout.completed":
      notifyCustomer(event.data);
      break;
  }
  res.sendStatus(200);
});`,
    response: null,
  },
];

export function Developers() {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const tab = TABS[active];

  function copyCode() {
    navigator.clipboard?.writeText(tab.code).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  return (
    <section id="developers" className="relative overflow-hidden bg-navy-950 py-20 sm:py-28">
      <div className="absolute inset-0 bg-grid-dark" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-[-15%] h-[380px] w-[720px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(closest-side, #2196F3, transparent)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div>
            <Reveal>
              <Eyebrow dark>For developers</Eyebrow>
              <h2 className="font-display mt-5 text-[32px] font-bold leading-[1.12] text-white sm:text-[44px]">
                Build global payments in{" "}
                <span className="text-gradient-blue">an afternoon</span>
              </h2>
              <p className="mt-5 max-w-lg text-[15.5px] leading-relaxed text-white/60 sm:text-[16.5px]">
                One clean REST API for virtual accounts, payouts, wallets, conversions and gift
                cards. Idempotent endpoints, signed webhooks and sandbox keys that mirror production
                exactly.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-8">
              <div className="flex flex-col gap-3">
                {[
                  { icon: TerminalSquare, text: "REST API + Node, Python, PHP & Go SDKs" },
                  { icon: Webhook, text: "Signed webhooks for every money movement" },
                  { icon: Braces, text: "Full sandbox environment, free forever" },
                ].map((f) => (
                  <div key={f.text} className="flex items-center gap-3.5 text-[14px] text-white/75">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/8 text-velo-300">
                      <f.icon className="h-5 w-5" />
                    </span>
                    {f.text}
                  </div>
                ))}
              </div>
              <a
                href="#cta"
                className="group mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-[14px] font-semibold text-white transition-all hover:border-velo-400 hover:bg-velo-500/15"
              >
                Get your API keys
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-[26px] border border-white/12 bg-[#0A1526] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.8)]">
              {/* editor chrome */}
              <div className="flex items-center gap-2 border-b border-white/8 px-5 py-3.5">
                <span className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                  <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                  <span className="h-3 w-3 rounded-full bg-[#28C840]" />
                </span>
                <div className="ml-3 flex gap-1 overflow-x-auto no-scrollbar">
                  {TABS.map((t, i) => (
                    <button
                      key={t.id}
                      onClick={() => setActive(i)}
                      className={`whitespace-nowrap rounded-lg px-3.5 py-1.5 text-[12px] font-semibold transition-colors ${
                        active === i
                          ? "bg-velo-500/20 text-velo-200"
                          : "text-white/40 hover:bg-white/8 hover:text-white/70 dark:hover:bg-white/10"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
                <button
                  onClick={copyCode}
                  className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white/40 transition-colors hover:bg-white/10 hover:text-white dark:hover:bg-white/10"
                  aria-label="Copy code"
                >
                  {copied ? <Check className="h-4 w-4 text-mint-400" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>

              {/* code */}
              <div className="grid lg:grid-cols-2">
                <pre className="overflow-x-auto p-5 text-[12px] leading-relaxed">
                  <code className="font-mono">
                    {tab.code.split("\n").map((line, i) => (
                      <div key={i} className="flex">
                        <span className="w-8 shrink-0 select-none text-right text-white/20">
                          {i + 1}
                        </span>
                        <span
                          className={
                            line.trimStart().startsWith("//") || line.trimStart().startsWith("#")
                              ? "pl-3 text-slate-500"
                              : line.includes("curl") || line.includes("import")
                              ? "pl-3 text-velo-300"
                              : line.includes('"') && !line.includes("://")
                              ? "pl-3 text-[#9ECBFF]"
                              : "pl-3 text-[#E6EDF3]"
                          }
                        >
                          {line || " "}
                        </span>
                      </div>
                    ))}
                  </code>
                </pre>

                {tab.response ? (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    className="border-t border-white/8 lg:border-l lg:border-t-0"
                  >
                    <div className="flex items-center gap-2 px-5 pt-4">
                      <span className="h-2 w-2 rounded-full bg-mint-400" />
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
                        200 OK · response
                      </p>
                    </div>
                    <pre className="overflow-x-auto p-5 pt-2 text-[12px] leading-relaxed">
                      <code className="font-mono text-mint-400/90">{tab.response}</code>
                    </pre>
                  </motion.div>
                ) : (
                  <div className="hidden items-center justify-center border-t border-white/8 p-8 text-center lg:flex lg:border-l lg:border-t-0">
                    <div>
                      <Webhook className="mx-auto h-10 w-10 text-velo-400/60" />
                      <p className="mt-3 text-[12.5px] text-white/45">
                        Signed webhooks fire in real time for every
                        <br />
                        credit, debit, conversion &amp; payout event.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

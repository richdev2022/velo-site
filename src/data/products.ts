export type ProductCategory = "individuals" | "businesses" | "diaspora" | "referrals" | "global";

export interface ProductFeature {
  title: string;
  description: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  tagline: string;
  description: string;
  overview: string;
  icon: string;
  image?: string;
  imageAlt?: string;
  highlights: string[];
  features: ProductFeature[];
  howItWorks?: Step[];
  faqs?: Faq[];
  badge?: string;
}

export const CATEGORY_META: Record<
  ProductCategory,
  { label: string; short: string; blurb: string }
> = {
  individuals: {
    label: "For Individuals",
    short: "Individuals",
    blurb:
      "Everyday money tools designed for the modern lifestyle — accounts, payments, cards, savings and smart budgeting in one app.",
  },
  businesses: {
    label: "For Businesses",
    short: "Businesses",
    blurb:
      "Complete banking for SMEs — multi-currency accounts, analytics and payment tools.",
  },
  diaspora: {
    label: "For the Diaspora",
    short: "Diaspora",
    blurb:
      "Stay financially connected to home — send and support family from anywhere in the world.",
  },
  referrals: {
    label: "Referrals & Rewards",
    short: "Referrals",
    blurb:
      "Earn together — invite friends, unlock bonuses and grow a stronger financial community.",
  },
  global: {
    label: "Global Finance",
    short: "Global Finance",
    blurb:
      "Receive like a local in 6 currencies, hold multi-currency wallets, convert instantly, pay out worldwide and trade gift cards.",
  },
};

export const PRODUCTS: Product[] = [
  /* ------------------------------ INDIVIDUALS ----------------------------- */
  {
    slug: "digital-bank-account",
    name: "Digital Bank Account",
    category: "individuals",
    icon: "Smartphone",
    tagline: "Your everyday banking account, designed for the modern lifestyle",
    description:
      "Open a full-featured digital bank account in minutes and manage your money from anywhere — no paperwork, no queues, no maintenance fees.",
    overview:
      "The Velo digital bank account is the foundation of everything we do. Sign up from your phone in under five minutes, complete a one-time KYC verification, and get an account number instantly. Your money is protected with bank-grade security, real-time fraud monitoring and instant transaction alerts, while the app gives you a complete, always-up-to-date picture of your finances. Whether you are receiving a salary, getting paid by international clients, or saving toward a goal, everything happens in one clean, intuitive place.",
    highlights: [
      "Instant account opening in under 5 minutes",
      "Zero monthly maintenance fees",
      "Real-time transaction notifications",
      "24/7 mobile banking",
    ],
    features: [
      {
        title: "Open in minutes, not days",
        description:
          "Download the app or open the web app, verify your identity once, and receive your account number immediately. No branch visits, no forms, no waiting on anyone.",
      },
      {
        title: "No maintenance fees, ever",
        description:
          "We do not charge monthly maintenance, card issuance or account statement fees. Banking that respects your money starts with not nibbling at it.",
      },
      {
        title: "Real-time alerts on every kobo",
        description:
          "Push notifications the moment money enters or leaves your account, so you always know exactly where you stand.",
      },
      {
        title: "A dashboard that actually helps",
        description:
          "Balance, spending insights, upcoming bills and savings goals are surfaced the moment you open the app — no digging through menus.",
      },
      {
        title: "Bank-grade security",
        description:
          "Device binding, transaction PIN, biometric login and 24/7 fraud monitoring protect every naira, around the clock.",
      },
      {
        title: "Free Velo-to-Velo transfers",
        description:
          "Send money to anyone on Velo instantly and free of charge, with receipts generated automatically for every transfer.",
      },
    ],
    howItWorks: [
      { title: "Download & sign up", description: "Create your account with your phone number and email in under two minutes." },
      { title: "Verify your identity", description: "Complete a quick BVN/NIN-backed KYC check — done once, fully encrypted." },
      { title: "Start banking", description: "Fund your account, send and receive money, and unlock cards, savings and more." },
    ],
    faqs: [
      { q: "Is my money safe with Velo?", a: "Yes. Funds are held with licensed partner banks, every session is encrypted, and our fraud systems monitor transactions 24/7." },
      { q: "What do I need to open an account?", a: "Your phone number, email, a valid ID (BVN/NIN) and a selfie for identity verification. That's all." },
      { q: "Are there hidden charges?", a: "None. Every fee is shown before you confirm a transaction, and basic account services are free." },
    ],
  },
  {
    slug: "cross-border-payments",
    name: "Cross-Border Payments",
    category: "individuals",
    icon: "Globe",
    tagline: "Send money across borders at competitive rates",
    description:
      "Transfer money to 180+ countries with real-time tracking, fair exchange rates and multiple payout options — without the hidden markups.",
    overview:
      "Sending money internationally should not feel like paying a toll. Velo gives you transparent mid-market-based rates, shows the exact fee before you confirm, and delivers to bank accounts, mobile wallets and cash pickup locations across 180+ countries. Every transfer carries a live tracking link, so you and your recipient always know precisely where the money is — from the moment you tap send to the moment it lands.",
    highlights: [
      "Real-time transfers to 180+ countries",
      "Competitive rates with no hidden markups",
      "Track your transfer in real time",
      "Bank, mobile money & cash pickup payout",
      "24/7 customer support",
    ],
    features: [
      {
        title: "180+ countries, one app",
        description:
          "From the US and UK to Ghana, Kenya and China — pick a destination, enter an amount, and Velo handles the rails, compliance and delivery.",
      },
      {
        title: "Rates you can verify",
        description:
          "We show you the exchange rate and the exact fee up front. What you see on the confirmation screen is exactly what happens.",
      },
      {
        title: "Live transfer tracking",
        description:
          "Status updates at every hop — sent, converting, delivered — with notifications for you and your recipient.",
      },
      {
        title: "Payout options that fit the receiver",
        description:
          "Direct bank deposit, mobile money wallets, or cash pickup at agent locations — your recipient chooses what works for them.",
      },
      {
        title: "Compliance handled for you",
        description:
          "KYC, AML screening and reporting are built in and automated, so transfers move fast without cutting corners.",
      },
    ],
    howItWorks: [
      { title: "Choose destination & amount", description: "See the live rate and total fee before you commit — no surprises." },
      { title: "Fund the transfer", description: "Pay from your Velo wallet, card or bank transfer. Recipient details are saved for next time." },
      { title: "Track until delivery", description: "Follow the money in real time and get notified the moment it arrives." },
    ],
    faqs: [
      { q: "How fast are cross-border transfers?", a: "Most transfers to major corridors settle within minutes to a few hours. The estimated delivery time is always shown before you send." },
      { q: "What payout methods are supported?", a: "Bank deposits, mobile money and cash pickup, depending on the destination country." },
      { q: "How are fees calculated?", a: "A small transparent fee plus our fair exchange-rate margin, both shown up front before you confirm." },
    ],
  },
  {
    slug: "local-transfers",
    name: "Local Transfers",
    category: "individuals",
    icon: "Send",
    tagline: "Send money instantly to anyone within Nigeria, zero stress",
    description:
      "Instant transfers to every Nigerian bank, free between Velo users, available 24/7 — with receipts and saved beneficiaries.",
    overview:
      "Local transfers on Velo are built for the way Nigerians actually move money: fast, frequent and at all hours. Transfers to any Nigerian bank settle in seconds, transfers between Velo users are completely free, and the app remembers your beneficiaries so repeat payments take two taps. Every transaction produces a clean, shareable receipt — perfect for rent, school fees, staff payments and everything in between.",
    highlights: [
      "Instant transfers to all Nigerian banks",
      "Free transfers to other Velo users",
      "24/7 availability with no downtime",
      "Transaction history and receipts",
      "Save beneficiaries for quick transfers",
    ],
    features: [
      {
        title: "Seconds, not hours",
        description:
          "Money hits any Nigerian bank account in seconds via instant payment rails — including weekends and public holidays.",
      },
      {
        title: "Free between Velo users",
        description:
          "P2P transfers between Velo accounts carry zero fees, making it the cheapest way to split costs with friends and family.",
      },
      {
        title: "Beneficiaries & favourites",
        description:
          "Save accounts you pay often and send again in two taps, with bank verification running automatically in the background.",
      },
      {
        title: "Receipts for everything",
        description:
          "Every transfer generates a downloadable, shareable receipt — handy for landlords, schools and business records.",
      },
      {
        title: "Scheduled & recurring sends",
        description:
          "Set up rent, allowances and subscriptions to go out automatically on a schedule you control.",
      },
    ],
    faqs: [
      { q: "Do transfers work at night and on weekends?", a: "Yes — Velo transfers run 24/7 on instant payment rails, including public holidays." },
      { q: "What if I send to a wrong account?", a: "Name verification shows the account name before you confirm. If a transfer does go astray, our support team helps you file a recall with the receiving bank immediately." },
    ],
  },
  {
    slug: "crypto-payments",
    name: "Crypto Payments",
    category: "individuals",
    icon: "Bitcoin",
    tagline: "Buy, sell and pay with crypto at competitive rates",
    description:
      "Trade BTC, ETH, USDT and more with instant settlement, an integrated secure wallet and easy crypto-to-fiat conversion.",
    overview:
      "Crypto on Velo is practical, not speculative theatre. Buy and sell the major coins at transparent, affordable rates, hold them in an integrated secure wallet, and convert to naira or any supported currency in seconds whenever you need cash. Whether you are receiving USDT from a client abroad or dollar-cost-averaging into Bitcoin, the flow is simple, the pricing is honest, and your funds sit beside the rest of your money — not on some sketchy exchange.",
    highlights: [
      "Major coins: BTC, ETH, USDT and more",
      "Affordable rates with no hidden fees",
      "Instant crypto transactions",
      "Secure integrated crypto wallet",
      "Easy crypto-to-fiat conversion",
    ],
    features: [
      {
        title: "The coins that matter",
        description:
          "Bitcoin, Ethereum and the leading stablecoins — the assets people actually use for payments and savings, without a maze of obscure tokens.",
      },
      {
        title: "Transparent, affordable rates",
        description:
          "Live quotes with the fee baked in and shown before you confirm. No spread games, no surprise network-fee markups.",
      },
      {
        title: "Instant settlement",
        description:
          "Buys and sells settle instantly into your Velo wallet, and fiat conversions land in your naira balance in seconds.",
      },
      {
        title: "Custody done properly",
        description:
          "Keys are managed with institutional-grade custody partners, cold-storage reserves and continuous monitoring.",
      },
      {
        title: "One balance, two worlds",
        description:
          "Crypto sits beside your fiat wallets, so converting and spending takes one tap — no juggling multiple apps.",
      },
    ],
    faqs: [
      { q: "Which cryptocurrencies are supported?", a: "BTC, ETH, USDT and other major assets. We list the coins with real payment and store-of-value utility." },
      { q: "Can I withdraw crypto to an external wallet?", a: "Yes — send to any external address on a supported network, with the network fee shown before you confirm." },
      { q: "Is crypto trading regulated?", a: "Velo operates crypto services through compliant partners with full KYC/AML controls in line with applicable regulations." },
    ],
  },
  {
    slug: "bills-payment",
    name: "Bills Payment",
    category: "individuals",
    icon: "Receipt",
    tagline: "Pay all your bills in one place, with ease",
    description:
      "Electricity, airtime, data, TV subscriptions and more — pay everything from one screen with instant confirmation and scheduled repeat payments.",
    overview:
      "Stop juggling five apps and a queue at the vendor. Velo brings every recurring Nigerian bill into one place: prepaid and postpaid electricity across all Discos, airtime and data for every network, and TV subscriptions from DStv to Netflix to Showmax. Payments confirm instantly with a receipt, and anything recurring can be scheduled so it just happens — no more NEPA surprises or expired data on the 1st of the month.",
    highlights: [
      "Electricity (PHCN, AEDC, EKEDC & all Discos)",
      "Airtime & data for all networks",
      "TV: DStv, GOtv, Netflix, Showmax & more",
      "Schedule recurring payments",
      "Instant payment confirmations",
    ],
    features: [
      {
        title: "Every Disco, every network",
        description:
          "Prepaid tokens delivered instantly, postpaid balances fetched automatically, and airtime or data for MTN, Airtel, Glo and 9mobile.",
      },
      {
        title: "TV & streaming in one tap",
        description:
          "Renew DStv and GOtv packages, or top up Netflix, Showmax and Spotify balances straight from your wallet.",
      },
      {
        title: "Scheduled payments",
        description:
          "Automate the bills that repeat every month — Velo pays them on the date you choose and notifies you with a receipt.",
      },
      {
        title: "Bills history & reminders",
        description:
          "See everything you have paid in one timeline, and get reminders before due dates so nothing lapses.",
      },
    ],
    image: "/site/bill-payment.jpg",
    imageAlt: "Paying bills with phone and card",
    faqs: [
      { q: "How fast do I get my prepaid token?", a: "Instantly — the token appears on screen, in your notification and in your email receipt." },
      { q: "Can I pay for someone else?", a: "Yes, just enter their meter number, phone number or smartcard details. Beneficiaries are saved for next time." },
    ],
  },
  {
    slug: "physical-naira-card",
    name: "Physical Naira Card",
    category: "individuals",
    icon: "CreditCard",
    tagline: "A sleek Naira debit card for in-person and online purchases",
    description:
      "A durable Verve debit card that works at every ATM and POS in Nigeria and online — with instant freeze controls and real-time alerts.",
    overview:
      "The Velo physical Naira card is a Verve debit card built for daily life in Nigeria. Tap or insert at any POS, withdraw at any ATM, and pay on Nigerian online stores — all straight from your Velo balance. The card ships to your address, activates in the app in one tap, and comes with the controls modern banking should have: freeze and unfreeze instantly, set spending limits, and get a push alert the moment it is used.",
    highlights: [
      "Fast, secure in-person payments",
      "Accepted at any ATM and POS in Nigeria",
      "Online payments with ease",
      "Real-time transaction alerts",
      "Freeze/unfreeze instantly from the app",
    ],
    features: [
      {
        title: "Works everywhere in Nigeria",
        description:
          "Verve acceptance means every ATM, every POS terminal and every Nigerian online checkout that matters.",
      },
      {
        title: "Freeze in one tap",
        description:
          "Misplaced your card? Freeze it instantly in the app and unfreeze when it turns up — no calls, no branch visit.",
      },
      {
        title: "Spending controls",
        description:
          "Set daily limits, toggle online and POS usage on or off, and restrict withdrawals — the card obeys you, not the other way around.",
      },
      {
        title: "Real-time alerts",
        description:
          "A push notification for every authorisation means fraud is spotted in seconds, not on statement day.",
      },
    ],
    image: "/site/card-holding.webp",
    imageAlt: "Man holding a Velo Verve debit card",
    faqs: [
      { q: "How do I get a physical card?", a: "Request it in the app, pay the one-time delivery fee, and it arrives at your address. Activation takes one tap." },
      { q: "Does it work for online payments?", a: "Yes — the card works on Nigerian online stores and services, with full 3D Secure protection." },
    ],
  },
  {
    slug: "virtual-card",
    name: "Virtual Card",
    category: "individuals",
    icon: "WalletCards",
    tagline: "Secure virtual cards for online shopping and subscriptions",
    description:
      "Create dollar or naira virtual cards in seconds, spend in any currency worldwide, and keep subscriptions safe with merchant-locked cards.",
    overview:
      "Velo virtual cards solve the two biggest online-payment headaches: foreign currency and merchant trust. Create a card in seconds, fund it in naira or dollars, and pay on any international platform — streaming, cloud, ads, AI tools, e-commerce. For extra safety, spin up merchant-locked cards that only work with one vendor, or single-use disposable numbers for one-off purchases. If a merchant leaks, you delete the card — not your whole account.",
    highlights: [
      "Instant virtual card generation",
      "Spend in any currency worldwide",
      "Disposable numbers for one-off payments",
      "Spending controls and limits",
      "Works with popular payment platforms",
    ],
    features: [
      {
        title: "Create in seconds",
        description:
          "A new card — number, CVV and expiry — is generated instantly in the app, ready to fund and use immediately.",
      },
      {
        title: "Naira and dollar cards",
        description:
          "Fund in naira for local checkouts or hold USD value for international payments, with live conversion shown up front.",
      },
      {
        title: "Merchant-locked & disposable cards",
        description:
          "Lock a card to one merchant, or burn single-use numbers after one payment. Compromised card? Delete and create another in seconds.",
      },
      {
        title: "Per-card controls",
        description:
          "Individual limits, freeze toggles and category restrictions per card — perfect for subscriptions and team spend.",
      },
    ],
    image: "/site/virtual-card.webp",
    imageAlt: "Woman using a Velo virtual card while shopping online",
    faqs: [
      { q: "Can I pay for Netflix, AWS and ChatGPT?", a: "Yes — virtual cards work across major international platforms that accept card payments." },
      { q: "How many virtual cards can I create?", a: "You can maintain multiple cards at once and delete or recreate them anytime from the app." },
    ],
  },
  {
    slug: "joint-account",
    name: "Joint Account",
    category: "individuals",
    icon: "Users",
    tagline: "Share finances with family, friends or business partners",
    description:
      "Multiple account holders with full visibility, per-user spending permissions, shared savings goals and real-time alerts on every transaction.",
    overview:
      "Money shared should be money visible. The Velo joint account gives two or more people one account with complete transparency: every member sees every transaction in real time, permissions control who can spend and how much, and joint savings goals let you build together toward rent, school fees, or that family project. Alerts go to everyone at once, so there are never surprises — only coordination.",
    highlights: [
      "Multiple holders with full visibility",
      "Per-user spending permissions",
      "Real-time notifications for all members",
      "Joint savings goals",
      "Easy management from the app",
    ],
    features: [
      {
        title: "One account, everyone informed",
        description:
          "Every member gets the same real-time view and instant alerts — no more 'who paid this?' conversations.",
      },
      {
        title: "Permissions that fit your family",
        description:
          "Set who can send, how much, and whether approvals are required above a threshold you choose.",
      },
      {
        title: "Joint goals",
        description:
          "Create shared savings targets with contribution tracking, so building together is visible and motivating.",
      },
      {
        title: "Built for couples, families & partners",
        description:
          "Household budgets, allowances, small partnerships — one clean structure instead of scattered personal accounts.",
      },
    ],
    faqs: [
      { q: "How many people can join a joint account?", a: "Up to four members can hold a joint account, each with their own role and permissions." },
      { q: "Can a member be removed?", a: "Yes — with approval from the account owner, members can be added or removed securely in the app." },
    ],
  },
  {
    slug: "payment-splitting",
    name: "Payment Splitting",
    category: "individuals",
    icon: "Split",
    tagline: "Split bills and expenses with friends effortlessly",
    description:
      "Split any amount equally or by custom shares, send requests to contacts, track who has paid and settle instantly in-app.",
    overview:
      "The dinner bill, the group gift, the trip to Ghana — shared expenses are where money gets awkward. Velo payment splitting fixes that: enter the amount, pick the people, choose equal or custom shares, and send requests with one tap. Everyone sees who has paid and who has not, reminders go out gently and automatically, and settled amounts land back in your account instantly. No spreadsheets, no chasing, no maths degree required.",
    highlights: [
      "Split equally or by custom amounts",
      "Send split requests to contacts",
      "Track who has paid and who hasn't",
      "Settle up instantly in the app",
      "Perfect for dinners, trips & shared expenses",
    ],
    features: [
      {
        title: "Equal or custom splits",
        description:
          "Divide evenly or assign exact amounts per person — down to the last naira, automatically calculated.",
      },
      {
        title: "One-tap requests",
        description:
          "Requests arrive as notifications with the amount pre-filled, so friends pay in two taps without typing account numbers.",
      },
      {
        title: "Live status tracking",
        description:
          "A clear panel shows paid, pending and reminded for each participant until the whole split is settled.",
      },
      {
        title: "Auto-reminders",
        description:
          "Gentle nudges go out on your schedule — polite, automatic and effective.",
      },
    ],
    image: "/site/bill-split.jpg",
    imageAlt: "Friends splitting a bill",
    faqs: [
      { q: "Do my friends need Velo?", a: "Requests are easiest between Velo users, but you can split with anyone — non-Velo friends receive bank details to pay into." },
    ],
  },
  {
    slug: "savings-investment",
    name: "Savings & Investment",
    category: "individuals",
    icon: "TrendingUp",
    tagline: "Grow your wealth with savings and investment products",
    description:
      "High-yield savings, goal-based automation, round-ups on every transaction and investment plans with clear, transparent terms.",
    overview:
      "Wealth is built by systems, not willpower. Velo savings and investment tools give you both: automated, high-yield savings vaults that lock money away from impulse, goal-based plans for school fees and rent, and round-ups that invest your spare change from every transaction. For longer horizons, Velo investment plans put your money to work with clear terms and transparent returns — all configured and managed in the same app you already bank with.",
    highlights: [
      "High-yield savings accounts",
      "Goal-based savings with auto-transfers",
      "Investment plans with clear terms",
      "Round-up savings on every transaction",
      "Financial planning tools",
    ],
    features: [
      {
        title: "High-yield vaults",
        description:
          "Park money in interest-bearing savings with flexible or fixed lock periods, and watch interest accrue daily in the app.",
      },
      {
        title: "Goals that fund themselves",
        description:
          "Set a target — tuition, rent, that trip — pick a schedule, and Velo auto-saves toward it with progress tracking.",
      },
      {
        title: "Round-ups",
        description:
          "Every purchase rounds up to the nearest hundred naira and the spare change flows into your savings automatically.",
      },
      {
        title: "Investment plans with transparent terms",
        description:
          "Choose tenors and amounts that fit you, with earnings, fees and payout dates spelled out before you commit.",
      },
    ],
    faqs: [
      { q: "Can I withdraw savings early?", a: "Flexible savings withdraw anytime; fixed vaults offer early exit with a clearly-displayed fee before you confirm." },
      { q: "How are investments protected?", a: "Investment products run through vetted partners with disclosed terms, and your dashboard shows principal, earnings and status at all times." },
    ],
  },
  {
    slug: "budget-management",
    name: "Budget Management",
    category: "individuals",
    icon: "PieChart",
    tagline: "Take control of your finances with smart budgeting",
    description:
      "Track spending across categories, set monthly budgets with alerts, and get automatic categorisation plus visual reports that make sense.",
    overview:
      "Budgets fail when they demand too much manual work. Velo's budgeting runs itself: every transaction is categorised automatically, monthly budgets are set per category with alerts as you approach limits, and visual reports show exactly where the money went — no receipt archaeology. Over time, insights surface the patterns that matter, from rising data costs to restaurant creep, and suggest where a small change saves real money.",
    highlights: [
      "Automatic transaction categorisation",
      "Monthly budgets with close-to-limit alerts",
      "Visual spending reports and insights",
      "Identify saving opportunities",
      "Works across all your Velo accounts",
    ],
    features: [
      {
        title: "Categorisation that just happens",
        description:
          "Transfers, bills, airtime, food and shopping are classified automatically — with rules you can override.",
      },
      {
        title: "Budgets with teeth",
        description:
          "Set category limits and get push alerts at 75% and 90% so you adjust before, not after, the money is gone.",
      },
      {
        title: "Reports you'll actually read",
        description:
          "Clean charts show month-over-month trends and your biggest movers — in seconds, not spreadsheets.",
      },
      {
        title: "Savings suggestions",
        description:
          "Recurring patterns you may have missed — duplicate subscriptions, creeping fees — get surfaced with actionable suggestions.",
      },
    ],
    faqs: [
      { q: "Does budgeting cost extra?", a: "No — budgeting tools are free for every Velo account holder." },
    ],
  },

  /* ------------------------------ BUSINESSES ------------------------------ */
  {
    slug: "business-current-account",
    name: "Business Current Account",
    category: "businesses",
    icon: "Building2",
    tagline: "Complete banking for small and medium enterprises",
    description:
      "Multi-currency business accounts, bulk payments, accounting integrations, a dedicated relationship manager and team cards.",
    overview:
      "Your business deserves banking that scales with it. The Velo business current account gives your company multi-currency accounts that receive from customers anywhere, bulk payment tools that pay staff and suppliers in minutes, and clean integrations with your accounting stack. A dedicated relationship manager knows your business by name, and every team member who needs one gets a controlled business debit card. Open with your CAC documents in minutes, not weeks.",
    highlights: [
      "Multi-currency business accounts",
      "Bulk payment processing",
      "Accounting software integrations",
      "Dedicated relationship manager",
      "Business debit cards for the team",
    ],
    features: [
      {
        title: "Receive in multiple currencies",
        description:
          "Naira, USD, EUR, GBP and more — invoice international clients and receive like a local with virtual account details.",
      },
      {
        title: "Bulk payments in minutes",
        description:
          "Upload a payroll or supplier file, review one approval screen, and pay hundreds of recipients at once with full audit trail.",
      },
      {
        title: "Accounting integrations",
        description:
          "Connect your bookkeeping tools so every transaction flows into your ledger automatically, categorised and reconciled.",
      },
      {
        title: "A human who knows your name",
        description:
          "Every business account gets a dedicated relationship manager — a direct line, not a queue ticket.",
      },
      {
        title: "Team cards with controls",
        description:
          "Issue debit cards to staff with per-card limits and merchant restrictions, managed centrally from the admin console.",
      },
    ],
    howItWorks: [
      { title: "Register with CAC documents", description: "Submit your certificate and director details online — most reviews complete same-day." },
      { title: "Get your account details", description: "Receive account numbers (and multi-currency details) ready to share with customers." },
      { title: "Run your business", description: "Collect payments, pay bills and staff, and watch analytics update live." },
    ],
    faqs: [
      { q: "What documents do I need?", a: "CAC certificate, TIN, and valid ID for directors. The whole application happens online." },
      { q: "Can I receive USD from foreign clients?", a: "Yes — with Velo multi-currency accounts you get US account details to receive USD like a local." },
    ],
  },
  {
    slug: "business-analytics",
    name: "Business Analytics",
    category: "businesses",
    icon: "BarChart3",
    tagline: "Understand your cash flow with detailed insights",
    description:
      "Real-time cash-flow dashboards, expense categorisation, P&L reporting, tax-ready exports and forecasting tools for smarter decisions.",
    overview:
      "Most SME owners fly blind between bank statements. Velo business analytics turns every transaction into a live picture of your company's health: real-time cash-flow dashboards, automatic expense categorisation, profit-and-loss reporting you can export for tax season, and simple forecasting that shows where the next ninety days take you. No spreadsheets to maintain, no accountant required to know if you're okay.",
    highlights: [
      "Real-time cash-flow dashboard",
      "Expense categorisation and tracking",
      "Profit & loss reporting",
      "Tax preparation exports",
      "Financial forecasting tools",
    ],
    features: [
      {
        title: "Cash flow at a glance",
        description:
          "Money in versus money out, trending by day, week and month — with the big inflows and outflows highlighted.",
      },
      {
        title: "Expenses that explain themselves",
        description:
          "Automatic categories plus vendor-level detail show exactly where money goes and which costs are growing.",
      },
      {
        title: "Tax season without the panic",
        description:
          "Clean P&L and exportable summaries mean your accountant gets perfect books without the shoebox of receipts.",
      },
      {
        title: "Ninety-day forecasting",
        description:
          "Recurring revenue, scheduled payments and seasonal patterns combine into a forecast you can actually plan around.",
      },
    ],
    faqs: [
      { q: "Do I need to connect accounting software?", a: "No — analytics work out of the box. Integrations are available if you keep books elsewhere." },
    ],
  },

  /* -------------------------------- DIASPORA ------------------------------- */
  {
    slug: "diaspora-account",
    name: "Diaspora Account",
    category: "diaspora",
    icon: "Plane",
    tagline: "Stay financially connected to home, from anywhere",
    description:
      "Send payments from Nigeria to other countries, convert between NGN, USD, EUR and GBP, and buy or sell crypto at affordable rates.",
    overview:
      "Built for Africans abroad who still run life back home. The Velo diaspora account is a bridge in both directions: send payments from Nigeria to Ghana, the UK, the US, South Africa and beyond; hold and convert naira, dollars, euros and pounds at fair rates; and buy or sell crypto when that is the fastest rail. One account understands both worlds you live in — and prices every conversion honestly.",
    highlights: [
      "Send from Nigeria to Ghana, UK, US, SA & more",
      "Convert NGN, USD, EUR & GBP",
      "Buy and sell crypto at affordable rates",
      "Multi-currency balances in one app",
      "Fair, transparent conversion rates",
    ],
    features: [
      {
        title: "Outbound and inbound",
        description:
          "Most diaspora tools only handle sending home. Velo also handles payments going out of Nigeria — school fees abroad, supplier invoices, family support overseas.",
      },
      {
        title: "Four currencies, one balance sheet",
        description:
          "Hold NGN, USD, EUR and GBP side by side and convert with live rates shown before you confirm.",
      },
      {
        title: "Crypto when it's the best rail",
        description:
          "Buy and sell major crypto at affordable rates — often the fastest and cheapest way to move value across borders.",
      },
      {
        title: "Built-in compliance",
        description:
          "KYC and regulatory reporting are handled automatically in every corridor, keeping your transfers fast and clean.",
      },
    ],
    faqs: [
      { q: "Can I open this account from abroad?", a: "Yes — the diaspora account is designed for remote onboarding with international ID documents." },
      { q: "Which countries can I send to from Nigeria?", a: "Ghana, the UK, the US, South Africa and many more — see live corridors and rates in the app." },
    ],
  },

  /* -------------------------------- REFERRALS ------------------------------ */
  {
    slug: "referral-program",
    name: "Referral Program",
    category: "referrals",
    icon: "UserPlus",
    tagline: "Earn ₦500 for every friend who joins Velo",
    description:
      "Share your code, your friend gets ₦500 too — bonuses land instantly once they complete KYC and fund their account.",
    overview:
      "Good things multiply. Every friend who joins Velo with your code earns you ₦500, and they get ₦500 too — credited instantly the moment they complete KYC and fund their account with ₦1,000 or more. No caps, no points scheme that never converts: real naira, in your balance, spendable immediately. Share your code anywhere — WhatsApp, X, Instagram — and watch the community (and your balance) grow.",
    highlights: [
      "₦500 for each successful referral",
      "Your friend gets ₦500 welcome bonus",
      "Instant credit on completion",
      "Unlimited referrals",
      "Track every referral in the app",
    ],
    features: [
      {
        title: "Real money, instantly",
        description:
          "The moment your friend completes KYC and funds with ₦1,000+, both bonuses credit automatically — no claiming, no waiting.",
      },
      {
        title: "A dashboard that shows everything",
        description:
          "See invites sent, signups, qualified referrals and total earned — with each referral's status in real time.",
      },
      {
        title: "Share anywhere",
        description:
          "One tap sends your code through WhatsApp, SMS, X or Instagram with a ready-made invite message.",
      },
      {
        title: "Unlimited earning",
        description:
          "There's no cap on referrals — invite ten friends or ten thousand; every qualified signup pays.",
      },
    ],
    howItWorks: [
      { title: "Share your code", description: "Send your unique referral code to friends with a one-tap share sheet." },
      { title: "They sign up & verify", description: "Your friend completes KYC and funds their account with ₦1,000 or more." },
      { title: "Both earn ₦500", description: "Bonuses credit instantly to both accounts. Everyone wins." },
    ],
    faqs: [
      { q: "When do I get my bonus?", a: "Instantly, once your friend completes KYC and funds their account with at least ₦1,000." },
      { q: "Is there a referral limit?", a: "No — refer as many people as you like; every qualified referral pays ₦500." },
    ],
  },
  {
    slug: "bonus-campaigns",
    name: "Bonus Campaigns",
    category: "referrals",
    icon: "Gift",
    tagline: "Special promotions and limited-time offers",
    description:
      "Double referral windows, rewards for top referrers, early feature access, leaderboard competitions and VIP support perks.",
    overview:
      "Beyond everyday referrals, Velo runs seasonal campaigns that supercharge your rewards: limited windows with double bonuses, competitions for top referrers with real prizes, early access to new features before anyone else, and VIP support priority for community champions. Campaigns are announced in-app and via notifications, so an active community member always has something extra to chase.",
    highlights: [
      "Double referral bonuses in campaigns",
      "Special rewards for top referrers",
      "Exclusive early feature access",
      "Monthly leaderboard competitions",
      "VIP customer support priority",
    ],
    features: [
      {
        title: "Double windows",
        description:
          "During campaign periods every referral pays ₦1,000 instead of ₦500 — watch for the banner and move fast.",
      },
      {
        title: "Leaderboards with prizes",
        description:
          "Monthly top-referrer competitions with cash prizes, merch and recognition inside the community.",
      },
      {
        title: "First-look access",
        description:
          "Community members trial new features first — your feedback shapes what ships.",
      },
      {
        title: "VIP treatment",
        description:
          "Top contributors get priority routing in support, so issues resolve before others even join the queue.",
      },
    ],
    faqs: [
      { q: "How do I know when campaigns run?", a: "Campaigns are announced in the app, via push notifications and on our social channels." },
    ],
  },

  /* ----------------------------- GLOBAL FINANCE ---------------------------- */
  {
    slug: "multicurrency-accounts",
    name: "Multi-Currency Virtual Accounts",
    category: "global",
    icon: "Landmark",
    badge: "New",
    tagline: "Receive like a local in 6 currencies — in your own name",
    description:
      "Get USD account & routing numbers, a European IBAN, a UK account number, Mexican CLABE, Brazilian BR Code and Colombian account — all issued in your name to receive international payments on local rails.",
    overview:
      "Getting paid internationally shouldn't mean losing 8% to intermediaries or waiting days for wires to crawl through correspondent banks. Velo issues you real virtual account details in six currencies, in your own name: US account and routing numbers for ACH and wires, a European IBAN for SEPA, a UK account number for Faster Payments, a Mexican CLABE for SPEI, a Brazilian BR Code for PIX, and a Colombian account for Bre-B. Clients, employers and marketplaces pay you like a local — and the money lands in your Velo wallets instantly, ready to hold, convert or withdraw.",
    highlights: [
      "USD — US account & routing numbers (ACH/Wire/FedNow)",
      "EUR — European IBAN (SEPA & SEPA Instant)",
      "GBP — UK account number & sort code (FPS)",
      "MXN — CLABE (SPEI, Mexico)",
      "BRL — BR Code (PIX, Brazil)",
      "COP — account number (Bre-B, Colombia)",
    ],
    features: [
      {
        title: "Your name on the account",
        description:
          "Virtual accounts are issued in your verified name — clients, employers and platforms see a real, trusted beneficiary, not a third-party processor.",
      },
      {
        title: "USD — the world's invoice currency",
        description:
          "Receive US ACH transfers and domestic wires with your own account and routing numbers. FedNow support means instant USD settlement on modern rails.",
      },
      {
        title: "EUR — a real European IBAN",
        description:
          "Get paid across the Eurozone via SEPA and SEPA Instant with an IBAN issued to you — perfect for EU clients, marketplaces and payroll.",
      },
      {
        title: "GBP — UK Faster Payments",
        description:
          "A UK account number and sort code receive GBP through Faster Payments, the rail behind virtually every British bank transfer.",
      },
      {
        title: "MXN & BRL — Latin America covered",
        description:
          "A CLABE number receives SPEI transfers across Mexico, and your BR Code receives PIX — Brazil's instant payment system used by over 140 million people.",
      },
      {
        title: "COP — Colombia via Bre-B",
        description:
          "Receive Colombian pesos through Bre-B, the country's instant payment network, with a unique account in your name.",
      },
      {
        title: "Instant credit to your wallets",
        description:
          "Incoming payments land in the matching currency wallet in seconds to minutes depending on the rail — with a push notification and full sender details.",
      },
      {
        title: "Share details anywhere",
        description:
          "Copy or share your account details with one tap — perfect for invoices, freelance platforms, employer payroll and marketplace payouts.",
      },
    ],
    howItWorks: [
      { title: "Verify your identity", description: "Complete KYC once — it unlocks all six currency accounts." },
      { title: "Get your local details", description: "Account numbers, IBAN, routing, CLABE, BR Code — issued in your name instantly." },
      { title: "Receive like a local", description: "Share your details and watch international payments land in your wallets." },
    ],
    faqs: [
      { q: "Are the accounts really in my name?", a: "Yes — every virtual account is issued in your verified legal name, which is why platforms and employers can pay you directly." },
      { q: "Which payment rails are supported?", a: "ACH/Wire/FedNow (USD), SEPA/SEPA Instant (EUR), Faster Payments (GBP), SPEI (MXN), PIX (BRL) and Bre-B (COP)." },
      { q: "How long do incoming payments take?", a: "Instant rails (FedNow, SEPA Instant, FPS, SPEI, PIX, Bre-B) land in seconds to minutes; standard ACH and SEPA typically settle same or next business day." },
      { q: "Can I use these details for my freelance platform?", a: "Yes — use them for Upwork, Fiverr, employer payroll, marketplaces and any platform that pays out in these currencies." },
    ],
  },
  {
    slug: "currency-wallets",
    name: "Multi-Currency Wallets",
    category: "global",
    icon: "Coins",
    badge: "New",
    tagline: "Hold, convert and manage 10+ currencies in one place",
    description:
      "Hold balances in USD, EUR, GBP, NGN, MXN, BRL, COP and more. Convert between any currencies instantly at great rates with live mid-market transparency.",
    overview:
      "Your money shouldn't be trapped in one currency while your life happens in five. Velo multi-currency wallets let you hold USD, EUR, GBP, NGN, MXN, BRL, COP and more side by side — receive into them from your virtual accounts, convert between any pair instantly at competitive rates, and spend or pay out from whichever wallet makes sense. Live mid-market rates are always visible, conversion fees are shown before you confirm, and rate alerts watch the market so you trade at the moment that suits you.",
    highlights: [
      "Hold 10+ currencies simultaneously",
      "Instant conversion between any pair",
      "Live mid-market rate transparency",
      "Rate alerts on the pairs you care about",
      "Everything lands ready to spend or send",
    ],
    features: [
      {
        title: "One balance sheet, many currencies",
        description:
          "Every wallet sits beside the others with live values in your home currency — total wealth visible at a glance.",
      },
      {
        title: "Convert in a tap",
        description:
          "Pick two currencies, see the live rate and fee, confirm — and the new balance is available instantly. No waiting, no callbacks.",
      },
      {
        title: "Mid-market rates, honestly displayed",
        description:
          "We show the real mid-market rate and our small margin separately, so you always know exactly what you're paying.",
      },
      {
        title: "Rate alerts",
        description:
          "Set a target rate on any pair and get notified when the market touches it — convert at your price, not the market's whim.",
      },
      {
        title: "Purpose-built for global life",
        description:
          "Freelancers invoice in USD and spend in NGN; traders convert daily; families hold value across borders — one wallet system fits all.",
      },
    ],
    faqs: [
      { q: "Which currencies can I hold?", a: "USD, EUR, GBP, NGN, MXN, BRL, COP and more — with new currencies added regularly." },
      { q: "Are conversion rates competitive?", a: "Yes — we use live mid-market rates with a small transparent margin shown before every conversion." },
      { q: "Is there a fee to hold a wallet?", a: "No — holding balances in any currency wallet is completely free." },
    ],
  },
  {
    slug: "global-payouts",
    name: "International Payouts",
    category: "global",
    icon: "Send",
    badge: "New",
    tagline: "Pay out to 80+ countries, from any wallet",
    description:
      "Send money from your multi-currency wallets to bank accounts and mobile wallets in 80+ countries — with transparent fees and live tracking on every payout.",
    overview:
      "Receiving globally is half the story; paying out globally completes it. From any Velo wallet, send money to bank accounts and mobile wallets in over 80 countries: pay suppliers in China, contractors in Europe, family in Lagos or partners in Mexico City. Choose the source currency, see the delivered amount and fee before you confirm, and track every payout to settlement with live status. Business bulk payouts and scheduled recurring sends are built in.",
    highlights: [
      "Payouts to 80+ countries",
      "Pay from any currency wallet",
      "Transparent fees, delivered amount shown up front",
      "Bank & mobile wallet delivery",
      "Bulk payouts for businesses",
    ],
    features: [
      {
        title: "80+ countries, one interface",
        description:
          "Enter the destination, see available payout methods and the exact delivered amount — before you commit.",
      },
      {
        title: "Smart currency sourcing",
        description:
          "Pay out from any wallet — Velo converts automatically at live rates when the destination needs a different currency.",
      },
      {
        title: "Live tracking to settlement",
        description:
          "Every payout carries status updates and a delivery notification for you and the recipient.",
      },
      {
        title: "Bulk & scheduled payouts",
        description:
          "Businesses upload batch files for mass payouts, and recurring sends automate payroll, rentals and supplier retainers.",
      },
      {
        title: "Compliance built in",
        description:
          "Sanctions screening, KYC and regulatory reporting run automatically on every corridor — fast without corners cut.",
      },
    ],
    faqs: [
      { q: "How fast are international payouts?", a: "Instant-rail destinations settle in minutes; standard bank payouts typically same-day to next business day depending on corridor." },
      { q: "Can my business pay 200 contractors at once?", a: "Yes — bulk payouts accept batch files with a single approval flow and full audit trail." },
    ],
  },
  {
    slug: "gift-cards",
    name: "Gift Card Buy & Sell",
    category: "global",
    icon: "Gift",
    badge: "New",
    tagline: "Trade gift cards for cash, or gift digital joy instantly",
    description:
      "Sell unwanted gift cards for instant naira at competitive rates, or buy top-brand gift cards for yourself and loved ones — with instant delivery and fraud protection.",
    overview:
      "That Amazon card from a client, that Steam card you'll never use — turn them into cash in minutes. Velo gift card trading gives you live rates on the world's most popular cards (Amazon, Apple, Steam, Google Play, Sephora and dozens more), instant verification, and payment to your wallet the moment the card checks out. On the flip side, buy genuine gift cards at face-friendly prices for gifting, subscriptions and international payments — delivered to your inbox instantly, with fraud protection on every trade.",
    highlights: [
      "Sell cards for instant naira",
      "Live rates for 50+ brands",
      "Buy genuine cards with instant delivery",
      "Fraud-protected verification",
      "Perfect for gifting & subscriptions",
    ],
    features: [
      {
        title: "Sell in minutes",
        description:
          "Pick the brand, enter the card details, get an instant quote — accepted cards pay to your wallet immediately after verification.",
      },
      {
        title: "Live, competitive rates",
        description:
          "Rates update in real time per brand and denomination — what you're quoted is what you're paid.",
      },
      {
        title: "Buy genuine cards instantly",
        description:
          "Purchase from a catalogue of top brands with instant digital delivery — perfect for gifts, gaming and international subscriptions.",
      },
      {
        title: "Fraud protection on both sides",
        description:
          "Automated card verification, velocity checks and a dedicated review team keep the marketplace clean and trustworthy.",
      },
      {
        title: "Trade history & receipts",
        description:
          "Every trade is documented with timestamps, rates and status — your records stay audit-ready.",
      },
    ],
    image: "/media/giftcards.png",
    imageAlt: "Collection of popular gift cards",
    howItWorks: [
      { title: "Choose buy or sell", description: "Select a brand from the live rate board and enter the card value." },
      { title: "Verify securely", description: "Cards go through automated verification — usually seconds, flagged cases get human review." },
      { title: "Get paid or get your card", description: "Sellers are paid to their wallet instantly; buyers receive their card code by email and in-app." },
    ],
    faqs: [
      { q: "Which brands are supported?", a: "Amazon, Apple, Steam, Google Play, Sephora, Walmart, eBay, Nike and 50+ other top brands — see live rates in the app." },
      { q: "How fast is payment for a sold card?", a: "Instantly after verification passes — typically under two minutes from submission to wallet credit." },
      { q: "What if a card fails verification?", a: "You're told exactly why, and nothing is charged. Clear photos and unused cards pass the first time." },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getByCategory(cat: ProductCategory): Product[] {
  return PRODUCTS.filter((p) => p.category === cat);
}

export const CATEGORY_ORDER: ProductCategory[] = [
  "individuals",
  "businesses",
  "diaspora",
  "global",
  "referrals",
];

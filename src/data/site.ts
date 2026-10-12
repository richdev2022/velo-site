export const SITE = {
  name: "Velo",
  legalName: "Velo Finance LTD",
  rcNumber: "8304903",
  tagline: "Banking Built for a Borderless Future",
  description:
    "Reimagining banking for the modern world — fast, secure, borderless, and inclusive.",
  email: "info@velofinance.co",
  phone: "+2347007003300",
  phoneDisplay: "+234 700 700 3300",
  website: "https://velofinance.co",
  appStoreUrl: "#download",
  playStoreUrl: "#download",
  webAppUrl: "#download",
  addresses: [
    {
      city: "Austin",
      lines: ["5900 Balcones Drive Suite 100", "Austin, 78731, United States."],
    },
    {
      city: "Enugu",
      lines: ["205, Tonyvic Plaza, Nsukka", "Enugu State, Nigeria."],
    },
    {
      city: "Port Harcourt",
      lines: ["81 Sars Road", "Port Harcourt, Rivers State."],
    },
    {
      city: "Abuja",
      lines: ["122 Chief (Dr.) Fabian Nwaora Avenue", "EFAB Estate Lokogoma, Abuja."],
    },
  ],
  partners: [
    { name: "Kuda", image: "/brand/partner-kuda.png" },
    { name: "Bitnob", image: "/brand/partner-bitnob.png" },
    { name: "StroWallet", image: "/brand/partner-strowallet.png" },
    { name: "Aku Diewa", image: "/brand/partner-akudiewa.png" },
  ],
};

export const NAV_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Products & Services", href: "/products" },
  { label: "Support", href: "/support" },
  { label: "Resources", href: "/resources" },
  { label: "Security", href: "/security" },
  { label: "Careers", href: "/careers" },
];

export const RAILS = [
  {
    code: "USD",
    name: "US Dollar",
    rail: "ACH · Wire · FedNow",
    detail: "Account + Routing number",
    flag: "🇺🇸",
  },
  {
    code: "EUR",
    name: "Euro",
    rail: "SEPA · SEPA Instant",
    detail: "European IBAN",
    flag: "🇪🇺",
  },
  {
    code: "GBP",
    name: "British Pound",
    rail: "Faster Payments",
    detail: "Account number + Sort code",
    flag: "🇬🇧",
  },
  {
    code: "MXN",
    name: "Mexican Peso",
    rail: "SPEI",
    detail: "CLABE number",
    flag: "🇲🇽",
  },
  {
    code: "BRL",
    name: "Brazilian Real",
    rail: "PIX",
    detail: "BR Code",
    flag: "🇧🇷",
  },
  {
    code: "COP",
    name: "Colombian Peso",
    rail: "Bre-B",
    detail: "Account number",
    flag: "🇨🇴",
  },
];

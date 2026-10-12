# Velo Finance — velo-site

Official Velo Finance marketing website. Borderless banking for a global world: multi-currency virtual accounts, wallets, international payouts and gift cards.

## Stack

- **Framework**: Next.js 16 (App Router, standalone output) + React 19 + TypeScript
- **Styling**: Tailwind CSS 4 + shadcn/ui components
- **Motion**: framer-motion (page/section animation, magnetic CTAs, mouse-attraction layer)
- **3D**: react-three-fiber + drei (live globe with money-network arcs)
- **Theming**: next-themes — full dark/light mode across all pages

## Pages

- `/` — landing (hero video, live rails, wallets, payouts 3D globe, gift cards, journeys, referral, testimonials, FAQ)
- `/products` + `/products/[slug]` — 26 products & services with dedicated detail pages (multi-currency accounts USD/EUR/GBP/MXN/BRL/COP, wallets, payouts, gift cards and more)
- `/about`, `/security`, `/support`, `/resources`, `/careers`, `/how-it-works`, `/download`
- `/blog` + `/blog/[slug]`
- `/legal`, `/legal/privacy`, `/legal/terms`, `/legal/cookies`, `/delete-account`

## Develop

```bash
bun install        # or npm install
bun run dev        # dev server on :3000
bun run build      # production build (standalone)
bun run start      # serve production build
```

## Brand

- Logo assets: `public/brand/` (light + white variants, transparent favicon set)
- Palette: Velo blue `#2196F3`, navy `#0C2947` / `#131A2B`
- Type: Poppins (display) + Rubik (body)

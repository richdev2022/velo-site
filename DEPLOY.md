# Deploying Velo Finance Portal

The live site at https://velofinance.co must run THIS build. The currently deployed
server still serves the old September build, which is why the SEO/og image does not
appear when the link is shared on WhatsApp, Facebook, X or Telegram.

## 1. Build and run

On the production server:

```bash
git pull origin main
bun install
bun run build        # next build + copies .next/static and public into standalone/
bun run start        # NODE_ENV=production bun .next/standalone/server.js
```

- Listens on port 3000 by default (set `PORT=80` or use a reverse proxy to change).
- No environment variables are required.

## 2. Verify the SEO image is live

```bash
# Page must advertise the image (look for og:image):
curl -s https://velofinance.co/ | grep -o 'og:image[^>]*'

# Image must return 200 with content-type image/jpeg (NOT text/html):
curl -sI 'https://velofinance.co/brand/og-image.jpg?v=2' | head -3
```

Expected: `og:image content="https://velofinance.co/brand/og-image.jpg?v=2"` and
`HTTP/2 200 ... content-type: image/jpeg`. If it still returns `text/html`, the old
build is still running — restart the new one.

## 3. Refresh social/WhatsApp link previews (important)

WhatsApp, Facebook and Telegram cache link previews **per URL**. After deploying:

1. Quick test — share the link with a query string (forces a fresh scrape):
   `https://velofinance.co/?v=2`
2. Once it looks right, refresh the bare domain's cache:
   - Facebook/WhatsApp: https://developers.facebook.com/tools/debug/ → paste
     `https://velofinance.co/` → **Scrape Again** (do it twice).
   - Telegram: re-share via `https://t.me/webpagebot` or paste with `?v=2` first.
   - X/Twitter: https://cards-dev.twitter.com/validator (or just re-post; X re-fetches quickly).

No code change is needed for previews to work — the metadata in this build is
already crawler-ready (verified with the `facebookexternalhit` WhatsApp user agent):
absolute `og:image` (1200x630 JPEG, 75 KB), `og:image:width/height/type`,
`twitter:card summary_large_image`, and no crawler blocking (no middleware,
`robots.txt` allows all).

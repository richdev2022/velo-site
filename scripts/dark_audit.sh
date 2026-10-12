#!/bin/bash
# Dark-mode white-background audit for the Velo site.
# For each page: open at mobile width in dark mode, scroll through to trigger
# reveal animations, then flag every visible element with an opaque near-white
# computed background >= 45x45px.
PAGES=(
  "/"
  "/products"
  "/products/digital-bank-account"
  "/products/cross-border-payments"
  "/products/gift-cards"
  "/blog"
  "/about"
  "/careers"
  "/support"
  "/legal"
  "/security"
  "/resources"
  "/how-it-works"
  "/download"
  "/delete-account"
  "/definitely-not-a-page"
)

AUDIT='(() => { const bad = []; const isWhite = (c) => { const m = c.match(/rgba?\(([\d.]+)[, ]+([\d.]+)[, ]+([\d.]+)(?:[, ]+([\d.]+))?\)/); if(!m) return false; const a = m[4]===undefined?1:+m[4]; return a > 0.85 && +m[1]>=248 && +m[2]>=248 && +m[3]>=248; }; for (const el of document.querySelectorAll("body *")) { const cs = getComputedStyle(el); if (/^(IMG|VIDEO|SVG|PATH|CANVAS)$/.test(el.tagName)) continue; if (!isWhite(cs.backgroundColor)) continue; const r = el.getBoundingClientRect(); if (r.width < 45 || r.height < 45) continue; if (cs.visibility === "hidden" || cs.display === "none" || cs.opacity === "0") continue; bad.push(el.tagName + " " + (el.className.baseVal !== undefined ? el.className.baseVal : el.className).toString().slice(0,80) + " " + cs.backgroundColor + " " + Math.round(r.width) + "x" + Math.round(r.height)); } return bad.length ? bad.join(" | ") : "CLEAN"; })()'

for p in "${PAGES[@]}"; do
  name=$(echo "$p" | tr '/?' '__')
  agent-browser open "http://localhost:3000$p" > /dev/null 2>&1
  agent-browser wait --load networkidle > /dev/null 2>&1
  # trigger IntersectionObserver reveals
  for i in 1 2 3 4 5 6 7 8; do
    agent-browser eval "window.scrollBy(0, 2400)" > /dev/null 2>&1
  done
  agent-browser eval "window.scrollTo(0,0)" > /dev/null 2>&1
  sleep 0.4
  result=$(agent-browser eval "$AUDIT" 2>/dev/null)
  theme=$(agent-browser eval "document.documentElement.className" 2>/dev/null)
  printf "%-38s theme=%-6s %s\n" "$p" "$theme" "$result"
  agent-browser screenshot "/tmp/darkshots/${name}.png" > /dev/null 2>&1
done

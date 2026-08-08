# Super Duper Coffee — Full Site Rebuild (Concept)

A complete Next.js rebuild of superduperdrinks.com, built by **Glazed Web** as a pitch concept.
Hand-written CSS, no page builder, no bloat — ~100 kB first load vs. the current WPBakery site.

**Brand-true:** the design system uses Super Duper's existing identity — the real logo, the
teal / deep-petrol / electric-yellow palette sampled from the logo and packaging, and the real
product photography from the live store (in `public/brand` and `public/products`). Layout, copy,
and UX are the upgrade; the brand is untouched.

## What's inside

- **Every page rebuilt:** Home, Shop (filterable), 15 product pages, Our Story, Find Us in Stores,
  Wholesale, Rewards, News, Contact, plus a branded 404.
- **Real data:** prices, subscription terms (12.5% off — weekly/bi-weekly/monthly), points values,
  and product lineup match the live store (Aug 2026 audit). Copy marked `[demo]`/`[Concept…]` needs
  client sign-off.
- **The missing pages the current site never had:** Our Story (MSU Product Center → 2026 Meijer
  Award), Find Us in Stores, a real Wholesale pitch, and a public Rewards explainer.
- **SEO layer:** per-page metadata, `sitemap.xml`, `robots.txt`, and 301 redirects in
  `next.config.mjs` for the current site's dead/legacy URLs (including the indexed 404).
- **Demo commerce:** buy boxes, subscription pickers, and forms are fully interactive but stubbed —
  checkout wires to the real store (Woo/Shopify decision) in production.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

Deploys as-is on Vercel.

## Where things live

- `lib/products.ts` — the whole catalog (edit prices/copy here)
- `components/` — nav, footer, product cards, buy box, SVG product art, forms
- `app/` — one folder per page; `app/globals.css` is the entire design system

— Glazed Web · hand-built, ships glazed 🍩

# Remoratechnical

Content-forward site for strength coaching. Articles front and center, coaching service in the back, PowerTrack promoted as a tool.

## Stack

- **Astro 4** with content collections for articles
- **MDX** for the occasional interactive component inside an article
- **Tailwind CSS** + `@tailwindcss/typography` for the editorial reading style
- **Cloudflare Pages** for hosting (free tier)

## Local development

```sh
npm install
npm run dev
```

Open http://localhost:4321.

## Writing an article

Drop a markdown file into `src/content/articles/`. Frontmatter:

```yaml
---
title: Your title
description: One-sentence summary
pubDate: 2026-10-30
tags: [programming, technique]
draft: false
---
```

The file name becomes the URL slug (e.g. `warm-ups.md` → `/articles/warm-ups`). Set `draft: true` to hide a post from listings.

## Deploy

Cloudflare Pages → connect this GitHub repo → build command `npm run build` → output `dist` → done. Every push to `main` deploys automatically.

Point `remoratechnical.com` DNS at the Pages project when you're ready to go live. Keep the old WordPress alive until DNS flips; then let it expire.

## Layout

- `src/pages/` — one `.astro` file per URL. Dynamic routes: `articles/[...slug].astro`.
- `src/layouts/` — page shells.
- `src/components/` — small reusable pieces (header, footer, article card).
- `src/content/` — articles live here. Schema in `config.ts`.
- `src/styles/` — global CSS (fonts, resets).
- `public/` — static files served at root. Cloudflare headers in `_headers`.

## Design tokens

In `tailwind.config.mjs`. Light cream bg (`#faf9f6`), near-black ink, deep burgundy accent. Change there and it propagates everywhere.

# Portfolio — Douglas Hedman · Project Document

## Overview

Personal portfolio rebuilt from static HTML/CSS/JS to Next.js 16 based on the
Direction A — "Editorial Dark" design from the Claude Design handoff (Folio '26).

Deployed to Vercel as an App Router static site with runtime i18n.

## Stack

| Area | Tech | Version |
|------|------|---------|
| Framework | Next.js (App Router, Turbopack) | 16.2.4 |
| Runtime | React | 19.2.4 |
| Language | TypeScript | 5 |
| Styling | Tailwind CSS (@theme CSS-first) | 4 |
| Animation | Motion (ex Framer Motion) | 12.38 |
| i18n | next-intl | 4.9 |
| Content | MDX (@next/mdx + remark-gfm) | 16.2 / 4.0 |
| Testing | Playwright | 1.59 |
| Deploy | Vercel | — |

## Directory Map

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx          # html/body/fonts/NextIntlProvider
│   │   ├── page.tsx            # Landing page (hero/about/work/stack/contact)
│   │   └── work/[slug]/
│   │       └── page.tsx        # Case study template (6 projects)
│   ├── globals.css             # Tailwind 4 @theme tokens
│   ├── layout.tsx              # Root passthrough
│   ├── robots.ts               # /robots.txt
│   ├── sitemap.ts              # /sitemap.xml with hreflang
│   └── favicon.ico
├── components/
│   ├── nav.tsx                 # Sticky main nav (landing)
│   ├── project-nav.tsx         # Sticky nav on case studies
│   ├── footer.tsx
│   ├── container.tsx
│   ├── section-head.tsx
│   ├── stat.tsx                # Stat + StatGrid
│   ├── hero-title.tsx          # Motion word-rise
│   ├── featured.tsx            # Featured project block
│   ├── project-row.tsx         # Table row for non-featured projects
│   ├── phone-mockup.tsx        # Dual phone mockup (Prizio)
│   ├── browser-frame.tsx       # Browser frame w/ cross-fade
│   ├── locale-switcher.tsx     # EN/ES toggle
│   └── person-schema.tsx       # JSON-LD Person
├── lib/
│   ├── fonts.ts                # next/font/google DM Sans, DM Mono, Instrument Serif
│   └── portfolio-data.ts       # Typed portfolio + 6 projects
├── i18n/
│   ├── routing.ts              # next-intl routing (en/es, as-needed prefix)
│   ├── navigation.ts           # Typed Link/useRouter
│   └── request.ts              # Server-side message loader
└── proxy.ts                    # Next.js 16 renamed middleware
messages/
├── en.json                     # English messages
└── es.json                     # Spanish messages
content/
└── projects/                   # (reserved for MDX case bodies)
public/
├── img/                        # Portraits + portfolio screenshots
├── resume/                     # CV EN/ES
└── icons/                      # Favicon variants
tests/e2e/
└── smoke.spec.ts               # Playwright smoke suite
legacy/                         # Pre-redesign HTML/CSS/JS (rollback safety)
```

## Completed

- [x] F1 — Bootstrap Next.js 16 (branch `redesign/next-migration`)
- [x] F2 — Design system (tokens + 10 reusable components)
- [x] F3 — Landing page with Nav + Hero + About + Work + Stack + Contact + Footer
- [x] F4 — 6 case study pages via dynamic `[slug]` route
- [x] F5 — next-intl EN/ES with ~100 typed keys in both locales
- [x] F6 — Motion hero rise, scroll reveals, browser cross-fade, dot pulse
- [x] F7 — Assets migrated to `/public` with `next/image` throughout
- [x] F8 — SEO: per-route metadata + sitemap + robots + hreflang + Person JSON-LD
- [x] F9 — Playwright 7/7 green · Lighthouse desktop 100/100/100/100
- [ ] F10 — Deploy preview to Vercel (pending user approval)

## Quality Gates

| Check | Status |
|-------|--------|
| `npx next build` | ✅ Clean, 15 static pages + sitemap + robots |
| `npx tsc --noEmit` via Next typecheck | ✅ No type errors |
| `npx playwright test` | ✅ 7/7 |
| Lighthouse desktop (localhost) | ✅ Perf 100 · A11y 100 · BP 100 · SEO 100 |

## Design Decisions

- **Tailwind 4 @theme tokens** — CSS-first config, no `tailwind.config.js`. Tokens
  map 1:1 to the `direction-a.jsx` palette (warm black `#0f0e0c`, bone `#f4efe4`,
  cream accent `#e8e1d0`). `bone-muted` and `bone-dim` were bumped to meet WCAG AA
  (4.5:1) over the ink background — design intent preserved, accessibility locked.
- **next-intl `localePrefix: "as-needed"`** — default locale (EN) served at `/`,
  Spanish at `/es/*`. Each route generates its canonical + hreflang alternates.
- **Motion over AOS/Typed.js/Waypoints/PureCounter** — one animation library, all
  respecting `prefers-reduced-motion` through Motion's defaults.
- **6 case studies with typed i18n bodies** — instead of MDX files, each project's
  narrative lives in `messages/{locale}.json` under `projects.<id>.body[]` and
  friends. Keeps everything in one place and avoids MDX serialization wrinkles.
  MDX setup is still in place (`@next/mdx`, `remark-gfm`) if future case studies
  need richer layouts.
- **`/legacy` preserved** — old HTML/CSS/JS is still in the repo as a rollback
  escape hatch. Once the redesign is merged and settled, this folder can be
  deleted in a follow-up.
- **Next.js 16 `proxy.ts`** — the runtime renamed `middleware` → `proxy`. Our
  `src/proxy.ts` re-exports `createMiddleware(routing)` verbatim.

## Technical Notes

- The Hero word-rise uses pure CSS `@keyframes` on the `.inner` spans plus Motion
  `initial/animate` on subsequent reveals — the first paint is FCP-critical.
- `BrowserFrame` runs a 8s cross-fade between two screenshots via CSS keyframes;
  the container itself enters via Motion scroll-reveal.
- `StatGrid` borders collapse correctly on mobile (single column, no right border).
- JSON-LD Person lives in the body so it ships with every prerendered page.

## How to Run

```bash
npm run dev           # local dev (Turbopack, port 3000)
npm run build         # production build
npm run start         # serve the prod build
npm run lint          # eslint
npm run typecheck     # tsc --noEmit
npx playwright test   # e2e smoke (requires dev server on :4545)
```

## Backlog / Nice-to-have

- Add Playwright tests for mobile viewport (360px) and Spanish locale coverage
- Wire work-filter pills (Mobile/Commerce/Internal Tools) to actual filtering
- Add MDX-rendered long-form case studies (stub directory already reserved)
- Consider OG image per route (og-image generation via `ImageResponse`)
- After rollout verified, delete `/legacy`

## External References

- Design handoff: `/Users/douglashedman/Downloads/Personal Portfolio-handoff.zip`
- Vercel project: `douglas-hedman-portfolio`
- Resume PDFs: `public/resume/Douglas_Hedman_CV_2026_{EN,ES}.pdf`

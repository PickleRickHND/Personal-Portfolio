# Portfolio — Douglas Hedman · Project Document

## Overview

Personal portfolio rebuilt from static HTML/CSS/JS to Next.js 16 based on the
Direction A — "Editorial Dark" design from the Claude Design handoff (Folio '26).

Deployed to Vercel as an App Router static site with runtime i18n.

## Stack

| Area | Tech | Version |
|------|------|---------|
| Runtime | Node.js / npm | 24.20 / 11.19 |
| Framework | Next.js (App Router, Turbopack) | 16.3.3 |
| UI | React | 19.2.8 |
| Language | TypeScript | 6.0.3 |
| Styling | Tailwind CSS (@theme CSS-first) | 4.3.3 |
| Animation | Motion | 13.1.1 |
| i18n | next-intl | 4.14.1 |
| Content | MDX (@next/mdx + remark-gfm) | 16.3.3 / 4.0.1 |
| Testing | Vitest / Playwright | 4.1.11 / 1.62.1 |
| Deploy | Vercel | Production |

## Directory Map

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx          # html/body/fonts/NextIntlProvider
│   │   ├── page.tsx            # Landing page (hero/about/work/stack/contact)
│   │   └── work/[slug]/
│   │       └── page.tsx        # Case study template (8 projects)
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
│   └── portfolio-data.ts       # Typed portfolio + 8 projects
├── i18n/
│   ├── routing.ts              # next-intl routing (en/es, always prefix)
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
tests/unit/
└── portfolio-data.test.ts      # Data, assets, navigation and i18n contracts
legacy/                         # Pre-redesign HTML/CSS/JS (rollback safety)
```

## Completed

- [x] F1 — Bootstrap Next.js 16 (branch `redesign/next-migration`)
- [x] F2 — Design system (tokens + 10 reusable components)
- [x] F3 — Landing page with Nav + Hero + About + Work + Stack + Contact + Footer
- [x] F4 — 8 case study pages via dynamic `[slug]` route
- [x] F5 — next-intl EN/ES with synchronized keys in both locales
- [x] F6 — Motion hero rise, scroll reveals, browser cross-fade, dot pulse
- [x] F7 — Assets migrated to `/public` with `next/image` throughout
- [x] F8 — SEO: per-route metadata + sitemap + robots + hreflang + Person JSON-LD
- [x] F9 — Playwright desktop/mobile and Lighthouse desktop baseline
- [x] F10 — Production deployment on Vercel
- [x] F11 — Technology refresh, dependency audit, current E2E contracts and documentation sync

## Quality Gates

| Check | Status |
|-------|--------|
| `npm run build` | Clean, 26 static pages including sitemap, robots and manifest |
| `npm run typecheck` | No type errors |
| `npm run lint` | No errors or warnings |
| `npm run test:unit` | 3/3, 100% coverage on `portfolio-data.ts` |
| `npm run test:e2e` | 29 passed, 3 intentional mobile skips |
| `npm audit` | 0 known vulnerabilities |
| Browser verification | EN, ES and Prizio clean on desktop/mobile; no console errors, overlays, visible broken images or overflow |

## Design Decisions

- **Tailwind 4 @theme tokens** — CSS-first config, no `tailwind.config.js`. Tokens
  map 1:1 to the `direction-a.jsx` palette (warm black `#0f0e0c`, bone `#f4efe4`,
  cream accent `#e8e1d0`). `bone-muted` and `bone-dim` were bumped to meet WCAG AA
  (4.5:1) over the ink background — design intent preserved, accessibility locked.
- **next-intl `localePrefix: "always"`** — English and Spanish use `/en/*` and
  `/es/*`. Each route generates its canonical + hreflang alternates.
- **Motion over AOS/Typed.js/Waypoints/PureCounter** — one animation library, all
  respecting `prefers-reduced-motion` through Motion's defaults.
- **8 case studies with typed i18n bodies** — instead of MDX files, each project's
  narrative lives in `messages/{locale}.json` under `projects.<id>.body[]` and
  friends. Keeps everything in one place and avoids MDX serialization wrinkles.
  MDX setup is still in place (`@next/mdx`, `remark-gfm`) if future case studies
  need richer layouts.
- **`/legacy` preserved** — old HTML/CSS/JS is still in the repo as a rollback
  escape hatch. Once the redesign is merged and settled, this folder can be
  deleted in a follow-up.
- **Next.js 16 `proxy.ts`** — the runtime renamed `middleware` → `proxy`. Our
  `src/proxy.ts` re-exports `createMiddleware(routing)` verbatim.
- **Node.js 24 LTS** — local development and package engines use the supported
  LTS line with npm 11; Node.js 20 is no longer part of the runtime contract.
- **TypeScript 6 and ESLint 9 compatibility window** — TypeScript 7 and ESLint
  10 remain deferred until the parsers and plugins bundled by Next.js declare
  support. The lockfile is otherwise current and audit-clean.
- **Development-only React eval** — the CSP includes `unsafe-eval` only in
  local development for React debugging. Production headers omit it.

## Technical Notes

- The Hero word-rise uses pure CSS `@keyframes` on the `.inner` spans plus Motion
  `initial/animate` on subsequent reveals — the first paint is FCP-critical.
- `BrowserFrame` advances screenshots every 4.2 seconds and cross-fades them with
  Motion; the container itself enters via scroll reveal.
- `StatGrid` borders collapse correctly on mobile (single column, no right border).
- JSON-LD Person lives in the body so it ships with every prerendered page.

## How to Run

```bash
npm run dev           # local dev (Turbopack, port 3000)
npm run build         # production build
npm run start         # serve the prod build
npm run lint          # eslint
npm run typecheck     # tsc --noEmit
npm run test:unit     # data, asset, navigation and i18n contracts
npm run test:e2e      # e2e smoke (starts dev server on :4545)
npm run verify        # typecheck + lint + unit + build
```

## Backlog / Nice-to-have

- Wire work-filter pills (Mobile/Commerce/Internal Tools) to actual filtering
- Add MDX-rendered long-form case studies (stub directory already reserved)
- Consider OG image per route (og-image generation via `ImageResponse`)
- After rollout verified, delete `/legacy`

## External References

- Design handoff: `/Users/douglashedman/Downloads/Personal Portfolio-handoff.zip`
- Vercel project: `douglas-hedman-portfolio`
- Resume PDFs: `public/resume/Douglas_Hedman_CV_2026_{EN,ES}.pdf`

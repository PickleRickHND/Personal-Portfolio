# CLAUDE.md

Guía para Claude Code al trabajar en este repositorio.

## Overview

Portfolio personal de Douglas Hedman (Full-Stack Developer). **Node.js 24 + Next.js 16.3 (App Router + Turbopack) + React 19.2 + TypeScript 6 + Tailwind CSS 4.3 + next-intl 4.14 + Motion 13**, deployado en Vercel (proyecto `douglas-hedman-portfolio`, push a `main` auto-deploya).

> El sitio estático anterior (HTML/CSS/JS puro) vive en `legacy/` solo como referencia histórica. NO se mantiene ni se edita.

## Comandos

```bash
npm run dev          # Dev server con Turbopack
npm run build        # Build de producción
npm run start        # Servir el build
npm run lint         # ESLint 9
npm run typecheck    # tsc --noEmit
npm run test:unit    # Vitest: datos e i18n
npm run test:e2e     # Playwright desktop/mobile
npm run verify       # typecheck + lint + unit + build
```

Scripts auxiliares en `scripts/`: `visual-capture.mjs` y `mobile-capture.mjs` (capturas de pantalla para QA visual; output en `screenshots/`).

## Arquitectura

### Rutas (`src/app/`)

- `[locale]/page.tsx` — página principal (hero, featured work, stack, stats, contacto)
- `[locale]/work/[slug]/page.tsx` — case study por proyecto
- `[locale]/layout.tsx` + `template.tsx` — layout localizado y transiciones
- `robots.ts`, `sitemap.ts`, `manifest.ts` — metadata SEO generada

### i18n (next-intl)

- Locales: `en` (default) y `es`, con `localePrefix: "always"` — toda URL lleva `/en/...` o `/es/...`.
- Config en `src/i18n/`: `routing.ts` (locales), `navigation.ts` (helpers de Link/router), `request.ts` (carga de mensajes).
- `src/proxy.ts` aplica el routing de next-intl.
- Mensajes en `messages/en.json` y `messages/es.json` — **toda key nueva va en AMBOS archivos, sincronizados**.

### Datos del portfolio

- **Fuente única: `src/lib/portfolio-data.ts`** — tipos `Project`/`ProjectType`/`ProjectVisualMode`, los 8 proyectos (petlab, equine, prizio, folium, printshop, arca, spotify, pharmacy) y los datos de contacto/social. Agregar un proyecto = agregar entrada aquí + sus keys i18n + imágenes en `public/`.
- MDX está configurado en `next.config.ts` (`@next/mdx` + remark-gfm) pero **sin uso actual**: `content/projects/` está vacío; los case studies se renderizan desde `portfolio-data.ts` + mensajes i18n.

### Componentes (`src/components/`)

Un componente por archivo, **kebab-case** (`hero-title.tsx`, `gallery-carousel.tsx`, `locale-switcher.tsx`). Destacados: `browser-frame`/`phone-mockup` (frames de screenshots según `ProjectVisualMode`), `reveal` (animaciones Motion), `person-schema` (JSON-LD), `nav-items.ts` (datos de navegación).

### Estilos y assets

- Tailwind CSS 4 vía `@tailwindcss/postcss` (config CSS-first, sin tailwind.config).
- Tipografías definidas en `src/lib/fonts.ts`.
- Imágenes optimizadas por `next/image` (AVIF/WebP, tamaños definidos en `next.config.ts`).

### Seguridad

`next.config.ts` define security headers estrictos (CSP, HSTS, X-Frame-Options DENY, etc.) para TODAS las rutas. Si un cambio necesita un recurso externo nuevo (font, script, imagen remota), hay que ampliar la CSP ahí — si no, el recurso se bloquea en producción.

## Convenciones

- **Comentarios de código: español** (regla global; identificadores en inglés).
- Componentes/tipos en PascalCase, archivos en kebab-case, imports absolutos según `tsconfig.json`.
- Toda string visible pasa por next-intl (nada hardcodeado en JSX); keys en inglés (`hero.title`).
- Verificación mínima antes de dar por terminado un cambio: `npm run typecheck` + `npm run lint`; si el cambio es visual, confirmar render en browser.

## Testing

- Vitest en `tests/unit/` valida los contratos de datos y traducciones.
- Playwright en `tests/e2e/` cubre landing, idiomas, casos de estudio, SEO y headers en desktop/mobile.
- Flujos críticos nuevos (navegación, switch de idioma, case studies) deben sumar specs E2E.

## Deployment

Vercel con `framework: nextjs` (`vercel.json`). Push a `main` → build + deploy automático. Sin variables de entorno requeridas actualmente.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

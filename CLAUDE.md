# CLAUDE.md

Guía para Claude Code al trabajar en este repositorio.

## Overview

Portfolio personal de Douglas Hedman (Full-Stack Developer). **Next.js 16 (App Router + Turbopack) + React 19 + TypeScript + Tailwind CSS 4 + next-intl + Motion**, deployado en Vercel (proyecto `douglas-hedman-portfolio`, push a `main` auto-deploya).

> El sitio estático anterior (HTML/CSS/JS puro) vive en `legacy/` solo como referencia histórica. NO se mantiene ni se edita.

## Comandos

```bash
npm run dev          # Dev server con Turbopack
npm run build        # Build de producción
npm run start        # Servir el build
npm run lint         # ESLint 9
npm run typecheck    # tsc --noEmit
npx playwright test  # E2E (tests/e2e/)
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
- `src/middleware.ts` aplica el routing de next-intl.
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

- Playwright en `tests/e2e/` (hoy: `smoke.spec.ts`; config en `playwright.config.ts`).
- Flujos críticos nuevos (navegación, switch de idioma, case studies) deben sumar specs E2E.

## Deployment

Vercel con `framework: nextjs` (`vercel.json`). Push a `main` → build + deploy automático. Sin variables de entorno requeridas actualmente.

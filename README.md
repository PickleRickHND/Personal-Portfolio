<div align="center">
  <img src="src/app/apple-icon.png" alt="Logo de Douglas Hedman" width="130">
  <h1>Douglas Hedman | Portfolio</h1>
  <p><strong>Portfolio bilingüe de desarrollo full-stack con casos de estudio, decisiones técnicas y resultados de producto.</strong></p>
</div>

---

Sitio personal de Douglas Hedman construido para presentar proyectos web, móviles y de negocio mediante casos de estudio detallados. La experiencia está disponible en español e inglés, incluye galerías adaptadas al tipo de producto y prioriza rendimiento, accesibilidad y SEO.

[![Next.js](https://img.shields.io/badge/Next.js-16.2-000000?logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![next-intl](https://img.shields.io/badge/next--intl-4.9-5C6AC4)](https://next-intl.dev/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?logo=vercel)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-All_rights_reserved-lightgrey.svg)]()

**Sitio:** [douglas-hedman-portfolio.vercel.app](https://douglas-hedman-portfolio.vercel.app)

## Tabla de contenidos

- [Resumen](#resumen)
- [Proyectos presentados](#proyectos-presentados)
- [Stack tecnológico](#stack-tecnológico)
- [Arquitectura](#arquitectura)
- [Internacionalización](#internacionalización)
- [Estructura](#estructura)
- [Desarrollo local](#desarrollo-local)
- [Verificación](#verificación)
- [Despliegue](#despliegue)
- [Licencia](#licencia)

---

## Resumen

El portfolio no funciona como una galería genérica. Cada proyecto tiene una ruta propia con contexto, reto, enfoque, resultado, stack y capturas. La fuente de datos central determina qué proyectos aparecen, cómo se ordenan y qué presentación visual utiliza cada uno.

### Capacidades

| Área                | Implementación                                                     |
| ------------------- | ------------------------------------------------------------------ |
| Casos de estudio    | Rutas estáticas por proyecto con navegación secuencial             |
| Presentación visual | Frames de navegador, mockups móviles y galerías responsivas        |
| Idiomas             | Español e inglés con URLs localizadas                              |
| SEO                 | Metadata, sitemap, robots, manifest y datos estructurados `Person` |
| Movimiento          | Transiciones y revelado progresivo con Motion                      |
| Seguridad           | CSP, HSTS, protección contra framing y headers estrictos           |
| QA visual           | Capturas automatizadas para desktop y mobile                       |

## Proyectos presentados

- Prizio
- PrintShop 504
- Sistema Digestivo Equino 3D
- PetLab HN
- Folium Labs
- El Arca Honduras
- Spotify Playlist Generator
- Hedman-Garcia Pharmacy

La configuración canónica vive en `src/lib/portfolio-data.ts`; el copy localizado se mantiene sincronizado en `messages/en.json` y `messages/es.json`.

## Stack tecnológico

| Capa       | Tecnología                                           |
| ---------- | ---------------------------------------------------- |
| Framework  | Next.js 16.2 con App Router y Turbopack              |
| UI         | React 19.2 y TypeScript 5                            |
| Estilos    | Tailwind CSS 4 con configuración CSS-first           |
| i18n       | next-intl 4.9                                        |
| Contenido  | Datos tipados y soporte MDX preparado con remark-gfm |
| Movimiento | Motion 12                                            |
| E2E        | Playwright                                           |
| Hosting    | Vercel                                               |

## Arquitectura

```text
Solicitud /en o /es
        |
        v
next-intl middleware
        |
        +-- Página principal
        |     +-- Hero, proyectos, stack, métricas y contacto
        |
        +-- /work/[slug]
              +-- Datos tipados del proyecto
              +-- Copy localizado
              +-- Browser frame o phone mockup
              +-- Galería y navegación al siguiente caso
```

Los proyectos se generan desde una fuente única y las páginas se renderizan como Server Components. Solo las piezas que requieren interacción o movimiento se ejecutan en el cliente.

## Internacionalización

- Locales disponibles: `en` y `es`.
- Toda URL incluye el prefijo de idioma.
- Las claves visibles deben existir en ambos archivos de mensajes.
- Los enlaces internos utilizan helpers localizados de next-intl.

## Estructura

```text
src/
├── app/[locale]/           # Home, layout y casos de estudio
├── components/             # Navegación, galerías, frames y secciones
├── i18n/                   # Routing y carga de mensajes
└── lib/                    # Datos del portfolio, fuentes y configuración del sitio
messages/                   # Diccionarios en inglés y español
public/
├── img/portfolio/          # Capturas por proyecto
├── icons/                  # Identidad visual
└── resume/                 # CV localizado
tests/e2e/                  # Flujos Playwright
legacy/                     # Sitio anterior, conservado solo como referencia
```

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). El proyecto no requiere variables de entorno para ejecutarse; `NEXT_PUBLIC_SITE_URL` es opcional para definir el origen canónico.

## Verificación

```bash
npm run typecheck
npm run lint
npm run build
npx playwright test
```

Los scripts `scripts/visual-capture.mjs` y `scripts/mobile-capture.mjs` generan evidencia para comparaciones visuales.

## Despliegue

Vercel despliega automáticamente la rama `main`. El sitio se genera como aplicación Next.js y publica las rutas localizadas, sitemap, manifest y headers de seguridad.

## Licencia

Repositorio público sin licencia de reutilización. Todos los derechos reservados.

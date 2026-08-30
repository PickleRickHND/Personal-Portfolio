<div align="center">
  <img src="src/app/apple-icon.png" alt="Logo de Douglas Hedman" width="130">
  <h1>Douglas Hedman | Portfolio</h1>
  <p><strong>Portfolio bilingüe de desarrollo full-stack con casos de estudio, decisiones técnicas y resultados de producto.</strong></p>
</div>

---

Sitio personal de Douglas Hedman construido para presentar proyectos web, móviles y de negocio mediante casos de estudio detallados. La experiencia está disponible en español e inglés, incluye galerías adaptadas al tipo de producto y prioriza rendimiento, accesibilidad y SEO.

[![Node.js](https://img.shields.io/badge/Node.js-24_LTS-5FA04E?logo=nodedotjs)](https://nodejs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-16.3-000000?logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-13.1-FFF312?logo=framer&logoColor=000)](https://motion.dev/)
[![next-intl](https://img.shields.io/badge/next--intl-4.14-5C6AC4)](https://next-intl.dev/)
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
- [Decisiones de compatibilidad](#decisiones-de-compatibilidad)
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
| Framework  | Next.js 16.3 con App Router y Turbopack              |
| UI         | React 19.2 y TypeScript 6.0                          |
| Estilos    | Tailwind CSS 4.3 con configuración CSS-first         |
| i18n       | next-intl 4.14                                       |
| Contenido  | Datos tipados, Next MDX 16.3 y remark-gfm            |
| Movimiento | Motion 13.1                                          |
| Testing    | Vitest 4.1 y Playwright 1.62                         |
| Hosting    | Vercel                                               |

## Arquitectura

```text
Solicitud /en o /es
        |
        v
next-intl proxy
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
tests/
├── unit/                   # Contratos de datos y paridad de traducciones
└── e2e/                    # Flujos Playwright en desktop y mobile
legacy/                     # Sitio anterior, conservado solo como referencia
```

## Desarrollo local

- Node.js 24 LTS, versión 24.15 o posterior
- npm 11

```bash
npm ci
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). El proyecto no requiere variables de entorno para ejecutarse; `NEXT_PUBLIC_SITE_URL` es opcional para definir el origen canónico.

## Decisiones de compatibilidad

- TypeScript permanece en 6.0 hasta que el parser de ESLint soporte TypeScript 7.
- ESLint permanece en 9.39 hasta que los plugins incluidos por `eslint-config-next` declaren compatibilidad con ESLint 10.
- Motion 13 conserva las APIs usadas por el portfolio; el proyecto no utiliza las integraciones CSS-in-JS afectadas por su cambio de filtrado de propiedades.
- `src/proxy.ts` reemplaza la convención deprecada `middleware.ts` sin cambiar el contrato de URLs localizadas.
- La CSP permite `unsafe-eval` únicamente durante desarrollo para las herramientas de React; los headers de producción no lo incluyen.

## Verificación

```bash
npm run verify
npm run test:e2e
npm audit
```

Los scripts `scripts/visual-capture.mjs` y `scripts/mobile-capture.mjs` generan evidencia para comparaciones visuales.

## Despliegue

Vercel despliega automáticamente la rama `main`. El sitio se genera como aplicación Next.js y publica las rutas localizadas, sitemap, manifest y headers de seguridad.

## Licencia

Repositorio público sin licencia de reutilización. Todos los derechos reservados.

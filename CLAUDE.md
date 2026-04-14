# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static personal portfolio website for Douglas Hedman (Full-Stack Developer). No build system, no bundler, no package manager — pure HTML/CSS/JS served directly. Deployed to **Vercel** as a static site.

## Development

There is no build step. To develop locally, serve the files with any static server:

```bash
npx serve .
# or
python3 -m http.server 8000
```

Open `index.html` in a browser. Changes to HTML/CSS/JS are reflected on refresh.

## Architecture

### Pages

- `index.html` — Main portfolio page (hero, about, skills, resume, portfolio grid, contact)
- `prizioProject.html` — Project detail page for Prizio (Flutter app)
- `pharmacyProject.html` — Project detail page for Hedman Garcia Pharmacy
- `spotifyProject.html` — Project detail page for Spotify Playlist Generator

### JavaScript

- `assets/js/i18n.js` — Client-side internationalization (EN/ES). All translatable strings live in a `translations` object. HTML elements use `data-i18n` attributes for text and `data-i18n-placeholder` for placeholders. Language preference is persisted in `localStorage("portfolio-lang")` and auto-detected from `navigator.language`. Also reinitializes Typed.js on language switch.
- `assets/js/main.js` — UI behaviors: navbar scroll tracking, mobile nav toggle, smooth scrolling, Isotope portfolio filtering, GLightbox, Swiper sliders, AOS animations, PureCounter, Waypoint-triggered skill bars. Typed.js initialization is delegated to `i18n.js` to avoid duplicate instances.

### Styling

Single stylesheet: `assets/css/style.css`. Uses CSS custom properties (dark editorial theme with warm monochrome palette). Key variables are defined in `:root`.

Fonts: DM Sans (body), DM Mono (code), Instrument Serif (display) — loaded from Google Fonts.

### Vendor Libraries (bundled locally in `assets/vendor/`)

Bootstrap 5, AOS, Boxicons, Bootstrap Icons, GLightbox, Isotope, Swiper, Typed.js, Waypoints, PureCounter. Devicons loaded via CDN.

### Static Assets

- `assets/img/` — Profile images, hero images, portfolio screenshots, testimonial photos
- `assets/resume/` — CV PDFs (EN/ES, 2026 edition)
- `forms/contact.php` — Server-side contact form handler (not used in Vercel deployment)

## i18n Conventions

When adding new translatable content:
1. Add the key/value pair to **both** `en` and `es` objects in `assets/js/i18n.js`
2. Use `data-i18n="key.name"` on the HTML element
3. The English text in the HTML serves as the default/fallback

## Deployment

Vercel static deployment (project: `douglas-hedman-portfolio`). Push to `main` triggers auto-deploy. No build command configured — Vercel serves files as-is.

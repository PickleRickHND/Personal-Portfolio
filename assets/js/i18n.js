/**
 * Internationalization (i18n) system for portfolio
 * Supports English (en) and Spanish (es)
 */
(function () {
  "use strict";

  const translations = {
    en: {
      // Navigation
      "nav.home": "Home",
      "nav.about": "About",
      "nav.resume": "Resume",
      "nav.portfolio": "Portfolio",
      "nav.testimonials": "Testimonials",
      "nav.contact": "Contact",

      // Hero
      "hero.greeting": "I'm a ",
      "hero.status": "Available for work",

      // About Section
      "about.title": "About",
      "about.description":
        "Systems Engineer with over 3 years of experience in full-stack web development, QA automation, and mobile app development. I have shipped 5+ production Next.js web applications, 2 cross-platform Flutter mobile apps, and maintained 300+ automated tests with Cypress and Playwright for e-commerce platforms. I work with modern stacks including React, TypeScript, Tailwind CSS, Firebase, Supabase, and PHP/Yii2.",
      "about.role":
        "Full-Stack Developer | Next.js, React, Flutter & QA Automation",
      "about.detail":
        "I am passionate about building high-quality software solutions across the full stack. From responsive web applications with Next.js and React, to cross-platform mobile apps with Flutter, and robust test automation with Cypress and Playwright. I thrive in remote, collaborative environments and am committed to delivering clean, efficient, and well-tested code.",
      "about.birthday": "Birthday:",
      "about.phone": "Phone:",
      "about.age": "Age:",
      "about.degree": "Degree:",
      "about.email": "Email:",
      "about.city": "City:",
      "about.degree.value": "Systems Engineering",
      "about.closing":
        "Beyond my main role, I have built production applications for clients across industries including e-commerce, education, agriculture, and non-profits. I am always exploring new technologies and contributing to open-source projects.",

      // Skills Section
      "skills.title": "Skills",
      "skills.description":
        "Throughout my career, I have developed expertise across the full software development lifecycle. From building production web applications with Next.js and React, to developing cross-platform mobile apps with Flutter, implementing QA automation with Cypress and Playwright, and managing backend services with PHP/Yii2, Firebase, and Supabase. I deploy to Vercel and GCP, and monitor with Sentry.",

      // Resume Section
      "resume.title": "Resume",
      "resume.description":
        "Click the buttons below to download a PDF versión of my resume, which provides a detailed overview of my educational background and professional experience:",
      "resume.download.en": "English",
      "resume.download.es": "Spanish",

      // Portfolio Section
      "portfolio.title": "Portfolio",
      "portfolio.description":
        "Below, you will find a selection of projects I have worked on, from personal ventures to professional applications:",
      "portfolio.filter.all": "All",
      "portfolio.filter.web": "Web",
      "portfolio.filter.mobile": "Mobile",
      "portfolio.filter.app": "App",

      // Stats
      "stats.apps": "Production Apps",
      "stats.tests": "Automated Tests",
      "stats.years": "Years Experience",

      // Hero Aside
      "hero.sub": "Full-Stack Developer — Tegucigalpa, HN",
      "hero.meta.stack.label": "Stack",
      "hero.meta.stack.value": "Next.js / React / Flutter",
      "hero.meta.focus.label": "Focus",
      "hero.meta.focus.value": "Full-Stack & QA Automation",
      "hero.meta.based.label": "Based in",
      "hero.meta.based.value": "Honduras · Remote",

      // Portfolio Featured
      "portfolio.featured.badge": "Featured Project",
      "portfolio.featured.desc": "Cross-platform price comparison app for Honduran supermarkets. Scan barcodes, compare prices, set alerts, and build smart shopping lists.",
      "portfolio.featured.view": "View Project",
      "portfolio.featured.screenshots": "Screenshots",

      // Portfolio Cards
      "portfolio.prizio.desc": "Price comparison mobile app for Honduras",
      "portfolio.pharmacy.desc": "Inventory, billing & user management system with auth and email recovery",
      "portfolio.spotify.desc": "Search songs, generate playlists by mood, and export directly to your Spotify account",

      // Prizio Detail Page
      "prizio.feature.scanner": "Barcode Scanner",
      "prizio.feature.scanner.desc": "Scan product barcodes to instantly compare prices across supermarkets",
      "prizio.feature.alerts": "Price Alerts",
      "prizio.feature.alerts.desc": "Set alerts and get notified when prices drop on your favorite products",
      "prizio.feature.lists": "Smart Shopping Lists",
      "prizio.feature.lists.desc": "Build lists that auto-find the cheapest store combination",
      "prizio.feature.trends": "Price Trends",
      "prizio.feature.trends.desc": "View historical price charts to buy at the right time",
      "prizio.meta.repo.label": "Repository",
      "prizio.gallery.home": "Home",
      "prizio.gallery.search": "Search",
      "prizio.gallery.lists": "Lists",
      "prizio.gallery.stores": "Stores",
      "prizio.back": "Back to Portfolio",

      // Pharmacy Detail Page
      "pharmacy.feature.auth": "Secure Authentication",
      "pharmacy.feature.auth.desc": "Employee login system with advanced email password recovery via SendGrid",
      "pharmacy.feature.inventory": "Inventory Management",
      "pharmacy.feature.inventory.desc": "Complete stock tracking with product categories, quantities, and alerts",
      "pharmacy.feature.billing": "Billing System",
      "pharmacy.feature.billing.desc": "Create and manage customer receipts with detailed transaction records",
      "pharmacy.feature.users": "User Management",
      "pharmacy.feature.users.desc": "Admin dashboard to control roles, permissions, and user privileges",
      "pharmacy.meta.repo.label": "Repository",
      "pharmacy.gallery.dashboard": "Dashboard Mobile",
      "pharmacy.gallery.inventory": "Inventory Mobile",
      "pharmacy.gallery.reports": "Reports Mobile",

      // Spotify Detail Page
      "spotify.feature.search": "Song Search",
      "spotify.feature.search.desc": "Search millions of tracks using the Spotify Web API with real-time results",
      "spotify.feature.mood": "Mood-Based Generation",
      "spotify.feature.mood.desc": "Generate playlists by adjusting energy, danceability, positivity, and tempo sliders",
      "spotify.feature.export": "Direct Export",
      "spotify.feature.export.desc": "One-click export of generated playlists directly to your Spotify account via OAuth",
      "spotify.feature.i18n": "Bilingual (EN/ES)",
      "spotify.feature.i18n.desc": "Full internationalization support with English and Spanish interfaces",
      "spotify.meta.repo.label": "Repository",
      "spotify.gallery.mobile": "Mobile",

      // Portfolio Cards
      "portfolio.arca.desc": "Non-profit website with blog, gallery, donations, and 5-language support (ES/EN/FR/PT/DE)",

      // Arca Detail Page
      // Portfolio Cards
      "portfolio.printshop.desc": "E-commerce platform with admin dashboard, invoicing, and inventory management",
      "portfolio.folium.desc": "Academic services platform with 60+ SEO blog articles and 26 services catalog",

      // PrintShop Detail Page
      "printshop.breadcrumb.title": "PrintShop 504",
      "printshop.info.title": "Project information",
      "printshop.info.date.label": "Project Date",
      "printshop.info.date.value": "2026 - Present",
      "printshop.info.category.label": "Category",
      "printshop.info.category.value": "E-Commerce Platform",
      "printshop.info.client.label": "Client",
      "printshop.info.client.value": "PrintShop 504",
      "printshop.info.repo.label": "Repository",
      "printshop.func.title": "Functionality",
      "printshop.func.description":
        "Full e-commerce platform for a sublimation business in Honduras (custom t-shirts, bags, mugs). Features a public storefront with shopping cart, admin dashboard with inventory management, order tracking, invoicing with PDF generation, customer management, supplier tracking, activity logs, Excel reports, and role-based access control. Built with Next.js, Supabase, Tailwind CSS, React-PDF, Resend, Zustand, and Upstash Redis for rate limiting.",
      "printshop.feature.store": "E-Commerce Storefront",
      "printshop.feature.store.desc": "Public catalog with product filtering, shopping cart, and checkout flow",
      "printshop.feature.admin": "Admin Dashboard",
      "printshop.feature.admin.desc": "Complete back-office with inventory, orders, customers, suppliers, and activity logs",
      "printshop.feature.invoicing": "PDF Invoicing & Reports",
      "printshop.feature.invoicing.desc": "Generate invoices with React-PDF and export detailed Excel reports with ExcelJS",
      "printshop.feature.auth": "Auth & Rate Limiting",
      "printshop.feature.auth.desc": "Supabase authentication with role-based access and Upstash Redis rate limiting",
      "printshop.gallery.invoicing": "Invoicing",
      "printshop.gallery.logs": "Activity Log",
      "printshop.gallery.reports": "Reports",

      // Folium Detail Page
      "folium.breadcrumb.title": "Folium Labs",
      "folium.info.title": "Project information",
      "folium.info.date.label": "Project Date",
      "folium.info.date.value": "2026 - Present",
      "folium.info.category.label": "Category",
      "folium.info.category.value": "Web Development (SaaS)",
      "folium.info.client.label": "Client",
      "folium.info.client.value": "Folium Labs",
      "folium.info.url.label": "Website",
      "folium.func.title": "Functionality",
      "folium.func.description":
        "Multi-page website for an academic and technology services agency targeting university students in Honduras. Features 26 services catalog, SEO-optimized blog with 60+ articles, pricing pages, testimonials, WhatsApp and email conversión funnels, and full bilingual support (ES/EN). Built with Next.js 16, TypeScript, Tailwind CSS, MDX for blog content, Resend for transactional emails, and Motion for animations.",
      "folium.feature.blog": "SEO Blog (60+ Articles)",
      "folium.feature.blog.desc": "MDX-powered blog with categories, reading time, and optimized for search engines",
      "folium.feature.services": "Services Catalog (26)",
      "folium.feature.services.desc": "Filterable catalog of academic and technical services with detailed descriptions",
      "folium.feature.conversión": "Conversión Funnels",
      "folium.feature.conversión.desc": "WhatsApp and email integration with Resend for lead capture and transactional emails",
      "folium.feature.i18n": "Bilingual (ES/EN)",
      "folium.feature.i18n.desc": "Full internationalization with localized URLs, content, and SEO meta tags",
      "folium.gallery.testimonials": "Testimonials",
      "folium.gallery.faq": "FAQ",

      "arca.breadcrumb.title": "El Arca Honduras",
      "arca.info.title": "Project information",
      "arca.info.date.label": "Project Date",
      "arca.info.date.value": "2026 - Present",
      "arca.info.category.label": "Category",
      "arca.info.category.value": "Web Development (Non-Profit)",
      "arca.info.client.label": "Client",
      "arca.info.client.value": "El Arca Honduras (Volunteer)",
      "arca.info.url.label": "Website",
      "arca.func.title": "Functionality",
      "arca.func.description":
        "Institutional website for El Arca Honduras, a non-profit organization building communities for people with and without intellectual disabilities since 1977. Features a blog with MDX content, photo gallery, community pages, donation integration, SEO optimization, and full internationalization in 5 languages (Spanish, English, French, Portuguese, German). Built with Next.js 15, TypeScript, Tailwind CSS, and Playwright for E2E testing.",
      "arca.feature.blog": "Blog & Content",
      "arca.feature.blog.desc": "MDX-powered blog with rich content, categories, and SEO-optimized articles",
      "arca.feature.gallery": "Photo Gallery",
      "arca.feature.gallery.desc": "Filterable gallery showcasing community events, daily life, and programs",
      "arca.feature.i18n": "5 Languages",
      "arca.feature.i18n.desc": "Full internationalization in Spanish, English, French, Portuguese, and German with next-intl",
      "arca.feature.seo": "SEO & Performance",
      "arca.feature.seo.desc": "Optimized schemas, structured data, hCaptcha protection, and Playwright E2E testing",
      "arca.gallery.home": "Home Mobile",
      "arca.gallery.gallery": "Gallery Mobile",

      // Testimonials Section
      "testimonials.title": "Testimonials",
      "testimonials.description":
        "Here are some testimonials from colleagues, professors, and clients who have worked with me:",

      // Contact Section
      "contact.title": "Contact",
      "contact.description":
        "Feel free to reach out if you would like to get in touch for a more engaging conversation:",
      "contact.location": "Location:",
      "contact.email": "Email:",
      "contact.phone": "Phone:",

      // Prizio Project Page
      "prizio.breadcrumb.title": "Prizio App",
      "prizio.info.title": "Project information",
      "prizio.info.date.label": "Project Date",
      "prizio.info.date.value": "2025 - Present",
      "prizio.info.category.label": "Category",
      "prizio.info.category.value": "Mobile Development (Android & iOS)",
      "prizio.info.client.label": "Client",
      "prizio.info.client.value": "Personal Project",
      "prizio.info.repo": "Private Repository",
      "prizio.func.title": "Functionality",
      "prizio.func.description":
        "Prizio is a cross-platform mobile application for price comparison built with Flutter and Dart. It allows users to scan product barcodes, compare prices across multiple stores, set price alerts, create shopping lists, and view price trend charts. The backend is powered by Firebase (Firestore, Authentication, Cloud Functions) with a Python/FastAPI service handling bot-based price scraping. The app features real-time data synchronization, push notifications, and a clean Material Design interface.",

      // Pharmacy Project Page
      "pharmacy.breadcrumb.title": "Hedman Garcia Pharmacy",
      "pharmacy.info.title": "Project information",
      "pharmacy.info.date.label": "Project Date",
      "pharmacy.info.date.value": "2024",
      "pharmacy.info.category.label": "Category",
      "pharmacy.info.category.value": "Web Development",
      "pharmacy.info.client.label": "Client",
      "pharmacy.info.client.value": "Personal Project",
      "pharmacy.info.repo": "View on GitHub",
      "pharmacy.func.title": "Functionality",
      "pharmacy.func.description":
        "A complete pharmacy management system with a modern, responsive UI. Features include secure authentication with email recovery via SendGrid, real-time inventory tracking with stock alerts, billing and receipt management, role-based user administration (Admin/Cashier), and a reporting dashboard. Fully responsive design optimized for desktop and mobile devices.",

      // Spotify Project Page
      "spotify.breadcrumb.title": "Spotify Playlist Generator",
      "spotify.info.title": "Project information",
      "spotify.info.date.label": "Project Date",
      "spotify.info.date.value": "December 2024",
      "spotify.info.category.label": "Category",
      "spotify.info.category.value": "Web Development",
      "spotify.info.client.label": "Client",
      "spotify.info.client.value": "Personal Project",
      "spotify.info.repo": "View on GitHub",
      "spotify.func.title": "Functionality",
      "spotify.func.description":
        "A full-featured Spotify playlist generator with OAuth authentication, song search, mood-based generation (energy, danceability, positivity, tempo sliders), and direct playlist export to your Spotify account. Features include browsing your top tracks, saved music, and generated playlists. Built with React, Node.js, and the Spotify Web API. Supports English and Spanish (i18n).",
    },
    es: {
      // Navigation
      "nav.home": "Inicio",
      "nav.about": "Acerca",
      "nav.resume": "CV",
      "nav.portfolio": "Portafolio",
      "nav.testimonials": "Testimonios",
      "nav.contact": "Contacto",

      // Hero
      "hero.greeting": "Soy ",
      "hero.status": "Disponible para trabajar",

      // About Section
      "about.title": "Acerca de mi",
      "about.description":
        "Ingeniero en Sistemás con más de 3 años de experiencia en desarrollo web full-stack, automatización QA y desarrollo de aplicaciónes móviles. He lanzado 5+ aplicaciónes web en producción con Next.js, 2 apps móviles multiplataforma con Flutter, y mantengo 300+ tests automatizados con Cypress y Playwright para plataformás de e-commerce. Trabajo con stacks modernos como React, TypeScript, Tailwind CSS, Firebase, Supabase y PHP/Yii2.",
      "about.role":
        "Desarrollador Full-Stack | Next.js, React, Flutter y Automatización QA",
      "about.detail":
        "Me apasiona construir soluciones de software de alta calidad en todo el stack. Desde aplicaciónes web responsivas con Next.js y React, hasta apps móviles multiplataforma con Flutter, y automatización robusta de pruebas con Cypress y Playwright. Me desenvuelvo en entornos remotos y colaborativos, comprometido con entregar código limpio, eficiente y bien testeado.",
      "about.birthday": "Cumpleaños:",
      "about.phone": "Teléfono:",
      "about.age": "Edad:",
      "about.degree": "Titulo:",
      "about.email": "Correo:",
      "about.city": "Ciudad:",
      "about.degree.value": "Ingenieria en Sistemas",
      "about.closing":
        "Mas alla de mi rol principal, he construido aplicaciónes en producción para clientes en diversas industrias como e-commerce, educación, agricultura y organizaciónes sin fines de lucro. Siempre estoy explorando nuevas tecnologías y contribuyendo a proyectos open-source.",

      // Skills Section
      "skills.title": "Habilidades",
      "skills.description":
        "A lo largo de mi carrera, he desarrollado experiencia en todo el ciclo de vida del desarrollo de software. Desde la construcción de aplicaciónes web en producción con Next.js y React, hasta el desarrollo de apps móviles multiplataforma con Flutter, automatización QA con Cypress y Playwright, y gestión de servicios backend con PHP/Yii2, Firebase y Supabase. Despliego en Vercel y GCP, y monitoreo con Sentry.",

      // Resume Section
      "resume.title": "Curriculum",
      "resume.description":
        "Haz clic en los botones a continuación para descargar una versión en PDF de mi curriculum, que proporciona una descripción detallada de mi formación académica y experiencia profesional:",
      "resume.download.en": "Ingles",
      "resume.download.es": "Espanol",

      // Portfolio Section
      "portfolio.title": "Portafolio",
      "portfolio.description":
        "A continuación, encontraras una selección de proyectos en los que he trabajado, desde emprendimientos personales hasta aplicaciónes profesionales:",
      "portfolio.filter.all": "Todos",
      "portfolio.filter.web": "Web",
      "portfolio.filter.mobile": "Móvil",
      "portfolio.filter.app": "App",

      // Stats
      "stats.apps": "Apps en Producción",
      "stats.tests": "Tests Automatizados",
      "stats.years": "Años de Experiencia",

      // Hero Aside
      "hero.sub": "Desarrollador Full-Stack — Tegucigalpa, HN",
      "hero.meta.stack.label": "Stack",
      "hero.meta.stack.value": "Next.js / React / Flutter",
      "hero.meta.focus.label": "Enfoque",
      "hero.meta.focus.value": "Full-Stack y Automatización QA",
      "hero.meta.based.label": "Ubicación",
      "hero.meta.based.value": "Honduras · Remoto",

      // Portfolio Featured
      "portfolio.featured.badge": "Proyecto Destacado",
      "portfolio.featured.desc": "Aplicación multiplataforma de comparación de precios para supermercados hondureños. Escanea códigos de barras, compara precios, configura alertas y crea listas inteligentes.",
      "portfolio.featured.view": "Ver Proyecto",
      "portfolio.featured.screenshots": "Capturas",

      // Portfolio Cards
      "portfolio.prizio.desc": "App móvil de comparación de precios para Honduras",
      "portfolio.pharmacy.desc": "Sistema de inventario, facturación y gestión de usuarios con autenticación",
      "portfolio.spotify.desc": "Busca canciones, genera playlists por estado de ánimo y exporta directamente a tu cuenta de Spotify",

      // Prizio Detail Page
      "prizio.feature.scanner": "Escaner de Códigos",
      "prizio.feature.scanner.desc": "Escanea códigos de barras para comparar precios en supermercados al instante",
      "prizio.feature.alerts": "Alertas de Precios",
      "prizio.feature.alerts.desc": "Configura alertas y recibe notificaciones cuando bajan los precios",
      "prizio.feature.lists": "Listas Inteligentes",
      "prizio.feature.lists.desc": "Crea listas que encuentran automaticamente la combinacion de tiendas más barata",
      "prizio.feature.trends": "Tendencias de Precios",
      "prizio.feature.trends.desc": "Consulta graficos historicos de precios para comprar en el momento adecuado",
      "prizio.meta.repo.label": "Repositorio",
      "prizio.gallery.home": "Inicio",
      "prizio.gallery.search": "Búsqueda",
      "prizio.gallery.lists": "Listas",
      "prizio.gallery.stores": "Tiendas",
      "prizio.back": "Volver al Portafolio",

      // Pharmacy Detail Page
      "pharmacy.feature.auth": "Autenticación Segura",
      "pharmacy.feature.auth.desc": "Sistema de inicio de sesión con recuperación de contraseña por correo via SendGrid",
      "pharmacy.feature.inventory": "Gestión de Inventario",
      "pharmacy.feature.inventory.desc": "Seguimiento completo de stock con categorías de productos, cantidades y alertas",
      "pharmacy.feature.billing": "Sistema de Facturación",
      "pharmacy.feature.billing.desc": "Creación y gestión de recibos de clientes con registros detallados",
      "pharmacy.feature.users": "Gestión de Usuarios",
      "pharmacy.feature.users.desc": "Panel de administración para controlar roles, permisos y privilegios",
      "pharmacy.meta.repo.label": "Repositorio",
      "pharmacy.gallery.dashboard": "Dashboard Móvil",
      "pharmacy.gallery.inventory": "Inventario Móvil",
      "pharmacy.gallery.reports": "Reportes Móvil",

      // Spotify Detail Page
      "spotify.feature.search": "Búsqueda de Canciones",
      "spotify.feature.search.desc": "Busca millones de canciones usando la API Web de Spotify con resultados en tiempo real",
      "spotify.feature.mood": "Generación por Estado de Ánimo",
      "spotify.feature.mood.desc": "Genera playlists ajustando controles de energía, bailabilidad, positividad y tempo",
      "spotify.feature.export": "Exportacion Directa",
      "spotify.feature.export.desc": "Exportacion con un clic de playlists generadas directamente a tu cuenta de Spotify via OAuth",
      "spotify.feature.i18n": "Bilingue (EN/ES)",
      "spotify.feature.i18n.desc": "Soporte completo de internacionalización con interfaces en inglés y español",
      "spotify.meta.repo.label": "Repositorio",
      "spotify.gallery.mobile": "Móvil",

      // Portfolio Cards
      "portfolio.arca.desc": "Sitio web sin fines de lucro con blog, galeria, donaciónes y soporte en 5 idiomás (ES/EN/FR/PT/DE)",

      // Arca Detail Page
      // Portfolio Cards
      "portfolio.printshop.desc": "Plataforma e-commerce con panel admin, facturación y gestión de inventario",
      "portfolio.folium.desc": "Plataforma de servicios académicos con 60+ artículos SEO y catálogo de 26 servicios",

      // PrintShop Detail Page
      "printshop.breadcrumb.title": "PrintShop 504",
      "printshop.info.title": "Información del proyecto",
      "printshop.info.date.label": "Fecha del proyecto",
      "printshop.info.date.value": "2026 - Presente",
      "printshop.info.category.label": "Categoría",
      "printshop.info.category.value": "Plataforma E-Commerce",
      "printshop.info.client.label": "Cliente",
      "printshop.info.client.value": "PrintShop 504",
      "printshop.info.repo.label": "Repositorio",
      "printshop.func.title": "Funcionalidad",
      "printshop.func.description":
        "Plataforma e-commerce completa para negocio de sublimación en Honduras (camisetas, bolsos, tazas personalizadas). Incluye tienda pública con carrito de compras, panel admin con gestión de inventario, seguimiento de ordenes, facturación con generación de PDF, gestión de clientes, seguimiento de proveedores, registros de actividad, reportes Excel y control de acceso por roles. Construido con Next.js, Supabase, Tailwind CSS, React-PDF, Resend, Zustand y Upstash Redis.",
      "printshop.feature.store": "Tienda E-Commerce",
      "printshop.feature.store.desc": "Catálogo público con filtros de productos, carrito de compras y flujo de checkout",
      "printshop.feature.admin": "Panel de Administracion",
      "printshop.feature.admin.desc": "Back-office completo con inventario, ordenes, clientes, proveedores y registros de actividad",
      "printshop.feature.invoicing": "Facturación PDF y Reportes",
      "printshop.feature.invoicing.desc": "Generación de facturas con React-PDF y exportación de reportes detallados en Excel con ExcelJS",
      "printshop.feature.auth": "Autenticación y Rate Limiting",
      "printshop.feature.auth.desc": "Autenticación Supabase con acceso basado en roles y rate limiting con Upstash Redis",
      "printshop.gallery.invoicing": "Facturación",
      "printshop.gallery.logs": "Registros",
      "printshop.gallery.reports": "Reportes",

      // Folium Detail Page
      "folium.breadcrumb.title": "Folium Labs",
      "folium.info.title": "Información del proyecto",
      "folium.info.date.label": "Fecha del proyecto",
      "folium.info.date.value": "2026 - Presente",
      "folium.info.category.label": "Categoría",
      "folium.info.category.value": "Desarrollo Web (SaaS)",
      "folium.info.client.label": "Cliente",
      "folium.info.client.value": "Folium Labs",
      "folium.info.url.label": "Sitio Web",
      "folium.func.title": "Funcionalidad",
      "folium.func.description":
        "Sitio web multi-pagina para agencia de servicios académicos y tecnologicos dirigida a estudiantes universitarios en Honduras. Incluye catálogo de 26 servicios, blog SEO con 60+ artículos, paginas de precios, testimonios, embudos de conversión por WhatsApp y correo, y soporte bilingue completo (ES/EN). Construido con Next.js 16, TypeScript, Tailwind CSS, MDX para el blog, Resend para emails, y Motion para animaciones.",
      "folium.feature.blog": "Blog SEO (60+ Articulos)",
      "folium.feature.blog.desc": "Blog con MDX, categorías, tiempo de lectura y optimizado para motores de búsqueda",
      "folium.feature.services": "Catálogo de Servicios (26)",
      "folium.feature.services.desc": "Catálogo filtrable de servicios académicos y técnicos con descripciónes detalladas",
      "folium.feature.conversión": "Embudos de Conversión",
      "folium.feature.conversión.desc": "Integración con WhatsApp y correo via Resend para captura de leads y emails transaccionales",
      "folium.feature.i18n": "Bilingue (ES/EN)",
      "folium.feature.i18n.desc": "Internacionalización completa con URLs, contenido y meta tags SEO localizados",
      "folium.gallery.testimonials": "Testimonios",
      "folium.gallery.faq": "Preguntas frecuentes",

      "arca.breadcrumb.title": "El Arca Honduras",
      "arca.info.title": "Información del proyecto",
      "arca.info.date.label": "Fecha del proyecto",
      "arca.info.date.value": "2026 - Presente",
      "arca.info.category.label": "Categoría",
      "arca.info.category.value": "Desarrollo Web (Sin Fines de Lucro)",
      "arca.info.client.label": "Cliente",
      "arca.info.client.value": "El Arca Honduras (Voluntariado)",
      "arca.info.url.label": "Sitio Web",
      "arca.func.title": "Funcionalidad",
      "arca.func.description":
        "Sitio web institucional de El Arca Honduras, organización sin fines de lucro que construye comunidades para personas con y sin discapacidades intelectuales desde 1977. Incluye blog con contenido MDX, galeria de fotos, paginas de comunidades, integración de donaciónes, optimización SEO e internacionalización completa en 5 idiomás (español, inglés, francés, portugués, alemán). Construido con Next.js 15, TypeScript, Tailwind CSS y Playwright para pruebas E2E.",
      "arca.feature.blog": "Blog y Contenido",
      "arca.feature.blog.desc": "Blog con MDX, contenido enriquecido, categorías y artículos optimizados para SEO",
      "arca.feature.gallery": "Galeria de Fotos",
      "arca.feature.gallery.desc": "Galeria filtrable mostrando eventos comunitarios, vida diaria y programas",
      "arca.feature.i18n": "5 Idiomas",
      "arca.feature.i18n.desc": "Internacionalización completa en español, inglés, francés, portugués y alemán con next-intl",
      "arca.feature.seo": "SEO y Rendimiento",
      "arca.feature.seo.desc": "Schemás optimizados, datos estructurados, proteccion hCaptcha y pruebas E2E con Playwright",
      "arca.gallery.home": "Inicio Móvil",
      "arca.gallery.gallery": "Galeria Móvil",

      // Testimonials Section
      "testimonials.title": "Testimonios",
      "testimonials.description":
        "Aqui hay algunos testimonios de colegas, profesores y clientes con quienes he trabajado:",

      // Contact Section
      "contact.title": "Contacto",
      "contact.description":
        "No dudes en comunicarte si deseas ponerte en contacto para una conversacion más detallada:",
      "contact.location": "Ubicación:",
      "contact.email": "Correo:",
      "contact.phone": "Teléfono:",

      // Prizio Project Page
      "prizio.breadcrumb.title": "Prizio App",
      "prizio.info.title": "Información del proyecto",
      "prizio.info.date.label": "Fecha del proyecto",
      "prizio.info.date.value": "2025 - Presente",
      "prizio.info.category.label": "Categoría",
      "prizio.info.category.value": "Desarrollo Móvil (Android e iOS)",
      "prizio.info.client.label": "Cliente",
      "prizio.info.client.value": "Proyecto Personal",
      "prizio.info.repo": "Repositorio Privado",
      "prizio.func.title": "Funcionalidad",
      "prizio.func.description":
        "Prizio es una aplicación móvil multiplataforma para comparación de precios construida con Flutter y Dart. Permite a los usuarios escanear códigos de barras de productos, comparar precios en multiples tiendas, configurar alertas de precios, crear listas de compras y ver graficos de tendencias de precios. El backend esta impulsado por Firebase (Firestore, Authentication, Cloud Functions) con un servicio Python/FastAPI que maneja el scraping de precios mediante bots. La aplicación cuenta con sincronizacion de datos en tiempo real, notificaciones push y una interfaz limpia de Material Design.",

      // Pharmacy Project Page
      "pharmacy.breadcrumb.title": "Farmacia Hedman Garcia",
      "pharmacy.info.title": "Información del proyecto",
      "pharmacy.info.date.label": "Fecha del proyecto",
      "pharmacy.info.date.value": "2024",
      "pharmacy.info.category.label": "Categoría",
      "pharmacy.info.category.value": "Desarrollo Web",
      "pharmacy.info.client.label": "Cliente",
      "pharmacy.info.client.value": "Proyecto Personal",
      "pharmacy.info.repo": "Ver en GitHub",
      "pharmacy.func.title": "Funcionalidad",
      "pharmacy.func.description":
        "Sistema completo de gestión farmaceutica con interfaz moderna y responsiva. Incluye autenticación segura con recuperación por correo via SendGrid, seguimiento de inventario en tiempo real con alertas de stock, gestión de facturación y recibos, administración de usuarios con roles (Admin/Cajero), y un dashboard de reportes. Diseño totalmente responsivo optimizado para escritorio y móvil.",

      // Spotify Project Page
      "spotify.breadcrumb.title": "Generador de Playlists de Spotify",
      "spotify.info.title": "Información del proyecto",
      "spotify.info.date.label": "Fecha del proyecto",
      "spotify.info.date.value": "Diciembre 2024",
      "spotify.info.category.label": "Categoría",
      "spotify.info.category.value": "Desarrollo Web",
      "spotify.info.client.label": "Cliente",
      "spotify.info.client.value": "Proyecto Personal",
      "spotify.info.repo": "Ver en GitHub",
      "spotify.func.title": "Funcionalidad",
      "spotify.func.description":
        "Generador de playlists de Spotify con autenticación OAuth, búsqueda de canciones, generación por estado de ánimo (controles de energía, bailabilidad, positividad y tempo), y exportación directa a tu cuenta de Spotify. Incluye navegación de tus canciones más escuchadas, musica guardada y playlists generadas. Construido con React, Node.js y la API Web de Spotify. Soporta inglés y español (i18n).",
    },
  };

  let currentLang = "en";

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("portfolio-lang", lang);

    // Update all elements with data-i18n attribute
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update elements with data-i18n-placeholder attribute
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (translations[lang] && translations[lang][key]) {
        el.setAttribute("placeholder", translations[lang][key]);
      }
    });

    // Update the lang toggle button text
    var langBtn = document.getElementById("lang-toggle");
    if (langBtn) {
      langBtn.textContent = lang === "en" ? "ES" : "EN";
      langBtn.setAttribute(
        "title",
        lang === "en" ? "Cambiar a Espanol" : "Switch to English"
      );
    }

    // Update html lang attribute
    document.documentElement.lang = lang;

    // Update Typed.js strings if on index page
    var typedEl = document.querySelector(".typed");
    if (typedEl) {
      var typedStrings =
        lang === "en"
          ? "Full-Stack Developer, QA Engineer, Mobile Developer, Next.js Specialist"
          : "Desarrollador Full-Stack, QA Engineer, Mobile Developer, Next.js Specialist";
      typedEl.setAttribute("data-typed-items", typedStrings);

      // Reinitialize Typed.js
      if (window._typedInstance) {
        window._typedInstance.destroy();
      }
      window._typedInstance = new Typed(".typed", {
        strings: typedStrings.split(","),
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
      });
    }

    // Update resume download button visibility/links
    var resumeBtnEn = document.getElementById("resume-btn-en");
    var resumeBtnEs = document.getElementById("resume-btn-es");
    if (resumeBtnEn && resumeBtnEs) {
      if (lang === "en") {
        resumeBtnEn.classList.add("resume-btn-primary");
        resumeBtnEn.classList.remove("resume-btn-secondary");
        resumeBtnEs.classList.add("resume-btn-secondary");
        resumeBtnEs.classList.remove("resume-btn-primary");
      } else {
        resumeBtnEs.classList.add("resume-btn-primary");
        resumeBtnEs.classList.remove("resume-btn-secondary");
        resumeBtnEn.classList.add("resume-btn-secondary");
        resumeBtnEn.classList.remove("resume-btn-primary");
      }
    }
  }

  function getDefaultLanguage() {
    // Check localStorage first
    var saved = localStorage.getItem("portfolio-lang");
    if (saved && (saved === "en" || saved === "es")) {
      return saved;
    }
    // Detect browser language
    var browserLang = navigator.language || navigator.userLanguage;
    if (browserLang && browserLang.startsWith("es")) {
      return "es";
    }
    return "en";
  }

  function initI18n() {
    var defaultLang = getDefaultLanguage();

    // Set up toggle button click handler
    var langBtn = document.getElementById("lang-toggle");
    if (langBtn) {
      langBtn.addEventListener("click", function () {
        var newLang = currentLang === "en" ? "es" : "en";
        setLanguage(newLang);
      });
    }

    // Apply default language
    setLanguage(defaultLang);
  }

  // Initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initI18n);
  } else {
    initI18n();
  }

  // Expose for external use
  window.i18n = {
    setLanguage: setLanguage,
    getCurrentLang: function () {
      return currentLang;
    },
  };
})();

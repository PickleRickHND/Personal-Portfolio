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
        "Systems Engineer with over 3 years of experience in full-stack web development, QA automation, and mobile app development. I have shipped 6+ production Next.js web applications, 2 cross-platform Flutter mobile apps, and maintained 600+ automated tests with Cypress and Playwright for e-commerce platforms. I work with modern stacks including React, TypeScript, Tailwind CSS, Firebase, Supabase, and PHP/Yii2.",
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
        "Click the buttons below to download a PDF version of my resume, which provides a detailed overview of my educational background and professional experience:",
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
      "pharmacy.info.repo": "Want to check my code?",
      "pharmacy.func.title": "Functionality",
      "pharmacy.func.description":
        "This project is a website for a pharmacy. It has a login system for the employees to access the website including an advanced email password recovery. This project has the option to check the stock of the pharmacy. The website also has a user management area where admins can control basic user privileges. Also, this website includes a billing section to manage receipts and create new receipts for customers. The website also is fully responsive, check it out!",

      // Spotify Project Page
      "spotify.breadcrumb.title": "Spotify Playlist Generator",
      "spotify.info.title": "Project information",
      "spotify.info.date.label": "Project Date",
      "spotify.info.date.value": "December 2023",
      "spotify.info.category.label": "Category",
      "spotify.info.category.value": "Web Development",
      "spotify.info.client.label": "Client",
      "spotify.info.client.value": "Personal Project",
      "spotify.info.repo": "Want to check my code?",
      "spotify.func.title": "Functionality",
      "spotify.func.description":
        "This project is an application that allows the user to create a playlist based on the user's search and then export it to Spotify. The application uses the Spotify API to search for songs and create the playlist. The application also uses the Spotify API to authenticate the user and get the user's information. The application is built using React and Node.js.",
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
        "Ingeniero en Sistemas con mas de 3 anios de experiencia en desarrollo web full-stack, automatizacion QA y desarrollo de aplicaciones moviles. He lanzado 6+ aplicaciones web en produccion con Next.js, 2 apps moviles multiplataforma con Flutter, y mantengo 600+ tests automatizados con Cypress y Playwright para plataformas de e-commerce. Trabajo con stacks modernos como React, TypeScript, Tailwind CSS, Firebase, Supabase y PHP/Yii2.",
      "about.role":
        "Desarrollador Full-Stack | Next.js, React, Flutter y Automatizacion QA",
      "about.detail":
        "Me apasiona construir soluciones de software de alta calidad en todo el stack. Desde aplicaciones web responsivas con Next.js y React, hasta apps moviles multiplataforma con Flutter, y automatizacion robusta de pruebas con Cypress y Playwright. Me desenvuelvo en entornos remotos y colaborativos, comprometido con entregar codigo limpio, eficiente y bien testeado.",
      "about.birthday": "Cumpleanos:",
      "about.phone": "Telefono:",
      "about.age": "Edad:",
      "about.degree": "Titulo:",
      "about.email": "Correo:",
      "about.city": "Ciudad:",
      "about.degree.value": "Ingenieria en Sistemas",
      "about.closing":
        "Mas alla de mi rol principal, he construido aplicaciones en produccion para clientes en diversas industrias como e-commerce, educacion, agricultura y organizaciones sin fines de lucro. Siempre estoy explorando nuevas tecnologias y contribuyendo a proyectos open-source.",

      // Skills Section
      "skills.title": "Habilidades",
      "skills.description":
        "A lo largo de mi carrera, he desarrollado experiencia en todo el ciclo de vida del desarrollo de software. Desde la construccion de aplicaciones web en produccion con Next.js y React, hasta el desarrollo de apps moviles multiplataforma con Flutter, automatizacion QA con Cypress y Playwright, y gestion de servicios backend con PHP/Yii2, Firebase y Supabase. Despliego en Vercel y GCP, y monitoreo con Sentry.",

      // Resume Section
      "resume.title": "Curriculum",
      "resume.description":
        "Haz clic en los botones a continuacion para descargar una version en PDF de mi curriculum, que proporciona una descripcion detallada de mi formacion academica y experiencia profesional:",
      "resume.download.en": "Ingles",
      "resume.download.es": "Espanol",

      // Portfolio Section
      "portfolio.title": "Portafolio",
      "portfolio.description":
        "A continuacion, encontraras una seleccion de proyectos en los que he trabajado, desde emprendimientos personales hasta aplicaciones profesionales:",
      "portfolio.filter.all": "Todos",
      "portfolio.filter.web": "Web",
      "portfolio.filter.mobile": "Movil",
      "portfolio.filter.app": "App",

      // Testimonials Section
      "testimonials.title": "Testimonios",
      "testimonials.description":
        "Aqui hay algunos testimonios de colegas, profesores y clientes con quienes he trabajado:",

      // Contact Section
      "contact.title": "Contacto",
      "contact.description":
        "No dudes en comunicarte si deseas ponerte en contacto para una conversacion mas detallada:",
      "contact.location": "Ubicacion:",
      "contact.email": "Correo:",
      "contact.phone": "Telefono:",

      // Prizio Project Page
      "prizio.breadcrumb.title": "Prizio App",
      "prizio.info.title": "Informacion del proyecto",
      "prizio.info.date.label": "Fecha del proyecto",
      "prizio.info.date.value": "2025 - Presente",
      "prizio.info.category.label": "Categoria",
      "prizio.info.category.value": "Desarrollo Movil (Android e iOS)",
      "prizio.info.client.label": "Cliente",
      "prizio.info.client.value": "Proyecto Personal",
      "prizio.info.repo": "Repositorio Privado",
      "prizio.func.title": "Funcionalidad",
      "prizio.func.description":
        "Prizio es una aplicacion movil multiplataforma para comparacion de precios construida con Flutter y Dart. Permite a los usuarios escanear codigos de barras de productos, comparar precios en multiples tiendas, configurar alertas de precios, crear listas de compras y ver graficos de tendencias de precios. El backend esta impulsado por Firebase (Firestore, Authentication, Cloud Functions) con un servicio Python/FastAPI que maneja el scraping de precios mediante bots. La aplicacion cuenta con sincronizacion de datos en tiempo real, notificaciones push y una interfaz limpia de Material Design.",

      // Pharmacy Project Page
      "pharmacy.breadcrumb.title": "Farmacia Hedman Garcia",
      "pharmacy.info.title": "Informacion del proyecto",
      "pharmacy.info.date.label": "Fecha del proyecto",
      "pharmacy.info.date.value": "2024",
      "pharmacy.info.category.label": "Categoria",
      "pharmacy.info.category.value": "Desarrollo Web",
      "pharmacy.info.client.label": "Cliente",
      "pharmacy.info.client.value": "Proyecto Personal",
      "pharmacy.info.repo": "Quieres ver mi codigo?",
      "pharmacy.func.title": "Funcionalidad",
      "pharmacy.func.description":
        "Este proyecto es un sitio web para una farmacia. Tiene un sistema de inicio de sesion para que los empleados accedan al sitio web, incluyendo una recuperacion avanzada de contrasena por correo electronico. Este proyecto tiene la opcion de verificar el inventario de la farmacia. El sitio web tambien tiene un area de gestion de usuarios donde los administradores pueden controlar los privilegios basicos de los usuarios. Ademas, este sitio web incluye una seccion de facturacion para administrar recibos y crear nuevos recibos para los clientes. El sitio web es totalmente responsive, echale un vistazo!",

      // Spotify Project Page
      "spotify.breadcrumb.title": "Generador de Playlists de Spotify",
      "spotify.info.title": "Informacion del proyecto",
      "spotify.info.date.label": "Fecha del proyecto",
      "spotify.info.date.value": "Diciembre 2023",
      "spotify.info.category.label": "Categoria",
      "spotify.info.category.value": "Desarrollo Web",
      "spotify.info.client.label": "Cliente",
      "spotify.info.client.value": "Proyecto Personal",
      "spotify.info.repo": "Quieres ver mi codigo?",
      "spotify.func.title": "Funcionalidad",
      "spotify.func.description":
        "Este proyecto es una aplicacion que permite al usuario crear una playlist basada en su busqueda y luego exportarla a Spotify. La aplicacion usa la API de Spotify para buscar canciones y crear la playlist. La aplicacion tambien usa la API de Spotify para autenticar al usuario y obtener su informacion. La aplicacion esta construida usando React y Node.js.",
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
          ? "Systems Engineer, QA Automation, Full-Stack Developer, Mobile Developer"
          : "Ingeniero en Sistemas, QA Automation, Full-Stack Developer, Mobile Developer";
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

import { chromium } from "@playwright/test";
import { resolve } from "node:path";

// Captura screenshots de proyectos desde sus sitios en producción para la
// galería de los case studies. Uso: node scripts/project-capture.mjs [id...]
// (sin argumentos captura todos los proyectos definidos abajo).

const OUT = resolve("./public/img/portfolio");

// Proporciones de los frames: desktop 16:10 (browser-frame / gallery-carousel)
// y mobile 9:19 (carrusel "phone").
const DESKTOP = { width: 1440, height: 900, deviceScaleFactor: 1 };
const MOBILE = {
  width: 390,
  height: 823,
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
};

const projects = {
  folium: {
    // Consentimiento rechazado: sin banner y sin hits de analytics.
    storage: { "folium-cookie-consent": "declined" },
    shots: [
      { file: "folium1.png", device: DESKTOP, url: "https://www.folium-labs.com/es" },
      { file: "folium2.png", device: DESKTOP, url: "https://www.folium-labs.com/es/servicios" },
      { file: "folium3.png", device: DESKTOP, url: "https://www.folium-labs.com/es/blog/alfa-cronbach-guia" },
      { file: "folium4.png", device: MOBILE, url: "https://www.folium-labs.com/es" },
      { file: "folium5.png", device: MOBILE, url: "https://www.folium-labs.com/es/servicios" },
    ],
  },
  arca: {
    storage: { "analytics-consent": "denied" },
    shots: [
      { file: "arca1.png", device: DESKTOP, url: "https://www.elarcadehonduras.org/es" },
      { file: "arca2.png", device: DESKTOP, url: "https://www.elarcadehonduras.org/es/programas" },
      { file: "arca3.png", device: DESKTOP, url: "https://www.elarcadehonduras.org/es", anchor: "#galeria" },
      { file: "arca_m1.png", device: MOBILE, url: "https://www.elarcadehonduras.org/es" },
      { file: "arca_m2.png", device: MOBILE, url: "https://www.elarcadehonduras.org/es", anchor: "#donativos" },
    ],
  },
};

async function capture(browser, storage, shot) {
  const { width, height, ...deviceOpts } = shot.device;
  const ctx = await browser.newContext({ viewport: { width, height }, ...deviceOpts });
  await ctx.addInitScript((entries) => {
    for (const [key, value] of Object.entries(entries)) {
      localStorage.setItem(key, value);
    }
  }, storage);

  const page = await ctx.newPage();
  await page.goto(shot.url, { waitUntil: "networkidle", timeout: 60_000 });

  // Recorre toda la página para disparar las animaciones whileInView.
  await page.evaluate(async () => {
    const total = document.documentElement.scrollHeight;
    for (let y = 0; y <= total; y += 500) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
  });

  if (shot.anchor) {
    await page.locator(shot.anchor).scrollIntoViewIfNeeded();
  }
  await page.waitForTimeout(1500);

  // Oculta flotantes (WhatsApp, popups, drawers) y conserva solo la barra
  // fija superior de navegación.
  await page.evaluate(() => {
    for (const el of document.querySelectorAll("body *")) {
      if (getComputedStyle(el).position !== "fixed") continue;
      const rect = el.getBoundingClientRect();
      const isTopBar = rect.top <= 1 && rect.height > 0 && rect.height < 160;
      if (!isTopBar) el.style.setProperty("visibility", "hidden", "important");
    }
  });

  await page.screenshot({
    path: resolve(OUT, shot.file),
    animations: "disabled",
  });
  await ctx.close();
}

const ids = process.argv.slice(2);
const selected = ids.length > 0 ? ids : Object.keys(projects);

const browser = await chromium.launch();
for (const id of selected) {
  const project = projects[id];
  if (!project) {
    console.error(`Proyecto desconocido: ${id}`);
    process.exitCode = 1;
    continue;
  }
  for (const shot of project.shots) {
    console.log(`-> ${id} · ${shot.file}`);
    await capture(browser, project.storage, shot);
  }
}
await browser.close();

console.log("done →", OUT);

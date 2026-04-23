import { chromium } from "@playwright/test";
import { mkdirSync } from "node:fs";
import { resolve } from "node:path";

const OUT = resolve("./screenshots");
mkdirSync(OUT, { recursive: true });

const NEXT = "http://localhost:4545";
const REF = "http://localhost:4546";

const pairs = [
  {
    label: "01-landing",
    ref: `${REF}/landing.html`,
    impl: `${NEXT}/en`,
  },
  {
    label: "02-prizio",
    ref: `${REF}/project-prizio.html`,
    impl: `${NEXT}/en/work/prizio`,
  },
  {
    label: "03-printshop",
    ref: `${REF}/project-printshop.html`,
    impl: `${NEXT}/en/work/printshop`,
  },
  {
    label: "04-pharmacy",
    ref: `${REF}/project-pharmacy.html`,
    impl: `${NEXT}/en/work/pharmacy`,
  },
];

async function capture(url, path, opts = {}) {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  const page = await ctx.newPage();
  await page.goto(url, { waitUntil: "networkidle", timeout: 60_000 });

  if (opts.waitForReady) {
    await page.waitForFunction(() => window.__ready === true, null, {
      timeout: 30_000,
    });
  }
  await page.waitForTimeout(800);

  // Disable content-visibility: auto so fullPage screenshots render off-screen
  // content. Triggers whileInView / IntersectionObserver reveals by scrolling
  // the whole page, then returning to the top.
  await page.addStyleTag({
    content: "* { content-visibility: visible !important; }",
  });
  await page.evaluate(async () => {
    const step = 600;
    const total = document.documentElement.scrollHeight;
    for (let y = 0; y <= total; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 150));
    }
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 600));
  });

  await page.screenshot({
    path,
    fullPage: true,
    animations: "disabled",
  });
  await browser.close();
}

for (const p of pairs) {
  console.log(`-> ${p.label} · ref`);
  await capture(p.ref, `${OUT}/${p.label}-ref.png`, { waitForReady: true });
  console.log(`-> ${p.label} · impl`);
  await capture(p.impl, `${OUT}/${p.label}-impl.png`);
}

console.log("done →", OUT);

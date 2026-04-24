import { chromium } from "@playwright/test";
import { mkdirSync } from "node:fs";
import { resolve } from "node:path";

const OUT = resolve("./screenshots/mobile");
mkdirSync(OUT, { recursive: true });

const BASE = "http://localhost:3000";
const targets = [
  { label: "01-landing", url: `${BASE}/en` },
  { label: "02-prizio", url: `${BASE}/en/work/prizio` },
  { label: "03-printshop", url: `${BASE}/en/work/printshop` },
  { label: "04-pharmacy", url: `${BASE}/en/work/pharmacy` },
];

const VIEWPORTS = [
  { name: "360", width: 360, height: 780 },
  { name: "390", width: 390, height: 844 },
  { name: "428", width: 428, height: 926 },
];

for (const vp of VIEWPORTS) {
  for (const t of targets) {
    const browser = await chromium.launch();
    const ctx = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
    });
    const page = await ctx.newPage();
    console.log(`-> ${t.label} @ ${vp.name}`);
    await page.goto(t.url, { waitUntil: "networkidle", timeout: 60_000 });
    await page.addStyleTag({
      content: "* { content-visibility: visible !important; }",
    });
    await page.evaluate(async () => {
      const step = 600;
      const total = document.documentElement.scrollHeight;
      for (let y = 0; y <= total; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 120));
      }
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 400));
    });
    await page.screenshot({
      path: `${OUT}/${t.label}-${vp.name}.png`,
      fullPage: true,
      animations: "disabled",
    });
    // Detect horizontal overflow
    const overflow = await page.evaluate(() => {
      return {
        bodyScrollWidth: document.body.scrollWidth,
        bodyClientWidth: document.body.clientWidth,
        docScrollWidth: document.documentElement.scrollWidth,
        innerWidth: window.innerWidth,
      };
    });
    console.log(
      `   overflow check: body=${overflow.bodyScrollWidth}/${overflow.bodyClientWidth}, doc=${overflow.docScrollWidth}/${overflow.innerWidth}`
    );
    await browser.close();
  }
}

console.log("\ndone →", OUT);

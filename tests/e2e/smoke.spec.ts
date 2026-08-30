import { expect, test } from "@playwright/test";

test.describe("Landing — EN", () => {
  test("loads hero and core sections", async ({ page }) => {
    await page.goto("/en");
    await expect(page).toHaveTitle(/Douglas Hedman/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Douglas"
    );
    await expect(
      page.getByText("Available for work", { exact: true })
    ).toBeVisible();
    await expect(page.locator("section#about")).toBeVisible();
    await expect(page.locator("section#work")).toBeVisible();
    await expect(page.locator("section#stack")).toBeVisible();
    await expect(page.locator("section#contact")).toBeVisible();
    await expect(page.getByText("Eight projects,")).toBeVisible();
  });

  test("renders all 8 project links", async ({ page }) => {
    await page.goto("/en");
    const projectLinks = page.locator('main a[href*="/work/"]');
    expect(await projectLinks.count()).toBeGreaterThanOrEqual(8);
  });

  test("resume link points to EN pdf", async ({ page }) => {
    await page.goto("/en");
    const resume = page.getByRole("link", { name: /Resume/i }).first();
    await expect(resume).toHaveAttribute(
      "href",
      /Douglas_Hedman_CV_2026_EN\.pdf/
    );
  });

  test("html lang is en and <main> is present", async ({ page }) => {
    await page.goto("/en");
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(page.locator("main")).toBeVisible();
  });
});

test.describe("Landing — ES", () => {
  test("shows Spanish hero copy", async ({ page }) => {
    await page.goto("/es");
    await expect(page).toHaveTitle(/Desarrollador Full-Stack/);
    await expect(page.getByText("Disponible", { exact: true })).toBeVisible();
    await expect(page.getByText("Ocho proyectos,")).toBeVisible();
    await expect(page.locator("html")).toHaveAttribute("lang", "es");
  });

  test("resume link points to ES pdf", async ({ page }) => {
    await page.goto("/es");
    const resume = page.getByRole("link", { name: /CV/i }).first();
    await expect(resume).toHaveAttribute(
      "href",
      /Douglas_Hedman_CV_2026_ES\.pdf/
    );
  });
});

test.describe("Language switch", () => {
  test("toggles EN → ES", async ({ page, viewport }) => {
    test.skip(
      (viewport?.width ?? 0) < 768,
      "Locale switcher click is covered at desktop viewport"
    );
    await page.goto("/en");
    await page
      .getByRole("button", { name: /switch to ES/i })
      .click();
    await expect(page).toHaveURL(/\/es/);
    await expect(page).toHaveTitle(/Desarrollador Full-Stack/);
  });

  test("toggles ES → EN", async ({ page, viewport }) => {
    test.skip(
      (viewport?.width ?? 0) < 768,
      "Locale switcher click is covered at desktop viewport"
    );
    await page.goto("/es");
    await page
      .getByRole("button", { name: /cambiar a EN/i })
      .click();
    await expect(page).toHaveURL(/\/en/);
    await expect(page).toHaveTitle(/Full-Stack Developer/);
  });
});

test.describe("Project detail — Prizio (EN)", () => {
  test("renders hero, gallery, outcomes and next project", async ({
    page,
  }) => {
    await page.goto("/en/work/prizio");
    await expect(page).toHaveTitle(/Prizio/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Prizio"
    );
    await expect(page.getByText("12,400+").first()).toBeVisible();
    await expect(
      page.getByRole("link", { name: /PrintShop 504/i }).first()
    ).toBeVisible();
  });

  test("navigates to next project", async ({ page, viewport }) => {
    test.skip(
      (viewport?.width ?? 0) < 768,
      "Click on next-project anchor is flaky on mobile emulator; covered at desktop viewport"
    );
    await page.goto("/en/work/prizio");
    const next = page.getByRole("link", { name: /PrintShop 504/i }).last();
    await next.scrollIntoViewIfNeeded();
    await next.click();
    await expect(page).toHaveURL(/\/en\/work\/printshop/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "PrintShop"
    );
  });
});

test.describe("Project detail — Prizio (ES)", () => {
  test("shows translated role/platform meta", async ({ page }) => {
    await page.goto("/es/work/prizio");
    await expect(page.getByText("Desarrollador Líder")).toBeVisible();
  });
});

test.describe("Last project wraps back to index", () => {
  test("Pharmacy links back to home", async ({ page }) => {
    await page.goto("/en/work/pharmacy");
    const backLink = page
      .getByRole("link", { name: /Back to index/i })
      .last();
    await expect(backLink).toHaveAttribute("href", /\/en$/);
  });
});

test.describe("SEO surfaces", () => {
  test("sitemap lists 18 URLs (2 landings + 16 projects)", async ({
    request,
  }) => {
    const r = await request.get("/sitemap.xml");
    expect(r.ok()).toBe(true);
    const body = await r.text();
    const urls = body.match(/<url>/g) ?? [];
    expect(urls.length).toBe(18);
    expect(body).toContain("/en/work/prizio");
    expect(body).toContain("/es/work/prizio");
    expect(body).toContain("x-default");
  });

  test("robots.txt responds 200", async ({ request }) => {
    const r = await request.get("/robots.txt");
    expect(r.ok()).toBe(true);
  });

  test("security headers are set", async ({ request }) => {
    const r = await request.get("/en");
    expect(r.headers()["content-security-policy"]).toBeTruthy();
    expect(r.headers()["x-frame-options"]).toBe("DENY");
    expect(r.headers()["referrer-policy"]).toBe(
      "strict-origin-when-cross-origin"
    );
  });

  test("JSON-LD Person is present", async ({ page }) => {
    await page.goto("/en");
    const json = await page
      .locator('script[type="application/ld+json"]')
      .innerHTML();
    const data = JSON.parse(json);
    expect(data["@type"]).toBe("Person");
    expect(data.name).toBe("Douglas Hedman");
    expect(data.knowsLanguage).toContain("en");
    expect(data.knowsLanguage).toContain("es");
  });
});

import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

import {
  getNextProject,
  getProject,
  portfolio,
  projects,
} from "../../src/lib/portfolio-data";

function flattenKeys(value: unknown, prefix = ""): string[] {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return [prefix];
  }

  return Object.entries(value).flatMap(([key, child]) =>
    flattenKeys(child, prefix ? `${prefix}.${key}` : key)
  );
}

describe("portfolio data", () => {
  it("defines seven uniquely addressable projects with tracked images", () => {
    expect(projects).toHaveLength(7);
    expect(new Set(projects.map((project) => project.id)).size).toBe(7);
    expect(new Set(projects.map((project) => project.slug)).size).toBe(7);

    for (const project of projects) {
      const images = [
        project.image,
        project.image2,
        ...project.gallery,
        ...(project.mobileGallery ?? []),
      ];

      expect(images.length).toBeGreaterThan(1);
      for (const image of images) {
        expect(existsSync(resolve("public", image.slice(1)))).toBe(true);
      }
    }
  });

  it("keeps lookup and sequential navigation aligned with display order", () => {
    expect(getProject("prizio")?.name).toBe("Prizio");
    expect(getProject("missing")).toBeUndefined();
    expect(getNextProject("prizio")?.slug).toBe("printshop");
    expect(getNextProject("arca")?.slug).toBe("pharmacy");
    expect(getNextProject("pharmacy")).toBeNull();
    expect(getNextProject("missing")).toBeNull();
  });

  it("keeps English and Spanish message keys synchronized", () => {
    const en = JSON.parse(readFileSync(resolve("messages/en.json"), "utf8"));
    const es = JSON.parse(readFileSync(resolve("messages/es.json"), "utf8"));
    const enKeys = flattenKeys(en).sort();
    const esKeys = flattenKeys(es).sort();

    expect(esKeys).toEqual(enKeys);
    for (const project of projects) {
      expect(en.projects[project.i18nKey]).toBeDefined();
      expect(es.projects[project.i18nKey]).toBeDefined();
    }
  });

  it("keeps the public stack aligned with the current project toolchains", () => {
    expect(portfolio.social.linkedin).toBe("douglashedman");
    expect(portfolio.stack.Testing).toEqual(
      expect.arrayContaining([
        "Cypress",
        "Playwright",
        "Vitest",
        "Pest",
        "Jest",
        "Flutter Test",
      ])
    );
    expect(portfolio.stack.Observability).toEqual(["Sentry"]);
    expect(portfolio.stack.Testing).not.toContain("Sentry");
    expect(portfolio.stack.Backend).toContain("FastAPI");

    expect(getProject("spotify")).toBeUndefined();
    expect(getProject("folium")?.url).toBe("folium-labs.com");
  });

  it("does not reintroduce stale project claims in either locale", () => {
    const en = JSON.parse(readFileSync(resolve("messages/en.json"), "utf8"));
    const es = JSON.parse(readFileSync(resolve("messages/es.json"), "utf8"));

    expect(en.hero.tagline).toContain("more than four years");
    expect(es.hero.tagline).toContain("más de cuatro años");
    expect(en.projects.equine.outcomes.a.n).toBe("7");
    expect(es.projects.equine.outcomes.a.n).toBe("7");
    expect(en.projects.printshop.outcomes.a.n).toBe("707");
    expect(es.projects.printshop.outcomes.a.n).toBe("707");
    expect(en.projects.spotify).toBeUndefined();
    expect(es.projects.spotify).toBeUndefined();

    for (const messages of [en, es]) {
      const serialized = JSON.stringify(messages);
      expect(serialized).not.toContain("stock reservation");
      expect(serialized).not.toContain("reserva de stock");
      expect(serialized).not.toContain("nine organs");
      expect(serialized).not.toContain("nueve órganos");
      expect(serialized).not.toContain("Cypress suite");
      expect(serialized).not.toContain("suite Cypress");
      // Cifras de negocio sin respaldo verificable
      expect(serialized).not.toContain("420+");
      expect(serialized).not.toContain("99.2%");
      expect(serialized).not.toContain("180+");
      expect(serialized).not.toContain("~100%");
      expect(serialized).not.toContain("first Flutter app");
      expect(serialized).not.toContain("primera app Flutter");
      expect(serialized).not.toContain("foliumlabs.com");
    }
  });
});

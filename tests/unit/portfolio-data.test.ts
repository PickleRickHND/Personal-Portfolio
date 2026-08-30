import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

import {
  getNextProject,
  getProject,
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
  it("defines eight uniquely addressable projects with tracked images", () => {
    expect(projects).toHaveLength(8);
    expect(new Set(projects.map((project) => project.id)).size).toBe(8);
    expect(new Set(projects.map((project) => project.slug)).size).toBe(8);

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
});

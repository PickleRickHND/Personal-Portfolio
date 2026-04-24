import type { MetadataRoute } from "next";
import { projects } from "@/lib/portfolio-data";
import { routing } from "@/i18n/routing";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = getSiteUrl();
  const alt = (path: string) =>
    Object.fromEntries([
      ...routing.locales.map((l) => [l, `${base}/${l}${path}`]),
      ["x-default", `${base}/${routing.defaultLocale}${path}`],
    ]);

  const landings = routing.locales.map((locale) => ({
    url: `${base}/${locale}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 1,
    alternates: { languages: alt("") },
  }));

  const projectPages = routing.locales.flatMap((locale) =>
    projects.map((p) => ({
      url: `${base}/${locale}/work/${p.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.8,
      alternates: { languages: alt(`/work/${p.slug}`) },
    }))
  );

  return [...landings, ...projectPages];
}

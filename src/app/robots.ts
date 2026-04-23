import type { MetadataRoute } from "next";
import { getSiteUrl, isProductionDeploy } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  if (!isProductionDeploy()) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${getSiteUrl()}/sitemap.xml`,
  };
}

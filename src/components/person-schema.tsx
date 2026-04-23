import { portfolio } from "@/lib/portfolio-data";
import { routing } from "@/i18n/routing";
import { getSiteUrl } from "@/lib/site";

function safeJson(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function PersonSchema() {
  const siteUrl = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolio.name,
    url: siteUrl,
    email: `mailto:${portfolio.email}`,
    jobTitle: portfolio.role,
    description: portfolio.role,
    image: `${siteUrl}/img/profile-formal.jpg`,
    knowsLanguage: [...routing.locales],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tegucigalpa",
      addressCountry: "HN",
    },
    sameAs: [
      `https://github.com/${portfolio.social.github}`,
      `https://www.linkedin.com/in/${portfolio.social.linkedin}/`,
      `https://twitter.com/${portfolio.social.twitter}`,
      `https://www.instagram.com/${portfolio.social.instagram}/`,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJson(data) }}
    />
  );
}

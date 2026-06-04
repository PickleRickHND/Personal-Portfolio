import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";
import "../globals.css";
import { dmMono, dmSans, instrumentSerif } from "@/lib/fonts";
import { routing, type Locale } from "@/i18n/routing";
import { PersonSchema } from "@/components/person-schema";
import { getSiteUrl, isProductionDeploy } from "@/lib/site";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f0e0c",
  colorScheme: "dark",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

function languageAlternates(path: string) {
  return Object.fromEntries([
    ...routing.locales.map((l) => [l, `/${l}${path}`]),
    ["x-default", `/${routing.defaultLocale}${path}`],
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: "meta" });
  const canonical = `/${locale}`;
  return {
    metadataBase: new URL(getSiteUrl()),
    title: {
      default: t("home.title"),
      template: `%s · ${t("brand")}`,
    },
    description: t("home.description"),
    robots: isProductionDeploy()
      ? undefined
      : { index: false, follow: false },
    alternates: {
      canonical,
      languages: languageAlternates(""),
    },
    openGraph: {
      type: "website",
      title: t("home.title"),
      description: t("home.description"),
      locale,
      siteName: t("brand"),
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title: t("home.title"),
      description: t("home.description"),
    },
    other: {
      /* Dark Reader, Night Eye and similar extensions opt out when they
         see this lock meta — the site already ships a dark theme, so
         we don't want them re-inverting it. */
      "darkreader-lock": "",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const typedLocale: Locale = locale;

  setRequestLocale(typedLocale);

  return (
    <html
      lang={typedLocale}
      className={`${dmSans.variable} ${dmMono.variable} ${instrumentSerif.variable}`}
    >
      <body className="bg-ink text-bone antialiased">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <PersonSchema />
      </body>
    </html>
  );
}

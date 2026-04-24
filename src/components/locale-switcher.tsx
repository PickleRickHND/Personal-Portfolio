"use client";

import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("localeSwitcher");
  const [isPending, startTransition] = useTransition();

  const otherLocale = routing.locales.find((l) => l !== locale) ?? "en";

  const onToggle = () => {
    startTransition(() => {
      router.replace(pathname, { locale: otherLocale });
    });
  };

  return (
    <button
      type="button"
      onClick={onToggle}
      disabled={isPending}
      aria-label={t("ariaLabel", { target: otherLocale.toUpperCase() })}
      className="rounded-full border border-[var(--color-rule)] px-2.5 py-1.5 font-mono text-[11px] tracking-[var(--tracking-widest)] text-bone-muted transition-colors hover:text-bone disabled:opacity-50"
    >
      <span className={locale === "en" ? "text-bone" : ""}>EN</span>
      <span className="mx-1 text-bone-muted">/</span>
      <span className={locale === "es" ? "text-bone" : ""}>ES</span>
    </button>
  );
}

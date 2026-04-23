"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "./container";
import { LocaleSwitcher } from "./locale-switcher";
import { portfolio } from "@/lib/portfolio-data";
import type { Locale } from "@/i18n/routing";

export function ProjectNav({
  currentName,
  nextName,
  nextHref,
}: {
  currentName: string;
  nextName: string | null;
  nextHref: string;
}) {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const resumeHref = portfolio.resume[locale];

  return (
    <div className="sticky top-0 z-20 border-b border-[var(--color-rule)] backdrop-ink">
      <Container>
        <nav
          aria-label={currentName}
          className="flex h-[var(--size-nav-h)] items-center justify-between"
        >
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label={t("brand.back")}
          >
            <span
              aria-hidden
              className="grid h-7 w-7 place-items-center rounded-full border border-[var(--color-bone-muted)] font-serif text-base italic"
            >
              {t("brand.mark")}
            </span>
            <span className="font-mono text-[12px] tracking-[var(--tracking-wider)]">
              {t("brand.back")}
            </span>
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            <li>
              <Link
                href="/#work"
                className="font-mono text-[12px] tracking-[var(--tracking-wide)] text-bone-muted transition-colors hover:text-bone"
              >
                {t("nav.work")}
              </Link>
            </li>
            <li>
              <span className="relative block py-1.5 font-mono text-[12px] tracking-[var(--tracking-wide)] text-bone">
                {currentName}
                <span className="absolute inset-x-0 -bottom-px h-px bg-[var(--color-bone)]" />
              </span>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <LocaleSwitcher />
            {nextName ? (
              <Link
                href={nextHref}
                className="hidden rounded-full bg-[var(--color-bone)] px-4 py-2 text-[13px] font-medium text-[var(--color-ink)] transition-colors hover:bg-[var(--color-cream)] md:inline-flex"
              >
                {nextName} →
              </Link>
            ) : (
              <a
                href={resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden rounded-full bg-[var(--color-bone)] px-4 py-2 text-[13px] font-medium text-[var(--color-ink)] transition-colors hover:bg-[var(--color-cream)] md:inline-flex"
              >
                {t("nav.resume")} ↗
              </a>
            )}
          </div>
        </nav>
      </Container>
    </div>
  );
}

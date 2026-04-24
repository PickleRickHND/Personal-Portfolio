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
          className="flex h-[var(--size-nav-h)] items-center justify-between gap-3"
        >
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3"
            aria-label={t("brand.back")}
          >
            <span
              aria-hidden
              className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[var(--color-bone-muted)] font-serif text-base italic"
            >
              ←
            </span>
            <span className="truncate font-mono text-[11px] tracking-[var(--tracking-wider)] sm:text-[12px]">
              <span className="hidden sm:inline">{t("brand.back")}</span>
              <span className="sm:hidden">Index</span>
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

          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
            <LocaleSwitcher />
            {nextName ? (
              <Link
                href={nextHref}
                aria-label={`Next project: ${nextName}`}
                className="rounded-full bg-[var(--color-bone)] px-3 py-1.5 text-[12px] font-medium text-[var(--color-ink)] transition-colors hover:bg-[var(--color-cream)] sm:px-4 sm:py-2 sm:text-[13px]"
              >
                <span className="hidden sm:inline">{nextName} →</span>
                <span className="sm:hidden">Next →</span>
              </Link>
            ) : (
              <a
                href={resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[var(--color-bone)] px-3 py-1.5 text-[12px] font-medium text-[var(--color-ink)] transition-colors hover:bg-[var(--color-cream)] sm:px-4 sm:py-2 sm:text-[13px]"
              >
                <span className="hidden sm:inline">{t("nav.resume")} ↗</span>
                <span className="sm:hidden">CV ↗</span>
              </a>
            )}
          </div>
        </nav>
      </Container>
    </div>
  );
}

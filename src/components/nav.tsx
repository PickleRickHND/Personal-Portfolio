"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Container } from "./container";
import { LocaleSwitcher } from "./locale-switcher";
import { NAV_ITEMS, type NavKey } from "./nav-items";
import { portfolio } from "@/lib/portfolio-data";
import type { Locale } from "@/i18n/routing";

export function Nav() {
  const t = useTranslations();
  const pathname = usePathname();
  const locale = useLocale() as Locale;
  const isHome = pathname === "/";
  const resumeHref = portfolio.resume[locale];

  return (
    <div className="sticky top-0 z-20 border-b border-[var(--color-rule)] backdrop-ink">
      <Container>
        <nav
          aria-label={t("nav.index")}
          className="flex h-[var(--size-nav-h)] items-center justify-between gap-3"
        >
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3"
            aria-label={t("brand.name")}
          >
            <span
              aria-hidden
              className="relative block h-[50px] w-[50px] shrink-0 overflow-hidden rounded-full border border-[var(--color-bone-muted)]"
            >
              <Image
                src="/img/profile-avatar.jpg"
                alt=""
                fill
                sizes="50px"
                className="scale-110 object-cover"
              />
            </span>
            <span className="truncate font-mono text-[11px] tracking-[var(--tracking-wider)] sm:text-[12px]">
              {t("brand.name")}
            </span>
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => {
              const active = item.key === "index" && isHome;
              const label = t(`nav.${item.key}` as `nav.${NavKey}`);
              return (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className={`relative block py-1.5 font-mono text-[12px] tracking-[var(--tracking-wide)] transition-colors ${
                      active
                        ? "text-bone"
                        : "text-bone-muted hover:text-bone"
                    }`}
                  >
                    {label}
                    {active ? (
                      <span className="absolute inset-x-0 -bottom-px h-px bg-[var(--color-bone)]" />
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
            <LocaleSwitcher />
            <a
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[var(--color-bone)] px-3 py-1.5 text-[12px] font-medium text-[var(--color-ink)] transition-colors hover:bg-[var(--color-cream)] sm:px-4 sm:py-2 sm:text-[13px]"
            >
              <span className="hidden sm:inline">{t("nav.resume")} ↗</span>
              <span className="sm:hidden">CV ↗</span>
            </a>
          </div>
        </nav>
      </Container>
    </div>
  );
}

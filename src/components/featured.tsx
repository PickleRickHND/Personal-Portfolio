"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "motion/react";
import type { Project } from "@/lib/portfolio-data";
import { PhoneFloat, PhoneMockupDuo } from "./phone-mockup";
import { BrowserFrame } from "./browser-frame";

export function Featured({
  project,
  n,
  total,
  isFirst,
}: {
  project: Project;
  n: string;
  total: string;
  isFirst: boolean;
}) {
  const t = useTranslations();
  const tp = useTranslations(`projects.${project.i18nKey}`);

  return (
    <motion.article
      className="grid grid-cols-1 items-center gap-8 border-b border-[var(--color-rule)] py-10 md:grid-cols-[120px_1fr_1fr] md:gap-12 md:py-16"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
    >
      <div className="font-mono text-[11px] tracking-[var(--tracking-widest)] text-bone-dim">
        № {n} / {total} · {project.year}
      </div>
      <div>
        <div className="mb-4 font-mono text-[11px] tracking-[var(--tracking-widest)] text-bone-muted md:mb-5">
          {isFirst
            ? `— ${t("work.featuredBadge")}`
            : `— ${t("work.caseBadge", { n })}`}
        </div>
        <h3 className="mb-5 break-words font-serif text-[clamp(40px,9vw,96px)] leading-[0.95] tracking-[var(--tracking-tighter)] md:mb-6">
          {project.name}
        </h3>
        <p className="mb-6 font-serif text-[clamp(18px,4.5vw,26px)] italic leading-[1.25] text-bone-muted md:mb-7 md:max-w-[520px]">
          “{tp("tagline")}”
        </p>
        <p className="mb-7 text-[14px] leading-relaxed text-bone-muted md:mb-8 md:max-w-[460px] md:text-[15px]">
          {tp("description")}
        </p>
        <Link
          href={`/work/${project.slug}`}
          className="inline-flex items-center gap-3 rounded-full border border-[var(--color-bone)] px-5 py-2.5 text-[13px] transition-colors hover:bg-bone hover:text-ink sm:px-6 sm:py-3 sm:text-[14px]"
        >
          {t("work.cta")}
          <span className="font-serif text-[20px] leading-none">→</span>
        </Link>
      </div>
      <div>
        {project.mode === "phones" ? (
          <PhoneMockupDuo images={project.gallery} alt={project.name} />
        ) : (
          <div className="relative">
            <BrowserFrame
              images={project.gallery}
              url={project.url ?? "example.com"}
              alt={`${project.name} — primary screen`}
              altSecondary={`${project.name} — secondary screen`}
            />
            {project.mobileGallery && project.mobileGallery.length > 0 ? (
              <div className="pointer-events-none absolute -bottom-10 right-0 z-10 hidden md:block">
                <PhoneFloat
                  images={project.mobileGallery}
                  alt={`${project.name} — mobile view`}
                />
              </div>
            ) : null}
            {project.mobileGallery && project.mobileGallery.length > 0 ? (
              <div className="mt-6 flex justify-center md:hidden">
                <PhoneFloat
                  images={project.mobileGallery}
                  alt={`${project.name} — mobile view`}
                />
              </div>
            ) : null}
          </div>
        )}
      </div>
    </motion.article>
  );
}

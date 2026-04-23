"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "motion/react";
import type { Project } from "@/lib/portfolio-data";
import { PhoneMockupDuo } from "./phone-mockup";
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
      className="grid grid-cols-1 items-center gap-10 border-b border-[var(--color-rule)] py-12 md:grid-cols-[120px_1fr_1fr] md:gap-12 md:py-16"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
    >
      <div className="font-mono text-[11px] tracking-[var(--tracking-widest)] text-bone-dim">
        № {n} / {total} · {project.year}
      </div>
      <div>
        <div className="mb-5 font-mono text-[11px] tracking-[var(--tracking-widest)] text-bone-muted">
          {isFirst
            ? `— ${t("work.featuredBadge")}`
            : `— ${t("work.caseBadge", { n })}`}
        </div>
        <h3 className="mb-6 font-serif text-[clamp(56px,8vw,96px)] leading-[0.95] tracking-[var(--tracking-tighter)]">
          {project.name}
        </h3>
        <p className="mb-7 max-w-[520px] font-serif text-[clamp(20px,2.2vw,26px)] italic leading-[1.25] text-bone-muted">
          “{tp("tagline")}”
        </p>
        <p className="mb-8 max-w-[460px] text-[15px] leading-relaxed text-bone-muted">
          {tp("description")}
        </p>
        <Link
          href={`/work/${project.slug}`}
          className="inline-flex items-center gap-3 rounded-full border border-[var(--color-bone)] px-6 py-3 text-[14px] transition-colors hover:bg-bone hover:text-ink"
        >
          {t("work.cta")}
          <span className="font-serif text-[20px] leading-none">→</span>
        </Link>
      </div>
      <div>
        {project.mode === "phones" ? (
          <PhoneMockupDuo
            front={project.image}
            back={project.image2}
            altFront={`${project.name} — primary screen`}
            altBack={`${project.name} — secondary screen`}
          />
        ) : (
          <BrowserFrame
            images={[project.image, project.image2]}
            url={project.url ?? "example.com"}
            alt={`${project.name} — primary screen`}
            altSecondary={`${project.name} — secondary screen`}
          />
        )}
      </div>
    </motion.article>
  );
}

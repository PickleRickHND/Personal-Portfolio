"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Link } from "@/i18n/navigation";
import type { Project } from "@/lib/portfolio-data";

export function ProjectRow({
  project,
  index,
}: {
  project: Project;
  index: string;
}) {
  const tp = useTranslations(`projects.${project.i18nKey}`);
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
    >
      <Link
        href={`/work/${project.slug}`}
        className="group grid grid-cols-[32px_1fr_auto] items-center gap-4 border-b border-[var(--color-rule)] py-7 transition-colors hover:bg-ink-elev md:grid-cols-[80px_2fr_2fr_1fr_80px] md:gap-6 md:px-0 md:py-9 md:hover:px-6"
      >
        <div className="font-mono text-[10px] tracking-[var(--tracking-widest)] text-bone-dim md:text-[11px]">
          {index}
        </div>
        <div className="min-w-0">
          <div className="font-serif text-[clamp(24px,6vw,40px)] leading-[1.02] tracking-[var(--tracking-tight)]">
            {project.name}
          </div>
          <div className="mt-1.5 font-mono text-[10px] tracking-[var(--tracking-widest)] text-bone-muted md:mt-2">
            {tp("kind")}
          </div>
        </div>
        <div className="hidden max-w-[360px] text-[14px] leading-[1.55] text-bone-muted md:block">
          {tp("short")}
        </div>
        <div className="hidden flex-wrap gap-1.5 md:flex">
          {project.stack.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--color-rule)] px-2 py-1 font-mono text-[10px] tracking-[var(--tracking-wide)] text-bone-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="text-right font-serif text-[18px] italic text-bone-muted md:text-[24px]">
          {project.year}
        </div>
      </Link>
    </motion.div>
  );
}

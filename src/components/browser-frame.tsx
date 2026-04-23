"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function BrowserFrame({
  images,
  url,
  alt,
  altSecondary,
}: {
  images: string[];
  url: string;
  alt: string;
  altSecondary?: string;
}) {
  const [a, b] = images;
  return (
    <div className="cv-auto flex h-[420px] w-full items-center justify-center md:h-[520px]">
      <motion.div
        className="relative w-full max-w-[640px] overflow-hidden rounded-[10px] bg-ink-inset shadow-[0_40px_80px_rgba(0,0,0,0.5),0_0_0_1px_#1a1814]"
        initial={{ opacity: 0, y: 24, rotate: 0 }}
        whileInView={{ opacity: 1, y: 0, rotate: -1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <div className="flex items-center gap-1.5 border-b border-[#0a0908] bg-[#1a1814] px-4 py-2.5">
          <div className="h-2.5 w-2.5 rounded-full bg-[#2a2622]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#2a2622]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#2a2622]" />
          <div className="ml-3.5 font-mono text-[10px] tracking-[var(--tracking-wide)] text-bone-dim">
            {url}
          </div>
        </div>
        <div className="relative aspect-[16/10] bg-[#0a0908]">
          <Image
            src={a}
            alt={alt}
            fill
            sizes="(min-width: 768px) 640px, 100vw"
            className="browser-slide absolute inset-0 h-full w-full object-cover"
          />
          {b ? (
            <Image
              src={b}
              alt={altSecondary ?? ""}
              fill
              sizes="(min-width: 768px) 640px, 100vw"
              className="browser-slide-delayed absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          ) : null}
        </div>
      </motion.div>
    </div>
  );
}

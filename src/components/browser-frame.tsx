"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useAutoCarousel } from "@/lib/use-auto-carousel";

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
  const frames = images.filter(Boolean);
  const active = useAutoCarousel(frames.length, 4200);
  const src = frames[active] ?? frames[0];

  return (
    <div className="cv-auto flex min-h-[300px] w-full items-center justify-center py-6 md:h-[520px] md:py-0">
      <motion.div
        className="relative w-full max-w-[640px] overflow-hidden rounded-[10px] bg-ink-inset shadow-[0_40px_80px_rgba(0,0,0,0.5),0_0_0_1px_#1a1814]"
        initial={{ opacity: 0, y: 24, rotate: 0 }}
        whileInView={{ opacity: 1, y: 0, rotate: -1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <div className="flex items-center gap-1.5 border-b border-[#0a0908] bg-[#1a1814] px-4 py-2.5">
          <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          <div className="ml-3.5 font-mono text-[10px] tracking-[var(--tracking-wide)] text-bone-dim">
            {url}
          </div>
        </div>
        <div className="relative aspect-[16/10] bg-[#0a0908]">
          <AnimatePresence initial={false}>
            <motion.div
              key={src}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <Image
                src={src}
                alt={active === 0 ? alt : altSecondary ?? alt}
                fill
                sizes="(min-width: 1280px) 640px, (min-width: 768px) 55vw, 100vw"
                quality={92}
                className="h-full w-full object-cover"
                priority={active === 0}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

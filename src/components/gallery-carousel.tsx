"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type Variant = "desktop" | "phone";

const INTERVAL_MS = 4800;

export function GalleryCarousel({
  images,
  captions,
  variant,
  alt,
  url,
}: {
  images: string[];
  captions?: string[];
  variant: Variant;
  alt: string;
  url?: string;
}) {
  const frames = images.filter(Boolean);
  const length = frames.length;
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (length <= 1 || isHovered) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [length, isHovered]);

  if (length === 0) return null;

  const active = Math.min(index, length - 1);
  const src = frames[active];
  const caption = captions?.[active];

  const goTo = (n: number) => setIndex(((n % length) + length) % length);
  const prev = () => goTo(active - 1);
  const next = () => goTo(active + 1);

  return (
    <div
      className="flex w-full flex-col gap-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={
          variant === "desktop"
            ? "relative mx-auto w-full max-w-[960px] overflow-hidden rounded-[10px] bg-ink-inset shadow-[0_40px_80px_rgba(0,0,0,0.5),0_0_0_1px_#1a1814]"
            : "relative mx-auto w-full overflow-hidden rounded-[28px] border-[6px] border-[#1a1814] bg-ink-inset shadow-[0_40px_80px_rgba(0,0,0,0.55)] md:rounded-[32px] md:border-8"
        }
      >
        {variant === "desktop" ? (
          <div className="flex items-center gap-1.5 border-b border-[#0a0908] bg-[#1a1814] px-4 py-2.5">
            <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
            {url ? (
              <div className="ml-3.5 truncate font-mono text-[10px] tracking-[var(--tracking-wide)] text-bone-dim">
                {url}
              </div>
            ) : null}
          </div>
        ) : null}

        <div
          className={
            variant === "desktop"
              ? "relative aspect-[16/10] bg-[#0a0908]"
              : "relative aspect-[9/19] bg-[#0a0908]"
          }
        >
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
                alt={`${alt} — ${active + 1} / ${length}`}
                fill
                sizes={
                  variant === "desktop"
                    ? "(min-width: 1024px) 960px, 100vw"
                    : "(min-width: 768px) 360px, 320px"
                }
                quality={92}
                className="h-full w-full object-cover"
                priority={active === 0}
              />
            </motion.div>
          </AnimatePresence>

          {length > 1 ? (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="Anterior"
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-[color-mix(in_srgb,var(--color-ink)_70%,transparent)] px-3 py-2 font-serif text-[20px] leading-none text-bone opacity-0 transition-opacity hover:opacity-100 focus-visible:opacity-100 group-hover:opacity-100 md:left-4"
              >
                ←
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Siguiente"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-[color-mix(in_srgb,var(--color-ink)_70%,transparent)] px-3 py-2 font-serif text-[20px] leading-none text-bone opacity-0 transition-opacity hover:opacity-100 focus-visible:opacity-100 group-hover:opacity-100 md:right-4"
              >
                →
              </button>
            </>
          ) : null}
        </div>
      </div>

      {length > 1 ? (
        <div className="flex items-center justify-center gap-2">
          {frames.map((f, i) => (
            <button
              type="button"
              key={f}
              onClick={() => goTo(i)}
              aria-label={`Ir al slide ${i + 1}`}
              aria-current={i === active}
              className={`h-1.5 rounded-full transition-all ${
                i === active
                  ? "w-8 bg-[var(--color-bone)]"
                  : "w-1.5 bg-[var(--color-bone-dim)] hover:bg-[var(--color-bone-muted)]"
              }`}
            />
          ))}
        </div>
      ) : null}

      {caption ? (
        <div className="text-center font-mono text-[10px] tracking-[var(--tracking-widest)] text-bone-dim">
          Fig. {active + 1} / {length} — {caption}
        </div>
      ) : null}
    </div>
  );
}

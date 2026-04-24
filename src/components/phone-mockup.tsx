"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useAutoCarousel } from "@/lib/use-auto-carousel";

export function PhoneMockupDuo({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const frames = images.filter(Boolean);
  const length = frames.length;
  const active = useAutoCarousel(length, 4400);
  const frontSrc = frames[active] ?? frames[0];
  const backSrc = length > 1 ? frames[(active + 1) % length] : frontSrc;

  return (
    <div className="relative mx-auto h-[460px] w-full max-w-[380px] sm:max-w-[480px] md:h-[520px] md:max-w-none">
      {/* Back phone — shifted right */}
      <motion.div
        className="absolute right-[8%] top-2 h-[380px] w-[170px] overflow-hidden rounded-[28px] border-[6px] border-[#1a1814] bg-ink-inset shadow-[0_40px_80px_rgba(0,0,0,0.5)] sm:right-10 sm:h-[420px] sm:w-[200px] md:right-16 md:top-2 md:h-[470px] md:w-[230px] md:border-8 md:rounded-[32px]"
        initial={{ opacity: 0, y: 20, rotate: 0 }}
        whileInView={{ opacity: 1, y: 0, rotate: 6 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={backSrc}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Image
              src={backSrc}
              alt={`${alt} — secondary`}
              fill
              sizes="(min-width: 768px) 230px, (min-width: 640px) 200px, 170px"
              quality={88}
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>
      {/* Front phone — overlaps from the left */}
      <motion.div
        className="absolute left-[8%] top-7 z-10 h-[380px] w-[170px] overflow-hidden rounded-[28px] border-[6px] border-[#1a1814] bg-ink-inset shadow-[0_40px_80px_rgba(0,0,0,0.5)] sm:left-10 sm:h-[420px] sm:w-[200px] md:left-auto md:right-44 md:top-7 md:h-[470px] md:w-[230px] md:border-8 md:rounded-[32px]"
        initial={{ opacity: 0, y: 20, rotate: 0 }}
        whileInView={{ opacity: 1, y: 0, rotate: -4 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.9, delay: 0.12, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={frontSrc}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Image
              src={frontSrc}
              alt={`${alt} — primary`}
              fill
              sizes="(min-width: 768px) 230px, (min-width: 640px) 200px, 170px"
              quality={88}
              className="object-cover"
              priority={active === 0}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

/**
 * Single floating phone with crossfading slides — used to accompany a
 * BrowserFrame when a web project has mobile screenshots to show off.
 */
export function PhoneFloat({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const frames = images.filter(Boolean);
  const active = useAutoCarousel(frames.length, 3600);
  const src = frames[active] ?? frames[0];

  return (
    <motion.div
      className="relative h-[340px] w-[160px] overflow-hidden rounded-[24px] border-[5px] border-[#1a1814] bg-ink-inset shadow-[0_40px_70px_rgba(0,0,0,0.55)] md:h-[400px] md:w-[190px] md:rounded-[28px] md:border-[6px]"
      initial={{ opacity: 0, y: 20, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: 4 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, delay: 0.15, ease: [0.2, 0.7, 0.2, 1] }}
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
            alt={alt}
            fill
            sizes="(min-width: 768px) 190px, 160px"
            quality={88}
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

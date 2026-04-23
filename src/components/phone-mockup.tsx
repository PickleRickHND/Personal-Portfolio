"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function PhoneMockupDuo({
  front,
  back,
  altFront,
  altBack,
}: {
  front: string;
  back: string;
  altFront: string;
  altBack: string;
}) {
  return (
    <div className="relative h-[420px] w-full md:h-[520px]">
      <motion.div
        className="absolute right-10 top-2 h-[360px] w-[180px] overflow-hidden rounded-[28px] border-[6px] border-[#1a1814] bg-ink-inset shadow-[0_40px_80px_rgba(0,0,0,0.5)] md:right-16 md:top-2 md:h-[470px] md:w-[230px] md:border-8 md:rounded-[32px]"
        initial={{ opacity: 0, y: 20, rotate: 0 }}
        whileInView={{ opacity: 1, y: 0, rotate: 6 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <Image
          src={back}
          alt={altBack}
          fill
          sizes="(min-width: 768px) 230px, 180px"
          className="object-cover"
        />
      </motion.div>
      <motion.div
        className="absolute right-32 top-6 z-10 h-[360px] w-[180px] overflow-hidden rounded-[28px] border-[6px] border-[#1a1814] bg-ink-inset shadow-[0_40px_80px_rgba(0,0,0,0.5)] md:right-44 md:top-7 md:h-[470px] md:w-[230px] md:border-8 md:rounded-[32px]"
        initial={{ opacity: 0, y: 20, rotate: 0 }}
        whileInView={{ opacity: 1, y: 0, rotate: -4 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.9, delay: 0.12, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <Image
          src={front}
          alt={altFront}
          fill
          sizes="(min-width: 768px) 230px, 180px"
          className="object-cover"
          priority
          fetchPriority="high"
        />
      </motion.div>
    </div>
  );
}

"use client";

import { motion } from "motion/react";
import type { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  as?: "div" | "section" | "article" | "header" | "footer";
  delay?: number;
  y?: number;
  amount?: number;
  className?: string;
  id?: string;
  style?: CSSProperties;
};

/**
 * Fades content in when it enters the viewport. Respects
 * prefers-reduced-motion via Motion's defaults. `once: true`
 * so it doesn't re-trigger on scroll-back.
 */
export function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 24,
  amount = 0.15,
  className,
  id,
  style,
}: Props) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      id={id}
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.75, ease: [0.2, 0.7, 0.2, 1], delay }}
    >
      {children}
    </MotionTag>
  );
}

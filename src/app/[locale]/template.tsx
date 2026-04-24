"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Page-level transition. `template.tsx` re-mounts on every navigation
 * (unlike layout.tsx), so this gives each route a fresh fade-up entry.
 */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

"use client";

import { useEffect, useState } from "react";

export function useAutoCarousel(length: number, intervalMs = 3800): number {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [length, intervalMs]);

  return Math.min(index, Math.max(length - 1, 0));
}

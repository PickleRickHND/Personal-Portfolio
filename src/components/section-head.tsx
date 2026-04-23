import type { ReactNode } from "react";

export function SectionHead({
  index,
  kicker,
  children,
}: {
  index: string;
  kicker: string;
  children: ReactNode;
}) {
  return (
    <header className="mb-16 grid grid-cols-1 items-baseline gap-6 md:mb-20 md:grid-cols-[120px_1fr] md:gap-8">
      <div className="pt-3 font-mono text-[11px] tracking-[var(--tracking-widest)] text-[var(--color-bone-dim)]">
        {index}
      </div>
      <div>
        <div className="mb-4 font-mono text-[11px] tracking-[var(--tracking-widest)] text-[var(--color-bone-muted)]">
          {kicker}
        </div>
        <h2 className="font-serif text-[clamp(40px,6vw,72px)] leading-[0.96] tracking-[var(--tracking-tighter)]">
          {children}
        </h2>
      </div>
    </header>
  );
}

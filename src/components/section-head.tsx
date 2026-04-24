import type { ReactNode } from "react";

export function SectionHead({
  index,
  kicker,
  children,
}: {
  index?: string;
  kicker: string;
  children: ReactNode;
}) {
  const hasIndex = Boolean(index && index.trim().length > 0);

  return (
    <header
      className={
        hasIndex
          ? "mb-12 grid grid-cols-1 items-baseline gap-3 md:mb-20 md:grid-cols-[120px_1fr] md:gap-8"
          : "mb-12 md:mb-20"
      }
    >
      {hasIndex ? (
        <div className="font-mono text-[11px] tracking-[var(--tracking-widest)] text-[var(--color-bone-dim)] md:pt-3">
          {index}
        </div>
      ) : null}
      <div>
        <div className="mb-3 font-mono text-[11px] tracking-[var(--tracking-widest)] text-[var(--color-bone-muted)] md:mb-4">
          {kicker}
        </div>
        <h2 className="font-serif text-[clamp(34px,8vw,72px)] leading-[0.96] tracking-[var(--tracking-tighter)]">
          {children}
        </h2>
      </div>
    </header>
  );
}

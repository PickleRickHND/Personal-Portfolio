export function Stat({
  n,
  label,
  className = "",
}: {
  n: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={`px-4 py-6 md:px-5 md:py-7 ${className}`}>
      <div className="font-serif text-[clamp(32px,7vw,56px)] leading-none tracking-[var(--tracking-tighter)] text-bone">
        {n}
      </div>
      <div className="mt-2.5 font-mono text-[10px] leading-snug tracking-[var(--tracking-widest)] text-bone-dim md:mt-3">
        {label}
      </div>
    </div>
  );
}

export function StatGrid({
  items,
}: {
  items: { n: string; label: string }[];
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-[var(--color-rule)]">
      {items.map((s, i) => (
        <Stat
          key={s.label}
          n={s.n}
          label={s.label}
          className={
            i < items.length - 1
              ? "md:border-r border-[var(--color-rule)]"
              : ""
          }
        />
      ))}
    </div>
  );
}

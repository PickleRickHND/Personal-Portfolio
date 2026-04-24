export function HeroCell({
  label,
  value,
  sub,
  sans,
}: {
  label: string;
  value: string;
  sub?: string;
  sans?: boolean;
}) {
  return (
    <div>
      <div className="mb-2.5 font-mono text-[10px] tracking-[var(--tracking-widest)] text-bone-dim">
        {label}
      </div>
      <div
        className={
          sans
            ? "text-[15px] leading-[1.5] text-bone"
            : "whitespace-pre-line font-serif text-[clamp(18px,2vw,22px)] leading-[1.25] text-bone"
        }
      >
        {value}
      </div>
      {sub ? (
        <div className="mt-1 font-serif text-[16px] text-bone-muted">
          {sub}
        </div>
      ) : null}
    </div>
  );
}

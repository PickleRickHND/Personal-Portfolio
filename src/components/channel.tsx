export function Channel({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-1 transition-colors hover:text-cream"
    >
      <span className="font-mono text-[10px] tracking-[var(--tracking-widest)] text-bone-dim">
        {label}
      </span>
      <span className="font-serif text-[20px]">{value}</span>
    </a>
  );
}

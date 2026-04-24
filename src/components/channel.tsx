import type { ReactNode } from "react";

export function Channel({
  label,
  value,
  href,
  icon,
}: {
  label: string;
  value: string;
  href: string;
  icon?: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-2 transition-colors hover:text-cream"
    >
      {icon ? (
        <span
          aria-hidden
          className="text-[22px] text-bone-muted transition-colors group-hover:text-cream"
        >
          {icon}
        </span>
      ) : null}
      <span className="font-mono text-[10px] tracking-[var(--tracking-widest)] text-bone-dim">
        {label}
      </span>
      <span className="font-serif text-[20px]">{value}</span>
    </a>
  );
}

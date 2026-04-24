export function FilterPill({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-transparent px-3.5 py-2 font-mono text-[11px] tracking-[var(--tracking-widest)] text-bone-muted transition-colors hover:border-[var(--color-rule)] hover:bg-ink-elev hover:text-bone">
      {children}
    </span>
  );
}

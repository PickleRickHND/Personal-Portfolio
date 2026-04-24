import { useTranslations } from "next-intl";
import { portfolio } from "@/lib/portfolio-data";
import { TechIcon } from "./tech-icon";

type StackCategory = keyof typeof portfolio.stack;

export function StackGrid() {
  const t = useTranslations("stack.categories");
  const entries = Object.entries(portfolio.stack) as Array<
    [StackCategory, readonly string[]]
  >;
  const rows: Array<Array<[StackCategory, readonly string[]]>> = [];
  for (let i = 0; i < entries.length; i += 4) {
    rows.push(entries.slice(i, i + 4));
  }

  return (
    <>
      {rows.map((row, rowIdx) => (
        <div
          key={rowIdx}
          className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 first:mt-0 sm:grid-cols-3 md:mt-10 md:grid-cols-[120px_repeat(4,1fr)] md:gap-8"
        >
          <div className="hidden md:block" />
          {row.map(([cat, items]) => (
            <StackColumn key={cat} title={t(cat)} items={items} />
          ))}
        </div>
      ))}
    </>
  );
}

function StackColumn({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <div>
      <h3 className="mb-3.5 font-mono text-[11px] tracking-[var(--tracking-widest)] text-bone-dim">
        {"// "}
        {title}
      </h3>
      <ul className="flex flex-col gap-2">
        {items.map((it) => (
          <li
            key={it}
            className="group flex items-center gap-3 font-serif text-[clamp(18px,2vw,22px)] leading-[1.15] tracking-[var(--tracking-tight)] text-bone"
          >
            <TechIcon
              name={it}
              className="size-[18px] shrink-0 text-bone-muted transition-colors duration-300 group-hover:text-cream"
            />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { useTranslations } from "next-intl";
import { Container } from "./container";

export function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="border-t border-[var(--color-rule)]">
      <Container>
        <div className="flex flex-col items-start justify-between gap-3 py-10 text-[11px] tracking-[var(--tracking-wider)] text-[var(--color-bone-dim)] md:flex-row md:items-center">
          <span className="font-mono uppercase">{t("copy")}</span>
          <span className="font-mono uppercase">{t("built")}</span>
          <span className="font-mono uppercase">{t("colophon")}</span>
        </div>
      </Container>
    </footer>
  );
}

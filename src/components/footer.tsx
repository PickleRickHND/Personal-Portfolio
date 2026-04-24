import { useTranslations } from "next-intl";
import { Container } from "./container";

export function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="border-t border-[var(--color-rule)]">
      <Container>
        <div className="flex justify-center py-10 text-[11px] tracking-[var(--tracking-wider)] text-bone-dim">
          <span className="font-mono uppercase">{t("copy")}</span>
        </div>
      </Container>
    </footer>
  );
}

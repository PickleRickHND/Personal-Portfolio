import Image from "next/image";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import { SectionHead } from "@/components/section-head";
import { StatGrid } from "@/components/stat";
import { Featured } from "@/components/featured";
import { ProjectRow } from "@/components/project-row";
import { HeroTitle } from "@/components/hero-title";
import { HeroCell } from "@/components/hero-cell";
import { FilterPill } from "@/components/filter-pill";
import { Channel } from "@/components/channel";
import { StackGrid } from "@/components/stack-grid";
import { portfolio, projects } from "@/lib/portfolio-data";
import { pad2 } from "@/lib/format";
import { routing } from "@/i18n/routing";

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations();

  const statsValues = portfolio.stats.map((s) => ({
    n: s.n,
    label: t(`stats.${s.labelKey}`),
  }));

  const featured = projects.filter((p) => p.featured);
  const remaining = projects.filter((p) => !p.featured);
  const totalFeatured = pad2(featured.length);

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="pb-24 pt-14 md:pb-32 md:pt-20">
          <Container>
            <div className="fade-in-up mb-14 flex flex-col justify-between gap-8 [animation-delay:120ms] md:mb-16 md:flex-row md:items-end">
              <div className="flex flex-col gap-1.5">
                <span className="text-eyebrow">{t("hero.issue")}</span>
                <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[var(--tracking-wider)] text-bone-muted">
                  <span
                    aria-hidden
                    className="signal-dot h-1.5 w-1.5 rounded-full bg-[var(--color-signal)]"
                  />
                  {t("hero.status")}
                </span>
              </div>
              <div className="flex max-w-[320px] flex-col gap-1.5 md:text-right">
                <span className="text-eyebrow">{t("hero.fileTag")}</span>
                <span className="font-serif text-[18px] italic leading-[1.4] text-bone-muted">
                  {t("hero.tagline")}
                </span>
              </div>
            </div>

            <HeroTitle
              first={t("hero.titleFirst")}
              second={t("hero.titleSecond")}
            />

            <div className="fade-in-up mt-16 grid grid-cols-1 gap-8 border-t border-[var(--color-rule)] pt-8 [animation-delay:900ms] md:mt-20 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
              <HeroCell
                label={t("hero.cells.currentlyLabel")}
                value={t("hero.cells.currentlyValue")}
                sans
              />
              <HeroCell
                label={t("hero.cells.stackLabel")}
                value={t("hero.cells.stackValue")}
              />
              <HeroCell
                label={t("hero.cells.focusLabel")}
                value={t("hero.cells.focusValue")}
              />
              <HeroCell
                label={t("hero.cells.basedLabel")}
                value={t("hero.cells.basedValue")}
                sub={t("hero.cells.basedSub")}
              />
            </div>
          </Container>
        </section>

        {/* About */}
        <section
          id="about"
          className="scroll-mt-24 border-t border-[var(--color-rule)] py-24 md:py-32"
        >
          <Container>
            <SectionHead index={t("about.index")} kicker={t("about.kicker")}>
              {t("about.headlineA")}
              <br />
              {t("about.headlineB")}{" "}
              <em className="italic text-bone-muted">
                {t("about.headlineEm")}
              </em>
              {t("about.headlineTail")}
            </SectionHead>

            <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[120px_1fr_1fr]">
              <div className="hidden md:block" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[#2a2621]">
                <Image
                  src="/img/profile-formal.jpg"
                  alt={portfolio.name}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover [filter:grayscale(0.15)_contrast(1.02)]"
                  priority
                  fetchPriority="high"
                />
                <span className="absolute bottom-4 left-4 rounded-sm bg-[color-mix(in_srgb,var(--color-ink)_80%,transparent)] px-2.5 py-1.5 font-mono text-[10px] tracking-[var(--tracking-widest)] text-bone">
                  {t("about.portraitCaption")}
                </span>
              </div>
              <div className="text-[16px] leading-[1.65] text-bone-muted">
                <p className="mb-7 font-serif text-[clamp(24px,2.8vw,32px)] leading-[1.2] tracking-[var(--tracking-tight)] text-bone first-letter:text-[1.4em]">
                  {t("about.lead")}
                </p>
                <p className="mb-4">{t("about.p1")}</p>
                <p>{t("about.p2")}</p>
              </div>
            </div>

            <div className="mt-14">
              <StatGrid items={statsValues} />
            </div>
          </Container>
        </section>

        {/* Work */}
        <section
          id="work"
          className="scroll-mt-24 border-t border-[var(--color-rule)] py-24 md:py-32"
        >
          <Container>
            <SectionHead index={t("work.index")} kicker={t("work.kicker")}>
              {t("work.headlineA")}
              <br />
              {t("work.headlineB")}
            </SectionHead>

            <div className="mb-12 flex flex-col gap-4 border-b border-[var(--color-rule)] pb-6 md:flex-row md:items-end md:justify-between">
              <span className="text-eyebrow">{t("work.count")}</span>
              <div className="flex flex-wrap gap-1">
                <FilterPill>{t("work.filterMobile")}</FilterPill>
                <FilterPill>{t("work.filterCommerce")}</FilterPill>
                <FilterPill>{t("work.filterInternal")}</FilterPill>
              </div>
            </div>

            {featured.map((p, i) => (
              <Featured
                key={p.id}
                project={p}
                n={pad2(i + 1)}
                total={totalFeatured}
                isFirst={i === 0}
              />
            ))}

            {remaining.length > 0 ? (
              <div className="mt-16">
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-eyebrow">{t("work.fullList")}</span>
                </div>
                {remaining.map((p, i) => (
                  <ProjectRow
                    key={p.id}
                    project={p}
                    index={pad2(featured.length + i + 1)}
                  />
                ))}
              </div>
            ) : null}
          </Container>
        </section>

        {/* Stack */}
        <section
          id="stack"
          className="scroll-mt-24 border-t border-[var(--color-rule)] py-24 md:py-32"
        >
          <Container>
            <SectionHead index={t("stack.index")} kicker={t("stack.kicker")}>
              {t("stack.headlineA")}{" "}
              <em className="italic text-bone-muted">
                {t("stack.headlineEm")}
              </em>
              {t("stack.headlineTail")}
            </SectionHead>
            <StackGrid />
          </Container>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-24 border-t border-[var(--color-rule)] py-28 text-center md:py-36"
        >
          <Container>
            <div className="mb-8 text-eyebrow-muted">{t("contact.kicker")}</div>
            <h2 className="mb-10 font-serif text-[clamp(64px,12vw,140px)] leading-[0.88] tracking-[var(--tracking-tighter)]">
              {t("contact.headlineA")}{" "}
              <em className="italic text-bone-muted">
                {t("contact.headlineEm")}
              </em>
              {t("contact.headlineTail")}
            </h2>
            <a
              href={`mailto:${portfolio.email}`}
              className="inline-flex flex-wrap items-baseline justify-center gap-4 rounded-full border border-[var(--color-rule)] px-7 py-4 font-serif text-[clamp(22px,3vw,36px)] transition-colors hover:bg-ink-elev"
            >
              <span>{portfolio.email}</span>
              <span className="text-[20px] text-bone-muted">↗</span>
            </a>
            <p className="mx-auto mt-7 max-w-[560px] whitespace-pre-line text-[14px] leading-[1.6] text-bone-muted">
              {t("contact.sub")}
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-12">
              <Channel
                label={t("contact.channels.github")}
                value={portfolio.social.github}
                href={`https://github.com/${portfolio.social.github}`}
              />
              <Channel
                label={t("contact.channels.linkedin")}
                value={portfolio.name}
                href={`https://www.linkedin.com/in/${portfolio.social.linkedin}/`}
              />
              <Channel
                label={t("contact.channels.whatsapp")}
                value={portfolio.whatsapp}
                href={`https://wa.me/${portfolio.whatsapp.replace(/\D/g, "")}`}
              />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

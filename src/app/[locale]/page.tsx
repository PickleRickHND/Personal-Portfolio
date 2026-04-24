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
import { Reveal } from "@/components/reveal";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
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

  const resumeHref =
    portfolio.resume[locale as keyof typeof portfolio.resume] ??
    portfolio.resume.en;

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
        <section className="pb-20 pt-10 md:pb-32 md:pt-20">
          <Container>
            <div className="fade-in-up mb-10 flex flex-col justify-between gap-6 [animation-delay:120ms] md:mb-16 md:flex-row md:items-end md:gap-8">
              <div className="flex flex-col gap-1.5">
                <span className="text-eyebrow">
                  {t("hero.issue", { year: new Date().getFullYear() })}
                </span>
                <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[var(--tracking-wider)] text-bone-muted">
                  <span
                    aria-hidden
                    className="signal-dot h-1.5 w-1.5 rounded-full bg-[var(--color-signal)]"
                  />
                  {t("hero.status")}
                </span>
              </div>
              <div className="flex max-w-full flex-col gap-1.5 md:max-w-[320px] md:text-right">
                <span className="text-eyebrow">{t("hero.fileTag")}</span>
                <span className="font-serif text-[16px] italic leading-[1.4] text-bone-muted md:text-[18px]">
                  {t("hero.tagline")}
                </span>
              </div>
            </div>

            <HeroTitle
              first={t("hero.titleFirst")}
              second={t("hero.titleSecond")}
            />

            <div className="fade-in-up mt-12 grid grid-cols-1 gap-6 border-t border-[var(--color-rule)] pt-6 [animation-delay:900ms] sm:grid-cols-2 sm:gap-8 sm:pt-8 md:mt-20 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
              <div className="sm:col-span-2 md:col-span-1">
                <HeroCell
                  label={t("hero.cells.currentlyLabel")}
                  value={t("hero.cells.currentlyValue")}
                  sans
                />
              </div>
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
          className="scroll-mt-24 border-t border-[var(--color-rule)] py-20 md:py-32"
        >
          <Container>
            <Reveal>
              <SectionHead index={t("about.index")} kicker={t("about.kicker")}>
                {t("about.headlineA")}
                <br />
                {t("about.headlineB")}{" "}
                <em className="italic text-bone-muted">
                  {t("about.headlineEm")}
                </em>
                {t("about.headlineTail")}
              </SectionHead>
            </Reveal>

            <Reveal
              className="grid grid-cols-1 items-start gap-8 md:grid-cols-[120px_1fr_1fr] md:gap-12"
              delay={0.1}
            >
              <div className="hidden md:block" />
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[360px] overflow-hidden rounded-sm bg-[#2a2621] md:max-w-none">
                <Image
                  src="/img/profile-formal.jpg"
                  alt={portfolio.name}
                  fill
                  sizes="(min-width: 768px) 40vw, (min-width: 640px) 60vw, 100vw"
                  quality={92}
                  className="object-cover [filter:grayscale(0.15)_contrast(1.02)]"
                  priority
                  fetchPriority="high"
                />
                <span className="absolute bottom-3 left-3 rounded-sm bg-[color-mix(in_srgb,var(--color-ink)_80%,transparent)] px-2.5 py-1.5 font-mono text-[10px] tracking-[var(--tracking-widest)] text-bone md:bottom-4 md:left-4">
                  {t("about.portraitCaption")}
                </span>
              </div>
              <div className="text-[15px] leading-[1.65] text-bone-muted md:text-[16px]">
                <p className="mb-6 font-serif text-[clamp(22px,4.5vw,32px)] leading-[1.2] tracking-[var(--tracking-tight)] text-bone first-letter:text-[1.4em] md:mb-7">
                  {t("about.lead")}
                </p>
                <p className="mb-4">{t("about.p1")}</p>
                <p>{t("about.p2")}</p>
              </div>
            </Reveal>

            <Reveal className="mt-12 md:mt-14" delay={0.15}>
              <StatGrid items={statsValues} />
            </Reveal>
          </Container>
        </section>

        {/* Work */}
        <section
          id="work"
          className="scroll-mt-24 border-t border-[var(--color-rule)] py-20 md:py-32"
        >
          <Container>
            <Reveal>
              <SectionHead index={t("work.index")} kicker={t("work.kicker")}>
                {t("work.headlineA")}
                <br />
                {t("work.headlineB")}
              </SectionHead>
            </Reveal>

            <Reveal
              className="mb-12 flex flex-col gap-4 border-b border-[var(--color-rule)] pb-6 md:flex-row md:items-end md:justify-between"
              delay={0.08}
            >
              <span className="text-eyebrow">{t("work.count")}</span>
              <div className="flex flex-wrap gap-1">
                <FilterPill>{t("work.filterMobile")}</FilterPill>
                <FilterPill>{t("work.filterCommerce")}</FilterPill>
                <FilterPill>{t("work.filterInternal")}</FilterPill>
              </div>
            </Reveal>

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
          className="scroll-mt-24 border-t border-[var(--color-rule)] py-20 md:py-32"
        >
          <Container>
            <Reveal>
              <SectionHead index={t("stack.index")} kicker={t("stack.kicker")}>
                {t("stack.headlineA")}{" "}
                <em className="italic text-bone-muted">
                  {t("stack.headlineEm")}
                </em>
                {t("stack.headlineTail")}
              </SectionHead>
            </Reveal>
            <Reveal delay={0.1}>
              <StackGrid />
            </Reveal>
          </Container>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-24 border-t border-[var(--color-rule)] py-16 text-center md:py-24"
        >
          <Container>
            <Reveal>
              <div className="mb-5 text-eyebrow-muted md:mb-6">{t("contact.kicker")}</div>
              <h2 className="mb-8 font-serif text-[clamp(48px,14vw,140px)] leading-[0.88] tracking-[var(--tracking-tighter)] md:mb-10">
                {t("contact.headlineA")}{" "}
                <em className="italic text-bone-muted">
                  {t("contact.headlineEm")}
                </em>
                {t("contact.headlineTail")}
              </h2>
              <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-5">
                <a
                  href={`mailto:${portfolio.email}`}
                  className="inline-flex max-w-full flex-wrap items-baseline justify-center gap-3 break-all rounded-full border border-[var(--color-rule)] px-5 py-3 font-serif text-[clamp(16px,4.5vw,36px)] leading-[1.1] transition-colors hover:bg-ink-elev sm:px-7 sm:py-4 sm:gap-4"
                >
                  <span>{portfolio.email}</span>
                  <span className="text-[18px] text-bone-muted sm:text-[20px]">↗</span>
                </a>
                <a
                  href={resumeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-baseline justify-center gap-3 rounded-full bg-[var(--color-bone)] px-5 py-3 font-serif text-[clamp(16px,4.5vw,36px)] leading-[1.1] text-ink transition-colors hover:bg-[var(--color-cream)] sm:px-7 sm:py-4 sm:gap-4"
                >
                  <span>{t("nav.resume")}</span>
                  <span className="text-[18px] sm:text-[20px]">↗</span>
                </a>
              </div>
              <div className="mx-auto mt-12 grid max-w-[900px] grid-cols-2 gap-8 border-t border-[var(--color-rule)] pt-10 text-left sm:grid-cols-4 sm:gap-6 md:mt-16 md:pt-12">
                <HeroCell
                  label={t("contact.info.locationLabel")}
                  value={t("contact.info.locationValue")}
                  sub={t("contact.info.locationSub")}
                />
                <HeroCell
                  label={t("contact.info.modeLabel")}
                  value={t("contact.info.modeValue")}
                  sans
                />
                <HeroCell
                  label={t("contact.info.responseLabel")}
                  value={t("contact.info.responseValue")}
                  sans
                />
                <HeroCell
                  label={t("contact.info.focusLabel")}
                  value={t("contact.info.focusValue")}
                  sans
                />
              </div>
              <div className="mt-12 grid grid-cols-1 justify-items-center gap-6 border-t border-[var(--color-rule)] pt-10 sm:grid-cols-3 sm:gap-8 md:mt-16 md:gap-12 md:pt-12">
                <Channel
                  label={t("contact.channels.github")}
                  value={portfolio.social.github}
                  href={`https://github.com/${portfolio.social.github}`}
                  icon={<FaGithub />}
                />
                <Channel
                  label={t("contact.channels.linkedin")}
                  value={portfolio.name}
                  href={`https://www.linkedin.com/in/${portfolio.social.linkedin}/`}
                  icon={<FaLinkedinIn />}
                />
                <Channel
                  label={t("contact.channels.whatsapp")}
                  value={portfolio.whatsapp}
                  href={`https://wa.me/${portfolio.whatsapp.replace(/\D/g, "")}`}
                  icon={<FaWhatsapp />}
                />
              </div>
            </Reveal>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

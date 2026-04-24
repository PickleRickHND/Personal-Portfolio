import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { ProjectNav } from "@/components/project-nav";
import { Reveal } from "@/components/reveal";
import { GalleryCarousel } from "@/components/gallery-carousel";
import { getNextProject, getProject, projects } from "@/lib/portfolio-data";
import { pad2 } from "@/lib/format";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projects.map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const p = getProject(slug);
  if (!p) return {};
  const t = await getTranslations({
    locale,
    namespace: `projects.${p.i18nKey}`,
  });
  const canonical = `/${locale}/work/${slug}`;
  return {
    title: `${p.name}`,
    description: t("description"),
    alternates: {
      canonical,
      languages: Object.fromEntries([
        ...routing.locales.map((l) => [l, `/${l}/work/${slug}`]),
        ["x-default", `/${routing.defaultLocale}/work/${slug}`],
      ]),
    },
  };
}

type Outcome = { n: string; l: string };

function parseStringArray(raw: unknown): string[] {
  return Array.isArray(raw) ? raw.filter((v): v is string => typeof v === "string") : [];
}

function parseOutcome(raw: unknown): Outcome | null {
  if (!raw || typeof raw !== "object") return null;
  const rec = raw as Record<string, unknown>;
  if (typeof rec.n !== "string" || typeof rec.l !== "string") return null;
  return { n: rec.n, l: rec.l };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const project = getProject(slug);
  if (!project) notFound();

  const t = await getTranslations();
  const tp = await getTranslations(`projects.${project.i18nKey}`);
  const nextP = getNextProject(slug);
  const body = parseStringArray(tp.raw("body"));
  const captions = parseStringArray(tp.raw("captions"));
  const outcomes = [
    parseOutcome(tp.raw("outcomes.a")),
    parseOutcome(tp.raw("outcomes.b")),
    parseOutcome(tp.raw("outcomes.c")),
  ].filter((o): o is Outcome => o !== null);

  const caseIndex = projects.indexOf(project) + 1;
  const total = projects.length;

  return (
    <>
      <ProjectNav
        currentName={project.name}
        nextName={nextP ? nextP.name : null}
        nextHref={nextP ? `/work/${nextP.slug}` : "/"}
      />
      <main>
        {/* Hero */}
        <section className="pb-10 pt-14 md:pb-16 md:pt-24">
          <Container>
            <div className="mb-6 text-eyebrow md:mb-8">
              {t("project.caseStudy")} · {pad2(caseIndex)} {t("project.of")}{" "}
              {pad2(total)} · {project.year}
            </div>
            <h1 className="mb-5 break-words font-serif text-[clamp(48px,14vw,180px)] leading-[0.88] tracking-[-0.04em] md:mb-6">
              {project.name}.
            </h1>
            <p className="mb-10 font-serif text-[clamp(18px,5vw,32px)] italic leading-[1.3] text-bone-muted md:mb-12 md:max-w-[900px]">
              “{tp("tagline")}”
            </p>
            <div className="grid grid-cols-2 gap-5 border-t border-[var(--color-rule)] pt-6 md:grid-cols-4 md:gap-6 md:pt-8">
              <MetaCell label={t("project.year")} value={project.year} />
              <MetaCell label={t("project.role")} value={tp("role")} />
              <MetaCell
                label={t("project.platform")}
                value={tp("platform")}
              />
              <MetaCell
                label={project.url ? t("project.url") : t("project.deployment")}
                value={project.url ?? t("project.internal")}
              />
            </div>
          </Container>
        </section>

        {/* Gallery */}
        <section className="bg-ink-elev py-14 md:py-20">
          <Container>
            {project.mobileGallery && project.mobileGallery.length > 0 ? (
              <Reveal className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_240px] md:gap-10 lg:grid-cols-[1fr_280px] lg:gap-12">
                <div className="min-w-0">
                  <GalleryCarousel
                    images={project.gallery}
                    captions={captions}
                    variant="desktop"
                    alt={project.name}
                    url={project.url ?? undefined}
                  />
                </div>
                <div className="mx-auto w-[200px] sm:w-[220px] md:w-[230px] lg:w-[270px]">
                  <GalleryCarousel
                    images={project.mobileGallery}
                    variant="phone"
                    alt={`${project.name} — mobile`}
                  />
                </div>
              </Reveal>
            ) : (
              <Reveal>
                <GalleryCarousel
                  images={project.gallery}
                  captions={captions}
                  variant={project.mode === "phones" ? "phone" : "desktop"}
                  alt={project.name}
                  url={project.url ?? undefined}
                />
              </Reveal>
            )}
          </Container>
        </section>

        {/* Problem / body */}
        <section className="border-t border-[var(--color-rule)] py-20 md:py-32">
          <Container>
            <Reveal className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_2fr] md:gap-20">
              <div>
                <div className="mb-3 text-eyebrow-muted md:mb-4">
                  {tp("problem.kicker")}
                </div>
                <h2 className="font-serif text-[clamp(32px,8vw,56px)] leading-[0.96] tracking-[var(--tracking-tighter)]">
                  {tp("problem.headlineA")}
                  <br />
                  {tp("problem.headlineB")}
                  <br />
                  {tp("problem.headlineC")}{" "}
                  <em className="italic text-bone-muted">
                    {tp("problem.headlineEm")}
                  </em>
                  {tp("problem.headlineTail")}
                </h2>
              </div>
              <div className="text-[15px] leading-[1.65] text-bone-muted md:text-[17px]">
                {body.map((paragraph, i) => {
                  const isLast = i === body.length - 1;
                  return isLast ? (
                    <p
                      key={i}
                      className="mt-5 border-l-2 border-[var(--color-cream)] pl-4 font-serif text-[18px] italic leading-[1.4] text-bone md:pl-5 md:text-[22px]"
                    >
                      {paragraph}
                    </p>
                  ) : (
                    <p key={i} className={i === 0 ? "" : "mt-5"}>
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Outcomes */}
        <section className="border-t border-[var(--color-rule)] py-20 md:py-32">
          <Container>
            <Reveal>
              <div className="mb-8 text-eyebrow-muted md:mb-10">
                {tp("outcomes.kicker")}
              </div>
              <div className="grid grid-cols-1 border-t border-b border-[var(--color-rule)] md:grid-cols-3">
              {outcomes.map((o, i) => (
                <div
                  key={`${o.l}-${i}`}
                  className={`px-5 py-8 md:px-6 md:py-10 ${
                    i < outcomes.length - 1
                      ? "border-b border-[var(--color-rule)] md:border-b-0 md:border-r"
                      : ""
                  }`}
                >
                  <div className="font-serif text-[clamp(42px,9vw,72px)] leading-none tracking-[var(--tracking-tighter)]">
                    {o.n}
                  </div>
                  <div className="mt-3.5 font-mono text-[10px] tracking-[var(--tracking-widest)] text-bone-dim">
                    {o.l}
                  </div>
                </div>
              ))}
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Next up */}
        <section className="border-t border-[var(--color-rule)] py-16 text-center md:py-24">
          <Container>
            <Reveal>
              <div className="mb-5 text-eyebrow-muted md:mb-6">
                {t("project.nextProject")}
              </div>
              {nextP ? (
                <Link
                  href={`/work/${nextP.slug}`}
                  className="inline-block break-words font-serif text-[clamp(32px,11vw,96px)] leading-[0.95] tracking-[var(--tracking-tighter)] transition-colors hover:text-cream"
                >
                  {nextP.name}{" "}
                  <em className="italic text-bone-muted">→</em>
                </Link>
              ) : (
                <Link
                  href="/"
                  className="inline-block break-words font-serif text-[clamp(32px,11vw,96px)] leading-[0.95] tracking-[var(--tracking-tighter)] transition-colors hover:text-cream"
                >
                  {t("project.backToIndex")}{" "}
                  <em className="italic text-bone-muted">→</em>
                </Link>
              )}
            </Reveal>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

function MetaCell({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="mb-2.5 font-mono text-[10px] tracking-[var(--tracking-widest)] text-bone-dim">
        {label}
      </div>
      <div className="font-serif text-[clamp(18px,2vw,22px)] text-bone">
        {value}
      </div>
    </div>
  );
}

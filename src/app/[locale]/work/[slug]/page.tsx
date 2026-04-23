import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { ProjectNav } from "@/components/project-nav";
import { getNextProject, getProject, projects } from "@/lib/portfolio-data";
import { pad2, toRoman } from "@/lib/format";

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
  const gallerySizes =
    project.mode === "phones"
      ? "(min-width: 768px) 25vw, 50vw"
      : "(min-width: 768px) 50vw, 100vw";

  return (
    <>
      <ProjectNav
        currentName={project.name}
        nextName={nextP ? nextP.name : null}
        nextHref={nextP ? `/work/${nextP.slug}` : "/"}
      />
      <main>
        {/* Hero */}
        <section className="pb-12 pt-20 md:pb-16 md:pt-24">
          <Container>
            <div className="mb-8 text-eyebrow">
              {t("project.caseStudy")} · {pad2(caseIndex)} {t("project.of")}{" "}
              {pad2(total)} · {project.year}
            </div>
            <h1 className="mb-6 font-serif text-[clamp(72px,16vw,180px)] leading-[0.88] tracking-[-0.04em]">
              {project.name}.
            </h1>
            <p className="mb-12 max-w-[900px] font-serif text-[clamp(22px,3vw,32px)] italic leading-[1.3] text-bone-muted">
              “{tp("tagline")}”
            </p>
            <div className="grid grid-cols-2 gap-6 border-t border-[var(--color-rule)] pt-8 md:grid-cols-4 md:gap-6">
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
        <section className="bg-ink-elev py-12">
          <Container>
            <div
              className={
                project.mode === "phones"
                  ? "grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5"
                  : "grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5"
              }
            >
              {project.gallery.map((src, i) => {
                const caption = captions[i];
                const altText = caption
                  ? `${project.name} — ${caption}`
                  : `${project.name} — screenshot ${i + 1}`;
                return (
                  <figure key={src} className="flex flex-col gap-2.5">
                    <div
                      className={`overflow-hidden border border-[var(--color-rule)] ${
                        project.mode === "phones"
                          ? "aspect-[9/19] rounded-[24px] border-[6px] border-[#1a1814] bg-ink-inset"
                          : "aspect-[16/10] rounded-md bg-ink-inset"
                      }`}
                    >
                      <Image
                        src={src}
                        alt={altText}
                        width={1280}
                        height={project.mode === "phones" ? 2780 : 800}
                        sizes={gallerySizes}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    {caption ? (
                      <figcaption className="font-mono text-[10px] tracking-[var(--tracking-widest)] text-bone-dim">
                        Fig. {toRoman(i + 1)} — {caption}
                      </figcaption>
                    ) : null}
                  </figure>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Problem / body */}
        <section className="border-t border-[var(--color-rule)] py-24 md:py-32">
          <Container>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_2fr] md:gap-20">
              <div>
                <div className="mb-4 text-eyebrow-muted">
                  {tp("problem.kicker")}
                </div>
                <h2 className="font-serif text-[clamp(40px,6vw,56px)] leading-[0.96] tracking-[var(--tracking-tighter)]">
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
              <div className="text-[17px] leading-[1.65] text-bone-muted">
                {body.map((paragraph, i) => {
                  const isLast = i === body.length - 1;
                  return isLast ? (
                    <p
                      key={i}
                      className="mt-5 border-l-2 border-[var(--color-cream)] pl-5 font-serif text-[22px] italic leading-[1.4] text-bone"
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
            </div>
          </Container>
        </section>

        {/* Outcomes */}
        <section className="border-t border-[var(--color-rule)] py-24 md:py-32">
          <Container>
            <div className="mb-10 text-eyebrow-muted">
              {tp("outcomes.kicker")}
            </div>
            <div className="grid grid-cols-1 border-t border-b border-[var(--color-rule)] md:grid-cols-3">
              {outcomes.map((o, i) => (
                <div
                  key={`${o.l}-${i}`}
                  className={`px-6 py-10 ${
                    i < outcomes.length - 1
                      ? "border-b border-[var(--color-rule)] md:border-b-0 md:border-r"
                      : ""
                  }`}
                >
                  <div className="font-serif text-[clamp(48px,7vw,72px)] leading-none tracking-[var(--tracking-tighter)]">
                    {o.n}
                  </div>
                  <div className="mt-3.5 font-mono text-[10px] tracking-[var(--tracking-widest)] text-bone-dim">
                    {o.l}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Next up */}
        <section className="border-t border-[var(--color-rule)] py-20 text-center md:py-24">
          <Container>
            <div className="mb-6 text-eyebrow-muted">
              {t("project.nextProject")}
            </div>
            {nextP ? (
              <Link
                href={`/work/${nextP.slug}`}
                className="inline-block font-serif text-[clamp(48px,9vw,96px)] leading-[0.95] tracking-[var(--tracking-tighter)] transition-colors hover:text-cream"
              >
                {nextP.name}{" "}
                <em className="italic text-bone-muted">→</em>
              </Link>
            ) : (
              <Link
                href="/"
                className="inline-block font-serif text-[clamp(48px,9vw,96px)] leading-[0.95] tracking-[var(--tracking-tighter)] transition-colors hover:text-cream"
              >
                {t("project.backToIndex")}{" "}
                <em className="italic text-bone-muted">→</em>
              </Link>
            )}
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

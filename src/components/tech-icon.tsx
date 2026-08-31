import {
  SiAngular,
  SiBlender,
  SiClaude,
  SiCypress,
  SiDart,
  SiFilament,
  SiFirebase,
  SiFastapi,
  SiFlutter,
  SiGit,
  SiGooglecloud,
  SiGooglegemini,
  SiJavascript,
  SiLaravel,
  SiLeaflet,
  SiLivewire,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiSentry,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVercel,
  SiVitest,
  SiJest,
} from "react-icons/si";
import type { ComponentType, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { title?: string };

function PlaywrightMark(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M7.5 4A5 5 0 0 0 2.5 9v6A5 5 0 0 0 7.5 20h9a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5zm.8 4.2c1 0 1.7.8 1.7 1.8s-.8 1.8-1.7 1.8c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8zm7.4 0c1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8c-1 0-1.7-.8-1.7-1.8s.7-1.8 1.7-1.8zM6.2 14.6c1.1 1.5 3.2 2.5 5.8 2.5s4.7-1 5.8-2.5c-1.5.8-3.5 1.3-5.8 1.3s-4.3-.5-5.8-1.3z" />
    </svg>
  );
}

function CursorMark(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2 2 7.5v9L12 22l10-5.5v-9L12 2Zm0 2.3 7 3.85L12 12l-7-3.85 7-3.85Zm-8 5.6 7 3.85v7.7l-7-3.85v-7.7Zm16 0v7.7l-7 3.85v-7.7l7-3.85Z" />
    </svg>
  );
}

const MAP: Record<string, ComponentType<IconProps>> = {
  // Languages
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Dart: SiDart,
  Python: SiPython,
  PHP: SiPhp,
  // Frontend
  "Next.js": SiNextdotjs,
  "Next.js 16": SiNextdotjs,
  React: SiReact,
  Angular: SiAngular,
  Flutter: SiFlutter,
  Tailwind: SiTailwindcss,
  "Three.js": SiThreedotjs,
  Blender: SiBlender,
  // Backend
  "Node.js": SiNodedotjs,
  Firebase: SiFirebase,
  Supabase: SiSupabase,
  Laravel: SiLaravel,
  Livewire: SiLivewire,
  Filament: SiFilament,
  FastAPI: SiFastapi,
  Leaflet: SiLeaflet,
  // Databases
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  Redis: SiRedis,
  // Testing
  Cypress: SiCypress,
  Playwright: PlaywrightMark,
  Vitest: SiVitest,
  Jest: SiJest,
  Sentry: SiSentry,
  // DevOps
  Git: SiGit,
  Vercel: SiVercel,
  GCP: SiGooglecloud,
  // AI
  "Claude Code": SiClaude,
  Gemini: SiGooglegemini,
  Cursor: CursorMark,
};

export function TechIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = MAP[name];
  if (!Icon) {
    return (
      <span
        aria-hidden
        className={`inline-grid size-[18px] place-items-center rounded-full border border-[var(--color-rule)] font-mono text-[9px] text-bone-muted ${
          className ?? ""
        }`}
      >
        {name.slice(0, 1)}
      </span>
    );
  }
  return <Icon className={className} aria-hidden focusable="false" />;
}

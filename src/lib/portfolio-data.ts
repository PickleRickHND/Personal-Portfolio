export type ProjectType = "mobile" | "web";

export type ProjectVisualMode = "phones" | "desktop";

export type ProjectI18nKey =
  | "petlab"
  | "equine"
  | "prizio"
  | "folium"
  | "printshop"
  | "arca"
  | "spotify"
  | "pharmacy";

export type Project = {
  id: string;
  slug: string;
  name: string;
  year: string;
  i18nKey: ProjectI18nKey;
  stack: string[];
  image: string;
  image2: string;
  gallery: string[];
  mobileGallery?: string[];
  type: ProjectType;
  mode: ProjectVisualMode;
  url: string | null;
  featured: boolean;
};

export const portfolio = {
  name: "Douglas Hedman",
  handle: "douglashedman",
  role: "Full-Stack Developer",
  location: "Tegucigalpa, Honduras",
  email: "douglashedman@yahoo.es",
  phone: "+504 8904 1949",
  whatsapp: "+504 8904 1949",
  social: {
    github: "PickleRickHND",
    linkedin: "douglas-hedman-9a48a5133",
    twitter: "DouglasHedman10",
    instagram: "douglashedman10",
  },
  resume: {
    en: "/resume/Douglas_Hedman_CV_2026_EN.pdf",
    es: "/resume/Douglas_Hedman_CV_2026_ES.pdf",
  },
  stats: [
    { n: "5+", labelKey: "productionApps" as const },
    { n: "300+", labelKey: "automatedTests" as const },
    { n: "4+", labelKey: "yearsExperience" as const },
    { n: "5", labelKey: "languages" as const },
  ],
  stack: {
    Languages: ["TypeScript", "JavaScript", "Dart", "Python", "PHP"],
    Frontend: ["Next.js", "React", "Angular", "Flutter", "Tailwind", "Three.js", "Leaflet"],
    Backend: ["Laravel", "Livewire", "Filament", "Node.js", "Firebase", "Supabase"],
    Databases: ["PostgreSQL", "MySQL", "Redis"],
    Testing: ["Cypress", "Playwright", "Sentry"],
    DevOps: ["Git", "Vercel", "GCP"],
    AI: ["Claude Code", "Gemini", "Cursor"],
  } satisfies Record<string, string[]>,
} as const;

export const projects: Project[] = [
  {
    id: "equine",
    slug: "equine",
    name: "Equine Digestive Atlas",
    year: "2026",
    i18nKey: "equine",
    stack: ["Next.js 16", "React Three Fiber", "Three.js", "Blender"],
    image: "/img/portfolio/equine1.png",
    image2: "/img/portfolio/equine2.png",
    gallery: [
      "/img/portfolio/equine1.png",
      "/img/portfolio/equine2.png",
    ],
    mobileGallery: ["/img/portfolio/equine_m1.png"],
    type: "web",
    mode: "desktop",
    url: null,
    featured: false,
  },
  {
    id: "prizio",
    slug: "prizio",
    name: "Prizio",
    year: "2025",
    i18nKey: "prizio",
    stack: ["Flutter", "Dart", "Firebase", "GCP", "Sentry"],
    image: "/img/portfolio/prizio_home.png",
    image2: "/img/portfolio/prizio_busqueda.png",
    gallery: [
      "/img/portfolio/prizio_home.png",
      "/img/portfolio/prizio_busqueda.png",
      "/img/portfolio/prizio_listas.png",
      "/img/portfolio/prizio_tiendas.png",
    ],
    type: "mobile",
    mode: "phones",
    url: null,
    featured: true,
  },
  {
    id: "petlab",
    slug: "petlab",
    name: "PetLab HN",
    year: "2026",
    i18nKey: "petlab",
    stack: ["Laravel", "Livewire", "Filament", "Tailwind", "MySQL"],
    image: "/img/portfolio/petlab1.png",
    image2: "/img/portfolio/petlab2.png",
    gallery: [
      "/img/portfolio/petlab1.png",
      "/img/portfolio/petlab2.png",
      "/img/portfolio/petlab3.png",
      "/img/portfolio/petlab4.png",
      "/img/portfolio/petlab5.png",
    ],
    mobileGallery: [
      "/img/portfolio/petlab_m1.png",
      "/img/portfolio/petlab_m2.png",
      "/img/portfolio/petlab_m3.png",
    ],
    type: "web",
    mode: "desktop",
    url: null,
    featured: true,
  },
  {
    id: "folium",
    slug: "folium",
    name: "Folium Labs",
    year: "2025",
    i18nKey: "folium",
    stack: ["Next.js 16", "TypeScript", "MDX", "Resend"],
    image: "/img/portfolio/folium1.png",
    image2: "/img/portfolio/folium2.png",
    gallery: [
      "/img/portfolio/folium1.png",
      "/img/portfolio/folium2.png",
      "/img/portfolio/folium3.png",
    ],
    mobileGallery: [
      "/img/portfolio/folium4.png",
      "/img/portfolio/folium5.png",
    ],
    type: "web",
    mode: "desktop",
    url: "foliumlabs.com",
    featured: false,
  },
  {
    id: "printshop",
    slug: "printshop",
    name: "PrintShop 504",
    year: "2024",
    i18nKey: "printshop",
    stack: ["Next.js", "Supabase", "React-PDF", "Zustand"],
    image: "/img/portfolio/printshop1.png",
    image2: "/img/portfolio/printshop2.png",
    gallery: [
      "/img/portfolio/printshop1.png",
      "/img/portfolio/printshop2.png",
      "/img/portfolio/printshop3.png",
      "/img/portfolio/printshop4.png",
      "/img/portfolio/printshop5.png",
      "/img/portfolio/printshop6.png",
    ],
    mobileGallery: [
      "/img/portfolio/printshop7.png",
      "/img/portfolio/printshop8.png",
      "/img/portfolio/printshop9.png",
    ],
    type: "web",
    mode: "desktop",
    url: "printshop504.com",
    featured: true,
  },
  {
    id: "arca",
    slug: "arca",
    name: "El Arca Honduras",
    year: "2024",
    i18nKey: "arca",
    stack: ["Next.js", "TypeScript", "Tailwind", "i18n"],
    image: "/img/portfolio/arca1.png",
    image2: "/img/portfolio/arca2.png",
    gallery: [
      "/img/portfolio/arca1.png",
      "/img/portfolio/arca2.png",
    ],
    mobileGallery: [
      "/img/portfolio/arca3.png",
      "/img/portfolio/arca4.png",
    ],
    type: "web",
    mode: "desktop",
    url: "elarcadehonduras.org",
    featured: false,
  },
  {
    id: "spotify",
    slug: "spotify",
    name: "Spotify Playlist Generator",
    year: "2024",
    i18nKey: "spotify",
    stack: ["React", "Spotify API", "Node.js", "i18n"],
    image: "/img/portfolio/spotify1.png",
    image2: "/img/portfolio/spotify2.png",
    gallery: [
      "/img/portfolio/spotify1.png",
      "/img/portfolio/spotify2.png",
      "/img/portfolio/spotify3.png",
    ],
    mobileGallery: ["/img/portfolio/spotify4.png"],
    type: "web",
    mode: "desktop",
    url: "spotify-playlist-generator.vercel.app",
    featured: false,
  },
  {
    id: "pharmacy",
    slug: "pharmacy",
    name: "Hedman Garcia Pharmacy",
    year: "2023",
    i18nKey: "pharmacy",
    stack: ["Laravel", "Angular", "MySQL"],
    image: "/img/portfolio/pharmacy-login.png",
    image2: "/img/portfolio/pharmacy-dashboard.png",
    gallery: [
      "/img/portfolio/pharmacy-login.png",
      "/img/portfolio/pharmacy-dashboard.png",
      "/img/portfolio/pharmacy-invoice.png",
      "/img/portfolio/pharmacy-products.png",
      "/img/portfolio/pharmacy-reports.png",
    ],
    mobileGallery: [
      "/img/portfolio/pharmacy-m-dashboard.png",
      "/img/portfolio/pharmacy-m-products.png",
      "/img/portfolio/pharmacy-m-invoice.png",
    ],
    type: "web",
    mode: "desktop",
    url: null,
    featured: true,
  },
];

const BY_SLUG = new Map(projects.map((p) => [p.slug, p]));

export function getProject(slug: string): Project | undefined {
  return BY_SLUG.get(slug);
}

/** Returns the next project in ordered list, or `null` when we're at the end. */
export function getNextProject(slug: string): Project | null {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i < 0 || i === projects.length - 1) return null;
  return projects[i + 1];
}

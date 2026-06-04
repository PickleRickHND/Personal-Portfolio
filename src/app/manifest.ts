import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Douglas Hedman · Full-Stack Developer",
    short_name: "Douglas Hedman",
    description:
      "Full-Stack Developer based in Tegucigalpa. Production web & mobile apps with Next.js, React, and Flutter.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f0e0c",
    theme_color: "#0f0e0c",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon.png", sizes: "512x512", type: "image/png" },
    ],
  };
}

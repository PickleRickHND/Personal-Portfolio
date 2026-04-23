export type NavKey = "index" | "work" | "about" | "stack" | "contact";

export const NAV_ITEMS: { key: NavKey; href: string }[] = [
  { key: "index", href: "/" },
  { key: "work", href: "/#work" },
  { key: "about", href: "/#about" },
  { key: "stack", href: "/#stack" },
  { key: "contact", href: "/#contact" },
];

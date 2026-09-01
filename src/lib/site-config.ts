// TODO: update once the project is deployed to its final domain — used to build
// absolute og:image / og:url values so link previews render correctly everywhere
// (some crawlers, e.g. LinkedIn, ignore relative image URLs).
export const SITE_URL = "https://hdev-portfolio.vercel.app";
export const SITE_NAME = "HDev";
export const OG_IMAGE = `${SITE_URL}/preview.png`;

export type NavLink = {
  href: string;
  label: string;
  icon: string; // Font Awesome class
};

export const navLinks: NavLink[] = [
  { href: "#home", label: "Home", icon: "fa-solid fa-house" },
  { href: "#about", label: "About", icon: "fa-regular fa-user" },
  { href: "#skills", label: "Skills", icon: "fa-solid fa-code" },
  { href: "#portfolio", label: "Projects", icon: "fa-solid fa-briefcase" },
  { href: "#contact", label: "Contact", icon: "fa-regular fa-envelope" },
];

export const socialLinks = {
  github: "https://github.com/hamzahaimeur",
  linkedin: "https://www.linkedin.com/in/hamzahaimeur/",
};

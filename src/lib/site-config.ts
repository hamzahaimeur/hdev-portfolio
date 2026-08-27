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

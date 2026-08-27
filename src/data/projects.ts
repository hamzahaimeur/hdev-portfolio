export type Technology = {
  name: string;
  icon: string; // Font Awesome class
};

export type ProjectSection = {
  title: string;
  icon: string;
  body: string;
  items?: string[];
};

export type Project = {
  slug: string;
  name: string;
  type: string;
  /** Short description used on the project card in the Projects section. */
  description: string;
  /** Slightly longer description used in the project page hero. */
  tagline: string;
  image: string;
  liveUrl: string;
  tech: Technology[];
  sections: ProjectSection[];
};

const HTML: Technology = { name: "HTML", icon: "fa-brands fa-html5" };
const CSS: Technology = { name: "CSS", icon: "fa-brands fa-css3-alt" };
const JS: Technology = { name: "JavaScript", icon: "fa-brands fa-js" };
const REACT: Technology = { name: "React", icon: "fa-brands fa-react" };
const TS: Technology = { name: "TypeScript", icon: "fa-solid fa-file-code" };
const TAILWIND: Technology = { name: "Tailwind", icon: "fa-solid fa-wind" };
const NEXT: Technology = { name: "Next.js", icon: "fa-solid fa-n" };

export const projects: Project[] = [
  {
    slug: "velora-ui",
    name: "Velora UI",
    type: "Frontend Project",
    description:
      "A high-end frontend experience featuring elegant visuals, responsive design, and polished interactions built with modern web technologies.",
    tagline:
      "A high-end frontend experience built with HTML, CSS and JavaScript, focused on elegant visuals, smooth interactions and a fully responsive layout.",
    image: "/assets/projects/velora.png",
    liveUrl: "https://velora-ui.vercel.app/",
    tech: [HTML, CSS, JS],
    sections: [
      {
        title: "Overview",
        icon: "fa-solid fa-circle-info",
        body: "Velora UI is a frontend interface project built with pure HTML, CSS and JavaScript. It focuses on delivering a refined visual language and a browsing experience that stays smooth and consistent across every screen size, without relying on a UI framework.",
      },
      {
        title: "About the project",
        icon: "fa-regular fa-file-lines",
        body: "The project was built as a showcase of what can be achieved with the core web platform alone: a carefully composed layout, considered typography and spacing, and interactions that respond to the user instead of decorating the page.",
      },
      {
        title: "Main features",
        icon: "fa-solid fa-list-check",
        body: "The interface is composed of reusable sections that keep the experience coherent from top to bottom.",
        items: [
          "Elegant, content-first visual design",
          "Fully responsive layout from mobile to large desktop",
          "Polished hover and transition states",
          "Smooth scrolling and reveal-on-scroll animations",
          "Semantic, accessible HTML structure",
        ],
      },
      {
        title: "Design / UI approach",
        icon: "fa-solid fa-palette",
        body: "The design relies on a restrained palette, generous spacing and consistent border radii so that the content stays the focus. Motion is used sparingly, only to support hierarchy and to make state changes readable.",
      },
      {
        title: "Implementation details",
        icon: "fa-solid fa-code",
        body: "Layouts are built with modern CSS (Flexbox and Grid) and custom transitions, while JavaScript handles the interactive behaviour such as scroll-based reveals and navigation state. Keeping the stack minimal means no build step and a very light payload.",
      },
      {
        title: "Responsive behavior",
        icon: "fa-solid fa-mobile-screen",
        body: "Every section adapts through fluid sizing and media queries: multi-column areas collapse into a single readable column, imagery rescales without distortion, and touch targets stay comfortable on small screens.",
      },
      {
        title: "Purpose",
        icon: "fa-solid fa-bullseye",
        body: "Velora UI serves as a reference for building premium-feeling interfaces with the fundamentals — proof that clean markup, disciplined CSS and a little JavaScript are enough for a high-end result.",
      },
    ],
  },
  {
    slug: "nova-dashboard",
    name: "Nova Dashboard",
    type: "Frontend Project",
    description:
      "A clean, modern admin dashboard with analytics, revenue tracking, and activity monitoring built with a focus on clarity and usability.",
    tagline:
      "A clean, modern admin dashboard with analytics, revenue tracking and activity monitoring, built with React, TypeScript, Tailwind CSS and Next.js.",
    image: "/assets/projects/nova.png",
    liveUrl: "https://nova-dashboard-brown.vercel.app/",
    tech: [REACT, TS, TAILWIND, NEXT],
    sections: [
      {
        title: "Overview",
        icon: "fa-solid fa-circle-info",
        body: "Nova Dashboard is an admin interface that brings analytics, revenue tracking and activity monitoring into a single, readable workspace. The whole layout is organised around clarity: the most important numbers are visible first, details follow.",
      },
      {
        title: "About the project",
        icon: "fa-regular fa-file-lines",
        body: "It was built to explore how a data-heavy interface can stay calm. Cards, charts and lists share one spacing and typography system, so scanning the page never feels noisy even when a lot of information is on screen.",
      },
      {
        title: "Main features",
        icon: "fa-solid fa-list-check",
        body: "The dashboard is composed of focused, self-contained panels.",
        items: [
          "Analytics overview with key metrics",
          "Revenue tracking panels",
          "Recent activity monitoring",
          "Reusable card and table components",
          "Consistent dark interface with accent highlights",
        ],
      },
      {
        title: "Technologies used",
        icon: "fa-solid fa-layer-group",
        body: "Built with Next.js and React for the application shell and routing, TypeScript for typed component contracts and data models, and Tailwind CSS for a consistent utility-driven styling layer.",
      },
      {
        title: "Design / UI approach",
        icon: "fa-solid fa-palette",
        body: "A dark, low-contrast surface lets the data and accent colours carry the meaning. Panels use a shared radius, border and elevation language so that every new module automatically fits the system.",
      },
      {
        title: "Implementation details",
        icon: "fa-solid fa-code",
        body: "The interface is broken into typed, reusable components that receive their data as props, which keeps the presentation layer separate from the data shape and makes new panels cheap to add.",
      },
      {
        title: "Responsive behavior",
        icon: "fa-solid fa-mobile-screen",
        body: "The grid reflows from a multi-column desktop workspace to stacked cards on tablet and mobile, with tables and charts kept scrollable inside their own containers so the page never overflows horizontally.",
      },
      {
        title: "Purpose",
        icon: "fa-solid fa-bullseye",
        body: "Nova Dashboard demonstrates the ability to structure a real application interface — not just a landing page — with typed components, a coherent design system and data presented in a way that is genuinely usable.",
      },
    ],
  },
  {
    slug: "amana-store",
    name: "Amana Store",
    type: "Frontend Project",
    description:
      "An e-commerce storefront for halal, family-friendly clothing, home goods, and accessories, featuring product listings, categories, and a shopping cart.",
    tagline:
      "An e-commerce storefront for halal, family-friendly clothing, home goods and accessories, with product listings, categories and a shopping cart.",
    image: "/assets/projects/amana.png",
    liveUrl: "https://amana-store.vercel.app/",
    tech: [REACT, TS, TAILWIND, NEXT],
    sections: [
      {
        title: "Overview",
        icon: "fa-solid fa-circle-info",
        body: "Amana Store is an e-commerce storefront for halal, family-friendly clothing, home goods and accessories. It covers the core shopping journey: browsing categories, exploring product listings and building a cart.",
      },
      {
        title: "About the project",
        icon: "fa-regular fa-file-lines",
        body: "The storefront was built around the products themselves. Imagery, pricing and category navigation are given room to breathe so that finding an item takes as few steps as possible.",
      },
      {
        title: "Main features",
        icon: "fa-solid fa-list-check",
        body: "The shop is assembled from reusable commerce building blocks.",
        items: [
          "Product listings with imagery and pricing",
          "Category-based browsing",
          "Shopping cart with item management",
          "Reusable product card components",
          "Clean, family-friendly storefront presentation",
        ],
      },
      {
        title: "Technologies used",
        icon: "fa-solid fa-layer-group",
        body: "Next.js and React power the storefront and its navigation, TypeScript types the product and cart models, and Tailwind CSS keeps the visual system consistent across every page.",
      },
      {
        title: "Design / UI approach",
        icon: "fa-solid fa-palette",
        body: "The layout keeps a calm, uncluttered rhythm: a consistent product grid, clear typographic hierarchy for names and prices, and restrained accents reserved for actions such as adding to the cart.",
      },
      {
        title: "Implementation details",
        icon: "fa-solid fa-code",
        body: "Products and categories are modelled as typed data and rendered through shared components, while cart state is handled in one place so quantity changes and totals stay predictable across the app.",
      },
      {
        title: "Responsive behavior",
        icon: "fa-solid fa-mobile-screen",
        body: "The product grid adapts column count by breakpoint, navigation collapses into a mobile-friendly menu, and cart controls stay large enough to use comfortably on touch devices.",
      },
      {
        title: "Purpose",
        icon: "fa-solid fa-bullseye",
        body: "Amana Store shows a complete storefront flow built with a modern React stack, from category browsing through to cart management, with an interface that stays approachable for everyday shoppers.",
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

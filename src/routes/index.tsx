import { createFileRoute } from "@tanstack/react-router";
import SiteHeader from "@/components/layout/SiteHeader";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import SectionDivider from "@/components/ui/SectionDivider";
import Footer from "@/components/layout/Footer";
import { SITE_URL } from "@/lib/site-config";

const TITLE = "Hamza Haimeur | Front-End Developer";
const DESCRIPTION =
  "Front-end developer building fast, modern web experiences with React & TypeScript.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="home" id="home">
        <SiteHeader />
        <Hero />
      </section>

      <SectionDivider />

      <About />

      <SectionDivider />

      <Skills />

      <SectionDivider />

      <Projects />

      <SectionDivider />

      <Contact />

      <Footer />
    </>
  );
}

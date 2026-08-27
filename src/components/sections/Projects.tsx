import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/sections/ProjectCard";
import { projects } from "@/data/projects";

const DELAYS = [".1s", ".25s", ".4s"];

export default function Projects() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <Reveal className="portfolio-header" threshold={0.25}>
          <div className="portfolio-content">
            <span className="badge">
              <i className="fa-solid fa-code"></i>
              MY WORK
            </span>

            <h1>
              My <span>Projects</span>
            </h1>

            <p>
              A carefully selected collection of projects showcasing my expertise in building
              modern, responsive web interfaces that blend high performance, refined design, and
              outstanding user experiences.
            </p>
          </div>

          <div className="portfolio-illustration">
            <i className="fa-solid fa-laptop-code"></i>
          </div>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              {...(DELAYS[index] ? { delay: DELAYS[index] } : {})}
            />
          ))}
        </div>

        <div className="portfolio-footer">
          <Reveal className="cta-box" threshold={0.25}>
            <div>
              <h3>Have a project in mind?</h3>
              <p>Let&apos;s work together and build something amazing.</p>
            </div>

            <a href="#contact" className="contact-btn">
              Contact Me
              <i className="fa-regular fa-message"></i>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

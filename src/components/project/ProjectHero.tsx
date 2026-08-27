import type { Project } from "@/data/projects";

type ProjectHeroProps = {
  project: Project;
};

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <div className="project-hero">
      <div className="project-hero-content">
        <span className="badge">
          <i className="fa-solid fa-briefcase"></i>
          {project.type.toUpperCase()}
        </span>

        <h1>
          {project.name.split(" ")[0]} <span>{project.name.split(" ").slice(1).join(" ")}</span>
        </h1>

        <p>{project.tagline}</p>

        <div className="project-hero-actions">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            Live Demo
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

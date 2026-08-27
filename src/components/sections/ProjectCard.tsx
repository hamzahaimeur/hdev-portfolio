import { Link } from "@tanstack/react-router";
import Reveal from "@/components/ui/Reveal";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  /** Stagger delay, matching the nth-child delays of the original CSS. */
  delay?: string;
};

export default function ProjectCard({ project, delay }: ProjectCardProps) {
  return (
    <Reveal
      className="project-card"
      threshold={0.25}
      {...(delay ? { style: { animationDelay: delay } } : {})}
    >
      <div className="project-image">
        <img src={project.image} alt={`${project.name} preview`} loading="lazy" />
      </div>

      <div className="project-info">
        <span className="project-type">{project.type}</span>

        <h3>{project.name}</h3>

        <p>{project.description}</p>

        <div className="project-tech">
          {project.tech.map((tech) => (
            <span key={tech.name}>
              <i className={tech.icon}></i> {tech.name}
            </span>
          ))}
        </div>

        <div className="project-links">
          <Link to="/projects/$slug" params={{ slug: project.slug }} className="project-view">
            View Project
            <i className="fa-solid fa-arrow-right"></i>
          </Link>

          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            Live Demo
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
    </Reveal>
  );
}

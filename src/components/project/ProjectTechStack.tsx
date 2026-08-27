import Reveal from "@/components/ui/Reveal";
import type { Technology } from "@/data/projects";

type ProjectTechStackProps = {
  tech: Technology[];
};

export default function ProjectTechStack({ tech }: ProjectTechStackProps) {
  return (
    <Reveal className="project-stack" threshold={0.2}>
      <h2>
        Technologies <span>Used</span>
      </h2>

      <div className="project-stack-list">
        {tech.map((item, index) => (
          <span key={item.name} className="tech-badge" style={{ animationDelay: `${index * 0.08}s` }}>
            <i className={item.icon}></i>
            {item.name}
          </span>
        ))}
      </div>
    </Reveal>
  );
}

import Reveal from "@/components/ui/Reveal";
import type { ProjectSection } from "@/data/projects";

type ProjectDetailsProps = {
  sections: ProjectSection[];
};

export default function ProjectDetails({ sections }: ProjectDetailsProps) {
  return (
    <div className="project-details">
      {sections.map((section) => (
        <Reveal key={section.title} className="project-detail-card" threshold={0.2}>
          <div className="project-detail-icon">
            <i className={section.icon}></i>
          </div>

          <div className="project-detail-content">
            <h3>{section.title}</h3>
            <p>{section.body}</p>

            {section.items ? (
              <ul>
                {section.items.map((item) => (
                  <li key={item}>
                    <i className="fa-solid fa-check"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

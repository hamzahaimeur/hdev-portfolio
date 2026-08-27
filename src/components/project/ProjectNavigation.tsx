import { Link } from "@tanstack/react-router";

type ProjectNavigationProps = {
  position: "top" | "bottom";
  liveUrl?: string;
};

export default function ProjectNavigation({ position, liveUrl }: ProjectNavigationProps) {
  return (
    <div className={`project-nav project-nav-${position}`}>
      <Link to="/" hash="portfolio" className="back-link">
        <i className="fa-solid fa-arrow-left"></i>
        Back to Projects
      </Link>

      {liveUrl ? (
        <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="contact-btn">
          Visit Live Site
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      ) : null}
    </div>
  );
}

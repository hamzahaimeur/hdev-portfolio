import { useEffect, useState } from "react";
import type { Project } from "@/data/projects";

type ProjectGalleryProps = {
  project: Project;
};

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="project-preview"
        onClick={() => setOpen(true)}
        aria-label={`Open a larger preview of ${project.name}`}
      >
        <img src={project.image} alt={`${project.name} preview`} />

        <span className="project-preview-hint">
          <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
          View full image
        </span>
      </button>

      <div
        className={`project-lightbox${open ? " active" : ""}`}
        onClick={() => setOpen(false)}
        role="presentation"
      >
        <button type="button" className="close-btn" aria-label="Close preview">
          <i className="fa-solid fa-xmark"></i>
        </button>

        <img src={project.image} alt={`${project.name} full preview`} />
      </div>
    </>
  );
}

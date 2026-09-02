// Project page interactions — same behavior as the new project pages.
const projectPreview = document.querySelector(".project-preview");
const projectLightbox = document.querySelector(".project-lightbox");
const projectLightboxClose = projectLightbox?.querySelector(".close-btn");

function closeProjectLightbox() {
  projectLightbox?.classList.remove("active");
  document.body.style.overflow = "";
}

projectPreview?.addEventListener("click", () => {
  projectLightbox?.classList.add("active");
  document.body.style.overflow = "hidden";
});

projectLightbox?.addEventListener("click", (event) => {
  if (event.target === projectLightbox) closeProjectLightbox();
});

projectLightboxClose?.addEventListener("click", closeProjectLightbox);

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeProjectLightbox();
});

// Reveal the project tech stack and detail cards on scroll.
const projectRevealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".project-stack, .project-detail-card").forEach((el) => {
  projectRevealObserver.observe(el);
});

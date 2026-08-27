import { createFileRoute, notFound } from "@tanstack/react-router";
import SiteHeader from "@/components/layout/SiteHeader";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectGallery from "@/components/project/ProjectGallery";
import ProjectTechStack from "@/components/project/ProjectTechStack";
import ProjectDetails from "@/components/project/ProjectDetails";
import ProjectNavigation from "@/components/project/ProjectNavigation";
import SectionDivider from "@/components/ui/SectionDivider";
import { getProject } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found | Hamza Haimeur" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    const title = `${project.name} | Hamza Haimeur`;
    return {
      meta: [
        { title },
        { name: "description", content: project.tagline },
        { property: "og:title", content: title },
        { property: "og:description", content: project.tagline },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();

  return (
    <>
      <section className="project-page" id="project">
        <SiteHeader />

        <div className="container">
          <ProjectNavigation position="top" />
          <ProjectHero project={project} />
          <ProjectGallery project={project} />
        </div>
      </section>

      <SectionDivider />

      <section className="project-body" id="project-details">
        <div className="container">
          <ProjectTechStack tech={project.tech} />
          <ProjectDetails sections={project.sections} />
          <ProjectNavigation position="bottom" liveUrl={project.liveUrl} />
        </div>
      </section>
    </>
  );
}

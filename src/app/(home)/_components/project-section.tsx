import { Project } from "@/feature/project/components/project";
import { SectionWrapper } from "@/feature/shared/components/section-wrapper";
import { projects, smallProjects } from "@/feature/project/constants";

export function ProjectSection() {
  return (
    <SectionWrapper
      title="projects"
      viewMore={{ visible: true, link: "/projects" }}
    >
      <div className="grid grid-cols-3 gap-2">
        {[...projects, ...smallProjects].map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
}

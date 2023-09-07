import { Project, SectionWrapper } from "@/_components";
import { projects } from "@/_constants";

export function ProjectSection() {
  return (
    <SectionWrapper
      title="projects"
      viewMore={{ visible: true, link: "/projects" }}
    >
      <div className="grid grid-cols-3 gap-2">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
}

import { Project } from "@/feature/project/components/project";
import { smallProjects } from "@/feature/project/constants";
import { SectionWrapper } from "@/feature/shared/components/section-wrapper";

export function SmallProjects() {
  return (
    <SectionWrapper
      title="small-projects"
      viewMore={{ visible: false }}
      showTitleLine={false}
    >
      <div className="grid grid-cols-3 gap-2">
        {smallProjects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
}

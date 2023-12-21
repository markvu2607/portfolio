import { Project } from "@/components/project";
import { SectionWrapper } from "@/components/section-wrapper";
import { smallProjects } from "@/constants";

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

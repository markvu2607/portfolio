import { Project } from "@/components/project";
import { SectionWrapper } from "@/components/section-wrapper";
import { projects } from "@/constants";

export function CompleteApps() {
  return (
    <SectionWrapper
      title="complete-apps"
      viewMore={{ visible: false }}
      showTitleLine={false}
    >
      <div className="grid grid-cols-3 gap-2">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
}

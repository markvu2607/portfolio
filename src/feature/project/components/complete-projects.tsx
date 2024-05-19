import { SectionWrapper } from "@/feature/shared/components/section-wrapper";
import { projects } from "../constants";
import { Project } from "./project";

export function CompleteProjects() {
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

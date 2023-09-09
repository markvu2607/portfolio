import { Project, SectionWrapper } from "@/_components";
import { projects } from "@/_constants";

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

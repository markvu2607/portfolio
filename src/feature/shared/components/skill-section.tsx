import { skills } from "@/feature/skill/constants";
import { SectionWrapper } from "./section-wrapper";
import { Table } from "./table";

type TSkillSectionProps = {
  showTitleLine?: boolean;
};

export function SkillSection({ showTitleLine = true }: TSkillSectionProps) {
  return (
    <SectionWrapper
      title="skills"
      viewMore={{ visible: false }}
      showTitleLine={showTitleLine}
    >
      <div className="grid grid-cols-3 gap-2">
        {skills.map((skill, index) => (
          <Table key={index} skill={skill} />
        ))}
      </div>
    </SectionWrapper>
  );
}

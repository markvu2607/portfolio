import { SectionWrapper, Table } from "@/_components";
import { skills } from "@/_constants";

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

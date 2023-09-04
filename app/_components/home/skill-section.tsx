import { SectionWrapper, Table } from "@/_components";
import { skills } from "@/_constants";

export function SkillSection() {
  return (
    <SectionWrapper title="skills" viewMore={{ visible: false }}>
      <div className="grid grid-cols-3 gap-2">
        {skills.map((skill, index) => (
          <Table key={index} skill={skill} />
        ))}
      </div>
    </SectionWrapper>
  );
}

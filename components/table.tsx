import { TSkill } from "@/types/skill";

type TTableProps = {
  skill: TSkill;
};

export function Table({ skill }: TTableProps) {
  return (
    <div className="border border-gray">
      <div className="font-semibold border-b border-gray p-2">
        {skill.skillType}
      </div>
      <div className="p-2">
        {skill.skills.map((sk, index) => (
          <span key={index} className="text-gray">
            {sk}{" "}
          </span>
        ))}
      </div>
    </div>
  );
}

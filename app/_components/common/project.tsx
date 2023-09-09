"use client";

import { TProject } from "@/_types";
import Image from "next/image";
import { useRouter } from "next/navigation";

type TProjectProps = {
  project: TProject;
};

export function Project({ project }: TProjectProps) {
  const router = useRouter();

  return (
    <div className="border border-gray">
      {project.thumbnail && (
        <Image
          src={project.thumbnail}
          alt={project.name}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      )}
      <div
        className={`p-2 border-b border-gray ${
          project.thumbnail && "border-t"
        }`}
      >
        {project.technologies.map((tech, index) => (
          <span key={index} className="text-gray">
            {tech}{" "}
          </span>
        ))}
      </div>
      <div className="flex flex-col items-start gap-4 p-4">
        <div className="text-[24px] font-medium">{project.name}</div>
        <div className="text-gray">{project.description}</div>
        <button
          className="px-4 py-2 border border-primary"
          onClick={() => router.push(project.liveLink)}
        >
          <span className="font-medium">Live ~{">"}</span>
        </button>
      </div>
    </div>
  );
}

import { TProject } from "./types";

export const projects: TProject[] = [
  {
    name: "Portfolio",
    description: "Mark's Portfolio",
    thumbnail: "/avatar.jpeg",
    technologies: ["NextJs", "Framer-Motion", "TailwindCSS"],
    liveLink: "https://markvu.tech/",
  },
];

export const smallProjects: TProject[] = [
  {
    name: "Levocab",
    description: "CLI for learn English vocabulary.",
    thumbnail: "/levocab-thumbnail.png",
    technologies: ["NodeJS", "Chalk", "Inquirer"],
    liveLink: "https://www.npmjs.com/package/levocab",
  },
];

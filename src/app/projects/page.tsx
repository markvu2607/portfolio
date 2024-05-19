import { CompleteProjects } from "@/feature/project/components/complete-projects";
import { SmallProjects } from "@/feature/project/components/small-projects";
import { Breadcrumb } from "@/feature/shared/components/breadcrumb";

export default function Work() {
  return (
    <main className="flex flex-col gap-24 py-24">
      <Breadcrumb link="projects" description="List of my projects" />

      <CompleteProjects />

      <SmallProjects />
    </main>
  );
}

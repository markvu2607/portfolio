import { Breadcrumb } from "@/components/breadcrumb";
import { CompleteApps } from "./_components/complete-apps";
import { SmallProjects } from "./_components/small-projects";

export default function Work() {
  return (
    <main className="flex flex-col gap-24 py-24">
      <Breadcrumb link="projects" description="List of my projects" />

      <CompleteApps />

      <SmallProjects />
    </main>
  );
}

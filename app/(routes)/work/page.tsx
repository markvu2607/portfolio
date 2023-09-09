import { Breadcrumb, CompleteApps, SmallProjects } from "@/_components";

export default function Work() {
  return (
    <main className="flex flex-col gap-24 py-24">
      <Breadcrumb link="projects" description="List of my projects" />

      <CompleteApps />

      <SmallProjects />
    </main>
  );
}

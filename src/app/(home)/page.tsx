import { SkillSection } from "@/feature/shared/components/skill-section";
import { AboutMeSection } from "./_components/about-me-section";
import { Banner } from "./_components/banner";
import { ContactSection } from "./_components/contact-section";
import { ProjectSection } from "./_components/project-section";
import { Quote } from "./_components/quote";

export default function Home() {
  return (
    <main className="flex flex-col gap-24 py-24">
      <Banner />
      <Quote
        content="With great power comes great electricity bill"
        author="Dr. Who"
      />
      <ProjectSection />
      <SkillSection />
      <AboutMeSection />
      <ContactSection />
    </main>
  );
}

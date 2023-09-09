import { Breadcrumb, SectionWrapper, SkillSection } from "@/_components";
import Image from "next/image";

export default function Contact() {
  return (
    <main className="flex flex-col gap-24 py-24">
      <Breadcrumb link="about-me" description="Who am i?" />

      <div className="flex items-center gap-4">
        <span className="flex-1 text-gray">
          Hello, i’m Mark!
          <br />
          <br />
          I’m a self-taught front-end developer from Vietnam. I can develop
          responsive websites from scratch and raise them into modern
          user-friendly web experiences.
          <br />
          <br />
          Transforming my creativity and knowledge into a websites has been my
          passion for over a year. I have been helping various clients to
          establish their presence online. I always strive to learn about the
          newest technologies and frameworks.
        </span>
        <Image
          className="rounded-full"
          src="/avatar.jpg"
          alt="Mark Vu"
          width={300}
          height={300}
        />
      </div>

      <SkillSection showTitleLine={false} />

      <SectionWrapper
        title="my-fun-facts"
        showTitleLine={false}
        viewMore={{ visible: false }}
      >
        <div className="flex flex-wrap gap-2">
          <span className="p-2 border border-gray text-gray">
            I like winter more than summer
          </span>

          <span className="p-2 border border-gray text-gray">
            I like <span className="text-white">pizza</span> and{" "}
            <span className="text-white">pasta</span>
          </span>

          <span className="p-2 border border-gray text-gray">
            I like winter more than summerrrrrrrrrrrr
          </span>

          <span className="p-2 border border-gray text-gray">
            I like winter more than summerrrr
          </span>

          <span className="p-2 border border-gray text-gray">
            I like <span className="text-white">pizza</span> and{" "}
            <span className="text-white">pasta</span>
          </span>
        </div>
      </SectionWrapper>
    </main>
  );
}

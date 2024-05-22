"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { SectionWrapper } from "@/feature/shared/components/section-wrapper";

export function AboutMeSection() {
  const router = useRouter();

  return (
    <SectionWrapper title="about-me" viewMore={{ visible: false }}>
      <div className="flex items-center gap-4">
        <div className="flex flex-col gap-7 items-start">
          <span className="text-gray">
            Hello, i’m Mark!
            <br />
            <br /> I’m a self-taught front-end developer based in Hanoi,
            Vietnam. I can develop responsive websites from scratch and raise
            them into modern user-friendly web experiences.
            <br />
            <br /> Transforming my creativity and knowledge into a websites has
            been my passion for over a year. I have been helping various clients
            to establish their presence online. I always strive to learn about
            the newest technologies and frameworks.
          </span>
          <button
            className="px-4 py-2 border border-primary font-medium"
            onClick={() => router.push("/about-me")}
          >
            Read more -{">"}
          </button>
        </div>
        <Image
          className="rounded-full"
          src={"/avatar.jpeg"}
          alt="Mark Vu"
          width={400}
          height={400}
        />
      </div>
    </SectionWrapper>
  );
}

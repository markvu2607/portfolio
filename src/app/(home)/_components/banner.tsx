"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { TypeAnimation } from "react-type-animation";

export function Banner() {
  const router = useRouter();

  return (
    <section className="flex gap-2">
      <div className="flex-1 pt-12">
        <div className="flex flex-col items-start gap-6">
          <span className="text-[32px] font-semibold">
            <TypeAnimation
              sequence={[
                "I'm a full-stack developer from Vietnam.",
                1000,
                "Nice to meet you.",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </span>
          <span className="text-gray">
            I craft responsive websites where technologies meet creativity.
          </span>
          <button
            className="px-4 py-2 border border-primary font-medium shadow-main-button-start hover:shadow-main-button-end outline-1 outline outline-primary outline-offset-0 hover:outline-offset-[15px] hover:outline-none transition-all duration-1000 ease-[cubic-bezier(0.19, 1, 0.22, 1)]"
            onClick={() => router.push("/contact")}
          >
            Contact me!!
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Image
          className="rounded-full"
          src="/avatar.jpeg"
          alt="Mark Vu"
          width={400}
          height={400}
        />
        <div className="flex items-center gap-2 p-2 border border-gray w-[90%]">
          <div className="w-[16px] h-[16px] bg-primary" />
          <span className="text-gray">
            Currently working on <span className="text-white">Portfolio</span>
          </span>
        </div>
      </div>
    </section>
  );
}

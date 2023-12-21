import Image from "next/image";
import Link from "next/link";

import { SectionWrapper } from "@/components/section-wrapper";

export function ContactSection() {
  return (
    <SectionWrapper title="contact" viewMore={{ visible: false }}>
      <div className="flex gap-4">
        <span className="flex-1 text-gray">
          I’m interested in freelance opportunities. However, if you have other
          request or question, don’t hesitate to contact me.
        </span>
        <div className="flex-1 flex flex-col gap-4 p-4 border border-gray">
          <span className="font-semibold">Message me here</span>
          <div>
            <Link
              href={
                `${process.env.GITHUB_PROVIDER}${process.env.GITHUB_ACCOUNT}` ||
                "/"
              }
              target="_blank"
            >
              <div className="flex items-center gap-1">
                <Image src="/github.svg" alt="Github" width={32} height={32} />
                <span className="text-gray">{process.env.GITHUB_ACCOUNT}</span>
              </div>
            </Link>
            <Link href={`mailto:${process.env.EMAIL}`}>
              <div className="flex items-center gap-1">
                <Image src="/email.svg" alt="Email" width={32} height={32} />
                <span className="text-gray">{process.env.EMAIL}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

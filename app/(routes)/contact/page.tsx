import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="flex flex-col gap-24 py-24">
      <div className="flex flex-col gap-2">
        <span className="font-semibold text-[32px]">
          <span className="text-primary">/</span>
          <span>contact</span>
        </span>
        <span>Who am i?</span>
      </div>

      <div className="flex gap-4">
        <span className="flex-1 text-gray">
          I’m interested in freelance opportunities. However, if you have other
          request or question, don’t hesitate to contact me.
        </span>
        <div className="flex-1 flex flex-col gap-4 p-4 border border-gray">
          <span className="font-semibold">Message me here</span>
          <div>
            <Link href={process.env.GITHUB || "/"} target="_blank">
              <div className="flex items-center gap-1">
                <Image src="/github.svg" alt="Github" width={32} height={32} />
                <span className="text-gray">markvu2607</span>
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

      <div className="flex flex-col gap-4">
        <span className="font-medium text-[32px]">
          <span className="text-primary">#</span>
          <span>all-media</span>
        </span>
        <div className="flex gap-4">
          <Link href={process.env.GITHUB || "/"} target="_blank">
            <div className="flex items-center gap-1">
              <Image src="/github.svg" alt="Github" width={32} height={32} />
              <span className="text-gray">markvu2607</span>
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
    </main>
  );
}

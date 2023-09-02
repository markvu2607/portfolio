import Image from "next/image";
import Link from "next/link";
import { RotateButton } from "..";

export function Footer() {
  return (
    <footer className="fixed w-full border-t border-t-gray">
      <div className="flex flex-col items-center gap-12 max-w-[1024px] mx-auto py-8">
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-4">
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <Image src="/logo.svg" alt="Mark Logo" width={20} height={20} />
                <span className="font-bold">Mark</span>
              </div>
              <div className="text-gray hover:text-white duration-200">
                <Link href={`mailto:${process.env.EMAIL}`}>
                  {process.env.EMAIL}
                </Link>
              </div>
            </div>
            <span>Front-end developer from Vietnam.</span>
          </div>
          <div>
            <span className="font-medium text-[24px]">Media</span>
            <div className="flex gap-2">
              <RotateButton>
                <Link href={process.env.GITHUB || "/"} target="_blank">
                  <Image
                    src="/github.svg"
                    alt="Github"
                    width={32}
                    height={32}
                  />
                </Link>
              </RotateButton>
              <RotateButton>
                <Link href={process.env.LINKEDIN || "/"} target="_blank">
                  <Image
                    src="/linkedin.svg"
                    alt="Linkedin"
                    width={32}
                    height={32}
                  />
                </Link>
              </RotateButton>
            </div>
          </div>
        </div>
        <span className="text-gray">© Copyright 2023. Made by Mark.</span>
      </div>
    </footer>
  );
}

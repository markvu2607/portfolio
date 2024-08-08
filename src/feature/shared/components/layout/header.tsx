"use client";

import { routes } from "@/feature/shared/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { RotateButton } from "../rotate-button";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed z-50 w-full h-[60px] bg-background">
      <div className="flex justify-between max-w-[1024px] mx-auto pt-8 pb-2">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Mark Logo" width={20} height={20} />
            <span className="font-bold">Mark</span>
          </div>
        </Link>
        <nav>
          <ul className="flex justify-between gap-8">
            {routes.map((route) => (
              <li
                key={route.link}
                className={`font-medium ${
                  pathname !== route.link &&
                  "opacity-70 hover:opacity-100 duration-200"
                }`}
              >
                <span className="text-primary">#</span>
                <Link href={route.link} target={route.target}>
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        className="fixed left-4 top-0 flex flex-col gap-2 items-center"
      >
        <div className="border-l border-gray h-[45vh]" />
        <div className="flex flex-col items-center gap-2">
          <RotateButton>
            <Link
              href={
                `${process.env.GITHUB_PROVIDER}${process.env.GITHUB_ACCOUNT}` ||
                "/"
              }
              target="_blank"
            >
              <Image src="/github.svg" alt="Github" width={32} height={32} />
            </Link>
          </RotateButton>
          <RotateButton>
            <Link
              href={
                `${process.env.LINKEDIN_PROVIDER}${process.env.LINKEDIN_ACCOUNT}` ||
                "/"
              }
              target="_blank"
            >
              <Image
                src="/linkedin.svg"
                alt="Linkedin"
                width={32}
                height={32}
              />
            </Link>
          </RotateButton>
        </div>
      </motion.div>
    </header>
  );
}

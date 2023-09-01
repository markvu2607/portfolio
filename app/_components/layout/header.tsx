"use client";

import { routes } from "@/app/_constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed w-full h-[60px] bg-background">
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
                <Link href={route.link}>{route.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

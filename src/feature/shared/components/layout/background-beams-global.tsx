"use client";

import { PropsWithChildren } from "react";

import { BackgroundBeams } from "@/feature/shared/components/background-beams";

type BackgroundBeamsGlobalProps = PropsWithChildren;

export function BackgroundBeamsGlobal({
  children,
}: BackgroundBeamsGlobalProps) {
  return (
    <>
      {children}
      <BackgroundBeams className="-z-[1000] fixed" />
    </>
  );
}

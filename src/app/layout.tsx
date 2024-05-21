import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";

import { BackgroundBeamsGlobal } from "@/feature/shared/components/layout/background-beams-global";
import { Footer } from "@/feature/shared/components/layout/footer";
import { Header } from "@/feature/shared/components/layout/header";
import { SpinnerTitleBarEffect } from "@/feature/shared/components/layout/spinner-title-bar-effect";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mark Vu",
  description: "I'm a developer!",
  icons: "/logo.svg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          firaCode.className,
          "flex flex-col",
          "min-h-screen",
          "bg-background text-white"
        )}
      >
        <BackgroundBeamsGlobal>
          <Header />
          <div
            className={cn(
              "flex-1 flex flex-col",
              "w-full max-w-[1024px]",
              "mx-auto"
            )}
          >
            <div className="h-[60px]" />
            <div className="flex-1">{children}</div>
          </div>
          <Footer />
        </BackgroundBeamsGlobal>
      </body>
      <SpinnerTitleBarEffect />
    </html>
  );
}

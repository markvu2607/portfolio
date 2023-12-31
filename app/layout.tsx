import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { SpinnerTitleBarEffect } from "@/components/layout/spinner-title-bar-effect";
import "./globals.css";
import { cn } from "@/utils";

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
      </body>
      <SpinnerTitleBarEffect />
    </html>
  );
}

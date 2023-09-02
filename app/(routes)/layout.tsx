import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import { Footer, Header, SpinnerTitleBarEffect } from "../_components";
import "../globals.css";

const inter = Fira_Code({ subsets: ["latin"] });

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
      <body className={`${inter.className} bg-background text-white`}>
        <Header />
        <div className="w-full max-w-[1024px] mx-auto">
          <div className="h-[60px]" />
          {children}
        </div>
        <Footer />
      </body>
      <SpinnerTitleBarEffect />
    </html>
  );
}

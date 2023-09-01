import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "../_components";

const inter = Inter({ subsets: ["latin"] });

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
        <div className="w-full max-w-[1024px] mx-auto">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}

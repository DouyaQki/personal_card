import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

import placeholder from "@/assets/placeholder.jpg";
import Image from "next/image";
import { Banner } from "@/components/Banner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QkiJose",
  description: "Card con links a mis redes y proyectos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="sticky top-0 text-[#b8bcc3] bg-[#18181b] border-b-1 border-[#000]">
          <nav className="p-3 w-full flex justify-center gap-10">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/projects" className="hover:underline">Projects</Link>
          </nav>
        </header>
        <Banner />
        <div
          id="profile-details"
          className="mt-[-4rem] w-full flex flex-col justify-center items-center"
        >
          <Image
            src={placeholder}
            alt="profile"
            className={
              "rounded-full w-32 h-32 md:w-40 md:h-40 select-none border-4 border-[#0f0f0f]"
            }
          />
        </div>

        {children}
        <div className="my-60" />
      </body>
    </html>
  );
}

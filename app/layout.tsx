import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarCanvas from "../components/main/StarBackground";

import Footer from "@/components/main/Footer";
import Navbar from "@/components/main/Navbar";
import Projects from "@/components/backup/Projects";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space Portofolio",
  description: "This is my portofolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

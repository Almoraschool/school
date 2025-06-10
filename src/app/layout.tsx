import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import { latto, poppins } from "@/utils/font";
import TopHeader from "@/components/top-header";
import Marque from "@/components/marque";
import Footer from "@/components/footer";
import Link from "next/link";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Beersheba Sr Sec School Almora - Leading Education Hub",
  description:
    "Beersheba Sr Sec School in Almora excels in providing quality education with modern facilities and a focus on holistic development. Secure your child's future with us!",
  keywords:
    "Beersheba Senior Secondary School Almora,Beersheba sr. sec. school, Top Almora school, Best school Almora, Beersheba school homepage, Quality education Almora, Best school near me ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${latto.className} bg-white overflow-x-hidden`}>
        <TopHeader />
        <Header />
        <Marque />
        {children}
        <Footer />
        <div className="p-5">
          <p className={`${poppins.className} text-center font-medium`}>
            @Copyright 2024 All Rights Reserved
          </p>
          <p className={`${poppins.className} text-center font-medium`}>
            <Link href={"https://preettech.com/"}>Developed by Preet Tech</Link>
          </p>
        </div>
      </body>
    </html>
  );
}

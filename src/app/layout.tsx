import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Headless CMS Demo App",
  description: "Next.js + Contentful + Wordpress",
  keywords: "nextjs, contentful, wordpress, headless cms",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#f6f6f6] text-[#202020]">
      <body className={inter.className}>
        <Header />
        <main className="mx-auto p-6 max-w-prose">{children}</main>
      </body>
    </html>
  );
}

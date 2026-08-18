import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ExpatConnect - Jobs, Housing & Community for Expatriates",
  description: "Find jobs, housing, services, and community in 190+ countries. Join 100,000+ expats worldwide.",
  icons: {
    icon: "/faviconandheader.png",
    shortcut: "/faviconandheader.png",
    apple: "/faviconandheader.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#f5f5f5] dark:bg-[#121212]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
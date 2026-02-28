import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteNavbar } from "@/components/site-navbar";
import { WhatsAppFloat } from "@/components/whatsapp-float";
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
  title: "Dhruv Enterprises",
  description: "Industrial packaging and bag closing machine supplier",
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
        <SiteNavbar />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}

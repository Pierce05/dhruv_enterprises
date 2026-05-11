import type { Metadata } from "next";
import Link from "next/link";
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
  title: "Dhruv Enterprises | Shree Shyam Enterprises",
  description:
    "Industrial catalog platform for retail, wholesale, and servicing enquiries across packaging and bag closing products.",
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
        <footer className="border-t border-white/10 bg-black/40">
          <div className="mx-auto grid w-full max-w-[1280px] gap-8 px-6 py-12 sm:px-8 md:grid-cols-4 lg:px-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/70">
                Phase 1 Direction
              </p>
              <h3 className="mt-3 text-lg font-semibold text-white">
                Two-brand industrial catalog
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Structured around company selection, catalog browsing, quote capture, and product approval workflow scaffolding.
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-base font-semibold text-white">Company Pages</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <Link href="/dhruv" className="hover:text-white">
                    Dhruv Enterprises
                  </Link>
                </li>
                <li>
                  <Link href="/shree-shyam" className="hover:text-white">
                    Shree Shyam Enterprises
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-white">
                    Combined Catalog View
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-base font-semibold text-white">CMS Scaffolding</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <Link href="/portal/submit-product" className="hover:text-white">
                    Worker Submission Form
                  </Link>
                </li>
                <li>
                  <Link href="/portal/review-queue" className="hover:text-white">
                    Manager Review Queue
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Enquiry Hub
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-base font-semibold text-white">Build Notes</h4>
              <p className="text-sm leading-6 text-slate-300">
                Recommended production path remains Next.js plus PostgreSQL, image uploads, and admin workflow pages, with later migration to a heavier CMS only if the catalog team outgrows custom pages.
              </p>
            </div>
          </div>
          <div className="border-t border-white/10 px-6 py-4 text-center text-sm text-slate-400">
            © 2026 Dhruv Enterprises and Shree Shyam Enterprises. All rights reserved.
          </div>
        </footer>
        <WhatsAppFloat />
      </body>
    </html>
  );
}

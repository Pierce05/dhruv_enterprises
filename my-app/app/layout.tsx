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
        <footer className="bg-green-900 text-white">
          <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-8 px-6 py-12 sm:px-8 md:grid-cols-4 lg:px-10">
            <div>
              <h3 className="mb-3 text-lg font-bold">Dhruv Enterprises</h3>
              <p className="text-sm text-green-100">
                Industrial packaging and bag closing solutions for manufacturing
                businesses across India.
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-base font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-sm text-green-100">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-white">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-base font-semibold">Product Categories</h4>
              <ul className="space-y-2 text-sm text-green-100">
                <li>
                  <Link
                    href="/products/bag-closing-machines"
                    className="hover:text-white"
                  >
                    Bag Closing Machines
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/packaging-machines"
                    className="hover:text-white"
                  >
                    Packaging Machines
                  </Link>
                </li>
                <li>
                  <Link href="/products/sewing-threads" className="hover:text-white">
                    Sewing Threads
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-base font-semibold">Contact Information</h4>
              <ul className="space-y-2 text-sm text-green-100">
                <li>Phone: +91 79885 25983</li>
                <li>Email: sales@dhruventerprises.com</li>
                <li>Address: Industrial Area, New Delhi, India</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-800 px-6 py-4 text-center text-sm text-green-100">
            © 2026 Dhruv Enterprises. All rights reserved.
          </div>
        </footer>
        <WhatsAppFloat />
      </body>
    </html>
  );
}

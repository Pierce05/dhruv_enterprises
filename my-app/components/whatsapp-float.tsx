"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getCompanyBySlug } from "@/app/lib/products";

export function WhatsAppFloat() {
  const pathname = usePathname();
  const firstSegment = pathname.split("/").filter(Boolean)[0] ?? "";
  const company = getCompanyBySlug(firstSegment) ?? getCompanyBySlug("dhruv");

  if (!company) {
    return null;
  }

  return (
    <Link
      href={`https://wa.me/${company.whatsappNumber}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-2xl shadow-emerald-900/30 transition hover:bg-emerald-400"
    >
      WhatsApp
    </Link>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { QuoteModal } from "@/components/QuoteModal";

type ProductQuoteActionsProps = {
  companySlug: string;
  productSlug: string;
  whatsappNumber: string;
};

export function ProductQuoteActions({
  companySlug,
  productSlug,
  whatsappNumber,
}: ProductQuoteActionsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2">
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
        >
          Request Quote
        </button>
        <Link
          href={`/contact?company=${companySlug}&product=${productSlug}&intent=add-to-cart`}
          className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          Add to Cart
        </Link>
        <Link
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            `Hello, I want details for ${productSlug} from ${companySlug}.`,
          )}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          WhatsApp
        </Link>
        <Link
          href={`/contact?company=${companySlug}&product=${productSlug}&intent=service-support`}
          className="inline-flex items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-500/10 px-6 py-3 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-500/20"
        >
          Service Support
        </Link>
      </div>

      <QuoteModal
        companySlug={companySlug}
        productSlug={productSlug}
        whatsappNumber={whatsappNumber}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

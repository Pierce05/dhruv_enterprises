"use client";

import { useState } from "react";
import { QuoteModal } from "@/components/QuoteModal";

type ProductQuoteActionsProps = {
  productSlug: string;
};

export function ProductQuoteActions({ productSlug }: ProductQuoteActionsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-green-700 to-green-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:from-green-800 hover:to-green-700"
      >
        Request Quote
      </button>
      <QuoteModal
        isOpen={isModalOpen}
        productSlug={productSlug}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

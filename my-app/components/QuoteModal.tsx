"use client";

import Link from "next/link";

type QuoteModalProps = {
  isOpen: boolean;
  productSlug: string;
  onClose: () => void;
};

export function QuoteModal({ isOpen, productSlug, onClose }: QuoteModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Quote options"
    >
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
        <div className="mb-5 flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold text-green-900">Choose Quote Option</h3>
          <button
            onClick={onClose}
            className="rounded-md px-2 py-1 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
            aria-label="Close modal"
          >
            X
          </button>
        </div>

        <div className="space-y-3">
          <Link
            href="https://wa.me/917988525983"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-green-700 to-green-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:from-green-800 hover:to-green-700"
          >
            Contact on WhatsApp
          </Link>
          <Link
            href={`/?product=${productSlug}#enquiry`}
            className="inline-flex w-full items-center justify-center rounded-lg border border-green-200 px-5 py-3 text-sm font-semibold text-green-900 transition hover:bg-green-50"
          >
            Request Quote via Email
          </Link>
        </div>
      </div>
    </div>
  );
}

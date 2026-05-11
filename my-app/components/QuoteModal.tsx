"use client";

import Link from "next/link";

type QuoteModalProps = {
  companySlug: string;
  productSlug: string;
  whatsappNumber: string;
  onClose: () => void;
  isOpen: boolean;
};

export function QuoteModal({
  companySlug,
  productSlug,
  whatsappNumber,
  onClose,
  isOpen,
}: QuoteModalProps) {
  if (!isOpen) {
    return null;
  }

  const whatsappMessage = encodeURIComponent(
    `Hello, I want a quote for ${productSlug} from ${companySlug}. Please share price, availability, and service support details.`,
  );

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Quote options"
    >
      <div className="w-full max-w-xl rounded-[1.75rem] border border-white/10 bg-[#12161d] p-6 shadow-2xl shadow-black/50">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/70">
              Enquiry Route
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-white">
              Choose how you want to move this enquiry forward
            </h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-full border border-white/10 px-3 py-2 text-slate-300 transition hover:bg-white/5 hover:text-white"
            aria-label="Close modal"
          >
            Close
          </button>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          <Link
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-amber-300/40 bg-amber-500/10 p-4 text-sm font-semibold text-amber-100 transition hover:bg-amber-500/20"
          >
            WhatsApp now
          </Link>
          <Link
            href={`/contact?company=${companySlug}&product=${productSlug}&intent=request-quote`}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Send formal quote request
          </Link>
          <Link
            href={`/contact?company=${companySlug}&product=${productSlug}&intent=add-to-cart`}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Add to enquiry cart
          </Link>
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";

type ProductImageProps = {
  src: string;
  alt: string;
};

export function ProductImage({ src, alt }: ProductImageProps) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div className="relative flex h-80 items-end overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(135deg,#171b22_0%,#0e1116_100%)] p-6">
        <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top_right,rgba(201,134,43,0.35),transparent_55%)]" />
        <div className="relative max-w-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/70">
            Image Pending
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{alt}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            This placeholder is intentional for Phase 1. It matches the planned CMS flow where workers upload the product photo before manager approval and publishing.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-80 overflow-hidden rounded-[1.75rem] border border-white/10">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        onError={() => setHasError(true)}
      />
    </div>
  );
}

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
      <div className="flex h-72 items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-green-50 text-sm font-medium text-slate-500">
        Product Image Placeholder
      </div>
    );
  }

  return (
    <div className="relative h-72 overflow-hidden rounded-lg border border-slate-200">
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

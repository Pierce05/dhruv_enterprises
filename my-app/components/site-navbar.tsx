"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { companies, getCompanyBySlug } from "@/app/lib/products";

const genericLinks = [
  { label: "Company Select", href: "/" },
  { label: "Catalog", href: "/products" },
  { label: "CMS Flow", href: "/portal/submit-product" },
  { label: "Review Queue", href: "/portal/review-queue" },
];

export function SiteNavbar() {
  const pathname = usePathname();
  const firstSegment = pathname.split("/").filter(Boolean)[0] ?? "";
  const activeCompany = getCompanyBySlug(firstSegment);

  const companyLinks = activeCompany
    ? [
        { label: "Overview", href: `/${activeCompany.slug}` },
        { label: "Categories", href: `/${activeCompany.slug}#categories` },
        { label: "Products", href: `/${activeCompany.slug}/products/${activeCompany.featuredCategorySlugs[0]}` },
        { label: "Enquiry", href: `/${activeCompany.slug}#enquiry` },
      ]
    : genericLinks;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/65 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-[1280px] flex-col gap-4 px-6 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-amber-400/40 bg-amber-500/10 text-sm font-bold text-amber-200">
              DE
            </span>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-200/80">
                Industrial Catalog
              </div>
              <div className="text-lg font-semibold text-white">
                {activeCompany?.shortName ?? "Dhruv + Shree Shyam"}
              </div>
            </div>
          </Link>

          <div className="hidden h-8 w-px bg-white/10 lg:block" />

          <div className="flex flex-wrap gap-2">
            {companies.map((company) => {
              const isActive = activeCompany?.slug === company.slug;
              return (
                <Link
                  key={company.slug}
                  href={`/${company.slug}`}
                  className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] transition ${
                    isActive
                      ? "border-amber-300/70 bg-amber-300/10 text-amber-100"
                      : "border-white/10 bg-white/5 text-slate-300 hover:border-amber-300/30 hover:text-white"
                  }`}
                >
                  {company.shortName}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
          {companyLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-full border border-transparent px-3 py-2 transition hover:border-white/10 hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

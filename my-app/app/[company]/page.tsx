import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getCategoriesByCompany,
  getCompanyBySlug,
  getProductsByCompany,
} from "@/app/lib/products";
import { EnquiryForm } from "@/components/EnquiryForm";
import { IndustriesSection } from "@/components/IndustriesSection";
import { TrustedCompanies } from "@/components/TrustedCompanies";

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ company: string }>;
}) {
  const { company } = await params;
  const companyData = getCompanyBySlug(company);

  if (!companyData) {
    notFound();
  }

  const companyCategories = getCategoriesByCompany(company);
  const companyProducts = getProductsByCompany(company).slice(0, 3);

  return (
    <main className="px-6 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1280px] space-y-8">
        <section className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#11161d]">
          <div className="grid gap-8 p-8 md:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-200/70">
                {companyData.operationsLabel}
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
                {companyData.heroTitle}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                {companyData.heroSubtitle}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={`/${companyData.slug}/products/${companyData.featuredCategorySlugs[0]}`}
                  className="rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
                >
                  Explore categories
                </Link>
                <Link
                  href={`/contact?company=${companyData.slug}&intent=request-quote`}
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Request quote
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/70">
                Business Model
              </p>
              <div className="mt-5 grid gap-4">
                {companyData.serviceModes.map((mode) => (
                  <div
                    key={mode}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm font-medium text-white"
                  >
                    {mode}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-4">
                <p className="text-sm leading-6 text-emerald-100">
                  Industrial trust is reinforced here through supply capability, service support, and a clear path to enquiry rather than generic promotional blocks.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="categories"
          className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/70">
              Catalog Structure
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Separate category and product URLs are ready for scale
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              The same structure can support manual product entry, CSV imports from Excel-style lists, and approved publishing through a proper database later.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {companyCategories.map((category) => (
              <article
                key={category.slug}
                className="rounded-[1.75rem] border border-white/10 bg-[#12161d] p-6"
              >
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {category.description}
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.18em] text-amber-200/70">
                  {category.servicingSupport}
                </p>
                <Link
                  href={`/${companyData.slug}/products/${category.slug}`}
                  className="mt-6 inline-flex rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
                >
                  Open category
                </Link>
              </article>
            ))}
          </div>
        </section>

        <TrustedCompanies labels={companyData.trustPoints} />

        <section className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/70">
                Featured Products
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-white">
                Approved items already mapped to this company
              </h2>
            </div>
            <Link
              href="/portal/review-queue"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Open review queue
            </Link>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {companyProducts.map((product) => (
              <article
                key={product.slug}
                className="rounded-[1.75rem] border border-white/10 bg-[#12161d] p-6"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-200/70">
                  {product.sku}
                </div>
                <h3 className="mt-3 text-xl font-semibold text-white">{product.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{product.summary}</p>
                <p className="mt-4 text-sm font-medium text-amber-100">
                  {product.priceRange}
                </p>
                <Link
                  href={`/${companyData.slug}/products/${product.category}/${product.slug}`}
                  className="mt-6 inline-flex rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
                >
                  View product
                </Link>
              </article>
            ))}
          </div>
        </section>

        <IndustriesSection industries={companyData.industries} />

        <EnquiryForm defaultCompany={companyData.slug} />
      </div>
    </main>
  );
}

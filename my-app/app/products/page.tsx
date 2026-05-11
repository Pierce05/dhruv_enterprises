import Link from "next/link";
import { categories, companies, products } from "@/app/lib/products";

export default function ProductsPage() {
  return (
    <main className="px-6 py-10 sm:px-8 lg:px-10">
      <section className="mx-auto max-w-[1280px] space-y-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/70">
            Combined Catalog
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">
            Phase 1 catalog structure across both companies
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
            This is the shared overview layer. In production, approved records from the database would appear
            automatically in the relevant company and category routes shown below.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {companies.map((company) => {
            const companyCategories = categories.filter(
              (category) => category.company === company.slug,
            );
            const companyProducts = products.filter(
              (product) => product.company === company.slug,
            );

            return (
              <article
                key={company.slug}
                className="rounded-[2rem] border border-white/10 bg-[#12161d] p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/70">
                      {company.operationsLabel}
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold text-white">
                      {company.shortName}
                    </h2>
                  </div>
                  <Link
                    href={`/${company.slug}`}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Open company page
                  </Link>
                </div>

                <div className="mt-6 grid gap-4">
                  {companyCategories.map((category) => (
                    <div
                      key={category.slug}
                      className="rounded-2xl border border-white/10 bg-black/20 p-5"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            {category.title}
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-slate-300">
                            {category.description}
                          </p>
                        </div>
                        <Link
                          href={`/${company.slug}/products/${category.slug}`}
                          className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
                        >
                          View category
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-sm text-slate-400">
                  {companyProducts.length} approved products currently modeled for this company.
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

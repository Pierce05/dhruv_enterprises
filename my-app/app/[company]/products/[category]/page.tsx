import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getCategoryBySlugs,
  getCompanyBySlug,
  getProductsByCategory,
} from "@/app/lib/products";

export default async function ProductCategoryPage({
  params,
}: {
  params: Promise<{ company: string; category: string }>;
}) {
  const { company, category } = await params;
  const companyData = getCompanyBySlug(company);
  const categoryData = getCategoryBySlugs(company, category);
  const categoryProducts = getProductsByCategory(company, category);

  if (!companyData || !categoryData || categoryProducts.length === 0) {
    notFound();
  }

  return (
    <main className="px-6 py-10 sm:px-8 lg:px-10">
      <section className="mx-auto max-w-[1280px] space-y-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/70">
            {companyData.shortName}
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">
            {categoryData.title}
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
            {categoryData.description}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="rounded-[2rem] border border-white/10 bg-[#12161d] p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/70">
              Applications
            </p>
            <div className="mt-5 grid gap-3">
              {categoryData.applications.map((application) => (
                <div
                  key={application}
                  className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-200"
                >
                  {application}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-6 text-slate-300">
              {categoryData.servicingSupport}
            </p>
          </aside>

          <div className="grid gap-4 sm:grid-cols-2">
            {categoryProducts.map((product) => (
              <article
                key={product.slug}
                className="rounded-[1.75rem] border border-white/10 bg-[#12161d] p-6"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-200/70">
                  {product.sku}
                </div>
                <h2 className="mt-3 text-xl font-semibold text-white">{product.name}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {product.summary}
                </p>
                <p className="mt-4 text-sm font-medium text-amber-100">
                  {product.priceRange}
                </p>
                <Link
                  href={`/${company}/products/${category}/${product.slug}`}
                  className="mt-6 inline-flex rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
                >
                  View product
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

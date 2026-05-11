import Link from "next/link";
import { notFound } from "next/navigation";
import { getCompanyBySlug, getProductBySlugs, getRelatedProducts } from "@/app/lib/products";
import { ProductImage } from "@/components/ProductImage";
import { ProductQuoteActions } from "@/components/ProductQuoteActions";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ company: string; category: string; product: string }>;
}) {
  const { company, category, product } = await params;
  const companyData = getCompanyBySlug(company);
  const productData = getProductBySlugs(company, category, product);

  if (!companyData || !productData) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(company, product);

  return (
    <main className="px-6 py-10 sm:px-8 lg:px-10">
      <section className="mx-auto max-w-[1280px] space-y-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <ProductImage src={productData.image} alt={productData.name} />

          <article className="rounded-[2rem] border border-white/10 bg-[#12161d] p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/70">
              {companyData.shortName} • {productData.sku}
            </p>
            <h1 className="mt-3 text-4xl font-semibold text-white">
              {productData.name}
            </h1>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              {productData.description}
            </p>
            <p className="mt-4 text-lg font-semibold text-amber-100">
              {productData.priceRange}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {productData.serviceFlags.map((flag) => (
                <span
                  key={flag}
                  className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-100"
                >
                  {flag}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <ProductQuoteActions
                companySlug={companyData.slug}
                productSlug={productData.slug}
                whatsappNumber={companyData.whatsappNumber}
              />
            </div>
          </article>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <section className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/70">
              Applications
            </p>
            <div className="mt-5 grid gap-3">
              {productData.applications.map((application) => (
                <div
                  key={application}
                  className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-200"
                >
                  {application}
                </div>
              ))}
            </div>
            <Link
              href={`/contact?company=${companyData.slug}&product=${productData.slug}&intent=service-support`}
              className="mt-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Need service help on this product?
            </Link>
          </section>

          <section className="rounded-[2rem] border border-white/10 bg-[#12161d] p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/70">
              Specifications
            </p>
            <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-white/10">
              <table className="w-full border-collapse text-left">
                <tbody>
                  {productData.specifications.map((spec) => (
                    <tr key={spec.label} className="border-b border-white/10">
                      <th className="w-2/5 bg-black/20 px-4 py-4 text-sm font-semibold text-slate-100">
                        {spec.label}
                      </th>
                      <td className="px-4 py-4 text-sm text-slate-300">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <section className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/70">
                Related Products
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-white">
                More approved catalog items from this company
              </h2>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {relatedProducts.map((related) => (
              <article
                key={related.slug}
                className="rounded-[1.75rem] border border-white/10 bg-[#12161d] p-6"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-200/70">
                  {related.sku}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-white">{related.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {related.summary}
                </p>
                <Link
                  href={`/${company}/products/${related.category}/${related.slug}`}
                  className="mt-6 inline-flex rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
                >
                  View product
                </Link>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

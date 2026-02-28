import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlugs } from "@/app/lib/products";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ category: string; product: string }>;
}) {
  const { category, product } = await params;
  const productData = getProductBySlugs(category, product);

  if (!productData) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-green-50 px-6 py-16 sm:px-8 lg:px-10">
      <section className="mx-auto grid w-full max-w-[1200px] gap-8 lg:grid-cols-2">
        <Card className="border-green-100 bg-white">
          <CardHeader>
            <CardTitle className="text-3xl font-extrabold text-green-900">
              {productData.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-base leading-7 text-slate-700">
              {productData.description}
            </p>

            <div className="flex h-72 items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-green-50 text-sm font-medium text-slate-500">
              {productData.imagePlaceholder}
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-100 bg-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-green-900">
              Specifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="overflow-hidden rounded-lg border border-slate-200">
              <table className="w-full border-collapse text-left">
                <tbody>
                  {productData.specifications.map((spec) => (
                    <tr key={spec.label} className="border-b border-slate-200">
                      <th className="w-1/2 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800">
                        {spec.label}
                      </th>
                      <td className="px-4 py-3 text-sm text-slate-700">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Link
              href="https://wa.me/917988525983"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-lg bg-green-800 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
            >
              Request Quote
            </Link>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

"use client";

import { useState } from "react";
import { products } from "@/app/lib/products";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProductDetailPage() {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const featuredProduct = products[0];

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-16 sm:px-8 lg:px-10">
      <section className="mx-auto grid w-full max-w-[1200px] gap-8 lg:grid-cols-2">
        <Card className="overflow-hidden bg-white">
          <CardHeader>
            <CardTitle className="text-3xl font-extrabold text-blue-950">
              {featuredProduct.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-base leading-7 text-slate-700">
              {featuredProduct.description}
            </p>

            <div className="flex h-72 items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 text-sm font-medium text-slate-500">
              Product Image.
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-950">
              Specifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="overflow-hidden rounded-lg border border-slate-200">
              <table className="w-full border-collapse text-left">
                <tbody>
                  {featuredProduct.specifications.map((spec) => (
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

            <button
              onClick={() => setShowQuoteForm((prev) => !prev)}
              className="w-full rounded-lg bg-blue-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Request Quote
            </button>

            {showQuoteForm ? (
              <form
                onSubmit={(event) => event.preventDefault()}
                className="space-y-4 rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-slate-700"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-blue-700"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-slate-700"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-blue-700"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="company"
                    className="text-sm font-medium text-slate-700"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-blue-700"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-slate-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-blue-700"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-blue-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800"
                >
                  Send Quote Request
                </button>
                <p className="text-xs text-slate-500">
                  Submission will be connected to Email and WhatsApp in the
                  next upgrade.
                </p>
              </form>
            ) : null}
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

"use client";

import { FormEvent, useMemo, useState } from "react";
import { products } from "@/app/lib/products";

type EnquiryFormProps = {
  defaultProduct?: string;
};

type FormState = {
  name: string;
  phone: string;
  email: string;
  company: string;
  product: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  company: "",
  product: "",
  message: "",
};

export function EnquiryForm({ defaultProduct = "" }: EnquiryFormProps) {
  const [formData, setFormData] = useState<FormState>({
    ...initialState,
    product: defaultProduct,
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  const productOptions = useMemo(
    () => products.map((product) => ({ value: product.slug, label: product.name })),
    [],
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send enquiry");
      }

      setStatus("success");
      setFormData((prev) => ({ ...initialState, product: prev.product }));
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="enquiry" className="bg-green-50 px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-[1200px]">
        <h2 className="mb-8 text-center text-3xl font-bold text-green-900 md:text-4xl">
          Enquire With Us
        </h2>

        <form
          onSubmit={handleSubmit}
          className="mx-auto w-full max-w-4xl space-y-5 rounded-xl border border-slate-200 bg-white p-6 shadow-md md:p-8"
        >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-sm font-medium text-slate-700">
                Name
              </label>
              <input
                id="name"
                required
                value={formData.name}
                onChange={(event) =>
                  setFormData((prev) => ({ ...prev, name: event.target.value }))
                }
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-green-700"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="phone" className="text-sm font-medium text-slate-700">
                Phone Number
              </label>
              <input
                id="phone"
                required
                value={formData.phone}
                onChange={(event) =>
                  setFormData((prev) => ({ ...prev, phone: event.target.value }))
                }
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-green-700"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(event) =>
                  setFormData((prev) => ({ ...prev, email: event.target.value }))
                }
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-green-700"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="company" className="text-sm font-medium text-slate-700">
                Company Name
              </label>
              <input
                id="company"
                value={formData.company}
                onChange={(event) =>
                  setFormData((prev) => ({ ...prev, company: event.target.value }))
                }
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-green-700"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="product" className="text-sm font-medium text-slate-700">
              Product Interested In
            </label>
            <select
              id="product"
              value={formData.product}
              onChange={(event) =>
                setFormData((prev) => ({ ...prev, product: event.target.value }))
              }
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-green-700"
            >
              <option value="">Select a product (optional)</option>
              {productOptions.map((product) => (
                <option key={product.value} value={product.value}>
                  {product.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="message" className="text-sm font-medium text-slate-700">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(event) =>
                setFormData((prev) => ({ ...prev, message: event.target.value }))
              }
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-green-700"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-green-700 to-green-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:from-green-800 hover:to-green-700 disabled:opacity-70"
          >
            {status === "loading" ? "Sending..." : "Send Enquiry"}
          </button>

          {status === "success" ? (
            <p className="text-sm font-medium text-green-700">
              Enquiry sent successfully. Our team will contact you soon.
            </p>
          ) : null}
          {status === "error" ? (
            <p className="text-sm font-medium text-red-600">
              Failed to send enquiry. Please try again.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

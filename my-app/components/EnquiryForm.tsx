"use client";

import { FormEvent, useMemo, useState } from "react";
import { companies, products } from "@/app/lib/products";

type EnquiryFormProps = {
  defaultCompany?: string;
  defaultProduct?: string;
  defaultIntent?: string;
};

type FormState = {
  name: string;
  phone: string;
  email: string;
  company: string;
  product: string;
  intent: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  company: "",
  product: "",
  intent: "request-quote",
  message: "",
};

export function EnquiryForm({
  defaultCompany = "",
  defaultProduct = "",
  defaultIntent = "request-quote",
}: EnquiryFormProps) {
  const [formData, setFormData] = useState<FormState>({
    ...initialState,
    company: defaultCompany,
    product: defaultProduct,
    intent: defaultIntent,
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  const productOptions = useMemo(
    () =>
      products.map((product) => ({
        value: product.slug,
        label: `${product.name} (${product.sku})`,
      })),
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
      setFormData((prev) => ({
        ...initialState,
        company: prev.company,
        product: prev.product,
        intent: prev.intent,
      }));
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="enquiry"
      className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 md:p-8"
    >
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/70">
          Enquiry Flow
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
          Capture direct buying, wholesale, and servicing leads
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
          This form is already shaped for the Phase 1 workflow: company selection, product context,
          intent capture, and structured lead data that can feed email, WhatsApp follow-up, and later CRM automation.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 md:grid-cols-2">
          <Field
            id="name"
            label="Name"
            value={formData.name}
            onChange={(value) => setFormData((prev) => ({ ...prev, name: value }))}
            required
          />
          <Field
            id="phone"
            label="Phone Number"
            value={formData.phone}
            onChange={(value) => setFormData((prev) => ({ ...prev, phone: value }))}
            required
          />
          <Field
            id="email"
            label="Email"
            value={formData.email}
            onChange={(value) => setFormData((prev) => ({ ...prev, email: value }))}
            required
            type="email"
          />
          <Field
            id="companyName"
            label="Company Name"
            value={formData.company}
            onChange={(value) => setFormData((prev) => ({ ...prev, company: value }))}
          />
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <SelectField
            id="brand"
            label="Select Business"
            value={formData.company}
            onChange={(value) => setFormData((prev) => ({ ...prev, company: value }))}
            options={companies.map((company) => ({
              value: company.slug,
              label: company.shortName,
            }))}
          />
          <SelectField
            id="intent"
            label="Intent"
            value={formData.intent}
            onChange={(value) => setFormData((prev) => ({ ...prev, intent: value }))}
            options={[
              { value: "request-quote", label: "Request Quote" },
              { value: "add-to-cart", label: "Add to Cart Enquiry" },
              { value: "wholesale", label: "Wholesale Requirement" },
              { value: "service-support", label: "Service Support" },
            ]}
          />
          <SelectField
            id="product"
            label="Product"
            value={formData.product}
            onChange={(value) => setFormData((prev) => ({ ...prev, product: value }))}
            options={productOptions}
            placeholder="Select product"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="message" className="text-sm font-medium text-slate-200">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            value={formData.message}
            onChange={(event) =>
              setFormData((prev) => ({ ...prev, message: event.target.value }))
            }
            className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400/50"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex w-full items-center justify-center rounded-full bg-amber-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-400 disabled:opacity-70"
        >
          {status === "loading" ? "Sending..." : "Send Enquiry"}
        </button>

        {status === "success" ? (
          <p className="text-sm font-medium text-emerald-300">
            Enquiry captured successfully. The next step can be auto-reply email plus WhatsApp handoff.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="text-sm font-medium text-rose-300">
            Failed to send enquiry. Check the email configuration or retry the request.
          </p>
        ) : null}
      </form>
    </section>
  );
}

type FieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  type?: string;
};

function Field({ id, label, value, onChange, required, type = "text" }: FieldProps) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="text-sm font-medium text-slate-200">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400/50"
      />
    </div>
  );
}

type SelectFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
};

function SelectField({
  id,
  label,
  value,
  onChange,
  options,
  placeholder = "Select option",
}: SelectFieldProps) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="text-sm font-medium text-slate-200">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400/50"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

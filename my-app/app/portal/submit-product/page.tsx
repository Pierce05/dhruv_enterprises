import { categories, companies, importBatches } from "@/app/lib/products";

export default function SubmitProductPage() {
  return (
    <main className="px-6 py-10 sm:px-8 lg:px-10">
      <section className="mx-auto max-w-[1280px] space-y-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/70">
            Worker Portal
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">
            Product submission flow for catalog workers
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
            This page scaffolds the exact Phase 1 fields you outlined: photo upload, name, description,
            category, SKU, price range, specs, applications, and approval submission.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <form className="rounded-[2rem] border border-white/10 bg-[#12161d] p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <FormField label="Product Name" placeholder="Needle Bar Assembly" />
              <FormField label="SKU" placeholder="DE-SPR-201" />
              <SelectField
                label="Company"
                options={companies.map((company) => company.shortName)}
              />
              <SelectField
                label="Category"
                options={categories.map((category) => category.title)}
              />
              <FormField label="Price Range" placeholder="Rs. 1,200 - 1,800" />
              <FormField label="Applications" placeholder="Feed, fertilizer, grain" />
            </div>

            <div className="mt-5 grid gap-5">
              <TextAreaField
                label="Description"
                placeholder="Short commercial description for the live catalog"
              />
              <TextAreaField
                label="Specifications"
                placeholder="Motor: 90W | Needle: DNx1 #25 | Weight: 5kg"
              />
              <TextAreaField
                label="Manager Notes"
                placeholder="Mention if image is pending, pricing is provisional, or service flags need confirmation"
              />
            </div>

            <div className="mt-5 rounded-[1.5rem] border border-dashed border-amber-300/30 bg-amber-500/5 p-5">
              <p className="text-sm font-medium text-amber-100">Image Upload Placeholder</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Connect this area to Cloudinary or another upload pipeline so workers can attach product photos before submitting the record for approval.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950"
              >
                Submit for Approval
              </button>
              <button
                type="button"
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white"
              >
                Save Draft
              </button>
            </div>
          </form>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/70">
                Import Path
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                Excel and CSV import remains the right bridge
              </h2>
              <div className="mt-5 grid gap-3">
                {importBatches.map((batch) => (
                  <div
                    key={batch.id}
                    className="rounded-2xl border border-white/10 bg-[#12161d] p-4"
                  >
                    <div className="text-sm font-semibold text-white">{batch.source}</div>
                    <div className="mt-2 text-sm text-slate-300">
                      {batch.rows} rows • {batch.company}
                    </div>
                    <div className="mt-2 text-xs uppercase tracking-[0.18em] text-amber-200/70">
                      {batch.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#12161d] p-7">
              <h2 className="text-2xl font-semibold text-white">Next backend step</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Replace this static scaffold with server actions or API routes that create product records in PostgreSQL, store upload references, and mark new entries as pending until manager approval.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

function FormField({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium text-slate-200">{label}</label>
      <input
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none"
      />
    </div>
  );
}

function TextAreaField({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium text-slate-200">{label}</label>
      <textarea
        rows={4}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none"
      />
    </div>
  );
}

function SelectField({
  label,
  options,
}: {
  label: string;
  options: string[];
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium text-slate-200">{label}</label>
      <select className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none">
        <option>Select {label.toLowerCase()}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

import Link from "next/link";
import { companies } from "@/app/lib/products";

export default function Home() {
  return (
    <main className="px-6 py-10 sm:px-8 lg:px-10">
      <section className="mx-auto max-w-[1280px] rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-8 shadow-2xl shadow-black/25 md:p-12">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-200/70">
            Company Selection
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-6xl">
            Choose the business path before the buyer enters the catalog.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
            This first screen separates Dhruv Enterprises and Shree Shyam Enterprises, then routes the visitor
            into company-specific messaging, category pages, product details, and enquiry actions for retail,
            wholesale, and servicing.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {companies.map((company, index) => (
            <article
              key={company.slug}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#12161d] p-7"
            >
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-amber-500/10 blur-3xl" />
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200/70">
                {index === 0 ? "Retail + Spares + Service" : "Wholesale + Systems + Service"}
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                {company.shortName}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">{company.overview}</p>

              <div className="mt-6 space-y-3">
                {company.trustPoints.map((point) => (
                  <div key={point} className="flex gap-3 text-sm text-slate-200">
                    <span className="mt-2 h-2 w-2 rounded-full bg-amber-400" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={`/${company.slug}`}
                  className="rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
                >
                  Enter {company.shortName}
                </Link>
                <Link
                  href={`/contact?company=${company.slug}&intent=request-quote`}
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Start Enquiry
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

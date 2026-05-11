import { companies } from "@/app/lib/products";

export default function AboutPage() {
  return (
    <main className="px-6 py-10 sm:px-8 lg:px-10">
      <section className="mx-auto max-w-[1280px] space-y-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/70">
            Positioning
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">
            Industrial trust-building instead of brochure filler
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
            The revised direction borrows structural cues from industrial players like
            <span className="font-semibold text-white"> Revo India </span>
            while keeping this site clearly its own: company selection first, operational credibility,
            product-led navigation, and direct paths into quote and service enquiries.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {companies.map((company) => (
            <article
              key={company.slug}
              className="rounded-[2rem] border border-white/10 bg-[#12161d] p-7"
            >
              <h2 className="text-2xl font-semibold text-white">{company.shortName}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">{company.overview}</p>
              <div className="mt-6 grid gap-3">
                {company.serviceModes.map((mode) => (
                  <div
                    key={mode}
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-200"
                  >
                    {mode}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

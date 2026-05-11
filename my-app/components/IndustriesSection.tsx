type IndustriesSectionProps = {
  industries: string[];
};

export function IndustriesSection({ industries }: IndustriesSectionProps) {
  return (
    <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/70">
          Service Reach
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-white">
          Messaging centered on retail, wholesale, and servicing
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
          Instead of generic brochure blocks, each company page now frames the business model clearly:
          product supply for immediate needs, wholesale support for repeat buying, and service support to keep production lines moving.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {industries.map((industry) => (
          <article
            key={industry}
            className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-5"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400/15 text-xs font-bold uppercase tracking-[0.2em] text-amber-100">
              Ops
            </div>
            <h3 className="text-lg font-semibold text-white">{industry}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Packaging and bag-closing support positioned for procurement, uptime, and field servicing needs in this segment.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

type TrustedCompaniesProps = {
  labels: string[];
};

export function TrustedCompanies({ labels }: TrustedCompaniesProps) {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 md:p-8">
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/70">
            Buyer Confidence
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-white">
            Built for real factory procurement conversations
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-slate-300">
          The structure is modeled to support industrial buyers who compare product availability,
          service readiness, and response confidence before they enquire.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {labels.map((label) => (
          <div
            key={label}
            className="rounded-2xl border border-white/10 bg-black/25 p-5"
          >
            <div className="mb-3 h-1.5 w-16 rounded-full bg-amber-400/70" />
            <p className="text-sm font-medium text-slate-100">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

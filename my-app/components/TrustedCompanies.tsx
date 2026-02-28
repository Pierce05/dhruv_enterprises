const companySlots = Array.from({ length: 10 });

export function TrustedCompanies() {
  return (
    <section className="bg-green-50 px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-[1200px]">
        <h2 className="mb-10 text-center text-3xl font-bold text-green-900 md:text-4xl">
          Trusted by Businesses Across India
        </h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {companySlots.map((_, index) => (
            <div
              key={`company-${index}`}
              className="flex items-center justify-center rounded-lg border border-slate-200 bg-white p-6 text-sm font-semibold text-slate-500 shadow-sm"
            >
              Client Logo
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

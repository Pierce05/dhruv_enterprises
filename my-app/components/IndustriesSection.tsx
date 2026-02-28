const industries = [
  {
    title: "Food Packaging",
    description: "Bag stitching and sealing solutions for food-grade packaging.",
  },
  {
    title: "Fertilizer",
    description: "Reliable machines for high-volume fertilizer bag closing lines.",
  },
  {
    title: "Cement",
    description: "Durable industrial systems for cement and construction sacks.",
  },
  {
    title: "Animal Feed",
    description: "Fast and consistent closing machines for feed manufacturing.",
  },
  {
    title: "Chemical Packaging",
    description: "Secure sealing and packaging support for chemical products.",
  },
  {
    title: "Agriculture",
    description: "Packaging equipment for seeds, grains, and agro products.",
  },
];

export function IndustriesSection() {
  return (
    <section className="bg-green-50 px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-[1200px]">
        <h2 className="mb-10 text-center text-3xl font-bold text-green-900 md:text-4xl">
          Industries We Serve
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {industries.map((industry) => (
            <article
              key={industry.title}
              className="rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-green-100 text-xs font-semibold text-green-800">
                Icon
              </div>
              <h3 className="mb-2 text-xl font-semibold text-green-900">
                {industry.title}
              </h3>
              <p className="text-sm text-slate-600">{industry.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

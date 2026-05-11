import { EnquiryForm } from "@/components/EnquiryForm";

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ company?: string; product?: string; intent?: string }>;
}) {
  const { company, product, intent } = await searchParams;

  return (
    <main className="px-6 py-10 sm:px-8 lg:px-10">
      <section className="mx-auto max-w-[1280px] space-y-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/70">
            Contact Hub
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">
            One enquiry system for buying, wholesale, and servicing
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
            Product pages now route here with company, product, and enquiry intent already attached. That makes it much easier to
            trigger the next Phase 1 automation steps like email acknowledgement, manager review, and WhatsApp follow-up.
          </p>
        </div>

        <EnquiryForm
          defaultCompany={company}
          defaultProduct={product}
          defaultIntent={intent}
        />
      </section>
    </main>
  );
}

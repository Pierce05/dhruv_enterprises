import { pendingSubmissions } from "@/app/lib/products";

export default function ReviewQueuePage() {
  return (
    <main className="px-6 py-10 sm:px-8 lg:px-10">
      <section className="mx-auto max-w-[1280px] space-y-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/70">
            Manager Dashboard
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">
            Pending catalog review queue
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
            This is the approval layer that should sit between worker submissions and the live website. Approved items would publish automatically into the public catalog.
          </p>
        </div>

        <div className="grid gap-4">
          {pendingSubmissions.map((submission) => (
            <article
              key={submission.id}
              className="rounded-[2rem] border border-white/10 bg-[#12161d] p-7"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-200/70">
                    {submission.id} • {submission.company}
                  </div>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    {submission.name}
                  </h2>
                  <p className="mt-2 text-sm text-slate-300">
                    {submission.sku} • {submission.category}
                  </p>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
                    {submission.notes}
                  </p>
                </div>

                <div className="min-w-[240px] rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                  <div className="text-sm text-slate-300">
                    Submitted by {submission.submittedBy}
                  </div>
                  <div className="mt-2 text-sm text-slate-300">
                    {submission.submittedAt}
                  </div>
                  <div className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-amber-200/70">
                    Status: {submission.status}
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <button
                      type="button"
                      className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-950"
                    >
                      Approve
                    </button>
                    <button
                      type="button"
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="rounded-full border border-rose-400/20 bg-rose-500/10 px-4 py-2 text-sm font-semibold text-rose-100"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

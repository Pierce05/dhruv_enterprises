import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const categoryMachines: Record<
  string,
  {
    title: string;
    machines: { name: string; description: string }[];
  }
> = {
  "bag-closing-machines": {
    title: "Bag Closing Machines",
    machines: [
      {
        name: "Portable Bag Closer F300A",
        description: "Compact hand-held unit for high-speed bag stitching.",
      },
      {
        name: "Single Needle Closer GK9-350",
        description: "Heavy-duty closer for woven sacks and industrial bags.",
      },
      {
        name: "Conveyor Bag Stitching Unit",
        description: "Integrated line solution for continuous bag sealing.",
      },
    ],
  },
  "packaging-machines": {
    title: "Packaging Machines",
    machines: [
      {
        name: "Automatic Weigh Filler",
        description: "Accurate weight-based filling for granules and powders.",
      },
      {
        name: "Form Fill Seal Machine",
        description: "Automated pouch forming, filling, and sealing system.",
      },
      {
        name: "Band Sealing Machine",
        description: "Continuous sealing for consistent production throughput.",
      },
    ],
  },
  "sewing-threads": {
    title: "Sewing Threads",
    machines: [
      {
        name: "Polyester Stitching Thread",
        description: "High-tensile thread designed for long industrial runs.",
      },
      {
        name: "Cotton Core Thread",
        description: "Reliable thread for multi-layer bag applications.",
      },
      {
        name: "Weather Resistant Thread",
        description: "Durable thread for outdoor and export packaging.",
      },
    ],
  },
  "spare-parts": {
    title: "Spare Parts",
    machines: [
      {
        name: "Needle Set Kit",
        description: "Precision needles compatible with industrial closers.",
      },
      {
        name: "Looper and Feed Dog Assembly",
        description: "Critical replacements for smooth stitch formation.",
      },
      {
        name: "Motor Belt and Pulley Pack",
        description: "Maintenance essentials to reduce machine downtime.",
      },
    ],
  },
};

export default async function ProductCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const categoryData = categoryMachines[category];

  if (!categoryData) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-16 sm:px-8 lg:px-10">
      <section className="mx-auto w-full max-w-[1200px]">
        <h1 className="mb-12 text-center text-4xl font-extrabold text-blue-950 md:text-5xl">
          {categoryData.title}
        </h1>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categoryData.machines.map((machine) => (
            <Card
              key={machine.name}
              className="bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <CardHeader>
                <CardTitle className="text-xl text-blue-950">
                  {machine.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">{machine.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const productCategories = [
  {
    title: "Bag Closing Machines",
    description: "Portable and industrial-grade bag stitching equipment.",
    href: "/products/bag-closing-machines",
  },
  {
    title: "Packaging Machines",
    description: "Automated packaging systems for factory operations.",
    href: "/products/packaging-machines",
  },
  {
    title: "Sewing Threads",
    description: "High-strength threads for industrial bag stitching.",
    href: "/products/sewing-threads",
  },
  {
    title: "Spare Parts",
    description: "Reliable replacement parts for machine maintenance.",
    href: "/products/spare-parts",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-16 sm:px-8 lg:px-10">
      <section className="mx-auto w-full max-w-[1200px]">
        <h1 className="mb-12 text-center text-4xl font-extrabold text-blue-950 md:text-5xl">
          Our Products
        </h1>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((category) => (
            <Link key={category.title} href={category.href} className="block">
              <Card className="h-full bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-950">
                    {category.title}
                  </CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <span className="rounded-md bg-blue-900 px-4 py-2 text-sm font-medium text-white">
                    View Category
                  </span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

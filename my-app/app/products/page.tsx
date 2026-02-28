import Link from "next/link";
import { categories } from "@/app/lib/products";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-green-50 px-6 py-16 sm:px-8 lg:px-10">
      <section className="mx-auto w-full max-w-[1200px]">
        <h1 className="mb-12 text-center text-4xl font-extrabold text-green-900 md:text-5xl">
          Our Products
        </h1>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={`/products/${category.slug}`}
              className="block"
            >
              <Card className="h-full border-green-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl text-green-900">
                    {category.title}
                  </CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <span className="rounded-md bg-green-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700">
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

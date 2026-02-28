import Link from "next/link";
import { categories } from "@/app/lib/products";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const featuredCategories = categories.slice(0, 3);

  return (
    <main className="min-h-screen bg-green-50">
      {/* Hero Section */}
      <section className="bg-green-800 px-6 py-16 sm:px-8 md:py-24 lg:px-10">
        <div className="mx-auto grid w-full max-w-[1200px] items-center gap-10 lg:grid-cols-2">
          <div className="text-center text-white lg:text-left">
            <h1 className="mb-5 text-4xl font-extrabold leading-tight md:text-6xl">
              Industrial Packaging and Bag Closing Solutions
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-green-100 md:text-xl">
              Trusted machines and support for packaging businesses across India.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="/products"
                className="rounded-lg bg-white px-6 py-3 font-semibold text-green-900 transition hover:bg-green-100"
              >
                View Products
              </Link>
              <Link
                href="https://wa.me/917988525983"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-green-200 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                Request Quote
              </Link>
            </div>
          </div>

          <div className="flex h-72 items-center justify-center rounded-2xl border border-green-700/40 bg-green-700/40 text-base font-semibold text-green-50 md:h-96">
            Industrial Machine Image Placeholder
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 py-16 sm:px-8 md:py-20 lg:px-10">
        <div className="mx-auto w-full max-w-[1200px]">
          <h2 className="mb-12 text-center text-3xl font-bold text-green-900 md:text-4xl">
            Our Product Categories
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredCategories.map((category) => (
              <Card
                key={category.title}
                className="h-full border-green-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-green-900">
                    {category.title}
                  </CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent />
                <CardFooter>
                  <Link
                    href={`/products/${category.slug}`}
                    className="rounded-md bg-green-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700"
                  >
                    View Products
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const categories = [
  {
    title: "Bag Closing Machines",
    description: "Portable and industrial bag stitching machines.",
  },
  {
    title: "Packaging Machines",
    description: "Automatic packaging solutions for factories.",
  },
  {
    title: "Sewing Threads",
    description: "Durable threads for industrial bag stitching.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100">
      {/* Navbar */}
      <nav className="border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 py-5 sm:px-8 lg:px-10">
          <h1 className="text-xl font-bold text-blue-900">Dhruv Enterprises</h1>

          <div className="space-x-6">
            <a href="#" className="hover:text-blue-600">
              Home
            </a>
            <a href="#" className="hover:text-blue-600">
              Products
            </a>
            <a href="#" className="hover:text-blue-600">
              About
            </a>
            <a href="#" className="hover:text-blue-600">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-950 px-6 py-20 text-center text-white sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto w-full max-w-[1200px]">
          <h2 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl">
            Industrial Packaging & Bag Closing Machines
          </h2>

          <p className="mx-auto mb-10 max-w-3xl text-lg text-blue-100 md:text-xl">
            Reliable industrial machines for packaging industries across India.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-950 transition hover:bg-blue-100">
              View Products
            </button>
            <button className="rounded-lg border border-blue-200 px-6 py-3 font-semibold text-white transition hover:bg-blue-900">
              Request Quote
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 py-20 sm:px-8 md:py-24 lg:px-10">
        <div className="mx-auto w-full max-w-[1200px]">
          <h3 className="mb-12 text-center text-3xl font-bold text-blue-950 md:text-4xl">
            Our Product Categories
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Card
                key={category.title}
                className="bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent />
                <CardFooter>
                  <button className="rounded-md bg-blue-900 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800">
                    View Products
                  </button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

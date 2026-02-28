import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-green-800 text-sm font-bold text-white">
            DE
          </span>
          <span className="text-lg font-bold text-green-900">
            Dhruv Enterprises
          </span>
        </Link>

        <div className="flex items-center gap-4 text-sm font-medium text-slate-700 sm:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition hover:text-green-800"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

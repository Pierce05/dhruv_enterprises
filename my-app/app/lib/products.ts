export type ProductSpecification = {
  label: string;
  value: string;
};

export type ProductCategory = {
  slug: string;
  title: string;
  description: string;
};

export type Product = {
  slug: string;
  category: string;
  name: string;
  description: string;
  image: string;
  specifications: ProductSpecification[];
};

export const categories: ProductCategory[] = [
  {
    slug: "bag-closing-machines",
    title: "Bag Closing Machines",
    description: "Portable and industrial bag stitching machines.",
  },
  {
    slug: "packaging-machines",
    title: "Packaging Machines",
    description: "Automated packaging systems for factory operations.",
  },
  {
    slug: "sewing-threads",
    title: "Sewing Threads",
    description: "High-strength threads for industrial bag stitching.",
  },
];

export const products: Product[] = [
  {
    slug: "gk26-1a",
    category: "bag-closing-machines",
    name: "GK26-1A Bag Closing Machine",
    description:
      "A compact, high-speed industrial stitching machine for woven and jute bag closing.",
    image: "/images/gk26-1a.jpg",
    specifications: [
      { label: "Speed", value: "1800 stitches/min" },
      { label: "Motor Power", value: "90W" },
      { label: "Needle Type", value: "DNx1 #25" },
      { label: "Bag Material", value: "Woven PP / Jute" },
      { label: "Weight", value: "5kg" },
    ],
  },
  {
    slug: "np-7a",
    category: "bag-closing-machines",
    name: "NP-7A Bag Stitching Machine",
    description:
      "Portable continuous-duty closer for fertilizer, feed, and grain bags.",
    image: "/images/np-7a.jpg",
    specifications: [
      { label: "Speed", value: "1250 stitches/min" },
      { label: "Motor Power", value: "170W" },
      { label: "Needle Type", value: "DR-H30" },
      { label: "Bag Material", value: "PP / Paper / Jute" },
      { label: "Weight", value: "5.5kg" },
    ],
  },
  {
    slug: "ffs-500",
    category: "packaging-machines",
    name: "FFS-500 Form Fill Seal Machine",
    description:
      "Automatic packaging machine designed for high-volume pouch production lines.",
    image: "/images/ffs-500.jpg",
    specifications: [
      { label: "Speed", value: "30-60 packs/min" },
      { label: "Power", value: "2.5kW" },
      { label: "Pouch Width", value: "80-240mm" },
      { label: "Film Type", value: "Laminated roll film" },
      { label: "Weight", value: "350kg" },
    ],
  },
  {
    slug: "bs-900",
    category: "packaging-machines",
    name: "BS-900 Band Sealer",
    description:
      "Continuous sealing machine for reliable pouch sealing in medium-scale operations.",
    image: "/images/bs-900.jpg",
    specifications: [
      { label: "Sealing Speed", value: "0-12 m/min" },
      { label: "Power", value: "500W" },
      { label: "Seal Width", value: "10mm" },
      { label: "Bag Material", value: "LDPE / PP / Laminates" },
      { label: "Weight", value: "25kg" },
    ],
  },
  {
    slug: "polyester-hs",
    category: "sewing-threads",
    name: "Polyester High-Strength Thread",
    description:
      "Industrial stitching thread optimized for high tensile strength and durability.",
    image: "/images/polyester-hs.jpg",
    specifications: [
      { label: "Thread Type", value: "100% Polyester" },
      { label: "Ticket", value: "20/6" },
      { label: "Strength", value: "High Tensile" },
      { label: "Application", value: "Bag stitching" },
      { label: "Weight", value: "200g cone" },
    ],
  },
  {
    slug: "weather-guard",
    category: "sewing-threads",
    name: "Weather Guard Industrial Thread",
    description:
      "UV-resistant thread for export bags and outdoor storage applications.",
    image: "/images/weather-guard.jpg",
    specifications: [
      { label: "Thread Type", value: "UV-resistant synthetic" },
      { label: "Ticket", value: "30/4" },
      { label: "Resistance", value: "UV / Moisture" },
      { label: "Application", value: "Outdoor bags" },
      { label: "Weight", value: "180g cone" },
    ],
  },
];

export function getCategoryBySlug(categorySlug: string) {
  return categories.find((category) => category.slug === categorySlug);
}

export function getProductsByCategory(categorySlug: string) {
  return products.filter((product) => product.category === categorySlug);
}

export function getProductBySlugs(categorySlug: string, productSlug: string) {
  return products.find(
    (product) =>
      product.category === categorySlug && product.slug === productSlug,
  );
}

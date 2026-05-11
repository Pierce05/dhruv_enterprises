export type CompanySlug = "dhruv" | "shree-shyam";

export type ProductSpecification = {
  label: string;
  value: string;
};

export type WorkflowStatus = "draft" | "pending" | "approved" | "rejected";

export type Company = {
  slug: CompanySlug;
  shortName: string;
  legalName: string;
  heroTitle: string;
  heroSubtitle: string;
  overview: string;
  operationsLabel: string;
  phone: string;
  email: string;
  whatsappNumber: string;
  address: string;
  trustPoints: string[];
  serviceModes: string[];
  industries: string[];
  featuredCategorySlugs: string[];
};

export type ProductCategory = {
  slug: string;
  company: CompanySlug;
  title: string;
  description: string;
  applications: string[];
  servicingSupport: string;
};

export type Product = {
  slug: string;
  company: CompanySlug;
  category: string;
  name: string;
  sku: string;
  summary: string;
  description: string;
  priceRange: string;
  applications: string[];
  image: string;
  workflowStatus: WorkflowStatus;
  specifications: ProductSpecification[];
  serviceFlags: string[];
};

export type ProductSubmission = {
  id: string;
  company: CompanySlug;
  submittedBy: string;
  submittedAt: string;
  status: WorkflowStatus;
  name: string;
  sku: string;
  category: string;
  notes: string;
};

export type ImportBatch = {
  id: string;
  source: string;
  company: CompanySlug;
  rows: number;
  status: "mapped" | "needs-review" | "ready-to-publish";
};

export const companies: Company[] = [
  {
    slug: "dhruv",
    shortName: "Dhruv Enterprises",
    legalName: "Dhruv Enterprises",
    heroTitle: "Bag closing, packaging, and spares support for fast-moving production floors.",
    heroSubtitle:
      "Retailer, wholesaler, and servicing partner for factories that need machines, consumables, and dependable after-sales response.",
    overview:
      "Built for industrial buyers who need immediate supply, technical guidance, and confidence that the line will keep moving after installation.",
    operationsLabel: "North India supply and servicing desk",
    phone: "+91 79885 25983",
    email: "sales@dhruventerprises.com",
    whatsappNumber: "917988525983",
    address: "Industrial Area, New Delhi, India",
    trustPoints: [
      "Retail dispatch for urgent replacements and accessories",
      "Wholesale support for dealers, factories, and repeat buyers",
      "Servicing coordination for installation, spares, and troubleshooting",
    ],
    serviceModes: ["Retail supply", "Wholesale supply", "Servicing and support"],
    industries: [
      "Food packaging",
      "Fertilizer and agro inputs",
      "Animal feed",
      "Chemical packaging",
      "Cement and minerals",
      "Textile and woven sack packaging",
    ],
    featuredCategorySlugs: [
      "portable-bag-closing-machines",
      "bag-closing-spares",
      "industrial-sewing-thread",
    ],
  },
  {
    slug: "shree-shyam",
    shortName: "Shree Shyam Enterprises",
    legalName: "Shree Shyam Enterprises",
    heroTitle: "Heavy-duty packaging systems and line support for high-volume operators.",
    heroSubtitle:
      "A practical industrial partner for conveyor systems, sealing lines, accessories, and service-led supply programs.",
    overview:
      "Designed for buyers who care about uptime, predictable procurement, and a vendor who can support both the machine and the field team using it.",
    operationsLabel: "Wholesale and project supply desk",
    phone: "+91 99110 44557",
    email: "sales@shreeshyamenterprises.in",
    whatsappNumber: "919911044557",
    address: "Bawana Industrial Cluster, Delhi NCR, India",
    trustPoints: [
      "Project-oriented machine supply for packaging lines",
      "Wholesale programs for channel and repeat industrial buying",
      "Service-ready support model for commissioning and maintenance",
    ],
    serviceModes: ["Project supply", "Bulk wholesale", "Commissioning and service"],
    industries: [
      "Cement and construction materials",
      "Rice, grain, and flour milling",
      "Polymer and resin packaging",
      "Warehousing and contract packaging",
      "Seeds and agricultural inputs",
      "Export packing operations",
    ],
    featuredCategorySlugs: [
      "conveyor-sewing-systems",
      "heat-sealing-systems",
      "closing-accessories",
    ],
  },
];

export const categories: ProductCategory[] = [
  {
    slug: "portable-bag-closing-machines",
    company: "dhruv",
    title: "Portable Bag Closing Machines",
    description:
      "Portable and shop-floor-ready closers for woven sacks, paper bags, and agricultural packaging.",
    applications: ["Feed", "Fertilizer", "Grain", "Food ingredients"],
    servicingSupport: "Needle, looper, spring, and routine maintenance support available.",
  },
  {
    slug: "bag-closing-spares",
    company: "dhruv",
    title: "Bag Closing Spares",
    description:
      "Fast-moving spare parts for portable bag closers to reduce downtime and simplify service calls.",
    applications: ["Maintenance stock", "Breakdown replacement", "Dealer replenishment"],
    servicingSupport: "Technician guidance for part identification and replacement.",
  },
  {
    slug: "industrial-sewing-thread",
    company: "dhruv",
    title: "Industrial Sewing Thread",
    description:
      "Industrial thread options for secure bag stitching across commodity and specialty packaging.",
    applications: ["PP woven bags", "Jute sacks", "Multi-wall paper bags"],
    servicingSupport: "Thread matching support for stitch quality and machine compatibility.",
  },
  {
    slug: "conveyor-sewing-systems",
    company: "shree-shyam",
    title: "Conveyor Sewing Systems",
    description:
      "Integrated sewing systems for high-throughput bag handling, closing, and dispatch operations.",
    applications: ["Cement", "Agri inputs", "Warehouse packing lines"],
    servicingSupport: "On-site setup planning and post-install support available.",
  },
  {
    slug: "heat-sealing-systems",
    company: "shree-shyam",
    title: "Heat Sealing Systems",
    description:
      "Continuous sealing and industrial pouch closing equipment for stable sealing performance.",
    applications: ["Chemicals", "Food ingredients", "Consumer bulk packs"],
    servicingSupport: "Consumable and sealing band replacement support available.",
  },
  {
    slug: "closing-accessories",
    company: "shree-shyam",
    title: "Closing Accessories",
    description:
      "Support accessories, stands, and components that complete packaging workstations.",
    applications: ["Machine upgrades", "Operator stations", "Replacement kits"],
    servicingSupport: "Fitment support and compatibility review for installed lines.",
  },
];

export const products: Product[] = [
  {
    slug: "np-7a-portable-bag-closer",
    company: "dhruv",
    category: "portable-bag-closing-machines",
    name: "NP-7A Portable Bag Closer",
    sku: "DE-NP7A-001",
    summary: "Portable closer for daily stitched bag dispatch across grain, feed, and fertilizer operations.",
    description:
      "A compact industrial bag closer suited for mobile stitching stations, distributor counters, and packaging floors that need a proven machine with accessible spare support.",
    priceRange: "Rs. 8,500 - 12,500",
    applications: ["Animal feed", "Grain packing", "Fertilizer sacks"],
    image: "",
    workflowStatus: "approved",
    specifications: [
      { label: "Speed", value: "1,250 stitches/min" },
      { label: "Power", value: "170W" },
      { label: "Needle", value: "DR-H30" },
      { label: "Bag Material", value: "PP / Paper / Jute" },
    ],
    serviceFlags: ["Installation guidance", "Spare support", "Repair coordination"],
  },
  {
    slug: "dad-heavy-duty-closer",
    company: "dhruv",
    category: "portable-bag-closing-machines",
    name: "DAD Heavy-Duty Bag Closer",
    sku: "DE-DAD-014",
    summary: "Heavy-duty twin-needle closing machine for demanding bag closing workloads.",
    description:
      "Built for operators who need robust stitch security and prefer to source machine, spares, and service support through one channel.",
    priceRange: "Rs. 14,000 - 21,000",
    applications: ["Cement", "Minerals", "Export sacks"],
    image: "",
    workflowStatus: "approved",
    specifications: [
      { label: "Configuration", value: "Twin needle, two thread" },
      { label: "Use Case", value: "Heavy bag closure" },
      { label: "Duty", value: "Continuous industrial use" },
      { label: "Support", value: "On-call service coordination" },
    ],
    serviceFlags: ["Commissioning help", "Spare support", "Breakdown assistance"],
  },
  {
    slug: "needle-and-looper-service-kit",
    company: "dhruv",
    category: "bag-closing-spares",
    name: "Needle and Looper Service Kit",
    sku: "DE-SPR-032",
    summary: "Frequently replaced spares bundled for fast service response and maintenance stock.",
    description:
      "Ideal for dealers and factory maintenance teams who need to keep bag closers running without waiting on one-by-one spare procurement.",
    priceRange: "Rs. 600 - 1,800",
    applications: ["Preventive maintenance", "Workshop stock", "Breakdown repair"],
    image: "",
    workflowStatus: "approved",
    specifications: [
      { label: "Includes", value: "Needles, looper, springs" },
      { label: "Use", value: "Portable closer service" },
      { label: "Stocking", value: "Suitable for retail and wholesale packs" },
      { label: "Support", value: "Part matching assistance" },
    ],
    serviceFlags: ["Technician guidance", "Part matching", "Dispatch support"],
  },
  {
    slug: "premium-polyester-thread-cone",
    company: "dhruv",
    category: "industrial-sewing-thread",
    name: "Premium Polyester Thread Cone",
    sku: "DE-THR-101",
    summary: "Industrial thread cone for stable stitch performance and clean bag closure output.",
    description:
      "Supplied for production teams that need repeatable stitch quality and a dependable consumables source alongside machine supply.",
    priceRange: "Rs. 180 - 650",
    applications: ["Food ingredients", "Fertilizer", "Woven sacks"],
    image: "",
    workflowStatus: "approved",
    specifications: [
      { label: "Material", value: "100% Polyester" },
      { label: "Cone Options", value: "8 oz to 5 lb" },
      { label: "Build", value: "Knot-less precision wound" },
      { label: "Compatibility", value: "Industrial packaging sewing machines" },
    ],
    serviceFlags: ["Thread matching", "Bulk order support"],
  },
  {
    slug: "slat-conveyor-sewing-system",
    company: "shree-shyam",
    category: "conveyor-sewing-systems",
    name: "Slat Conveyor Sewing System",
    sku: "SSE-CON-210",
    summary: "Conveyor-integrated sewing system for efficient bag closing at scale.",
    description:
      "A line-oriented solution for facilities that need operator-friendly bag handling, stable throughput, and coordinated setup support.",
    priceRange: "Project pricing on request",
    applications: ["Cement", "Flour mills", "Agro commodities"],
    image: "",
    workflowStatus: "approved",
    specifications: [
      { label: "System Type", value: "Conveyor sewing line" },
      { label: "Deployment", value: "Industrial plant installation" },
      { label: "Support", value: "Layout review and commissioning" },
      { label: "Output", value: "High-volume bag dispatch" },
    ],
    serviceFlags: ["Installation", "Commissioning", "Operator support"],
  },
  {
    slug: "continuous-band-sealer",
    company: "shree-shyam",
    category: "heat-sealing-systems",
    name: "Continuous Band Sealer",
    sku: "SSE-SEAL-088",
    summary: "Continuous sealing equipment for repeatable industrial pouch sealing.",
    description:
      "Used where operations need consistent seal quality, cleaner finishing, and an equipment partner who can help with setup and consumable replacement.",
    priceRange: "Rs. 18,000 - 42,000",
    applications: ["Chemicals", "Consumer bulk packs", "Food ingredients"],
    image: "",
    workflowStatus: "approved",
    specifications: [
      { label: "Seal Type", value: "Continuous band" },
      { label: "Line Fit", value: "Standalone or integrated" },
      { label: "Controls", value: "Operator adjustable" },
      { label: "Support", value: "Sealing band replacement guidance" },
    ],
    serviceFlags: ["Consumable support", "Adjustment guidance", "Repair coordination"],
  },
  {
    slug: "machine-stand-and-balancer-kit",
    company: "shree-shyam",
    category: "closing-accessories",
    name: "Machine Stand and Balancer Kit",
    sku: "SSE-ACC-301",
    summary: "Workstation accessory kit to improve operator comfort and machine handling.",
    description:
      "A practical accessory set for packaging floors that want more stable operation and cleaner operator ergonomics around closing equipment.",
    priceRange: "Rs. 4,500 - 11,500",
    applications: ["Workstation upgrades", "Retrofit support", "New line setup"],
    image: "",
    workflowStatus: "approved",
    specifications: [
      { label: "Kit Type", value: "Stand plus balancing support" },
      { label: "Use", value: "Portable machine workstation" },
      { label: "Procurement", value: "Retail or bulk supply" },
      { label: "Support", value: "Compatibility review available" },
    ],
    serviceFlags: ["Fitment support", "Spare matching", "Bulk supply"],
  },
];

export const pendingSubmissions: ProductSubmission[] = [
  {
    id: "SUB-101",
    company: "dhruv",
    submittedBy: "Warehouse Operator",
    submittedAt: "2026-05-10",
    status: "pending",
    name: "Looper Holder Set",
    sku: "DE-SPR-118",
    category: "bag-closing-spares",
    notes: "Imported from workshop spare list and waiting for manager price confirmation.",
  },
  {
    id: "SUB-102",
    company: "shree-shyam",
    submittedBy: "Line Supervisor",
    submittedAt: "2026-05-09",
    status: "pending",
    name: "Feed Belt Sealing Unit",
    sku: "SSE-SEAL-144",
    category: "heat-sealing-systems",
    notes: "Photo uploaded. Specs still need application tags and service notes.",
  },
  {
    id: "SUB-103",
    company: "dhruv",
    submittedBy: "Catalog Assistant",
    submittedAt: "2026-05-08",
    status: "rejected",
    name: "Carbon Set",
    sku: "DE-SPR-051",
    category: "bag-closing-spares",
    notes: "Rejected once because the SKU matched an existing record and needed image cleanup.",
  },
];

export const importBatches: ImportBatch[] = [
  {
    id: "IMP-APR-01",
    source: "pidilite_quote (10 april).xlsx",
    company: "dhruv",
    rows: 63,
    status: "needs-review",
  },
  {
    id: "IMP-MAY-02",
    source: "dealer_price_list.csv",
    company: "shree-shyam",
    rows: 118,
    status: "mapped",
  },
];

export function getCompanyBySlug(companySlug: string) {
  return companies.find((company) => company.slug === companySlug);
}

export function getCategoriesByCompany(companySlug: string) {
  return categories.filter((category) => category.company === companySlug);
}

export function getCategoryBySlugs(companySlug: string, categorySlug: string) {
  return categories.find(
    (category) =>
      category.company === companySlug && category.slug === categorySlug,
  );
}

export function getProductsByCompany(companySlug: string) {
  return products.filter(
    (product) =>
      product.company === companySlug && product.workflowStatus === "approved",
  );
}

export function getProductsByCategory(companySlug: string, categorySlug: string) {
  return products.filter(
    (product) =>
      product.company === companySlug &&
      product.category === categorySlug &&
      product.workflowStatus === "approved",
  );
}

export function getProductBySlugs(
  companySlug: string,
  categorySlug: string,
  productSlug: string,
) {
  return products.find(
    (product) =>
      product.company === companySlug &&
      product.category === categorySlug &&
      product.slug === productSlug &&
      product.workflowStatus === "approved",
  );
}

export function getRelatedProducts(companySlug: string, productSlug: string) {
  return products
    .filter(
      (product) =>
        product.company === companySlug &&
        product.slug !== productSlug &&
        product.workflowStatus === "approved",
    )
    .slice(0, 3);
}

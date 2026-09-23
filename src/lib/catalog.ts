import { products } from "@/lib/products";

export type CatalogCategory = {
  slug: string;
  name: string;
  seoTitle: string;
  seoDescription: string;
  summary: string;
};

export const catalogCategories: CatalogCategory[] = [
  {
    slug: "stands",
    name: "Stands",
    seoTitle: "Phone & Laptop Stands | NEXO Gadgets Chittagong",
    seoDescription:
      "Browse premium phone and laptop stands from NEXO Gadgets in Chittagong, Bangladesh. Ergonomic, foldable, and 360-degree rotatable metal desk mounts.",
    summary: "Adjustable stands for desks, travel bags, and elevated viewing setups in Chittagong & BD.",
  },
  {
    slug: "power-banks",
    name: "Power",
    seoTitle: "Power Banks & Fast Chargers | NEXO Gadgets Chittagong",
    seoDescription:
      "Shop portable 10,000mAh fast-charging power banks from NEXO Gadgets in Chittagong (Chattogram), Bangladesh with slim travel-friendly designs.",
    summary: "Portable charging essentials for commutes, workdays, and travel across Bangladesh.",
  },
  {
    slug: "audio",
    name: "Audio",
    seoTitle: "Wireless Earbuds & Audio Gadgets | NEXO Chittagong",
    seoDescription:
      "Discover wireless earbuds and audio gadgets in Chittagong from NEXO Bangladesh for deep bass music, clear calls, and everyday listening.",
    summary: "Wireless audio gear for clear calls, music, and on-the-go listening.",
  },
  {
    slug: "lifestyle",
    name: "Lifestyle",
    seoTitle: "Lifestyle Tech Gadgets | NEXO Chittagong",
    seoDescription:
      "Explore compact lifestyle gadgets from NEXO in Chittagong (Chattogram) designed to add comfort and convenience to your routine.",
    summary: "Portable everyday gadgets that make daily routines easier.",
  },
  {
    slug: "wellness",
    name: "Wellness",
    seoTitle: "Smart Wellness Gadgets | NEXO Chittagong",
    seoDescription:
      "Browse smart wellness gadgets from NEXO in Chittagong including electric scalp head massagers designed for relaxation and hair care.",
    summary: "Wellness devices for relaxation, scalp care, and downtime.",
  },
];

const categoryBySlug = new Map(catalogCategories.map((category) => [category.slug, category]));

export function getCategoryBySlug(slug: string) {
  return categoryBySlug.get(slug) ?? null;
}

export function getProductsForCategory(categoryName: string) {
  return products.filter((product) => product.category === categoryName);
}

export function getCategoryProductsBySlug(slug: string) {
  const category = getCategoryBySlug(slug);

  if (!category) {
    return null;
  }

  return getProductsForCategory(category.name);
}

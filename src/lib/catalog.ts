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
    seoTitle: "Stands | NEXO Bangladesh",
    seoDescription:
      "Browse premium phone and laptop stands from NEXO Bangladesh, built for work, travel, and everyday convenience.",
    summary: "Adjustable stands for desks, travel bags, and elevated viewing setups.",
  },
  {
    slug: "power-banks",
    name: "Power",
    seoTitle: "Power Banks | NEXO Bangladesh",
    seoDescription:
      "Shop portable power banks from NEXO Bangladesh with dependable charging, slim profiles, and travel-friendly designs.",
    summary: "Portable charging essentials for commutes, workdays, and travel.",
  },
  {
    slug: "audio",
    name: "Audio",
    seoTitle: "Audio Accessories | NEXO Bangladesh",
    seoDescription:
      "Discover wireless earbuds and audio accessories from NEXO Bangladesh for music, calls, and everyday listening.",
    summary: "Wireless audio gear for clear calls, music, and on-the-go listening.",
  },
  {
    slug: "lifestyle",
    name: "Lifestyle",
    seoTitle: "Lifestyle Tech Accessories | NEXO Bangladesh",
    seoDescription:
      "Explore compact lifestyle gadgets from NEXO Bangladesh designed to add comfort and convenience to your routine.",
    summary: "Portable everyday gadgets that make daily routines easier.",
  },
  {
    slug: "wellness",
    name: "Wellness",
    seoTitle: "Wellness Gadgets | NEXO Bangladesh",
    seoDescription:
      "Browse wellness gadgets from NEXO Bangladesh including smart devices designed for relaxation and daily care.",
    summary: "Wellness devices for relaxation, care, and downtime.",
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

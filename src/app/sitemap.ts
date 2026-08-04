import type { MetadataRoute } from "next";
import { catalogCategories } from "@/lib/catalog";
import { products } from "@/lib/products";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/products",
    "/category",
    ...catalogCategories.map((category) => `/category/${category.slug}`),
    ...products.map((product) => `/products/${product.slug}`),
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/products" ? 0.9 : 0.7,
  }));

  return staticRoutes;
}

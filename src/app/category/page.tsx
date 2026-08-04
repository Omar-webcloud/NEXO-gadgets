import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { catalogCategories } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Categories | NEXO Bangladesh",
  description:
    "Browse NEXO Bangladesh categories, including stands, power banks, audio accessories, lifestyle gadgets, and wellness products.",
  alternates: { canonical: "/category" },
};

export default function CategoryIndexPage() {
  return (
    <main className="catalog-page">
      <section className="catalog-hero section-shell">
        <div className="section-heading">
          <div>
            <span className="eyebrow"><span /> Product categories</span>
            <h1>Find the right category faster.</h1>
          </div>
          <p>
            These category pages keep the catalog organized and give every shopping topic its own URL for SEO and discovery.
          </p>
        </div>
      </section>

      <section className="section-shell">
        <div className="catalog-categories">
          {catalogCategories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`} className="catalog-category-card">
              <span>{category.name}</span>
              <strong>{category.seoTitle}</strong>
              <p>{category.summary}</p>
              <em>View category <ArrowRight size={15} /></em>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

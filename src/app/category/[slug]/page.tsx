import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, PackageSearch } from "lucide-react";
import { catalogCategories, getCategoryBySlug, getCategoryProductsBySlug } from "@/lib/catalog";
import { SITE_URL } from "@/lib/site";

function formatBDT(value: number) {
  return new Intl.NumberFormat("bn-BD", {
    style: "currency",
    currency: "BDT",
    maximumFractionDigits: 0,
  }).format(value);
}

export async function generateStaticParams() {
  return catalogCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {};
  }

  const canonicalUrl = `${SITE_URL}/category/${category.slug}`;

  return {
    title: category.seoTitle,
    description: category.seoDescription,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: category.seoTitle,
      description: category.seoDescription,
      url: canonicalUrl,
      type: "website",
      locale: "en_BD",
      siteName: "NEXO",
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  const products = getCategoryProductsBySlug(slug);

  if (!category || !products) {
    notFound();
  }

  const canonicalUrl = `${SITE_URL}/category/${category.slug}`;
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${category.name} products`,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/products/${product.slug}`,
      name: product.name,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Products", item: `${SITE_URL}/products` },
      { "@type": "ListItem", position: 3, name: category.name, item: canonicalUrl },
    ],
  };

  return (
    <main className="catalog-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="catalog-hero section-shell">
        <Link className="back-link catalog-back-link" href="/products">
          <ArrowLeft size={16} /> Back to products
        </Link>
        <div className="section-heading">
          <div>
            <span className="eyebrow"><span /> Category page</span>
            <h1>{category.seoTitle}</h1>
          </div>
          <p>{category.seoDescription}</p>
        </div>
        <div className="catalog-highlight catalog-highlight-inline">
          <PackageSearch size={18} />
          <div>
            <h2>{products.length} product{products.length === 1 ? "" : "s"}</h2>
            <p>{category.summary}</p>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.name} loading="lazy" decoding="async" />
                <span className="product-label">{product.label}</span>
              </div>
              <div className="product-info">
                <div>
                  <small>{product.category}</small>
                  <h3>{product.name}</h3>
                </div>
                <div className="price">
                  <strong>{formatBDT(product.price)}</strong>
                  <s>{formatBDT(product.oldPrice)}</s>
                </div>
              </div>
              <Link href={`/products/${product.slug}`} className="product-link">
                View product <ArrowRight size={15} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="section-heading">
          <div>
            <span className="eyebrow"><span /> What to expect</span>
            <h2>Why category pages help</h2>
          </div>
          <p>
            Category pages create a strong internal linking structure, which makes it easier for search engines to discover the individual product URLs.
          </p>
        </div>
        <div className="feature-list">
          <div className="feature-item">
            <CheckCircle2 size={18} />
            <span>One focused topic per page</span>
          </div>
          <div className="feature-item">
            <CheckCircle2 size={18} />
            <span>Cleaner navigation for shoppers</span>
          </div>
          <div className="feature-item">
            <CheckCircle2 size={18} />
            <span>Better crawling through descriptive links</span>
          </div>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, HelpCircle, PackageSearch, Sparkles } from "lucide-react";
import { products } from "@/lib/products";
import { catalogCategories } from "@/lib/catalog";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products | NEXO Bangladesh",
  description:
    "Explore NEXO Bangladesh products, including premium stands, power banks, audio accessories, wellness gadgets, and everyday tech essentials.",
  alternates: { canonical: "/products" },
};

const categoryHighlights = [
  {
    icon: Sparkles,
    title: "Curated by use case",
    text: "Find products organized by real-world needs, not just by warehouse buckets.",
  },
  {
    icon: PackageSearch,
    title: "Built for discovery",
    text: "Each category and product has its own URL so shoppers and search engines can find them easily.",
  },
  {
    icon: CheckCircle2,
    title: "Details that matter",
    text: "Every product page includes pricing, specs, compatibility notes, and shopping info.",
  },
];

const faqData = [
  {
    q: "Why do product pages matter for SEO?",
    a: "Dedicated product pages give each item its own URL, title, description, and structured data so search engines can understand and rank them more clearly.",
  },
  {
    q: "What should a product page include?",
    a: "The best product pages show the name, price, availability, images, specs, compatibility details, shipping info, and trust signals like returns or warranty support.",
  },
  {
    q: "Why use category pages too?",
    a: "Category pages help shoppers browse by intent and create stronger internal links to the detailed product pages.",
  },
  {
    q: "Does this page include structured data?",
    a: "Yes. The products page includes ItemList markup, and each product detail page includes Product and Breadcrumb structured data.",
  },
];

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "NEXO Products",
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
  ],
};

function formatBDT(value: number) {
  return new Intl.NumberFormat("bn-BD", {
    style: "currency",
    currency: "BDT",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function ProductsPage() {
  return (
    <main className="catalog-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="catalog-hero section-shell">
        <div className="section-heading">
          <div>
            <span className="eyebrow"><span /> NEXO products</span>
            <h1>Separate product pages, organized for search and shopping.</h1>
          </div>
          <p>
            Browse the full catalog, then jump into dedicated product pages for prices, specs, compatibility notes, and availability.
          </p>
        </div>
        <div className="catalog-highlights">
          {categoryHighlights.map(({ icon: Icon, title, text }) => (
            <article key={title} className="catalog-highlight">
              <Icon size={18} />
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell" aria-label="Browse categories">
        <div className="section-heading">
          <div>
            <span className="eyebrow"><span /> Categories</span>
            <h2>Shop by category</h2>
          </div>
          <p>Clear category URLs help people and search engines discover related products faster.</p>
        </div>
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

      <section className="section-shell" id="best-sellers">
        <div className="section-heading">
          <div>
            <span className="eyebrow"><span /> Best sellers</span>
            <h2>Popular products</h2>
          </div>
          <p>Each card goes to its own URL, which is better for users and crawlability.</p>
        </div>
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

      <section className="section-shell products-faq">
        <div className="section-heading">
          <div>
            <span className="eyebrow"><span /> FAQ</span>
            <h2>Why this catalog structure helps</h2>
          </div>
          <p>These answers stay specific to the products hub and the SEO structure behind it.</p>
        </div>
        <div className="products-faq-grid">
          {faqData.map((item) => (
            <article className="products-faq-card" key={item.q}>
              <HelpCircle size={18} />
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

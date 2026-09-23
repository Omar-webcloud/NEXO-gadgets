import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Headphones,
  Heart,
  HelpCircle,
  Laptop,
  PackageSearch,
  Sparkles,
  Wind,
  Zap,
} from "lucide-react";
import { products } from "@/lib/products";
import { catalogCategories } from "@/lib/catalog";
import { SITE_URL } from "@/lib/site";
import { ProductCardActions } from "@/components/product-card-actions";

export const metadata: Metadata = {
  title: "All Products | NEXO Gadgets Chittagong & Bangladesh",
  description:
    "Explore NEXO Gadgets in Chittagong (Chattogram), Bangladesh. Shop premium phone & laptop stands, fast charging power banks, wireless earbuds, and wellness gadgets with fast delivery.",
  keywords: [
    "NEXO gadgets",
    "gadget shop in chittagong",
    "gadget shop in chattogram",
    "Gadgets in chittagong",
    "Gadgets in chattogram",
    "best gadget shop in chittagong",
    "buy gadgets chittagong",
    "mobile accessories bangladesh",
  ],
  alternates: { canonical: "/products" },
};

const categoryIconMap: Record<string, any> = {
  stands: Laptop,
  "power-banks": Zap,
  audio: Headphones,
  lifestyle: Wind,
  wellness: Heart,
};

const categoryHighlights = [
  {
    icon: Sparkles,
    title: "Curated by use case",
    text: "Find products organized by real-world needs.",
  },
  {
    icon: PackageSearch,
    title: "Chittagong & BD Delivery",
    text: "Doorstep delivery across Chittagong and nationwide.",
  },
  {
    icon: CheckCircle2,
    title: "Warranty & Support",
    text: "All items include warranty and dedicated customer care.",
  },
];

const faqData = [
  {
    q: "Where can I buy NEXO gadgets in Chittagong (Chattogram)?",
    a: "You can order all NEXO gadgets directly online with fast home delivery and Cash on Delivery across Chittagong city, Chattogram division, and all 64 districts in Bangladesh.",
  },
  {
    q: "What products does NEXO Gadgets specialize in?",
    a: "NEXO specializes in premium mobile accessories, adjustable phone stands, 360-degree rotatable magnetic laptop stands, 10,000mAh fast-charging power banks, wireless earbuds, and smart scalp wellness gadgets.",
  },
  {
    q: "How fast is delivery for gadget orders in Chittagong?",
    a: "Orders within Chittagong are dispatched rapidly and generally delivered within 24 to 48 hours. Nationwide express delivery takes 2 to 4 business days.",
  },
  {
    q: "Do NEXO products come with official warranty support?",
    a: "Yes. All NEXO products come with dedicated warranty coverage, safe transit packaging, and responsive after-sales service.",
  },
  {
    q: "How can I contact NEXO for product advice or order support?",
    a: "You can reach us instantly via WhatsApp at +8801796073736, on our official Instagram (@nexo_bd), Facebook page, or via our dedicated Contact page.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Top Section: Compact Categories */}
      <section className="catalog-section catalog-top-categories section-shell" aria-label="Browse categories">
        <div className="section-heading compact-heading">
          <div>
            <span className="eyebrow"><span /> Categories</span>
            <h1>Shop by Category</h1>
          </div>
        </div>
        <div className="compact-categories-grid">
          {catalogCategories.map((category) => {
            const Icon = categoryIconMap[category.slug] || Sparkles;
            const count = products.filter((p) => p.category === category.name).length;
            return (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="compact-category-card"
                title={`Shop ${category.name} gadgets`}
              >
                <div className="compact-cat-icon">
                  <Icon size={20} />
                </div>
                <div className="compact-cat-info">
                  <strong>{category.name}</strong>
                  <span>{count} {count === 1 ? "Item" : "Items"}</span>
                </div>
                <ArrowRight size={15} className="compact-cat-arrow" />
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="catalog-section catalog-products section-shell" id="best-sellers">
        <div className="section-heading">
          <div>
            <span className="eyebrow"><span /> Browse All</span>
            <h2>Featured Gadgets</h2>
          </div>
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
              <ProductCardActions product={product} />
            </article>
          ))}
        </div>
      </section>

      {/* NEXO Collection & Highlights Section (placed below featured products) */}
      <section className="catalog-hero catalog-collection-info section-shell">
        <div className="section-heading">
          <div>
            <span className="eyebrow"><span /> NEXO Collection</span>
            <h2>All Products &amp; Accessories</h2>
          </div>
          <p>Premium tech gadgets and mobile accessories designed for everyday use in Bangladesh.</p>
        </div>
        <div className="catalog-highlights">
          {categoryHighlights.map(({ icon: Icon, title, text }) => (
            <article key={title} className="catalog-highlight">
              <Icon size={18} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* SEO-Friendly FAQ at the bottom */}
      <section className="catalog-section products-faq section-shell">
        <div className="section-heading">
          <div>
            <span className="eyebrow"><span /> Help &amp; FAQs</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <p>Everything you need to know about buying gadgets in Chittagong and Bangladesh from NEXO.</p>
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

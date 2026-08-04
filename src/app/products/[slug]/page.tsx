import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, PackageCheck, ShieldCheck, Truck } from "lucide-react";
import { products } from "@/lib/products";
import { SITE_URL } from "@/lib/site";
import { AddToCartButton } from "@/components/add-to-cart-button";

function formatBDT(value: number) {
  return new Intl.NumberFormat("bn-BD", {
    style: "currency",
    currency: "BDT",
    maximumFractionDigits: 0,
  }).format(value);
}

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return {};
  }

  const canonicalUrl = `${SITE_URL}/products/${product.slug}`;

  return {
    title: product.seoTitle,
    description: product.seoDescription,
    keywords: [
      product.name,
      "NEXO",
      product.category,
      "Bangladesh",
      "Mobile Accessories",
      "Tech Gadgets",
    ],
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: product.seoTitle,
      description: product.seoDescription,
      url: canonicalUrl,
      type: "website",
      locale: "en_BD",
      siteName: "NEXO",
      images: [{ url: product.image, width: 1200, height: 630, alt: product.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: product.seoTitle,
      description: product.seoDescription,
      images: [product.image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 3);
  const canonicalUrl = `${SITE_URL}/products/${product.slug}`;
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `${SITE_URL}${product.image}`,
    sku: product.slug,
    brand: {
      "@type": "Brand",
      name: "NEXO",
    },
    offers: {
      "@type": "Offer",
      url: canonicalUrl,
      priceCurrency: "BDT",
      price: product.price,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "NEXO",
      },
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Products", item: `${SITE_URL}/products` },
      { "@type": "ListItem", position: 3, name: product.name, item: canonicalUrl },
    ],
  };

  return (
    <main className="product-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="product-hero">
        <div className="product-hero-shell">
          <div className="product-backlink">
            <Link href="/products" className="back-link">
              <ArrowLeft size={16} /> Back to products
            </Link>
          </div>
          <div className="product-hero-grid">
            <div className="product-media">
              <img src={product.image} alt={`${product.name} from NEXO Bangladesh`} loading="eager" decoding="async" />
            </div>
            <div className="product-copy">
              <span className="product-eyebrow">{product.category} • {product.label}</span>
              <h1>{product.name}</h1>
              <p className="product-short">{product.shortDescription}</p>
              <div className="product-price-row">
                <div>
                  <strong>{formatBDT(product.price)}</strong>
                  <span>{formatBDT(product.oldPrice)}</span>
                </div>
                <span className="product-badge">Save {formatBDT(product.oldPrice - product.price)}</span>
              </div>
              <p className="product-description">{product.description}</p>
              <div className="product-actions">
                <AddToCartButton product={product} />
                <a className="button button-outline" href="#features">See features</a>
              </div>
              <div className="product-highlights">
                <div><Truck size={16} /> Fast delivery in Bangladesh</div>
                <div><ShieldCheck size={16} /> 2-year warranty support</div>
                <div><PackageCheck size={16} /> 30-day returns</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-section section-shell" id="features">
        <div className="product-section-card">
          <div className="section-heading">
            <div>
              <span className="eyebrow"><span /> Why you&apos;ll love it</span>
              <h2>{product.name}</h2>
            </div>
            <p>{product.description}</p>
          </div>
          <div className="feature-list">
            {product.features.map((feature) => (
              <div key={feature} className="feature-item">
                <CheckCircle2 size={18} />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="product-section section-shell">
        <div className="product-spec-card">
          <h3>Technical details</h3>
          <div className="spec-grid">
            {product.specs.map((spec) => (
              <div key={spec.label} className="spec-item">
                <span>{spec.label}</span>
                <strong>{spec.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="product-section section-shell" aria-label="Related products">
        <div className="section-heading">
          <div>
            <span className="eyebrow"><span /> Related picks</span>
            <h2>More from NEXO</h2>
          </div>
          <p>Browse more premium accessories designed for everyday use.</p>
        </div>
        <div className="product-grid">
          {relatedProducts.map((item) => (
            <article className="product-card" key={item.id}>
              <div className="product-image">
                <img src={item.image} alt={item.name} loading="lazy" decoding="async" />
                <span className="product-label">{item.label}</span>
              </div>
              <div className="product-info">
                <div>
                  <small>{item.category}</small>
                  <h3>{item.name}</h3>
                </div>
                <div className="price">
                  <strong>{formatBDT(item.price)}</strong>
                  <s>{formatBDT(item.oldPrice)}</s>
                </div>
              </div>
              <Link href={`/products/${item.slug}`} className="related-link">
                View product <ArrowRight size={15} />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

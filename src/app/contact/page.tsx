import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { SITE_LOCALE, SITE_NAME, SITE_URL } from "@/lib/site";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact NEXO | Best Gadget Shop in Chittagong & Chattogram, Bangladesh",
  description:
    "Get in touch with NEXO, your top gadget shop in Chittagong (Chattogram), Bangladesh. Connect with us on Instagram and Facebook, chat on WhatsApp, or send a quick message. Visit our store location on Google Maps.",
  keywords: [
    "NEXO gadgets",
    "gadget shop in chittagong",
    "gadget shop in chattogram",
    "Gadgets in chittagong",
    "Gadgets in chattogram",
    "best gadget shop in chittagong",
    "contact NEXO gadgets",
    "NEXO Chittagong location",
    "NEXO Facebook",
    "NEXO Instagram",
    "Chittagong tech gadget store",
    "Chattogram mobile accessories shop",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact NEXO | Premier Gadget Shop in Chittagong, Bangladesh",
    description:
      "Connect with NEXO Gadgets in Chittagong. Official Facebook, Instagram, WhatsApp, and store location in Chattogram, Bangladesh.",
    url: `${SITE_URL}/contact`,
    type: "website",
    locale: SITE_LOCALE,
    siteName: SITE_NAME,
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "NEXO Gadgets Chittagong Contact & Store Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact NEXO | Gadget Shop in Chittagong, Bangladesh",
    description:
      "Reach NEXO Gadgets via WhatsApp, Instagram, Facebook, or visit us in Chittagong (Chattogram), Bangladesh.",
    images: ["/images/og-cover.jpg"],
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact NEXO Gadgets",
  url: `${SITE_URL}/contact`,
  description:
    "Official contact page for NEXO Gadgets in Chittagong, Bangladesh. Direct Instagram, Facebook, WhatsApp, and store location details.",
  mainEntity: {
    "@type": ["ElectronicsStore", "LocalBusiness"],
    name: "NEXO Gadgets",
    telephone: "+8801796073736",
    email: "nexogadg3ts@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Chittagong",
      addressLocality: "Chittagong",
      addressRegion: "Chattogram",
      postalCode: "4000",
      addressCountry: "BD",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 22.368111,
      longitude: 91.8084865,
    },
    hasMap:
      "https://www.google.com/maps/place/NEXO/@22.368111,91.8084865,14z/data=!4m6!3m5!1s0x30acd900557f4431:0x80c153a7c03c1ceb!8m2!3d22.368111!4d91.8084865",
    sameAs: [
      "https://www.facebook.com/nexogadg3ts",
      "https://www.instagram.com/nexo_bd",
      "https://www.tiktok.com/@nexogadg3ts",
      "https://www.youtube.com/@NEXO-bd",
      "https://wa.me/8801796073736",
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact` },
  ],
};

export default function ContactPage() {
  return (
    <main className="contact-page-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Header */}
      <section className="contact-page-hero">
        <div className="section-shell">
          <div className="contact-breadcrumb">
            <Link href="/" className="back-link">
              <ArrowLeft size={16} /> Back to Home
            </Link>
          </div>
          <div className="contact-hero-content">
            <span className="eyebrow"><span /> Connect with NEXO</span>
            <h1>Premier Gadget Shop in Chittagong (Chattogram)</h1>
            <p>
              Have questions about our tech gadgets, mobile accessories, warranty, or need instant order assistance?
              Connect directly with our Chittagong team through social media, WhatsApp, or drop us a message below.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid: Social Channels + CTA Form */}
      <section className="section-shell contact-main-section">
        <div className="contact-layout-grid">
          
          {/* Left Column: Social Links & Quick Contact info */}
          <div className="contact-info-col">
            <div className="contact-social-header">
              <h2>Follow &amp; Connect On Socials</h2>
              <p>Join our growing tech community in Chittagong and across Bangladesh for latest gadget drops, reviews, and deals.</p>
            </div>

            <div className="social-connect-cards">
              {/* Instagram Card */}
              <a
                href="https://www.instagram.com/nexo_bd"
                target="_blank"
                rel="noopener noreferrer"
                className="social-card social-card-insta"
                aria-label="Follow NEXO Gadgets on Instagram"
              >
                <div className="social-card-icon insta-icon-bg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </div>
                <div className="social-card-text">
                  <span className="social-card-tag">Official Instagram</span>
                  <strong>@nexo_bd</strong>
                  <p>Product teasers, aesthetic desk setups, unboxings &amp; stories</p>
                </div>
                <div className="social-card-action">
                  <span>Follow <ExternalLink size={14} /></span>
                </div>
              </a>

              {/* Facebook Card */}
              <a
                href="https://www.facebook.com/nexogadg3ts"
                target="_blank"
                rel="noopener noreferrer"
                className="social-card social-card-fb"
                aria-label="Connect with NEXO Gadgets on Facebook"
              >
                <div className="social-card-icon fb-icon-bg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div className="social-card-text">
                  <span className="social-card-tag">Official Facebook</span>
                  <strong>NEXO Gadgets</strong>
                  <p>Customer reviews, Chittagong tech news, updates &amp; support</p>
                </div>
                <div className="social-card-action">
                  <span>Visit Page <ExternalLink size={14} /></span>
                </div>
              </a>

              {/* WhatsApp Quick Chat */}
              <a
                href="https://wa.me/8801796073736?text=Hi%20NEXO%2C%20I%20have%20an%20inquiry%20about%20your%20gadgets."
                target="_blank"
                rel="noopener noreferrer"
                className="social-card social-card-wa"
                aria-label="Chat directly with NEXO Gadgets on WhatsApp"
              >
                <div className="social-card-icon wa-icon-bg">
                  <MessageCircle size={22} />
                </div>
                <div className="social-card-text">
                  <span className="social-card-tag">Instant WhatsApp Support</span>
                  <strong>+880 1796-073736</strong>
                  <p>Fast responses for orders, stock inquiries, and instant delivery</p>
                </div>
                <div className="social-card-action">
                  <span>Chat Now <ArrowRight size={14} /></span>
                </div>
              </a>
            </div>

            {/* Hub info box */}
            <div className="contact-hub-card">
              <h3>Chittagong Store Hub &amp; Delivery</h3>
              <div className="hub-info-items">
                <div className="hub-info-item">
                  <MapPin size={18} />
                  <div>
                    <strong>Location</strong>
                    <span>Chittagong (Chattogram), Bangladesh</span>
                  </div>
                </div>
                <div className="hub-info-item">
                  <Clock size={18} />
                  <div>
                    <strong>Working Hours</strong>
                    <span>Daily: 9:00 AM – 10:00 PM</span>
                  </div>
                </div>
                <div className="hub-info-item">
                  <Mail size={18} />
                  <div>
                    <strong>Email Support</strong>
                    <a href="mailto:nexogadg3ts@gmail.com">nexogadg3ts@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: CTA Form */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              <div className="form-heading">
                <span className="eyebrow"><span /> Send a Direct Message</span>
                <h2>Get in Touch with NEXO</h2>
                <p>Fill out this form and our support team will reach out to you immediately via WhatsApp or phone.</p>
              </div>

              <ContactForm />
            </div>
          </div>

        </div>
      </section>

      {/* Map Embed Section */}
      <section className="section-shell contact-map-section">
        <div className="contact-map-card">
          <div className="map-header">
            <div className="map-header-copy">
              <span className="eyebrow"><span /> Find Us in Chittagong</span>
              <h2>NEXO Gadgets on Google Maps</h2>
              <p>Located in the heart of Chittagong. Delivering across Chattogram and all 64 districts in Bangladesh.</p>
            </div>
            <a
              href="https://www.google.com/maps/place/NEXO/@22.368111,91.8084865,14z/data=!4m6!3m5!1s0x30acd900557f4431:0x80c153a7c03c1ceb!8m2!3d22.368111!4d91.8084865"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-outline map-open-btn"
            >
              Open in Google Maps <ExternalLink size={15} />
            </a>
          </div>

          <div className="map-iframe-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14758.465354074693!2d91.80848650122351!3d22.368110997818402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd900557f4431%3A0x80c153a7c03c1ceb!2sNEXO!5e0!3m2!1sen!2sbd!4v1790183354616!5m2!1sen!2sbd"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="NEXO Gadgets Chittagong Google Map Embed"
              aria-label="NEXO Gadgets Google Map Location in Chittagong"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

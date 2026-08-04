"use client";

import Link from "next/link";
import {
  ArrowRight,
  Award,
  BatteryCharging,
  Check,
  ChevronRight,
  Globe,
  Headphones,
  Heart,
  HelpCircle,
  Laptop,
  Lightbulb,
  Mail,
  MessageCircleMore,
  PackageCheck,
  Plus,
  Search,
  Shield,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Truck,
  Wind,
  Zap,
} from "lucide-react";
import { useMemo, useState } from "react";
import { products } from "@/lib/products";

const categories = [
  { name: "All", icon: Sparkles },
  { name: "Stands", icon: Laptop },
  { name: "Power", icon: Zap },
  { name: "Audio", icon: Headphones },
  { name: "Lifestyle", icon: Wind },
  { name: "Wellness", icon: Heart },
];

const faqData = [
  { q: "What is NEXO?", a: "NEXO is a Bangladeshi technology accessories brand that offers mobile accessories, charging products, smart gadgets, wearable accessories, audio products, and everyday technology essentials." },
  { q: "What products does NEXO sell?", a: "NEXO offers mobile accessories, fast chargers, charging cables, USB cables, wireless chargers, power banks, earphones, wireless earbuds, Bluetooth speakers, smart gadgets, wearable accessories, phone holders, computer accessories, and lifestyle electronics." },
  { q: "Is NEXO a Bangladeshi brand?", a: "Yes. NEXO is a growing Bangladeshi technology accessories brand focused on delivering quality products for modern consumers." },
  { q: "Why choose NEXO?", a: "NEXO products are designed with a focus on quality, durability, performance, modern design, and affordability, making them suitable for everyday use." },
  { q: "Where can I buy NEXO products?", a: "NEXO products are available through authorized retailers, online marketplaces, and the official NEXO website." },
];

const whyChooseData = [
  { icon: Award, title: "Premium Quality Materials", text: "Every product is built with carefully selected materials for longevity." },
  { icon: BatteryCharging, title: "Fast Charging Technology", text: "Reliable, certified fast charging compatible with all modern devices." },
  { icon: Lightbulb, title: "Modern Product Design", text: "Sleek, functional designs that complement your lifestyle." },
  { icon: Shield, title: "Strong Quality Control", text: "Every product passes rigorous testing before it reaches you." },
  { icon: Star, title: "Affordable Pricing", text: "Premium features without the premium price tag." },
  { icon: Globe, title: "Customer-Focused Support", text: "Responsive support to help you with anything you need." },
];

const aboutCategories = [
  "Mobile Accessories", "Charging Accessories", "USB Cables", "Fast Chargers",
  "Wireless Chargers", "Power Banks", "Earphones", "Wireless Earbuds",
  "Bluetooth Speakers", "Smart Gadgets", "Wearable Accessories", "Mobile Holders",
  "Car Accessories", "Computer Accessories", "Lifestyle Tech Products",
];

const formatBDT = (value: number) =>
  new Intl.NumberFormat("bn-BD", {
    style: "currency",
    currency: "BDT",
    maximumFractionDigits: 0,
  }).format(value);

export default function HomePage() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");
  const [toast, setToast] = useState("");
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      products.filter(
        (product) =>
          (active === "All" || product.category === active) &&
          product.name.toLowerCase().includes(query.toLowerCase()),
      ),
    [active, query],
  );

  function notify(message: string) {
    setToast(message);
    window.setTimeout(() => setToast(""), 2200);
  }

  function addToCart() {
    notify("Added to your bag");
  }

  return (
    <main id="top">
      <section className="hero">
        <div className="hero-shell">
          <div className="hero-copy">
            <span className="eyebrow"><span /> Designed for better days</span>
            <h1>Premium Mobile <span style={{ color: "var(--orange)" }}>Accessories &amp; Tech Gadgets</span> in Bangladesh</h1>
            <p>Thoughtfully designed gadgets that simplify your setup, power your day, and look good doing it.</p>
            <div className="hero-buttons">
              <Link className="button button-dark" href="/products#best-sellers">
                Shop best sellers <ArrowRight size={17} />
              </Link>
              <a className="text-link" href="#about">Why NEXO <ArrowRight size={16} /></a>
            </div>
            <div className="hero-proof">
              <div className="avatars"><span>JK</span><span>SA</span><span>MR</span></div>
              <div>
                <strong>4.9 <span>★★★★★</span></strong>
                <small>Loved by 12,000+ customers</small>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <img
              src="/images/foldable-stand.jpg"
              alt="NEXO FlexFold premium phone stand holding a smartphone, mobile accessory from Bangladesh"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <div className="floating-card float-top">
              <span><Smartphone size={19} /></span>
              <div>
                <small>Universal fit</small>
                <strong>Phone + tablet ready</strong>
              </div>
            </div>
            <div className="floating-card float-bottom">
              <span><Check size={19} /></span>
              <div>
                <small>Built to last</small>
                <strong>Premium aluminum</strong>
              </div>
            </div>
            <div className="hero-tag">01 <i /> FLEXFOLD</div>
          </div>
        </div>
      </section>

      <section className="intro section-shell" id="intro">
        <div className="intro-inner">
          <p>
            Welcome to <strong>NEXO</strong>, one of Bangladesh&rsquo;s fastest-growing technology accessories and gadget brands. We design and deliver premium mobile accessories, charging solutions, smart gadgets, wearable accessories, audio devices, and everyday tech essentials that combine performance, durability, and style.
          </p>
          <p>
            Whether you&rsquo;re looking for fast chargers, USB cables, wireless accessories, power banks, smart devices, or innovative technology products, NEXO provides reliable solutions that help you stay connected, productive, and ready for every day.
          </p>
          <p className="intro-mission">Our mission is simple: make high-quality technology accessories accessible to everyone.</p>
          <p className="intro-tagline"><strong>NEXO &mdash; Gear Up. Live Smart.</strong></p>
        </div>
      </section>

      <section className="benefits" aria-label="Store benefits">
        <div className="benefits-shell">
          <div><Truck /><span><strong>Free express shipping</strong><small>On orders over ৳60</small></span></div>
          <div><ShieldCheck /><span><strong>2-year warranty</strong><small>Built to go the distance</small></span></div>
          <div><PackageCheck /><span><strong>3-day returns</strong><small>Unused items only</small></span></div>
          <div><Sparkles /><span><strong>Premium quality</strong><small>Tested. Refined. Reliable.</small></span></div>
        </div>
      </section>

      <section className="collection section-shell" id="shop">
        <div className="section-heading">
          <div>
            <span className="eyebrow"><span /> The NEXO edit</span>
            <h2>Small upgrades.<br />Big difference.</h2>
          </div>
          <p>Designed around the way you actually live, work, and move.</p>
        </div>
        <div className="collection-search">
          <Search size={18} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the NEXO collection..."
            aria-label="Search the NEXO collection"
          />
          {query && (
            <button onClick={() => setQuery("")} aria-label="Clear search">
              Clear
            </button>
          )}
        </div>
        <div className="category-row" id="categories">
          {categories.map(({ name, icon: Icon }) => (
            <button key={name} className={active === name ? "active" : ""} onClick={() => setActive(name)}>
              <Icon size={17} />
              {name}
            </button>
          ))}
        </div>
        <div className="product-grid">
          {filtered.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-image">
                <img
                  src={product.image}
                  alt={`${product.name}, premium ${product.category.toLowerCase()} accessory from NEXO Bangladesh`}
                  loading="lazy"
                  decoding="async"
                />
                <span className="product-label">{product.label}</span>
                <button className="heart" onClick={() => notify(`${product.name} saved to favorites`)} aria-label={`Save ${product.name}`}>
                  <Heart size={18} />
                </button>
                <button className="quick-add" onClick={addToCart}>
                  Quick add <Plus size={17} />
                </button>
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
              <div className="swatches">
                {product.colors.map((color) => (
                  <i key={color} style={{ background: color }} />
                ))}
                <span>{product.colors.length} colors</span>
              </div>
            </article>
          ))}
        </div>
        {!filtered.length && <div className="empty-products">No products found. Try another search.</div>}
        <div className="center">
          <Link href="/products" className="button button-outline">
            Explore all products <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="feature section-shell" id="story">
        <div className="feature-image">
          <video
            src="/videos/head massager video.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <span className="feature-number">02</span>
        </div>
        <div className="feature-copy">
          <span className="eyebrow light"><span /> Your five-minute reset</span>
          <h2>Switch off.<br /><em>Feel better.</em></h2>
          <p>Meet Pulse, the smart head massager designed to melt away tension, wherever the day takes you.</p>
          <ul>
            <li><Check size={16} /> 4 intelligent massage modes</li>
            <li><Check size={16} /> Whisper-quiet motor</li>
            <li><Check size={16} /> Up to 10 days battery life</li>
          </ul>
          <div className="feature-price">
            <span>From <strong>{formatBDT(69)}</strong> <s>{formatBDT(89)}</s></span>
            <button className="button button-light" onClick={addToCart}>
              Meet Pulse <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <section className="quote section-shell">
        <span className="quote-mark">&ldquo;</span>
        <blockquote>
          NEXO makes the things you use every day feel <em>considered, calm, and quietly brilliant.</em>
        </blockquote>
        <div className="press">
          <span>★★★★★ <small>4.9 / 5 from 2,400+ reviews</small></span>
          <b>design/milk</b>
          <b>HYPEBEAST</b>
          <b>GQ</b>
        </div>
      </section>

      <section className="why-nexo section-shell" id="why-nexo">
        <div className="section-heading">
          <div>
            <span className="eyebrow"><span /> Quality you can count on</span>
            <h2>Why Customers Choose&nbsp;NEXO</h2>
          </div>
          <p>People choose NEXO because we focus on what matters: quality, reliability, and real value.</p>
        </div>
        <div className="why-grid">
          {whyChooseData.map(({ icon: Icon, title, text }) => (
            <div className="why-card" key={title}>
              <span className="why-icon"><Icon size={22} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <p className="why-summary">
          Whether you&rsquo;re searching for reliable mobile accessories, charging solutions, or smart gadgets in Bangladesh, NEXO offers products designed to deliver dependable performance.
        </p>
      </section>

      <section className="about-nexo section-shell" id="about">
        <div className="about-inner">
          <div className="about-text">
            <span className="eyebrow"><span /> Our story</span>
            <h2>About NEXO</h2>
            <p>
              NEXO is a Bangladeshi consumer electronics and mobile accessories brand specializing in modern technology products for everyday use. We combine quality, performance, durability, and modern design to help people stay connected, productive, and entertained.
            </p>
            <p>
              From fast chargers and cables to wireless audio and smart devices, NEXO delivers reliable technology designed for everyday life. Our mission is to make high-quality technology accessories accessible to everyone in Bangladesh and beyond.
            </p>
          </div>
          <div className="about-categories">
            <h3>Our Product Categories</h3>
            <ul>
              {aboutCategories.map((cat) => (
                <li key={cat}><Check size={14} /> {cat}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="faq-section section-shell" id="faq">
        <div className="section-heading faq-heading">
          <div>
            <span className="eyebrow"><span /> Have questions?</span>
            <h2>Frequently Asked Questions</h2>
          </div>
        </div>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div className={`faq-item ${openFaq === index ? "faq-open" : ""}`} key={item.q}>
              <button className="faq-q" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}>
                <HelpCircle size={18} />
                <span>{item.q}</span>
                <ChevronRight size={18} className="faq-chevron" />
              </button>
              <div className="faq-a">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="newsletter">
        <div className="newsletter-inner">
          <div>
            <span className="eyebrow light"><span /> Join the inner circle</span>
            <h2>Better tech.<br />Straight to your inbox.</h2>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); if (email.includes("@")) setJoined(true); }}>
            {joined ? (
              <div className="joined">
                <Check size={20} /> You&rsquo;re in. Welcome to NEXO.
              </div>
            ) : (
              <>
                <div className="email-field">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                  />
                  <button aria-label="Join newsletter">
                    <ArrowRight />
                  </button>
                </div>
                <small>Get 10% off your first order + first access to new drops.</small>
              </>
            )}
          </form>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <div className="contact-copy">
            <span className="eyebrow"><span /> Let&apos;s talk</span>
            <h2>Get in Touch</h2>
            <p>Have a question or want to place a custom order? Reach us via WhatsApp or email, or send us a quick message below.</p>
            <div className="contact-info">
              <a href="https://wa.me/8801796073736" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="WhatsApp NEXO">
                <span className="contact-link-icon"><MessageCircleMore size={18} /></span>
                <span>WhatsApp</span>
              </a>
              <a href="mailto:nexogadg3ts@gmail.com" className="contact-link" aria-label="Email NEXO">
                <span className="contact-link-icon"><Mail size={18} /></span>
                <span>Email</span>
              </a>
            </div>
          </div>
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              notify("Message sent - we'll reply soon!");
              setEmail("");
              setQuery("");
            }}
          >
            <div className="contact-grid">
              <input type="text" placeholder="Your name" required className="contact-input" />
              <input type="email" placeholder="Your email" required className="contact-input" />
            </div>
            <textarea placeholder="Your message" rows={5} required className="contact-textarea" />
            <button type="submit" className="button button-dark">Send Message</button>
          </form>
        </div>
      </section>

      {toast && (
        <div className="toast">
          <Check size={16} />
          {toast}
        </div>
      )}
    </main>
  );
}

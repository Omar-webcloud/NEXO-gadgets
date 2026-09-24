"use client";

import Link from "next/link";
import {
  ArrowRight,
  Award,
    Check,
  BatteryCharging,
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
  Phone,
  PhoneCall,
  Plus,
  Search,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  Wind,
  X,
  Zap,
} from "lucide-react";
import { useMemo, useState } from "react";
import { products, COLOR_HEX_MAP } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { ProductCardActions } from "@/components/product-card-actions";

const categories = [
  { name: "All", icon: Sparkles },
  { name: "Stands", icon: Laptop },
  { name: "Power", icon: Zap },
  { name: "Audio", icon: Headphones },
  { name: "Lifestyle", icon: Wind },
  { name: "Wellness", icon: Heart },
];

const faqData = [
  { q: "Where is NEXO gadget shop located in Chittagong?", a: "NEXO is based in Chittagong (Chattogram), Bangladesh. We provide fast doorstep delivery across Chittagong city and express shipping nationwide to all 64 districts in Bangladesh." },
  { q: "What gadgets and accessories does NEXO sell in Chittagong?", a: "NEXO offers premium phone and tablet stands, rotatable magnetic laptop stands, fast chargers, USB-C cables, power banks, wireless earbuds, scalp massage wellness gadgets, portable mini fans, and everyday lifestyle tech." },
  { q: "Can I order gadgets in Chittagong with Cash on Delivery (COD)?", a: "Yes! NEXO offers Cash on Delivery (COD) for orders in Chittagong / Chattogram as well as throughout Bangladesh." },
  { q: "Why is NEXO one of the best gadget shops in Chittagong?", a: "NEXO focuses on uncompromising build quality, premium materials, sleek ergonomics, 2-year warranty support, and affordable pricing." },
  { q: "Where can I find NEXO on social media?", a: "You can find us on Instagram (@nexo_bd), Facebook (NEXO Gadgets - facebook.com/nexogadg3ts), TikTok (@nexogadg3ts), and YouTube (@NEXO-bd)." },
];

const whyChooseData = [
  { icon: Award, title: "Premium Quality Materials", text: "Every product is built with carefully selected materials for longevity." },
  { icon: BatteryCharging, title: "Fast Charging Technology", text: "Reliable, certified fast charging compatible with all modern devices." },
  { icon: Lightbulb, title: "Modern Product Design", text: "Sleek, functional designs that complement your lifestyle and setup." },
  { icon: Shield, title: "Strong Quality Control", text: "Every product passes rigorous testing before it reaches you." },
  { icon: Star, title: "Affordable Pricing in BD", text: "Premium features without the premium price tag." },
  { icon: Globe, title: "Chittagong & Nationwide Support", text: "Responsive customer care based in Chittagong to assist you anytime." },
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
  const cart = useCart();
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
          (product.name.toLowerCase().includes(query.toLowerCase()) ||
           product.category.toLowerCase().includes(query.toLowerCase())),
      ),
    [active, query],
  );

  function notify(message: string) {
    setToast(message);
    window.setTimeout(() => setToast(""), 2200);
  }

  function addToCart(product: any) {
    cart.addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      color: product.colors[0],
    });
    notify("Added to your bag");
  }

  return (
    <main id="top">
      <section className="hero">
        <div className="hero-shell">
          <div className="hero-copy">
            <span className="hero-kicker"><span className="hero-kicker-dot" /> NEXO / curated tech essentials</span>
            <h1>Best Gadgets in <em>Chittagong, Bangladesh</em></h1>
            <p className="hero-lede">
              Discover useful, stylish gadgets for work, travel, entertainment, and everyday life — curated in Chittagong and delivered across Bangladesh.
            </p>
            <div className="hero-actions">
              <Link href="/products#best-sellers" className="button button-light">Best sellers <ArrowRight size={16} /></Link>
              <Link href="/contact" className="button button-hero-outline">Contact us <ChevronRight size={15} /></Link>
            </div>
            <div className="hero-signal-row" aria-label="NEXO shopping highlights">
              <span className="hero-signal-card">
                <Globe size={18} />
                <div className="hero-signal-text">
                  <strong>64</strong>
                  <small>districts delivered</small>
                </div>
              </span>
              <span className="hero-signal-card">
                <ShieldCheck size={18} />
                <div className="hero-signal-text">
                  <strong>COD</strong>
                  <small>available nationwide</small>
                </div>
              </span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />
            <div className="hero-panel hero-panel-main">
              <img src="/images/foldable-stand.jpg" alt="NEXO foldable phone stand" loading="eager" fetchPriority="high" />
            </div>
            <div className="hero-panel hero-panel-power">
              <img src="/images/powerbank.png" alt="NEXO power bank" loading="eager" />
            </div>
            <div className="hero-panel hero-panel-audio">
              <img src="/images/earbuds.png" alt="NEXO wireless earbuds" loading="eager" />
            </div>
            <div className="hero-panel hero-panel-wellness">
              <img src="/images/rotatable magnetic laptop stand.webp" alt="NEXO Rotatable Magnetic Laptop & Phone Stand | Premium Metal" loading="eager" />
            </div>
          </div>
        </div>
      </section>

      <section className="intro section-shell" id="intro">
        <div className="intro-inner">
          <h2 className="intro-tagline">NEXO &mdash; Premier Gadget Shop in Chittagong</h2>
          <p>
            Welcome to <strong>NEXO Gadgets</strong>, one of Chittagong and Bangladesh&rsquo;s fastest-growing technology accessories and smart gadget brands. We design and deliver premium mobile accessories, charging solutions, smart gadgets, wearable accessories, audio devices, and everyday tech essentials that combine performance, durability, and modern style.
          </p>
          <p>
            Whether you&rsquo;re looking for gadgets in Chittagong (Chattogram), fast chargers, USB cables, wireless audio accessories, power banks, or ergonomic laptop stands, NEXO provides reliable solutions that help you stay connected, productive, and ready for every day.
          </p>
        </div>
      </section>

      <section className="benefits" aria-label="Store benefits">
        <div className="benefits-shell">
          <div><Truck /><span><strong>Free express shipping</strong><small>On orders over ৳1600</small></span></div>
          <div><PackageCheck /><span><strong>Secure packaging</strong><small>Packed with care for safe delivery</small></span></div>
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
        <div className="collection-controls">
          <div className="collection-search-box">
            <div className="search-icon-wrapper">
              <Search size={18} />
            </div>
            <input
              id="collection-search-input"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                if (active !== "All") setActive("All");
              }}
              placeholder="Search products by name or category..."
              aria-label="Search the NEXO collection"
            />
            {query ? (
              <button onClick={() => setQuery("")} aria-label="Clear search" className="clear-btn">
                <X size={15} />
              </button>
            ) : (
              <span className="search-shortcut">Search</span>
            )}
          </div>
          {query && (
            <div className="search-results-count">
              Showing {filtered.length} {filtered.length === 1 ? "product" : "products"} for &ldquo;{query}&rdquo;
            </div>
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
            <span>From <strong>{formatBDT(700)}</strong> <s>{formatBDT(899)}</s></span>
            <button className="button button-light" onClick={() => addToCart(products.find(p => p.id === 3)!)}>
              Meet Pulse <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <section className="quote section-shell">
        <span className="quote-mark">&ldquo;</span>
        <blockquote>
          NEXO brings the things you use every day feel <em>considered, calm, and quietly brilliant.</em>
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
            <h2>About NEXO Gadgets</h2>
            <p>
              NEXO is a Bangladeshi consumer electronics and mobile accessories brand headquartered in Chittagong (Chattogram), specializing in modern technology products for everyday use. We combine premium quality, performance, durability, and contemporary design to help people stay connected and productive.
            </p>
            <p>
              From adjustable phone stands and fast chargers to wireless earbuds and scalp massage devices, NEXO delivers reliable gadgets in Chittagong and all across Bangladesh with fast home delivery and warranty support.
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

      <section className="contact-section newsletter" id="contact">
        <div className="contact-inner">
          <div className="contact-copy">
            <span className="eyebrow light"><span /> Let&apos;s talk</span>
            <h2>Get in Touch with NEXO</h2>
            <p style={{ color: "#fff" }}>Looking for gadget shopping in Chittagong, order updates, or custom support? Reach us via WhatsApp or click contact to call &amp; view full store details.</p>
            <div className="hero-actions">
              <a href="https://wa.me/8801796073736" target="_blank" rel="noopener noreferrer" className="button button-light" aria-label="WhatsApp NEXO Gadgets">
                WhatsApp <MessageCircleMore size={16} />
              </a>
              <Link href="/contact" className="button button-hero-outline" aria-label="Contact NEXO">
                Contact us <ChevronRight size={15} />
              </Link>
            </div>
          </div>
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get("name") as string;
              const phone = formData.get("phone") as string;
              const message = formData.get("message") as string;
              
              const text = `Hello NEXO, I am ${name} (${phone}).\n\n${message}`;
              const whatsappUrl = `https://wa.me/8801796073736?text=${encodeURIComponent(text)}`;
              window.open(whatsappUrl, '_blank');
              
              e.currentTarget.reset();
            }}
          >
            <div className="contact-grid">
              <input name="name" type="text" placeholder="Your name" required className="contact-input" />
              <input name="phone" type="tel" placeholder="Your Phone Number" required className="contact-input" />
            </div>
            <textarea name="message" placeholder="Your message" rows={5} required className="contact-textarea" />
            <button type="submit" className="button button-dark">Send via WhatsApp</button>
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

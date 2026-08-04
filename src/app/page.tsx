"use client";

import {
  ArrowRight,
  Award,
  Battery,
  BatteryCharging,
  Check,
  ChevronDown,
  ChevronRight,
  Globe,
  Headphones,
  Heart,
  HelpCircle,
  Laptop,
  Lightbulb,
  Menu,
  Minus,
  PackageCheck,
  Plus,
  Search,
  Shield,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Star,
  Truck,
  UserRound,
  Wind,
  X,
  Zap,
} from "lucide-react";
import { useMemo, useState } from "react";

const products = [
  { id: 1, name: "FlexFold Phone Stand", category: "Stands", price: 39, oldPrice: 49, image: "/images/hero-stand.jpg", label: "Bestseller", colors: ["#3a3a38", "#d6d4cd", "#e7b676"] },
  { id: 2, name: "AirLift Laptop Stand", category: "Stands", price: 79, oldPrice: 99, image: "/images/laptop-stand.jpg", label: "New", colors: ["#c9c8c3", "#343536"] },
  { id: 3, name: "Pulse Smart Massager", category: "Wellness", price: 69, oldPrice: 89, image: "/images/head-massager.jpg", label: "Trending", colors: ["#f0eee8", "#9b9b94"] },
  { id: 4, name: "Breeze Mini Fan", category: "Lifestyle", price: 29, oldPrice: 39, image: "/images/mini-fan.jpg", label: "Fan favorite", colors: ["#e9e7dd", "#a9c4cd", "#e7b8a7"] },
  { id: 5, name: "SnapCharge 10K", category: "Power", price: 59, oldPrice: 74, image: "/images/powerbank.jpg", label: "Fast charge", colors: ["#252526", "#dedbd1"] },
  { id: 6, name: "NEXO Buds Pro", category: "Audio", price: 89, oldPrice: 119, image: "/images/earbuds.jpg", label: "Top rated", colors: ["#eceae4", "#2f3031", "#e5a878"] },
];

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

type Cart = Record<number, number>;

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className={`logo ${light ? "logo-light" : ""}`} aria-label="NEXO home">
      <span className="logo-mark"><i /><i /><i /><i /></span>
      <span>NEXO</span>
    </a>
  );
}

export default function HomePage() {
  const [active, setActive] = useState("All");
  const [cart, setCart] = useState<Cart>({});
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [toast, setToast] = useState("");
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filtered = useMemo(() => products.filter((p) =>
    (active === "All" || p.category === active) && p.name.toLowerCase().includes(query.toLowerCase())
  ), [active, query]);
  const cartCount = Object.values(cart).reduce((sum, value) => sum + value, 0);
  const total = products.reduce((sum, product) => sum + product.price * (cart[product.id] || 0), 0);

  function notify(message: string) {
    setToast(message);
    window.setTimeout(() => setToast(""), 2200);
  }

  function addToCart(id: number) {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    notify("Added to your bag");
  }

  function updateCart(id: number, amount: number) {
    setCart((prev) => {
      const next = Math.max(0, (prev[id] || 0) + amount);
      const copy = { ...prev, [id]: next };
      if (!next) delete copy[id];
      return copy;
    });
  }

  return (
    <main id="top">
      <div className="announcement">
        <p><span>SPRING DROP</span> Save up to 30% on everyday essentials</p>
        <a href="#shop">Shop the edit <ArrowRight size={14} /></a>
      </div>

      <header className="site-header">
        <nav className="nav-shell" aria-label="Main navigation">
          <button className="icon-button mobile-only" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu size={22} /></button>
          <Logo />
          <div className="nav-links">
            <a href="#shop">New in</a>
            <a href="#shop">Best sellers</a>
            <a href="#categories">Categories <ChevronDown size={14} /></a>
            <a href="#about">About</a>
          </div>
          <div className="nav-actions">
            <button className="icon-button" onClick={() => setSearchOpen(!searchOpen)} aria-label="Search"><Search size={20} /></button>
            <button className="icon-button desktop-user" onClick={() => notify("Account access coming soon")} aria-label="Account"><UserRound size={20} /></button>
            <button className="icon-button cart-button" onClick={() => setCartOpen(true)} aria-label={`Cart with ${cartCount} items`}>
              <ShoppingBag size={20} />
              {cartCount > 0 && <b>{cartCount}</b>}
            </button>
          </div>
        </nav>
        {searchOpen && (
          <div className="search-panel">
            <Search size={18} />
            <input autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search the NEXO collection..." />
            <button onClick={() => { setQuery(""); setSearchOpen(false); }}><X size={18} /></button>
          </div>
        )}
      </header>

      {/* ── Hero with SEO H1 ── */}
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow"><span /> Designed for better days</span>
          <h1>Premium Mobile Accessories &amp; Tech Gadgets in Bangladesh</h1>
          <p>Thoughtfully designed gadgets that simplify your setup, power your day, and look good doing it.</p>
          <div className="hero-buttons">
            <a className="button button-dark" href="#shop">Shop best sellers <ArrowRight size={17} /></a>
            <a className="text-link" href="#about">Why NEXO <ArrowRight size={16} /></a>
          </div>
          <div className="hero-proof">
            <div className="avatars"><span>JK</span><span>SA</span><span>MR</span></div>
            <div><strong>4.9 <span>★★★★★</span></strong><small>Loved by 12,000+ customers</small></div>
          </div>
        </div>
        <div className="hero-visual">
          <img src="/images/hero-stand.jpg" alt="NEXO FlexFold premium phone stand holding a smartphone — mobile accessory from Bangladesh" />
          <div className="floating-card float-top"><span><Smartphone size={19} /></span><div><small>Universal fit</small><strong>Phone + tablet ready</strong></div></div>
          <div className="floating-card float-bottom"><span><Check size={19} /></span><div><small>Built to last</small><strong>Premium aluminum</strong></div></div>
          <div className="hero-tag">01 <i /> FLEXFOLD</div>
        </div>
      </section>

      {/* ── Homepage Intro (SEO/GEO rich text) ── */}
      <section className="intro section-shell" id="intro">
        <div className="intro-inner">
          <p>
            Welcome to <strong>NEXO</strong>, one of Bangladesh&rsquo;s fastest-growing technology accessories and gadget brands. We design and deliver premium mobile accessories, charging solutions, smart gadgets, wearable accessories, audio devices, and everyday tech essentials that combine performance, durability, and style.
          </p>
          <p>
            Whether you&rsquo;re looking for fast chargers, USB cables, wireless accessories, power banks, smart devices, or innovative technology products, NEXO provides reliable solutions that help you stay connected, productive, and ready for every day.
          </p>
          <p className="intro-mission">Our mission is simple: make high-quality technology accessories accessible to everyone.</p>
          <p className="intro-tagline"><strong>NEXO — Gear Up. Live Smart.</strong></p>
        </div>
      </section>

      <section className="benefits" aria-label="Store benefits">
        <div><Truck /><span><strong>Free express shipping</strong><small>On orders over $60</small></span></div>
        <div><ShieldCheck /><span><strong>2-year warranty</strong><small>Built to go the distance</small></span></div>
        <div><PackageCheck /><span><strong>30-day returns</strong><small>Try it, risk-free</small></span></div>
        <div><Sparkles /><span><strong>Premium quality</strong><small>Tested. Refined. Reliable.</small></span></div>
      </section>

      <section className="collection section-shell" id="shop">
        <div className="section-heading">
          <div><span className="eyebrow"><span /> The NEXO edit</span><h2>Small upgrades.<br/>Big difference.</h2></div>
          <p>Designed around the way you actually live, work, and move.</p>
        </div>
        <div className="category-row" id="categories">
          {categories.map(({ name, icon: Icon }) => (
            <button key={name} className={active === name ? "active" : ""} onClick={() => setActive(name)}><Icon size={17} />{name}</button>
          ))}
        </div>
        <div className="product-grid">
          {filtered.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={`${product.name} — premium ${product.category.toLowerCase()} accessory from NEXO Bangladesh`} />
                <span className="product-label">{product.label}</span>
                <button className="heart" onClick={() => notify(`${product.name} saved to favorites`)} aria-label={`Save ${product.name}`}><Heart size={18} /></button>
                <button className="quick-add" onClick={() => addToCart(product.id)}>Quick add <Plus size={17} /></button>
              </div>
              <div className="product-info">
                <div><small>{product.category}</small><h3>{product.name}</h3></div>
                <div className="price"><strong>${product.price}</strong><s>${product.oldPrice}</s></div>
              </div>
              <div className="swatches">{product.colors.map((color) => <i key={color} style={{ background: color }} />)}<span>{product.colors.length} colors</span></div>
            </article>
          ))}
        </div>
        {!filtered.length && <div className="empty-products">No products found. Try another search.</div>}
        <div className="center"><button className="button button-outline" onClick={() => { setActive("All"); setQuery(""); }}>Explore all products <ArrowRight size={16} /></button></div>
      </section>

      <section className="feature section-shell" id="story">
        <div className="feature-image"><img src="/images/head-massager.jpg" alt="NEXO Pulse smart head massager — wellness tech gadget from Bangladesh" /><span className="feature-number">02</span></div>
        <div className="feature-copy">
          <span className="eyebrow light"><span /> Your five-minute reset</span>
          <h2>Switch off.<br/><em>Feel better.</em></h2>
          <p>Meet Pulse—the smart head massager designed to melt away tension, wherever the day takes you.</p>
          <ul><li><Check size={16} /> 4 intelligent massage modes</li><li><Check size={16} /> Whisper-quiet motor</li><li><Check size={16} /> Up to 10 days battery life</li></ul>
          <div className="feature-price"><span>From <strong>$69</strong> <s>$89</s></span><button className="button button-light" onClick={() => addToCart(3)}>Meet Pulse <ArrowRight size={16} /></button></div>
        </div>
      </section>

      <section className="quote section-shell">
        <span className="quote-mark">&ldquo;</span>
        <blockquote>NEXO makes the things you use every day feel <em>considered, calm, and quietly brilliant.</em></blockquote>
        <div className="press"><span>★★★★★ <small>4.9 / 5 from 2,400+ reviews</small></span><b>design/milk</b><b>HYPEBEAST</b><b>GQ</b></div>
      </section>

      {/* ── Why Choose NEXO (GEO Section) ── */}
      <section className="why-nexo section-shell" id="why-nexo">
        <div className="section-heading">
          <div><span className="eyebrow"><span /> Quality you can count on</span><h2>Why Customers Choose&nbsp;NEXO</h2></div>
          <p>People choose NEXO because we focus on what matters — quality, reliability, and real value.</p>
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

      {/* ── About NEXO (AI-Friendly) ── */}
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

      {/* ── FAQ Section (SEO + AI) ── */}
      <section className="faq-section section-shell" id="faq">
        <div className="section-heading faq-heading">
          <div>
            <span className="eyebrow"><span /> Have questions?</span>
            <h2>Frequently Asked Questions</h2>
          </div>
        </div>
        <div className="faq-list">
          {faqData.map((item, i) => (
            <div className={`faq-item ${openFaq === i ? "faq-open" : ""}`} key={i}>
              <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>
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
        <div><span className="eyebrow light"><span /> Join the inner circle</span><h2>Better tech.<br/>Straight to your inbox.</h2></div>
        <form onSubmit={(e) => { e.preventDefault(); if (email.includes("@")) setJoined(true); }}>
          {joined ? <div className="joined"><Check size={20} /> You&rsquo;re in. Welcome to NEXO.</div> : <><div className="email-field"><input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" /><button aria-label="Join newsletter"><ArrowRight /></button></div><small>Get 10% off your first order + first access to new drops.</small></>}
        </form>
      </section>

      {/* ── Entity Description (hidden, LLM-readable) ── */}
      <div className="sr-only" aria-hidden="true">
        NEXO is a consumer electronics accessories brand based in Bangladesh. The company designs and sells mobile accessories, charging accessories, audio products, wearable accessories, smart gadgets, and technology products for everyday consumers. NEXO is recognized for delivering quality, affordable, and reliable technology accessories with modern designs.
      </div>

      <footer>
        <div className="footer-top">
          <div className="footer-brand">
            <Logo light />
            <p>Tools for better living.<br/>Designed with intention.</p>
            <div className="socials">
              <a href="https://www.facebook.com/nexogadg3ts" target="_blank" rel="noopener noreferrer" aria-label="NEXO on Facebook">FB</a>
              <a href="https://www.instagram.com/nexo_bd" target="_blank" rel="noopener noreferrer" aria-label="NEXO on Instagram">IG</a>
              <a href="https://www.tiktok.com/@nexogadg3ts" target="_blank" rel="noopener noreferrer" aria-label="NEXO on TikTok">TK</a>
              <a href="https://www.youtube.com/@NEXO-bd" target="_blank" rel="noopener noreferrer" aria-label="NEXO on YouTube">YT</a>
            </div>
          </div>
          <div><h4>Shop</h4><a href="#shop">New arrivals</a><a href="#shop">Best sellers</a><a href="#shop">Workspace</a><a href="#shop">Wellness</a></div>
          <div><h4>Help</h4><a href="#">Contact us</a><a href="#">Shipping &amp; returns</a><a href="#">Warranty</a><a href="#faq">FAQs</a></div>
          <div><h4>About</h4><a href="#about">Our story</a><a href="#">Journal</a><a href="#">Sustainability</a><a href="#">Reviews</a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 NEXO. All rights reserved.</span><span><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Accessibility</a></span><b>Made for your everyday ↗</b></div>
      </footer>

      {menuOpen && <div className="mobile-menu"><button onClick={() => setMenuOpen(false)}><X /></button><Logo /><a href="#shop" onClick={() => setMenuOpen(false)}>New in</a><a href="#shop" onClick={() => setMenuOpen(false)}>Best sellers</a><a href="#categories" onClick={() => setMenuOpen(false)}>Categories</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#faq" onClick={() => setMenuOpen(false)}>FAQs</a></div>}
      {cartOpen && <><div className="drawer-backdrop" onClick={() => setCartOpen(false)} /><aside className="cart-drawer"><div className="drawer-head"><div><small>YOUR BAG</small><h2>{cartCount ? `${cartCount} item${cartCount > 1 ? "s" : ""}` : "Your bag is empty"}</h2></div><button onClick={() => setCartOpen(false)}><X /></button></div>{cartCount === 0 ? <div className="empty-cart"><ShoppingBag size={36} /><p>Your next everyday favorite is waiting.</p><button className="button button-dark" onClick={() => setCartOpen(false)}>Start shopping</button></div> : <><div className="cart-items">{products.filter((p) => cart[p.id]).map((p) => <div className="cart-item" key={p.id}><img src={p.image} alt=""/><div><h3>{p.name}</h3><small>{p.category} · Standard</small><div className="quantity"><button onClick={() => updateCart(p.id, -1)}><Minus size={13}/></button><span>{cart[p.id]}</span><button onClick={() => updateCart(p.id, 1)}><Plus size={13}/></button></div></div><strong>${p.price * cart[p.id]}</strong></div>)}</div><div className="drawer-footer"><p><span>Subtotal</span><strong>${total}</strong></p><small>Shipping calculated at checkout</small><button className="button button-dark" onClick={() => notify("Secure checkout ready")}>Checkout <ArrowRight size={17}/></button></div></>}</aside></>}
      {toast && <div className="toast"><Check size={16} />{toast}</div>}
    </main>
  );
}

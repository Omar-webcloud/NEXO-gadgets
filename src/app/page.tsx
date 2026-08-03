"use client";

import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Headphones,
  Heart,
  Laptop,
  Menu,
  Minus,
  PackageCheck,
  Plus,
  Search,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
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
            <a href="#story">Our story</a>
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

      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow"><span /> Designed for better days</span>
          <h1>Everyday tech.<br/><em>Elevated.</em></h1>
          <p>Thoughtfully designed gadgets that simplify your setup, power your day, and look good doing it.</p>
          <div className="hero-buttons">
            <a className="button button-dark" href="#shop">Shop best sellers <ArrowRight size={17} /></a>
            <a className="text-link" href="#story">Why NEXO <ArrowRight size={16} /></a>
          </div>
          <div className="hero-proof">
            <div className="avatars"><span>JK</span><span>SA</span><span>MR</span></div>
            <div><strong>4.9 <span>★★★★★</span></strong><small>Loved by 12,000+ customers</small></div>
          </div>
        </div>
        <div className="hero-visual">
          <img src="/images/hero-stand.jpg" alt="NEXO FlexFold phone stand holding a smartphone" />
          <div className="floating-card float-top"><span><Smartphone size={19} /></span><div><small>Universal fit</small><strong>Phone + tablet ready</strong></div></div>
          <div className="floating-card float-bottom"><span><Check size={19} /></span><div><small>Built to last</small><strong>Premium aluminum</strong></div></div>
          <div className="hero-tag">01 <i /> FLEXFOLD</div>
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
                <img src={product.image} alt={product.name} />
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
        <div className="feature-image"><img src="/images/head-massager.jpg" alt="NEXO Pulse smart head massager" /><span className="feature-number">02</span></div>
        <div className="feature-copy">
          <span className="eyebrow light"><span /> Your five-minute reset</span>
          <h2>Switch off.<br/><em>Feel better.</em></h2>
          <p>Meet Pulse—the smart head massager designed to melt away tension, wherever the day takes you.</p>
          <ul><li><Check size={16} /> 4 intelligent massage modes</li><li><Check size={16} /> Whisper-quiet motor</li><li><Check size={16} /> Up to 10 days battery life</li></ul>
          <div className="feature-price"><span>From <strong>$69</strong> <s>$89</s></span><button className="button button-light" onClick={() => addToCart(3)}>Meet Pulse <ArrowRight size={16} /></button></div>
        </div>
      </section>

      <section className="quote section-shell">
        <span className="quote-mark">“</span>
        <blockquote>NEXO makes the things you use every day feel <em>considered, calm, and quietly brilliant.</em></blockquote>
        <div className="press"><span>★★★★★ <small>4.9 / 5 from 2,400+ reviews</small></span><b>design/milk</b><b>HYPEBEAST</b><b>GQ</b></div>
      </section>

      <section className="newsletter">
        <div><span className="eyebrow light"><span /> Join the inner circle</span><h2>Better tech.<br/>Straight to your inbox.</h2></div>
        <form onSubmit={(e) => { e.preventDefault(); if (email.includes("@")) setJoined(true); }}>
          {joined ? <div className="joined"><Check size={20} /> You’re in. Welcome to NEXO.</div> : <><div className="email-field"><input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" /><button aria-label="Join newsletter"><ArrowRight /></button></div><small>Get 10% off your first order + first access to new drops.</small></>}
        </form>
      </section>

      <footer>
        <div className="footer-top">
          <div className="footer-brand"><Logo light /><p>Tools for better living.<br/>Designed with intention.</p><div className="socials"><a href="#">IG</a><a href="#">TK</a><a href="#">PT</a></div></div>
          <div><h4>Shop</h4><a href="#shop">New arrivals</a><a href="#shop">Best sellers</a><a href="#shop">Workspace</a><a href="#shop">Wellness</a></div>
          <div><h4>Help</h4><a href="#">Contact us</a><a href="#">Shipping & returns</a><a href="#">Warranty</a><a href="#">FAQs</a></div>
          <div><h4>About</h4><a href="#story">Our story</a><a href="#">Journal</a><a href="#">Sustainability</a><a href="#">Reviews</a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 NEXO. All rights reserved.</span><span><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Accessibility</a></span><b>Made for your everyday ↗</b></div>
      </footer>

      {menuOpen && <div className="mobile-menu"><button onClick={() => setMenuOpen(false)}><X /></button><Logo /><a href="#shop" onClick={() => setMenuOpen(false)}>New in</a><a href="#shop" onClick={() => setMenuOpen(false)}>Best sellers</a><a href="#categories" onClick={() => setMenuOpen(false)}>Categories</a><a href="#story" onClick={() => setMenuOpen(false)}>Our story</a></div>}
      {cartOpen && <><div className="drawer-backdrop" onClick={() => setCartOpen(false)} /><aside className="cart-drawer"><div className="drawer-head"><div><small>YOUR BAG</small><h2>{cartCount ? `${cartCount} item${cartCount > 1 ? "s" : ""}` : "Your bag is empty"}</h2></div><button onClick={() => setCartOpen(false)}><X /></button></div>{cartCount === 0 ? <div className="empty-cart"><ShoppingBag size={36} /><p>Your next everyday favorite is waiting.</p><button className="button button-dark" onClick={() => setCartOpen(false)}>Start shopping</button></div> : <><div className="cart-items">{products.filter((p) => cart[p.id]).map((p) => <div className="cart-item" key={p.id}><img src={p.image} alt=""/><div><h3>{p.name}</h3><small>{p.category} · Standard</small><div className="quantity"><button onClick={() => updateCart(p.id, -1)}><Minus size={13}/></button><span>{cart[p.id]}</span><button onClick={() => updateCart(p.id, 1)}><Plus size={13}/></button></div></div><strong>${p.price * cart[p.id]}</strong></div>)}</div><div className="drawer-footer"><p><span>Subtotal</span><strong>${total}</strong></p><small>Shipping calculated at checkout</small><button className="button button-dark" onClick={() => notify("Secure checkout ready")}>Checkout <ArrowRight size={17}/></button></div></>}</aside></>}
      {toast && <div className="toast"><Check size={16} />{toast}</div>}
    </main>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { Camera, Menu, MessageCircleMore, Music2, Video, X } from "lucide-react";
import { SITE_NAME } from "@/lib/site";

const navLinks = [
  { label: "Products", href: "/products" },
  { label: "Best sellers", href: "/products#best-sellers" },
  { label: "About", href: "/#about" },
];

function Logo() {
  return (
    <Link href="/#top" className="logo" aria-label={`${SITE_NAME} home`}>
      <span className="logo-mark">
        <i />
        <i />
        <i />
        <i />
      </span>
      <span>{SITE_NAME}</span>
    </Link>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <button className="icon-button mobile-only" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <Menu size={22} />
        </button>
        <Logo />
        <div className="nav-links">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="nav-actions" aria-hidden="true" />
      </nav>
      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-top">
            <Logo />
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X />
            </button>
          </div>
          <nav className="mobile-menu-links" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo />
            <p>Tools for better living.<br />Designed with intention.</p>
            <div className="socials">
              <a href="https://www.facebook.com/nexogadg3ts" target="_blank" rel="noopener noreferrer" aria-label="NEXO on Facebook">
                <MessageCircleMore size={16} />
              </a>
              <a href="https://www.instagram.com/nexo_bd" target="_blank" rel="noopener noreferrer" aria-label="NEXO on Instagram">
                <Camera size={16} />
              </a>
              <a href="https://www.tiktok.com/@nexogadg3ts" target="_blank" rel="noopener noreferrer" aria-label="NEXO on TikTok">
                <Music2 size={16} />
              </a>
              <a href="https://www.youtube.com/@NEXO-bd" target="_blank" rel="noopener noreferrer" aria-label="NEXO on YouTube">
                <Video size={16} />
              </a>
            </div>
          </div>
          <div>
            <h4>Support</h4>
            <Link href="/#contact">Contact us</Link>
            <Link href="/#faq">FAQs</Link>
            <a href="https://wa.me/8801796073736" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
          <div>
            <h4>Explore</h4>
            <Link href="/products">Products</Link>
            <Link href="/products#best-sellers">Best sellers</Link>
            <Link href="/#about">Our story</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 NEXO. All rights reserved.</span>
          <span>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </span>
          <b>Made for your everyday ↗</b>
        </div>
      </div>
    </footer>
  );
}

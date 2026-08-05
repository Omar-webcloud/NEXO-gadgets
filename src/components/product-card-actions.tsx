"use client";

import { useCart } from "@/lib/cart";
import { formatColorName } from "@/lib/products";
import { ArrowRight, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function ProductCardActions({ product }: { product: any }) {
  const cart = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    cart.addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      color: product.colors[0],
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="product-card-actions">
      <button
        type="button"
        className={`button ${added ? "button-success" : "button-dark"} card-action-btn`}
        onClick={handleAddToCart}
        aria-label={`Add ${product.name} to cart`}
      >
        <ShoppingBag size={14} />
        <span>{added ? "Added!" : "Add to Cart"}</span>
      </button>
      <Link href={`/products/${product.slug}`} className="button button-outline card-action-btn">
        <span>View product</span>
        <ArrowRight size={14} />
      </Link>
    </div>
  );
}

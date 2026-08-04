"use client";

import { useCart } from "@/lib/cart";
import { useState } from "react";

export function AddToCartButton({ product }: { product: any }) {
  const cart = useCart();
  const [added, setAdded] = useState(false);

  return (
    <button 
      className="button button-dark" 
      onClick={() => {
        cart.addItem({
          productId: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          color: product.colors[0]
        });
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
      }}
    >
      {added ? "Added to Bag!" : "Buy now"}
    </button>
  );
}

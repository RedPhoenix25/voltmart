"use client";

import Image from "next/image";
import type { Product } from "@/data/products";
import { useCart } from "./CartProvider";
import styles from "./ProductCard.module.css";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <article className={styles.card}>
      <div className={styles.imageArea}>
        <span className={styles.category}>{product.category}</span>
        <Image
          className={styles.productImage}
          src={product.image}
          alt={product.imageAlt}
          width={800}
          height={600}
        />
      </div>

      <div className={styles.content}>
        <h3>{product.name}</h3>
        <p className={styles.description}>{product.description}</p>

        <div className={styles.purchaseRow}>
          <p className={styles.price}>${product.price.toFixed(2)}</p>
          <button
            className={styles.addButton}
            type="button"
            aria-label={`Add ${product.name} to cart`}
            onClick={addItem}
          >
            Add to Cart <span aria-hidden="true">+</span>
          </button>
        </div>
      </div>
    </article>
  );
}

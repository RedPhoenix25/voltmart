"use client";

import { useCart } from "./CartProvider";

type CartButtonProps = {
  className: string;
  countClassName: string;
};

export default function CartButton({ className, countClassName }: CartButtonProps) {
  const { itemCount } = useCart();

  return (
    <button className={className} type="button" aria-label={`Cart with ${itemCount} items`}>
      <span>Bag</span>
      <span className={countClassName} aria-live="polite" aria-atomic="true">
        {itemCount}
      </span>
    </button>
  );
}

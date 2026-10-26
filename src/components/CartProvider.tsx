"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

type CartContextValue = {
  itemCount: number;
  addItem: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [itemCount, setItemCount] = useState(0);
  const addItem = useCallback(() => setItemCount((count) => count + 1), []);
  const value = useMemo(() => ({ itemCount, addItem }), [itemCount, addItem]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}

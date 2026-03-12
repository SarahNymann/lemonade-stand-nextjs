"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type CartItem = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Omit<CartItem, "quantity">) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(product: Omit<CartItem, "quantity">) {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.idDrink === product.idDrink
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.idDrink === product.idDrink
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside a CartProvider");
  }

  return context;
}
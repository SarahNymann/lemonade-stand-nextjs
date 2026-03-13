"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type CartItem = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  quantity: number;
};

type CartProduct = Omit<CartItem, "quantity">;

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: CartProduct) => void;
  increaseQuantity: (idDrink: string) => void;
  decreaseQuantity: (idDrink: string) => void;
  removeFromCart: (idDrink: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(product: CartProduct) {
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

  function increaseQuantity(idDrink: string) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.idDrink === idDrink
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decreaseQuantity(idDrink: string) {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.idDrink === idDrink
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(idDrink: string) {
    setCart((prevCart) =>
      prevCart.filter((item) => item.idDrink !== idDrink)
    );
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
      }}
    >
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
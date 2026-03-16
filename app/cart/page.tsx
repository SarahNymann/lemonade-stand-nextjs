"use client";

import { useCart } from "@/context/CartContext";
import CartItem from "@/components/CartItem";

export default function CartPage() {
  const { cart } = useCart();

  return (
    <section className="p-6">
      <h1 className="mb-6 text-3xl font-bold">Din kurv</h1>

      {cart.length === 0 ? (
        <p>Din kurv er tom.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <CartItem key={item.idDrink} item={item} />
            ))}
        </div>
      )}
    </section>
  );
}
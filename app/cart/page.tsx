"use client";

import { useCart } from "@/context/CartContext";
import CartItem from "@/components/CartItem";
import Link from "next/link";

export default function CartPage() {
  const { cart } = useCart();

  return (
    <section className="p-6">
      <h1 className="mb-6 text-3xl font-bold">Din kurv</h1>

      {cart.length === 0 ? (
        <p>Din kurv er tom.</p>
      ) : (
        <> {/* Bruger et Fragment (<> </>) til at samle flere elementer uden at tilføje en ekstra <div> i HTML. */}
        <div className="space-y-4">
          {cart.map((item) => (
            <CartItem key={item.idDrink} item={item} />
            ))}
        </div>

        <div className="mt-6 flex justify-end">
          <Link
            href="/checkout"
            className="inline-block rounded-xl bg-pink-950 px-5 py-3 text-yellow-100 hover:opacity-90">
              Gå til checkout
            </Link>
        </div>
        </>
        
      )}
    </section>
  );
}
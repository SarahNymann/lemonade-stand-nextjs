"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
    const { cart } = useCart();

    if (cart.length === 0) {
        return <p>Din kurv er tom.</p>;
        }

    return (
        <section className="max-w-6xl mx-auto p-8 mt-12">
            <h1 className="text-3xl font-bold mb-6">Checkout</h1>

            <div className="divide-y">
            {cart.map((item) => (
              <article
                key={item.idDrink}
                className="flex items-center justify-between p-4"
              >
                <img
                  src={item.strDrinkThumb}
                  alt={item.strDrink}
                  className="h-24 w-24 rounded-lg object-cover"
                />

                <div>
                  <h2 className="text-lg font-semibold">{item.strDrink}</h2>
                  <p className="text-sm text-gray-600">Antal: {item.quantity}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex justify-end gap-3">
            <Link
              href="/cart"
              className="rounded-full border-2 border-pink-950 px-4 py-2 text-pink-950 transition hover:bg-yellow-100"
            >
              Tilbage til kurv
            </Link>

            <button className="rounded-full bg-pink-950 text-yellow-100 px-4 py-2 hover:opacity-90">
            Bestil drinks
          </button>
          </div>
        </section>
    )
}
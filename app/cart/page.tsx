"use client";

import { useCart } from "@/context/CartContext";

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
            <article
              key={item.idDrink}
              className="flex items-center gap-4 rounded-xl border bg-white p-4 shadow-sm"
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

              {/* <button>-</button>
              <button>+</button> */}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
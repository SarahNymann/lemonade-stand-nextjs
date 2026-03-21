"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";

export default function CheckoutPage() {
    const { cart } = useCart();

    if (cart.length === 0) {
        return <>
        <main className="max-w-6xl mx-auto p-8 mt-10">
          <section className="bg-gradient-to-br from-yellow-200 to-yellow-100 rounded-3xl p-10 mb-10">
            <h1 className="text-4xl md:text-5xl leading-tight text-pink-950 mb-10">Din kurv</h1>
              <p className="text-lg leading-relaxed text-gray-700">
                Din kurv er tom lige nu. <br></br>Gå til shoppen og find dine favoritdrinks.
              </p>

              <div className="mt-6 flex justify-end">
                <Link href="/shop">
                  <PrimaryButton>
                      Gå til shoppen
                  </PrimaryButton>
                </Link>
              </div>
        </section>
      </main>
        </>
        }

    return (
      <main className="max-w-6xl mx-auto p-8 mt-10">
        <section className="bg-gradient-to-br from-yellow-200 to-yellow-50 rounded-3xl p-10 mb-10">
          <h1 className="text-4xl md:text-5xl leading-tight text-pink-950 mb-10">Checkout</h1>

            <div className="divide-y space-y-8 lex flex-col sm:flex-row gap-3 mt-6 w-full justify-center">
              {cart.map((item) => (
                <article
                  key={item.idDrink}
                  className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-8 p-4"
                >
                  <img
                    src={item.strDrinkThumb}
                    alt={item.strDrink}
                    className="h-32 w-32 rounded-lg object-cover"
                  />

                  <div className="text-center sm:text-left">
                    <h2 className="text-lg text-pink-950 font-semibold">{item.strDrink}</h2>
                    <p className="text-md text-pink-950">Antal: {item.quantity}</p>
                  </div>
                </article>
              ))}
            </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:justify-end">
            <Link href="/cart" className="">
              <SecondaryButton>
                Tilbage til kurv
              </SecondaryButton>
            </Link>
          <div className="">
            <PrimaryButton>
              Bestil drinks
            </PrimaryButton>
          </div>
            
          </div>

        </section>
      </main>
    )
}
"use client";

import { useCart } from "@/context/CartContext";
import CartItem from "@/components/CartItem";
import Link from "next/link";
import PrimaryButton from "@/components/PrimaryButton";

export default function CartPage() {
  const { cart } = useCart();

  return ( 
      <main className="max-w-6xl mx-auto p-8 mt-10">
          <section className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-3xl p-10 mb-10">
      
            <h1 className="text-4xl md:text-5xl leading-tight text-pink-950 mb-10">Din kurv</h1>
      
            {cart.length === 0 ? (
              <>
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

              </>

            ) : (
              <> {/* Bruger et Fragment (<> </>) til at samle flere elementer uden at tilføje en ekstra <div> i HTML. */}
              <div className="space-y-8">
                {cart.map((item) => (
                  <CartItem key={item.idDrink} item={item} />
                  ))}
              </div>

              <div className="mt-6 flex justify-end">
                <PrimaryButton>
                    Gå til checkout
                </PrimaryButton>
              </div>
              </>
              
            )}
          </section>
      </main>
  );
}
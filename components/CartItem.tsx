"use client";

import { useCart } from "@/context/CartContext";

type CartItemProps = {
    item: {
        idDrink: string;
        strDrink: string;
        strDrinkThumb: string;
        quantity: number;
    };
};

export default function CartItem({ item }: CartItemProps) {
    const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  
    return (
         <article className="flex items-center gap-4 rounded-xl border bg-white p-4 shadow-sm">
                <img
                  src={item.strDrinkThumb}
                  alt={item.strDrink}
                  className="h-24 w-24 rounded-lg object-cover"
                />
  
                <div>
                  <h2 className="text-lg font-semibold">{item.strDrink}</h2>
                  <p className="text-sm text-gray-600 mt-1">Antal:</p>
                  
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      className="rounded-md border px-3 py-1 text-lg hover:bg-gray-100"
                      onClick={() => decreaseQuantity(item.idDrink)}
                      >
                        -
                      </button>
  
                    <span>{item.quantity}</span>
  
                    <button
                      className="rounded-md border px-3 py-1 text-lg hover:bg-gray-100"
                      onClick={() => increaseQuantity(item.idDrink)}
                      >
                        +
                      </button>
                  </div>
                </div>
  
                <button
                  className="ml-4 rounded-md bg-red-500 px-3 py-1 text-white hover:bg-red-600"
                  onClick={() => removeFromCart(item.idDrink)}
                >
                  Fjern fra kurv
                </button>              
        </article>
    );
}
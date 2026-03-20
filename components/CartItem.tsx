"use client";

import { useCart } from "@/context/CartContext";
import SecondaryButton from "./SecondaryButton";
import { Trash2 } from "lucide-react";

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
         <article className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm">
                <img
                  src={item.strDrinkThumb}
                  alt={item.strDrink}
                  className="h-32 w-32 rounded-lg object-cover"
                />
  
                <div className="ml-4">
                  <h2 className="text-lg text-gray-700 font-semibold">{item.strDrink}</h2>
                  <p className="text-sm text-gray-700 mt-4">Antal:</p>
                  
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      className="h-8 w-8 rounded-full border border-pink-950 text-pink-950 hover:bg-yellow-100 transition flex items-center justify-center cursor-pointer"
                      onClick={() => decreaseQuantity(item.idDrink)}
                    >
                      -
                    </button>
  
                    <span className="text-pink-950 font-semibold">{item.quantity}</span>
  
                    <button
                      className="h-8 w-8 rounded-full border border-pink-950 text-pink-950 hover:bg-yellow-100 transition flex items-center justify-center cursor-pointer"       
                      onClick={() => increaseQuantity(item.idDrink)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="ml-auto mr-4 mt-18">
                  <SecondaryButton
                  onClick={() => removeFromCart(item.idDrink)}
                  >
                    <Trash2 size={18} />
                    Fjern fra kurv
                  </SecondaryButton> 
                </div>
                             
        </article>
    );
}
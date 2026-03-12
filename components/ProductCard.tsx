"use client";

import { useCart } from "@/context/CartContext";

type Drink = {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
    strInstructions: string;
  };
  
  type ProductCardProps = {
    drink: Drink;
  };
  
  export default function ProductCard({ drink }: ProductCardProps) {
    const { addToCart } = useCart();

    return (
      <article className="bg-white rounded-xl shadow-md overflow-hidden p-4">
        <img
          src={drink.strDrinkThumb}
          alt={drink.strDrink}
          className="w-full h-60 object-cover rounded-lg mb-4"
        />
  
        <h2 className="text-xl font-semibold mb-3">{drink.strDrink}</h2>
  
        <p className="text-sm text-gray-600 mb-6 line-clamp-3">
          {drink.strInstructions}
        </p>
  
        <div className="text-end">
          <button 
          onClick={()=>
            addToCart({
              idDrink: drink.idDrink,
              strDrink: drink.strDrink,
              strDrinkThumb: drink.strDrinkThumb,
            })
          }
          className="bg-pink-950 text-yellow-100 px-4 py-2 rounded-xl hover:opacity-90">
            Tilføj til kurv
          </button>
        </div>
      </article>
    );
  }
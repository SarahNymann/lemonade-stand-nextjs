"use client";

import { useEffect, useState } from "react";
import ProductList from "../../components/ProductList";

type Drink = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
};

export default function Shop() {
  const [drinks, setDrinks] = useState<Drink[]>([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=lemon")
      .then((res) => res.json())
      .then((data) => {
        setDrinks(data.drinks);
      });
  }, []);

  return (
    <main className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Shop</h1>
      <ProductList drinks={drinks} />
    </main>
  );
}
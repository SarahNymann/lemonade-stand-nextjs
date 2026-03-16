import ProductCard from "./ProductCard";

type Drink = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
};

type ProductListProps = {
  drinks: Drink[];
};

export default function ProductList({ drinks }: ProductListProps) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-0">
      {drinks.map((drink) => (
        <ProductCard key={drink.idDrink} drink={drink} />
      ))}
    </section>
  );
}
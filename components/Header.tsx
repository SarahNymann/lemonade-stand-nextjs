"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, ShoppingCart, Menu, X } from "lucide-react";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-pink-950">
      <nav className="max-w-6xl mx-auto px-6 sm:px-8 h-24 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold text-yellow-100"
          onClick={() => setIsOpen(false)}
        >
         
          <Image
                src="/lemon-logoV3.png"
                alt="Lemonade stand logo"
                width={180}
                height={80}
                className="object-contain"
            />

        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-yellow-100 hover:text-yellow-200 transition"
          >
            <ShoppingBag size={18} />
            Shop
          </Link>

          <Link
            href="/cart"
            className="relative inline-flex items-center gap-2 text-yellow-100 hover:text-yellow-200 transition"
          >
            <ShoppingCart size={18} />
            Kurv
            {totalItems > 0 && (
              <span className="absolute -top-3 -right-5 bg-yellow-200 text-pink-950 text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
              {totalItems}
            </span>
            )}
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-yellow-100 cursor-pointer"
          aria-label={isOpen ? "Luk menu" : "Åbn menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden px-6 pb-6">
          <div className="bg-white rounded-3xl shadow-md p-4 flex flex-col gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center justify-end gap-2 text-pink-950 hover:opacity-80 transition"
              onClick={() => setIsOpen(false)}
            >
              <ShoppingBag size={18} />
              Shop
            </Link>

            <Link
              href="/cart"
              className="inline-flex items-center justify-end gap-2 text-pink-950 hover:opacity-80 transition"
              onClick={() => setIsOpen(false)}
            >
              <ShoppingCart size={18} />
              Kurv
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
"use client";

import { useState } from "react";

export default function ProfitCounter() {
    const [profit, setProfit] = useState(0);

    function sellLemonade() {
        setProfit((prev) => prev + 25);
    }

    function buyLemonade() {
        setProfit((prev) => prev - 10);
    } 

    return (
        <section className="flex flex-col items-center p-6">

            <h2 className="text-xl font-semibold">Profit: {profit} DKK</h2>

            <div className="flex gap-3 mt-6">
            <button
                onClick={buyLemonade}
                className="border-2 border-pink-950 text-pink-950 px-4 py-2 rounded-full"
                >
                    Køb Citron -10 DKK
                </button>

                <button
                    onClick={sellLemonade}
                    className="bg-pink-950 text-yellow-100 px-4 py-2 rounded-full hover:opacity-90"
                >
                    Sælg lemonade +25 DKK
                </button>
            </div>
        </section>
    );
}
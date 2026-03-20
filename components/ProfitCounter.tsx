"use client";

import { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

export default function ProfitCounter() {
    const [profit, setProfit] = useState(0);

    function sellLemonade() {
        setProfit((prev) => prev + 25);
    }

    function buyLemonade() {
        setProfit((prev) => prev - 10);
    } 

    return (
        <section className="flex flex-col items-center p-10 sm:p-4 mt-2">

            <h2 className="text-xl font-semibold text-center">
                Profit: {profit} DKK
            </h2>

                <div className="flex flex-col sm:flex-row gap-3 mt-6 w-full justify-center">

                    <SecondaryButton onClick={buyLemonade} >
                        Køb citron -10 DKK
                    </SecondaryButton>

                    <PrimaryButton onClick={sellLemonade} >
                        Sælg lemonade +25 DKK
                    </PrimaryButton>
                    
                </div>
        </section>
    );
}
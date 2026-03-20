import ProfitCounter from "@/components/ProfitCounter";
import Image from "next/image";


export default function Home() {
  return (
    <main className="relative h-[calc(100vh-80px)] overflow-hidden">
      {/* Baggrundsbillede */}
      <div className="absolute inset-0">
          <Image
            src="/citrusv2.jpg"
            alt="Citrus fruits"
            fill
            priority
            className="object-cover brightness-65"
          />

        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Indhold ovenpå */}
      <section className="relative z-10 flex h-full items-center justify-center">
        <div className="w-full max-w-6xl mx-auto px-8">
          
          <div className="w-full rounded-3xl bg-gradient-to-br from-yellow-200 to-yellow-50 p-8 shadow-2xl backdrop-blur-sm md:p-10">
            
            <div className="mt-10 mb-8">
              <h1 className="text-4xl md:text-5xl leading-tight text-pink-950 text-center mb-6">
                Velkommen til <br />
                Lemonade Stand
              </h1>

              <p className="text-lg leading-relaxed text-gray-700 text-center mb-16">
                Byg din egen lemonade-stand, sælg drinks og tjen profit.
                Hvor meget kan du tjene?
              </p>


              <div className="flex justify-center">
                <div className="w-full max-w-lg rounded-2xl bg-white shadow-lg">
                  <ProfitCounter />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
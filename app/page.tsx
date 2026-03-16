import ProfitCounter from "@/components/ProfitCounter";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-yellow-100">
      <ProfitCounter/>
    </main>
  );
}

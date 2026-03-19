import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-pink-950 h-20">
            <nav className="max-w-6xl mx-auto h-full px-8 flex justify-between items-center">

                    <Link href="/" className="text-xl font-bold text-yellow-100">
                    🍋 Lemonade Stand
                    </Link>

                <div className="flex gap-6">
                    <Link href="/" className="text-yellow-100 hover:text-yellow-200">
                    Forside
                    </Link>

                    <Link href="/shop" className="text-yellow-100 hover:text-yellow-200">
                    Shop
                    </Link>

                    <Link href="/cart" className="text-yellow-100 hover:text-yellow-200">
                    Kurv
                    </Link>                    
                </div>
               
            </nav>
        </header>
    );
}
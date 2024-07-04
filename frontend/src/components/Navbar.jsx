import {Bars3Icon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon} from "@heroicons/react/24/outline";

export default function Navbar() {
    return (
        <header className="py-8 md:py-4">
                <nav className="flex justify-between items-center w-3/4 mx-auto">
                    <div className="flex items-center gap-2">
                        <img className="w-12 h-auto" src="/logo.png" alt="GreenLeaf logo" />
                        <h1 className="text-xl font-bold text-[#475F45]">GreenLeaf</h1>
                    </div>

                    <ul className="hidden md:block">
                        <li className="inline-block mx-3 text-md text-[#6F836E] font-medium">Home</li>
                        <li className="inline-block mx-3 text-md text-[#9FA39F] font-medium">Services</li>
                        <li className="inline-block mx-3 text-md text-[#9FA39F] font-medium">Plants</li>
                        <li className="inline-block mx-3 text-md text-[#9FA39F] font-medium">Checkout</li>
                    </ul>

                    <div className="hidden md:flex gap-10 items-center">   
                           <UserIcon className="size-5 text-[#475F45]"/>
                           <MagnifyingGlassIcon className="size-5 text-[#475F45]"/>
                           <ShoppingCartIcon className="size-5 text-[#475F45]"/>
                    </div>

                    <Bars3Icon className="block md:hidden size-8 text-[#475F45]"/>
                </nav>
        </header>
    )
}
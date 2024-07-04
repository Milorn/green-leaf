"use client";

import {Bars3Icon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <header className="py-8 md:py-4">
                <nav className="flex flex-col md:flex-row justify-between items:start md:items-center w-3/4 mx-auto">
                    <div className="flex items-center gap-2 mb-3 md:mb-0">
                        <img className="w-12 h-auto" src="/logo.png" alt="GreenLeaf logo" />
                        <h1 className="text-xl font-bold text-[#475F45] ">GreenLeaf</h1>
                        <Bars3Icon className="block ml-20 md:hidden size-8 text-[#475F45] hover:cursor-pointer" onClick={() => setShowMenu(!showMenu)}/>
                    </div>

                    

                    <ul className={`${showMenu ? 'block' : 'hidden'} md:block shadow-sm md:shadow-none`}>
                        <li className="block md:inline-block mx-3 text-md text-[#6F836E] font-medium">Home</li>
                        <li className="block md:inline-block mx-3 text-md text-[#9FA39F] font-medium"><Link href="/shop">Plants</Link></li>
                        <li className="block md:inline-block mx-3 text-md text-[#9FA39F] font-medium"><Link href="/shop/create">Add Plant</Link></li>
                        <li className="block md:inline-block mx-3 text-md text-[#9FA39F] font-medium">Checkout</li>
                    </ul>

                    <div className="hidden md:flex gap-10 items-center">   
                           <UserIcon className="size-5 text-[#475F45]"/>
                           <MagnifyingGlassIcon className="size-5 text-[#475F45]"/>
                           <ShoppingCartIcon className="size-5 text-[#475F45]"/>
                    </div>

                    
                </nav>
        </header>
    )
}
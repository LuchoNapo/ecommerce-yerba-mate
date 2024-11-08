/* eslint-disable @next/next/no-img-element */
"use client"
import { BaggageClaim, Heart, ShoppingCart} from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./MenuList";
import ItemsMenuMobile from "./ItemsMenuMobile";
import ToggleTheme from "./ToggleTheme"
import { useCart } from "@/hooks/useCart";
import { useLovedItem } from "@/hooks/useLovedProducts";

const Navbar = () => {
    const router = useRouter();
    const cart = useCart();
    const { lovedItems } = useLovedItem();

    return (
        <div className="flex items-end justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl md:px-10">
            <div className="flex py-2 flex-col gap-1 items-center select-none" onClick={() => router.push("/")}>
                <img src="/logo-mate.svg" alt="logo" width={25} height={25} />
                <h1 className="text-3xl font-castor">
                    Mateina
                </h1>
            </div>

            <div className="items-center hidden justify-between md:flex">
                <MenuList />
            </div>
            <div className="flex md:hidden">
                <ItemsMenuMobile />
            </div>
            <div className="flex items-center justify-between gap-2 sm:gap-7">
                {cart.items.length === 0 ? (
                    <ShoppingCart strokeWidth="1" className="cursor-pointer" onClick={() => router.push("/cart")} />
                ) : (
                    <div className="flex gap-1" onClick={() => router.push("/cart")}>
                        <BaggageClaim strokeWidth="1" className="cursor-pointer" />
                        <span className="text-sm">{cart.items.length}</span>
                    </div>
                )}

                <Heart strokeWidth="1" className={`cursor-pointer ${lovedItems.length > 0 && 'fill-black dark:fill-white'}`} onClick={() => router.push("/loved-products")} />
                <ToggleTheme />
            </div>
        </div>
    );
}

export default Navbar;
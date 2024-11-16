import { useState } from "react";
import Link from "next/link";

const ItemsMenuMobile = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleToggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className="flex justify-center items-center py-2 font-semibold gap-2 w-full shadow-bottom dark:shadow-bottom-dark">
            {/* Productos con dropdown */}
            <div className="relative">
                <button
                    onClick={handleToggleDropdown}
                    className=" pl-2 pr-4 py-2 bg-white dark:bg-neutral-800 text-black dark:text-white rounded-md"
                >
                    Productos
                </button>
                {showDropdown && (
                    <div className="absolute left-0 mt-1 z-10 bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 shadow-lg rounded-md w-32">
                        <Link href="/yerba-mate" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-neutral-700">
                            Yerba Mate
                        </Link>
                        <Link href="/bombillas" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-neutral-700">
                            Bombillas
                        </Link>
                        <Link href="/mates" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-neutral-700">
                            Mates
                        </Link>
                        <Link href="/termos" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-neutral-700">
                            Termos
                        </Link>
                    </div>
                )}
            </div>

            <Link href="/offers" className="block border-l border-gray-300 dark:border-neutral-700 pl-2">
                Ofertas
            </Link>
            <Link href="/loved-products" className="block border-l border-gray-300 dark:border-neutral-700 pl-2">
                Favoritos
            </Link>
            <Link href="/about" className="block border-l border-gray-300 dark:border-neutral-700 pl-2">
                Sobre nosotros
            </Link>
        </div>
    );
};

export default ItemsMenuMobile;

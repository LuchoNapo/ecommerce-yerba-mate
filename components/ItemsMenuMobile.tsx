import Link from "next/link";

const ItemsMenuMobile = () => {
    return (
        <div className="flex justify-center items-center py-2 font-semibold  gap-2 w-full shadow-bottom dark:shadow-bottom-dark">
            <Link href="/#chooseCategory" className="block">Productos</Link>
            <Link href="/offers" className="block border-l border-gray-300 dark:border-neutral-700 pl-2">Ofertas</Link>
            <Link href="/loved-products" className="block border-l border-gray-300 dark:border-neutral-700 pl-2">Favoritos</Link>
            <Link href="/about" className="block border-l border-gray-300 dark:border-neutral-700 pl-2">Sobre nosotros</Link>
        </div>
    );
}

export default ItemsMenuMobile;

import { ProductType } from "@/types/product";

interface BadgeProps {
    product: ProductType,
    class: string
}

const Badge = (props: BadgeProps) => {
    const { product, class: className } = props;
    return (
    <div className={`${className} flex items-center gap-2 sm:text-md`}>
        {product.taste === "saborizado" && <p className="px-2 py-1 capitalize text-white bg-orange-700 rounded-full">{product.taste}</p>}
        {product.taste === "tradicional" && <p className="px-2 py-1 capitalize text-white bg-yellow-900 rounded-full">{product.taste}</p>}
        {product.taste === "suave" && <p className="px-2 py-1 capitalize text-white bg-lime-900 rounded-full">{product.taste}</p>}
        {product.typeWeed === "Con Palo" && <p className="px-2 py-1 capitalize text-white bg-amber-900 rounded-full">{product.typeWeed}</p>}
        {product.typeWeed === "Sin Palo" && <p className="px-2 py-1 capitalize text-white bg-lime-900 rounded-full">{product.typeWeed}</p>}
    </div>);
}

export default Badge;
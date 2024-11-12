import { ProductType } from "@/types/product";

interface BadgeProps {
    product: ProductType,
    class: string
}

const Badge = (props: BadgeProps) => {
    const { product, class: className } = props;
    return (
    <div className={`${className} flex items-center gap-2 sm:text-md`}>
        <p className="px-2 py-1  text-white bg-black rounded-full dark:text-black dark:bg-white w-fit capitalize">{product.taste}</p>
        <p className="px-2 py-1  text-white bg-lime-900 rounded-full">{product.origin}</p>
    </div>);
}

export default Badge;
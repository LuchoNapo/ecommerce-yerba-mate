/* eslint-disable @next/next/no-img-element */
import Badge from "@/components/Badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { useLovedItem } from "@/hooks/useLovedProducts";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/product";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface LovedItemsProductsProps {
    product: ProductType
}

const LovedItemsProducts = (porps: LovedItemsProductsProps) => {
    const { product } = porps;
    const router = useRouter();
    const { removeLovedItem } = useLovedItem();
    const { addItem } = useCart();

    const addToCheckOut = () => {
        addItem(product)
        removeLovedItem(product.id)
    }
    return (

        <li className="flex py-6 border-b">
            <div onClick={() => router.push(`/product/${product.slug}`)} className="cursor-pointer">
                <img
                    className="size-24 overflow-hidden rounded-lg sm:w-auto sm:h-32 object-contain sm:max-w-[200px] sm:min-w-[200px]"
                    src={`${product.images[0].url}`}
                    alt={product.productName}
                />
            </div>
            <div className="flex justify-between flex-1 px-6">
                <div>
                    <h2 className="text-lg font-bold">{product.productName}</h2>
                    <p className="font-bold">{formatPrice(product.price)}</p>
                    <Badge product={product} class="justify-start text-xs" />
                    <Button
                        onClick={addToCheckOut}
                        className="mt-5 rounded-full">Añadir al carrito
                    </Button>
                </div>
                <div>
                    <button
                        className={cn("rounded-full flex items-center justify-center hover:scale-110 transition cursor-pointer")}>
                        <X size={16} onClick={() => removeLovedItem(product.id)} />
                    </button>
                </div>


            </div>
        </li>
    );
}

export default LovedItemsProducts;
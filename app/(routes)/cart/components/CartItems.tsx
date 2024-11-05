/* eslint-disable @next/next/no-img-element */
import Badge from "@/components/Badge";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/product";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface CartItemsProps {
    product: ProductType
}

const CartItems = (props: CartItemsProps) => {
    const { product } = props;
    const router = useRouter();
    const { removeItem } = useCart();

    return (
        <li className="flex py-6 border-b">
            <div onClick={() => router.push(`/product/${product.slug}`)} className="cursor-pointer">
                <img
                    className="size-24 overflow-hidden rounded-lg sm:w-auto sm:h-32 object-contain"
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`}
                    alt={product.productName}
                />
            </div>
            <div className="flex justify-between flex-1 px-6">
                <div>
                    <h2 className="text-lg font-bold">{product.productName}</h2>
                    <p className="font-bold">{formatPrice(product.price)}</p>
                    <Badge product={product} class="justify-start text-xs" />
                </div>
                <div>
                    <button className={cn("rounded-full flex items-center justify-center hover:scale-110 transition cursor-pointer")}>
                        <X size={16} onClick={() => removeItem(product.id)} />
                    </button>
                </div>

            </div>
        </li>
    );
}

export default CartItems;
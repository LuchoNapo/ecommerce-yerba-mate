/* eslint-disable @next/next/no-img-element */
import Badge from "@/components/Badge";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/product";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface CartItemsProps {
    product: ProductType;
}

const CartItems = (props: CartItemsProps) => {
    const { product } = props;
    const router = useRouter();
    const { removeItem, updateQuantity } = useCart();

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
                    <div className="mt-2 flex items-center space-x-3">
                        <button
                            className="px-2 py-1 text-sm bg-gray-200 dark:bg-stone-800 rounded hover:bg-gray-300 dark:hover:bg-stone-900"
                            onClick={() => {
                                if (product.quantity > 1) {
                                    updateQuantity(product.id, product.quantity - 1);
                                } else {
                                    removeItem(product.id);
                                }
                            }}
                        >
                            -
                        </button>
                        <p className="text-sm font-semibold">{product.quantity}</p>
                        <button
                            className="px-2 py-1 text-sm bg-gray-200 dark:bg-stone-800 rounded hover:bg-gray-300 dark:hover:bg-stone-900"
                            onClick={() => updateQuantity(product.id, product.quantity + 1)}
                        >
                            +
                        </button>
                    </div>

                </div>
                <div>
                    <button className={cn("rounded-full flex items-center justify-center hover:scale-110 transition cursor-pointer")}>
                        <X size={16} onClick={() => removeItem(product.id)} />
                    </button>
                </div>
            </div>
        </li>
    );
};

export default CartItems;

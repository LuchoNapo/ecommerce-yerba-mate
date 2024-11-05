import Badge from "@/components/Badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/useCart";
import { useLovedItem } from "@/hooks/useLovedProducts";
import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/product";
import { Heart } from "lucide-react";

export type InfoProductProps = {
    product: ProductType
}
const InfoProduct = (props: InfoProductProps) => {
    const { addItem } = useCart()
    const { addLovedItem} = useLovedItem()
    const { product } = props;


    return (
        <div className="w-full px-5 sm:w-3/5 text-balance">
            <div className="justify-center items-center mx-5 mb-3 flex gap-5 md:flex-row flex-col">
                <h1 className="text-2xl">{product.productName}</h1>
                <Badge product={product} class="justify-start text-xs" />

            </div>
            <Separator className="my-4" />
            <p>{product.description}</p>
            <Separator className="my-4" />
            <p className="my-4 text-2xl text-center">{formatPrice(product.price)}</p>
            <div className="flex items-center gap-5">
                <Button className="w-full" onClick={() => addItem(product)}>Comprar</Button>

                <Heart width={30} strokeWidth={1}
                    className={`transition duration-300 cursor-pointer hover:fill-black dark:hover:fill-white`}
                    onClick={() => addLovedItem(product)}
                />

            </div>

        </div>
    );
}

export default InfoProduct;
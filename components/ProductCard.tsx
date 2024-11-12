/* eslint-disable @next/next/no-img-element */
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/product";

import IconButton from "@/components/IconButton";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useCart } from "@/hooks/useCart";
import Badge from "@/components/Badge";
import { Separator } from "./ui/separator";

type ProductCardProps = {
    product: ProductType
}

const ProductCard = (props: ProductCardProps) => {
    const { product } = props;
    const router = useRouter()
    const { addItem } = useCart()


    return (
        <Link
            href={`/product/${product.slug}`}
            className="relative p-1.5 transition-all duration-100 rounded-sm border dark:bg-[#0D0B0A] bg-stone-50 h-[350px]">
            <Carousel
                opts={
                    {
                        align: "start"
                    }
                }
                className="w-full h-[190px] max-w-sm bg-stone-200 dark:bg-stone-900 rounded-sm"
            >
                <CarouselContent className="h-full">
                    {
                        product.images.map((image) => {
                            return (
                                <CarouselItem key={image.id} className="group flex flex-col justify-center items-center">
                                    <img
                                        src={`${image.url}`}
                                        alt={product.productName}
                                        className="rounded-xl h-[185px] object-contain"
                                    />
                                    <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                                        <div className="flex justify-center gap-x-6">
                                            <IconButton
                                                onClick={() => router.push(`/product/${product.slug}`)}
                                                icon={<Expand size={20} />}
                                                className="text-gray-600"
                                            />
                                            <IconButton
                                                onClick={() => addItem(product)}
                                                icon={<ShoppingCart size={20} />}
                                                className="text-gray-600"
                                            />
                                        </div>
                                    </div>
                                </CarouselItem>
                            )
                        })
                    }
                </CarouselContent>
            </Carousel>
        
            <div className="flex flex-col gap-1.5 h-1/5 p-0">
                <p className="font-bold text-center mt-2 text-lg">{formatPrice(product.price)}</p>
                <Badge product={product} class={"justify-center sm:text-sm text-[12px] pb-1"} />
                <p className="md:text-xl text-lg text-center">{product.productName}</p>
            </div>
        </Link>
    );
}

export default ProductCard;
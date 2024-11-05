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
            className="relative p-2 transition-all duration-100 rounded-lg hover:shadow-md">
            <Carousel
                opts={
                    {
                        align: "start"
                    }
                }
                className="w-full h-[350px] max-w-sm"
            >
                <CarouselContent className="h-full">
                    {
                        product.images.map((image) => {
                            return (
                                <CarouselItem key={image.id} className="group flex flex-col justify-center items-center">
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
                                        alt={product.productName}
                                        className="rounded-xl h-[320px] object-contain"
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
            <div className="flex flex-col gap-2 h-1/5">
                <Badge product={product} class={"justify-center"} />
                <p className="md:text-2xl text-lg text-center">{product.productName}</p>
                <p className="font-bold text-center">{formatPrice(product.price)}</p>
            </div>
        </Link>
    );
}

export default ProductCard;
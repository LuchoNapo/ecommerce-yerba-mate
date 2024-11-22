/* eslint-disable @next/next/no-img-element */
"use client"

import { useState, useEffect } from "react";
import { ResponseType } from "@/types/response";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import SkeletonSchema from "./SkeletonSchema";
import { ProductType } from "@/types/product";
import { Card, CardContent } from "./ui/card";
import { Expand, ShoppingCart } from "lucide-react";
import IconButton from "./IconButton";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/useCart";
import Badge from "./Badge";
import { useApi } from "@/api/useApi";

const FeaturedProducts = () => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[isFeatured][$eq]=true&populate=*`
    const { loading, result }: ResponseType = useApi({urlApi: url});
    const router = useRouter()
    const { addItem } = useCart()
    const [grid, setGrid] = useState(0)
    useEffect(() => {
      const updateGrid = () => {
        setGrid(window.innerWidth < 768 ? 1 : 3);
      };
      updateGrid();
     
    }, [])
    
    return (
        <div className="max-w-6xl py-10 mx-auto sm:py-16 sm:pb-28 sm:px-14">
            <h3 className="px-6 text-2xl sm:text-3xl pb-4">Productos destacados</h3>
            <Carousel
                opts={{
                    loop: true,
                }}
            >
                <CarouselContent className="select-none mx-4">
                    {loading && <SkeletonSchema grid={grid} class="" />}
                    {result != null && (
                        result.map((product: ProductType) => {
                            return (
                                <CarouselItem key={product.id} className="basis-3/4 md:basis-1/2 lg:basis-1/3 group">
                                    <Card className="border bg-gray-100 dark:bg-[#0D0B0A] dark:border-stone-900 border-gray-200 shadow-none">
                                        <CardContent className="relative flex items-center justify-center py-2">
                                            <img
                                                className="size-[200px] object-contain select-none drop-shadow-lg"
                                                src={`${product.images[0].url}`}
                                                alt={product.productName}
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
                                        </CardContent>
                                        <div className="flex flex-col justify-between gap-2  px-8 text-center">
                                            <h3 title={product.productName} className="text-lg font-bold truncate text-black dark:text-white" >{product.productName}</h3>
                                            <Badge product={product} class="text-sm justify-center mb-2" />
                                        </div>
                                    </Card>
                                </CarouselItem>
                            )
                        })
                    )}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext className="hidden sm:flex" />
            </Carousel>
        </div>
    );
}

export default FeaturedProducts;

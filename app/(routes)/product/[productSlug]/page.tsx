"use client"

import { useGetProductBySlug } from "@/api/getProductBySlug"
import { ResponseType } from "@/types/response"
import { useParams } from "next/navigation"
import SkeletonProduct from "./components/SkeletonProduct"
import CarouselProduct from "./components/CarouselProduct"
import InfoProduct from "./components/InfoProduct"


export default function Page() {
    const params = useParams()
    const { productSlug } = params
    const { result }: ResponseType = useGetProductBySlug(productSlug);

    if (result === null) {
        return <SkeletonProduct />
    }
    return (
        <div className="max-w-6xl py-4 mx-auto lg:py-32 lg:px-24 w-full">
            <div className="flex justify-center items-center lg:flex-row flex-col">
                <CarouselProduct images={result[0].images}  />
                <InfoProduct product={result[0]} />
            </div>
        </div>
    )
}
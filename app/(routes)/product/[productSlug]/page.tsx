"use client"
import { ResponseType } from "@/types/response"
import { useParams } from "next/navigation"
import SkeletonProduct from "./components/SkeletonProduct"
import CarouselProduct from "./components/CarouselProduct"
import InfoProduct from "./components/InfoProduct"
import { useApi } from "@/api/useApi"


export default function Page() {
    const params = useParams()
    const { productSlug } = params
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[slug][$eq]=${productSlug}&populate=*`;
    const { result }: ResponseType = useApi({urlApi: url});

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
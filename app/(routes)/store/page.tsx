"use client"

import { Separator } from "@/components/ui/separator"
import { useRouter } from "next/navigation"
import FiltersControlsCategory from "../category/[categorySlug]/components/filtersControlsCategory"
import SkeletonSchema from "@/components/SkeletonSchema"
import { useEffect, useState } from "react"
import { ProductType } from "@/types/product"
import { useGetAllProducts } from "@/api/getAllProducts"
import ProductCard from "@/components/ProductCard"
import { ResponseType } from "@/types/response"

export default function Store() {
    const { result, loading }: ResponseType = useGetAllProducts()
    const [filterOrigin, setFilterOrigin] = useState("");

    const filteredProduct = result != null && !loading && (
        filterOrigin === ''
            ? result
            : result.filter((product: ProductType) =>
                product.origin === filterOrigin)
    )

    const [grid, setGrid] = useState(0)
    useEffect(() => {
        const updateGrid = () => {
            setGrid(window.innerWidth < 768 ? 2 : 7);
        };
        updateGrid();

    }, [])

    const route = useRouter()
    return (
        <div className="max-w-6xl py-10 mx-auto sm:py-16 sm:pb-28 sm:px-14">
            <h3 className="px-6 text-2xl sm:text-3xl pb-4 font-castor">Todas las yerbas</h3>
            <Separator />
            <div className="flex items-center justify-center gap-10 md:gap-x-44 font-castor mt-5">
                <div
                    onClick={() => route.push("/category/con-palo")}
                    className="text-white relative text-2xl before:block before:absolute before:-inset-1 before:-skew-y-3 before:z-[-1] before:bg-lime-900 cursor-pointer hover:scale-110 transition-transform">
                    Con Palo
                </div>
                <div
                    onClick={() => route.push("/category/sin-palo")}
                    className="text-white relative text-2xl before:block before:absolute before:-inset-1 before:-skew-y-3 before:z-[-1] before:bg-yellow-900 cursor-pointer hover:scale-110 transition-transform">
                    Sin Palo
                </div>
            </div>
            <div className="sm:flex sm:justify-between">
                <FiltersControlsCategory setFilterOrigin={setFilterOrigin} />
                <div className="grid mt-8 lg:grid-cols-3 grid-cols-2 w-full gap-3 px-2">
                    {loading && (
                        <>
                            <SkeletonSchema grid={grid} />
                        </>
                    )}
                    {filteredProduct !== null && !loading && (
                        filteredProduct.map((product: ProductType) => (
                            <ProductCard key={product.id} product={product} />
                        ))

                    )}
                    {filteredProduct !== null && !loading && filteredProduct.length == 0 && (
                        <p>No hay productos para mostrar</p>
                    )}
                </div>
            </div>
        </div>
    )
}
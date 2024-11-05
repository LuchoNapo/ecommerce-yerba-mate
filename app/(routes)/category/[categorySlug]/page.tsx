"use client"
import { Separator } from "@/components/ui/separator";
import ProductCard from "./components/productCard";
import FiltersControlsCategory from "./components/filtersControlsCategory";
import SkeletonSchema from "@/components/SkeletonSchema";

import { useGetCategoryProduct } from "@/api/getCategoryProduct"
import { useParams } from "next/navigation";

import { ResponseType } from "@/types/response";
import { ProductType } from "@/types/product";
import { useState } from "react";


export default function Page() {
    const params = useParams()
    const { categorySlug } = params
    const { result, loading }: ResponseType = useGetCategoryProduct(categorySlug)
    const [filterOrigin, setFilterOrigin] = useState("");


    const filteredProduct = result != null && !loading && (
        filterOrigin === ''
            ? result
            : result.filter((product: ProductType) =>
                product.origin === filterOrigin)
    )

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-14">
            {result !== null && !loading && (
                <h1 className="text-3xl font-medium">Yerba Mate {result[0].category.categoryName}</h1>
            )}
            <Separator />
            <div className="sm:flex sm:justify-between">
                <FiltersControlsCategory setFilterOrigin={setFilterOrigin} />
                <div className="grid mt-8 xl:grid-cols-3 lg:grid-cols-3 grid-cols-2 w-full gap-5">
                    {loading && (
                        <SkeletonSchema grid={2} />
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
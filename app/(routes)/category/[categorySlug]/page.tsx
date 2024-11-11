"use client"
import { Separator } from "@/components/ui/separator";

import FiltersControlsCategory from "./components/filtersControlsCategory";
import SkeletonSchema from "@/components/SkeletonSchema";

import { useGetCategoryProduct } from "@/api/getCategoryProduct"
import { useParams } from "next/navigation";

import { ResponseType } from "@/types/response";
import { ProductType } from "@/types/product";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import FilterMenu from "@/components/FilterMenu";

export default function Page() {
    const params = useParams()
    const { categorySlug } = params
    const { result, loading }: ResponseType = useGetCategoryProduct(categorySlug)
    const [filterOrigin, setFilterOrigin] = useState("");
    const [isMobile, setIsMobile] = useState(false);
    const [filterExpand, setFilterExpand] = useState(false);

    const filteredProduct = result != null && !loading && (
        filterOrigin === ''
            ? result
            : result.filter((product: ProductType) =>
                product.origin === filterOrigin)
    )
    useEffect(() => {
        setIsMobile(window.innerWidth < 768 ? true : false);
    }, [])

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-14">
            {result !== null && !loading ? (
                <h1 className="text-3xl font-medium px-3">Yerba Mate {result[0].category.categoryName}</h1>
            ) : (
                ""
            )}
            <Separator />
            <div
                className={`fixed inset-0 z-10 bg-black/80 transition-opacity duration-500 ease-in-out ${filterExpand ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={() => setFilterExpand(false)}
            ></div>
            <div className="sm:flex">
                {isMobile && result !== null ? (
                    <FilterMenu
                        isOpen={filterExpand}
                        setFilterExpand={setFilterExpand}
                        setFilterOrigin={setFilterOrigin}
                        filteredProduct={filteredProduct}>
                        <h3 className="font-castor text-xl tracking-wider">
                            {result[0].category.categoryName}
                        </h3>
                    </FilterMenu>
                ) : (
                    <FiltersControlsCategory setFilterOrigin={setFilterOrigin} setFilterExpand={setFilterExpand} filteredProduct={filteredProduct} />
                )}
                <div className="grid mt-8 xl:grid-cols-3 lg:grid-cols-3 grid-cols-2 w-full gap-5 sm:px-0 px-5">
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
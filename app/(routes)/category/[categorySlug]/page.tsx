"use client"
import { Separator } from "@/components/ui/separator";

import FiltersControlsCategory from "./components/filtersControlsCategory";
import SkeletonSchema from "@/components/SkeletonSchema";

import { useGetCategoryProduct } from "@/api/getCategoryProduct"
import { useParams } from "next/navigation";

import { ResponseType } from "@/types/response";
import { ProductType } from "@/types/product";
import { useState } from "react";

import ProductCard from "@/components/ProductCard";
import FilterMenu from "@/components/FilterMenu";
import useIsMobile from "@/hooks/useIsMobile";
import { Skeleton } from "@/components/ui/skeleton";

export default function Page() {
    const params = useParams()
    const { categorySlug } = params
    const { result, loading }: ResponseType = useGetCategoryProduct(categorySlug)
    const [filterOrigin, setFilterOrigin] = useState("");
    const [filterTaste, setFilterTaste] = useState("");
    const [filterExpand, setFilterExpand] = useState(false);
    const isMobile = useIsMobile();

    const filteredProduct = result && !loading && (
        result.filter((product: ProductType) => {
            const matchesOrigin = filterOrigin === "" || product.origin === filterOrigin;
            const matchesTaste = filterTaste === "" || product.taste === filterTaste;
            return matchesOrigin && matchesTaste;
        })
    );

    const handleClearFilters = () => {
        setFilterOrigin("");
        setFilterTaste("");
        setFilterExpand(false);
        setFilterTaste("");
    };

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-14">
            {result !== null && !loading ? (
                <h1 className="text-3xl font-medium px-3">Yerba Mate {result[0].category.categoryName}</h1>
            ) : (
                <Skeleton className="h-10 w-3/4 sm:w-1/4 mb-2" />
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
                    setFilterTaste={setFilterTaste}
                    filterTaste={filterTaste}
                    filterOrigin={filterOrigin}
                    filteredProduct={filteredProduct}>
                        <h3 className="font-castor text-xl tracking-wider">
                            {result[0].category.categoryName}
                        </h3>
                    </FilterMenu>
                ) : (
                    <div className="flex flex-col pl-5 gap-2 items-start">
                        <FiltersControlsCategory setFilterOrigin={setFilterOrigin} setFilterTaste={setFilterTaste} filterOrigin={filterOrigin} filterTaste={filterTaste} />
                        <div onClick={handleClearFilters} className="text-sm cursor-pointer">
                            Limpiar Filtros
                        </div>
                    </div>
                    
                )}
                <div className="grid mt-8 xl:grid-cols-3 lg:grid-cols-3 grid-cols-2 w-full gap-2 sm:px-0 px-5">
                    {loading && (
                        <SkeletonSchema grid={isMobile ? 2 : 9} class="w-[160px]" />
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
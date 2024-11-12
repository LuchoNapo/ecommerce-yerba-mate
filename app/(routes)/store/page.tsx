"use client"

import { Separator } from "@/components/ui/separator"
import FiltersControlsCategory from "../category/[categorySlug]/components/filtersControlsCategory"
import SkeletonSchema from "@/components/SkeletonSchema"
import { useState } from "react"
import { ProductType } from "@/types/product"
import { useGetAllProducts } from "@/api/getAllProducts"
import ProductCard from "@/components/ProductCard"
import { ResponseType } from "@/types/response"
import FilterMenu from "@/components/FilterMenu"
import CategorySelect from "./components/CategorySelect"
import useIsMobile from "@/hooks/useIsMobile"

export default function Store() {
    const { result, loading }: ResponseType = useGetAllProducts()
    const [filterOrigin, setFilterOrigin] = useState("");
    const [filterTaste, setFilterTaste] = useState("");
    const [filterExpand, setFilterExpand] = useState(false);
    const isMobile = useIsMobile()

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
        <div className="max-w-6xl py-10 mx-auto sm:py-16 sm:pb-28 sm:px-14">
            <h3 className="px-6 text-2xl sm:text-3xl pb-4 font-castor">Todas las yerbas</h3>
            <Separator />
            <div
                className={`fixed inset-0 z-10 bg-black/80 transition-opacity duration-500 ease-in-out ${filterExpand ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={() => setFilterExpand(false)}
            ></div>
            <div className="sm:flex sm:justify-between">
                {isMobile ? (
                    <FilterMenu
                        isOpen={filterExpand}
                        setFilterExpand={setFilterExpand}
                        setFilterOrigin={setFilterOrigin}
                        setFilterTaste={setFilterTaste}
                        filterTaste={filterTaste}
                        filterOrigin={filterOrigin}
                        filteredProduct={filteredProduct}>
                        <CategorySelect />
                    </FilterMenu>
                ) : (
                    <div className="flex flex-col pl-5 gap-2 items-start">
                        <CategorySelect />
                        <FiltersControlsCategory setFilterOrigin={setFilterOrigin} setFilterTaste={setFilterTaste} filterOrigin={filterOrigin} filterTaste={filterTaste} />
                        <div onClick={handleClearFilters} className="text-sm cursor-pointer">
                            Limpiar Filtros
                        </div>
                    </div>
                )}
                <div className="grid py-5 lg:grid-cols-3 grid-cols-2 w-full gap-3 px-2">
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
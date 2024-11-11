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
import FilterMenu from "@/components/FilterMenu"
import CategorySelect from "./components/CategorySelect"

export default function Store() {
    const { result, loading }: ResponseType = useGetAllProducts()
    const [filterOrigin, setFilterOrigin] = useState("");
    const [isMobile, setIsMobile] = useState(false);
    const [filterExpand, setFilterExpand] = useState(false);
    const route = useRouter()



    const filteredProduct = result != null && !loading && (
        filterOrigin === ''
            ? result
            : result.filter((product: ProductType) =>
                product.origin === filterOrigin)
    )

    const [grid, setGrid] = useState(0)
    useEffect(() => {
        const updateGrid = () => {
            setGrid(window.innerWidth < 768 ? 2 : 9);
        };
        updateGrid();
    }, [])

    useEffect(() => {
        setIsMobile(window.innerWidth < 768 ? true : false);
    }, [])

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
                        filteredProduct={filteredProduct}>
                        <CategorySelect />
                    </FilterMenu>
                ) : (
                    <div>
                        <CategorySelect />
                        <FiltersControlsCategory setFilterOrigin={setFilterOrigin} setFilterExpand={setFilterExpand} filteredProduct={filteredProduct} />
                    </div>
                )}
                <div className="grid mt-8 lg:grid-cols-3 grid-cols-2 w-full gap-3 px-2">
                    {loading && (
                        <SkeletonSchema grid={grid} />
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
"use client"
import { Separator } from "@/components/ui/separator";

import FiltersControlsCategory from "../../../../components/Filters/FiltersControlsCategory";
import SkeletonSchema from "@/components/SkeletonSchema";

import { useGetCategoryProduct } from "@/api/getCategoryProduct"
import { useParams } from "next/navigation";

import { ResponseType } from "@/types/response";
import { ProductType } from "@/types/product";
import { useEffect, useState } from "react";

import ProductCard from "@/components/ProductCard";
import FilterMenu from "@/components/Filters/FilterMenu";
import useIsMobile from "@/hooks/useIsMobile";
import { Skeleton } from "@/components/ui/skeleton";
import { PaginationSection } from "@/components/PaginationSection";

export default function Page() {
    const params = useParams()
    const { categorySlug } = params
    const { result, loading }: ResponseType = useGetCategoryProduct(categorySlug)
    const [filterOrigin, setFilterOrigin] = useState("");
    const [filterTaste, setFilterTaste] = useState("");
    const [filterBrand, setFilterBrand] = useState("");
    const [filterWeight, setFilterWeight] = useState("");
    const [filterExpand, setFilterExpand] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6);

    const isMobile = useIsMobile();
    const filteredProduct = result && !loading && (
        result.filter((product: ProductType) => {
            const matchesOrigin = filterOrigin === "" || product.origin === filterOrigin;
            const matchesTaste = filterTaste === "" || product.taste === filterTaste;
            const matchesBrand = filterBrand === "" || product.brand === filterBrand;
            const matchesWeight = filterWeight === "" || product.weight === filterWeight;

            return matchesOrigin && matchesTaste && matchesBrand && matchesWeight;
        })
    );

    const lastItemIndex = currentPage * itemsPerPage;
    const firstItemIndex = lastItemIndex - itemsPerPage;
    const currentItems = filteredProduct?.slice(firstItemIndex, lastItemIndex);

    const handleClearFilters = () => {
        setFilterOrigin("");
        setFilterTaste("");
        setFilterExpand(false);
        setFilterTaste("");
        setFilterBrand("");
        setFilterWeight("");
    };

    useEffect(() => {
        if (filterExpand) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [filterExpand])

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
                        setFilterBrand={setFilterBrand}
                        setFilterWeight={setFilterWeight}
                        setCurrentPage={setCurrentPage}
                        filterWeight={filterWeight}
                        filteredProduct={filteredProduct}
                        filterOrigin={filterOrigin}
                        filterTaste={filterTaste}
                        filterBrand={filterBrand} >
                    </FilterMenu>
                ) : (
                    <div className="flex flex-col pl-5 gap-5 items-start w-2/5">
                        <FiltersControlsCategory
                            setFilterOrigin={setFilterOrigin}
                            setFilterTaste={setFilterTaste}
                            setFilterBrand={setFilterBrand}
                            setFilterWeight={setFilterWeight}
                            setCurrentPage={setCurrentPage}
                            filterWeight={filterWeight}
                            filterOrigin={filterOrigin}
                            filterTaste={filterTaste}
                            filterBrand={filterBrand}

                        />
                        <div onClick={handleClearFilters} className="text-sm cursor-pointer">
                            Limpiar Filtros
                        </div>
                    </div>

                )}
                <div className="flex flex-col w-full ">
                    <div className="grid py-5 lg:grid-cols-3 grid-cols-2 gap-3">
                        {loading && (
                            <SkeletonSchema grid={isMobile ? 2 : 9} class="w-[160px]" />
                        )}
                        {filteredProduct !== null && !loading && (
                            currentItems.map((product: ProductType) => (
                                <ProductCard key={product.id} product={product} />
                            ))

                        )}
                        {filteredProduct !== null && !loading && filteredProduct.length == 0 && (
                            <p>No hay productos para mostrar</p>
                        )}
                    </div>
                    <PaginationSection
                        totalItems={filteredProduct?.length}
                        itemsPerPage={itemsPerPage}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>

            </div>
        </div>
    )
}
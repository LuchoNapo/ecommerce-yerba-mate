"use client"
import { Separator } from "@/components/ui/separator";

import FiltersControlsCategory from "../../../../components/Filters/FiltersControlsCategory";
import SkeletonSchema from "@/components/SkeletonSchema";

import { useParams } from "next/navigation";

import { ResponseType } from "@/types/response";
import { ProductType } from "@/types/product";
import { useEffect, useState } from "react";

import ProductCard from "@/components/ProductCard";
import FilterMenu from "@/components/Filters/FilterMenu";
import useIsMobile from "@/hooks/useIsMobile";
import { Skeleton } from "@/components/ui/skeleton";
import { PaginationSection } from "@/components/PaginationSection";
import { useApi } from "@/api/useApi";

export default function Page() {
    const params = useParams()
    const { categorySlug } = params
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?populate=*&filters[category][slug][$eq]=${categorySlug}`;

    const { result, loading }: ResponseType = useApi({urlApi: url});
    //Filters
    const [filterTypeWeed, setFilterTypeWeed] = useState("");
    const [filterTaste, setFilterTaste] = useState("");
    const [filterBrand, setFilterBrand] = useState("");
    const [filterWeight, setFilterWeight] = useState("");
    const [filterMaterial, setFilterMaterial] = useState("");
    const [filterTermoBrand, setFilterTermoBrand] = useState("");
    const [filterTypeStraw, setFilterTypeStraw] = useState("");

    const [filterExpand, setFilterExpand] = useState(false);
    const [activeFilter, setActiveFilter] = useState<string>("taste");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6);
    const isMobile = useIsMobile();

    const filteredProduct = result && !loading && (
        result.filter((product: ProductType) => {
            const matchesTypeWeed = filterTypeWeed === "" || product.typeWeed === filterTypeWeed;
            const matchesTaste = filterTaste === "" || product.taste === filterTaste;
            const matchesBrand = filterBrand === "" || product.brand === filterBrand;
            const matchesWeight = filterWeight === "" || product.weight === filterWeight;
            const matchesMaterial = filterMaterial === "" || product.material === filterMaterial;
            const matchesTermoBrand = filterTermoBrand === "" || product.termoBrand === filterTermoBrand;
            const matchesTypeStraw = filterTypeStraw === "" || product.typeOfStraw === filterTypeStraw;

            return matchesTypeWeed && matchesTaste && matchesBrand && matchesWeight && matchesMaterial && matchesTermoBrand && matchesTypeStraw;
        })
    );

    const currentCategory = result?.[0].category.categoryName;
    const lastItemIndex = currentPage * itemsPerPage;
    const firstItemIndex = lastItemIndex - itemsPerPage;
    const currentItems = filteredProduct?.slice(firstItemIndex, lastItemIndex);


    const handleClearFilters = () => {
        setFilterTypeWeed("");
        setFilterTaste("");
        setFilterExpand(false);
        setFilterTaste("");
        setFilterBrand("");
        setFilterWeight("");
        setFilterTypeStraw("");
        setFilterTermoBrand("");
        setFilterMaterial("");
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
        <div className="max-w-6xl py-4 mx-auto sm:py-10 sm:px-14">
            {result !== undefined && !loading ? (
                <h1 className="text-3xl font-medium px-3 mb-3 font-castor tracking-widest">{result[0].category.categoryName}</h1>
            ) : (
                <Skeleton className="h-10 w-32 mb-2" />
            )}
            <Separator />
            <div
                className={`fixed inset-0 z-10 bg-black/80 transition-opacity duration-500 ease-in-out ${filterExpand ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={() => setFilterExpand(false)}
            ></div>
            <div className="md:flex md:justify-center">
                {isMobile && result !== undefined ? (
                    <FilterMenu
                        isOpen={filterExpand}
                        setFilterExpand={setFilterExpand}
                        setFilterTypeWeed={setFilterTypeWeed}
                        setFilterTaste={setFilterTaste}
                        setFilterBrand={setFilterBrand}
                        setFilterWeight={setFilterWeight}
                        setCurrentPage={setCurrentPage}
                        setFilterTermoBrand={setFilterTermoBrand}
                        setFilterMaterial={setFilterMaterial}
                        setFilterTypeStraw={setFilterTypeStraw}
                        setActiveFilter={setActiveFilter}
                        filterWeight={filterWeight}
                        filteredProduct={filteredProduct}
                        filterTypeWeed={filterTypeWeed}
                        filterTaste={filterTaste}
                        filterBrand={filterBrand}
                        filterTermoBrand={filterTermoBrand}
                        filterMaterial={filterMaterial}
                        filterTypeStraw={filterTypeStraw}
                        activeFilter={activeFilter}
                        currentCategory={currentCategory}

                    >

                    </FilterMenu>
                ) : (
                    <div className="flex flex-col pl-5 gap-5 items-start w-2/5">
                        <FiltersControlsCategory
                            setFilterTypeWeed={setFilterTypeWeed}
                            setFilterTaste={setFilterTaste}
                            setFilterBrand={setFilterBrand}
                            setFilterWeight={setFilterWeight}
                            setFilterMaterial={setFilterMaterial}
                            setFilterTermoBrand={setFilterTermoBrand}
                            setFilterTypeStraw={setFilterTypeStraw}
                            setCurrentPage={setCurrentPage}
                            filterWeight={filterWeight}
                            filterMaterial={filterMaterial}
                            filterTypeWeed={filterTypeWeed}
                            filterTaste={filterTaste}
                            filterBrand={filterBrand}
                            filterTermoBrand={filterTermoBrand}
                            filterTypeStraw={filterTypeStraw}
                            activeFilter={activeFilter}
                            currentCategory={currentCategory}

                        />
                        <div onClick={handleClearFilters} className="text-sm px-2 cursor-pointer">
                            Limpiar Filtros
                        </div>
                    </div>

                )}
                <div className="flex flex-col w-full ">
                    <div className="grid py-5 lg:grid-cols-3 grid-cols-2 gap-3 mx-3">
                        {loading && (
                            <SkeletonSchema grid={isMobile ? 2 : 9} class="w-[160px]" />
                        )}
                        {filteredProduct !== undefined && !loading && (
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
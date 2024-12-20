import FiltersControlsCategory from "@/components/Filters/FiltersControlsCategory";
import { ProductType } from "@/types/product";
import { Filter } from "lucide-react";
import { useState } from "react";
interface FilterProps {
    isOpen: boolean
    setFilterExpand: (expand: boolean) => void;
    setFilterTypeWeed: (typeWeed: string) => void;
    setFilterTaste: (taste: string) => void;
    setFilterBrand: (taste: string) => void;
    setFilterWeight: (taste: string) => void;
    setCurrentPage: (page: number) => void;
    setFilterTermoBrand: (taste: string) => void;
    setFilterMaterial: (taste: string) => void;
    setFilterTypeStraw: (taste: string) => void;
    setActiveFilter: (taste: string) => void;
    filteredProduct: ProductType[] | null;
    filterTaste: string;
    filterTermoBrand: string;
    filterMaterial: string;
    filterBrand: string;
    filterWeight: string;
    filterTypeWeed: string;
    filterTypeStraw: string;
    currentCategory: string;
    activeFilter: string;
}

const FilterMenu = ({ isOpen, setFilterTypeStraw, setFilterExpand, setFilterTypeWeed, setFilterTaste, setActiveFilter ,setFilterBrand, setFilterWeight, setFilterMaterial, setFilterTermoBrand, setCurrentPage, filteredProduct, filterTaste, filterTypeWeed, filterBrand, filterWeight, filterMaterial, filterTermoBrand, filterTypeStraw, currentCategory, activeFilter }: FilterProps) => {
    const [, setSelectedtypeWeed] = useState("");

    const handleClearFilters = () => {
        setSelectedtypeWeed("");
        setFilterTypeWeed("");
        setFilterExpand(false);
        setFilterTaste("");
        setFilterBrand("");
        setFilterWeight("");
        setFilterMaterial("");
        setFilterTermoBrand("");
        setFilterTypeStraw("");
    };

    return (
        <>
            <button className="flex items-center gap-1 justify-center w-full py-1 bg-gray-100 dark:bg-stone-900" onClick={() => setFilterExpand(true)}>
                Filtros <Filter size={14} />
            </button>
            <div
                className={`fixed bottom-0 left-0 w-full bg-white dark:bg-stone-900 z-30 transform transition-all duration-500 ease-in-out
                ${isOpen ? "-translate-y-0 opacity-100 visible" : "translate-y-full opacity-0 invisible"}`}
            >
                <div className="flex flex-col relative min-h-[150px] max-h-[340px] overflow-y-auto scroll-smooth">
                    <div className="flex">
                        <div className="flex flex-col items-center justify-start w-28 font-castor fixed h-full dark:bg-stone-900 bg-gray-100">
                            {currentCategory === "Yerbas" && (
                                <>
                                    <a href="#taste" className={`border-b-2 w-full text-center py-3 ${activeFilter === "taste" ? "dark:bg-[#090706] bg-white" : ""}`} onClick={() => setActiveFilter("taste")}
                                    >Sabor</a>
                                    <a href="#typeWeed" className={`border-b-2 w-full text-center  py-3 ${activeFilter === "typeWeed" ? "dark:bg-[#090706] bg-white" : ""}`} onClick={() => setActiveFilter("typeWeed")}
                                    >Con o Sin Palo</a>
                                    <a href="#weight" className={`border-b-2 w-full text-center py-3 ${activeFilter === "weight" ? "dark:bg-[#090706] bg-white" : ""}`} onClick={() => setActiveFilter("weight")}
                                    >Peso</a>
                                    <a href="#brand" className={`border-b-2 w-full text-center py-3 ${activeFilter === "brand" ? "dark:bg-[#090706] bg-white" : ""}`} onClick={() => setActiveFilter("brand")}
                                    >Marca</a>
                                </>
                            )}
                            {currentCategory === "Mates" && (
                                <>
                                    <a href="#material" className={`border-b-2 w-full text-center  py-3 ${activeFilter === "material" ? "dark:bg-[#090706] bg-white" : ""}`} onClick={() => setActiveFilter("material")}
                                    >Material</a>
                                </>
                            )}
                            {currentCategory === "Termos" && (
                                <>
                                    <a href="#termoBrand" className={`border-b-2 w-full text-center  py-3 ${activeFilter === "termoBrand" ? "dark:bg-[#090706] bg-white" : ""}`} onClick={() => setActiveFilter("termoBrand")}
                                    >Marca</a>
                                </>
                            )}
                            {currentCategory === "Bombillas" && (
                                <>
                                    <a href="#typeOfStraw" className={`border-b-2 w-full text-center  py-3 ${activeFilter === "typeOfStraw" ? "dark:bg-[#090706] bg-white" : ""}`} onClick={() => setActiveFilter("typeOfStraw")}
                                    >Tipo de Bombilla</a>
                                </>
                            )}

                        </div>

                        <div className="flex flex-col items-center gap-5 w-full dark:bg-[#090706]">
                            <FiltersControlsCategory
                                setFilterTypeWeed={setFilterTypeWeed}
                                setFilterTaste={setFilterTaste}
                                setFilterBrand={setFilterBrand}
                                setFilterWeight={setFilterWeight}
                                filterWeight={filterWeight}
                                filterTaste={filterTaste}
                                filterTypeWeed={filterTypeWeed}
                                filterBrand={filterBrand}
                                setCurrentPage={setCurrentPage}
                                setFilterTermoBrand={setFilterTermoBrand}
                                setFilterMaterial={setFilterMaterial}
                                setFilterTypeStraw={setFilterTypeStraw}
                                filterTypeStraw={filterTypeStraw}
                                filterTermoBrand={filterTermoBrand}
                                filterMaterial={filterMaterial}
                                activeFilter={activeFilter}
                                currentCategory={currentCategory}

                            />
                        </div>
                    </div>

                    <div className="flex text-sm w-full items-center justify-around h-12 shadow-top fixed dark:bg-[#090706] bg-white bottom-0 z-10">
                        <div onClick={handleClearFilters} className="text-sm cursor-pointer dark:text-lime-700 text-lime-900 font-bold">
                            Limpiar Filtros
                        </div>
                        <div
                            className="text-white bg-lime-800 text-center py-1 px-3 rounded-sm cursor-pointer"
                            onClick={() => setFilterExpand(false)}
                        >
                            Ver resultados ({filteredProduct?.length})
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default FilterMenu;
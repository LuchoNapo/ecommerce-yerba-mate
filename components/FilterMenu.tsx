import FiltersControlsCategory from "@/app/(routes)/category/[categorySlug]/components/filtersControlsCategory";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/product";
import { Filter, X } from "lucide-react";

interface FilterProps {
    isOpen: boolean
    setFilterExpand:  (expand: boolean) => void;
    setFilterOrigin: (origin: string) => void;
    filteredProduct: ProductType[] | null;
    children: React.ReactNode

}
const FilterMenu = ({ isOpen, setFilterExpand, setFilterOrigin, filteredProduct,children }: FilterProps) => {


    return (
        <>
            <button className="flex items-center gap-1 justify-center w-full py-1 bg-gray-100 dark:bg-stone-900" onClick={() => setFilterExpand(true)}>
                Filtros <Filter size={14} />
            </button>
            <div
                className={` fixed bottom-0 left-0 w-full bg-white dark:bg-stone-900 z-50 h-full transform transition-all duration-500 ease-in-out
            ${isOpen ? "translate-y-[60%] opacity-100 visible" : "translate-y-full opacity-0 invisible"}`}
            >
                <div className="flex items-center justify-between p-4 ">
                    <h1 className="">Filtros</h1>
                    {children}
                    <button className={cn("rounded-full flex items-center justify-center  cursor-pointer")}>
                        <X size={18} onClick={() => setFilterExpand(false)} />
                    </button>
                </div>
                <FiltersControlsCategory setFilterOrigin={setFilterOrigin} setFilterExpand={setFilterExpand} filteredProduct={filteredProduct} />
            </div>
        </>
    );
}

export default FilterMenu;
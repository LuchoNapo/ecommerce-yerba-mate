import { useGetProductsField } from "@/api/getProductField";
import { FilterType, ResultFilterType } from "@/types/filters";
import { useEffect, useState } from "react";

type FilterProps = {
    setFilterProducts: (product: string) => void;
    filterProducts: string;
    attributeKey: AttributeKey;
    setCurrentPage: (page: number) => void;
    isActive: boolean;
}

type AttributeKey = keyof ResultFilterType["schema"]["attributes"];

const labelMap: { [key: string]: string } = {
    one_kg: "1 kg",
    half_kg: "1/2 kg",
};
const attributeLabelMap: { [key in AttributeKey]: string } = {
    taste: "Sabor",
    typeWeed: "Con o Sin Palo",
    brand: "Marca",
    weight: "Peso",
    material: "Material",
    termoBrand: "Marca",
    typeOfStraw: "Tipo de Bombilla"
};
const FilterProduct = ({ filterProducts, setFilterProducts, attributeKey, setCurrentPage, isActive }: FilterProps) => {
    const { result }: FilterType = useGetProductsField()
    const attributeEnum = result?.schema.attributes[attributeKey]?.enum;
    const [highlight, setHighlight] = useState(false);
    

    useEffect(() => {
        if (isActive) {
            setHighlight(true);
            const timer = setTimeout(() => setHighlight(false), 500);
            return () => clearTimeout(timer);
        } else {
            setHighlight(false);
        }
    }, [isActive]);
    return (
        <div id={attributeKey} className={`transition duration-500 md:pl-0 pl-32 pb-3 ${highlight ? "dark:bg-stone-900/50 bg-gray-100" : ""}`}>
            {
                result !== null && (
                    <>
                        <h2 className="mb-2 text-lg px-2 font-castor tracking-wide">{attributeLabelMap[attributeKey]}</h2>
                        <div className="flex md:w-[230px] md:gap-1 gap-2 flex-wrap">
                            {result && attributeEnum?.map((product: string) => (
                                <div key={product} className="flex items-center">

                                    <input
                                        type="checkbox"
                                        value={product}
                                        id={`product-${product}`}
                                        className="hidden peer"
                                        checked={filterProducts === product}
                                        onChange={() => setFilterProducts(filterProducts === product ? "" : product)}
                                    />
                                    <label
                                        htmlFor={`product-${product}`}
                                        onClick={() => setCurrentPage(1)}
                                        className=
                                        {`md:text-sm text-sm select-none cursor-pointer capitalize 
                                            md:border-none border-2 text-nowrap text-black/50 dark:text-white/50
                                            py-1 px-2 rounded-sm 
                                            transition duration-300 ease-in-out 
                                            hover:text-black/100 hover:bg-gray-100 hover:dark:text-white/100 hover:dark:bg-stone-900
                                            ${filterProducts === product ? "bg-gray-200 !text-black/100 dark:!bg-stone-900 dark:!text-white/100" : ""}`}
                                    >
                                        {labelMap[product] || product}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </>
                )
            }
        </div>
    );
}

export default FilterProduct;
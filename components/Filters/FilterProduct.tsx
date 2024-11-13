import { useGetProductsField } from "@/api/getProductField";
import { FilterType, ResultFilterType } from "@/types/filters";

import useIsMobile from "@/hooks/useIsMobile";

type FilterProps = {
    setFilterProducts: (product: string) => void;
    filterProducts: string;
    attributeKey: AttributeKey;
    setCurrentPage: (page: number) => void;
}

type AttributeKey = keyof ResultFilterType["schema"]["attributes"];

const labelMap: { [key: string]: string } = {
    one_kg: "1Kg",
    half_kg: "500g", 
};
const attributeLabelMap: { [key in AttributeKey]: string } = {
    taste: "Sabor",
    origin: "Origen",
    brand: "Marca",
    weight: "Peso",
};
const FilterProduct = ({ filterProducts, setFilterProducts, attributeKey, setCurrentPage }: FilterProps) => {
    const { result, loading }: FilterType = useGetProductsField()
    const isMobile = useIsMobile();
    const attributeEnum = result?.schema.attributes[attributeKey]?.enum;

    return (
        <div id={attributeKey}>
            {
                result !== null ? (
                    <>
                        <h2 className="mb-3 text-xl font-castor tracking-wide">{attributeLabelMap[attributeKey]}</h2>
                        {loading == true && !isMobile && (
                            <p>Cargando filtros...</p>
                        )}
                        <div className="grid grid-cols-2 gap-2 w-fit">
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
                                        {`text-sm select-none cursor-pointer capitalize 
                                            dark:bg-stone-900 bg-gray-100 
                                            py-1 px-2 my-1 rounded-sm 
                                            transition duration-300 ease-in-out 
                                            hover:shadow-inset hover:dark:shadow-inset-dark 
                                            ${filterProducts === product ? "shadow-inset dark:shadow-inset-dark " : ""}`}
                                    >
                                        {labelMap[product] || product}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (

                    !isMobile && (
                        <>
                            <h2 className="mb-3 text-xl font-castor">{attributeLabelMap[attributeKey]}</h2>
                            <p>Cargando filtros...</p>
                        </>
                    )
                )
            }
        </div>
    );
}

export default FilterProduct;
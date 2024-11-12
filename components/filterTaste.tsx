import { useGetProductsField } from "@/api/getProductField";
import useIsMobile from "@/hooks/useIsMobile";
import { FilterType } from "@/types/filters";

type FilterTasteProps = {
    setFilterTaste: (taste: string) => void;
    filterTaste: string;
}

const FilterTaste = ({ setFilterTaste, filterTaste }: FilterTasteProps) => {
    const { result, loading }: FilterType = useGetProductsField()
    const isMobile = useIsMobile();



    return (
        <div className="">
            {
                result !== null && (
                    <>
                        <p className="mb-3 text-xl font-castor">Sabor</p>
                        {loading == true && !isMobile && (
                            <p>Cargando filtros...</p>
                        )}
                        <div className="grid grid-cols-2 gap-2 w-fit">
                            {result && result.schema.attributes.taste.enum.map((taste: string) => (
                                <div key={taste} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        value={taste}
                                        id={`taste-${taste}`}
                                        className="hidden peer"
                                        checked={filterTaste === taste}
                                        onChange={() => setFilterTaste(filterTaste === taste ? "" : taste)}
                                    />
                                    <label
                                        htmlFor={`taste-${taste}`}
                                        className={`select-none cursor-pointer capitalize dark:bg-stone-900 bg-gray-100 py-1 px-2 my-1 rounded-sm transition duration-200 ease-in-out hover:scale-105 ${filterTaste === taste ? "shadow-inset dark:shadow-inset-dark " : ""
                                            }`}
                                    >
                                        {taste}
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

export default FilterTaste;
import { useGetProductsField } from "@/api/getProductField";
import useIsMobile from "@/hooks/useIsMobile";
import { FilterType } from "@/types/filters";

type FilterOriginProps = {
    setFilterOrigin: (origin: string) => void;
    filterOrigin: string;
}

const FilterOrigin = ({ filterOrigin, setFilterOrigin }: FilterOriginProps) => {
    const { result, loading }: FilterType = useGetProductsField()
    const isMobile = useIsMobile();



    return (
        <div className="">
            {
                result !== null ? (
                    <>
                        <p className="mb-3 text-xl font-castor">Origen</p>
                        {loading == true && !isMobile && (
                            <p>Cargando filtros...</p>
                        )}
                        <div className="grid grid-cols-2 gap-2 w-fit">
                            {result && result.schema.attributes.origin.enum.map((origin: string) => (
                                <div key={origin} className="flex items-center">

                                    <input
                                        type="checkbox"
                                        value={origin}
                                        id={`origin-${origin}`}
                                        className="hidden peer"
                                        checked={filterOrigin === origin}
                                        onChange={() => setFilterOrigin(filterOrigin === origin ? "" : origin)}
                                    />
                                    <label
                                        htmlFor={`origin-${origin}`}
                                        className={`select-none cursor-pointer capitalize dark:bg-stone-900 bg-gray-100 py-1 px-2 my-1 rounded-sm transition duration-200 ease-in-out hover:scale-105 ${filterOrigin === origin ? "shadow-inset dark:shadow-inset-dark " : ""
                                            }`}
                                    >
                                        {origin}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (

                    !isMobile && (
                        <>
                            <p className="mb-3 text-xl font-castor">Origen</p>
                            <p>Cargando filtros...</p>
                        </>
                    )
                )
            }
        </div>
    );
}

export default FilterOrigin;
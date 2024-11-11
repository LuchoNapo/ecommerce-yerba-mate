import { useGetProductsField } from "@/api/getProductField";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FilterType } from "@/types/filters";
import { ProductType } from "@/types/product";
import { useEffect, useState } from "react";

type FilterOriginProps = {
    setFilterOrigin: (origin: string) => void;
    setFilterExpand:  (expand: boolean) => void;
    filteredProduct: ProductType[] | null;

}

const FilterOrigin = (props: FilterOriginProps) => {
    const { setFilterOrigin, setFilterExpand, filteredProduct } = props;
    const { result, loading }: FilterType = useGetProductsField()
    const [selectedOrigin, setSelectedOrigin] = useState("");
    const [isMobile, setIsMobile] = useState(false);


    const handleClearFilters = () => {
        setSelectedOrigin("");
        setFilterOrigin("");
        setFilterExpand(false);
    };

    useEffect(() => {
        setIsMobile(window.innerWidth < 768 ? true : false);
    }, [])
    
    return (
        <div className="mx-5">
            {
                result !== null ? (
                    <>
                        <p className="mb-3 text-xl font-castor">Origen</p>
                        {loading == true && !isMobile && (
                            <p>Cargando filtros...</p>
                        )}
                        <RadioGroup value={selectedOrigin}
                            onValueChange={(value) => {
                                setSelectedOrigin(value);
                                setFilterOrigin(value);
                            }}>
                            {result != null && result.schema.attributes.origin.enum.map((origin: string) => (
                                <div key={origin} className="flex items-center space-x-2">
                                    <RadioGroupItem value={origin} id={origin} />
                                    <Label htmlFor={origin}>{origin}</Label>
                                </div>
                            ))}
                        </RadioGroup>
                        {isMobile ? (
                            <div className="flex absolute bottom-[62%] w-full items-center justify-around left-0 text-white">
                                <div onClick={handleClearFilters} >
                                    Limpiar Filtros
                                </div>
                                <div className=" bg-lime-800 text-center py-1 px-3 rounded-sm" onClick={() => setFilterExpand(false)}>
                                    Ver resultados ({filteredProduct?.length})
                                </div>
                            </div>

                        ) : (
                            <button className="mt-3 text-sm hover:underline cursor-pointer select-none" onClick={handleClearFilters}>Limpiar filtros</button>
                        )}
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
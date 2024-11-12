import { useGetProductsField } from "@/api/getProductField";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import useIsMobile from "@/hooks/useIsMobile";
import { FilterType } from "@/types/filters";
import { useState } from "react";

type FilterOriginProps = {
    setFilterOrigin: (origin: string) => void;
    setFilterExpand: (expand: boolean) => void;
}

const FilterOrigin = (props: FilterOriginProps) => {
    const { setFilterOrigin, setFilterExpand } = props;
    const { result, loading }: FilterType = useGetProductsField()
    const [selectedOrigin, setSelectedOrigin] = useState("");
    const isMobile = useIsMobile();

    const handleClearFilters = () => {
        setSelectedOrigin("");
        setFilterOrigin("");
        setFilterExpand(false);
    };

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
                        {!isMobile && (
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
import { useGetProductsField } from "@/api/getProductField";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FilterType } from "@/types/filters";

type FilterOriginProps = {
    setFilterOrigin: (origin: string) => void;
}

const FilterOrigin = (props: FilterOriginProps) => {
    const { setFilterOrigin } = props;
    const { result, loading }: FilterType = useGetProductsField()

    return (
        <div className="mx-5">
            <p className="mb-3 text-xl font-castor">Origen</p>
            {loading && result == null && (
                <p>Cargando Origen...</p>
            )}
            <RadioGroup onValueChange={(value) => setFilterOrigin(value)}>
                {result != null && result.schema.attributes.origin.enum.map((origin: string) => (
                    <div key={origin} className="flex items-center space-x-2">
                        <RadioGroupItem value={origin} id={origin} />
                        <Label htmlFor={origin}>{origin}</Label>
                    </div>
                ))}
            </RadioGroup>
            <p className="mt-3 text-sm hover:underline cursor-pointer select-none" onClick={() => setFilterOrigin("")}>Limpiar filtros</p>
        </div>
    );
}

export default FilterOrigin;
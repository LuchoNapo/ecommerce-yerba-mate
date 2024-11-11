import { ProductType } from "@/types/product";
import FilterOrigin from "./filterOrigin";

type FiltersControlsCategoryProps = {
    setFilterOrigin:  (origin: string) => void;
    setFilterExpand:  (expand: boolean) => void;
    filteredProduct: ProductType[] | null;
}
const FiltersControlsCategory = (props: FiltersControlsCategoryProps) => {
    const { setFilterOrigin, setFilterExpand, filteredProduct } = props;
    return ( 
        <div className="sm:w-[350px] sm:mt-5 p-6">
            <FilterOrigin setFilterOrigin={setFilterOrigin} setFilterExpand={setFilterExpand} filteredProduct={filteredProduct} />
        </div>
    );
}
 
export default FiltersControlsCategory;
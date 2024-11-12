import FilterTaste from "@/components/filterTaste";
import FilterOrigin from "./filterOrigin";

type FiltersControlsCategoryProps = {
    setFilterOrigin:  (origin: string) => void;
    setFilterTaste:  (origin: string) => void;
    filterTaste: string;
    filterOrigin: string;

}
const FiltersControlsCategory = ({filterOrigin, setFilterOrigin, setFilterTaste, filterTaste}: FiltersControlsCategoryProps) => {
    return ( 
        <div className="sm:w-[350px] sm:mt-5">
            <FilterOrigin setFilterOrigin={setFilterOrigin} filterOrigin={filterOrigin} />
            <FilterTaste setFilterTaste={setFilterTaste}  filterTaste={filterTaste} />
        </div>
    );
}
 
export default FiltersControlsCategory;
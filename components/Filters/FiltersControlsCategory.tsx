import FilterProduct from "./FilterProduct";

type FiltersControlsCategoryProps = {
    setFilterOrigin:  (origin: string) => void;
    setFilterTaste:  (origin: string) => void;
    setFilterBrand:  (origin: string) => void;
    setFilterWeight:  (origin: string) => void;
    setCurrentPage: (page: number) => void;

    filterTaste: string;
    filterOrigin: string;
    filterBrand: string;
    filterWeight: string;

}
const FiltersControlsCategory = ({ setFilterOrigin, setFilterTaste, setFilterBrand, setFilterWeight, filterWeight, filterTaste, filterOrigin, filterBrand, setCurrentPage}: FiltersControlsCategoryProps) => {
    return ( 
        <div className="sm:mt-5 flex flex-col gap-5 w-fit sm:items-start ">
            <FilterProduct setFilterProducts={setFilterOrigin} filterProducts={filterOrigin} setCurrentPage={setCurrentPage} attributeKey="origin" />
            <FilterProduct setFilterProducts={setFilterTaste}  filterProducts={filterTaste} setCurrentPage={setCurrentPage} attributeKey="taste"/>
            <FilterProduct setFilterProducts={setFilterBrand} filterProducts={filterBrand} setCurrentPage={setCurrentPage} attributeKey="brand" />
            <FilterProduct setFilterProducts={setFilterWeight} filterProducts={filterWeight} setCurrentPage={setCurrentPage} attributeKey="weight" />
        </div>
    );
}
 
export default FiltersControlsCategory;
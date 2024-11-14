import FilterProduct from "./FilterProduct";

type FiltersControlsCategoryProps = {
    setFilterOrigin: (origin: string) => void;
    setFilterTaste: (origin: string) => void;
    setFilterBrand: (origin: string) => void;
    setFilterWeight: (origin: string) => void;
    setCurrentPage: (page: number) => void;

    filterTaste: string;
    filterOrigin: string;
    filterBrand: string;
    filterWeight: string;
    activeFilter: string;

}
const FiltersControlsCategory = ({
    setFilterOrigin,
    setFilterTaste,
    setFilterBrand,
    setCurrentPage,
    setFilterWeight,
    filterWeight,
    filterTaste,
    filterOrigin,
    filterBrand,
    activeFilter,
}: FiltersControlsCategoryProps) => {
    return (
        <div className="sm:mt-5 flex flex-col w-fit sm:items-start md:mb-0 mb-12 ">
            <FilterProduct setFilterProducts={setFilterOrigin} filterProducts={filterOrigin} setCurrentPage={setCurrentPage} attributeKey="origin" isActive={activeFilter === "origin"} />
            <FilterProduct setFilterProducts={setFilterTaste} filterProducts={filterTaste} setCurrentPage={setCurrentPage} attributeKey="taste" isActive={activeFilter === "taste"} />
            <FilterProduct setFilterProducts={setFilterWeight} filterProducts={filterWeight} setCurrentPage={setCurrentPage} attributeKey="weight" isActive={activeFilter === "weight"} />
            <FilterProduct setFilterProducts={setFilterBrand} filterProducts={filterBrand} setCurrentPage={setCurrentPage} attributeKey="brand" isActive={activeFilter === "brand"} />
        </div>
    );
}

export default FiltersControlsCategory;
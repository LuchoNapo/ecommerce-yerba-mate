import FilterProduct from "./FilterProduct";

type FiltersControlsCategoryProps = {
    setFilterTypeWeed: (typeWeed: string) => void;
    setFilterTaste: (typeWeed: string) => void;
    setFilterBrand: (typeWeed: string) => void;
    setFilterWeight: (typeWeed: string) => void;
    setFilterMaterial: (typeWeed: string) => void;
    setFilterTermoBrand: (typeWeed: string) => void;
    setFilterTypeStraw: (typeWeed: string) => void;
    setCurrentPage: (page: number) => void;


    filterTaste: string;
    filterTypeWeed: string;
    filterBrand: string;
    filterWeight: string;
    filterMaterial: string;
    filterTermoBrand: string;
    filterTypeStraw: string;
    activeFilter: string;
    currentCategory: string;

}
const FiltersControlsCategory = ({
    setFilterTypeWeed,
    setFilterTaste,
    setFilterBrand,
    setCurrentPage,
    setFilterWeight,
    setFilterMaterial,
    setFilterTermoBrand,
    setFilterTypeStraw,
    filterWeight,
    filterTaste,
    filterTypeWeed,
    filterBrand,
    filterMaterial,
    filterTypeStraw,
    filterTermoBrand,
    activeFilter,

    currentCategory
}: FiltersControlsCategoryProps) => {
    return (
        <div className="sm:mt-5 flex flex-col w-fit sm:items-start md:mb-0 mb-12 ">
            {currentCategory === "Yerbas" && (
                <>
                    <FilterProduct setFilterProducts={setFilterTaste} filterProducts={filterTaste} setCurrentPage={setCurrentPage} attributeKey="taste" isActive={activeFilter === "taste"} />
                    <FilterProduct setFilterProducts={setFilterTypeWeed} filterProducts={filterTypeWeed} setCurrentPage={setCurrentPage} attributeKey="typeWeed" isActive={activeFilter === "typeWeed"} />
                    <FilterProduct setFilterProducts={setFilterWeight} filterProducts={filterWeight} setCurrentPage={setCurrentPage} attributeKey="weight" isActive={activeFilter === "weight"} />
                    <FilterProduct setFilterProducts={setFilterBrand} filterProducts={filterBrand} setCurrentPage={setCurrentPage} attributeKey="brand" isActive={activeFilter === "brand"} />
                </>
            )}
            {currentCategory === "Mates" && (
                <>
                    <FilterProduct setFilterProducts={setFilterMaterial} filterProducts={filterMaterial} setCurrentPage={setCurrentPage} attributeKey="material" isActive={activeFilter === "material"} />
                </>
            )}
                {currentCategory === "Termos" && (
                <>
                    <FilterProduct setFilterProducts={setFilterTermoBrand} filterProducts={filterTermoBrand} setCurrentPage={setCurrentPage} attributeKey="termoBrand" isActive={activeFilter === "termoBrand"} />
                </>
            )}
            {
                currentCategory === "Bombillas" && (
                    <>
                        <FilterProduct setFilterProducts={setFilterTypeStraw} filterProducts={filterTypeStraw} setCurrentPage={setCurrentPage} attributeKey="typeOfStraw" isActive={activeFilter === "typeOfStraw"} />
                    </>
                )
            }
        </div>
    );
}

export default FiltersControlsCategory;
import FilterOrigin from "./filterOrigin";

type FiltersControlsCategoryProps = {
    setFilterOrigin:  (origin: string) => void;
    setFilterExpand:  (expand: boolean) => void;
}
const FiltersControlsCategory = (props: FiltersControlsCategoryProps) => {
    const { setFilterOrigin, setFilterExpand } = props;
    return ( 
        <div className="sm:w-[350px] sm:mt-5 p-6">
            <FilterOrigin setFilterOrigin={setFilterOrigin} setFilterExpand={setFilterExpand} />
        </div>
    );
}
 
export default FiltersControlsCategory;
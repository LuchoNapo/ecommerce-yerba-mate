import { Skeleton } from "./ui/skeleton";


type SkeletonSchemaProps = {
    grid: number
    class: string
}

const SkeletonSchema = ({grid, class: className}: SkeletonSchemaProps) => {


    return (
        Array.from({ length: grid }).map((_, index) => (
            <div key={index} className="flex flex-col w-full gap-5 mx-auto justify-center items-center">
                <Skeleton className={`h-[300px] w-4/6 md:w-11/12 reounded-xl ${className}`} />
                <div className="w-full space-y-2 flex flex-col justify-center items-center">

                </div>
            </div>
        ))
        );
}
export default SkeletonSchema;
import { Skeleton } from "@/components/ui/skeleton";

const SkeletonProduct = () => {
    return ( 
        <div className="max-w-6xl py-4 mx-auto lg:py-32 lg:px-24 w-full flex lg:flex-row flex-col justify-center items-center">
            <Skeleton className="h-[250px] lg:h-[400px] rounded-xl w-2/5" />
            <div className="space-y-2 w-full px-5 mt-5 flex flex-col gap-1 lg:w-3/5">
                <Skeleton className="h-0 lg:h-6" />
                <Skeleton className="h-14 lg:h-52" />
                <Skeleton className="h-24 lg:h-10" />
                <Skeleton className="h-10" />
            </div>
        </div>
     );
}
 
export default SkeletonProduct;
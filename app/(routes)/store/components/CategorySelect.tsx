import { useRouter } from "next/navigation";

const CategorySelect = () => {
    const route = useRouter()
    return (
        <div className="flex items-center justify-around gap-4 text-white text-lg sm:text-2xl font-castor mt-5">
            <div
                onClick={() => route.push("/category/con-palo")}
                className="relative before:block before:absolute before:-inset-1 before:-skew-y-3 before:z-[-1] before:bg-lime-900 cursor-pointer hover:scale-110 transition-transform">
                Con Palo
            </div>
            <div
                onClick={() => route.push("/category/sin-palo")}
                className="relative before:block before:absolute before:-inset-1 before:-skew-y-3 before:z-[-1] before:bg-yellow-900 cursor-pointer hover:scale-110 transition-transform">
                Sin Palo
            </div>
        </div>
    );
}

export default CategorySelect;
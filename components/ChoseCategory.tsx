/* eslint-disable @next/next/no-img-element */
"use client"
import { useGetCategories } from "@/api/getCategories";
import { CategoryType } from "@/types/category";
import { ResponseType } from "@/types/response";
import Link from "next/link";


const ChoseCategory = () => {
    const { result, loading }: ResponseType = useGetCategories();

    return (

        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-14">
            <h3 className="px-6 pb-4 text-3xl sm:pb-8">Elegí tu categoria favorita</h3>
            <div className="flex gap-5">
                {!loading && result !== undefined && (
                    result.map((category: CategoryType) => (
                        <Link key={category.id} href={`/category/${category.slug}`} className="relative w-full overflow-hidden bg-no-repeat bg-cover rounded-lg">
                            <img
                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${category.mainImage[0].url}`}
                                alt={category.categoryName}
                                className="w-full h-full transition object-cover  duration-300 ease-in-out rounded-lg hover:scale-110"
                            />
                            <p className="absolute w-full py-2 textl-lg text-white text-center bottom-5 backdrop-blur-lg font-bold">{category.categoryName}</p>
                        </Link>

                    ))
                )}
            </div>

        </div>
    );
}

export default ChoseCategory;
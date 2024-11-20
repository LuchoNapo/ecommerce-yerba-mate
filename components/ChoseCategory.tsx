/* eslint-disable @next/next/no-img-element */
"use client"
import { CategoryType } from "@/types/category";
import { ResponseType } from "@/types/response";
import Link from "next/link";
import SkeletonSchema from "./SkeletonSchema";
import { useApi } from "@/api/useApi";


const ChoseCategory = () => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories?populate=*`
    const { result, loading }: ResponseType = useApi({urlApi: url});

    return (
        <div id="chooseCategory" className="mx-auto sm:py-16 sm:px-0 ">
            <h3 className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-14 px-2 pb-4 sm:text-3xl text-2xl text-nowrap sm:pb-8">Elegí tu categoria favorita</h3>
            <div className="sm:flex  w-full sm:flex-row grid grid-cols-2">
                {loading && (
                    <SkeletonSchema grid={4} class="sm:h-[450px] h-[250px] w-[90%]" />
                )}
                {!loading && result !== undefined && (
                    result.map((category: CategoryType) => (
                        <Link key={category.id} href={`/category/${category.slug}`} className="relative w-full overflow-hidden bg-no-repeat bg-cover sm:h-[450px] h-[250px]">
                            <img
                                src={`${category.mainImage[0].url}`}
                                alt={category.categoryName}
                                className="w-full h-full transition object-cover duration-300 ease-in-out hover:scale-110"
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
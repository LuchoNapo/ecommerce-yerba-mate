"use client"
import { useLovedItem } from "@/hooks/useLovedProducts"
import LovedItemsProducts from "./components/LovedItemsProduct"

export default function Page() {
    const { lovedItems } = useLovedItem()
    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-14 pl-5">
            <h1 className="sm:text-2xl">Productos que te gustan</h1>
            <div>
                <div className="">
                    {lovedItems.length == 0 && (
                        <p>No tienes productos favoritos 💔</p>
                    )}
                    <ul>
                        {lovedItems.map((item)=>(
                            <LovedItemsProducts key={item.id} product={item} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
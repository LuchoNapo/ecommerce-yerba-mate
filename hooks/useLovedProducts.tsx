import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { ProductType } from "@/types/product";
import { toast } from "./use-toast";

interface LovedItemStore {
    lovedItems: ProductType[],
    addLovedItem: (data: ProductType) => void
    removeLovedItem: (id: number) => void
}

export const useLovedItem = create(persist<LovedItemStore>((set, get) => ({
    lovedItems: [],
    addLovedItem: (data: ProductType) => {
        const currentLovedItems = get().lovedItems
        const existingLovedItem = currentLovedItems.find((item) => item.id === data.id)

        if (existingLovedItem) {
            return toast({
                title: "El producto ya existe en tus favoritos ❣️",
            })
        }
        set({
            lovedItems: [...get().lovedItems, data]
        })
        toast({
            title: "Producto añadido a tus favoritos ❤️"
        })
    },
    removeLovedItem: (id: number) => {
        set({ lovedItems: [...get().lovedItems.filter((item) => item.id != id)] })
        toast({
            title: "Producto eliminado de tus favoritos 💔"
        })
    },
}), {
    name: "loved-lovedItem-storage",
    storage: createJSONStorage(() => localStorage)
})) 
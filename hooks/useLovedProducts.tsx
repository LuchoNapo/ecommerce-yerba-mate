import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { ProductType } from "@/types/product";
import { toast } from "./use-toast";

interface LovedItemStore {
    lovedItems: ProductType[],
    addLovedItem: (product: ProductType) => void
    removeLovedItem: (id: number) => void
    isLoved: (id: number) => boolean
}

export const useLovedItem = create(persist<LovedItemStore>((set, get) => ({
    lovedItems: [],
    addLovedItem: (product: ProductType) => {
        const currentLovedItems = get().lovedItems
        const existingLovedItem = currentLovedItems.find((item) => item.id === product.id)

        if (existingLovedItem) {

            set({ lovedItems: [...get().lovedItems.filter((item) => item.id != product.id)] })
            return toast({
                title: "Producto eliminado de tus favoritos 💔"
            })
        }
        set({
            lovedItems: [...get().lovedItems, product]
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
    isLoved: (id: number) => {
        const { lovedItems } = get();
        return lovedItems.some((item) => item.id === id);
    },
}), {
    name: "loved-lovedItem-storage",
    storage: createJSONStorage(() => localStorage)
})) 
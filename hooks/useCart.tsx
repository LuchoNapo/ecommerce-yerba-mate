import { ProductType } from "@/types/product"
import { persist, createJSONStorage } from "zustand/middleware"
import { create } from 'zustand'
import { toast } from "./use-toast";

interface CartStore {
    items: ProductType[],
    addItem: (data: ProductType) => void
    removeItem: (id: number) => void
    removeAll: () => void;
}

export const useCart = create(persist<CartStore>((set, get) => ({
    
    items: [],
    addItem: (data: ProductType) => {
        const currentItems = get().items
        const existingItems = currentItems.find((item) => item.id === data.id)

        if (existingItems) {
            return toast({
                title: "❗ El producto ya existe en el carrito ",

            })
        }
        set({
            items: [...get().items, data]
        })
        toast({
            title: "Producto añadido al carrito 🛍️"
        })
    },
    removeItem: (id: number) => {
        set({ items: [...get().items.filter((item) => item.id != id)] })
        toast({
            title: "Producto eliminado del carrito 🗑️"
        })
    },
    removeAll: () => set({ items: [] })

}), {
    name: "cart-storage",
    storage: createJSONStorage(() => localStorage)
}))



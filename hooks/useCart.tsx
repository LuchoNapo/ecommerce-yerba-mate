import { ProductType } from "@/types/product"
import { persist, createJSONStorage } from "zustand/middleware"
import { create } from 'zustand'
import { toast } from "./use-toast";

interface CartStore {
    items: ProductType[],
    addItem: (data: ProductType) => void
    removeItem: (id: number) => void
    updateQuantity: (id: number, quantity: number) => void
    removeAll: () => void;
}

export const useCart = create(persist<CartStore>((set, get) => ({

    items: [],
    addItem: (data: ProductType) => {
        const currentItems = get().items;
        const existingItemIndex = currentItems.findIndex((item) => item.id === data.id);

        if (existingItemIndex !== -1) {
            // Si el producto ya está en el carrito, actualizamos su cantidad
            const updatedItems = [...currentItems];
            updatedItems[existingItemIndex] = {
                ...updatedItems[existingItemIndex],
                quantity: updatedItems[existingItemIndex].quantity + (data.quantity || 1)
            };
            set({ items: updatedItems });

            toast({
                title: "Cantidad actualizada en el carrito 🛒"
            });
        } else {
            // Si el producto no está en el carrito, lo añadimos
            set({
                items: [...currentItems, { ...data, quantity: data.quantity || 1 }]
            });

            toast({
                title: "Producto añadido al carrito 🛍️"
            });
        }
    },
    removeItem: (id: number) => {
        set({ items: [...get().items.filter((item) => item.id != id)] })
        toast({
            title: "Producto eliminado del carrito 🗑️"
        })
    },
    updateQuantity: (id: number, quantity: number) => {
        const currentItems = get().items;

        set({
            items: currentItems.map((item) =>
                item.id === id ? { ...item, quantity } : item
            ),
        });

        if (quantity === 0) {
            set({
                items: currentItems.filter((item) => item.id !== id),
            });
        }
    },
    removeAll: () => set({ items: [] })

}), {
    name: "cart-storage",
    storage: createJSONStorage(() => localStorage)
}))



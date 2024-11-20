/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/hooks/useCart"
import { formatPrice } from "@/lib/formatPrice"
import CartItems from "./components/CartItems"
import { loadStripe } from '@stripe/stripe-js'
import { makePaymentRequest } from "@/api/payment"


export default function Page() {
    const { items, removeAll} = useCart()
    
    const prices = items.map((product) => product.price * product.quantity);
    const totalPrice = prices.reduce((total, price) => total + price, 0);    
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '')
    
    const buyStripe = async () => {
        try {
            const stripe = await stripePromise
            const res = await makePaymentRequest.post("/api/orders", {
                products: items
            })
            removeAll();
            await stripe?.redirectToCheckout({
                sessionId: res.data.stripeSession.id
            })
            
        } catch (error) {
            console.log(error);

        }
    }
    return (
        <div>
            <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-14 px-2">
                <h1 className="mb-5 text-3xl font-bold">Shopping Cart</h1>
                <div className="grid sm:grid-cols-2 sm:gap-5">
                    <div>
                        {items.length === 0 && (
                            <p>No hay productos en el carrito</p>
                        )}
                        <ul>
                            {items.map((item) => (
                                <CartItems key={item.id} product={item} />
                            ))}
                        </ul>
                    </div>
                    <div className="max-w-xl">
                        <div className="p-6 rounded-lg bg-slate-100 dark:bg-neutral-900 dark:border dark:border-stone-900">
                            <p className="text-lg font-semibold">Resumen de orden</p>
                            <Separator />
                            <div className="flex justify-between gap-5 my-4">
                                <p>Total</p>
                                <p>{formatPrice(totalPrice)}</p>
                            </div>
                            <div className="flex items-center justify-center w-full mt-3">
                                <Button
                                    className="w-full cursor-pointer"
                                    onClick={buyStripe}>
                                    Comprar
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                {items.length != 0 && (
                    <button
                        className="mt-3  sm:w-auto w-full  sm:px-3 py-2 rounded-lg cursor-pointer font-semibold hover:underline transition "
                        onClick={() => removeAll()}>
                        Vaciar carrito
                    </button>
                )}
            </div>
        </div >
    )
}

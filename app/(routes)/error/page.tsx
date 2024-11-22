/* eslint-disable @next/next/no-img-element */
"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Error = () => {
    const router = useRouter()
    return (  
        <div className="h-full">
            <div className="relative h-[600px] p-5 sm:p-20 text-center bg-[url('/mate-banner.jpg')] bg-cover bg-center grayscale text-white ">
            <div className="absolute inset-0 bg-black/50 grayscale"></div>
                <div className="absolute text-pretty bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <h1 className="text-3xl font-castor tracking-wide">No pudimos procesar tu compra</h1>
                    <p className="mt-3"> Lo sentimos, hubo un error al procesar tu pedido. Por favor, inténtalo de nuevo más tarde.</p>
                    <p className="mb-3">Gracias nuevamente por su confiar en Mateina!.</p>
                    <Button onClick={() => router.push("/")}>Volver a la tienda</Button>
                </div>
            </div>
        </div>
    );
}
 
export default Error;
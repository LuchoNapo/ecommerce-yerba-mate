/* eslint-disable @next/next/no-img-element */
"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Success = () => {
    const router = useRouter()
    return (  
        <div className="h-full">
            <div className="relative h-[600px] p-5 sm:p-20 text-center bg-[url('/mate-banner.jpg')] bg-cover bg-center text-white ">
            <div className="absolute inset-0 bg-black/80"></div>
                <div className="absolute text-pretty bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <h1 className="text-3xl font-castor tracking-wide">¡Gracias por tu compra!</h1>
                    <p className="my-3">Tu pedido ha sido procesado con éxito en breves momentos prepararemos tu pedido para su entrega.</p>
                    <p className="my-3">Si tienes alguna duda, no dudes en ponerte en contacto con nosotros.</p>
                    <p className="my-3">Gracias nuevamente por su confiar en Mateina!.</p>
                    <Button onClick={() => router.push("/")}>Volver a la tienda</Button>
                </div>
            </div>
        </div>
    );
}
 
export default Success;
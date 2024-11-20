/* eslint-disable @next/next/no-img-element */
"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Success = () => {
    const router = useRouter()
    return (  
        <div className="max-w-6xl py-4 mx-auto sm:py-16 md:px-14 px-5">
            <div className="flex flex-col-reverse gap-5 sm:flex-row items-center">
                <div className="flex justify-center">
                    <img className="rounded-3xl w-80 lg:w-96 lg:h-[450px] h-80 object-cover object-bottom" src="mate-error.jpg" alt="success"/>
                </div>
                <div className="lg:max-w-[500px] text-pretty" >
                    <h1 className="text-3xl">¡No se pudo realizar la compra correctamente!</h1>
                    <p className="my-3">Por favor, inténtalo de nuevo o contacta con nosotros.</p>
                    <p className="my-3">Gracias nuevamente por su confiar en Mateina!.</p>
                    <Button onClick={() => router.push("/")}>Volver a la tienda</Button>
                </div>
            </div>
        </div>
    );
}
 
export default Success;
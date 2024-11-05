/* eslint-disable @next/next/no-img-element */
"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Offers = () => {
    const router = useRouter()
    return (  
        <div className="max-w-6xl py-4 mx-auto sm:py-28 md:px-14 px-5 flex flex-col items-center justify-center gap-10">
            <h2 className="text-3xl">Estamos preparando sus ofertas! Vuelva pronto</h2>
            <Button onClick={() => router.push("/")}>Volver a la tienda</Button>
        </div>
    );
}
 
export default Offers;
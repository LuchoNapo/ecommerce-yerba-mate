/* eslint-disable @next/next/no-img-element */
"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Offers = () => {
    const router = useRouter()
    return (
        <div className="max-w-6xl flex flex-col items-center justify-center mx-5 md:mx-auto py-10 md:px-14 px-5   bg-gray-100 rounded-lg ">
            <h3 className="pb-4">Compartimos tu pasión por el mate</h3>
            <h2 className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:-z-20 dark:before:bg-neutral-900 before:bg-gray-200 relative md:text-4xl text-2xl mb-5">
                Somos
                <span className="ml-3 font-castor tracking-wider">
                    MATEINA
                </span>
            </h2>
            <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10">
                <div className="w-full md:w-6/12 text-balance md:text-left text-center md:text-lg">
                    <p>Somos un grupo de amigos que compartimos una pasión única: el mate. Desde siempre, nuestras mejores charlas, risas y momentos se han dado alrededor de un buen mate, y de ahí nació la idea de crear este emprendimiento. Queríamos compartir nuestra afición y acercar la experiencia de disfrutar una buena yerba a más personas. Así fue como nació nuestro proyecto de armar <span className="font-castor">Mateina</span> . Nos esforzamos en seleccionar las mejores marcas y productos para que todos puedan disfrutar del mate como nosotros lo hacemos.</p>
                    <p className="font-castor text-xl pt-5">¡Bienvenidos a nuestra comunidad de materos!</p>
                </div>

                <img className="w-full md:w-6/12 rounded-sm" src="/polaroid-ronda.png" alt="ronda-de-mate" />
            </div>
            <Button onClick={() => router.push("/")} className="mt-10">Volver a la tienda</Button>
        </div>
    );
}

export default Offers;
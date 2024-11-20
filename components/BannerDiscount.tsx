import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerDiscount = () => {
    return (
        <div className="relative p-5 sm:p-20 text-center bg-[url('/mate-parallax.webp')] bg-fixed bg-cover bg-top text-white"> 
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10">
                <h2 className="uppercase font-black text-2xl">Consigue hasta un -25%</h2>
                <h3 className="mt-3 font-semibold">-20% al gastar $100.000. Usa el código MATEICO</h3>
                <div className="max-w-md mx-auto flex justify-center gap-8 mt-5">
                    <Link href="/cart" className={buttonVariants()}>Comprar</Link>
                    <Link href="/offers" className={`text-primary ${buttonVariants({ variant: "outline" })}`}>Más información</Link>
                </div>
            </div>
        </div>
    );
};

export default BannerDiscount;

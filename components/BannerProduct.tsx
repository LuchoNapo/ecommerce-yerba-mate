
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerProduct = () => {
    return (
        <div className="relative h-[350px] lg:h-[600px] bg-[url('/yerba-mate-bg.jpg')] mt-6 bg-cover bg-center flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="mt-4 text-center relative z-10 text-white">
                <p>Sumergete en una experiencia única</p>
                <h4 className="mt-2 text-6xl font-castor tracking-wider">Yerba mate de primera</h4>
                <p className="my-2 text-lg">Despertá tus sentidos en cada cebada</p>
                <Link href="#" className={buttonVariants()}>Comprar</Link>
            </div>
        </div>
 
    );
}

export default BannerProduct;
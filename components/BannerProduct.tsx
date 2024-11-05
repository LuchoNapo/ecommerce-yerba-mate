
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerProduct = () => {
    return (
        <>
            <div className="mt-4 text-center">
                <p>Sumergete en una experiencia única</p>
                <h4 className="mt-2 text-5xl font-extrabold">Yerba mate de primera</h4>
                <p className="my-2 text-lg">Despertá tus sentidos en cada cebada</p>
                <Link href="#" className={buttonVariants()}>Comprar</Link>
            </div>
            <div className="h-[350px] lg:h-[600px] bg-[url('/yerba-mate-bg.jpg')] mt-6 bg-cover bg-center"></div>
        </>
    );
}

export default BannerProduct;
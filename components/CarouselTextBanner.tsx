"use client"
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";

export const dataCarouselTop = [
    {
        id: 1,
        title: "Envio en 24/48 hs",
        description: "Como cliente VIP, tus envios en 24/48 horas. Obtén más información y unete!",
        link: "#!"
    },
    {
        id: 2,
        title: "Consigue hasta un -25% en compras superiores a $40.000",
        description: "-20% al gastar $100.000 o -25% al gastar $150.000. Usa el código MATEICO ",
        link: "#!"
    },
    {
        id: 3,
        title: "Cuotas sin interes ",
        description: "Gozá hasta 6 cuotas sin interes.",
        link: "#!"
    },
    {
        id: 4,
        title: "Envío gratuito",
        description: "Envio gratuito a partir de compras superiores a $50.000",
        link: "#!"
    }
]


const CarouselTextBanner = () => {
    const router = useRouter()
    return (
        <div className="bg-gray-100 dark:bg-neutral-900">
            <Carousel className="w-full max-w-4xl mx-auto" plugins={[
                Autoplay({
                    delay: 2500
                })
            ]}
                opts={{
                    loop: true,
                }}>
                <CarouselContent>



                    {dataCarouselTop.map(({ id, title, description, link }) => (
                        <CarouselItem key={id} onClick={() => router.push(link)} className="cursor-pointer flex justify-center items-center text-pretty">
                            <div>
                                <Card className="shadow-none border-none bg-transparent">
                                    <CardContent className="flex flex-col justify-center p-2 items-center text-center ">
                                        <p className="sm:text-lg text-wrap dark:text-white">{title}</p>
                                        <p className="text-xs sm:text-sm text-wrap dark:text-white">{description}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}

export default CarouselTextBanner;
/* eslint-disable @next/next/no-img-element */
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface CarouselProductProps {
    images: {
        id: number,
        url: string
    }[]
}

const CarouselProduct = (props: CarouselProductProps) => {
    const { images } = props;

    return (
        <div className="md:px-16 w-2/5">
            <Carousel className="select-none">
                <CarouselContent>
                    {images.map((image) => (
                        <CarouselItem key={image.id}>
                            <img 
                            className="rounded-lg w-full" 
                            src={`${image.url}`} 
                            alt="Image product" 
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}

export default CarouselProduct;
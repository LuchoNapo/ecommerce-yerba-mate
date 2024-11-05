import BannerDiscount from "@/components/BannerDiscount";
import BannerProduct from "@/components/BannerProduct";
import CarouselTextBanner from "@/components/CarouselTextBanner";
import ChoseCategory from "@/components/ChoseCategory";
import FeaturedProducts from "@/components/FeaturedProducts";


export default function Home() {
  return (
    <main>
        <CarouselTextBanner />
        <FeaturedProducts />
        <BannerDiscount />
        <ChoseCategory />
        <BannerProduct />
    </main>
  );
}

"use client";
import React from "react";
import BannerDiscount from "@/components/BannerDiscount";
import BannerProduct from "@/components/BannerProduct";
import CarouselTextBanner from "@/components/CarouselTextBanner";
import ChoseCategory from "@/components/ChoseCategory";
import FeaturedProducts from "@/components/FeaturedProducts";


export default function Home() {
  React.useEffect(() => {
    window.alert("Welcome to Mateina Shop! Enjoy your shopping experience. The backend is under maintenance, please check back later.");
  }, []);
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

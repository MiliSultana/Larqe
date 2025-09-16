"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

export default function Banner() {
  const slides = [
    { id: 1, image: "/images/banner1.png" },
    { id: 2, image: "/images/shopLook1.png" },
    { id: 3, image: "/images/watchAndBuy3.3 (2).png" },
    { id: 4, image: "/images/watchAndBuy3.3.png" },
  ];

  const [current, setCurrent] = useState(0);
  const swiperRef = useRef(null); // ✅ store Swiper instance

  return (
    <section className="w-full mx-auto relative h-[60vh] md:h-[75vh] lg:h-[90vh]">
      {/* Background Slider */}
      <Swiper
        modules={[Autoplay, Navigation]}
        /*autoplay={{ delay: 4000, disableOnInteraction: false }}*/
        loop={true}
        speed={1000}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // ✅ save swiper instance
        onSlideChange={(swiper) => setCurrent(swiper.realIndex)} // track active
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[60vh] md:h-[75vh] lg:h-[90vh]">
              <Image
                src={slide.image}
                alt={`Banner ${slide.id}`}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Fixed Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-[48px] neue-pro tracking-[-1px] mb-4 md:mb-6 text-white">
          Autumn - Winter ‘26 Sale
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-[20px] font-neue-light text-white/90 tracking-[-0.5px] mb-6 md:mb-8 max-w-2xl">
          Browse our Top Trending: the hottest picks loved by all.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            href="/shop"
            className="bg-white text-[13px] sm:text-[14px] py-2.5 sm:py-3 px-8 sm:px-14 font-semibold neue-pro text-black text-center shadow-md hover:bg-gray-200 transition"
          >
            SHOP NOW
          </Link>
          <Link
            href="/shop"
            className="text-[13px] sm:text-[14px] py-[9px] sm:py-3 px-6 sm:px-9 font-semibold neue-pro text-white border border-white text-center hover:bg-white hover:text-black transition"
          >
            CREATE A LOOK
          </Link>
        </div>
      </div>

      {/* Custom navigation arrows */}
      <button className="custom-prev absolute left-3 top-1/2 -translate-y-1/2 bg-white px-1 py-1 lg:px-4 lg:py-6 shadow-md z-20">
        <Image
          src="/images/LeftArrow.png"
          alt="Previous"
          width={24}
          height={40}
          className="w-4 sm:w-5 md:w-6 h-auto"
        />
      </button>
      <button className="custom-next absolute right-3 top-1/2 -translate-y-1/2 bg-white px-1 py-1 lg:px-4 lg:py-6 shadow-md z-20">
        <Image
          src="/images/RightArrow.png"
          alt="Next"
          width={24}
          height={40}
          className="w-4 sm:w-5 md:w-6 h-auto"
        />
      </button>

      {/* ✅ Custom clickable dots */}
      <div className="absolute bottom-4 sm:bottom-6 w-full flex justify-center space-x-1 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => swiperRef.current?.slideToLoop(i)} // ✅ jump to slide
            className="p-0.5"
          >
            <Image
              src={i === current ? "/images/square2.png" : "/images/square1.png"}
              alt={`dot-${i}`}
              width={12}
              height={12}
              className="w-3 h-3"
            />
          </button>
        ))}
      </div>
    </section>
  );
}

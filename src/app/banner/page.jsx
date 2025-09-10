// src/components/Banner.jsx
"use client";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="w-full mx-auto relative h-[60vh] md:h-[75vh] lg:h-[90vh]">
      {/* Background Image */}
      <Image
        src="/images/banner1.png"
        alt="Banner"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="container mx-auto relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-[48px] neue-pro font-semibold tracking-[-1px] md:tracking-[-2px] mb-4 md:mb-6 text-white">
          Autumn - Winter ‘26 Sale
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-[20px] neue-pro text-white/90 tracking-[-0.5px] md:tracking-[-1px] mb-6 md:mb-8 max-w-2xl">
          Browse our Top Trending: the hottest picks loved by all.
        </p>

        {/* Buttons */}
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

      {/* Navigation Arrows */}
      <button className="absolute  top-1/2 -translate-y-1/2 bg-white px-3 sm:px-4 py-4 sm:py-6 shadow-md transition">
        <Image
          src="/images/LeftArrow.png"
          alt="Left Arrow"
          width={20}
          height={40}
          className="w-4 sm:w-5 md:w-6 h-auto"
        />
      </button>
      <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white px-3 sm:px-4 py-4 sm:py-6 shadow-md transition">
        <Image
          src="/images/RightArrow.png"
          alt="Right Arrow"
          width={20}
          height={40}
          className="w-4 sm:w-5 md:w-6 h-auto"
        />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 sm:bottom-6 w-full flex justify-center space-x-2">
        <Image src="/images/square2.png" alt="square" width={12} height={12} className="w-3 h-3" />
        <Image src="/images/square1.png" alt="square" width={12} height={12} className="w-3 h-3" />
        <Image src="/images/square1.png" alt="square" width={12} height={12} className="w-3 h-3" />
        <Image src="/images/square1.png" alt="square" width={12} height={12} className="w-3 h-3" />
      </div>
    </section>
  );
}

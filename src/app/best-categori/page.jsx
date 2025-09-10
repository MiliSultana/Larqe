"use client";
import React from "react";
import Image from "next/image";

export default function BestCategori() {
  return (
    <section className="relative bg-white w-full text-black py-12 md:py-16 lg:py-20 2xl:py-[99px]">
      {/* Image Grid */}
      {/* Section Heading */}
      <div className="container mx-auto neue-pro flex flex-col lg:flex-row items-start lg:items-center px-6 lg:px-12 2xl:px-[182px] mb-10">
        <h1 className="text-[28px] sm:text-[32px] lg:text-[40px] font-semibold tracking-[-1px] lg:tracking-[-3px] text-[#282828]">
          Best for your categories
        </h1>
        <p className="mt-3 lg:mt-0 lg:ml-6  text-[15px] sm:text-[16px] text-[#5B5B5B]/70">
          <span className="text-[16px]  sm:text-[18px] font-semibold text-[#5B5B5B]">
            23 categories
          </span>{" "}
          belonging to a total of{" "}
          <span className="text-[16px] sm:text-[18px] font-semibold text-[#5B5B5B]">
            34,592
          </span>{" "}
          products
        </p>
      </div>
      <div className="container mx-auto text-[21px] font-semibold text-[#000000] grid  sm:grid-cols-2  lg:grid-cols-4 gap-6 px-6 lg:px-12 2xl:px-[182px]">
        <div><Image
          src="/images/BestCategory1.png"
          alt="Category 1"
          width={300}
          height={300}
          className=" object-cover mx-auto"
        />
        <h1 className="mt-3 md:ml-6 ml-4 lg:ml-0">Belts</h1> </div>
        <div><Image
          src="/images/BestCategory2.png"
          alt="Category 2"
          width={300}
          height={300}
          className="object-cover mx-auto"
        />
        <h1 className="mt-3 md:ml-6 ml-4 lg:ml-0">Footware</h1>
        </div>
        <div><Image
          src="/images/BestCategory3.png"
          alt="Category 3"
          width={300}
          height={300}
          className="object-cover mx-auto "
        />
        <h1 className="mt-3 md:ml-6 ml-4 lg:ml-0">Outerware</h1>
        </div>
        <div><Image
          src="/images/BestCategory4.png"
          alt="Category 4"
          width={300}
          height={300}
          className="object-cover mx-auto"
        />
        <h1 className="mt-3 md:ml-6 ml-4 lg:ml-0">Accesories</h1>
        </div>
      </div>

      {/* Left Arrow */}
      <div className="container mx-auto ">
      <button className="absolute hidden lg:block xl:left-13 2xl:left-31 top-1/2 -translate-y-1/2 bg-[#F0F0F0]   py-[27px]   px-[15px]">
        <Image
          src="/images/LeftArrow.png"
          alt="Left Arrow"
          width={20}
          height={40}
          className="w-4  h-4"
        />
      </button>

      {/* Right Arrow */}
      <button className="absolute hidden lg:block right-0 xl:right-13 2xl:right-31 top-1/2 -translate-y-1/2 bg-[#F0F0F0]  py-[27px]   px-[15px]">
        <Image
          src="/images/RightArrow.png"
          alt="Right Arrow"
          width={20}
          height={40}
          className="w-4  h-4"
        />
      </button>
      </div>
    </section>
  );
}

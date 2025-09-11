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
      
      

      {/* Image Grid */  }
            <div className=" mx-auto grid  md:grid-cols-4 gap-6 px-6 ">
        {/* Card 1 */}
        <div className=" w-full  mx-auto">
        {/* Image with badge */}
        <div className="relative w-full h-[275px]  flex-shrink-0">
          <Image
            src="/images/BestCategory1.png"
            alt="Category 1"
            fill
            className="object-cover"
          />
      
          </div>
        </div>
      
        
      
          
      
      
        {/* Card 2 */}
        <div className=" w-full  mx-auto">
        {/* Image with badge */}
        <div className="relative w-full h-[275px] flex-shrink-0">
          <Image
            src="/images/BestCategory2.png"
            alt="Category 1"
            fill
            className="object-cover"
          />
       
        </div>
      
      
      </div>
      
        {/* Card 3 */}
         <div className=" w-full  mx-auto">
        {/* Image with badge */}
        <div className="relative w-full h-[275px] flex-shrink-0">
          <Image
            src="/images/BestCategory3.png"
            alt="Category 1"
            fill
            className="object-cover"
          />
          </div>
          </div>
       
       {/* Card 4 */}
         <div className=" w-full  mx-auto">
        {/* Image with badge */}
        <div className="relative w-full h-[275px] flex-shrink-0">
          <Image
            src="/images/BestCategory4.png"
            alt="Category 1"
            fill
            className="object-cover"
          />
          </div>
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

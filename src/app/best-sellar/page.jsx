"use client";
import React from "react";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

export default function BestSellar() {
  return (
    <section className="relative bg-white w-full text-black pt-12 md:pt-16 lg:pt-20 2xl:pt-[99px]">

      {/* Section Heading */}
<div className=" mx-auto neue-pro flex flex-col lg:flex-row items-start lg:items-center px-6 lg:px-12   xl:px-[134px] 2xl:px-[134px] mb-[35px]  lg:gap-30">
  {/* Heading */}
  <h1 className="lg:w-1/3 text-[28px] sm:text-[32px] lg:text-[40px] 2xl:lg:text-[55px] font-semibold tracking-[-1px]  text-[#282828]">
    Best Sellers
  </h1>

  {/* Paragraph */}
  <p className="font-neue-light lg:w-2/3 mt-3 lg:mt-0 text-[15px] sm:text-[18px] 2xl:sm:text-[22px]  text-[#5B5B5B]/71 ">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
  </p>
</div>

    {/* Image Grid */  }
      <div className=" mx-auto grid  md:grid-cols-3  gap-6 px-6 lg:px-12   xl:px-[134px] 2xl:px-[134px] ">
  {/* Card 1 */}
  <div className=" w-full  mx-auto">
  {/* Image with badge */}
  <div className="relative w-full h-[388px] sm:h-[500px] lg:h-[563px] flex-shrink-0">
    <Image
      src="/images/bestsellar1.png"
      alt="Category 1"
      fill
      className="object-cover"
    />

    {/* Overlay Badge */}
    <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
      <p className="uppercase text-[12px] sm:text-[13px] font-semibold bg-white px-2 sm:px-3 py-1 sm:py-[6px] text-[#00BE29]">
        24% off
      </p>
    </div>
  </div>

  {/* Product Info (below the image) */}
  <div className="relative md:mt-[-70px] mx-auto neue-pro xl:w-[90%] pl-6 py-[22px] bg-white">
    <p className="text-[16px] md:text-[18px] font-neue-light text-[#5B5B5B] md:mb-2.5">
      Short Nylon-Effect Puffer Jacket
    </p>
    <h2 className="text-[18px] font-semibold text-[#000000] md:mb-2.5">
      ₹29.90 – ₹39.90
    </h2>

    {/* Stars */}
    <div className="flex gap-2">
    <div className="flex items-center ">
      <Image src="/images/star.png" alt="star" width={15} height={14} />
      <Image src="/images/star.png" alt="star" width={15} height={14} />
      <Image src="/images/star.png" alt="star" width={15} height={14} />
      <Image src="/images/star.png" alt="star" width={15} height={14} />
      <Image src="/images/whitestar.png" alt="star" width={15} height={14} />
    </div>
    <div>
        <p className="text-[12px] font-normal text-[#5B5B5B]/71">322 Reviews</p>
    </div>
    </div>
  </div>
</div>


  {/* Card 2 */}
  <div className=" w-full  mx-auto">
  {/* Image with badge */}
  <div className="relative w-full h-[388px] sm:h-[500px] lg:h-[563px] flex-shrink-0">
    <Image
      src="/images/bestsellar2.png"
      alt="Category 1"
      fill
      className="object-cover"
    />
    {/* Overlay Badge */}
    <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
      <p className="uppercase text-[12px] sm:text-[13px] font-semibold bg-white px-3 py-1 sm:py-[6px] text-[#3D81FF] ">
        Trending
      </p>
    </div>
  </div>









  {/* Product Info (below the image) */}
  <div className="relative md:mt-[-70px] mx-auto neue-pro xl:w-[90%] pl-6 py-[22px] bg-white">
 
    <p className="text-[16px] md:text-[18px] font-neue-light text-[#5B5B5B] md:mb-2.5">
      Short Nylon-Effect Puffer Jacket
    </p>
    <h2 className="text-[18px] font-semibold text-[#000000] md:mb-2.5">
      ₹29.90 – ₹39.90
    </h2>



  {/* Add to Cart (floating above the white box) */}
  <div className="absolute -top-[56px] left-1/2 -translate-x-1/2 w-full bg-white text-[#000000] flex items-center justify-center gap-1 py-[10px] ">
    <FaPlus className="w-3 h-3" />
    <span className="uppercase text-[13.5px] font-semibold  ">Add to cart</span>
  </div>



    {/* Stars */}
    <div className="flex gap-2">
    <div className="flex items-center ">
      <Image src="/images/star.png" alt="star" width={15} height={14} />
      <Image src="/images/star.png" alt="star" width={15} height={14} />
      <Image src="/images/star.png" alt="star" width={15} height={14} />
      <Image src="/images/star.png" alt="star" width={15} height={14} />
      <Image src="/images/whitestar.png" alt="star" width={15} height={14} />
    </div>
    <div>
        <p className="text-[12px] font-normal text-[#5B5B5B]/71">322 Reviews</p>
    </div>
    </div>
  </div>
</div>

  {/* Card 3 */}
   <div className=" w-full  mx-auto">
  {/* Image with badge */}
  <div className="relative w-full h-[388px] sm:h-[500px] lg:h-[563px] flex-shrink-0">
    <Image
      src="/images/bestsellar3.png"
      alt="Category 1"
      fill
      className="object-cover"
    />
    {/* Overlay Badge */}
    <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
      <p className="uppercase text-[12px] sm:text-[13px] font-semibold bg-white px-2 sm:px-3 py-1 sm:py-[6px] text-[#00BE29] ">
        36% off
      </p>
    </div>
  </div>
  {/* Product Info (below the image) */}
  <div className="relative md:mt-[-70px] mx-auto neue-pro xl:w-[90%] pl-6 py-[22px] bg-white">
    <p className="text-[16px] md:text-[18px] font-neue-light text-[#5B5B5B] md:mb-2.5">
      Short Nylon-Effect Puffer Jacket
    </p>
    <h2 className="text-[18px] font-semibold text-[#000000] md:mb-2.5">
      ₹29.90 – ₹39.90
    </h2>

    {/* Stars */}
  <div className="flex gap-2">
    <div className="flex items-center ">
      <Image src="/images/star.png" alt="star" width={15} height={14} />
      <Image src="/images/star.png" alt="star" width={15} height={14} />
      <Image src="/images/star.png" alt="star" width={15} height={14} />
      <Image src="/images/star.png" alt="star" width={15} height={14} />
      <Image src="/images/whitestar.png" alt="star" width={15} height={14} />
    </div>
    <div>
        <p className="text-[12px] font-normal text-[#5B5B5B]/71">322 Reviews</p>
    </div>
    </div>
  </div>
</div>
</div>



      {/* Left Arrow */}
      <div className="container mx-auto ">
      <button className="absolute hidden lg:block xl:left-8 2xl:left-15 top-1/3 -translate-y-1/2 bg-[#F0F0F0]   py-[27px]   px-[15px]">
        <Image
          src="/images/LeftArrow.png"
          alt="Left Arrow"
          width={20}
          height={40}
          className="w-4  h-4"
        />
      </button>

      {/* Right Arrow */}
      <button className="absolute hidden lg:block right-0 xl:right-8 2xl:right-15  top-1/3 -translate-y-1/2 bg-[#F0F0F0]  py-[27px]   px-[15px]">
        <Image
          src="/images/RightArrow.png"
          alt="Right Arrow"
          width={20}
          height={40}
          className="w-4  h-4"
        />
      </button>
      </div>
      {/* Pagination Dots */}
            <div className=" mt-[46px] mb-[41px]  sm:bottom-6 w-full flex justify-center space-x-3">
              <Image src="/images/Rectangle1.png" alt="square" width={12} height={12} className="w-3 h-3" />
              <Image src="/images/Rectangle1.png" alt="square" width={12} height={12} className="w-3 h-3" />
              <Image src="/images/Rectangle2.png" alt="square" width={12} height={12} className="w-3 h-3" />
              <Image src="/images/Rectangle1.png" alt="square" width={12} height={12} className="w-3 h-3" />
            </div>

            <div className=" mx-auto  gap-6 px-6 lg:px-12  xl:px-[134px] 2xl:px-[134px] pb-9">
  <div className="flex flex-col md:flex-row justify-center gap-6">
    {/* Banner 1 */}
    <div className="relative w-full md:w-1/2 h-[309px] overflow-hidden ">
      <Image
        src="/images/new-session.png"
        alt="New Session"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 flex flex-col neue-pro px-[30px] text-white bg-black/10">
        <h3 className="text-sm mt-[30px] md:text-[15px] mb-2 font-medium tracking-wide">
          New Session
        </h3>
        <h1 className="text-lg md:text-[30px] font-semibold mb-2 leading-snug lg:tracking-[-1px]">
          Show your best <br /> luxury of your life
        </h1>
        <h2 className="text-xs md:text-[18px] mb-[60px] font-neue-light">
          Don’t miss the opportunity
        </h2>
        <div>
          <button className="px-6 py-3 text-xs md:text-sm font-semibold uppercase bg-white text-[#151515]">
            Shop Now
          </button>
        </div>
      </div>
    </div>

    {/* Banner 2 */}
    <div className="relative w-full md:w-1/2 h-[309px] overflow-hidden ">
      <Image
        src="/images/style-guide.png"
        alt="Style Guide"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 flex flex-col neue-pro px-[30px] text-[#565656] bg-black/10">
        <h3 className="text-sm mt-[30px] md:text-[15px] mb-2 font-medium tracking-wide">
          Style Guide
        </h3>
        <h1 className="text-lg md:text-[30px] text-black font-semibold mb-2 leading-snug lg:tracking-[-1px] ">
          How well do you know <br /> your fashion sense?
        </h1>
        <h2 className="text-xs md:text-[18px] mb-[60px] text-[#6E6E6E] font-neue-light">
          Don’t miss the opportunity
        </h2>
        <div>
          <button className="px-8 py-3 text-xs md:text-sm font-semibold uppercase bg-black text-white">
            Explore
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="w-full  text-white">
   <div className="px-6 lg:px-12 xl:px-[134px] ">
  <div className=" bg-black mx-auto neue-pro flex flex-col lg:flex-row items-center justify-between gap-6 py-8 px-[23px] ">
   
    {/* Left Text */}
    <h1 className=" text-sm md:text-base lg:text-[18px] 2xl:text-2xl font-semibold text-center lg:text-left">
      50% discount on your dream clothes :
    </h1>

    {/* Timer */}
    <div className=" flex items-center sm:gap-2 text-center">
      <div className="px-4 py-2 bg-white text-black text-[20px] md:text-[25px] tracking-[-1px] font-semibold ">
        31
      </div>
      <span className="px-2 font-bold text-[25px] tracking-[-2px]">:</span>
      <div className="px-4 py-2 bg-white text-black text-[20px] md:text-[25px] tracking-[-1px] font-semibold ">
        12
      </div>
      <span className="px-2 font-bold text-[25px] tracking-[-2px]">:</span>
      <div className="px-4 py-2 bg-white text-black text-[20px] md:text-[25px] tracking-[-1px] font-semibold  ">
        03
      </div>
      <span className="px-2 font-bold text-[25px] tracking-[-2px]">:</span>
      <div className="px-4 py-2 bg-white text-black text-[20px] md:text-[25px] tracking-[-1px] font-semibold  ">
        12
      </div>
    </div>

    {/* Right Text */}
    <h2 className=" text-xs md:text-sm lg:text-[16px] text-center font-neue-light lg:text-left 2xl:text-2xl xl:max-w-[35%]   ">
      Vivamus finibus, est condimentum feugiat aliquet, felis sem euismod risus
    </h2>
    </div>
  </div>
</div>


    </section>
    
  );
}

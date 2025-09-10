"use client";
import React from "react";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

export default function BestSellar() {
  return (
    <section className="relative bg-white w-full text-black pt-12 md:pt-16 lg:pt-20 2xl:pt-[99px]">

      {/* Section Heading */}
<div className="container mx-auto neue-pro flex flex-col lg:flex-row items-start lg:items-center px-6 lg:px-12 2xl:px-[182px] mb-[35px]  lg:gap-30">
  {/* Heading */}
  <h1 className="lg:w-1/3 text-[28px] sm:text-[32px] lg:text-[40px] font-semibold tracking-[-1px] lg:tracking-[-3px] text-[#282828]">
    Best Sellers
  </h1>

  {/* Paragraph */}
  <p className="lg:w-2/3 mt-3 lg:mt-0 text-[15px] sm:text-[18px] font-normal text-[#5B5B5B]/71 leading-relaxed">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
  </p>
</div>

    {/* Image Grid */  }
      <div className="container mx-auto grid  lg:grid-cols-3 gap-6 px-6 lg:px-12 2xl:px-[182px]">
  {/* Card 1 */}
  <div className=" w-full  mx-auto">
  {/* Image with badge */}
  <div className="relative w-full h-[450px] sm:h-[500px] lg:h-[563px] flex-shrink-0">
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
  <div className="relative lg:mt-[-70px] mx-auto neue-pro 2xl:w-[335px] pl-6 py-[22px] bg-white">
    <p className="text-[16px] md:text-[18px] font-normal text-[#5B5B5B] md:mb-2.5">
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
  <div className="relative w-full h-[450px] sm:h-[500px] lg:h-[563px] flex-shrink-0">
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
  <div className="relative lg:mt-[-70px] mx-auto neue-pro 2xl:w-[335px] pl-6 py-[22px] bg-white">
 
    <p className="text-[16px] md:text-[18px] font-normal text-[#5B5B5B] md:mb-2.5">
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
  <div className="relative w-full h-[450px] sm:h-[500px] lg:h-[563px] flex-shrink-0">
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
  <div className="relative lg:mt-[-70px] mx-auto neue-pro 2xl:w-[335px] pl-6 py-[22px] bg-white">
    <p className="text-[16px] md:text-[18px] font-normal text-[#5B5B5B] md:mb-2.5">
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

"use client";
import React from "react";
import Image from "next/image";

import { FaPlus } from "react-icons/fa";

export default function WatchBuy() {
  return (
    <section className="relative bg-white w-full text-black pt-12 md:pt-16 lg:pt-20 2xl:pt-[99px]">

      {/* Section Heading */}
<div className=" mx-auto neue-pro flex flex-col lg:flex-row items-start lg:items-center px-6 lg:px-12   xl:px-[134px] 2xl:px-[134px] mb-[35px]  lg:gap-30">
  {/* Heading */}
  <h1 className="lg:w-1/3 text-[28px] sm:text-[32px] lg:text-[40px] 2xl:lg:text-[55px] font-semibold tracking-[-1px]  text-[#282828]">
    Watch & Buy
  </h1>

  {/* Paragraph */}
  <p className="font-neue-light lg:w-2/3 mt-3 lg:mt-0 text-[15px] sm:text-[18px] 2xl:sm:text-[22px]  text-[#5B5B5B]/71 ">
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
    </p>
</div>

    {/* Image Grid */  }
     <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:px-12   xl:px-[134px] 2xl:px-[134px]">
  {/* Card 1 */}
  <div className=" w-full  mx-auto">
  {/* Image with badge */}
  <div className="relative w-full h-[388px]">
  <Image
    src="/images/watchAndBuy1.png"
    alt="Category 1"
    fill
    className="object-cover"
  />

    {/* Overlay Badge */}
   
  </div>

  {/* Product Info (below the image) */}
<div className=" mt-[-70px] relative flex items-center gap-3  bg-black px-3  py-3 ">
  {/* Thumbnail */}
  <div className="flex-shrink-0">
    <Image
      src="/images/watchAndBuy1.1.png"
      alt="Category 1"
      width={63}
      height={63}
      className="h-[50px] w-[50px] sm:h-[63px] sm:w-[63px] object-cover "
    />
  </div>

  {/* Product Details */}
  <div className="flex flex-col justify-center text-white neue-pro">
    <p className="text-xs sm:text-[12px] font-neue-light text-[#FFFFFF] mb-1 sm:mb-2">
      Short Nylon-Effect Puffer Jacket
    </p>
    <h2 className="text-base sm:text-lg  font-semibold">
      ₹29.90 – ₹39.90
    </h2>
  </div>
</div>
</div>


  {/* Card 2 */}
  <div className=" w-full  mx-auto">
  {/* Image with badge */}
  <div className="relative w-full h-[388px] flex-shrink-0">
    <Image
      src="/images/watchAndBuy2.png"
      alt="Category 1"
      fill
      className="object-cover"
    />
    {/* Overlay Badge */}
    
  </div>









    {/* Product Info (below the image) */}
<div className=" mt-[-70px] relative flex items-center gap-3  bg-black px-3  py-3 ">
  {/* Thumbnail */}
  <div className="flex-shrink-0">
    <Image
      src="/images/watchAndBuy2.2.png"
      alt="Category 1"
      width={63}
      height={63}
      className="h-[50px] w-[50px] sm:h-[63px] sm:w-[63px] object-cover "
    />
  </div>

  {/* Product Details */}
  <div className="flex flex-col justify-center text-white neue-pro">
    <p className="text-xs sm:text-[12px] font-neue-light text-[#FFFFFF] mb-1 sm:mb-2">
      Short Nylon-Effect Puffer Jacket
    </p>
    <h2 className="text-base sm:text-lg  font-semibold">
      ₹29.90 – ₹39.90
    </h2>
  </div>
</div>

</div>

  {/* Card 3 */}
   <div className=" w-full  mx-auto">
  {/* Image with badge */}
  <div className="relative w-full h-[388px] flex-shrink-0">
    <video
      src="/images/watchAndBuy3.mp4"
      className="object-cover w-full h-full"
      autoPlay
      loop
      muted
      playsInline
    />
    {/* Overlay Badge */}
   
  </div>
  
  {/* Product Info (below the image) */}
<div className=" mt-[-70px] relative flex items-center gap-3  bg-black px-3  py-3 ">
  {/* Thumbnail */}
  <div className="flex-shrink-0">
    <Image
      src="/images/watchAndBuy3.3.png"
      alt="Category 1"
      width={63}
      height={63}
      className="h-[50px] w-[50px] sm:h-[63px] sm:w-[63px] object-cover "
    />
  </div>

  {/* Product Details */}
  <div className="flex flex-col justify-center text-white neue-pro">
    <p className="text-xs sm:text-[12px] font-neue-light text-[#FFFFFF] mb-1 sm:mb-2">
      Short Nylon-Effect Puffer Jacket
    </p>
    <h2 className="text-base sm:text-lg  font-semibold">
      ₹29.90 – ₹39.90
    </h2>
  </div>
</div>


</div>
{/* Card 4 */}
   <div className=" w-full  mx-auto">
  {/* Image with badge */}
  <div className="relative w-full h-[388px] flex-shrink-0">
    <Image
      src="/images/watchAndBuy4.png"
      alt="Category 1"
      fill
      className="object-cover"
    />
    {/* Overlay Badge */}
   
  </div>
   {/* Product Info (below the image) */}
<div className=" mt-[-70px] relative flex items-center gap-3  bg-black px-3  py-3 ">
  {/* Thumbnail */}
  <div className="flex-shrink-0">
    <Image
      src="/images/watchAndBuy4.4.png"
      alt="Category 1"
      width={63}
      height={63}
      className="h-[50px] w-[50px] sm:h-[63px] sm:w-[63px] object-cover "
    />
  </div>

  {/* Product Details */}
  <div className="flex flex-col justify-center text-white neue-pro">
    <p className="text-xs sm:text-[12px] font-neue-light text-[#FFFFFF] mb-1 sm:mb-2">
      Short Nylon-Effect Puffer Jacket
    </p>
    <h2 className="text-base sm:text-lg  font-semibold">
      ₹29.90 – ₹39.90
    </h2>

   {/* Add to Cart floating at bottom of image */}
    <div className="absolute bottom-25  md:bottom-30 left-1/2 -translate-x-1/2 w-[90%] bg-white text-black flex items-center justify-center gap-1 py-[10px] ">
      <FaPlus className="w-3 h-3" />
      <span className="uppercase text-[13.5px] font-semibold">Add to cart</span>
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
<div className=" mx-auto neue-pro items-start lg:items-center px-6 lg:px-12   xl:px-[134px] 2xl:px-[134px] mb-[35px]  ">
         <div className="flex flex-col lg:flex-row gap-4 xl:gap-6 neue-pro">
                  {/* Left Side - Women */}
                  <div className="relative w-full lg:w-1/2 h-[400px] sm:h-[500px] lg:h-[611px] flex-shrink-0 overflow-hidden">
                    <Image
                      src="/images/watchAndBuy3.1.png"
                      alt="Women"
                      fill
                      className="object-cover"
                    />
                     <div className="absolute inset-0 flex flex-col neue-pro px-[30px]  bg-black/10">
        <h3 className="text-sm mt-[30px] text-[#565656] md:text-[15px] mb-2 font-neue-light tracking-wide">
          Winter Collection
        </h3>
        <h1 className="text-lg md:text-[30px] text-[#000000] font-semibold mb-2 leading-snug lg:tracking-[-1px]">
          Big Patterns are back <br /> in fashion 
        </h1>
        <h2 className="text-xs md:text-[18px] mb-[28px] text-[#6E6E6E] font-neue-light">
         Dont miss the opportunity
        </h2>
        <div>
          <button className="px-6 py-3 text-xs md:text-sm font-semibold uppercase bg-white text-[#000000]">
            Shop Now
          </button>
        </div>
      </div>
                  </div>
        
                  {/* Right Side - Men + Footwear + Accessories */}
                  <div className="flex flex-col gap-4 lg:gap-6 w-full">
                    {/* Men */}
                    <div className="relative w-full h-[250px] sm:h-[300px] lg:h-[275px] overflow-hidden">
                      <Image
                        src="/images/watchAndBuy3.2.png"
                        alt="Men"
                        fill
                        className="object-cover"
                      />
                         <div className="absolute inset-0 flex flex-col neue-pro px-[30px] text-[#565656] bg-black/10">
        <h3 className="text-sm mt-[30px] text-[#565656] md:text-[15px] mb-2 font-neue-light tracking-wide">
          New Season
        </h3>
        <h1 className="text-lg md:text-[30px] text-[#000000] font-semibold mb-2 leading-snug lg:tracking-[-1px] ">
         The Latest Mens <br /> trends this season
        </h1>
        <h2 className="text-xs md:text-[18px] mb-[28px] text-[#6E6E6E] font-neue-light">
          Don’t miss the opportunity
        </h2>
        <div>
          <button className="px-8 py-3 text-xs md:text-sm font-semibold uppercase bg-black text-white">
            Explore
          </button>
        </div>
      </div>
                    </div>
        
                    {/* Bottom row - Footwear + Accessories */}
                    <div className="flex flex-col sm:flex-row gap-4 xl:gap-6 w-full">
                      {/* Footwear */}
                      <div className="relative w-full h-[250px] sm:h-[300px] lg:h-[311px] overflow-hidden">
                        <Image
                          src="/images/watchAndBuy3.3 (2).png"
                          alt="Footwear"
                          fill
                          className="object-cover"
                        />
                          <div className="absolute inset-0 flex flex-col neue-pro px-[30px] text-white bg-black/10">
         <h3 className="text-sm mt-[30px] text-[#565656] md:text-[15px] mb-2 font-neue-light tracking-wide">
          New Season
        </h3>
        <h1 className="text-lg md:text-[30px] text-[#000000] font-semibold mb-2 leading-snug lg:tracking-[-1px] ">
        Show your styles with <br />our new shoes
        </h1>
        <h2 className="text-xs md:text-[18px] mb-[28px] text-[#6E6E6E] font-neue-light">
          Don’t miss the opportunity
        </h2>
        <div>
          <button className="px-6 py-3 text-xs md:text-sm font-semibold uppercase bg-white text-[#151515]">
          View Collection
          </button>
        </div>
      </div>
                      </div>
        
                   
                    </div>
                  </div>
                </div>
                </div>
                
            </section>
  );
}

"use client";
import React from "react";
import Image from "next/image";

import { FaPlus } from "react-icons/fa";


export default function WinterEssential() {
return (
    <section className="relative bg-white w-full text-black pt-12 md:pt-16 lg:pt-20 2xl:pt-[99px]">

      {/* Section Heading */}
<div className=" mx-auto neue-pro flex flex-col lg:flex-row items-start lg:items-center px-6 lg:px-12   xl:px-[134px] 2xl:px-[134px] mb-[35px]  lg:gap-30">
  {/* Heading */}
  <h1 className="lg:w-1/3 text-[28px] sm:text-[32px] lg:text-[40px] 2xl:lg:text-[55px] font-semibold tracking-[-1px]  text-[#282828]">
 Winter Essentials
  </h1>

  {/* Paragraph */}
  <p className="font-neue-light lg:w-2/3 mt-3 lg:mt-0 text-[15px] sm:text-[18px] 2xl:sm:text-[22px]  text-[#5B5B5B]/71 ">
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
    </p>
</div>

<div className=" mx-auto neue-pro items-start lg:items-center px-6 lg:px-12   xl:px-[134px] 2xl:px-[134px]   ">
         <div className="flex flex-col lg:flex-row gap-4 xl:gap-6 neue-pro">
                  {/* Left Side - Women */}
                  <div className="relative w-full lg:w-1/2 h-[300px]  md:h-[538px] flex-shrink-0 overflow-hidden">
                    <Image
                      src="/images/winterEssential1.png"
                      alt="Women"
                      fill
                      className="object-cover"
                    />
                     <div className="absolute inset-0 flex flex-col neue-pro px-[30px] text-white  bg-black/10">
        <h3 className="text-sm mt-[30px]  md:text-[15px] mb-2 font-neue-light tracking-wide">
          Winter Collection
        </h3>
        <h1 className="text-lg md:text-[30px]  font-semibold mb-2 leading-snug ">
          Your Winter Season <br />packed here
        </h1>
        <h2 className="text-xs md:text-[18px] mb-[28px] font-neue-light">
         Dont miss the opportunity
        </h2>
        <div>
          <button className="px-6 py-3 text-xs md:text-sm font-semibold uppercase bg-white text-[#000000]">
       Shop collection
          </button>
        </div>
      </div>
                  </div>
        
                {/* Bottom row - Footwear + Accessories */}
<div className="flex flex-col sm:flex-row gap-4 xl:gap-6 w-full">
  {/* Footwear */}
<div className="w-full">
  {/* Image */}
  <div className="relative w-full h-[250px] sm:h-[300px] lg:h-[413px] overflow-hidden">
    <Image
      src="/images/winterEssential2.png"
      alt="Footwear"
      fill
      className="object-cover"
    />
  </div>

  {/* Product Info (separate, below image) */}
  <div className="mx-auto neue-pro px-6 py-4 bg-white">
    <p className="text-[14px] sm:text-[16px] md:text-[15px] font-neue-light text-[#5B5B5B] mb-2">
      Short Nylon-Effect Puffer Jacket
    </p>
    <h2 className="text-[16px] sm:text-[18px] font-semibold text-[#000000] mb-2">
      ₹29.90 – ₹39.90
    </h2>

    {/* Stars */}
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        <Image src="/images/star.png" alt="star" width={15} height={14} />
        <Image src="/images/star.png" alt="star" width={15} height={14} />
        <Image src="/images/star.png" alt="star" width={15} height={14} />
        <Image src="/images/star.png" alt="star" width={15} height={14} />
        <Image src="/images/whitestar.png" alt="star" width={15} height={14} />
      </div>
      <p className="text-[12px] font-normal text-[#5B5B5B]/71">322 Reviews</p>
    </div>
  </div>
</div>



  {/* Accessories */}
<div className="w-full">
  {/* Image */}
  <div className="relative w-full h-[250px] sm:h-[300px] lg:h-[413px] overflow-hidden">
    <Image
      src="/images/winterEssential3.png"
      alt="Footwear"
      fill
      className="object-cover"
    />
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-white text-black flex items-center justify-center gap-1 py-[10px] ">
      <FaPlus className="w-3 h-3" />
      <span className="uppercase text-[13.5px] neue-pro font-semibold">Add to cart</span>
    </div>
  </div>
     {/* Product Info (separate, below image) */}
  <div className="mx-auto neue-pro px-6 py-4 bg-white">
    <p className="text-[14px] sm:text-[16px] md:text-[15px] font-neue-light text-[#5B5B5B] mb-2">
      Short Nylon-Effect Puffer Jacket
    </p>
    <h2 className="text-[16px] sm:text-[18px] font-semibold text-[#000000] mb-2">
      ₹29.90 – ₹39.90
    </h2>
    
    

    {/* Stars */}
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        <Image src="/images/star.png" alt="star" width={15} height={14} />
        <Image src="/images/star.png" alt="star" width={15} height={14} />
        <Image src="/images/star.png" alt="star" width={15} height={14} />
        <Image src="/images/star.png" alt="star" width={15} height={14} />
        <Image src="/images/whitestar.png" alt="star" width={15} height={14} />
      </div>
      <p className="text-[12px] font-normal text-[#5B5B5B]/71">322 Reviews</p>
    </div>
  </div>

  </div>
</div>

                  </div>
                </div>
                
                 
                     
<div className=" mx-auto  gap-6 px-6 lg:px-12  xl:px-[134px] 2xl:px-[134px] pb-9">
  <div className="flex flex-col md:flex-row justify-center gap-6">
    {/* Banner 1 */}
    <div className="relative w-full h-[300px] sm:h-[300px] md:h-[400px] 2xl:h-[500px] overflow-hidden mt-[99px]">
      <Image
        src="/images/watchAndBuyBag1.png"
        alt="New Session"
        fill
        className="object-cover"
      />
  <div className="absolute inset-0 flex flex-col neue-pro px-[30px] text-white  bg-black/10">
        <h3 className="text-sm mt-[30px]  md:text-[15px] mb-2 font-neue-light tracking-wide">
      Leather Collection
        </h3>
        <h1 className="text-lg md:text-[30px]  font-semibold mb-2 leading-snug ">
         Get Dressed Like You <br /> Mean It
        </h1>
        <h2 className="text-xs md:text-[18px] mb-[28px] font-neue-light">
         Dont miss the opportunity
        </h2>
        <div>
          <button className="px-6 py-3 text-xs md:text-sm font-semibold uppercase bg-white text-[#000000]">
       Shop now
          </button>
        </div>
      </div>
    </div>
        </div>
        </div>

    {/* Image Grid */  }
     <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:px-12   xl:px-[134px] 2xl:px-[134px]">
  {/* Card 1 */}
<div className="w-full mx-auto">
  {/* Image with Add to Cart */}
  <div className="relative w-full h-[318px]">
    <Image
      src="/images/watchAndBuyBag1.1.png"
      alt="Category 1"
      fill
      className="object-cover"
    />
     <div className="absolute inset-0 flex flex-col font-neue-light px-[9px] pt-4 text-white  bg-black/10">
        <p>Neo Neuf - Caramel</p>
        <h2 className="text-xs md:text-[18px] mb-[28px] font-neue-light">
        ₹29.90 – ₹39.90
        </h2>
        <div>
          
        </div>
      </div>

    {/* Add to Cart floating at bottom of image */}
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-white text-black flex items-center justify-center gap-1 py-[10px] ">
      <FaPlus className="w-3 h-3" />
      <span className="uppercase text-[13.5px] neue-pro font-semibold">Add to cart</span>
    </div>
  </div>
</div>



  {/* Card 2 */}
  <div className=" w-full  mx-auto">
  {/* Image with badge */}
  <div className="relative w-full h-[318px] flex-shrink-0">
    <Image
      src="/images/watchAndBuyBag1.2.png"
      alt="Category 1"
      fill
      className="object-cover"
    />
    {/* Overlay Badge */}
    
  </div>

  

</div>

  {/* Card 3 */}
 
  <div className=" w-full  mx-auto">
  {/* Image with badge */}
  <div className="relative w-full h-[318px] flex-shrink-0">
    <Image
      src="/images/watchAndBuyBag1.3.png"
      alt="Category 1"
      fill
      className="object-cover"
    />
    {/* Overlay Badge */}
    
  </div>

    {/* Product Info (below the image) */}


</div>
{/* Card 4 */}
   <div className=" w-full  mx-auto">
  {/* Image with badge */}
  <div className="relative w-full h-[318px] flex-shrink-0">
    <Image
      src="/images/watchAndBuyBag1.4.png"
      alt="Category 1"
      fill
      className="object-cover"
    />
    {/* Overlay Badge */}
   
  </div>


  


  </div>
</div>





  





   

            </section>
  );
}
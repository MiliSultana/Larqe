import React from "react";
import Image from "next/image";
import Link from "next/link";





export default function ShopLook() {
  return (
    <section className=" bg-white w-full text-black pt-12 md:pt-16 lg:pt-20 2xl:pt-[99px]">

      {/* Section Heading */}
<div className=" mx-auto  justify-center text-start md:text-center px-6 lg:px-12   xl:px-[134px] 2xl:px-[134px]  ">
  {/* Heading */}
  <h1 className="neue-pro text-[28px] sm:text-[32px] lg:text-[40px] 2xl:lg:text-[55px] tracking-[-1px]  text-[#282828]">
    Shop The Look
  </h1>

  {/* Paragraph */}
  <p className="mt-5 mb-[33px] lg:px-[200px] font-neue-light   text-[15px] sm:text-[18px] 2xl:sm:text-[22px]  text-[#5B5B5B]/71 ">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida
  </p>

<div className=" flex flex-cols-3 px-6 justify-center text-[#BCBCBC] text-[16px] sm:text-[18px] lg:text-[20px] neue-pro">
  {/* Button 1 */}
  
</div>


</div>
<div className=" mx-auto  gap-6 px-6 lg:px-12  xl:px-[134px] 2xl:px-[134px] pb-9">
  <div className="flex flex-col md:flex-row justify-center gap-6">
    {/* Banner 1 */}
    <div className="relative w-full h-[430px] sm:h-[500px] md:h-[584px] 2xl:h-[700px] overflow-hidden mt-[99px]">
      <Image
        src="/images/shoplook.png"
        alt="New Session"
        fill
        className="object-cover"
      />
   <div className="relative w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/deal-bg.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 flex justify-end  px-2 sm:px-10 lg:px-[60px] 2xl:px-[100px] bg-black/30">
        
        {/* Content Wrapper */}
        <div className="max-w-lg w-full text-left  md:mt-0">
          
          {/* Label */}
          <p className="text-sm md:text-base 2xl:text-2xl mt-[30px] sm:mt-[49px] font-neue-light text-[#565656]">
            Deal of The Week
          </p>
          
          {/* Heading */}
          <h1 className="neue-pro mb-[9px] text-lg sm:text-2xl 2xl:text-5xl md:text-[30px] text-black font-semibold leading-snug lg:tracking-[-1px]">
            Roland Grand White <br /> short checkered T-shirt
          </h1>
          
          {/* Description */}
          <p className="text-sm sm:text-base 2xl:text-2xl md:text-lg font-neue-light text-[#6E6E6E] mb-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna.
          </p>
          
          {/* Timer */}
          <div className="flex items-center neue-pro justify-start gap-2 sm:gap-3 mb-10">
            <div className="px-4 py-2 bg-white text-black text-[18px] sm:text-[20px] md:text-[25px] tracking-[-1px] font-semibold ">
              31
            </div>
            <span className="font-bold text-black text-[20px] sm:text-[22px] md:text-[25px] tracking-[-2px]">:</span>
            <div className="px-4 py-2 bg-white text-black text-[18px] sm:text-[20px] md:text-[25px] tracking-[-1px] font-semibold ">
              12
            </div>
            <span className="font-bold text-black text-[20px] sm:text-[22px] md:text-[25px] tracking-[-2px]">:</span>
            <div className="px-4 py-2 bg-white text-black text-[18px] sm:text-[20px] md:text-[25px] tracking-[-1px] font-semibold ">
              03
            </div>
            <span className="font-bold text-black text-[20px] sm:text-[22px] md:text-[25px] tracking-[-2px]">:</span>
            <div className="px-4 py-2 bg-white text-black text-[18px] sm:text-[20px] md:text-[25px] tracking-[-1px] font-semibold ">
              12
            </div>
          </div>
          
          {/* CTA Button */}
          <button className="mb-[40px] 2xl:mb-[30px] sm:mb-[124px] px-[34px] py-[10px] 2xl:px-[50px] 2xl:py-[25px] text-xs sm:text-sm md:text-[13.5px] 2xl:text-2xl font-semibold uppercase bg-black text-white  shadow  ">
            Shop Now
          </button>
          
          {/* Expiry Note */}
          <h3 className="font-neue-light text-xs sm:text-sm 2xl:text-2xl md:text-[15px] text-[#333] ">
            Limited time offer. The deal expires on{" "}
            <span className="font-semibold">September 10, 2025</span> — HURRY UP!
          </h3>
        </div>
      </div>
    </div>
    </div>
        </div>
        </div>
</section>
  );
}
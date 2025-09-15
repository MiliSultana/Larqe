import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";




export default function LatestDeals() {
  return (
 <section className="relative bg-white w-full text-black pt-12 md:pt-16 lg:pt-20 2xl:pt-[99px]">

  {/* Section Heading */}
  <div className="mx-auto neue-pro flex flex-col lg:flex-row items-start lg:items-center px-6 lg:px-12 xl:px-[134px] 2xl:px-[134px] lg:gap-30">
    {/* Heading */}
    <h1 className="lg:w-1/3 text-[28px] sm:text-[32px] lg:text-[40px] 2xl:text-[55px] font-semibold tracking-[-1px] text-[#282828]">
      Don’t Miss the Latest Deals
    </h1>

    {/* Paragraph */}
    <p className="font-neue-light lg:w-2/3 mt-3 lg:mt-0 text-[15px] sm:text-[18px] 2xl:sm:text-[22px]  text-[#5B5B5B]/71 ">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
    </p>
  </div>

  {/* Two divs after paragraph */}
  <div className="mx-auto flex flex-col lg:flex-row gap-6 px-6 lg:px-12 xl:px-[134px] 2xl:px-[134px] pt-[48px] pb-[33px]">
    {/* Left Box */}
<div className="w-full md:border  md:border-black shadow-md p-4 bg-white">
      {/* Wrapper: Image + Content */}
      <div className="flex flex-col md:flex-row gap-6  items-start">
        
        {/* Product Image (45%) */}
        <div className="relative mx-auto md:mx-0 w-full">
          <Image
            src="/images/latesDeals1.png"
            alt="New Session"
            height={423}
            width={235}
            className="object-cover w-full h-[250px] sm:h-[320px] md:h-[422px]"
          />

          {/* Overlay Badge */}
          <div className="absolute top-3 left-2 sm:left-3">
            <p className="uppercase text-[10px] sm:text-[12px] md:text-[13px] font-semibold bg-white px-2 sm:px-[10px] py-1 sm:py-[6px] text-[#00BE29] rounded">
              24% off
            </p>
          </div>
        </div>

        {/* Product Info (55%) */}
        <div className=" neue-pro flex flex-col  justify-center text-center md:text-left mt-4 md:mt-0">
          
          {/* Small Title */}
          <p className="text-[14px] sm:text-[16px] md:text-[17px] font-neue-light text-[#5B5B5B] mb-2 md:mb-4">
            Short Nylon-Effect Puffer Jacket
          </p>

          {/* Price */}
          <h2 className="text-[16px] sm:text-[18px] font-semibold text-black mb-2 md:mb-4">
            ₹29.90 – ₹39.90
          </h2>

          {/* Stars + Reviews */}
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2 md:mb-4">
            <div className="flex items-center">
              {[1, 2, 3, 4].map((_, i) => (
                <Image
                  key={i}
                  src="/images/star.png"
                  alt="star"
                  width={15}
                  height={14}
                />
              ))}
              <Image
                src="/images/whitestar.png"
                alt="star"
                width={15}
                height={14}
              />
            </div>
            <p className="text-[12px] sm:text-[13px] md:text-[10px] font-normal text-[#5B5B5B]/71">
              322 Reviews
            </p>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-[13px] 2xl:text-lg font-neue-light text-[#5B5B5BB5]/71 mb-2 md:mb-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Heading */}
          <h1 className="text-[15px] text-black font-semibold leading-snug mb-2 md:mb-4">
            Offer ends in
          </h1>

          {/* Timer */}
          <div className="flex items-center justify-center md:justify-start mb-2 md:mb-4">
            {["31", "12", "03", "12"].map((time, i) => (
              <div key={i} className="flex items-center">
                <div className="xl:px-[10px] xl:py-[10px] md:px-[6px]  bg-gray-100 text-black text-[15px] sm:text-[20px] md:text-[15px] lg:text-[20px]  xl:text-[25px]">
                  {time}
                </div>
                {i < 3 && (
                  <span className="font-bold text-black text-[15px] sm:text-[20px] md:text-[15px] lg:text-[20px]  xl:text-[25px] xl:px-[10px] lg:px-[5px]">
                    :
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Expiry Note */}
          <h3 className="font-neue-light text-xs sm:text-sm md:text-[15px] text-[#333] mb-2 md:mb-4">
            Available : <span className="text-green-500">12</span> &nbsp; Sold :{" "}
            <span className="text-red-500">256</span>
          </h3>

          {/* CTA Button */}
          <button className="flex items-center justify-center md:justify-start">
            <span className="flex items-center gap-2 bg-black text-white px-6 py-3 ">
              <FaPlus className="w-2 h-2" />
              <span className="uppercase text-[13px] sm:text-[14px] md:text-[10px] font-semibold">
                Add to cart
              </span>
            </span>
          </button>
        </div>
      </div>
    </div>

    {/* Right Box */}
  <div className="w-full md:border  md:border-black shadow-md p-4 bg-white">
      {/* Wrapper: Image + Content */}
      <div className="flex flex-col md:flex-row gap-6  items-start">
        
        {/* Product Image (45%) */}
        <div className="relative mx-auto md:mx-0 w-full">
          <Image
            src="/images/latesDeals2.png"
            alt="New Session"
            height={423}
            width={235}
            className="object-cover w-full h-[250px] sm:h-[320px] md:h-[422px]"
          />

          {/* Overlay Badge */}
          <div className="absolute top-3 left-2 sm:left-3">
            <p className="uppercase text-[10px] sm:text-[12px] md:text-[13px] font-semibold bg-white px-2 sm:px-[10px] py-1 sm:py-[6px] text-[#00BE29] rounded">
              18% off
            </p>
          </div>
        </div>

        {/* Product Info (55%) */}
        <div className=" neue-pro flex flex-col  justify-center text-center md:text-left mt-4 md:mt-0">
          
          {/* Small Title */}
          <p className="text-[14px] sm:text-[16px] md:text-[17px] font-neue-light text-[#5B5B5B] mb-4">
            Short Nylon-Effect Puffer Jacket
          </p>

          {/* Price */}
          <h2 className="text-[16px] sm:text-[18px] font-semibold text-black mb-4">
            ₹29.90 – ₹39.90
          </h2>

          {/* Stars + Reviews */}
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <div className="flex items-center">
              {[1, 2, 3, 4].map((_, i) => (
                <Image
                  key={i}
                  src="/images/star.png"
                  alt="star"
                  width={15}
                  height={14}
                />
              ))}
              <Image
                src="/images/whitestar.png"
                alt="star"
                width={15}
                height={14}
              />
            </div>
            <p className="text-[12px] sm:text-[13px] md:text-[10px] font-normal text-[#5B5B5B]/71">
              322 Reviews
            </p>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-[13px] 2xl:text-lg font-neue-light text-[#5B5B5BB5]/71 mb-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Heading */}
          <h1 className="text-[15px] text-black font-semibold leading-snug mb-4">
            Offer ends in
          </h1>

          {/* Timer */}
          <div className="flex items-center justify-center md:justify-start mb-4">
            {["31", "12", "03", "12"].map((time, i) => (
              <div key={i} className="flex items-center">
                <div className="xl:px-[10px] xl:py-[10px] md:px-[6px]  bg-gray-100 text-black text-[15px] sm:text-[20px] md:text-[15px] lg:text-[20px]  xl:text-[25px]">
                  {time}
                </div>
                {i < 3 && (
                  <span className="font-bold text-black text-[15px] sm:text-[20px] md:text-[15px] lg:text-[20px]  xl:text-[25px] xl:px-[10px] lg:px-[5px]">
                    :
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Expiry Note */}
          <h3 className="font-neue-light text-xs sm:text-sm md:text-[15px] text-[#333] mb-4">
            Available : <span className="text-green-500">12</span> &nbsp; Sold :{" "}
            <span className="text-red-500">256</span>
          </h3>

          {/* CTA Button */}
          <button className="flex items-center justify-center md:justify-start">
            <span className="flex items-center gap-2 bg-black text-white px-6 py-3 ">
              <FaPlus className="w-2 h-2" />
              <span className="uppercase text-[13px] sm:text-[14px] md:text-[10px] font-semibold">
                Add to cart
              </span>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>

 <div className="mx-auto  px-6 lg:px-12 xl:px-[134px] 2xl:px-[134px] pt-[33px]">
<div className="bg-black neue-pro py-[25px] px-[161px] flex justify-between text-white">
    <div>
        <h2 className="py-[14px] text-[20px]  ">Super Discount on your First Purchase</h2>
        </div>
 <div>
    <button className="py-[14px] border-1 border-dashed px-[46px] ">FREE25FIRST</button>
    </div>
  <div>
    <p className="py-[14px] font-neue-light text-[18px] text-[#FFFFFFC4]/77 ">Use Discount code in Checkout</p>
    </div>
</div>
  </div>

</section>

  );
}
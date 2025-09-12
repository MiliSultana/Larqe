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
    Best Sellers
  </h1>

  {/* Paragraph */}
  <p className="mt-5 mb-[33px] lg:px-[200px] font-neue-light   text-[15px] sm:text-[18px] 2xl:sm:text-[22px]  text-[#5B5B5B]/71 ">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida
  </p>

<div className=" neue-pro flex justify-center text-[20px] text-[#BCBCBC]">
  {/* Button 1 */}
  <button className="bg-[#F0F0F0] py-[25px] px-[48px]">
    All
  </button>

  {/* Button 2 */}
  <button className="bg-[#F0F0F0] py-[25px] px-[48px]">
    Mens
  </button>

  {/* Button 3 (Active) */}
  <button className="bg-[#F0F0F0] px-[10px] py-[9px]">
    <span className="bg-black text-white py-[15px] px-[38px] block">
      Womens
    </span>
  </button>
</div>


</div>
<div className="relative w-full sm:h-[500px] lg:h-[563px]  px-6 lg:px-12   xl:px-[134px] 2xl:px-[134px] py-[99px] ">
    <div >
        <Image
          src="/images/shoplook.png"
          alt="Category 1"
          fill
          className="object-cover"
        />
         </div>
</div>
</section>
  );
}
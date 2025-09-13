"use client";
import React from "react";
import Image from "next/image";

import { FaPlus } from "react-icons/fa";


export default function WinterEssential() {
return (
    <section className=" w-full pt-12 md:pt-16 lg:pt-20 2xl:pt-[83px] ">
<div className="w-full  text-white">
   <div className="px-6 lg:px-12 xl:px-[134px] ">
  <div className=" bg-black pb-[109px] mx-auto neue-pro  items-center justify-between gap-6 pt-12 md:pt-16 lg:pt-20 2xl:pt-[83px]">
   
       {/* Section Heading */}
<div className=" mx-auto  justify-center text-start md:text-center px-6 lg:px-12   xl:px-[134px] 2xl:px-[134px]  ">
  {/* Heading */}
  <h1 className="neue-pro text-[28px] sm:text-[32px] lg:text-[40px] 2xl:lg:text-[55px] tracking-[-1px]  ">
   What Makes L’arqe Different?
  </h1>

  {/* Paragraph */}
  <p className="mt-5 mb-[33px] md:mb-[63px] lg:px-[100px] font-neue-light   text-[15px] sm:text-[18px] 2xl:sm:text-[22px]  text-[#5B5B5B]/71 ">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida
  </p>

  </div>
<div className="flex">
  <div className="flex flex-col items-center text-center px-[48px]">
  <Image
    src="/images/larqeDifferent1.svg"
    alt="Logo"
    width={180}
    height={70}
    className="h-[31px] w-[38px] object-contain"
  />
  <h2 className="py-3 font-semibold">Free Shipping</h2>
  <p className="text-sm font-neue-light">
    Free Shipping for orders over £130.
  </p>
</div>


            <div className="flex flex-col items-center text-center px-[48px]">
                <Image
              src="/images/larqeDifferent2.svg"
              alt="Logo"
              width={180}
              height={70}
              className="h-[31px] w-[38px] object-contain"
            />
            <h2 className="py-3 font-semibold">Free Shipping</h2>
            <p className="text-sm  font-neue-light">Within 14 days for an exchange.</p>
            </div>
            <div className="flex flex-col items-center text-center px-[48px]">
                <Image
              src="/images/larqeDifferent3.svg"
              alt="Logo"
              width={180}
              height={70}
              className="h-[31px] w-[38px] object-contain"
            />
            <h2 className="py-3 font-semibold">14 Day Returns</h2>
            <p className="text-sm font-neue-light">24/7 support, always here just for you.</p>
            </div>
            <div className="flex flex-col items-center text-center px-[48px]">
                <Image
              src="/images/larqeDifferent4.svg"
              alt="Logo"
              width={180}
              height={70}
              className="h-[31px] w-[38px]  object-contain"
            />
            <h2 className="py-3 font-semibold">Member Discounts</h2>
            <p className="text-sm font-neue-light">24/7 support, always here just for you.</p>
            </div>
            <div className="flex flex-col items-center text-center px-[48px]">
                <Image
              src="/images/larqeDifferent5.svg"
              alt="Logo"
              width={180}
              height={70}
              className="h-[31px] w-[38px]  object-contain"
            />
            <h2 className="py-3 font-semibold">Flexible Payments</h2>
            <p className="text-sm  font-neue-light">24/7 support, always here just for you.</p>
            </div>
            </div>
  






  </div>
  </div>
  </div>
</section>
  );
}
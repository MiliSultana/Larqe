// src/components/Banner.jsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


export default function Banner() {
  return (
    <section className="w-full mx-auto relative  ">
      {/* Background Image */}
      <Image
        src="/images/banner1.png"   // put your banner image in public/images/
        alt="Banner"
        fill
      
       className="h-auto w-full object-cover"
      />


          {/* Content */}
          <div className="container mx-auto py-[235px] relative text-white text-center">
              <h1 className="text-[48px] neue-pro  font-semibold tracking-[-2px] mb-[22px]">
                  Autumn - Winter ‘26 Sale
              </h1>
              <p className="text-[20px] neue-pro text-[#FFFFFF] tracking-[-1px] mb-[22px]">
                  Browse our Top Trending: the hottest picks loved by all.
              </p>
       
          <div className="container mx-auto  flex gap-4 justify-center relative">
              <Link
          href="/shop"
          className="bg-white text-[13.5px] py-[11px] px-[60px] font-semibold neue-pro text-black  text-center justify-center shadow-md hover:bg-gray-200 transition"
        >
         SHOP NOW
        </Link>
              <Link
          href="/shop"
          className=" text-[13.5px] py-[11px] px-[43px] font-semibold neue-pro text-white  text-center justify-center border border-white hover:bg-gray-200 transition"
        >
          CREATE A LOOK
        </Link>
          </div>  
           </div>


           {/* Navigation Arrows */}
      <button className="absolute bg-white px-[15px] py-[27px] top-1/2 -translate-y-1/2  ">
        <Image src="/images/LeftArrow.png" 
        alt="Left Arrow"
         width={30}
          height={50} 
         />
      </button>
      <button className="absolute  bg-white px-[15px] py-[27px] right-0 top-1/2 -translate-y-1/2">
        <Image src="/images/RightArrow.png" 
        alt="Right Arrow"
         width={30}
          height={50} 
        />
      </button>

      <div className="container mx-auto flex justify-center space-x-2 relative bottom-[20px] ">
        <Image
          src="/images/square1.png"
          alt="square"
          width={12}
          height={12}
          className="w-auto h-auto"
        />
        <Image
          src="/images/square2.png"
          alt="square"
          width={12}
          height={12}
          className="w-auto h-auto"
        />
        <Image
          src="/images/square1.png"
          alt="square"
          width={12}
          height={12}
          className="w-auto h-auto"
        />
        <Image
          src="/images/square1.png"
          alt="square"
          width={12}
          height={12}
          className="w-auto h-auto"
        />
      </div>
      </section>
  );
}

import React from "react";
import Image from "next/image";

export default function CategoryFlex() {
  return (
    <section className="bg-white w-full text-black pt-12 md:pt-16 lg:pt-20 2xl:pt-[78px]">
      <div className="container mx-auto  px-6 lg:px-12 2xl:px-[182px]">
        <div className="flex flex-col lg:flex-row gap-4 xl:gap-6 neue-pro">
          {/* Left Side - Women */}
          <div className="relative w-full h-[400px] sm:h-[500px] lg:w-[400px] xl:w-[474px] lg:h-[650px] flex-shrink-0">
            <Image
              src="/images/img201.png"
              alt="Women"
              fill
              className="object-cover "
            />
            <div className="absolute top-8 left-6 text-black">
              <p className="text-[14px] md:text-[15px] font-normal  text-[#2D2D2D]">
                356 Products
              </p>
              <h2 className="text-[24px] md:text-[30px] font-bold tracking-[-1px] text-[#282828] mb-6 lg:mb-[324px]">
                Women
              </h2>
              <ul className="space-y-[5px]  text-[16px] md:text-[18px] font-semibold text-[#5B5B5B]">
                <li>Hand Bags &gt;</li>
                <li>Office Bags &gt;</li>
                <li>Cross Body Bags &gt;</li>
                <li>Purse &gt;</li>
                <li>Satchel Bags &gt;</li>
                <li>Duffle Bags &gt;</li>
              </ul>
            </div>
          </div>

          {/* Right Side - Men + Footwear + Accessories */}
          <div className="flex flex-col gap-4 lg:gap-6 w-full">
            {/* Men */}
            <div className="relative w-full h-[250px] sm:h-[300px] lg:w-[512px] xl:w-[674px] lg:h-[324px]">
              <Image
                src="/images/img202.png"
                alt="Men"
                fill
                className="object-cover "
              />
              <div className="absolute top-8 left-6 text-black">
                <p className="text-[14px] md:text-[15px] font-normal  text-[#2D2D2D]">356 Products</p>
                <h2 className="text-[24px] md:text-[30px] font-bold tracking-[-1px] text-[#282828] mb-[11px] ">Mens</h2>
                <p className="text-sm font-normal text-[#5B5B5B] xl:text-[18px] mb-[20px] md:mb-[45px] ">
                  Quis ipsum suspendisse ultrices gravida.
                </p>
                <ul className="space-y-[5px] text-[16px] md:text-[18px] font-semibold text-[#5B5B5B]">
                  <li>Sandals &gt;</li>
                  <li>Clogs &gt;</li>
                  <li>Boots &gt;</li>
                  <li>Sneakers &gt;</li>
                </ul>
              </div>
            </div>

            {/* Bottom row - Footwear + Accessories */}
            <div className="flex flex-col sm:flex-row gap-4 xl:gap-6 w-full">
              {/* Footwear */}
              <div className="relative w-full sm:w-1/2 h-[250px] sm:h-[300px] lg:w-[249px] xl:w-[324px] lg:h-[302px]">
                <Image
                  src="/images/img203.png"
                  alt="Footwear"
                  fill
                  className="object-cover "
                />
                <div className="absolute top-6 left-6 text-black">
                  <p className="text-[14px] md:text-[15px] font-normal  text-[#2D2D2D]">356 Products</p>
                  <h2 className="text-[24px] md:text-[30px] font-bold tracking-[-1px] text-[#282828] mb-6 lg:mb-[324px]">Footwear</h2>
                </div>
              </div>

              {/* Accessories */}
              <div className="relative w-full sm:w-1/2 h-[250px] sm:h-[300px] lg:w-[249px] xl:w-[324px] lg:h-[302px]">
                <Image
                  src="/images/img204.png"
                  alt="Accessories"
                  fill
                  className="object-cover "
                />
                <div className="absolute top-6 left-6 text-black">
                  <p className="text-[14px] md:text-[15px] font-normal text-[#2D2D2D]">356 Products</p>
                  <h2 className="text-[24px] md:text-[30px] font-bold tracking-[-1px] text-[#282828] mb-6 lg:mb-[324px]">Accessories</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

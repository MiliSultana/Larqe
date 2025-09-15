                 

   import React from "react";
   import Image from "next/image";

   
   
   export default function VisitStore() {
   return (
    
    
<div className=" mx-auto  gap-6 px-6 lg:px-12  xl:px-[134px] 2xl:px-[134px] ">
  <div className="flex flex-col md:flex-row justify-center gap-6">
    {/* Banner 1 */}
    <div className="relative w-full h-[300px] sm:h-[300px] md:h-[467px] 2xl:h-[539px] overflow-hidden mt-[99px]">
      <Image
        src="/images/visitStore.png"
        alt="New Session"
        fill
        className="object-cover"
      />
      {/* Left Arrow */}
       <div className="container mx-auto ">
       <button className="absolute hidden md:block xl:left-0 md:left-0 2xl:left-15 top-1/2 -translate-y-1/2 bg-[#F0F0F0]   py-[27px]   px-[15px]">
         <Image
           src="/images/LeftArrow.png"
           alt="Left Arrow"
           width={20}
           height={40}
           className="w-4  h-4"
         />
       </button>
 
       {/* Right Arrow */}
       <button className="absolute hidden md:block xl:right-0 md:right-0  2xl:right-15  top-1/2 -translate-y-1/2 bg-[#F0F0F0]  py-[27px]   px-[15px]">
         <Image
           src="/images/RightArrow.png"
           alt="Right Arrow"
           width={20}
           height={40}
           className="w-4  h-4"
         />
       </button>
       </div>
     
    </div>
    
        </div> 
      {/* Product Info (below the image) */}
        <div className="relative shadow-md  items-center text-center sm:mt-[-10%] mx-auto neue-pro sm:w-[50%]  bg-white">
          <p className=" text-[20px] md:text-[40px] neue-pro  text-[#000000] md:pt-[39px] md:pb-[25px] pt-[20px] pb-[10px] border-b border-[#000000]/10">
            Visit our Store
          </p>
          <h2 className="text-[18px] font-semibold text-[#000000] md:pt-[27px] md:pb-[12px] pt-[15px] pb-[5px] ">
            Kolkata
          </h2>
      <div className="font-neue-light text-[#5B5B5BB5]/71 font-neue-light  text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed space-y-2 ">
       <p>Rains HQ, Jens Olsens Vej 13 ,8200 Aarhus N, Denmark</p>
       <p>Email : sayhello@clotyastore.com</p>
       <p>Phone (+45) 7199 2516</p>
       </div>
        </div>
        
        </div>
   );
}
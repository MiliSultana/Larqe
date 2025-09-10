import Image from "next/image";

export default function BeforeFooter() {
  return (
    <section className="bg-black w-full text-white py-12 md:py-16 lg:py-20 2xl:pt-[57px] 2xl:pb-[78px]">
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center  gap-[102px] px-6 lg:px-12 2xl:px-[182px]">
        
        {/* Left Section */}
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-[40px] font-semibold neue-pro leading-tight tracking-[-3px] mb-[21px]">
            Get our emails for info on <br className="hidden sm:block" /> 
            new items, sales and more.
          </h1>
          <p className="mb-[33px] font-normal text-base sm:text-lg 2xl:text-[18px] text-white/70">
            We'll email you a voucher worth £10 off your first order over £50.
          </p>

          {/* Email + Button */}
        <div className="flex mb-[33px] sm:gap-0 ">
  <input
    type="email"
    placeholder="Enter Email Address"
    className="
      w-full max-w-[417px] 
      flex-1 
      px-[12px] py-[10px]    /* smaller padding for mobile */
      sm:px-[14px] sm:py-[14px] 
      lg:py-[23px]           /* larger height for desktop */
      text-sm sm:text-base lg:text-lg
      text-black/70 
      font-normal 
      bg-white 
      outline-none
    "
  />
  <button
    className="
      max-w-[179px] 
      bg-black text-white border border-white
      px-[20px] py-[10px]     /* smaller padding for mobile */
      sm:px-[30px] sm:py-[14px]
      lg:px-[40px] lg:py-[23px]   /* larger size for desktop */
      font-semibold neue-pro 
      hover:bg-gray-200 hover:text-black transition
    "
  >
    SUBSCRIBE
  </button>
</div>


          <p className="text-xs sm:text-sm 2xl:text-[15px] text-white/50 font-normal neue-pro leading-snug">
            By subscribing you agree to our Terms & Conditions and Privacy & Cookies Policy.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1 max-w-md">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-[40px] font-semibold mb-[21px] tracking-[-3px] neue-pro">
            Need help? <br className="hidden sm:block" /> (+800) 1234 5678 90
          </h1>
          <p className="text-base sm:text-lg 2xl:text-[18px] font-normal mb-[28px] text-white/70">
            We are available 8:00am – 7:00pm
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[12px] mb-[22px]">
            <Image
              src="/images/applestore.png"
              alt="App Store"
              width={150}
              height={57}
              className="h-[50px] w-auto sm:h-[57px] sm:w-[150px] object-contain"
            />
            <Image
              src="/images/googleplay.png"
              alt="Google Play"
              width={172}
              height={57}
              className="h-[50px] w-auto sm:h-[57px] sm:w-[172px] object-contain"
            />
          </div>

          <p className="text-xs sm:text-sm 2xl:text-[15px] text-white/50 font-normal neue-pro leading-snug">
            Shopping App: Try our View in Your Room feature, manage registries and save payment info.
          </p>
        </div>
      </div>
    </section>
  );
}

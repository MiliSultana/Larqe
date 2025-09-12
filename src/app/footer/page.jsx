import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#F9F9F9] text-black">
      {/* Top Section */}
      <div className=" mx-auto px-6 lg:px-12   xl:px-[134px] 2xl:px-[134px] pt-12 md:pt-16 lg:pt-20 pb-8 grid grid-cols-1 lg:grid-cols-2 ">
        
        {/* Brand + Description */}
        <div>
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={180}
            height={70}
            className="h-[62px] w-[172px] object-contain"
          />
          <p className="text-[#5B5B5B]/71 font-neue-light text-base sm:text-lg 2xl:text-[22px] font-normal mt-5 mb-6 leading-relaxed">
            Quis ipsum suspendisse ultrices gravida. <br />
            Risus commodo viverra maecenas accumsan <br />
            lacus vel facilisis in termapol.
          </p>
          <p className="text-black neue-pro text-base sm:text-xl font-semibold">
            (+800) 1234 5678 90 – info@example.com
          </p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:gap-[30px] 2xl:gap-[29px]">
          {/* Information */}
          <div>
            <h3 className="font-semibold text-lg neue-pro text-black mb-[17px]">
              Information
            </h3>
            <ul className="space-y-[12px] text-[#5B5B5B]/71 text-sm sm:text-[15px] lg:text-[13px] xl:text-[15px] 2xl:text-[20px] font-neue-light">
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Returns Policy</Link></li>
              <li><Link href="#">Shipping Policy</Link></li>
              <li><Link href="#">Dropshipping</Link></li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="font-semibold text-lg neue-pro text-black mb-[17px]">
              Account
            </h3>
            <ul className="space-y-[12px] text-[#5B5B5B]/71 text-sm sm:text-[15px] lg:text-[13px] xl:text-[15px] 2xl:text-[20px] font-neue-light  ">
              <li><Link href="#">Dashboard</Link></li>
              <li><Link href="#">My Orders</Link></li>
              <li><Link href="#">My Wishlist</Link></li>
              <li><Link href="#">Account Details</Link></li>
              <li><Link href="#">Track MyOrders</Link></li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold text-lg neue-pro text-black mb-[17px]">
              Shop
            </h3>
            <ul className="space-y-[12px] text-[#5B5B5B]/71 text-sm sm:text-[15px] lg:text-[13px] xl:text-[15px] 2xl:text-[20px] font-neue-light">
              <li><Link href="#">Affiliate</Link></li>
              <li><Link href="#">Best Sellers</Link></li>
              <li><Link href="#">Discounts</Link></li>
              <li><Link href="#">LatestProducts</Link></li>
              <li><Link href="#">Sale Products</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg neue-pro text-black mb-[17px]">
              Categories
            </h3>
            <ul className="space-y-[12px] text-[#5B5B5B]/71 text-sm sm:text-[15px] lg:text-[13px] xl:text-[15px] 2xl:text-[20px] font-neue-light">
              <li><Link href="#">Women</Link></li>
              <li><Link href="#">Men</Link></li>
              <li><Link href="#">Bags</Link></li>
              <li><Link href="#">Outerwear</Link></li>
              <li><Link href="#">Footwear</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className=" mx-auto px-6 lg:px-12   xl:px-[134px] 2xl:px-[134px]  pb-12">
        <div className="border-t border-[#000000]/14 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-black gap-4">
          <p className="text-[13px] 2xl:text-[22px] font-normal text-[#5B5B5B]/71 text-center md:text-left">
            Copyright 2025 © Larqe Shopping Website. All rights reserved. Powered by Viacon.
          </p>

          <Image
            src="/images/footerimg.svg"
            alt="Footer Secure Payments"
            width={500}
            height={20}
            className="object-contain w-[300px] 2xl:w-[500px]"
          />

          <div className="inline-flex 2xl:text-[22px] justify-center md:justify-end xl:gap-6 gap-2 font-normal text-[13px] text-[#5B5B5B]/71">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms and Conditions</Link>
            <Link href="#">Returns Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";



    

export default function Nav() {
  return (
    <>
      {/* 🔹 Top Announcement Bar */}
      <div className="w-full bg-black text-white ">
        <div className="container  neue-pro py-[4px] font-semibold text-[11px] mx-auto flex items-center justify-center text-center">
          <p>SUMMER SALE FOR ALL SWIM SUITS AND FREE EXPRESS INTERNATIONAL DELIVERY - OFF 50% SHOP NOW  </p>

        </div>
      </div>

      {/* 🔹 Main NavBar */}
      <nav className="w-full bg-white ">
        <div className="container mx-auto px-[68px] py-[18px] flex items-center justify-between relative">
          
          {/* Left - Menu Icon (mobile) */}
          <button className="text-2xl md:hidden">
            <FiMenu />
          </button>

          {/* Desktop Menu Links */}
          <div className="hidden neue-pro md:flex space-x-6 text-sm font-medium">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>

          {/* Middle - Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/">
              <Image
                src="/images/logo.png"   // from public/
                alt="Brand Logo"
                width={105}
                height={40}
                className="h-[35px] w-[105px] object-contain"
                priority
              />
            </Link>
          </div>

          {/* Right - Icons */}
          <div className="flex space-x-[25px]  text-lg ml-auto">
            <button className=""><img src="/images/search.png" alt="Search" /></button>
            <button className=""><img src="/images/heart.png" alt="Favorites" /></button>
            <button className=""><img src="/images/user.png" alt="User" /></button>
            <button className=""><img src="/images/basket.png" alt="Basket" /></button>
          </div>
        </div>
      </nav>
    </>
  );
}



  


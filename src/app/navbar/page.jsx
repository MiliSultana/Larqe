"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 🔹 Top Announcement Bar */}
      <div className="w-full bg-black text-white">
        <div className="container neue-pro py-[4px] font-semibold text-[11px] 2xl:text-[20px] mx-auto flex items-center justify-center text-center">
          <p>
            SUMMER SALE FOR ALL SWIM SUITS AND FREE EXPRESS INTERNATIONAL DELIVERY - OFF 50% SHOP NOW
          </p>
        </div>
      </div>

      {/* 🔹 Main NavBar */}
      <nav className="w-full bg-white shadow-sm relative z-50">
        <div className="mx-auto px-6 lg:px-12   xl:px-[134px] 2xl:px-[134px] py-[10px] flex items-center justify-between">
          {/* Left - Menu Icon (mobile) */}
          <button
            className="text-2xl md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Middle - Logo */}
          

          {/* Desktop Menu Links */}
          <div className="hidden md:flex flex-1  neue-pro space-x-8 text-sm 2xl:text-[20px] font-medium">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
<div className="flex-1 flex  justify-center md:justify-start">
            <Link href="/">
              <Image
                src="/images/logo.svg"
                alt="Brand Logo"
                width={105}
                height={40}
                className="h-[35px] w-[105px] 2xl:h-[55px] 2xl:w-[150px] object-contain"
                priority
              />
            </Link>
          </div>
          {/* Right - Icons */}
          <div className="flex space-x-4 sm:space-x-6 items-center">
            <button>
              <img src="/images/search.png" alt="Search" className="w-3 h-3 2xl:w-5 2xl:h-5 " />
            </button>
            <button>
              <img src="/images/heart.png" alt="Favorites" className="w-3 h-3 2xl:w-5 2xl:h-5" />
            </button>
            <button>
              <img src="/images/user.png" alt="User" className="w-3 h-3 2xl:w-5 2xl:h-5 " />
            </button>
            <button>
              <img src="/images/basket.png" alt="Basket" className="w-3 h-3 2xl:w-5 2xl:h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 absolute w-full left-0 top-full shadow-md">
            <ul className="flex flex-col space-y-4 px-6 py-6 text-base font-medium neue-pro">
              <li>
                <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
              </li>
              <li>
                <Link href="/shop" onClick={() => setIsOpen(false)}>Shop</Link>
              </li>
              <li>
                <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

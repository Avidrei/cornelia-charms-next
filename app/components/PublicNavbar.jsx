"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../assets/CC-LOGO-V2-PINK.png";
import { Home, Info, ShoppingBag, Phone, LogIn } from "lucide-react";

export default function PublicNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 bg-white transition-shadow duration-300 ${isOpen ? "" : "shadow-md"}`}>
      <div className="flex items-center justify-between px-6 py-4 sm:py-6 md:py-8 lg:py-9 xl:py-9 md:px-[50px]">

        {/* Logo */}
        <Link href="/">
          <Image
            src={logo}
            alt="Cornelia Logo"
            className="w-auto h-8 transition-all sm:h-9 md:h-11 lg:h-13 xl:h-14 hover:brightness-75 hover:saturate-130"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden mr-[60px] space-x-[120px] text-3xl tracking-wide uppercase xl:text-4xl lg:flex text-cornelia-darkpink bebas">
          <Link href="/products" className={`transition-colors duration-200 hover:text-pink-800 ${pathname === "/products" ? "text-pink-800" : ""}`}>Products</Link>
          <Link href="/contact" className={`transition-colors duration-200 hover:text-pink-800 ${pathname === "/contact" ? "text-pink-800" : ""}`}>Contact Us</Link>
          <Link href="/login" className={`transition-colors duration-200 hover:text-pink-800 ${pathname === "/login" ? "text-pink-800" : ""}`}>Log in</Link>
        </div>

        {/* Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-10 h-10 flex items-center justify-center rounded-full text-2xl lg:hidden transition-all duration-300 hover:text-pink-800
            ${isOpen ? "bg-cornelia-darkpink text-white" : "bg-transparent text-cornelia-darkpink"}`}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out shadow-md bg-white px-6 md:px-[50px] ${isOpen ? "max-h-[500px] pb-6 pt-3" : "max-h-0 py-0"}`}>
        <div className="flex flex-col items-start space-y-6 text-[1.5rem] sm:text-2xl tracking-wide uppercase md:text-3xl bebas text-cornelia-darkpink">
          <Link href="/products" onClick={() => setIsOpen(false)} className={`flex items-center gap-3 transition-colors duration-200 hover:text-pink-800 ${pathname === "/products" ? "text-pink-800" : ""}`}><ShoppingBag className="w-5 h-5" /> Products</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className={`flex items-center gap-3 transition-colors duration-200 hover:text-pink-800 ${pathname === "/contact" ? "text-pink-800" : ""}`}><Phone className="w-5 h-5" /> Contact Us</Link>
          <Link href="/login" onClick={() => setIsOpen(false)} className={`flex items-center gap-3 transition-colors duration-200 hover:text-pink-800 ${pathname === "/login" ? "text-pink-800" : ""}`}><LogIn className="w-5 h-5" /> Login</Link>
        </div>
      </div>
    </nav>
  );
}

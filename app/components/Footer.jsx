"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import logo from '../assets/CC-LOGO-V2-WHITE.png';
import { FaTiktok, FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiShopee } from "react-icons/si";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="grid grid-cols-2 md:grid-cols-3 h-[200px] md:h-[250px] bg-gradient-to-t from-cornelia-darkpink to-cornelia-softpink text-cornelia-softwhite poppins">
      <div className="pt-8 pl-4 text-left md:pt-14 md:pl-6">
        <Image
          src={logo}
          alt="Cornelia Logo"
          className="w-auto h-8 pl-2 transition-all sm:h-9 md:h-11 lg:h-13 xl:h-14"
        />
        <h2 className="pl-3 pr-8 pt-4 text-justify text-[0.8rem] md:text-[1.1rem]">
          © 2023 - Cornelia Charms
        </h2>
        <div className="flex flex-row items-center justify-start pt-4">
          <a href="https://www.tiktok.com/@corneliacharmsph" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="ml-3 bg-cornelia-softwhite p-[0.4rem] rounded-full text-cornelia-darkpink h-[30px] w-[30px] hover:text-pink-800" />
          </a>
          <a href="https://www.facebook.com/nnejjjj" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="ml-2 bg-cornelia-softwhite p-[0.4rem] rounded-full text-cornelia-darkpink h-[30px] w-[30px] hover:text-pink-800" />
          </a>
          <a href="https://www.instagram.com/corneliacharmsph/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="ml-2 bg-cornelia-softwhite p-[0.4rem] rounded-full text-cornelia-darkpink h-[30px] w-[30px] hover:text-pink-800" />
          </a>
          <a href="https://shopee.ph/corneliacharmsph" target="_blank" rel="noopener noreferrer">
            <SiShopee className="ml-2 bg-cornelia-softwhite p-[0.4rem] rounded-full text-cornelia-darkpink h-[30px] w-[30px] hover:text-pink-800" />
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-[0.6rem] md:gap-[0.8rem] pt-8 pl-3 text-sm text-left md:text-[1.1rem] md:pt-14">
        <Link href="/"><h2 className={`${pathname === "/" ? "font-semibold" : "font-normal"}`}>Home</h2></Link>
        <Link href="/about"><h2 className={`${pathname === "/about" ? "font-bold" : "font-normal"}`}>About Us</h2></Link>
        <Link href="/products"><h2 className={`${pathname === "/products" ? "font-bold" : "font-normal"}`}>Products</h2></Link>
        <Link href="/contact"><h2 className={`${pathname === "/contact" ? "font-bold" : "font-normal"}`}>Contact Us</h2></Link>
        <Link href="/login"><h2 className={`${pathname === "/login" ? "font-bold" : "font-normal"}`}>Log In</h2></Link>
      </div>

      <div className="hidden md:flex flex-col gap-[1.2rem] pt-8 pl-3 pr-[20px] text-sm text-left md:text-[1.1rem] md:pt-14">
        <h2 className="text-[1.1rem] font-semibold">Phone</h2>
        <h2 className="text-[1rem]">+639562767061</h2>
        <h2 className="text-[1.1rem] font-semibold">Email</h2>
        <h2 className="text-[1rem] break-all">corneliacharmsph@gmail.com</h2>
      </div>
    </footer>
  );
}

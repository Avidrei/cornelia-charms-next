"use client";

import Image from "next/image";
import Link from "next/link";
import product from "./assets/Hero Product.png";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import Reviews from "./components/Reviews";
import Blobs2 from "./components/Blobs2";
import Blobs from "./components/Blobs";

export default function Homepage() {
  return (
    <div className="">
      {/* Hero Banner */}
      <section className=" mt-[72px] lg:mt-[116px] xl:mt-[108px] overflow-hidden relative w-full pb-[40px] sm:pb-[60px] md:pb-[20px] h-auto sm:h-auto md:h-[420px] lg:h-[540px] xl:h-[750px] bg-cornelia-softwhite grid sm:grid-cols-1 md:grid-cols-2 z-2">
        <Blobs hideOnMd={true} />

        {/* Left: Hero Text */}
        <div className="relative px-6 pb-[15px] pt-[65px] md:pl-[60px] lg:pl-[90px] xl:pl-[120px] md:pt-[70px] lg:pt-[100px] xl:pt-[170px] text-center md:text-left">
          <h1 className="text-7xl sm:text-[5.5rem] md:text-[5.5rem] lg:text-[6.5rem] xl:text-[9.4rem] mb-[-8px] bebas text-cornelia-softpink">
            Your Daily
          </h1>
          <h1 className="text-7xl sm:text-[5.5rem] md:text-[5.5rem] lg:text-[6.5rem] xl:text-[9.5rem] mb-[-8px] bebas text-cornelia-darkpink">
            Charm Fix
          </h1>
          <p className="mb-3 text-[0.75rem] sm:text-[0.95rem] italic font-semibold sm:mb-5 md:mb-2 lg:mb-3 xl:mb-5 sm:text-xl md:text-[1rem] lg:text-[1.25rem] xl:text-2xl poppins text-cornelia-jetblack">
            Where Style Meets Everyday Delight
          </p>
          <Link href="/products">
            <button className="px-[60px] sm:px-[80px] md:px-[90px] lg:px-[80px] xl:px-[90px] py-2 xl:py-4 text-white transition-all duration-300 rounded-2xl bg-cornelia-softpink hover:drop-shadow-xl hover:bg-cornelia-darkpink">
              <span className="text-xl sm:text-2xl lg:text-[1.5rem] xl:text-[1.875rem] bebas">See More</span>
            </button>
          </Link>
        </div>

        {/* Right: Product Image */}
        <div className="relative items-center justify-center hidden p-8 md:flex">
          <div className="absolute top-5 left-[20%] w-40 h-40 sm:w-54 sm:h-54 md:w-60 md:h-60 lg:w-68 lg:h-68 xl:w-80 xl:h-80 bg-cornelia-softpink rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div style={{ animationDelay: "4s" }} className="absolute top-18 right-[20%] w-40 h-40 sm:w-54 sm:h-54 md:w-60 md:h-60 lg:w-68 lg:h-68 xl:w-80 xl:h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <Image src={product} alt="Displayed Product" className="z-0 w-auto h-auto xl:w-[700px] xl:h-[700px]" />
        </div>
      </section>

      {/* About Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 drop-shadow-xl w-full h-[450px] md:h-[600px] xl:h-[850px] 2xl:h-[900px] bg-cornelia-darkpink z-3">
        <div className="flex flex-col md:px-[50px] md:py-[70px] lg:px-[80px] lg:py-[80px] 2xl:px-[100px] 2xl:py-[120px] text-left">
          <div className="flex items-start justify-center gap-3 pt-[50px] md:justify-normal md:pt-0">
            <h2 className="drop-shadow-md text-[5rem] md:text-[4rem] lg:text-[6rem] xl:text-[8rem] 2xl:text-[10rem] leading-none bebas text-cornelia-softwhite">About</h2>
            <div className="flex flex-col justify-start leading-tight">
              <h2 className="drop-shadow-md text-[1.93rem] md:text-[1.85rem] lg:text-[2.8rem] xl:text-[3.45rem] 2xl:text-[4.1rem] bebas text-cornelia-softwhite">Cornelia</h2>
              <h2 className="drop-shadow-md text-[1.93rem] md:text-[1.85rem] lg:text-[2.8rem] xl:text-[3.45rem] 2xl:text-[4.1rem] bebas -mt-2 md:-mt-3 lg:-mt-5 text-cornelia-softwhite">Charms</h2>
            </div>
          </div>
          <div className="pt-5 px-[60px] md:px-0 text-[0.85rem] md:text-[0.94rem] lg:text-[1.05rem] xl:text-[1.4rem] 2xl:text-[1.6rem] md:mt-[30px] xl:mt-[40px]">
            <p className="font-normal text-justify text-cornelia-softwhite poppins">
              Charms and jewelry made for everyone — fun, stylish, and lovingly crafted to spark joy, ignite creativity, and celebrate the beauty of self-expression. Each piece is more than just an accessory; it’s a meaningful expression of individuality and a joyful tribute to personal stories, passions, and dreams. Inspired by the colorful world of ‘anik-anik’ — a beloved aspect of Filipino culture that celebrates playful layering, creative mixing, and the spirit of fun fashion — our designs are a vibrant reminder of how style can be both expressive and empowering.
            </p>
          </div>
        </div>

        <div className="relative items-center justify-center hidden md:flex">
          <Image src={image2} alt="Displayed Product" className="absolute z-4 drop-shadow-2xl border-4 border-cornelia-softwhite rounded-[30%] md:right-[20%] w-[220px] h-[220px] md:w-[260px] md:h-[260px] lg:w-[320px] lg:h-[320px] xl:w-[450px] xl:h-[450px]" />
          <Image src={image1} alt="Displayed Product" className="absolute z-3 drop-shadow-2xl border-4 border-cornelia-softwhite md:top-[15%] md:left-[20%] rounded-[30%] w-[220px] h-[220px] md:w-[260px] md:h-[260px] lg:w-[320px] lg:h-[320px] xl:w-[450px] xl:h-[450px]" />
        </div>
      </section>

    {/* Our Products */}
    <section className="flex flex-col w-full overflow-hidden bg-orange-100 shadow-xl z-4">

      {/* Text Header */}
      <div className="flex flex-col items-center justify-center pt-[50px] sm:pt-[40px] md:pt-[60px] lg:mt-[25px] xl:mt-[20px]">
        <h2 className="bebas text-[4rem] sm:text-[4.5rem] md:text-[5rem] lg:text-[6.5rem] xl:text-[7.5rem] text-cornelia-softpink drop-shadow-md leading-none">Our Products</h2>
        <h2 className="mt-2 font-semibold text-cornelia-jetblack leading-none px-7 text-center sm:text-[0.95rem] md:text-[1rem] lg:text-[1.25rem] poppins italic">Discover the type of products that are offered by Cornelia Charms.</h2>
      </div>

      {/* Listed Products */}  
      <div className="grid grid-cols-1 mt-8 sm:mt-10 md:px-[70px] lg:px-[40px] xl:px-[70px] min-[2000px]:px-[140px] min-[2120px]:px-[150px] 2xl:px-[80px] sm:gap-y-3 lg:gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="flex flex-col items-center">
          <h2 className="text-[1.5rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2rem] xl:text-[2.2rem] bebas text-cornelia-jetblack">KEY CHAINS</h2>
          <div className="bg-gradient-to-b from-cornelia-softpink to-transparent p-7 lg:p-6 xl:p-8 h-[60%] rounded-[50px]">
            <Image src={image2} alt="Key Chains" className="transition-transform duration-300 hover:scale-105 drop-shadow-2xl h-[250px] w-[250px] sm:w-[300px] sm:h-[300px] md:w-[240px] md:h-[240px] lg:w-[250px] lg:h-[250px] xl:w-[320px] xl:h-[320px]  2xl:w-[360px] 2xl:h-[360px] min-[2120px]:w-[440px] min-[2120px]:h-[440px] object-cover rounded-[30px]" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center">
          <h2 className="text-[1.5rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2rem] xl:text-[2.2rem]  bebas text-cornelia-jetblack">CHARMS</h2>
          <div className="bg-gradient-to-b from-cornelia-softpink to-transparent p-7 lg:p-6 xl:p-8 h-[60%] rounded-[50px]">
            <Image src={image2} alt="Charms" className="transition-transform duration-300 hover:scale-105 drop-shadow-2xl h-[250px] w-[250px] sm:w-[300px] sm:h-[300px] md:w-[240px] md:h-[240px]  lg:w-[250px] lg:h-[250px] xl:w-[320px] xl:h-[320px] 2xl:w-[360px] 2xl:h-[360px] min-[2120px]:w-[440px] min-[2120px]:h-[440px]  object-cover rounded-[30px]" />
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center md:col-span-2 lg:col-span-1">
          <h2 className="text-[1.5rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2rem] xl:text-[2.2rem]  bebas text-cornelia-jetblack">BRACELETS</h2>
          <div className="bg-gradient-to-b from-cornelia-softpink to-transparent p-7 lg:p-6 xl:p-8 h-[60%] rounded-[50px]">
            <Image src={image2} alt="Bracelets" className="transition-transform duration-300 hover:scale-105 drop-shadow-2xl h-[250px] w-[250px] sm:w-[300px] sm:h-[300px] md:w-[240px] md:h-[240px]  lg:w-[250px] lg:h-[250px] xl:w-[320px] xl:h-[320px]  2xl:w-[360px] 2xl:h-[360px] min-[2120px]:w-[440px] min-[2120px]:h-[440px] object-cover rounded-[30px]" />
          </div>
        </div>
      
      </div>

      {/* See More Button */}
      <div className="flex items-center justify-center mt-[25px] pb-[70px] sm:mt-[35px] md:mt-[30px] lg:mt-[50px]">
        <button className="items-center justify-center py-[6px] px-[50px] sm:py-[8px] sm:px-[60px] md:px-[70px] md:py-[5px] lg:px-[100px] lg:py-[13px] xl:px-[110px] xl:py-[15px] text-[1.3rem] sm:text-[1.2rem] md:text-[1.5rem] lg:text-[1.75rem] xl:text-[2rem] tracking-wide transition duration-300 border-4 rounded-xl bebas text-cornelia-softpink border-cornelia-softpink hover:shadow-xl hover:bg-cornelia-softpink hover:text-cornelia-softwhite">
          <span className='tracking-widest'>SEE MORE</span>
        </button>
      </div>



    </section>

    {/* Customer Experience */}
    <section className="overflow-hidden relative w-full h-[700px] min-[430px]:h-[700px] sm:h-[750px] md:h-[650px] xl:h-[700px] bg-cornelia-softwhite">


    <Blobs2 hideOnMd={true} />
    
  
    <div className="relative z-0 pt-[55px] sm:pt-[65px] md:pt-[69px] md:pr-[35px] lg:pr-[60px] xl:pr-[120px]">
      
      <h2 className="leading-none text-center md:text-right text-cornelia-softpink text-[2.75rem] min-[570px]:text-[3.5rem] sm:text-[4.8rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] bebas drop-shadow-md">
        Customer Experience
      </h2>
      <p className="mb-[50px] md:mb-[90px] italic font-medium text-center md:text-right poppins px-6 sm:px-[25px] md:px-3 text-cornelia-jetblack text-[0.9rem] sm:text-[1.2rem] md:text-[1rem] lg:text-xl">
        Hear from our customers about their positive delights in receiving our products
      </p>
    </div>

    <Reviews />
    </section>
    </div>
  );
}
 
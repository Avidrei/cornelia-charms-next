import React from 'react';

export default function Blobs({ className = "", hideOnMd = false }) {
  return (
    <div className={`absolute inset-0 z-0 ${className}`}>
      {/* Blob 1 */}
      <div className={`absolute top-5 left-[10%] w-40 h-40 sm:w-54 sm:h-54 md:w-60 md:h-60 lg:w-68 lg:h-68 xl:w-80 xl:h-80 bg-cornelia-softpink rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob ${hideOnMd ? 'md:hidden' : ''}`}></div>
      {/* Blob 2 */}
      <div style={{ animationDelay: "2s" }} className={`absolute bottom-2 right-[10%] w-40 h-40 sm:w-54 sm:h-54 md:w-60 md:h-60 lg:w-68 lg:h-68 xl:w-80 xl:h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob ${hideOnMd ? 'md:hidden' : ''}`}></div>
      {/* Blob 3 */}
      <div className="absolute rounded-full opacity-50 xl:-top-[30%] lg:-top-[35%] md:-top-[45%] left-[20%] sm:w-54 sm:h-54 md:w-60 md:h-60 lg:w-68 lg:h-68 xl:w-80 xl:h-80 bg-cornelia-softpink mix-blend-multiply filter blur-xl animate-blob"></div>
      {/* Blob 4 */}
      <div className="absolute rounded-full opacity-50 md:-bottom-[40%] lg:-bottom-[30%] xl:-bottom-[20%] sm:w-54 sm:h-54 md:w-60 md:h-60 lg:w-68 lg:h-68 xl:w-80 xl:h-80 bg-orange-200 mix-blend-multiply filter blur-xl animate-blob"></div>
      {/* Blob 5 */}
      <div style={{ animationDelay: "1s" }} className="absolute rounded-full opacity-50 md:-bottom-[40%] lg:-bottom-[30%] xl:-bottom-[20%] left-[40%] sm:w-54 sm:h-54 md:w-60 md:h-60 lg:w-68 lg:h-68 xl:w-80 xl:h-80 bg-orange-200 mix-blend-multiply filter blur-xl animate-blob"></div>
    
    
    </div>
  );
}

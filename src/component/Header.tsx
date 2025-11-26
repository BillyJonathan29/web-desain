// Header.tsx (Modern EcoWood Hub Hero Section - Responsive Fixed)
import React from "react";
import { ArrowRight, Leaf, Recycle } from "lucide-react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="mb-20" id="hero">
      <div className="relative h-[90vh] md:h-screen overflow-hidden">
        {/* 1. Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/img/header-section.jpg')",
          }}
        >
          <div className="absolute inset-0 opacity-85 bg-black/40 "></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-12 text-white"
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        >
 
          <div
            className="flex items-center space-x-2 px-4 py-2 rounded-full mb-6
            uppercase text-sm font-semibold tracking-widest
           text-gray-200 bg-amber-100/20 backdrop-blur-sm"
          >
            <Recycle size={18} />
            <span>Transforming Waste Wood</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl font-extrabold tracking-tight mb-4 max-w-4xl lg:max-w-3xl leading-tight text-white font-['Poppins']">
            EcoWood Hub: Transforming Waste Wood
          </h1>

         
          <p className="text-xl sm:text-2xl md:text-3xl font-medium mb-8 font-serif italic max-w-3xl lg:max-w-2xl text-gray-200">
            "From Waste to Worth. From Wood to Future."
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#calculator"
              className="group flex items-center justify-center px-8 py-3 text-lg font-bold rounded-lg transition duration-300 shadow-xl 
              bg-amber-900 text-gray-300 hover:bg-amber-800"
              aria-label="Cek Dampak Lingkungan Anda"
            >
              Hitung Dampak Lingkungan
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#craft-gallery"
              className="flex items-center justify-center px-8 py-3 text-lg font-medium rounded-lg transition duration-300 text-gray-200 hover:bg-amber-900 shadow-lg bg-black/10"
              aria-label="Lihat Kerajinan Eco-Friendly"
            >
              <Leaf className="mr-2 h-5 w-5" />
              Jelajahi Galeri Kerajinan
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

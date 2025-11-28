import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // jika sudah lewat 10px baru putih
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Innovation", href: "#inovasi" }, // atau #innovation jika section ikut diubah
    { name: "Testimonials", href: "#testimonials" },
    { name: "Gallery", href: "#gallery" },
    { name: "Products", href: "#products" },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 
      ${scrolled ? "bg-white shadow-md" : "bg-transparent backdrop-blur-xs"}`}
      id="navbar"
      data-aos="zoom-in-down"
      data-aos-duration="2000"
    >
      <div className="container mx-auto px-5 sm:px-8 lg:px-10 xl:px-12 py-4 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center space-x-3">
          <img
            src="img/logo.png"
            alt="Logo Saung Kharisma Alam"
            className="w-10 h-10 object-contain" // sesuaikan ukuran logo
          />
          <h1
            className={`font-bold text-2xl md:text-2xl xl:text-3xl whitespace-nowrap transition-colors duration-500
      ${scrolled ? "text-[#5c3324]" : "text-white"}`}
          >
            Saung Kharisma Alam
          </h1>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center lg:text-sm xl:text-base lg:space-x-3 xl:space-x-7">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`tracking-wide font-medium hover:text-amber-900 transition-colors duration-300
                ${scrolled ? "text-[#5c3324]" : "text-gray-100"}
              `}
            >
              {item.name}
            </a>
          ))}

          {/* SEARCH DESKTOP */}
          <div className="relative w-48 ml-2">
            <input
              type="text"
              placeholder="Search..."
              className={`w-full py-2 pl-4 pr-10 rounded-full border transition-colors duration-300
                ${
                  scrolled
                    ? "bg-white border-[#5c3324] text-[#5c3324] placeholder-[#5c3324]"
                    : "bg-transparent border-gray-300 text-white placeholder-gray-200"
                }
                focus:outline-none focus:ring-1 focus:ring-amber-700`}
            />
            <Search
              size={18}
              className={`absolute right-3 top-1/2 -translate-y-1/2 transition-colors duration-300
                ${scrolled ? "text-[#5c3324]" : "text-white"}`}
            />
          </div>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`lg:hidden transition-colors duration-300 
            ${scrolled ? "text-[#5c3324]" : "text-white"}`}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 
        ${isMenuOpen ? "max-h-screen py-4" : "max-h-0"}
        ${scrolled ? "bg-white shadow-md" : "backdrop-blur-md"}`}
      >
        <div className="flex flex-col space-y-3 px-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-center py-2 font-medium hover:text-amber-900 transition
                ${scrolled ? "text-[#5c3324]" : "text-white"}`}
            >
              {item.name}
            </a>
          ))}

          {/* SEARCH MOBILE */}
          <div className="relative mt-3">
            <input
              type="text"
              placeholder="Search..."
              className={`w-full py-2 pl-4 pr-10 rounded-full border transition-colors duration-300
                ${
                  scrolled
                    ? "bg-white border-[#5c3324] text-[#5c3324] placeholder-[#5c3324]"
                    : "bg-transparent border-gray-300 text-white placeholder-gray-200"
                }
                focus:outline-none focus:ring-1 focus:ring-amber-700`}
            />
            <Search
              size={18}
              className={`absolute right-3 top-1/2 -translate-y-1/2 transition-colors duration-300
                ${scrolled ? "text-[#5c3324]" : "text-white"}`}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

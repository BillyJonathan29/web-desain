import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Project", href: "#project" },
    { name: "Galeri", href: "#galeri" },
    { name: "Testimonials", href: "#" },
    { name: "Card", href: "#card" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-4 sm:px-8 flex items-center justify-between">
        <h1 className="text-white font-bold text-2xl md:text-2xl xl:text-3xl whitespace-nowrap">
          Saung Kharisma Alam
        </h1>
        <div className="hidden lg:flex items-center lg:text-sm xl:text-base lg:space-x-6 xl:space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white  tracking-wider hover:text-amber-700 transition"
            >
              {item.name}
            </a>
          ))}

          {/* SEARCH DESKTOP */}
          <div className="relative ml-4">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border border-gray-200 text-white placeholder-gray-300 py-2 px-4 pr-10 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-200"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white absolute right-3 top-1/2 -translate-y-1/2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white focus:outline-none"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-screen py-4" : "max-h-0"
        }  backdrop-blur-sm`}
      >
        <div className="flex flex-col space-y-3 px-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-center py-2 font-medium hover:text-amber-700 transition"
            >
              {item.name}
            </a>
          ))}

          {/* SEARCH MOBILE */}
          <div className="relative pt-2 pb-3 mx-auto">
            <input
              type="text"
              placeholder="Search..."
              className="w-full  bg-transparent border border-gray-300 text-white placeholder-gray-300 py-2 px-4 pr-10 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-200"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white absolute right-3 top-1/2 -translate-y-1/2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 bg-amber-50  backdrop-blur-md shadow-sm z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="" alt="logo" className="w-8 h-8" />
          <span className="font-semibold text-lg">Eco Green Wood</span>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <li className="cursor-pointer hover:text-black transition">Home</li>
          <li className="cursor-pointer hover:text-black transition">About</li>
          <li className="cursor-pointer hover:text-black transition">Project</li>
          <li className="cursor-pointer hover:text-black transition">Service</li>
          <li className="cursor-pointer hover:text-black transition">Contact</li>
        </ul>

        {/* Button */}
        <button className="hidden md:block px-5 py-2 border border-gray-700 rounded-full hover:bg-amber-200 hover:text-white transition font-medium">
          Login
        </button>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-1 bg-black rounded" />
          <span className="w-6 h-1 bg-black rounded" />
          <span className="w-6 h-1 bg-black rounded" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white w-full shadow-md animate-slide-down">
          <ul className="flex flex-col gap-4 p-4 text-gray-800 font-medium">
            <li className="cursor-pointer" >Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Project</li>
            <li className="cursor-pointer">Service</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
          <div className="p-4 pt-0">
            <button className="w-full px-5 py-2 border border-gray-700 rounded-full hover:bg-gray-800 hover:text-white transition font-medium">
              Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

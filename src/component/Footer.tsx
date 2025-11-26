import React from "react";

export default function Footer() {
  return (
    <footer className="bg-amber-50 text-black pt-16 pb-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* --- Brand & Social --- */}
        <div>
          <h2 className="text-black text-xl font-semibold mb-4">nasedamoah</h2>
          <p className="text-black mb-4">
            A creative studio working with people worldwide.
          </p>

          <div className="flex gap-4 mt-4">
            <a className="w-10 h-10 rounded-full bg-[#1d2333] flex items-center justify-center hover:bg-[#2b3247] transition">
              <i className="fab fa-facebook-f" />
            </a>
            <a className="w-10 h-10 rounded-full bg-[#1d2333] flex items-center justify-center hover:bg-[#2b3247] transition">
              <i className="fab fa-twitter" />
            </a>
            <a className="w-10 h-10 rounded-full bg-[#1d2333] flex items-center justify-center hover:bg-[#2b3247] transition">
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>

        {/* --- Useful Links --- */}
        <div>
          <h3 className="text-black text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-3 text-black">
            <li className="hover:text-gray-500 cursor-pointer">About</li>
            <li className="hover:text-gray-500 cursor-pointer">Careers</li>
            <li className="hover:text-gray-500 cursor-pointer">News</li>
            <li className="hover:text-gray-500 cursor-pointer">Legal Notice</li>
          </ul>
        </div>

        {/* --- Services --- */}
        <div>
          <h3 className="text-black text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-3 text-black">
            <li className="hover:text-gray-500 cursor-pointer">Design</li>
            <li className="hover:text-gray-500 cursor-pointer">Development</li>
            <li className="hover:text-gray-500 cursor-pointer">Marketing</li>
            <li className="hover:text-gray-500 cursor-pointer">Branding</li>
          </ul>
        </div>
      </div>

      {/* --- Bottom Section --- */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-black text-sm">
        © BAPALU GUA LAPORIN
      </div>
    </footer>
  );
}

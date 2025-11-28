import { Twitter, Instagram, Github, Dribbble } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#532c1e] text-gray-100  py-12" id="footer"  data-aos="zoom-in-up" data-aos-duration="2000">
      <div className="container mx-auto px-5 sm:px-8 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            {/* LOGO + TITLE */}
            <div className="flex items-center gap-3">
              <img
                src="img/logo.png"
                alt="Logo Saung Kharisma Alam"
                className="w-8 h-8 object-contain"
              />
              <h1 className="text-xl font-semibold text-white">
                Saung Kharisma Alam
              </h1>
            </div>

            {/* Garis di bawah judul */}
            <div className="w-24 h-[3px] bg-white mt-2"></div>

            {/* Deskripsi */}
            <p className="mt-5 leading-relaxed">
              EcoWood Hub mengubah limbah kayu menjadi kerajinan bernilai tinggi
              dengan konsep kreatif dan berkelanjutan. Mendukung UMKM sekaligus
              menjaga lingkungan.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {[Twitter, Instagram, Github, Dribbble].map((Icon, i) => (
                <button
                  key={i}
                  className="p-2 bg-white/10 rounded-full hover:bg-[#5e3719] transition-colors"
                >
                  <Icon size={20} className="text-white" />
                </button>
              ))}
            </div>
          </div>

          {/* Tentang Kami */}
          <div>
            <h3 className="text-lg font-semibold text-white">Abot Us</h3>
            <div className="w-20 h-[3px] bg-white mt-2"></div>

            <ul className="space-y-2 mt-4">
              <a href="#home" className="hover:text-[#db9f68]">
                <li className="transition">Home</li>
              </a>
              <a href="#about" className="hover:text-[#db9f68]">
                {" "}
                <li className="transition">About</li>
              </a>
              <a href="#inovasi" className="hover:text-[#db9f68]">
                {" "}
                <li className="transition">Inovasi</li>
              </a>
              <a href="#testimonials" className="hover:text-[#db9f68]">
                {" "}
                <li className="transition">Testimonial</li>
              </a>
              <a href="#gallery" className="hover:text-[#db9f68]">
                <li className="transition">Galleri</li>
              </a>
              <a href="#products" className="hover:text-[#db9f68]">
                <li className="transition">Product</li>
              </a>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-lg font-semibold text-white">Location</h3>
            <div className="w-16 h-[3px] bg-white mt-2"></div>

            <p className="mt-4 leading-relaxed">
              Babakanmulya, Kec. Cigugur
              <br />
              Kabupaten Kuningan, Jawa Barat
              <br />
              45552
            </p>
          </div>

          {/* Subscription */}
          <div>
            <h3 className="text-lg font-semibold text-white">Subscription</h3>
            <div className="w-20 h-[3px] bg-white mt-2"></div>

            <p className="mt-4">
              Dapatkan update terbaru seputar kerajinan kayu berkelanjutan.
            </p>

            <div className="mt-4 flex flex-col items-start gap-3 w-full">
              <input
                type="email"
                placeholder="Masukan Email Anda"
                className="bg-transparent border border-white placeholder-gray-200 w-full p-2 rounded focus:outline-none focus:ring-1 focus:ring-white"
              />

              <button className="border border-white text-white px-4 py-2 rounded w-full hover:bg-[#5e3719] hover:border-[#5e3719] transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/40 mt-10 pt-6 text-center text-sm text-gray-200">
          © Copyright KALKULUS TEAM | All Rights Reserved 2024
        </div>
      </div>
    </footer>
  );
};

export default Footer;

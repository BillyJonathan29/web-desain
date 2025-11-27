import { Twitter, Instagram, Github, Dribbble } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="bg-amber-900 text-gray-200 px-6 sm:px-10 md:px-16 lg:px-24 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <h1 className="text-xl font-semibold text-white">NUANSA JABAR</h1>
            <div className="w-24 h-[3px] bg-white mt-2"></div>

            <p className="mt-5 leading-relaxed">
              Mari kita eksplorasi keindahan dan kekayaan budaya yang ada di
              Jawa Barat. Rasakan aneka ragam makanan khasnya yang sudah
              terkenal di seantero Indonesia.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {[Twitter, Instagram, Github, Dribbble].map((Icon, i) => (
                <button
                  key={i}
                  className="p-2 bg-gray-100 rounded-full hover:bg-amber-700 transition-colors"
                >
                  <Icon
                    size={20}
                    className="text-amber-800 group-hover:text-white"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Tentang Kami */}
          <div>
            <h3 className="text-lg font-semibold text-white">Tentang Kami</h3>
            <div className="w-20 h-[3px] bg-white mt-2"></div>

            <ul className="space-y-2 mt-4">
              <li>About</li>
              <li>Project</li>
              <li>Galeri</li>
              <li>Testimonial</li>
              <li>Card</li>
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
              Dapatkan update terbaru dan pengetahuan bermanfaat langsung ke
              inbox.
            </p>

            <div className="mt-4 flex flex-col items-center gap-3">
              <input
                type="email"
                placeholder="Masukan Email Anda"
                className="bg-transparent border border-white placeholder-white w-full sm:w-[250px] p-2 rounded focus:outline-none focus:ring-1 focus:ring-white"
              />
              <button className="border border-white text-gray-100 px-4 py-2s rounded hover:bg-amber-700 hover:border-amber-700 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-sm text-white">
          © Copyright KALKULUS TEAM | All Right Reserved 2024
        </div>
      </footer>
    </>
  );
};

export default Footer;

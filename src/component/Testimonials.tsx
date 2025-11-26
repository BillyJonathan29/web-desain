import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const testimonials: TestimonialItem[] = [
  {
    quote:
      "Sebagai seseorang yang aktif dalam pelestarian budaya Sunda, saya merasa bahwa nilai-nilai lokal bukan hanya sejarah, tetapi pedoman hidup. Setiap tradisi, bahasa, dan karya seni di Jawa Barat mengajarkan kita tentang keharmonisan antara manusia dan alam. Melestarikannya adalah bentuk penghormatan atas jati diri kita sendiri.",
    name: "Billy Jonathan", 
    role: "PEMERHATI BUDAYA",
    image: "/img/billy.jpg",
  },
  {
    quote:
      "Sejarah Jawa Barat memberikan gambaran betapa kayanya perjalanan masyarakat Sunda dalam membangun identitasnya. Mulai dari kerajaan-kerajaan kuno hingga warisan kolonial, semuanya membentuk karakter yang kita kenal hari ini. Memahami sejarahnya adalah cara memahami akar bangsa.",
    name: "Kevin Satria",
    role: "PENELITI SEJARAH",
    image: "/img/dafa.jpg",
  },
  {
    quote:
      "Inspirasi saya banyak datang dari seni tradisional Jawa Barat—dari ritmisnya musik, detail motif batik, hingga ekspresi Wayang Golek. Setiap karya seni mengandung filosofi mendalam dan kearifan lokal. Melalui seni, saya percaya budaya dapat hidup dan berkembang di era modern.",
    name: "Rifky Firmansyah",
    role: "SENIMAN MUDA",
    image: "/img/rifky.jpg",
  },
];


const Testimonials: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="w-full py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 md:mb-24">
          {/* SUBTITLE */}
          <div className="inline-block mb-6">
            <h2 className="text-lg md:text-xl font-bold uppercase tracking-[0.3em] text-amber-800">
              Suara Pengguna
            </h2>
            <div className="h-0.5 bg-amber-800 rounded-full w-full mt-1"></div>
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Poppins'] font-extrabold text-gray-900 mb-6 leading-tight">
            Testimonial EcoWood Hub
          </h1>

          {/* DESCRIPTION */}
          <p className="text-md md:text-xl font-serif italic text-gray-600 max-w-2xl mx-auto leading-relaxed">
            "Kesan dan pengalaman dari pelanggan yang telah merasakan produk
            daur ulang kayu EcoWood yang ramah lingkungan dan penuh nilai."
          </p>
        </div>

        <div className="max-w-7xl  mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <div key={index} className="relative" data-aos="fade-up">
              {/* Card */}
              <div className="bg-white shadow-xl p-8 rounded-xl relative">
                {/* Stars */}
                <div className="flex text-yellow-400 mb-4 text-xl">
                  {"★★★★★"}
                </div>

                {/* Quote */}
                <p
                  className="text-gray-700 leading-relaxed text-[17px] font-sans"
                  
                >
                  "{item.quote}"
                </p>

                {/* Bubble Arrow */}
              </div>

              {/* Profile */}
              <div className="flex items-center gap-4 mt-12 px-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover shadow-md border border-white"
                />
                <div>
                  <h4
                    className="text-[20px] font-bold text-gray-900"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {item.name}
                  </h4>
                  <p className="text-amber-900 text-sm  font-serif italic">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

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
      "EcoWood Hub membantu saya menampilkan proses ukiran kayu daur ulang dengan lebih profesional. Tampilan websitenya informatif dan mudah dipahami, sehingga pelanggan dapat melihat nilai dari setiap karya yang dibuat. Platform ini benar-benar mendukung pengrajin lokal untuk berkembang.",
    name: "Billy Jonathan", 
    role: "Pengrajin Ukir Kayu",
    image: "/img/billy.jpg",
  },
  {
    quote:
      "EcoWood Hub memberikan ruang ideal untuk menampilkan desain eco-craft secara modern dan edukatif. Fitur galerinya sangat membantu menjelaskan konsep keberlanjutan di balik setiap produk. Website ini menjadi sarana yang tepat untuk menunjukkan kreativitas sekaligus dampak positif bagi lingkungan.",
    name: "Dafa Faddhlurahman",
    role: "Desainer Produk Kayu",
    image: "/img/dafa.jpg",
  },
  {
    quote:
      "EcoWood Hub membantu memperkenalkan proses daur ulang kayu yang kami lakukan setiap hari kepada lebih banyak orang. Setiap tahap kerja dijelaskan dengan cara yang jelas dan mudah dipahami oleh pengunjung. Website ini membuat edukasi tentang keberlanjutan terasa lebih menarik dan informatif.",
    name: "Rifky Firmansyah",
    role: "Pekerja Workshop Kayu",
    image: "/img/rifky.jpg",
  },
];


const Testimonials: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="w-full py-20 bg-[#6e4230]" id="testimonials">
      <div className="container mx-auto px-5 sm:px-8 lg:px-10 xl:px-12">
        <div className="text-center mb-16 md:mb-24">
          {/* SUBTITLE */}
          <div className="inline-block mb-6">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#debea2]">
              Suara Pengguna
            </h2>
            <div className="h-0.5 bg-[#e5d4c3] rounded-full w-full mt-1"></div>
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Poppins'] font-extrabold text-[#d6ab7d] mb-6 leading-tight">
            Testimonial EcoWood Hub
          </h1>

          {/* DESCRIPTION */}
          <p className="text-md md:text-xl font-serif italic text-[#F7EEDB] max-w-2xl mx-auto leading-relaxed">
            "Kesan dan pengalaman dari pelanggan yang telah merasakan produk
            daur ulang kayu EcoWood yang ramah lingkungan dan penuh nilai."
          </p>
        </div>

        <div className="max-w-7xl  mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <div key={index} className="relative" data-aos="fade-up">
              {/* Card */}
              <div className="bg-[#F7EEDB] shadow-xl p-8 rounded-xl relative">
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
                    className="text-[20px] font-bold text-[#d6ab7d]"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {item.name}
                  </h4>
                  <p className="text-[#F7EEDB] text-sm  font-serif italic">
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

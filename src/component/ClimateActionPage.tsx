// Updated ClimateActionPage.tsx
// Clean, responsive, consistent colors & breakpoints

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    src: "img/satu.jpeg",
    title: "Daur Kayu",
    desc: "Kami memulai proses dengan memilah dan membersihkan limbah kayu, memastikan setiap potongan dapat digunakan kembali sebagai bahan berkualitas untuk kerajinan eco-friendly.",
  },
  {
    id: 2,
    src: "img/dua.jpeg",
    title: "Proses Kreatif",
    desc: "Melalui teknik pengolahan modern, limbah kayu dipotong, dibentuk, dan dirangkai ulang menjadi produk dengan nilai estetika dan fungsi yang lebih tinggi.",
  },
  {
    id: 3,
    src: "img/tiga.jpeg",
    title: "Hasil Bernilai",
    desc: "Tahap akhir menghasilkan produk kayu ramah lingkungan yang siap dipasarkan, mendukung keberlanjutan dan mendorong kreativitas pengrajin lokal.",
  },
];

const ClimateActionPage: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="my-10 py-16 overflow-hidden" id="inovasi">
      <div className="container mx-auto px-5 sm:px-8 lg:px-10 xl:px-12">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block mb-6">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#6e4230] ">
              Daur Kayu Berkelanjutan
            </h2>
            <div className="h-0.5 bg-[#774936] rounded-full w-full mt-1"></div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-['Poppins'] font-extrabold text-[#5c3324] mb-6 leading-tight">
            Inovasi EcoWood Hub
          </h1>
          <p className="text-base md:text-lg font-serif italic text-gray-600 max-w-2xl mx-auto leading-relaxed ">
            "Kami mengubah sisa kayu menjadi produk kreatif dan berkelanjutan
            melalui proses yang aman, ramah lingkungan, dan mendukung UMKM
            lokal."
          </p>
        </div>

        {/* Gallery Loop */}
        {galleryItems.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col md:flex-row items-center justify-between gap-10 my-20 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            data-aos="fade"
          >
            {/* Image */}
            <div
              className="w-full md:w-1/2"
              data-aos={index % 2 === 0 ? "slide-right" : "slide-left"}
              data-aos-duration="2000"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.04] hover:rotate-1"
              />
            </div>

            {/* Text */}
            <div
              className="w-full md:w-1/2 flex flex-col gap-6"
              data-aos={index % 2 === 0 ? "slide-left" : "slide-right"}
              data-aos-duration="2000"
            >
              <p className="font-bold font-['Poppins'] text-3xl text-[#5c3324]">
                {item.title}
              </p>

              <p className="font-sans text-lg text-gray-700 leading-relaxed">
                {item.desc}
              </p>

              <div className="inline-flex items-center gap-3 cursor-pointer group transition-all duration-200">
                <span className="h-8 w-0.5 bg-[#6e4230] rounded-full"></span>
                <p className="text-[#774936] font-semibold text-base">
                  Read More
                </p>
                <ArrowRight className="text-[#774936] h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClimateActionPage;

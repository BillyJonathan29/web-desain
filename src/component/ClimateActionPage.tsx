// src/ClimateActionPage.tsx

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight } from "lucide-react";

const gallerItems = [
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
    <>
      <section
        className="my-10 py-16 md:px-20 px-10 overflow-x-hidden"
        id="sejarah"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <div className="inline-block mb-6">
              <h2 className="text-lg font-bold uppercase tracking-[0.3em] text-amber-800">
               Daur Kayu Berkelanjutan
              </h2>
              <div className="h-0.5 bg-amber-800 rounded-full w-full mt-1"></div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Poppins'] font-extrabold text-gray-900 mb-6 leading-tight">
              Inovasi EcoWood Hub
            </h1>
            <p className="text-md md:text-xl font-serif italic text-gray-600 max-w-2xl mx-auto leading-relaxed ">
              "Kami mengubah sisa kayu menjadi produk kreatif dan berkelanjutan
              melalui proses yang aman, ramah lingkungan, dan mendukung UMKM
              lokal."
            </p>
          </div>

          <div
            className="flex md:flex-row flex-col rounded-lg md:gap-10 gap-0 justify-between items-center w-full my-20"
            data-aos="fade"
          >
            <div
              className="w-full"
              data-aos="slide-right"
              data-aos-duration="2000"
            >
              <img
                src={gallerItems[0].src}
                alt={gallerItems[0].title}
                className="rounded-xl shadow-lg hover:scale-[1.02] hover:-rotate-2 transition-all duration-200"
              />
            </div>

            <div
              className="w-full my-5 flex flex-col gap-10"
              data-aos="slide-left"
              data-aos-duration="2000"
            >
              <p className="font-bold font-['Poppins'] text-3xl">
                {gallerItems[0].title}
              </p>
              <p className="font-sans text-lg text-gray-700 leading-relaxed">
                {gallerItems[0].desc}
              </p>

              <div
                data-aos="slide-left"
                data-aos-duration="3000"
                className="inline-flex items-center gap-3 rounded-lg cursor-pointer group 
                 transition-all duration-200"
              >
                {/* Garis kiri */}
                <span className="h-8 w-0.5 bg-amber-800 rounded-full"></span>

                {/* Text */}
                <p className="text-amber-800 font-semibold text-sm sm:text-base">
                  Read More
                </p>

                {/* Icon */}
                <ArrowRight className="text-amber-800 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </div>
          </div>

          <div
            className="flex md:flex-row flex-col rounded-lg md:gap-10 gap-0 justify-between items-center w-full my-20 text-secondary"
            data-aos="fade"
          >
            <div
              className="w-full block md:hidden"
              data-aos="slide-right"
              data-aos-duration="2000"
            >
              <img
                src={gallerItems[1].src}
                alt={gallerItems[1].title}
                className="rounded-xl shadow-lg hover:scale-[1.02] hover:-rotate-2 transition-all duration-200"
              />
            </div>

            <div
              className="w-full my-5 flex flex-col gap-10"
              data-aos="slide-left"
              data-aos-duration="2000"
            >
              <p className="font-bold font-['Poppins']  text-3xl">
                {gallerItems[1].title}
              </p>
              <p className="font-sans text-lg text-gray-700 leading-relaxed">
                {gallerItems[1].desc}
              </p>

              <div
                data-aos="slide-left"
                data-aos-duration="1500"
                className="inline-flex items-center gap-3 rounded-lg cursor-pointer group 
                 transition-all duration-200"
              >
                {/* Garis kiri */}
                <span className="h-8 w-0.5 bg-amber-800 rounded-full"></span>

                {/* Text */}
                <p className="text-amber-800 font-semibold text-sm sm:text-base">
                  Read More
                </p>

                {/* Icon */}
                <ArrowRight className="text-amber-800 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </div>

            <div
              className="w-full hidden md:block"
              data-aos="slide-right"
              data-aos-duration="2000"
            >
              <img
                src={gallerItems[1].src}
                alt={gallerItems[1].title}
                className="rounded-xl shadow-lg hover:scale-[1.02] hover:rotate-2 transition-all duration-200"
              />
            </div>
          </div>

          <div
            className="flex md:flex-row flex-col rounded-lg md:gap-10 gap-0 justify-between items-center w-full mt-20"
            data-aos="fade"
          >
            <div
              className="w-full"
              data-aos="slide-right"
              data-aos-duration="2000"
            >
              <img
                src={gallerItems[2].src}
                alt={gallerItems[2].title}
                className="w-full h-full object-cover rounded-xl shadow-lg hover:scale-[1.05] hover:-rotate-2 transition-all duration-200"
              />
            </div>

            <div
              className="w-full my-5 flex flex-col gap-10"
              data-aos="slide-left"
              data-aos-duration="2000"
            >
              <p className="font-bold font-['Poppins']  text-3xl">
                {gallerItems[2].title}
              </p>
              <p className="font-sans text-lg text-gray-700 leading-relaxed">
                {gallerItems[2].desc}
              </p>

              <div
                data-aos="slide-left"
                data-aos-duration="3000"
                className="inline-flex items-center gap-3 rounded-lg cursor-pointer group 
                 transition-all duration-200"
              >
                {/* Garis kiri */}
                <span className="h-8 w-0.5 bg-amber-800 rounded-full"></span>

                {/* Text */}
                <p className="text-amber-800 font-semibold text-sm sm:text-base">
                  Read More
                </p>

                {/* Icon */}
                <ArrowRight className="text-amber-800 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClimateActionPage;

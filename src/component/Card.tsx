import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

interface CardItem {
  id: number;
  title: string;
  // category: string;
  image: string;
  description: string;
}

const items: CardItem[] = [
  {
    id: 1,
    image: "img/satu.jpeg",
    title: "Ukiran Figur Abstrak",
    description:
      "Karya ukir kayu bertema figur manusia dengan gaya kontemporer, menonjolkan lekukan natural dan karakter khas serat kayu.",
  },
  {
    id: 2,
    image: "img/dua.jpeg",
    title: "Ukiran Figur Bersepeda",
    description:
      "Patung kayu bertema olahraga dengan garis-garis minimalis, memadukan kesederhanaan bentuk dan kreativitas ukiran.",
  },
  {
    id: 3,
    image: "img/tiga.jpeg",
    title: "Ukiran Ikan Artistik",
    description:
      "Patung ikan bergaya modern dengan detail halus dan bentuk dinamis, mencerminkan harmoni antara seni dan alam.",
  },
  {
    id: 4,
    image: "img/empat.jpeg",
    title: "Ukiran Ikan Realistis",
    description:
      "Detail sisik dan anatomi yang presisi menjadikan ukiran ikan ini tampak hidup dan elegan, cocok sebagai pajangan premium.",
  },
  {
    id: 5,
    image: "img/lima.jpeg",
    title: "Ukiran Ornamen Abstrak",
    description:
      "Kerajinan kayu bergaya ornamental dengan pola spiral elegan, cocok sebagai dekorasi interior bernuansa alami.",
  },
  {
    id: 6,
    image: "img/enam.jpeg",
    title: "Ornamen Kayu Artistik",
    description:
      "Seni ukir kayu bergaya ekspresif dengan lengkungan besar dan tekstur alami, menghadirkan sentuhan estetika modern.",
  },
  {
    id: 7,
    image: "img/inv-3.jpeg",
    title: "Daur Kayu",
    description:
      "Kami memulai proses dengan memilah dan membersihkan limbah kayu, memastikan setiap potongan dapat digunakan kembali sebagai bahan berkualitas untuk kerajinan eco-friendly.",
  },
  {
    id: 8,
    image: "img/inv-2.jpeg",
    title: "Proses Kreatif",
    description:
      "Melalui teknik pengolahan modern, limbah kayu dipotong, dibentuk, dan dirangkai ulang menjadi produk dengan nilai estetika dan fungsi yang lebih tinggi.",
  },
  {
    id: 9,
    image: "img/inv-1.jpeg",
    title: "Hasil Bernilai",
    description:
      "Tahap akhir menghasilkan produk kayu ramah lingkungan yang siap dipasarkan, mendukung keberlanjutan dan mendorong kreativitas pengrajin lokal.",
  },
  {
    id: 10,
    image: "img/delapan.jpeg",
    title: "Proses Pengukiran Kayu",
    description:
      "Proses pengerjaan ukiran kayu secara manual yang menunjukkan detail penghalusan menggunakan amplas. Setiap lekukan figur kayu dibentuk dengan presisi, mencerminkan keterampilan tangan pengrajin dan keindahan karakter alami serat kayu.",
  },
  {
    id: 11,
    image: "img/tujuh.jpeg",
    title: "Ukiran Kepala Naga",
    description:
      "Ukiran kayu berbentuk kepala naga bergaya artistik dengan siluet tajam dan dinamis. Karya ini memadukan nuansa tradisional dan modern, menampilkan detail kurva yang tegas serta hasil finishing mengilap yang memberikan kesan elegan dan kuat.",
  },
  {
    id: 12,
    image: "img/sembilan.jpeg",
    title: "Furnitur Kayu Alami",
    description:
      "Furnitur artistik berbahan kayu utuh dengan bentuk organik alami. Kursi dan meja ini dibuat dari bonggol atau akar kayu yang dipahat minimal, menonjolkan tekstur kayu asli dan menghadirkan estetika rustic yang unik untuk dekorasi interior maupun eksterior.",
  },
  {
    id: 13,
    image: "img/sepuluh.jpeg",
    title: "Ukiran Figur Abstrak",
    description:
      "Kumpulan ukiran kayu dengan figur manusia bergaya abstrak, dipadukan dengan bentuk gear industri, menonjolkan aliran kontemporer.",
  },
  {
    id: 14,
    image: "img/sebelas.jpeg",
    title: "Ukiran Tulang Ikan",
    description:
      "Ukiran kayu tiga dimensi berbentuk tulang dan kerangka ikan yang artistik, memiliki sentuhan finishing mengkilap dengan dudukan kayu cokelat.",
  },
  {
    id: 15,
    image: "img/tigabelas.jpeg",
    title: "Plakat Kuda Kayu",
    description:"Empat patung kuda ukiran kayu dengan pose berbeda, dikemas dalam kotak pajangan kayu berlapisan beludru merah, cocok sebagai plakat atau penghargaan.",
  },
  {
    id: 16,
    image: "img/duabelas.jpeg",
    title: "Ukiran Motif Sulur Klasik",
    description:
      "Patung kayu berbentuk sulur atau motif tanaman hias yang dinamis, memadukan dua warna kayu alami, berdiri di atas dudukan kayu yang simpel.",
  },
];

const ITEMS_PER_PAGE = 4;

const Card: React.FC = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

  const paginatedItems = items.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const nextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div className="w-full flex flex-col items-center py-10" id="products">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8 xl:px-10">
        <div
          className="text-center mb-16 md:mb-24"
          data-aos="zoom-in-down"
          data-aos-duration="2000"
        >
          <div className="inline-block mb-6">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#6e4230]">
              Our Creations
            </h2>
            <div className="h-0.5 bg-[#774936] rounded-full w-full mt-1"></div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-['Poppins'] font-extrabold text-[#5c3324] mb-6 leading-tight">
            Koleksi Karya Kayu EcoWood
          </h1>

          <p className="text-base md:text-lg font-serif italic text-gray-600 max-w-2xl mx-auto leading-relaxed">
            “Kumpulan karya terbaik EcoWood yang dibuat dengan detail presisi,
            sentuhan seni, dan proses berkelanjutan—mengubah limbah kayu menjadi
            kreasi bernilai tinggi.”
          </p>
        </div>

        {/* Cards */}
        <div
          className="
        grid gap-6
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        w-full max-w-7xl px-4
      "
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          {paginatedItems.map((item) => (
            <div
              key={item.id}
              className="bg-white transition rounded-sm overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-60 sm:h-45 w-full object-cover"
              />

              <div className="p-2">
                {/* <p className="text-sm text-gray-500 mb-1">{item.category}</p> */}
                <h3 className="text-xl font-bold font-['Poppins] leading-snug text-[#6e4230]">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base mt-2 font-sans  line-clamp-3">
                  {item.description}
                </p>
              </div>

              <div className="inline-flex items-center gap-3 cursor-pointer group transition-all duration-200 p-2">
                <span className="h-8 w-0.5 bg-[#6e4230] rounded-full"></span>
                <p className="text-[#774936] font-semibold text-base">
                  Read More
                </p>
                <ArrowRight className="text-[#774936] h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div
          className="flex items-center justify-center gap-4 mt-10"
          data-aos="zoom-in-down"
          data-aos-duration="2000"
        >
          <button
            onClick={prevPage}
            disabled={page === 1}
            className="
            p-3 rounded-md bg-[#5c3324] hover:bg-[#653a2a]  text-white  
            disabled:opacity-50 disabled:cursor-not-allowed
          "
          >
            <ChevronLeft size={20} />
          </button>

          {/* Page Numbers */}
          <div className="flex items-center gap-4">
            {Array.from({ length: totalPages }).map((_, i) => (
              <span
                key={i}
                onClick={() => setPage(i + 1)}
                className={`cursor-pointer text-lg 
                ${
                  page === i + 1 ? "font-bold text-[#653a2a] " : "text-gray-600"
                }
              `}
              >
                {i + 1}
              </span>
            ))}
          </div>

          <button
            onClick={nextPage}
            disabled={page === totalPages}
            className="
            p-3 rounded-md bg-[#5c3324] hover:bg-[#653a2a] text-white  
            disabled:opacity-50 disabled:cursor-not-allowed
          "
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

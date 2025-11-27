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
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block mb-6">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#6e4230] ">
              Koleksi Produk Kayu
            </h2>
            <div className="h-0.5 bg-[#774936] rounded-full w-full mt-1"></div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-['Poppins'] font-extrabold text-[#5c3324] mb-6 leading-tight">
            EcoWood Product Showcase
          </h1>
          <p className="text-base md:text-lg font-serif italic text-gray-600 max-w-2xl mx-auto leading-relaxed ">
            "Menampilkan berbagai produk ukir kayu pilihan yang dibuat dengan
            sentuhan kreatif, detail presisi, dan proses berkelanjutan dari
            bahan limbah kayu."
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
        <div className="flex items-center justify-center gap-4 mt-10">
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

import { X } from "lucide-react";
import React, { useState, useEffect } from "react";

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  desc: string;
  aspectRatio: "aspect-[3/4]" | "aspect-[4/3]" | "aspect-[1/1]";
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "img/satu.jpeg",
    title: "Ukiran Figur Abstrak",
    desc: "Karya ukir kayu bertema figur manusia dengan gaya kontemporer, menonjolkan lekukan natural dan karakter khas serat kayu.",
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: 2,
    src: "img/dua.jpeg",

    title: "Ukiran Figur Bersepeda",
    desc: "Patung kayu bertema olahraga dengan garis-garis minimalis, memadukan kesederhanaan bentuk dan kreativitas ukiran.",
    aspectRatio: "aspect-[4/3]",
  },
  {
    id: 3,
    src: "img/tiga.jpeg",
    title: "Ukiran Ikan Artistik",
    desc: "Patung ikan bergaya modern dengan detail halus dan bentuk dinamis, mencerminkan harmoni antara seni dan alam.",
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: 4,
    src: "img/empat.jpeg",
    title: "Ukiran Ikan Realistis",
    desc: "Detail sisik dan anatomi yang presisi menjadikan ukiran ikan ini tampak hidup dan elegan, cocok sebagai pajangan premium.",
    aspectRatio: "aspect-[1/1]",
  },
  {
    id: 5,
    src: "img/lima.jpeg",
     title: "Ukiran Ornamen Abstrak",
    desc: "Kerajinan kayu bergaya ornamental dengan pola spiral elegan, cocok sebagai dekorasi interior bernuansa alami.",
    aspectRatio: "aspect-[4/3]",
  },
  {
    id: 6,
    src: "img/enam.jpeg",
    title: "Ornamen Kayu Artistik",
    desc: "Seni ukir kayu bergaya ekspresif dengan lengkungan besar dan tekstur alami, menghadirkan sentuhan estetika modern.",
    aspectRatio: "aspect-[3/4]",
  },
];

interface CulturalModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

const CulturalModal: React.FC<CulturalModalProps> = ({ item, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (item) {
      setTimeout(() => setIsOpen(true), 10);
      document.body.style.overflow = "hidden";
    } else {
      setIsOpen(false);
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [item]);

  if (!item) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isOpen
          ? "bg-black/70 backdrop-blur-md opacity-100"
          : "bg-black/0 backdrop-blur-none opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl transition-all duration-300 ease-out 
          ${isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-10"}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white bg-[#5c3324] rounded-full w-8 h-8 flex items-center justify-center text-xl transition-all shadow-md"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="md:flex h-full">
          <div className="md:w-3/5 flex items-center justify-center bg-gray-100 p-6 overflow-hidden">
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-contain max-h-[85vh] rounded-xl"
              loading="lazy"
            />
          </div>

          <div className="md:w-2/5 p-6 md:p-8 overflow-y-auto">
            <div className="inline-block">
              <h3 className="text-2xl font-['Poppins'] font-bold text-[#5c3324] mb-2">
                {item.title}
              </h3>
              <div className="h-1 bg-[#774936] rounded-full mb-4 w-full"></div>
            </div>

            {/* <p className="text-sm uppercase font-semibold text-amber-800 mb-4">
              Warisan Budaya Nusantara
            </p> */}
            <p className="text-base font-sans text-gray-700 leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const GalleryCard: React.FC<{
  item: GalleryItem;
  onClick: () => void;
  delay: number;
}> = ({ item, onClick, delay }) => {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden shadow-xl cursor-pointer group 
        hover:scale-[1.01] hover:shadow-2xl transition-all duration-700 ease-in-out
        bg-white transform opacity-0 translate-y-8 ${item.aspectRatio}
      `}
      style={{ animation: `fade-in-up 0.7s ease-out forwards ${delay}ms` }}
      onClick={onClick}
    >
      <img
        src={item.src}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
        <h4 className="text-2xl font-['Poppins'] font-semibold text-[#F7EEDB] group-hover:text-[#F7EEDB] transition-colors">
          {item.title}
        </h4>
      </div>
    </div>
  );
};

const Galeri: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const openModal = (item: GalleryItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        /* Masonry Grid CSS Hack untuk Desktop (grid 3 kolom) */
        .masonry-grid {
            column-count: 1;
            column-gap: 1.5rem; /* gap-6 */
        }
        @media (min-width: 768px) {
            .masonry-grid {
                column-count: 2;
            }
        }
        @media (min-width: 1024px) {
            .masonry-grid {
                column-count: 3;
            }
        }
        .masonry-item {
            display: inline-block;
            width: 100%;
            margin-bottom: 1.5rem; /* gap-6 */
        }
      `}</style>

      <section
        className="py-24 md:py-36 bg-white overflow-hidden"
         id="gallery"
      >
        <div
          className="container mx-auto px-5 sm:px-8 lg:px-10 xl:px-12 max-w-7xl"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <div className="text-center mb-16 md:mb-24">
            <div className="inline-block mb-6">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#6e4230]">
                Koleksi Kerajinan Kayu
              </h2>
              <div className="h-0.5 bg-[#774936] rounded-full w-full mt-1"></div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Poppins'] font-extrabold text-[#5c3324] mb-6 leading-tight">
              EcoWood Craft Gallery
            </h1>
            <p className="text-md md:text-xl  font-serif italic text-gray-600 max-w-2xl mx-auto leading-relaxed ">
              "Menampilkan berbagai karya ukir kayu bernilai tinggi hasil olahan
              limbah kayu yang diproses secara kreatif dan berkelanjutan."
            </p>
          </div>

          <div
            className="masonry-grid"
            data-aos="slide-fade-up"
            data-aos-duration="2000"
          >
            {galleryItems.map((item, index) => (
              <div key={item.id} className="masonry-item">
                <GalleryCard
                  item={item}
                  onClick={() => openModal(item)}
                  delay={100 + index * 100}
                />
              </div>
            ))}
          </div>
        </div>

        {selectedItem && (
          <CulturalModal item={selectedItem} onClose={closeModal} />
        )}
      </section>
    </>
  );
};

export default Galeri;

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Blog {
  id: number;
  title: string;
  description: string;
  author: string;
  image: string;
}

const Card: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-in-out", once: true });
  }, []);

  const blogs: Blog[] = [
    {
      id: 1,
      title: "Kayu Jati",
      description: "Kayu Jati adalah................................",
      author: "Kalimantan",
      image: "",
    },
    {
      id: 2,
      title: "Kayu Mahoni",
      description: "Kayu Mahoni adalah................................",
      author: "Jawa Barat",
      image: "",
    },
    {
      id: 3,
      title: "Kayu Karet",
      description: "Kayu Karet adalah................................",
      author: "Jawa Selatan",
      image: "",
    },
    {
      id: 4,
      title: "Kayu Mangga",
      description: "Kayu Mangga adalah................................",
      author: "Jawa Utara",
      image: "",
    },
    {
      id: 5,
      title: "Kayu Pisang",
      description: "Kayu Pisang adalah................................",
      author: "Sulawesi Utara",
      image: "",
    },
    {
      id: 6,
      title: "Kayu Kelapa",
      description: "Kayu Kelapa adalah................................",
      author: "Sumatera Utara",
      image: "",
    },
    {
      id: 7,
      title: "Kayu Sakura",
      description: "Kayu Sakura adalah................................",
      author: "Jepang",
      image: "",
    },
    {
      id: 8,
      title: "Kayu kayuan",
      description: "Kayu kayuan adalah................................",
      author: "Sulawesi Selatan",
      image: "",
    },
    {
      id: 9,
      title: "Kayu Rambutan",
      description: "Kayu Rambutan adalah................................",
      author: "Papua Barat",
      image: "",
    },
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(blogs.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentBlogs = blogs.slice(indexOfFirst, indexOfLast);

  return (
    <div className="container mx-auto px-4 md:px-10 lg:px-20 py-16">
      <h2 className="text-3xl font-bold mb-10 text-gray-900 text-center">
        Kumpulan Informasi mengenai kayu(eusi sesuai butuhna)
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {currentBlogs.map((blog) => (
          <div
            key={blog.id}
            data-aos="zoom-in"
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-zinc-950 transition-all duration-500 cursor-pointer"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="text-lg font-semibold leading-tight">
                {blog.title}
              </h3>

              <p className="text-sm text-gray-600 mt-3 line-clamp-3">
                {blog.description}
              </p>

              <p className="mt-6 text-sm font-semibold text-gray-700">
                {blog.author}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center mt-8 space-x-3">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded-xl transition-all duration-300 hover:scale-110 hover:bg-gray-300 hover:shadow-lg disabled:opacity-50"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentPage(idx + 1)}
            className={`px-4 py-2 rounded-xl border transition-all duration-300 ${
              currentPage === idx + 1
                ? "bg-black text-white shadow-md scale-110"
                : "hover:bg-gray-300 hover:shadow-lg hover:scale-110"
            }`}
          >
            {idx + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded-xl transition-all duration-300 hover:scale-110 hover:bg-gray-300 hover:shadow-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Card;

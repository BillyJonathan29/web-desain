import React from "react";

interface Blog {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
}

const Card: React.FC = () => {
  const blogs: Blog[] = [
    {
      id: 1,
      title: "Blog 1",
      date: "March 3, 2024",
      category: "JUKII",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Blog 1",
      date: "March 3, 2024",
      category: "JUKII",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Blog 1",
      date: "March 3, 2024",
      category: "JUKII",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Blog 1",
      date: "March 3, 2024",
      category: "JUKII",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      title: "Blog 1",
      date: "March 3, 2024",
      category: "JUKII",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      title: "Blog 1",
      date: "March 3, 2024",
      category: "JUKII",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      title: "Blog 1",
      date: "March 3, 2024",
      category: "JUKII",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="w-full px-6 lg:px-20 py-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Our Latest Blog</h2>
        <button className="px-6 py-2 bg-green-900 text-white rounded-lg hover:bg-green-700 transition">
          See All
        </button>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 min-w-max">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition border w-64 flex-shrink-0"
            >
              {/* Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover rounded-t-xl"
              />

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-base leading-tight">
                  {blog.title}
                </h3>

                <p className="text-xs text-gray-500 mt-2">{blog.date}</p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-xs text-gray-700">{blog.category}</span>
                  <span className="font-bold text-xl">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;

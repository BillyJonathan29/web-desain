import { ArrowRight } from "lucide-react";
const About = () => {
  return (
    <>
      <section className="w-full bg-gray-50 py-10">
        <div className="max-w-7xl container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center px-6 md:px-10">
          <div className="lg:col-span-6 space-y-6 md:space-y-8 order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-stone-900 text-center lg:text-left">
              <span className="font-extrabold font-['Poppins']  ">
                Tentang Kami
              </span>
            </h1>

            <p className="mx-auto mb-6 w-full text-center text-lg text-gray-800 md:mx-0 sm:w-full lg:w-[90%] lg:text-left xl:w-[85%] xl:text-xl font-sans">
              Kami mengubah limbah kayu menjadi produk bernilai tinggi melalui
              desain kreatif dan proses ramah lingkungan. Misi kami adalah
              menghadirkan kerajinan berkelanjutan yang bermanfaat bagi UMKM,
              lingkungan, dan masa depan.
            </p>

            <div className="mt-6 flex justify-center lg:justify-start">
              <button className="inline-flex items-center justify-center px-10 py-3.5 bg-amber-900 text-white rounded-full text-base font-bold shadow-lg shadow-amber-900/30 hover:bg-amber-800 transition-all duration-300 transform hover:scale-[1.02]">
                Jelajahi Sekarang <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative flex justify-center lg:justify-end mt-10 lg:mt-0 min-h-[450px] order-1 lg:order-2">
            <img
              src="img/satu.jpeg"
              alt="wood-texture-raw"
              className="w-3/5 max-w-xs h-[380px] object-cover rounded-2xl shadow-xl z-10 absolute top-10 left-10 transform -rotate-6 transition-transform duration-700 hover:scale-[1.03]"
            />

            <img
              src="img/dua.jpeg"
              alt="premium-wood-craft"
              className="w-3/5 max-w-xs h-[400px] object-cover rounded-2xl shadow-2xl shadow-stone-900/40 z-20 absolute bottom-0 right-0 transform rotate-3 transition-all duration-700 hover:scale-[1.05]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

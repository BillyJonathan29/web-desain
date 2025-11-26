import About from "../component/About";
import ClimateActionPage from "../component/ClimateActionPage";
import Galeri from "../component/Galeri";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import Testimonials from "../component/Testimonials";


const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <ClimateActionPage />
      <Testimonials />
      <Galeri />
    </>
  );
};

export default Home;

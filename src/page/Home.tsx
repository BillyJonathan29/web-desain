import About from "../component/About";
import Card from "../component/Card";
import ClimateActionPage from "../component/ClimateActionPage";
import Footer from "../component/Footer";
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
      <Card />
      <Footer />
    </>
  );
};

export default Home;

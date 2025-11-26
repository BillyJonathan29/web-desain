import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
<<<<<<< HEAD
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Card from "./component/Card";

=======
import Home from "./page/Home";
>>>>>>> 2818c24cb730e540faf7ea0042cbafd20085eb54

function App() {
  return (
    <>
      <Navbar />

      <Router>
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<h1>Home Page</h1>} />
=======
          <Route path="/" element={<Home />} />
>>>>>>> 2818c24cb730e540faf7ea0042cbafd20085eb54
        </Routes>
      </Router>

      <Card />

      <Footer />
    </>
  );
}

export default App;

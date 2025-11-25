import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Card from "./component/Card";


function App() {
  return (
    <>
      <Navbar />

      <Router>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
        </Routes>
      </Router>

      <Card />

      <Footer />
    </>
  );
}

export default App;

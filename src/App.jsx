import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./page/Home";
import About from "./page/About";
import ServicesPage from "./page/ServicesPage";
import CaseStudies from "./page/CaseStudies";
import Contact from "./page/Contact";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

function App() {
  return (
    <BrowserRouter basename="/Advertising-Branding-Marketing">
      
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
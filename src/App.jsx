import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./page/Home";
import About from "./page/About";
import ServicesPage from "./page/ServicesPage";
import CaseStudies from "./page/CaseStudies";
import Contact from "./page/Contact";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

import ScrollToTop from "./component/ScrollToTop";
import WhatsAppButton from "./component/WhatsAppButton";
import AiChatButton from "./component/AiChatButton";
import EnquiryWidget from "./component/EnquiryWidget";


AiChatButton

function App() {
  return (
    <BrowserRouter>
       

      <Navbar />
 <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
       <WhatsAppButton />
    <AiChatButton/>
    <EnquiryWidget/>
    </BrowserRouter>
  );
}

export default App;
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import TrustBar from "../component/TrustBar";
import GrowthApproach from "../component/GrowthApproach";
import Services from "../component/Services";
import WhyChooseUs from "../component/WhyChooseUs";
import Results from "../component/Results";
import Testimonials from "../component/Testimonials";
import CTA from "../component/CTA";
import Footer from "../component/Footer";





const Home = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

       {/* Hero Section */}
      <Hero />

       <TrustBar />
       <GrowthApproach />
<Services />
    <WhyChooseUs/>
    <Results/>
    <Testimonials/>
    <CTA/>
    
    </>
  );
};

export default Home;




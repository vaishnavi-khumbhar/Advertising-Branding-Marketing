import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBullhorn,
  FaLaptopCode,
  FaSearch,
  FaPaintBrush,
  FaVideo,
  FaGoogle,
  FaChartLine,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";


import digitalMarketingImg from "../assets/Services/digital-marketing.jpg";
import websiteDevImg from "../assets/Services/website_development.webp";
import brandDesignImg from "../assets/Services/drand_design.jpg";
import googleAdsImg from "../assets/Services/google_ads.jpg";
import metaImg from "../assets/Services/meta.jpg";
import socialImg from "../assets/Services/social-media.png";
import videoImg from "../assets/Services/video_editing.jpg";

import whychoose from "../assets/why_us.jpg";

function Services() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-out-cubic",
      offset: 0,
      delay: 0,
      mirror: false,
      anchorPlacement: "top-bottom",
      disable: false,
    });

    AOS.refresh();

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => AOS.refreshHard(), 150);
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    const loadTimer = setTimeout(() => AOS.refreshHard(), 500);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      clearTimeout(resizeTimer);
      clearTimeout(loadTimer);
    };
  }, []);

  const services = [
  {
    image: digitalMarketingImg,
    icon: <FaBullhorn />,
    title: "Digital Marketing",
    desc: "Data-driven marketing that increases visibility, generates leads, and drives measurable growth.",
  },
  {
    image: websiteDevImg,
    icon: <FaLaptopCode />,
    title: "Website Development",
    desc: "Fast, responsive, and SEO-optimized websites built to convert visitors into customers.",
  },
  {
    image: socialImg,
    icon: <FaSearch />,
    title: "Social Media Marketing",
    desc: "Engaging content and smart strategies that turn followers into customers.",
  },
  {
    image: brandDesignImg,
    icon: <FaPaintBrush />,
    title: "Branding & Creative Design",
    desc: "Build a memorable brand with powerful visuals and a strong identity.",
  },
  {
    image: videoImg,
    icon: <FaVideo />,
    title: "Video Editing",
    desc: "High-impact videos and content designed to capture attention and boost engagement.",
  },
  {
    image: googleAdsImg,
    icon: <FaGoogle />,
    title: "Google Ads / PPC",
    desc: "Reach customers actively searching for your services and maximize your ROI.",
  },
  {
    image: metaImg,
    icon: <FaChartLine />,
    title: "Meta Advertising",
    desc: "Targeted Facebook and Instagram campaigns that generate quality leads and sales.",
  },
];

  const whyFeatures = [
    {
      title: "Tailored Strategies",
      desc: "Every business is unique. We create customized marketing solutions built around your goals, audience, and industry.",
    },
    {
      title: "Results That Matter",
      desc: "Our focus is simple — generate leads, increase sales, and maximize your ROI.",
    },
    {
      title: "AI-Powered Marketing",
      desc: "We combine creativity with AI-driven insights to optimize campaigns and improve performance.",
    },
    {
      title: "Stay Ahead of the Competition",
      desc: "Digital trends change fast. We help your brand stay relevant, visible, and one step ahead.",
    },
  ];

  return (
    <div className="bg-[#FFF8EE] font-['Inter',sans-serif] text-[#0F1E3D] overflow-x-hidden">
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F5F9FF] via-[#FFF7F2] to-[#F3FFFE] px-4 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-20 text-center">

        {/* Soft grid background */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] 
          [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
          [background-size:60px_60px]" />

        {/* Floating blur blobs */}
        <div className="pointer-events-none absolute -top-28 -left-28 h-96 w-96 rounded-full bg-[#FF6B1A]/20 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute top-1/3 -right-28 h-80 w-80 rounded-full bg-[#0EA5A4]/20 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#FFD6A5]/20 blur-3xl" />

        <div className="relative mx-auto max-w-3xl">
          <span
            className="mb-6 inline-block rounded-full border border-[#FF6B1A]/30 bg-white/80 backdrop-blur px-5 py-2 text-sm font-semibold tracking-wide text-[#FF6B1A] shadow-md"
            data-aos="fade-down"
          >
            Digital Marketing Services
          </span>

          
          <h1
            className="font-['Playfair_Display',serif] text-3xl sm:text-4xl font-bold leading-tight text-[#0F1E3D] md:text-5xl"
            data-aos="fade-up"
          >
            Digital Marketing
            <span className="block text-[#FF6B1A]">Services in Pune</span>
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-gray-600 leading-7 sm:leading-8 text-sm sm:text-base md:text-lg font-medium px-2">
            We provide comprehensive digital marketing and branding services
            designed to help businesses increase visibility, generate leads,
            and grow revenue.
          </p>

            <div
  className="
    flex flex-col sm:flex-row
    gap-4
    items-center
    justify-center
    mt-6
  "
  style={{ fontFamily: "Cormorant Garamond, serif" }}
>
           <button
    onClick={() => navigate("/contact")}
    className="
      rounded-full
      bg-white
      border-2 border-orange-500
      px-6 sm:px-7 py-3
      text-lg sm:text-xl font-bold text-orange-600
      shadow-lg
      transition-all duration-300
      hover:bg-orange-500 hover:text-white
      hover:scale-105 hover:shadow-xl
      w-full sm:w-auto
    "
  >
    Book Free Consultation
  </button>

  <button
    onClick={() => navigate("/OurWork")}
    className="
      rounded-full
      border-2 border-orange-500
      px-6 sm:px-7 py-3
      text-lg sm:text-xl font-bold text-orange-600
      transition-all duration-300
      hover:bg-orange-500 hover:text-white
      hover:scale-105 hover:shadow-lg
      w-full sm:w-auto
    "
  >
    View Our Work
  </button>
          </div>
        </div>
      </section>

      {/* ---------------- SERVICE CARDS ---------------- */}
      <section className="px-4 py-10 sm:py-14 lg:py-16">
  <div className="mx-auto max-w-6xl">

    {/* Header */}
    <div
      className="mx-auto mb-12 sm:mb-16 max-w-2xl text-center"
      data-aos="fade-up"
    >
      <div className="inline-flex px-5 py-2 rounded-full bg-orange-100 text-[#FF6B1A] text-sm font-medium">
        Our Services
      </div>

      <h2 className="mt-3 font-['Playfair_Display',serif] text-2xl sm:text-3xl md:text-4xl font-bold">
        <span className="text-black">What We </span>
        <span className="text-[#FF6B1A]">Offer</span>
      </h2>

      <p className="mt-4 leading-7 text-[#64748B] text-sm sm:text-base md:text-lg font-medium">
        From strategy to execution, we manage every digital channel your brand
        needs to grow, engage audiences, and scale online effectively.
      </p>
    </div>

    {/* Cards */}
    <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, i) => (
        <div
          key={service.title}
          data-aos="fade-up"
          data-aos-delay={(i % 3) * 120}
          className="group relative mx-auto w-full max-w-[350px] overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
          
          {/* Image */}
         <div className="relative h-55 overflow-hidden rounded-xl bg-gray-100">
  <img
    src={service.image}
    alt={service.title}
    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
  />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/90 text-[#FF6B1A] shadow-md backdrop-blur text-sm">
              {service.icon}
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-5 text-center">
  
  {/*  Bigger Title */}
  <h4 className="text-lg sm:text-xl font-bold text-[#0F1E3D] font-['Playfair_Display',serif]">
    {service.title}
  </h4>

<p className="mt-3 text-[#64748B] text-base sm:text-lg leading-7 text-center">
  {service.desc}
</p>
  {/* Animated underline centered */}
  <div className="mx-auto mt-4 h-[2px] w-8 bg-gray-200 group-hover:w-14 group-hover:bg-[#FF6B1A] transition-all duration-300" />
</div>
</div>
      ))}
    </div>

  </div>
</section>

      {/* ---------------- WHY CHOOSE US ---------------- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-orange-50 px-4 py-10 sm:py-14 lg:py-20">
        {/* Blur Background */}
        <div className="pointer-events-none absolute top-0 left-0 h-60 w-60 rounded-full bg-sky-200/20 blur-3xl"></div>
        <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-200/20 blur-3xl"></div>

        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:gap-12 lg:grid-cols-12">
            {/* LEFT CONTENT */}
            <div className="lg:col-span-6" data-aos="fade-right">
              <span className="inline-flex items-center rounded-full border border-sky-100 bg-white px-4 py-2 text-sm font-medium text-[#0070B8] shadow-sm">
                Why Choose Us
              </span>

            <h2 className="mt-4 font-['Playfair_Display',serif] text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-[#0F1E3D]">
  Your <span className="text-black">Success</span>{" "}
  <span className="text-[#FF7A00]">is Our Priority</span>
</h2>

             <p className="mt-5 max-w-3xl text-[#64748B] text-sm sm:text-base md:text-lg leading-7 sm:leading-8 md:leading-9 font-medium mx-auto">
  We help brands grow through innovative digital marketing, creative storytelling, and performance-driven strategies that deliver measurable results.
</p>

             <div className="mt-8 grid gap-6 sm:grid-cols-2">
  {whyFeatures.map((item, i) => (
    <div
      key={item.title}
      data-aos="fade-up"
      data-aos-delay={i * 80}
      className="
        group relative rounded-2xl
        border border-white/40
        bg-white/70 backdrop-blur-xl
        p-6 pt-10 shadow-sm
        transition-all duration-500
        hover:-translate-y-2 hover:shadow-2xl
      "
    >
      {/* Icon Top Floating */}
      <div className="absolute -top-5 left-6">
        <div className="
          flex h-12 w-12 items-center justify-center
          rounded-xl bg-gradient-to-br from-[#FF7A00] to-[#FF8A3D]
          text-white shadow-lg
          transition-transform duration-300
          group-hover:scale-110
        ">
          <FaCheck />
        </div>
      </div>

      {/* Content */}
      <div className="mt-4">
        <h5 className="
          text-base font-semibold text-[#0F172A]
          font-['Playfair_Display',serif]
          group-hover:text-[#FF7A00]
          transition-colors
        ">
          {item.title}
        </h5>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {item.desc}
        </p>
      </div>

      {/* Bottom Glow Line */}
      <div className="
        absolute bottom-0 left-0 h-[2px] w-0
        bg-gradient-to-r from-[#0070B8] to-[#FF7A00]
        transition-all duration-500
        group-hover:w-full
      " />
    </div>
  ))}
</div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="lg:col-span-6 flex justify-center" data-aos="zoom-in">
              <div className="bg-gradient-to-br from-[#0070B8] to-[#FF6B1A] p-2 rounded-3xl shadow-2xl">
                <div className="w-full max-w-md overflow-hidden rounded-[20px] bg-white">
                  <img
  src={whychoose}
  alt="AB Marketing Wings"
  className="h-full w-full object-cover"
/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="relative overflow-hidden px-4 sm:px-6 py-16 sm:py-24 text-center text-[#0F172A]
bg-gradient-to-br from-white via-[#F7FAFF] to-[#FFF6F0]">

  {/* Soft Blobs */}
  <div className="pointer-events-none absolute -top-20 -left-20 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-orange-200/20 blur-3xl" />

  {/* Grid Pattern */}
  <div className="pointer-events-none absolute inset-0 opacity-[0.05]
    [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
    [background-size:60px_60px]" />

  {/* Content */}
  <div className="relative mx-auto max-w-3xl" data-aos="zoom-in">

    <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
      Ready To <span className="text-[#FF7A00]">Grow Your Business?</span>
    </h2>

    <p className="mt-5 text-gray-600 text-sm sm:text-base md:text-lg leading-7">
      Let's create a marketing strategy that delivers measurable growth
      and long-term success.
    </p>

    {/* Button */}
    <button
      onClick={() => navigate("/contact")}
className="
  mt-7 inline-flex items-center gap-2
  rounded-full
  bg-orange-500
  px-7 py-3
  text-lg md:text-xl
  font-semibold text-white
  shadow-lg shadow-orange-500/30
  transition-all duration-300
  hover:bg-orange-600
  hover:scale-105 hover:shadow-xl
"
     style={{ fontFamily: "Cormorant Garamond, serif" }}
 >
      Contact Us Today
    </button>

  </div>
</section>
    </div>
  );
}

export default Services;

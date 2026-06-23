import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCheckCircle,
  FaArrowRight,
  FaQuoteLeft,
  FaChartLine,
  FaHeart,
  FaBullseye,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function CaseStudy() {
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

  const achievements = [
    "Stronger Brand Identity & Recognition",
    "Increased Online Visibility & Reach",
    "Higher Audience Engagement",
    "Quality Leads & Better Conversions",
    "Impactful Content, Reels & Campaigns",
    "Sustainable Business Growth",
  ];


  return (
    <div className="bg-[#FFF8EE] font-['Inter',sans-serif] text-[#0F1E3D] overflow-x-hidden">
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F5F9FF] via-[#FFF7F2] to-[#F3FFFE] px-4 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-20 text-center">

        <div className="pointer-events-none absolute inset-0 opacity-[0.06] 
          [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
          [background-size:60px_60px]" />

        <div className="pointer-events-none absolute -top-28 -left-28 h-96 w-96 rounded-full bg-[#FF6B1A]/20 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute top-1/3 -right-28 h-80 w-80 rounded-full bg-[#0EA5A4]/20 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#FFD6A5]/20 blur-3xl" />

        <div className="relative mx-auto max-w-3xl">
          <span
            className="mb-6 inline-block rounded-full border border-[#FF6B1A]/30 bg-white/80 backdrop-blur px-5 py-2 text-sm font-semibold tracking-wide text-[#FF6B1A] shadow-md"
            data-aos="fade-down"
          >
            Case Studies
          </span>

          <h1
            className="font-['Playfair_Display',serif] text-3xl sm:text-4xl font-bold leading-tight text-[#0F1E3D] md:text-5xl"
            data-aos="fade-up"
          >
            Every Brand Begins
            <span className="block text-[#FF6B1A]">With a Dream</span>
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-gray-600 leading-7 sm:leading-8 text-sm sm:text-base md:text-lg font-medium px-2">
            A dream to be noticed. To be trusted. To make a lasting impact.
            See how we turn that dream into real, measurable results.
          </p>

          <div
            className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <button
              onClick={() => navigate("/contact")}
              className="rounded-full bg-gradient-to-r from-[#FF6B1A] to-[#FF8A3D] px-6 sm:px-7 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-[#FF6B1A]/25 transition-all hover:scale-105 hover:shadow-xl"
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* ---------------- BRAND STORY ---------------- */}
      <section className="px-4 py-10 sm:py-14 lg:py-20">
        <div className="mx-auto max-w-4xl text-center" data-aos="fade-up">
          <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            <span className="text-[#0F1E3D]">But Turning A Dream Into Reality </span>
            <span className="text-[#FF6B1A]">Takes More Than Marketing</span>
          </h2>

          <p className="mt-6 text-[15px] sm:text-base md:text-lg leading-7 sm:leading-8 text-[#475569]">
            It takes the right strategy, the right message, and the
            confidence to stand out. At Advertising Branding & Marketing, we help
            businesses find their voice, build their identity, and connect
            with the people who matter most.
          </p>

          <blockquote
            className="mt-8 mx-auto max-w-2xl border-l-4 border-[#FF6B1A] pl-5 sm:pl-6 text-left font-['Playfair_Display',serif] text-base sm:text-lg italic text-[#0F1E3D]/80"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We don't believe in simply increasing numbers; we believe in
            creating meaningful growth that helps brands become memorable
            and trusted.
          </blockquote>
        </div>
      </section>

      {/* ----------------  CASE STUDY ---------------- */}
      {/* ---------------- PREMIUM CASE STUDIES ---------------- */}

<section className="bg-gradient-to-br from-slate-50 via-white to-orange-50 px-4 py-12 sm:py-16 lg:py-15">
  <div className="mx-auto max-w-7xl">


<div className="text-center mb-16" data-aos="fade-up">
  <span className="inline-flex items-center rounded-full border border-[#FF6B1A]/20 bg-white px-4 py-2 text-sm font-semibold text-[#FF6B1A] shadow-sm">
    Success Stories
  </span>

  <h2 className="mt-4 font-['Playfair_Display',serif] text-3xl sm:text-4xl md:text-5xl font-bold">
    <span className="text-[#0F1E3D]">Results That </span>
    <span className="text-[#FF6B1A]">Speak For Themselves</span>
  </h2>

  <p className="mt-4 max-w-2xl mx-auto text-[#64748B]">
    Every campaign is built around one goal — measurable business growth.
  </p>
</div>

<div className="grid lg:grid-cols-3 gap-8">

  {/* Card 1 */}
  <div
    data-aos="fade-up"
    className="group overflow-hidden rounded-[32px] bg-white shadow-xl border border-slate-100 transition-all duration-500 hover:-translate-y-2"
  >
    <div className="relative h-60 overflow-hidden">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxocZI8JAb_E3opIMtH-QLrb3AGJgQn0W3x4Y-Y9Pcog&s=10"
        alt=""
        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute top-4 left-4 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#FF6B1A] ">
        Performance Marketing
      </div>
    </div>

    <div className="p-7">
      <div className="text-5xl font-bold text-[#FF6B1A]">250%</div>

      <h3 className="mt-3 text-xl font-bold text-[#0F1E3D] font-['Playfair_Display',serif]">
        Growth In Qualified Leads
      </h3>

      <p className="mt-4 text-[#64748B] leading-7">
        Through audience targeting, conversion-focused creatives,
        and campaign optimization, we delivered significant lead growth.
      </p>
    </div>
  </div>

  {/* Card 2 */}
 <div
  data-aos="fade-up"
  data-aos-delay="100"
  className="group overflow-hidden rounded-[32px] bg-gradient-to-br from-[#FFF7ED] via-white to-[#FEF3C7] text-[#0F1E3D] shadow-xl border border-orange-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
>
  <div className="p-8">

    <div className="inline-flex rounded-full bg-[#FFF1E6] px-4 py-2 text-sm font-semibold text-[#FF6B1A]">
      Brand Building
    </div>

    <div className="mt-8 text-6xl font-bold text-[#FF6B1A]">
      3X
    </div>

    <h3 className="mt-4 text-2xl font-bold text-[#0F1E3D] font-['Playfair_Display',serif]">
      Increase in Brand Visibility
    </h3>

    <p className="mt-4 leading-7 text-[#475569]">
      Through strategic content creation, social media campaigns, and
      compelling storytelling, we helped brands expand their reach,
      strengthen audience trust, and build a memorable market presence.
    </p>

    <div className="mt-8 h-2 rounded-full bg-orange-100">
      <div className="h-2 w-[85%] rounded-full bg-[#FF6B1A]" />
    </div>

    <div className="mt-4 flex justify-between text-sm font-medium text-[#64748B]">
      <span>Brand Awareness</span>
      <span>85%</span>
    </div>

  </div>
</div>

  {/* Card 3 */}
  <div
    data-aos="fade-up"
    data-aos-delay="200"
    className="group overflow-hidden rounded-[32px] bg-white shadow-xl border border-slate-100 transition-all duration-500 hover:-translate-y-2"
  >
    <div className="relative h-60 overflow-hidden">
      <img
        src="https://img.freepik.com/premium-photo/digital-design-businessman-show-growth-graph-earning-with-digital-marketing-strategy_35761-549.jpg"
        alt=""
        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute top-4 left-4 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#FF6B1A]">
        Digital Strategy
      </div>
    </div>

    <div className="p-7">
      <div className="text-5xl font-bold text-[#FF6B1A]">100%</div>

      <h3 className="mt-3 text-xl font-bold text-[#0F1E3D] font-['Playfair_Display',serif]">
        Increase In Audience Engagement
      </h3>

      <p className="mt-4 text-[#64748B] leading-7">
        Engaging content, reels and targeted campaigns helped brands
        connect better with their audience and improve interaction.
      </p>
    </div>
  </div>

</div>


  </div>
</section>


      {/* ---------------- WHAT WE'VE HELPED BRANDS ACHIEVE ---------------- */}
      {/* ---------------- WHAT WE'VE HELPED BRANDS ACHIEVE ---------------- */}
<section className="relative overflow-hidden bg-gradient-to-br from-[#FFFDF8] via-white to-[#FFF7ED] px-4 py-12 lg:py-16">

  {/* Background Blur Effects */}
  <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-[#FF6B1A]/10 blur-3xl"></div>
  <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#0070B8]/10 blur-3xl"></div>

  <div className="relative mx-auto max-w-7xl">

    {/* Heading */}
    <div
      className="mx-auto mb-12 max-w-3xl text-center"
      data-aos="fade-up"
    >
      <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF1E6] px-5 py-2 text-sm font-semibold text-[#FF6B1A] shadow-sm">
       
        Real Outcomes
      </span>

      

      <h2 className="mt-4 font-['Playfair_Display',serif] text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
        <span className="text-[#0F1E3D]">
          What We've Helped Brands
        </span>
        <br />
        <span className="text-[#FF6B1A]">
          Achieve
        </span>
      </h2>

      <p className="mt-4 text-sm sm:text-base text-[#64748B] max-w-2xl mx-auto">
        We focus on measurable business growth, stronger branding and
        meaningful customer engagement.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

      {achievements.map((item, i) => (
        <div
          key={item}
          data-aos="zoom-in"
          data-aos-delay={i * 100}
          className="group relative overflow-hidden rounded-3xl bg-white p-5 sm:p-6 border border-slate-100 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-[#FF6B1A]/30"
        >

          {/* Hover Glow */}
          <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#FF6B1A]/10 blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100"></div>

          <div className="relative">

            <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-[#FF6B1A] to-[#FF8A3D] text-white shadow-md">
              <FaCheckCircle size={18} />
            </div>

            <h3 className="mt-4 font-['Playfair_Display',serif] text-base sm:text-lg lg:text-xl font-bold leading-snug text-[#0F1E3D]">
              {item}
            </h3>

            <div className="mt-4 h-1 w-12 rounded-full bg-[#FF6B1A] transition-all duration-500 group-hover:w-20"></div>

          </div>
        </div>
      ))}

    </div>

  </div>
</section>

      {/* ---------------- BRAND PHILOSOPHY ---------------- */}
      <section className="bg-[#F4EFE3] px-4 py-10 sm:py-14 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div data-aos="zoom-in">
            <FaHeart className="mx-auto text-3xl text-[#FF6B1A]/50 mb-5" />
            <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              <span className="text-[#0F1E3D]">Every result tells a story. </span>
              <span className="text-[#FF6B1A]">A story of a business that dared to dream bigger.</span>
            </h2>

            <p className="mt-6 text-[15px] sm:text-base md:text-lg leading-7 sm:leading-8 text-[#475569]">
              Because the reason we're called{" "}
              <span className="font-semibold text-[#0F1E3D]">Advertising Branding & Marketing</span>{" "}
              is simple — we don't just market brands. We give them the
              wings to rise above the noise, reach new heights, and become
              the brand they were meant to be.
            </p>
          </div>

          <div
  className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
  data-aos="fade-up"
  data-aos-delay="100"
>
  {[
    {
      icon: <FaBullseye />,
      label: "Right Strategy",
      desc: "Data-driven planning that aligns with your business goals.",
    },
    {
      icon: <FaQuoteLeft />,
      label: "Right Message",
      desc: "Crafting compelling stories that connect with your audience.",
    },
    {
      icon: <FaChartLine />,
      label: "Measurable Growth",
      desc: "Turning marketing efforts into tangible business results.",
    },
  ].map((item, index) => (
    <div
      key={item.label}
      className="group relative overflow-hidden rounded-[28px] border border-white/50 bg-white/80 backdrop-blur-xl p-7 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(255,107,26,0.15)]"
    >
      {/* Hover Glow */}
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#FF6B1A]/10 blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100" />

      {/* Icon */}
      <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#FF6B1A] to-[#FF8A3D] text-2xl text-white shadow-lg transition-all duration-500 group-hover:scale-110">
        {item.icon}
      </div>

      {/* Content */}
      <h3 className="mt-6 font-['Playfair_Display',serif] text-xl font-bold text-[#0F1E3D]">
        {item.label}
      </h3>

      <p className="mt-3 text-sm leading-7 text-[#64748B]">
        {item.desc}
      </p>

      {/* Bottom Line */}
      <div className="mt-5 h-1 w-12 rounded-full bg-[#FF6B1A] transition-all duration-500 group-hover:w-24" />

      {/* Number */}
      <div className="absolute right-6 top-6 text-5xl font-bold text-[#FF6B1A]/10">
        0{index + 1}
      </div>
    </div>
  ))}
</div>



        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      {/* ---------------- CTA ---------------- */}
<section className="relative overflow-hidden px-4 sm:px-6 py-16 sm:py-24 text-center text-[#0F172A] bg-gradient-to-br from-white via-[#F7FAFF] to-[#FFF6F0]">

  {/* Soft Blobs */}
  <div className="pointer-events-none absolute -top-20 -left-20 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-orange-200/20 blur-3xl" />

  {/* Grid Pattern */}
  <div
    className="pointer-events-none absolute inset-0 opacity-[0.05]
    [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
    [background-size:60px_60px]"
  />

  <div
    className="relative mx-auto max-w-3xl"
    data-aos="zoom-in"
  >
   

    <h2 className="mt-5 font-['Playfair_Display',serif] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
      <span className="text-[#0F1E3D]">
        Your Success Story
      </span>
     {" "}
      <span className="text-[#FF7A00]">
        Could Be Next
      </span>
    </h2>

    <p className="mt-5 text-gray-600 text-sm sm:text-base md:text-lg leading-7 max-w-2xl mx-auto">
      Let's give your brand the wings to soar. 
    </p>

    <button
      onClick={() => navigate("/contact")}
      className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0070B8] to-[#FF6B1A] px-8 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      Contact Us Today
      <FaArrowRight />
    </button>
  </div>
</section>
 </div>
  );
}

export default CaseStudy;

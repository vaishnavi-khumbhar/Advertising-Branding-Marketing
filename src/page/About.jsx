import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  FaBullhorn,
  FaHashtag,
  FaPalette,
  FaVideo,
  FaLaptopCode,
  FaFacebookF,
  FaAd,
  FaChartLine,
  FaUsers,
  FaUserTie,
  FaDesktop,
  FaFileAlt,
  FaClipboardCheck,
  FaQuoteLeft,
  FaArrowRight,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutImg from "../assets/images/About.jpeg";

function About() {
  const navigate = useNavigate();

  useEffect(() => {
    // Mobile fix: keep animations ON for mobile, but use settings that
    // don't break on mobile's shifting viewport height (address bar
    // collapsing/expanding while scrolling). Lower offset + shorter
    // duration + disableMutationObserver:false ensures AOS recalculates
    // trigger points correctly instead of leaving items stuck at opacity:0.
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-out-cubic",
      offset: 0, // 0 = trigger as soon as element enters viewport bottom — fixes mobile cutting off offset:20 too early
      delay: 0,
      mirror: false,
      anchorPlacement: "top-bottom",
      disable: false, // animations stay ON for mobile too
      startEvent: "DOMContentLoaded",
      disableMutationObserver: false,
    });

    AOS.refresh();

    // Re-run AOS calculations whenever the viewport size actually changes
    // (rotation, address-bar collapse on scroll, etc). This is the key
    // mobile fix: without it, AOS's internal trigger positions go stale
    // and animations either never fire or fire all at once / not at all.
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        AOS.refreshHard();
      }, 150);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    // Also refresh once after images/fonts settle, since layout shift
    // after load is the #1 cause of AOS miscalculating on mobile.
    const loadTimer = setTimeout(() => {
      AOS.refreshHard();
    }, 500);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      clearTimeout(resizeTimer);
      clearTimeout(loadTimer);
    };
  }, []);

  const expertiseData = [
    { title: "Digital Marketing", icon: <FaBullhorn /> },
    { title: "Social Media Marketing", icon: <FaHashtag /> },
    { title: "Branding & Design", icon: <FaPalette /> },
    { title: "Video Editing", icon: <FaVideo /> },
    { title: "Website Development", icon: <FaLaptopCode /> },
    { title: "Facebook Ads", icon: <FaFacebookF /> },
    { title: "PPC Advertising", icon: <FaAd /> },
    { title: "Lead Generation", icon: <FaUsers /> },
  ];

  const teamData = [
    { icon: <FaUsers />, title: "Strategy & Consultation", desc: "Define, Align, Elevate" },
    { icon: <FaUserTie />, title: "Coders & Developers", desc: "Design, Develop, Launch" },
    { icon: <FaDesktop />, title: "Visualizers & Video", desc: "Design, Motion, Impact" },
    { icon: <FaBullhorn />, title: "Digital Marketers", desc: "Click, Reach, Grow" },
    { icon: <FaFileAlt />, title: "Content Creators", desc: "Ideas, Words, Influence" },
    { icon: <FaClipboardCheck />, title: "Operations & Accounting", desc: "Manage, Optimise, Compliance" },
  ];

  const whyChoose = [
    {
      title: "We Build Brands, Not Just Campaigns",
      desc: "A successful business is built on trust and recognition. We help you create a strong brand identity that customers remember, connect with, and choose repeatedly.",
    },
    {
      title: "Strategies Designed Around Your Business",
      desc: "No two businesses are the same. That's why we develop customized marketing strategies tailored to your goals, industry, audience, and growth stage.",
    },
    {
      title: "Creativity That Creates Impact",
      desc: "From content and design to videos and advertising campaigns, we combine creativity with strategy to help your brand stand out in a crowded digital marketplace.",
    },
    {
      title: "Data-Driven Growth",
      desc: "Every decision we make is backed by insights and performance data. Our focus is not just on visibility but on generating measurable business results.",
    },
    {
      title: "A Partner Invested in Your Success",
      desc: "We don't see ourselves as a service provider. We see ourselves as an extension of your team, committed to helping your business grow at every stage.",
    },
  ];

  const solutions = [
    {
      num: "01",
      icon: <FaBullhorn />,
      title: "Brand Strategy & Identity",
      desc: "Build a strong and memorable brand with professional logo design, brand identity development, and strategic positioning that helps your business stand out from competitors.",
      chips: ["Logo Design", "Brand Identity"],
    },
    {
      num: "02",
      icon: <FaAd />,
      title: "Advertising Campaigns",
      desc: "Reach the right audience through creative and result-driven advertising campaigns across digital, social media, print, and outdoor platforms.",
      chips: ["Digital Ads", "Campaign Strategy"],
    },
    {
      num: "03",
      icon: <FaChartLine />,
      title: "Digital Marketing Solutions",
      desc: "Accelerate business growth with data-driven marketing strategies, including social media management, content marketing, and lead generation services.",
      chips: ["Social Media", "Leads"],
    },
  ];

 const solutionsimg = [
  {
    num: "01",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600",
    icon: <FaBullhorn />,
    title: "Brand Strategy & Identity",
    desc: "Build a strong and memorable brand with professional logo design, brand identity development, and strategic positioning that helps your business stand out.",
    chips: ["Logo Design", "Brand Identity"],
  },
  {
    num: "02",
    image:
      "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1600",
    icon: <FaAd />,
    title: "Advertising Campaigns",
    desc: "Reach the right audience through creative and result-driven advertising campaigns across digital platforms and social media marketing.",
    chips: ["Digital Ads", "Campaign Strategy"],
  },
  {
    num: "03",
    image:
      "https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1600",
    icon: <FaChartLine />,
    title: "Digital Marketing Solutions",
    desc: "Accelerate business growth with data-driven marketing strategies including SEO, social media and lead generation.",
    chips: ["Social Media", "Leads"],
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

        {/* Content */}
        <div className="relative mx-auto max-w-3xl">

          <span
            className="mb-6 inline-block rounded-full border border-[#FF6B1A]/30 bg-white/80 backdrop-blur px-5 py-2 text-sm font-semibold tracking-wide text-[#FF6B1A] shadow-md"
            data-aos="fade-down"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
>
            About Us
          </span>

          <h1
            className="font-['Playfair_Display',serif] text-3xl sm:text-4xl font-bold leading-tight text-[#0F1E3D] md:text-5xl"
            data-aos="fade-up"   style={{ fontFamily: "Cormorant Garamond, serif" }}

          >
            About Advertising
            <span className="block text-[#FF6B1A]">and Branding Marketing</span>
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-gray-600 leading-7 sm:leading-8 text-sm sm:text-base md:text-lg font-medium px-2">
            We create modern branding, performance marketing, and digital growth strategies that empower businesses to scale faster and achieve lasting success.
          </p>

          <div
            className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
            data-aos="fade-up"
            data-aos-delay="150"
          >

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
        </div>
      </section>

      {/* ---------------- ABOUT COMPANY ---------------- */}
      <section className="px-4 py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 sm:mb-16 max-w-2xl text-center" data-aos="fade-up">

           

             <div
  className="
  inline-flex items-center gap-2
  px-5 sm:px-6
  py-2.5

  rounded-full

  bg-gradient-to-r
  from-orange-50
  to-white

  border border-orange-200

  shadow-md shadow-orange-100/40

  text-[#0F1E3D]
  text-base sm:text-lg

  font-semibold

  hover:scale-105
  transition-all duration-300
  "
  style={{ fontFamily: "Cormorant Garamond, serif" }}
>
   About Us
</div>


            <h2 className="mt-3  text-2xl sm:text-3xl font-bold md:text-4xl leading-tight"   style={{ fontFamily: "Cormorant Garamond, serif" }}
>
              <span className="text-[#111111]">About Advertising</span>
              <span className="text-[#FF7A00]"> &amp; Branding Marketing </span>
            </h2>

          </div>

          <div className="grid items-start gap-10 sm:gap-12 lg:grid-cols-12">
            {/* Image + founder card */}
            <div
              className="relative lg:col-span-5 flex flex-col items-center"
              data-aos="zoom-in"
            >
              {/* Circular Image */}
              <div className="bg-[#FFA355] p-2 rounded-full shadow-2xl">
  <div
    className="
      w-56 h-56
      sm:w-72 sm:h-72
      md:w-96 md:h-96
      lg:w-[420px] lg:h-[420px]
      rounded-full overflow-hidden bg-white
    "
  >
    <img
      src={AboutImg}
      alt="Advertising Branding Marketing"
      className="w-full h-full object-cover"
    />
  </div>
</div>
              

              {/* Founder Card */}
              <div className="mt-6 w-full max-w-xs sm:max-w-sm rounded-2xl bg-white px-6 py-4 shadow-lg flex items-center justify-between">
                <div>
                  <h4
  className="font-semibold text-[#ff7a00] text-2xl"
  style={{ fontFamily: "Cormorant Garamond, serif" }}
>
  Arti Hulle
</h4>

                  <span className="text-sm text-[#64748B]">
                    Founder • 2024
                  </span>
                </div>

                <FaQuoteLeft className="text-3xl text-[#FF6B1A]/30" />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7" data-aos="fade-left">

              {/* Heading */}
              <h3 className=" text-2xl sm:text-3xl lg:text-5xl font-bold text-[#0F1E3D] leading-tight text-center lg:text-left"   style={{ fontFamily: "Cormorant Garamond, serif" }}
>
                Building Brands That Inspire Growth
              </h3>

              {/* Quote */}
              <blockquote className="my-6 border-l-4 border-[#FF6B1A] pl-4 sm:pl-6 font-['Playfair_Display',serif] text-base sm:text-lg italic text-[#0F1E3D]/80">
                Every business starts with a dream — to create something
                meaningful, serve people, and build a legacy.
              </blockquote>

              {/* Paragraph 1 */}
              <p className="mt-4 text-[15px] sm:text-base leading-7 text-[#475569] text-justify">
                But when the world changed in 2020, many businesses found
                themselves facing an unexpected challenge. Storefronts closed,
                customer interactions disappeared, and traditional ways of
                doing business were no longer enough.
              </p>

              {/* Paragraph 2 */}
              <p className="mt-4 text-[15px] sm:text-base leading-7 text-[#475569] text-justify">
                Businesses that embraced digital platforms continued to
                connect with customers, build trust, and grow despite
                uncertainty. Those who stayed invisible often found it
                difficult to survive.
              </p>

              {/* Paragraph 3 */}
              <p className="mt-4 text-[15px] sm:text-base leading-7 text-[#475569] text-justify">
                That realization sparked an idea. In 2024,
               <span
  className="font-semibold text-xl md:text-2xl text-[#ff7a00]"
  style={{ fontFamily: "Cormorant Garamond, serif" }}
>
  {" "}Advertising Branding & Marketing
</span>
                {" "}was born with a simple mission — helping businesses become
                visible, memorable, and future-ready. We believe every
                business has a unique story worth telling and a brand worth
                building.
              </p>

              {/* Feature Cards */}
            <div
  className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 max-w-xl mx-auto px-3 sm:px-0"
  style={{ fontFamily: "Cormorant Garamond, serif" }}
>
  {[
    "Digital Growth",
    "Brand Strategy",
    "Creative Marketing",
    "Results Driven",
  ].map((label, i) => (
    <div
      key={label}
      data-aos="flip-up"
      data-aos-delay={100 * (i + 1)}
      className="
        rounded-2xl
        border border-orange-300
        bg-white
        px-3 py-4 sm:px-4 sm:py-5
        text-center
        text-base sm:text-lg md:text-xl
        font-bold
        text-orange-600
        shadow-sm
        hover:shadow-lg
        hover:scale-105
        transition-all duration-300
        break-words
      "
    >
      {label}
    </div>
  ))}
</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- WHY CHOOSE US ---------------- */}
      <section className="bg-gradient-to-br from-sky-50 via-white to-orange-50 px-4 py-10 sm:py-14 lg:py-20">
        <div className="mx-auto max-w-6xl">

          {/* Heading */}
          <div
            className="mx-auto mb-12 sm:mb-16 max-w-3xl text-center"
            data-aos="fade-up"
          >

           

            <div
  className="
  inline-flex items-center gap-2
  px-5 sm:px-6
  py-2.5

  rounded-full

  bg-gradient-to-r
  from-orange-50
  to-white

  border border-orange-200

  shadow-md shadow-orange-100/40

  text-[#0F1E3D]
  text-base sm:text-lg

  font-semibold

  hover:scale-105
  transition-all duration-300
  "
  style={{ fontFamily: "Cormorant Garamond, serif" }}
>
                Why Choose Us

</div>


            <h2 className="mt-3 font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold md:text-5xl leading-tight">
              <span className="text-[#0F172A]">Why Choose</span>{" "}
              <span className="text-[#FF7A00]">Choose Us</span>
            </h2>

            <p className="mt-5 max-w-3xl mx-auto text-gray-500 leading-7 sm:leading-8 text-sm sm:text-base md:text-lg font-medium px-2">
              Digital marketing is not just about likes, followers, or running
              advertisements. It's about creating meaningful connections between
              your business and the people who matter most.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2">
            {whyChoose.map((item, i) => (
              <div
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className={`flex gap-4 rounded-3xl border border-slate-100 bg-white p-6 sm:p-7 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  i === whyChoose.length - 1
                    ? "sm:col-span-2 sm:max-w-xl sm:mx-auto"
                    : ""
                }`}
              >
                {/* Icon */}
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#FF7A00] text-white font-bold shadow-md">
                  ✓
                </div>


                {/* Content */}
                <div>
                  <h3
  className="font-semibold text-2xl text-[#0F172A]"
  style={{ fontFamily: "Cormorant Garamond, serif" }}
>
  {item.title}
</h3>

                  <p className="mt-2 text-sm leading-7 text-gray-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>





{/* marquee */}
<section className="relative w-full  py-15">
       <div className="pointer-events-none absolute top-1/2 left-0 w-full overflow-hidden -translate-y-1/2">
        <div
          className="
            whitespace-nowrap
            font-bold
            text-[#0F1E3D]/[0.20]
            animate-marquee
            text-3xl sm:text-5xl md:text-6xl xl:text-7xl
          "
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Advertising Branding & Marketing • Advertising Branding & Marketing •
          Advertising Branding & Marketing • Advertising Branding & Marketing
        </div>
      </div>
      {/* Background Marquee */}
     

    </section>
      {/* ---------------- TEAM ---------------- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-orange-50 py-20 sm:py-14 lg:py-20">
        {/* Blur Background */}
        <div className="absolute top-0 left-0 h-60 w-60 rounded-full bg-sky-200/20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-200/20 blur-3xl"></div>

        {/* Background Text */}
        
     

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

          <div className="grid gap-8 lg:gap-12 lg:grid-cols-12 items-center">

            {/* Left Content */}
            <div
              className="lg:col-span-5 text-center lg:text-left"
              data-aos="fade-right"
            >
             

              <div
  className="
  inline-flex items-center gap-2
  px-5 sm:px-6
  py-2.5

  rounded-full

  bg-gradient-to-r
  from-orange-50
  to-white

  border border-orange-200

  shadow-md shadow-orange-100/40

  text-[#0F1E3D]
  text-base sm:text-lg

  font-semibold

  hover:scale-105
  transition-all duration-300
  "
  style={{ fontFamily: "Cormorant Garamond, serif" }}
>
  Our Creative Team
</div>


              <h2 className="mt-4 text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight"   style={{ fontFamily: "Cormorant Garamond, serif" }}
>
                <span className="text-[#0F172A]">Delivering Branding</span>
                <br />
                <span className="text-[#FF7A00]">Excellence</span>
              </h2>

              <p className="mt-5 text-[15px] sm:text-base leading-7 sm:leading-8 text-gray-500">
                We transform ideas into compelling stories that engage,
                inspire and leave a lasting impact through strategy,
                design, branding and digital innovation.
              </p>

             <button
  onClick={() => navigate("/contact")}
  className="
    mt-7 inline-flex items-center gap-2
    rounded-full
    bg-orange-500
    px-7 py-3
    font-semibold text-white
    shadow-lg shadow-orange-500/30
    transition-all duration-300
    hover:bg-orange-600
    hover:scale-105 hover:shadow-xl
    group
  "
  style={{ fontFamily: "Cormorant Garamond, serif" }}
>
  Connect With Us
  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
</button>
            </div>


            {/* Right Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5" >
  {teamData.map((item, i) => (
    <div
      key={item.title}
      data-aos="zoom-in-up"
      data-aos-delay={i * 60}
      className="
      rounded-3xl
      bg-white
      border border-slate-100
      p-6
      shadow-lg
      transition-all
      duration-500
      hover:-translate-y-2
      hover:shadow-2xl
      hover:border-[#FF7A00]/30
      "
    >
      {/* Icon */}
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF7A00] text-xl text-white shadow-lg shadow-[#FF7A00]/20">
        {item.icon}
      </div>

      {/* Title */}
      <h3
  className="text-2xl sm:text-2xl font-semibold text-[#0F172A]"
  style={{ fontFamily: "Cormorant Garamond, serif" }}
>
  {item.title}
</h3>

      {/* Description */}
      <p className="mt-2 text-sm leading-7 text-gray-500">
        {item.desc}
      </p>
    </div>
  ))}
</div>
          </div>
        </div>
      </section>

      {/* ---------------- SOLUTIONS ---------------- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-orange-50 px-4 py-12 sm:py-16">

  {/* Background Blobs */}
  <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-sky-200/20 blur-3xl" />
  <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-200/20 blur-3xl" />

  <div className="relative mx-auto max-w-7xl">

    {/* Heading */}
    <div
      className="mx-auto mb-14 max-w-3xl text-center px-2 sm:px-0"
      data-aos="fade-up"
    >
      
<div
  className="
  inline-flex items-center gap-2
  px-5 sm:px-6
  py-2.5

  rounded-full

  bg-gradient-to-r
  from-orange-50
  to-white

  border border-orange-200

  shadow-md shadow-orange-100/40

  text-[#0F1E3D]
  text-base sm:text-lg

  font-semibold

  hover:scale-105
  transition-all duration-300
  "
  style={{ fontFamily: "Cormorant Garamond, serif" }}
>
   Our Solutions
</div>


      <h2 className="mt-4 font-['Playfair_Display',serif] text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight text-center"   style={{ fontFamily: "Cormorant Garamond, serif" }}
>
        <span className="text-[#0F172A]">Advertising &</span>
        {" "}
        <span className="text-[#FF7A00]">Marketing Solutions</span>
      </h2>

      <p className="mt-5 mx-auto max-w-2xl text-gray-500 leading-7 text-sm sm:text-base md:text-lg font-medium text-center">
        We help businesses build powerful brands, create impactful campaigns,
        and drive measurable growth through modern marketing solutions.
      </p>
    </div>

    {/* Cards */}
   <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">

  {solutionsimg.map((s, i) => (
    <div
      key={s.title}
      data-aos="zoom-in-up"
      data-aos-delay={i * 100}
      className="
        group relative overflow-hidden rounded-3xl
        bg-white/80 backdrop-blur-xl
        border border-orange-100
        shadow-lg
        transition-all duration-500
        hover:-translate-y-3 hover:shadow-2xl hover:border-blue-200
      "
    >

      {/* IMAGE */}
      <div className="relative h-56 overflow-hidden">

        <img
          src={s.image}
          alt={s.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay (orange default → blue hover feel) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* NUMBER BADGE */}
        <div className="
          absolute top-4 left-4 flex h-11 w-11
          items-center justify-center rounded-2xl
          bg-[#FF7A00]
          text-white font-bold shadow-lg
          transition-all duration-500
          group-hover:bg-[#0070B8]
        ">
          {s.num}
        </div>

      </div>

      {/* CONTENT */}
      <div className="p-6 sm:p-7 text-center sm:text-left">

        <h3 className="
          text-lg sm:text-xl font-bold text-[#ff7a00]
          transition-colors duration-500
          group-hover:text-[#0070B8]
        "   style={{ fontFamily: "Cormorant Garamond, serif" }}
>
          {s.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          {s.desc}
        </p>

        {/* CHIPS */}
        <div className="mt-5 flex flex-wrap justify-center sm:justify-start gap-2">

          {s.chips.map((chip) => (
            <span
              key={chip}
              className="
                rounded-full
                bg-orange-50
                px-3 py-1
                text-xs font-semibold
                text-[#FF7A00]
                transition-all duration-500
                group-hover:bg-blue-50
                group-hover:text-[#0070B8]
              "
              style={{ fontFamily: "Cormorant Garamond, serif" }}
>
              {chip}
            </span>
          ))}

        </div>

      </div>

    </div>
  ))}

</div>

  </div>
</section>

      {/* ---------------- EXPERTISE ---------------- */}
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#F8FAFF] to-[#FFF5EE] px-4 py-14 sm:py-16 lg:py-20">

  {/* Background Blobs */}
  <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-orange-200/20 blur-3xl animate-pulse" />
  <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-sky-200/20 blur-3xl animate-pulse" />

  <div className="relative mx-auto max-w-6xl">

    {/* Heading */}
    <div
      className="mx-auto mb-14 sm:mb-16 max-w-3xl text-center px-2"
      data-aos="fade-up"
    >
      

<div
  className="
  inline-flex items-center gap-2
  px-5 sm:px-6
  py-2.5

  rounded-full

  bg-gradient-to-r
  from-orange-50
  to-white

  border border-orange-200

  shadow-md shadow-orange-100/40

  text-[#0F1E3D]
  text-base sm:text-lg

  font-semibold

  hover:scale-105
  transition-all duration-300
  "
  style={{ fontFamily: "Cormorant Garamond, serif" }}
>
   Our Expertise
</div>

      <h2 className="mt-5 font-['Playfair_Display',serif] text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight"   style={{ fontFamily: "Cormorant Garamond, serif" }}
>
        <span className="text-[#0F172A]">Driving Growth Through</span>{" "}
        <span className="text-[#FF7A00]">Creative Excellence</span>
      </h2>

      <p className="mt-5 mx-auto max-w-2xl text-gray-600 text-sm sm:text-base md:text-lg leading-7">
        From branding and advertising to digital marketing and creative
        production, we deliver solutions that help businesses grow,
        engage audiences, and achieve measurable results.
      </p>
    </div>

    {/* GRID */}
    <div className="grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">

      {expertiseData.map((item, i) => (
        <div
          key={item.title}
          data-aos="zoom-in-up"
          data-aos-delay={i * 70}
          className="
            group relative overflow-hidden
            rounded-3xl
            bg-white/70 backdrop-blur-xl
            border border-white/40
            p-6 text-center
            shadow-lg
            transition-all duration-500
            hover:-translate-y-3 hover:shadow-2xl
          "
          style={{ fontFamily: "Cormorant Garamond, serif" }}
>

          {/* Glow Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-orange-100/30 to-sky-100/30" />

          {/* ICON */}
          <div className="
            relative mx-auto flex h-14 w-14
            items-center justify-center rounded-2xl
            bg-[#FF7A00]/10 text-[#FF7A00]
            transition-all duration-300
            group-hover:bg-[#FF7A00] group-hover:text-white
            group-hover:scale-110
          ">
            {item.icon}
          </div>

          {/* TITLE */}
        <h4
  className="
    relative mt-4
    text-base sm:text-lg md:text-xl
    font-semibold text-[#0F172A]
    transition-colors duration-300
    group-hover:text-[#FF7A00]
  "
>
  {item.title}
</h4>

          {/* UNDERLINE */}
          <div className="
            relative mx-auto mt-3 h-0.5 w-10 rounded-full
            bg-[#0F172A]/10
            transition-all duration-300
            group-hover:bg-[#FF7A00]
            group-hover:w-14
          " />

        </div>
      ))}

    </div>

  </div>
</section>
      {/* ---------------- CTA ---------------- */}
      <section className="relative overflow-hidden px-4 sm:px-6 py-16 sm:py-24 text-center text-[#0F172A]
bg-gradient-to-br from-white via-[#F7FAFF] to-[#FFF6F0]">

  {/* Soft Blobs */}
  <div className="pointer-events-none absolute -top-20 -left-20 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-orange-200/20 blur-3xl" />

  {/* Subtle Grid Pattern */}
  <div className="pointer-events-none absolute inset-0 opacity-[0.05]
    [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
    [background-size:60px_60px]" />

  {/* Content */}
  <div className="relative mx-auto max-w-3xl" data-aos="zoom-in">

    <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-4xl font-bold md:text-5xl leading-tight"   style={{ fontFamily: "Cormorant Garamond, serif" }}
>
      Let's Elevate  
      {""}
       <span className="text-[#FF7A00]">Your Brand</span>
    </h2>

    <p className="mt-5 text-gray-600 text-sm sm:text-base md:text-lg leading-7">
      Grow your online presence, generate quality leads, and build a
      powerful brand identity with modern marketing strategies.
    </p>

    {/* Button */}
   <button
  onClick={() => navigate("/contact")}
  className="
    mt-7 inline-flex items-center gap-2
    rounded-full
    bg-orange-500
    px-7 py-3
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

export default About;

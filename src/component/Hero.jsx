import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";

import {
  Stethoscope,
  MonitorSmartphone,
  ShoppingBag,
  Hospital,
  Egg,
  Phone,
  GraduationCap,
  Code2,
} from "lucide-react";

import {
  ArrowRight,
  TrendingUp,
  Users,
  Award,
  Target,
  Rocket,
  Sparkles,
  Megaphone,
  Search,
  ArrowUpRight,
  Leaf,
  Building2,
  Dumbbell,
  Anchor,
  Atom,
} from "lucide-react";

import { useEffect, useRef, useState } from "react";

const Counter = ({
  value,
  suffix = "",
  decimals = 0,
  duration = 1.6,
}) => {
  const [display, setDisplay] = useState(0);
  const [startCount, setStartCount] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // only once
        }
      },
      { threshold: 0.4 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startCount) return;

    let frame;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setDisplay(value * eased);

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [startCount, value, duration]);

  const formatted =
    decimals === 0
      ? Math.round(display).toLocaleString()
      : display.toFixed(decimals);

  return (
    <span ref={counterRef}>
      {formatted}
      {suffix}
    </span>
  );
};

const stats = [
  {
    icon: Award,
    value: 50,
    suffix: "+",
    label: "Brands Helped",
    bg: "bg-blue-600",
  },

  {
    icon: Target,
    value: 100,
    suffix: "+",
    label: "Campaigns Managed",
    bg: "bg-orange-500",
  },

 {
  icon: BarChart3,
  value: 500,
  suffix: "%",
  label: "Growth Delivered",
  bg: "bg-sky-500",
}
];

const brands = [
  {
    name: "AVICARE",
    icon: Stethoscope, // Healthcare
  },
  {
    name: "BALAJI ELECTRONICS",
    icon: MonitorSmartphone, // Electronics
  },
  {
    name: "OVIYAS",
    icon: ShoppingBag, // Fashion / Brand
  },
  {
    name: "VARAD CLINIC",
    icon: Stethoscope, // Clinic
  },
  {
    name: "UNITY HOSPITAL",
    icon: Hospital, // Hospital
  },
  {
    name: "GAVRAN EGGSWALA",
    icon: Egg, // Food
  },
  {
    name: "LIFETIME NUMBER",
    icon: Phone, // Numerology / Mobile
  },
  {
    name: "MOTION SOLAPUR",
    icon: GraduationCap, // Education
  },
  {
    name: "SWAMI SOFTWARE",
    icon: Code2, // Software
  },
];

const Hero = () => {
  return (
<section className="relative overflow-hidden min-h-[80vh] pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-15 bg-gradient-to-br from-sky-50 via-white to-orange-50">      <div className="absolute top-0 left-0 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-90 h-90 bg-orange-200/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div className="text-center lg:text-left"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Badge */}
          <span
  className="
  inline-flex items-center justify-center
  gap-2 sm:gap-3

  px-4 sm:px-6 lg:px-7
  py-2 sm:py-2.5

  rounded-full
  bg-white
  border border-sky-100
  shadow-md

  text-sm sm:text-lg md:text-xl lg:text-2xl
  font-semibold
  text-orange-500

  text-center
  "
  style={{ fontFamily: "Cormorant Garamond, serif" }}
>
  Leading Digital Marketing Agency in Pune
</span>
            {/* Heading */}
        <h1
className="mt-4 sm:mt-6 lg:mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1] font-bold text-gray-900"  style={{ fontFamily: "Cormorant Garamond" }}
>
  Turn Attention Into

  <span className="text-orange-500"> Customers..</span>

  <br />
  And Brands Into
  <br />
  Market <span className="text-orange-500">Leaders</span>
</h1>
            {/* Paragraph */}
            <p
              className="mt-6 text-xl text-gray-600 leading-relaxed max-w-xl md:text-xl lg:text-2xl"
              style={{ fontFamily: "Poppins" }}
            >
              We collaborate with ambitious brands to create the
              next wave of digital innovation. Through branding,
              performance marketing, websites, and content,
              we help businesses grow faster, smarter, and stronger.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">

              <button
  className="group flex items-center justify-center gap-2 rounded-full bg-[#FF7A00] px-9 py-4.5 text-white text-lg sm:text-xl shadow-lg shadow-orange-500/25 transition-all duration-300 hover:scale-105 hover:bg-[#E66A00]"
  style={{
 fontFamily: "Cormorant Garamond" ,
     fontWeight: 600,
  }}
>
  Book Free Consultation

  <ArrowRight
    size={20}
    className="transition-transform group-hover:translate-x-1"
  />
</button>

              <button
  className="rounded-full border border-[#FF7A00] bg-white px-9 py-4.5 text-[#FF7A00] text-lg sm:text-xl shadow-md transition-all duration-300 hover:bg-[#FF7A00] hover:text-white hover:shadow-lg"
  style={{
 fontFamily: "Cormorant Garamond" ,
    fontWeight: 600,
  }}
>
  View Our Work
</button>

            </div>

            {/* Stats */}
<div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap justify-center lg:justify-start gap-6 lg:gap-8 " style={{ fontFamily: "Cormorant Garamond" }}>
  {stats.map((stat, i) => (
    <div
  key={stat.label}
  className="flex items-center gap-3 justify-center sm:justify-start font-bold"
>
      {/* Icon */}
      <div
        className={`w-12 h-12 sm:w-13 sm:h-13 rounded-full ${stat.bg} flex items-center justify-center flex-shrink-0`}
      >
        <stat.icon
          size={22}
          className="text-white"
        />
      </div>

      {/* Text */}
      <div>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-none">
          <Counter
            value={stat.value}
            suffix={stat.suffix}
            duration={1.4 + i * 0.2}
          />
        </h3>

        <p className="text-sm sm:text-base lg:text-lg text-gray-500">
          {stat.label}
        </p>
      </div>
    </div>
  ))}
</div>
     </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div className="text-center lg:text-left"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            {/* Main Card */}
            <motion.div className="text-center lg:text-left"
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="bg-white/80 backdrop-blur-xl rounded-[32px] shadow-2xl border border-white p-6 sm:p-8"
            >
              {/* Header */}
           <div className="flex items-center justify-between mb-6">

  <h3
    className="text-xl sm:text-2xl font-bold text-gray-800 whitespace-nowrap"
    style={{  fontFamily: "Cormorant Garamond"  }}
  >
    Growth Dashboard
  </h3>

  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-100 shrink-0">
    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>

    <span className="text-sm sm:text-base text-green-600 font-medium">
      Live
    </span>
  </div>

</div>
      <div className="space-y-4">

                {/* Website Traffic */}
  <div className="bg-sky-50 rounded-3xl p-4 sm:p-5">
    <div className="flex justify-between items-center">

    <span
  className="text-base sm:text-lg font-bold text-gray-700"
  style={{
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 700,
  }}
>
  Website Traffic
</span>
      <TrendingUp className="text-blue-600 w-6 h-6" />

    </div>

    <h4 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900"
    style={{ fontFamily: "Cormorant Garamond" }}
>
      +280%
    </h4>

    <div className="mt-4 h-2.5 rounded-full bg-sky-100 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "85%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="h-full rounded-full bg-blue-600"
      />
    </div>
  </div>

  {/* Leads */}
  <div className="bg-orange-50 rounded-3xl p-4 sm:p-5">
    <div className="flex justify-between items-center">

     <span
  className="text-base sm:text-lg font-bold text-gray-700"
  style={{
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 700,
  }}
>
  Leads Generated
</span>

      <Users className="text-orange-500 w-6 h-6" />

    </div>

    <h4 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900"
    style={{ fontFamily: "Cormorant Garamond" }}
>
      1,250+
    </h4>

    <div className="mt-4 h-2.5 rounded-full bg-orange-100 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "92%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="h-full rounded-full bg-orange-500"
      />
    </div>
  </div>

  {/* Conversion */}
  <div className="bg-sky-50 rounded-3xl p-4 sm:p-5">
    <div className="flex justify-between items-center">

      <span
  className="text-base sm:text-lg font-bold text-gray-700"
  style={{
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 700,
  }}
>
  Conversion Rate
</span>
      <Target className="text-blue-600 w-6 h-6" />

    </div>  

    <h4 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900" style={{ fontFamily: "Cormorant Garamond" }}>
      8.7%
    </h4>

    <div className="mt-4 h-2.5 rounded-full bg-sky-100 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "75%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="h-full rounded-full bg-blue-600"
      />
    </div>
  </div>

</div>
            </motion.div>

            {/* Meta Ads Card */}
           <motion.div
  animate={{
    y: [0, -10, 0],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
  }}
  className="absolute -top-17 -left-10 hidden lg:block bg-white rounded-3xl shadow-xl p-5 z-10"
>
  <div className="flex items-center gap-3">
    <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center">
      <Megaphone className="text-orange-500" size={22} />
    </div>

    <div style={{ fontFamily: "Cormorant Garamond" }}>
      <p className="text-gray-500 text-base">Meta Ads ROI</p>
      <h3 className="text-3xl font-bold text-orange-500">4.8x</h3>
    </div>
  </div>
</motion.div>

            {/* SEO Card */}
         <motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="absolute -bottom-8 -right-10 hidden lg:block bg-white rounded-3xl shadow-xl p-6 z-10"
>
  <div className="flex items-center gap-3">
    <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
      <Search className="text-blue-600" size={22} />
    </div>

    <div style={{ fontFamily: "Cormorant Garamond" }}>
      <p className="text-gray-500 text-base">Organic Growth</p>
      <h3 className="text-3xl font-bold text-blue-600">+100%</h3>
    </div>
  </div>
</motion.div>
          </motion.div>

        </div>

        {/* Trusted Brands */}
      <div className="mt-10 bg-white rounded-[28px] shadow-xl border border-gray-100 py-7 overflow-hidden">
  <div className="flex items-center gap-8 md:gap-12 w-max animate-marquee">
    {[...brands, ...brands].map((brand, index) => (
      <div
        key={index}
        className="flex items-center gap-2 md:gap-3 whitespace-nowrap"
      >
        {/* Icon */}
        <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-sky-50 flex items-center justify-center flex-shrink-0">
          <brand.icon
            size={20}
            className="text-[#0070B8] md:w-[26px] md:h-[26px]"
          />
        </div>

        {/* Brand Name */}
       <span
  className="text-base md:text-xl font-extrabold text-[#0F1E3D]"
  style={{
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 800,
  }}
>
  {brand.name}
</span>

      </div>
    ))}
  </div>
</div>


      </div>
    </section>
  );
};

export default Hero;

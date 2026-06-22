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
<section className="relative overflow-hidden min-h-[80vh] pt-26 pb-15 bg-gradient-to-br from-sky-50 via-white to-orange-50">      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div className="text-center lg:text-left"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-sky-100 shadow-sm text-sm font-medium text-blue-600">
              <Sparkles size={0} className="text-orange-500" />
              Leading Digital Marketing Agency in Pune
            </span>

            {/* Heading */}
           <h1
  className="mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-bold text-gray-900"
  style={{ fontFamily: "Cormorant Garamond" }}
>
  Turn Attention  Into 
  <br />
 <span className="text-orange-500">Customers..</span>
  <br />
  And Brands Into
  <br />
  Market <span className="text-blue-600">Leaders</span>
</h1>
            {/* Paragraph */}
            <p
              className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl md:text-lg lg:text-xl"
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
                className="group relative overflow-hidden flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#6CB4EE] text-white shadow-xl hover:bg-[#5AAAE8] shadow-xl hover:scale-105 transition-all duration-300"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 600,
                }}
              >
                Book Free Consultation

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </button>

              <button
                className="px-8 py-4 rounded-full bg-white border border-gray-200 text-gray-800 shadow-md hover:border-blue-600 transition-all duration-300"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 600,
                }}
              >
                View Our Work
              </button>

            </div>

            {/* Stats */}
<div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap justify-center lg:justify-start gap-6 lg:gap-8">
  {stats.map((stat, i) => (
    <div
      key={stat.label}
      className="flex items-center gap-3 justify-center sm:justify-start"
    >
      {/* Icon */}
      <div
        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full ${stat.bg} flex items-center justify-center flex-shrink-0`}
      >
        <stat.icon
          size={18}
          className="text-white"
        />
      </div>

      {/* Text */}
      <div>
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 leading-none">
          <Counter
            value={stat.value}
            suffix={stat.suffix}
            duration={1.4 + i * 0.2}
          />
        </h3>

        <p className="text-[11px] sm:text-xs lg:text-sm text-gray-500">
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
    className="text-lg sm:text-xl font-bold text-gray-800 whitespace-nowrap"
    style={{ fontFamily: "Poppins" }}
  >
    Growth Dashboard
  </h3>

  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 shrink-0">
    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>

    <span className="text-xs sm:text-sm text-green-600 font-medium">
      Live
    </span>
  </div>

</div>
      <div className="space-y-4">

                {/* Website Traffic */}
  <div className="bg-sky-50 rounded-3xl p-4 sm:p-5">
    <div className="flex justify-between items-center">

      <span className="text-sm sm:text-base text-gray-500">
        Website Traffic
      </span>

      <TrendingUp className="text-blue-600 w-5 h-5" />

    </div>

    <h4 className="mt-3 text-2xl sm:text-3xl font-bold text-gray-900">
      +280%
    </h4>

    <div className="mt-4 h-2 rounded-full bg-sky-100 overflow-hidden">
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

      <span className="text-sm sm:text-base text-gray-500">
        Leads Generated
      </span>

      <Users className="text-orange-500 w-5 h-5" />

    </div>

    <h4 className="mt-3 text-2xl sm:text-3xl font-bold text-gray-900">
      1,250+
    </h4>

    <div className="mt-4 h-2 rounded-full bg-orange-100 overflow-hidden">
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

      <span className="text-sm sm:text-base text-gray-500">
        Conversion Rate
      </span>

      <Target className="text-blue-600 w-5 h-5" />

    </div>

    <h4 className="mt-3 text-2xl sm:text-3xl font-bold text-gray-900">
      8.7%
    </h4>

    <div className="mt-4 h-2 rounded-full bg-sky-100 overflow-hidden">
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
  className="absolute -top-17 -left-10 hidden lg:block bg-white rounded-3xl shadow-xl p-4 z-10"
>
  <div className="flex items-center gap-3">
    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
      <Megaphone className="text-orange-500" />
    </div>

    <div>
      <p className="text-gray-500 text-sm">Meta Ads ROI</p>
      <h3 className="text-2xl font-bold text-orange-500">4.8x</h3>
    </div>
  </div>
</motion.div>

            {/* SEO Card */}
         <motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="absolute -bottom-8 -right-10 hidden lg:block bg-white rounded-3xl shadow-xl p-5 z-10"
>
  <div className="flex items-center gap-3">
    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
      <Search className="text-blue-600" />
    </div>

    <div>
      <p className="text-gray-500 text-sm">Organic Growth</p>
      <h3 className="text-2xl font-bold text-blue-600">+100%</h3>
    </div>
  </div>
</motion.div>
          </motion.div>

        </div>

        {/* Trusted Brands */}
      <div className="mt-10 bg-white rounded-[28px] shadow-xl border border-gray-100 py-6 overflow-hidden">
  <div className="flex items-center gap-8 md:gap-12 w-max animate-marquee">
    {[...brands, ...brands].map((brand, index) => (
      <div
        key={index}
        className="flex items-center gap-2 md:gap-3 whitespace-nowrap"
      >
        {/* Icon */}
        <div className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-sky-50 flex items-center justify-center flex-shrink-0">
          <brand.icon
            size={18}
            className="text-[#0070B8] md:w-[22px] md:h-[22px]"
          />
        </div>

        {/* Brand Name */}
        <span
          className="text-sm md:text-lg font-semibold text-gray-700"
          style={{ fontFamily: "Poppins" }}
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
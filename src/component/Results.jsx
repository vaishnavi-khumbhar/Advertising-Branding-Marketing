import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Megaphone,
  TrendingUp,
  BadgeDollarSign,
} from "lucide-react";

import Avicare from "../assets/client_logo/Avicare.png";
import Balaji from "../assets/client_logo/Balaji Electronics.png";
import Elite from "../assets/client_logo/Elite Landmarks.png";
import Finance from "../assets/client_logo/Finance Direction.png";
import Gavran from "../assets/client_logo/Gavran Eggswala.png";
import Lifetime from "../assets/client_logo/Lifetime Number.png";
import Motion from "../assets/client_logo/Motion Solapur.png";
import Oviyas from "../assets/client_logo/Oviyas.png";
import Shipal from "../assets/client_logo/Shipal Line.png";
import Swami from "../assets/client_logo/Swami Software.png";
import Unity from "../assets/client_logo/Unity Hospital.png";
import Varad from "../assets/client_logo/Varad Clinic.png";
import Voltaic from "../assets/client_logo/Voltaic Electric.png";

/* ---------------- RESULTS DATA ---------------- */
const results = [
  {
    number: 120,
    suffix: "+",
    title: "Brands Served",
    icon: BriefcaseBusiness,
    color: "from-sky-500 to-blue-600",
  },
  {
    number: 500,
    suffix: "+",
    title: "Campaigns Delivered",
    icon: Megaphone,
    color: "from-orange-400 to-orange-500",
  },
  {
    number: 20,
    suffix: "M+",
    title: "Audience Reach",
    icon: TrendingUp,
    color: "from-violet-500 to-purple-600",
  },
  {
    number: 4.8,
    suffix: "x",
    title: "Average ROI",
    icon: BadgeDollarSign,
    color: "from-emerald-400 to-teal-500",
  },
];

/* ---------------- CLIENTS DATA ---------------- */
const clients = [
  { logo: Avicare, name: "Avicare" },
  { logo: Balaji, name: "Balaji Electronics" },
  { logo: Elite, name: "Elite Landmarks" },
  { logo: Finance, name: "Finance Direction" },
  { logo: Gavran, name: "Gavran Eggswala" },
  { logo: Lifetime, name: "Lifetime Number" },
  { logo: Motion, name: "Motion Solapur" },
  { logo: Oviyas, name: "Oviyas" },
  { logo: Shipal, name: "Shipal Line" },
  { logo: Swami, name: "Swami Software" },
  { logo: Unity, name: "Unity Hospital" },
  { logo: Varad, name: "Varad Clinic" },
  { logo: Voltaic, name: "Voltaic Electric" },
];

/* ---------------- HOOK ---------------- */
function useCountUp(end, startAnimation) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const duration = 1200;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(counter);
      }

      setCount(start);
    }, 16);

    return () => clearInterval(counter);
  }, [end, startAnimation]);

  return count;
}

/* ---------------- RESULT CARD ---------------- */
function ResultCard({ item, start, index }) {
  const Count = useCountUp(item.number, start);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white/80 backdrop-blur-xl border border-slate-100 
                 rounded-2xl sm:rounded-[30px] shadow-lg sm:shadow-xl 
                 p-5 sm:p-6 md:p-8 text-center hover:scale-[1.03] transition"
    >
      <div
        className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto 
                    rounded-2xl bg-gradient-to-r ${item.color}
                    flex items-center justify-center text-white`}
      >
        <item.icon size={24} />
      </div>

      <h3 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-bold">
        {item.title === "Average ROI"
          ? Count.toFixed(1)
          : Math.floor(Count)}
        {item.suffix}
      </h3>

     <p
  className="mt-3 text-lg sm:text-xl md:text-2xl font-semibold text-[#0F1E3D] leading-tight"
  style={{ fontFamily: "Cormorant Garamond, serif" }}
>
  {item.title}
</p>
    </motion.div>
  );
}

/* ---------------- MAIN COMPONENT ---------------- */
export default function Results() {
  const ref = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStart(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section ref={ref} className="relative py-16 overflow-hidden bg-gradient-to-b from-white to-sky-50">

      {/* Blur BG */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-sky-100 rounded-full blur-[120px] opacity-40" />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-orange-100 rounded-full blur-[120px] opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ---------------- RESULTS ---------------- */}
        
        
            
        <div className="text-center">
  

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
 Our Results
</div>


  <h2
    className="mt-5 flex flex-wrap justify-center gap-2 sm:gap-3
    text-3xl sm:text-4xl md:text-5xl lg:text-6xl
    font-bold leading-tight"
    style={{ fontFamily: "Cormorant Garamond" }}
  >
    <span className="text-gray-900" style={{ fontFamily: "Cormorant Garamond" }}
>
      Numbers That
    </span>

    <span className="text-orange-500" style={{ fontFamily: "Cormorant Garamond" }}
>
      Grow Brands
    </span>
  </h2>

  <p className="mt-4 max-w-3xl mx-auto px-2 text-gray-500 leading-8 text-base sm:text-lg md:text-xl font-medium">
  We deliver measurable growth through innovative strategies, creative
  solutions, and performance-driven marketing that helps brands scale,
  connect, and achieve lasting success.
</p>
</div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-14" style={{ fontFamily: "Cormorant Garamond" }}
>
  {results.map((item, index) => (
    <ResultCard
      key={item.title}
      item={item}
      start={start}
      index={index}
    />
  ))}
</div>

        {/* ---------------- CLIENTS SECTION ---------------- */}
        <div className="mt-20 text-center">
         
         

          {/* Slider */}
          <div className="mt-10 overflow-hidden">
            <div className="flex w-max animate-scroll gap-10">

              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center min-w-[120px] sm:min-w-[150px] opacity-80 hover:opacity-100 transition"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-30 sm:h-50 object-contain"
                 style={{ fontFamily: "Cormorant Garamond" }} />
                <p
  className="
  mt-3
  text-lg sm:text-xl md:text-2xl
  font-semibold
  text-[#0F1E3D]
  text-center
  leading-tight
  "
  style={{ fontFamily: "Cormorant Garamond, serif" }}
>
  {client.name}
</p>
                </div>
              ))}

            </div>
          </div>
        </div>

      </div>

      {/* SCROLL ANIMATION CSS */}
      <style>{`
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
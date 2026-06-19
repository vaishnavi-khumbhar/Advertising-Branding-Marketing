import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ringStats = [
  {
    id: "ring1",
    percent: 90,
    label: "Inhouse Tasks",
    desc:
      "Strategy · Designing · Content\nAd Shoots · Websites\nDigital Marketing · Media PR",
  },
  {
    id: "ring2",
    percent: 10,
    label: "Collaborated Tasks",
    desc: "Printing · Dubbing\nCelebrity and Influencers",
  },
];

const serviceBar = [
  "Brand Strategy",
  "Brand Design",
  "Content Creation",
  "Website Design & Development",
  "Digital Marketing",
];

function AnimatedRing({ percent }) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] flex-shrink-0">
      <svg className="-rotate-90 w-full h-full">
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke="#E5E7EB"
          strokeWidth="8"
          fill="none"
        />

        <motion.circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke="url(#gradient)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5 }}
        />

        <defs>
          <linearGradient id="gradient">
            <stop offset="0%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#FB923C" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute inset-0 flex items-center justify-center text-lg sm:text-2xl font-bold text-gray-900">
        {percent}%
      </div>
    </div>
  );
}

export default function CTA() {
  return (
    <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Blur */}
      <div className="absolute left-0 top-0 w-72 h-72 bg-sky-100 rounded-full blur-[120px] opacity-40"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-100 rounded-full blur-[120px] opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white/80 backdrop-blur-2xl border border-slate-100 shadow-2xl rounded-[30px] md:rounded-[50px] p-6 sm:p-8 md:p-14">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-blue-600 text-xs sm:text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              Professional Agency
            </div>

            <h2
              className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              style={{ fontFamily: "Cormorant Garamond" }}
            >
              <span className="text-gray-900">
                Elevate Your Brand with
              </span>

              <span className="block text-orange-500">
                Professional Brand Design Agency
              </span>
            </h2>
          </motion.div>

          {/* Divider */}
          <div className="w-full h-px bg-slate-200 my-10 md:my-14"></div>

          {/* Ring Cards */}
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">

            {ringStats.map((stat) => (
              <motion.div
                key={stat.id}
                whileHover={{ y: -8 }}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-slate-50 rounded-[30px] p-5 sm:p-7"
              >
                <AnimatedRing percent={stat.percent} />

                <div className="text-center sm:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    {stat.label}
                  </h3>

                  <div className="mt-3 text-sm md:text-base text-gray-500 leading-7">
                    {stat.desc.split("\n").map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mt-10 md:mt-14">

            <button className="w-full md:w-auto px-8 py-4 rounded-2xl bg-white border border-slate-200 text-gray-900 font-semibold shadow-lg hover:-translate-y-1 duration-300">
              Build Your Brand
            </button>

            <button className="w-full md:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-500 to-orange-500 text-white font-semibold flex items-center justify-center gap-3 shadow-xl hover:-translate-y-1 duration-300">
              Connect With Us
              <ArrowRight size={18} />
            </button>

          </div>

          {/* Services */}
          <div className="mt-10 md:mt-14 flex flex-wrap justify-center gap-3">

            {serviceBar.map((service, index) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                key={index}
                className="px-4 py-2 rounded-full bg-white shadow-md border border-slate-100 text-gray-600 text-xs sm:text-sm"
              >
                <span className="w-2 h-2 bg-orange-500 rounded-full inline-block mr-2"></span>
                {service}
              </motion.div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import {
  FaCar,
  FaUniversity,
  FaBriefcase,
  FaGraduationCap,
  FaMagic,
  FaShoppingBasket,
  FaCapsules,
  FaTools,
  FaUsers,
  FaBuilding,
  FaUtensils,
  FaPlane,
} from "react-icons/fa";

const industries = [
  {
    label: "Automobile",
    icon: <FaCar />,
    tag: "Drive & Identity",
    color: "from-sky-500 to-blue-600",
  },
  {
    label: "Banking Finance",
    icon: <FaUniversity />,
    tag: "Trust & Authority",
    color: "from-orange-500 to-red-500",
  },
  {
    label: "Professionals",
    icon: <FaBriefcase />,
    tag: "Expertise & Prestige",
    color: "from-emerald-400 to-teal-500",
  },
  {
    label: "Education",
    icon: <FaGraduationCap />,
    tag: "Learn & Inspire",
    color: "from-purple-500 to-violet-500",
  },
  {
    label: "Event Branding",
    icon: <FaMagic />,
    tag: "Moments & Magic",
    color: "from-pink-500 to-rose-500",
  },
  {
    label: "FMCG",
    icon: <FaShoppingBasket />,
    tag: "Shelf & Impact",
    color: "from-cyan-400 to-teal-400",
  },
  {
    label: "Healthcare & Pharma",
    icon: <FaCapsules />,
    tag: "Care & Credibility",
    color: "from-blue-500 to-sky-400",
  },
  {
    label: "Manufacturing",
    icon: <FaTools />,
    tag: "Build & Scale",
    color: "from-yellow-400 to-amber-500",
  },
  {
    label: "Community Engagement",
    icon: <FaUsers />,
    tag: "Connect & Grow",
    color: "from-indigo-500 to-violet-500",
  },
  {
    label: "Real Estate",
    icon: <FaBuilding />,
    tag: "Space & Aspiration",
    color: "from-cyan-500 to-sky-500",
  },
  {
    label: "Restaurants",
    icon: <FaUtensils />,
    tag: "Flavour & Feeling",
    color: "from-orange-400 to-red-400",
  },
  {
    label: "Travel & Tourism",
    icon: <FaPlane />,
    tag: "Wander & Wonder",
    color: "from-sky-500 to-blue-600",
  },
];

export default function IndustrySection() {
  return (
    <section className="relative py-13 md:py-15 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-sky-50">

      {/* Blur */}
      <div className="absolute left-0 top-0 w-72 md:w-80 h-72 md:h-80 bg-sky-100 rounded-full blur-[120px] opacity-50"></div>

      <div className="absolute right-0 bottom-0 w-72 md:w-80 h-72 md:h-80 bg-orange-100 rounded-full blur-[120px] opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
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
   What We Do
</div>



          <h2
            className="mt-5 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            <span className="text-gray-900">
              Brand Creation
            </span>

            <span className="block text-orange-500">
              Across Diverse Industries
            </span>
          </h2>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-16 md:w-24 h-[2px] bg-orange-200"></div>

            <div className="w-3 h-3 rounded-full bg-orange-500"></div>

            <div className="w-16 md:w-24 h-[2px] bg-orange-200"></div>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 mt-14">

          {industries.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              className="group perspective h-[240px] sm:h-[250px]"
            >
              <div className="relative h-full duration-700 preserve-3d group-hover:rotate-y-180">

                {/* Front */}
                <div className="absolute inset-0 backface-hidden rounded-[30px] bg-white border border-slate-100 shadow-xl flex flex-col items-center justify-center">

                  <div
                    className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r ${item.color}
                    flex items-center justify-center text-3xl sm:text-4xl text-white shadow-xl`}
                  >
                    {item.icon}
                  </div>

<h3
  className="mt-6 text-xl sm:text-2xl font-bold text-gray-800 text-center px-4"
  style={{ fontFamily: "Cormorant Garamond, serif" }}
>
                    {item.label}
                  </h3>

                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 rotate-y-180 backface-hidden rounded-[30px]
                  bg-gradient-to-br from-sky-500 to-orange-500 text-white
                  shadow-2xl flex flex-col items-center justify-center px-5"
                >

                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 flex items-center justify-center text-2xl sm:text-3xl backdrop-blur-lg">
                    {item.icon}
                  </div>

                  <h3 className="mt-5 text-lg sm:text-xl font-bold text-center">
                    {item.label}
                  </h3>

                  <div className="mt-4 px-4 py-2 rounded-full bg-white/20 text-xs sm:text-sm font-medium backdrop-blur-lg">
                    {item.tag}
                  </div>

                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
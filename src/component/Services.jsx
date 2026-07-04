import { motion } from "framer-motion";
import {
  Palette,
  Megaphone,
  Globe,
  Camera,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "Brand Strategy",
    icon: Palette,
    color: "from-sky-500 to-blue-600",
    items: ["Logo Design", "Brand Identity"],
  },
  {
    title: "Digital Marketing",
    icon: Megaphone,
    color: "from-orange-400 to-orange-500",
    items: [ "Google Ads", "Meta Ads"],
  },
  {
    title: "Website Development",
    icon: Globe,
    color: "from-violet-500 to-purple-600",
    items: ["React Websites", "Landing Pages", "E-Commerce"],
  },
  {
    title: "Content Production",
    icon: Camera,
    color: "from-emerald-400 to-teal-500",
    items: ["Photography", "Video Shoots", "Social Media Creatives"],
  },
];

export default function Services() {
  return (
    <section className="relative py-15 overflow-hidden bg-gradient-to-b from-sky-50 to-white">

      {/* Blur Effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-sky-100 rounded-full blur-[120px] opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-100 rounded-full blur-[120px] opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-5">

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
   Our Expertise
</div>

          <h2
            className="mt-6 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            <span className="text-gray-900">
              Creative Solutions
            </span>

            <span className="block text-orange-500">
              For Modern Brands
            </span>
          </h2>

         <p className="mt-6 max-w-3xl mx-auto text-gray-500 leading-8 text-base sm:text-lg md:text-xl font-medium">
  We blend creativity, strategy, and technology to help businesses grow faster, build stronger brands, and create a lasting impact in the digital world.
</p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-16"   style={{ fontFamily: "Cormorant Garamond, serif" }}
>

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="relative group bg-white/80 backdrop-blur-xl rounded-[35px]
              border border-slate-100 shadow-xl p-8 overflow-hidden h-full"
            >

              {/* Glow */}
              <div
                className={`absolute -top-10 -right-10 w-40 h-40 rounded-full
                bg-gradient-to-r ${service.color}
                blur-3xl opacity-20 group-hover:opacity-40 duration-500`}
              ></div>

              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color}
                flex items-center justify-center shadow-lg`}
              >
                <service.icon className="text-white" size={28} />
              </div>

              {/* Title */}
              <h3 className="mt-8 text-2xl font-bold text-gray-900">
                {service.title}
              </h3>

              {/* Services */}
              <div className="mt-7 space-y-4">
                {service.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border-b border-slate-100 pb-3"
                  >
                   <span className="text-[#0F1E3D] text-lg md:text-xl font-semibold leading-relaxed">
  {item}
</span>

                    <ArrowUpRight
                      size={18}
                      className="text-orange-500 group-hover:translate-x-1 duration-300"
                    />
                  </div>
                ))}
              </div>

            </motion.div>
          ))}

        </div>


{/* Digital Services */}
<div className="mt-20">

  {/* Heading */}
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
  Our Services
</div>


   <h2
  className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
  style={{ fontFamily: "Cormorant Garamond" }}
>
  <span className="text-gray-900">
    Our
  </span>

  {" "}

  <span className="text-orange-500">
    Digital Services
  </span>
</h2>

   <p className="max-w-4xl mx-auto mt-6 text-gray-500 leading-8 sm:leading-9 text-base sm:text-lg md:text-xl font-medium">
  Powerful digital solutions crafted to elevate your brand, generate quality leads, and strengthen your online presence for sustainable business growth and long-term success.
</p>

  </div>

  {/* Cards */}
  {/* Digital Services Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 mt-16">
  {[
    {
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000",
      title: "Website Development",
      desc: "Fast, responsive and SEO-optimized websites built to convert visitors into customers.",
    },
    {
      img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1000",
      title: "Social Media Marketing",
      desc: "Engaging content and smart strategies that turn followers into customers.",
    },
    {
      img: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=1000",
      title: "Paid Advertising",
      desc: "Run high-performing Meta & Google Ads that bring instant quality leads.",
    },
    {
      img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1000",
      title: "Video Editing",
      desc: "High-impact videos designed to boost engagement, strengthen brand identity, increase reach, and drive more conversions ",
    },
  ].map((service, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="
      bg-white
      rounded-[30px]
      overflow-hidden
      shadow-xl
      border
      border-slate-100
      group
      flex
      flex-col
      h-full
      "
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={service.img}
          alt={service.title}
          className="
          w-full
          h-48
          sm:h-52
          lg:h-48
          xl:h-52
          object-cover
          group-hover:scale-110
          duration-700
          "
        />
      </div>

      {/* Content */}
      <div
        className="
        p-5
        md:p-6
        text-center
        flex
        flex-col
        flex-1
        min-h-[260px]
        "
      >
        <h3
          className="
          text-[26px]
          sm:text-[28px]
          lg:text-[30px]
          xl:text-[34px]
          font-bold
          text-[#ff7a00]
          leading-tight
          "
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          {service.title}
        </h3>

        <p
  className="
  mt-4
  text-gray-500
  leading-8
  text-base
  md:text-lg
  lg:text-[18px]
  flex-grow
  "
>
  {service.desc}
</p>

        {/* Button */}
       <button
  className="
  mt-6
  mx-auto
  w-[170px]
  md:w-[180px]
  h-12
  md:h-14

  rounded-2xl

  bg-orange-500

  text-white
  text-lg
  font-semibold

  flex
  items-center
  justify-center
  gap-2

  shadow-lg
  shadow-orange-500/25

  transition-all
  duration-300

  hover:bg-orange-600
  hover:scale-105
  hover:shadow-xl
  "
  style={{ fontFamily: "Cormorant Garamond, serif" }}
>
          Read More
          <ArrowUpRight size={18} />
        </button>
      </div>
    </motion.div>
  ))}
</div>

</div>

      </div>
    </section>
  );
}
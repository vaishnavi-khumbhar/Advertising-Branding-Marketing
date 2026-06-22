import { motion } from "framer-motion";
import {
  Building2,
  Dumbbell,
  Leaf,
  Anchor,
  Atom,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";



const TrustBar = () => {
  return (
    <section className="relative overflow-hidden py-15 md:py-12 bg-gradient-to-b from-white via-sky-50 to-white">

      {/* Blur */}
      <div className="absolute -top-20 left-0 w-72 md:w-96 h-72 md:h-96 bg-sky-200 rounded-full blur-[100px] opacity-40"></div>

      <div className="absolute bottom-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-orange-200 rounded-full blur-[100px] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border border-sky-100 text-blue-600 text-sm font-medium">
            Trusted By Growing Brands
          </div>

          <h2
            className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            Brands That Believe
            <span className="block text-orange-500">
              In Our Creativity
            </span>
          </h2>

       <p className="max-w-3xl mx-auto mt-5 text-gray-500 leading-8 text-base sm:text-lg md:text-xl font-medium">
  We empower startups and businesses to build impactful brands, create meaningful experiences, and achieve sustainable growth through innovative digital solutions.
</p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mt-14 md:mt-20">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-white/80 backdrop-blur-xl rounded-[30px] md:rounded-[40px] border border-white shadow-2xl p-6 md:p-10">

              <div className="absolute top-0 right-0 w-28 md:w-40 h-28 md:h-40 bg-sky-100 rounded-full blur-3xl opacity-50"></div>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                Elevating Brands With
                <span className="text-orange-500">
                  {" "}Premium Strategy
                </span>
              </h3>

            <p className="mt-5 text-gray-700 leading-8 md:leading-9 text-base md:text-lg lg:text-xl">
  From branding and digital marketing to advertising
  solutions, we craft experiences that connect businesses
  with audiences and create lasting impact.
</p>

              <button className="mt-8 px-7 py-3 rounded-2xl bg-gradient-to-r from-sky-500 to-orange-500 text-white font-semibold flex items-center gap-2 shadow-xl hover:scale-105 duration-300">
                Let's Grow
                <ArrowUpRight size={18} />
              </button>

            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-5">

              {[
                {
                  no: "01",
                  title: "Startup Branding",
                  desc: "Igniting fresh brand identities that define and distinguish new businesses confidently."
                },
                {
                  no: "02",
                  title: "Transforming Brands",
                  desc: "Transforming existing brands with modern strategies for renewed relevance and impact."
                },
                {
                  no: "03",
                  title: "Brand Design",
                  desc: "Crafting customized visual identities tailored to any business, sector, or need."
                },
              ].map((item) => (
                <motion.div
                  whileHover={{ y: -8 }}
                  key={item.no}
                  className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-100 p-6"
                >
                  <h2 className="text-4xl font-bold text-orange-200">
                    {item.no}
                  </h2>

                  <h3 className="mt-2 text-xl font-semibold text-orange-500">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-gray-500 leading-7 text-sm md:text-base md:text-lg lg:text-xl">
                    {item.desc}
                  </p>
                </motion.div>
              ))}

            </div>
          </motion.div>

        </div>


       
       
      </div>
    </section>
  );
};

export default TrustBar;
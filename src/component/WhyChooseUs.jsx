import { motion } from "framer-motion";
import { ArrowUpRight, HeartPulse } from "lucide-react";

const studies = [
  {
    title: "Varad Skincare Clinic",
    category: "Healthcare Branding & Digital Marketing",
    result: "100% Increase in Online Engagement",
    icon: HeartPulse,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200",
  },
];

export default function CaseStudy() {
  return (
    <section className="relative py-10 overflow-hidden bg-gradient-to-b from-slate-50 to-white">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-sky-100 rounded-full blur-[120px] opacity-40"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-100 rounded-full blur-[120px] opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-5">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex px-5 py-2 rounded-full bg-violet-100 text-blue-600 text-sm font-medium">
            Case Studies
          </div>

          <h2
            className="mt-6 flex flex-wrap justify-center gap-3 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            <span className="text-gray-900">
              Real Results
            </span>

            <span className="text-orange-500">
              For Real Brands
            </span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-500 leading-8 text-base sm:text-lg md:text-xl font-medium">
  Explore how we helped brands achieve growth, improved visibility, and measurable business success through strategic digital solutions.
</p>
        </motion.div>

        {/* Card */}
        <div className="mt-14">

          {studies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .7,
                delay: index * .1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group max-w-6xl mx-auto overflow-hidden rounded-[35px] bg-white border border-slate-100 shadow-xl hover:shadow-2xl duration-500"
            >

              <div className="grid md:grid-cols-2 items-stretch">

                {/* Image */}
                <div className="overflow-hidden">

                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full min-h-[280px] md:min-h-[100%] object-cover transition duration-700 group-hover:scale-105"
                  />

                </div>

                {/* Content */}
                <div className="p-7 md:p-10 flex flex-col justify-center">

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-sky-500 to-orange-500 flex items-center justify-center shadow-lg">
                    <study.icon className="text-white" size={26} />
                  </div>

                  <span className="mt-5 text-sm font-medium text-orange-500">
                    {study.category}
                  </span>

                  <h3
                    className="mt-3 text-3xl md:text-4xl font-bold text-gray-900"
                    style={{ fontFamily: "Cormorant Garamond" }}
                  >
                    {study.title}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-8">
                    We partnered with{" "}
                    <span className="font-semibold text-gray-900">
                      Varad Skincare Clinic, Aurangabad
                    </span>{" "}
                    to transform their digital presence and drive real
                    business growth.
                  </p>

                  {/* Points */}
                  <div className="mt-6 space-y-4">

                    <div className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-sky-500 mt-3"></div>

                      <p className="text-gray-600">
                        <span className="font-semibold text-gray-900">
                          100% increase
                        </span>{" "}
                        in online engagement
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-orange-500 mt-3"></div>

                      <p className="text-gray-600">
                        Significant rise in inquiries & patient footfall
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-sky-500 mt-3"></div>

                      <p className="text-gray-600">
                        Strong brand positioning in the local market
                      </p>
                    </div>

                  </div>

                  {/* Result */}
                  <div className="mt-7">
                    <span className="inline-flex px-5 py-2 rounded-full bg-sky-50 text-sky-600 font-semibold">
                      {study.result}
                    </span>
                  </div>

                  {/* Button */}
                  <button className="mt-7 flex items-center gap-2 text-gray-900 font-semibold hover:text-orange-500 duration-300">
                    View Project
                    <ArrowUpRight size={18} />
                  </button>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
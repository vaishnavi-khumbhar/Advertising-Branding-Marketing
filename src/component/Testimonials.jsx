import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star, ExternalLink } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

import afiya from "../assets/reviews/afiya.png";
import leena from "../assets/reviews/leena.png";
import samiksha from "../assets/reviews/samiksha.png";
import yash from "../assets/reviews/yash.png";

const reviews = [
  {
    name: "Afiya Tanzeel",
    image: afiya,
    text: "The team at AB Marketing Wings is amazing. They listen and suggest strategies that actually work.",
  },
  {
    name: "Leena Chaudhari",
    image: leena,
    text: "AB Marketing Wings helped me grow from scratch and built my profile in a very professional way.",
  },
  {
    name: "Samikshaart Academy",
    image: samiksha,
    text: "A B Marketing Wings is handling our social media along with running our paid campaigns.",
  },
  {
    name: "Yash Patil",
    image: yash,
    text: "Really happy with A B Marketing Wings' support. They understood my business needs and helped me reach more customers.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-10 md:py-10 overflow-hidden bg-gradient-to-b from-white to-slate-50">

      {/* Blur */}
      <div className="absolute top-0 left-0 w-72 md:w-80 h-72 md:h-80 bg-sky-100 rounded-full blur-[120px] opacity-50"></div>

      <div className="absolute bottom-0 right-0 w-72 md:w-80 h-72 md:h-80 bg-orange-100 rounded-full blur-[120px] opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex px-4 py-2 rounded-full bg-violet-100 text-blue-600 text-xs sm:text-sm font-medium">
            Google Reviews
          </div>

          <h2
            className="mt-6 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            <span className="text-gray-900">
              What Our
            </span>{" "}
            <span className="text-orange-500">
              Clients Say
            </span>
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-500 leading-7 text-sm sm:text-base md:text-lg px-2">
            Trusted by businesses across Maharashtra, we deliver
            result-driven digital marketing solutions that help brands
            grow, engage, and achieve measurable success.
          </p>
        </motion.div>

        {/* Google Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-10"
        >
          <div className="bg-white border border-slate-100 shadow-xl rounded-3xl px-5 py-4 flex items-center gap-4">

            <img
              src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
              alt="Google"
              className="w-10 h-10"
            />

            <div>
              <h4 className="font-bold text-gray-900 text-sm md:text-base">
                5.0 Rating
              </h4>

              <p className="text-xs md:text-sm text-gray-500">
                Based on 19 Reviews
              </p>
            </div>

          </div>
        </motion.div>

        {/* Slider */}
        <div className="mt-10">

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={25}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>

                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-white/80 backdrop-blur-xl rounded-[32px] border border-slate-100 shadow-xl p-6 md:p-8 min-h-[320px]"
                >

                  {/* User */}
                  <div className="flex items-center gap-4">

                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover"
                    />

                    <div>
                      <h3 className="font-bold text-gray-900 text-base">
                        {review.name}
                      </h3>

                      <p className="text-sm text-gray-500">
                        Google Review
                      </p>
                    </div>

                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mt-5">

                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={17}
                        fill="#FDBA74"
                        className="text-orange-400"
                      />
                    ))}

                  </div>

                  {/* Review */}
                  <p className="mt-3 text-gray-500 leading-7 text-sm md:text-base">
                    {review.text}
                  </p>

                </motion.div>

              </SwiperSlide>
            ))}
          </Swiper>

        </div>

        {/* Button */}
        <div className="flex justify-center mt-5">

          <button
            onClick={() =>
              window.open(
                "https://share.google/m596xmrDsskdqvhK7",
                "_blank"
              )
            }
            className="px-6 md:px-8 py-3 md:py-4 rounded-2xl bg-gradient-to-r from-sky-500 to-orange-500 text-white font-semibold flex items-center gap-3 shadow-xl hover:scale-105 duration-300 text-sm md:text-base"
          >
            View All Google Reviews

            <ExternalLink size={18} />
          </button>

        </div>

      </div>
    </section>
  );
}
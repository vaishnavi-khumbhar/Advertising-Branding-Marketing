import React, { useEffect, useState } from "react";
import digitalMarketingImg from "../assets/Hero.jpeg";

  
const SERVICES = [
  {
    title: "Digital Marketing",
    image: digitalMarketingImg,
  },
  {
    title: "Website Development",
    image: digitalMarketingImg,
  },
  {
    title: "Social Media Marketing",
    image: digitalMarketingImg,
  },
  {
    title: "Branding & Creative Design",
    image: digitalMarketingImg,
  },
  {
    title: "Video Editing",
    image: digitalMarketingImg,
  },
  {
    title: "Google Ads / PPC",
    image: digitalMarketingImg,
  },
  {
    title: "Meta Advertising",
    image: digitalMarketingImg,
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SERVICES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-white pt-16 sm:pt-20 lg:pt-18">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {SERVICES.map((service, index) => (
          <div
            key={index}
            className="relative min-w-full flex flex-col sm:block sm:h-[480px] lg:h-[550px]"
          >
            {/* Image block */}
            <div className="relative h-[280px] sm:absolute sm:inset-0 sm:h-full">
              <img
                src={service.image}
                alt={service.title}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  object-[78%_center]
                  sm:object-center
                  transition-all
                  duration-500
                "
              />

              {/* Overlay only needed behind text on desktop */}
             {/* Premium Blue Overlay */}
<div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-[#154C8C]/65 via-[#2E73C5]/35 to-transparent"></div>

{/* Soft Blue Fade */}
<div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-[#154C8C]/25 via-transparent to-transparent"></div>

{/* Blue Glow */}
<div className="hidden sm:block absolute -left-40 top-0 h-[650px] w-[650px] rounded-full bg-[#2563EB]/20 blur-[150px]"></div>


              {/* Desktop content, layered on top of image */}
              <div className="hidden sm:flex absolute inset-0 items-center pt-6">
                <div className="mx-auto w-full max-w-7xl px-6 lg:px-16">
                  <div className="max-w-2xl">

                    <span className="inline-block rounded-full border border-[#FFB15A]/80 bg-[#FF7A00]/15 px-5 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#FFD8A8] backdrop-blur-xl">
                      Advertising Branding & Marketing
                    </span>

                    <h1
                      className="
                        mt-7
                        font-['Playfair_Display',serif]
                        text-5xl
                        lg:text-6xl
                        font-extrabold
                        leading-[1.08]
                        tracking-tight
                        text-white
                        [text-shadow:0_4px_18px_rgba(0,0,0,0.45)]
                      "
                    >
                      {service.title}
                    </h1>

                    <div className="mt-5 h-1.5 w-28 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FFB15A]" />

                    <p className="mt-8 max-w-xl text-lg leading-8 text-white/90 font-medium [text-shadow:0_2px_8px_rgba(0,0,0,0.35)]">
                      Helping brands grow with innovative digital marketing,
                      branding, website development and performance-driven
                      advertising solutions.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-5">

                      <button
                        className="
                          rounded-full
                          bg-gradient-to-r
                          from-[#FF7A00]
                          to-[#FF9838]
                          px-9
                          py-4
                          text-lg
                          font-semibold
                          text-white
                          shadow-[0_20px_40px_rgba(255,122,0,0.4)]
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:scale-105
                          hover:shadow-[0_24px_46px_rgba(255,122,0,0.55)]
                        "
                      >
                        Get Started
                      </button>

                      <button
                        className="
                          rounded-full
                          border
                          border-white/70
                          bg-white/10
                          backdrop-blur-lg
                          px-9
                          py-4
                          text-lg
                          font-semibold
                          text-white
                          transition-all
                          duration-300
                          hover:bg-white
                          hover:text-[#0A3D73]
                          hover:-translate-y-1
                        "
                      >
                        View Services
                      </button>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile content, below the image */}
<div className="sm:hidden bg-gradient-to-b from-[#2F6FB5] via-[#5A94D6] to-[#8EB9E8] px-5 pt-6 pb-10">
                <span className="inline-block rounded-full border border-[#FFB15A]/80 bg-[#FF7A00]/15 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#FFD8A8]">
                Advertising Branding & Marketing
              </span>

              <h1
                className="
                  mt-4
                  font-['Playfair_Display',serif]
                  text-3xl
                  font-extrabold
                  leading-[1.12]
                  tracking-tight
                  text-white
                "
              >
                {service.title}
              </h1>

              <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FFB15A]" />

              <p className="mt-4 max-w-xl text-sm leading-6 text-white/90 font-medium">
                Helping brands grow with innovative digital marketing,
                branding, website development and performance-driven
                advertising solutions.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">

                <button
                  className="
                    rounded-full
                    bg-gradient-to-r
                    from-[#FF7A00]
                    to-[#FF9838]
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    text-white
                    shadow-[0_10px_24px_rgba(255,122,0,0.4)]
                    transition-all
                    duration-300
                    active:scale-95
                  "
                >
                  Get Started
                </button>

                <button
                  className="
                    rounded-full
                    border
                    border-white/70
                    bg-white/10
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    active:scale-95
                  "
                >
                  View Services
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:gap-3">
        {SERVICES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 ${
              current === index
                ? "h-2 w-6 sm:h-3 sm:w-10 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FFB15A]"
                : "h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-white/60 hover:bg-white/90"
            }`}
          />
        ))}
      </div>

      {/* Bottom Fade */}
      <div className="hidden sm:block pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
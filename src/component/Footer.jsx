import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-sky-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-500/20 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-8 py-16 sm:py-20">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_0.9fr_1fr_1.3fr] gap-14 lg:gap-20">

          {/* Company */}
          <div className="text-center lg:text-left">

            <div className="flex flex-col lg:flex-row items-center gap-4">

              <div>
                <h2
                  className="text-2xl sm:text-[28px] font-bold leading-tight"
                  style={{ fontFamily: "Cormorant Garamond" }}
                >
                  Advertising<span className="text-orange-400"> Branding & Marketing</span>
                </h2>

                <p className="text-sm text-slate-400 mt-1"   style={{ fontFamily: "Cormorant Garamond, serif" }}
>
                  Digital Growth Partner
                </p>
              </div>

            </div>

            <p className="mt-7 text-slate-400 leading-8 text-sm sm:text-base">
              We help businesses grow with powerful digital marketing,
              branding and performance-driven strategies that deliver
              measurable results.
            </p>

            {/* Social Icons */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mt-8">

              {[
                {
                  icon: <FaInstagram />,
                  link: "https://www.instagram.com/abmarketingwings/",
                },
                {
                  icon: <FaFacebookF />,
                  link: "https://www.facebook.com/profile.php?id=61583328312980",
                },
                {
                  icon: <FaLinkedinIn />,
                  link: "https://www.linkedin.com/company/a-b-marketing-wings/",
                },
                {
                  icon: <FaWhatsapp />,
                  link: "https://wa.me/917058527549",
                },
                {
                  icon: <FaYoutube />,
                  link: "https://www.youtube.com/@abmarketingwings",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
className="w-11 h-11 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-orange-400 hover:text-white hover:bg-gradient-to-r hover:from-sky-500 hover:to-orange-500 duration-300 hover:-translate-y-1"                >
                  {item.icon}
                </a>
              ))}

            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center lg:text-left lg:pl-6">

           <h3
  className="text-2xl sm:text-3xl font-bold text-orange-400 mb-7"
  style={{ fontFamily: "Cormorant Garamond" }}
>
  Quick Links
</h3>

            <div className="space-y-4 text-slate-400 text-center">

              <Link
                to="/"
                className="block hover:text-orange-400 duration-300"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="block hover:text-orange-400 duration-300"
              >
                About
              </Link>

              <Link
                to="/services"
                className="block hover:text-orange-400 duration-300"
              >
                Services
              </Link>

              <Link
                to="/case-studies"
                className="block hover:text-orange-400 duration-300"
              >
                Case Studies
              </Link>

              <Link
                to="/contact"
                className="block hover:text-orange-400 duration-300"
              >
                Contact
              </Link>

            </div>

          </div>

                    {/* Services */}
          <div className="text-center lg:text-left">

            <h3
              className="text-2xl sm:text-3xl font-bold text-orange-400 mb-7"
  style={{ fontFamily: "Cormorant Garamond" }}
            >
              Services
            </h3>

            <div className="space-y-4 text-slate-400 leading-7">

              <p>Digital Marketing</p>

              <p>Social Media Marketing</p>

              <p>SEO Optimization</p>

              <p>Website Development</p>

              <p>Branding & Design</p>

            </div>

          </div>

          {/* Contact Info */}
          <div className="text-center lg:text-left">

            <h3
               className="text-2xl sm:text-3xl font-bold text-orange-400 mb-7"
  style={{ fontFamily: "Cormorant Garamond" }}
            >
              Contact Info
            </h3>

            <div className="space-y-7 text-slate-400">

              <div className="flex items-start justify-center lg:justify-start gap-4">
                <FaPhoneAlt className="text-orange-400 mt-1 shrink-0" />

                <a
                  href="tel:+917058527549"
                  className="hover:text-white duration-300"
                >
                  +91 70585 27549
                </a>
              </div>

              <div className="flex items-start justify-center lg:justify-start gap-4">
                <FaEnvelope className="text-orange-400 mt-1 shrink-0" />

                <a
                  href="mailto:abmarketingwings@gmail.com"
                  className="hover:text-white duration-300 break-all"
                >
                  abmarketingwings@gmail.com
                </a>
              </div>

              <div className="flex items-start justify-center lg:justify-start gap-4 leading-8">

                <FaMapMarkerAlt className="text-orange-400 mt-1 shrink-0" />

                <p>
                  Office No. 513, 5th Floor,
                  <br />
                  Amanora Chambers,
                  <br />
                  Amanora Town Centre,
                  <br />
                  Opp. Season Mall Road,
                  <br />
                  Hadapsar, Pune - 411028
                </p>

              </div>

              <div className="flex items-start justify-center lg:justify-start gap-4">
                <FaClock className="text-orange-400 mt-1 shrink-0" />

                <p>Mon - Sat (10:00 AM - 7:00 PM)</p>
              </div>

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-16 pt-8">

          <div className="flex flex-col md:flex-row items-center justify-between gap-5 text-center">

            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} AB Marketing Wings.
              All Rights Reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">

              <Link
                to="/privacy-policy"
                className="text-slate-500 hover:text-white duration-300"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="text-slate-500 hover:text-white duration-300"
              >
                Terms & Conditions
              </Link>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}
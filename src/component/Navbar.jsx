import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo/ab_logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    scrolled
      ? "bg-white/90 backdrop-blur-2xl border-b border-orange-100 shadow-lg"
      : "bg-transparent border-transparent"
  }`}
>
      <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-10">

        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 flex-1 min-w-0"
          >
            <img
              src={logo}
              alt="AB Marketing Wings"
              className="h-10 sm:h-14 w-auto object-contain flex-shrink-0"
            />

            <div className="min-w-0">
              <h2
className="text-[14px] sm:text-xl md:text-2xl font-bold text-[#0F1E3D] leading-tight"                style={{ fontFamily: "Cormorant Garamond" }}
              >
                Advertising Branding & Marketing
              </h2>

              <p
                className="text-[8px] sm:text-sm text-gray-500 truncate"
                style={{  fontFamily: "Cormorant Garamond"  }}
              >
                Digital Growth Partner
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8 ml-auto mr-8">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-lg font-medium transition duration-300 ${
                    isActive
                      ? "text-[#FF7A00]"
                      : "text-[#0F1E3D] hover:text-[#FF7A00]"
                  }`
                }
                style={{  fontFamily: "Cormorant Garamond" ,
 }}
              >
                {({ isActive }) => (
                  <>
                    {link.name}

                    <span
                      className={`absolute left-0 -bottom-2 h-[2px] bg-[#FF7A00] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}

          </nav>

          {/* Desktop CTA */}
          <a
            href="tel:+917058527549"
            className="hidden lg:flex items-center px-5 py-2.5 rounded-full bg-[#FF7A00] text-white shadow-lg hover:scale-105 transition-all duration-300 text-sm"
            style={{
           fontFamily: "Cormorant Garamond" ,

              fontWeight: 600,
            }}
          >
            Free Consultation →
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden ml-2 flex-shrink-0 text-[#0F1E3D]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="lg:hidden"
    >
     <div className="relative overflow-hidden border-t border-sky-100 bg-gradient-to-br from-white via-[#F7FAFF] to-[#EAF4FF] shadow-2xl">

  <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-sky-200/30 blur-3xl" />
  <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-200/20 blur-3xl" />
  
        <div className="relative px-6 py-8">

          <div className="flex flex-col items-center text-center gap-6">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-semibold transition-all duration-300 ${
                    isActive
                      ? "text-[#FF7A00]"
                      : "text-[#0F1E3D] hover:text-[#FF7A00]"
                  }`
                }
                style={{  fontFamily: "Cormorant Garamond" ,
 }}
              >
                {link.name}
              </NavLink>
            ))}

            <a
              href="tel:+917058527549"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[#FF7A00] px-8 py-3 text-white font-semibold shadow-lg shadow-orange-300/30 transition-all duration-300 hover:scale-105"
              style={{  fontFamily: "Cormorant Garamond" ,
 }}
            >
              Free Consultation →
            </a>

          </div>

        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>

    </header>
  );
};

export default Navbar;
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
          ? "bg-white/70 backdrop-blur-2xl border-b border-white/40 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">

            <img
              src={logo}
              alt="AB Marketing Wings"
              className="h-14 md:h-14 object-contain"
            />

            <div className="flex flex-col">
              <h2
                className="text-sm sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight"
                style={{ fontFamily: "Cormorant Garamond" }}
              >
                Advertising Branding & Marketing
              </h2>

              <p
                className="text-[10px] sm:text-sm text-gray-500"
                style={{ fontFamily: "Poppins" }}
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
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`
                }
                style={{ fontFamily: "Poppins" }}
              >
                {({ isActive }) => (
                  <>
                    {link.name}

                    <span
                      className={`absolute left-0 -bottom-2 h-[2px] bg-orange-400 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    ></span>
                  </>
                )}
              </NavLink>
            ))}

          </nav>

          {/* CTA */}
          <a
            href="tel:+917058527549"
className="hidden lg:flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-sky-500 to-orange-400 text-white shadow-lg hover:scale-105 transition-all duration-300 text-sm"            style={{
              fontFamily: "Poppins",
              fontWeight: 600,
            }}
          >
            Free Consultation →
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/90 backdrop-blur-2xl shadow-xl border-t border-slate-100"
          >
            <div className="flex flex-col items-center text-center gap-7 py-8">

              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 text-lg font-semibold"
                      : "text-gray-700 text-lg font-medium hover:text-blue-600 transition"
                  }
                  style={{ fontFamily: "Poppins" }}
                >
                  {link.name}
                </NavLink>
              ))}

              <a
                href="tel:+917058527549"
                className="px-7 py-3 rounded-full bg-gradient-to-r from-sky-500 to-orange-400 text-white shadow-xl hover:scale-105 transition-all duration-300"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 600,
                }}
              >
                Free Consultation →
              </a>

            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </header>
  );
};

export default Navbar;
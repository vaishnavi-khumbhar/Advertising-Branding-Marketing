import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo/ab_logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

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
          ? "bg-white/90 backdrop-blur-xl border-b border-[#FFB15A]/30 shadow-[0_4px_30px_rgba(10,61,115,0.1)]"
          : "bg-white/80 backdrop-blur-md border-b border-[#FFB15A]/20"
      }`}
    >
      <div className="max-w-[1450px] mx-auto px-3 sm:px-5 lg:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 flex-1 min-w-0 group">
            <img
              src={logo}
              alt="AB Marketing Wings"
              className="h-10 sm:h-14 w-auto object-contain flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
            />

            <div className="min-w-0">

              <h2
  className="text-[16px] sm:text-xl md:text-2xl font-bold leading-tight tracking-tight"
  style={{
    fontFamily: "'Playfair Display', serif",
    color: "#005EA8", // Logo Blue
  }}
>
  Advertising Branding{"   "}
  <span style={{ color: "#F58220" }}>
    &amp; Marketing
  </span>
</h2>

              <p
                className="text-[10px] sm:text-sm truncate uppercase font-bold text-[#FF7A00]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  letterSpacing: "0.14em",
                }}
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
                  `group relative text-lg font-bold tracking-wide transition-all duration-300 ${
                    isActive
                      ? "text-[#FF7A00]"
                      : "text-[#0A3D73] hover:text-[#FF7A00]"
                  }`
                }
                style={{
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    <span
                      className={`absolute left-0 -bottom-1.5 h-[2px] rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FFB15A] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
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
            className="hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FF9838] text-white text-base font-semibold shadow-[0_14px_30px_rgba(255,122,0,0.35)] hover:shadow-[0_18px_36px_rgba(255,122,0,0.5)] hover:-translate-y-0.5 hover:scale-105 active:scale-100 transition-all duration-300"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <Phone size={18} className="flex-shrink-0" />
            Free Consultation
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden ml-2 flex-shrink-0 grid place-items-center h-10 w-10 rounded-full text-[#0A3D73] bg-[#0A3D73]/8 hover:bg-[#0A3D73]/14 transition-all duration-200 active:scale-95"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid place-items-center"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden"
          >
<div
  className="
    relative
    overflow-hidden
    border-t
    border-[#FFB15A]/40
    bg-gradient-to-br
    from-[#2C6BB2]
    via-[#5A94D6]
    to-[#A9D0F5]
    shadow-[0_20px_50px_rgba(44,107,178,0.18)]
  "
>              <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-[#FF7A00]/15 blur-[100px]" />
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#3B82F6]/15 blur-[100px]" />

              <div className="relative px-6 py-8">
                <div className="flex flex-col items-center text-center gap-1">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.25 }}
                      className="w-full"
                    >
                      <NavLink
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `block w-full py-3 text-xl font-bold transition-all duration-300 ${
                            isActive
                              ? "text-[#FFB15A]"
                              : "text-white hover:text-[#FFB15A]"
                          }`
                        }
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {link.name}
                      </NavLink>
                      {i < navLinks.length - 1 && (
                        <div className="mx-auto h-px w-16 bg-white/10" />
                      )}
                    </motion.div>
                  ))}

                  <motion.a
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navLinks.length * 0.05 + 0.05, duration: 0.25 }}
                    href="tel:+917058527549"
                    className="mt-5 inline-flex items-center justify-center gap-2 w-full rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FF9838] px-8 py-3.5 text-white text-lg font-semibold shadow-[0_14px_30px_rgba(255,122,0,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-100"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    <Phone size={18} />
                    Free Consultation
                  </motion.a>
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
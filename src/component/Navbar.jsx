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
          ? "bg-white/85 backdrop-blur-xl border-b border-orange-100/80 shadow-[0_4px_30px_rgba(15,30,61,0.08)]"
          : "bg-gradient-to-b from-white/40 via-white/10 to-transparent border-transparent"
      }`}
    >
<div className="max-w-[1450px] mx-auto px-3 sm:px-5 lg:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 flex-1 min-w-0 group">
            <img
              src={logo}
              alt="AB Marketing Wings"
              className="h-10 sm:h-14 w-auto object-contain flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
            />

            <div className="min-w-0">
              <h2
                className="text-[13px] sm:text-xl md:text-2xl font-bold text-[#0F1E3D] leading-tight tracking-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Advertising Branding{" "}
                <span className="bg-gradient-to-r from-[#FF7A00] to-[#FF9A3D] bg-clip-text text-transparent">
                  &amp; Marketing
                </span>
              </h2>

              <p
                className="text-[8px] sm:text-sm text-gray-500 truncate tracking-wide uppercase"
                style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.08em" }}
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
    `relative text-xl font-extrabold tracking-wide transition-all duration-300 ${
      isActive
        ? "text-[#FF7A00]"
        : "text-[#0F1E3D] hover:text-[#FF7A00]"
    }`
  }
  style={{
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 800,
  }}
>
                {({ isActive }) => (
                  <>
                    {link.name}
                    <span
                      className={`absolute left-0 -bottom-1.5 h-[2px] rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FF9A3D] transition-all duration-300 ${
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
            className="hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FF9433] text-white text-lg font-semibold shadow-lg shadow-orange-300/40 hover:shadow-orange-400/50 hover:scale-105 active:scale-100 transition-all duration-300"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            <Phone size={18} className="flex-shrink-0" />
            Free Consultation
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden ml-2 flex-shrink-0 grid place-items-center h-10 w-10 rounded-full text-[#0F1E3D] bg-[#0F1E3D]/5 hover:bg-[#0F1E3D]/10 active:scale-95 transition-all duration-200"
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
            <div className="relative overflow-hidden border-t border-orange-100 bg-gradient-to-br from-white bg-gradient-to-br from-white via-[#F0F9FF] to-[#E0F2FE] shadow-2xl">
              <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-orange-200/30 blur-3xl" />
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#0F1E3D]/10 blur-3xl" />

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
        ? "text-[#FF7A00]"
        : "text-[#0F1E3D] hover:text-[#FF7A00]"
    }`
  }
  style={{ fontFamily: "'Cormorant Garamond', serif" }}
>
  {link.name}
</NavLink>
                    </motion.div>
                  ))}

                  <motion.a
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navLinks.length * 0.05 + 0.05, duration: 0.25 }}
                    href="tel:+917058527549"
                    className="mt-4 inline-flex items-center justify-center gap-2 w-full rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FF9433] px-8 py-3.5 text-white text-lg font-semibold shadow-lg shadow-orange-300/40 transition-all duration-300 hover:scale-[1.02] active:scale-100"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
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

import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaClock,
} from "react-icons/fa";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import contactImg from "../assets/contact.png";
import { Typewriter } from "react-simple-typewriter";

emailjs.init("ttpt2F7B9_vK1v1GV");

const contactData = [
  { icon: <FaPhoneAlt />, title: "Call Us Today", value: "+91 70585 27549" },
  { icon: <FaEnvelope />, title: "Email Us", value: "abmarketingwings@gmail.com" },
  {
    icon: <FaMapMarkerAlt />,
    title: "Visit Us",
    value:
      "Office No. 513, 5th Floor, Amanora Chambers, Amanora Town Centre, Opp. Season Mall Road, Hadapsar, Pune - 411028",
  },
  { icon: <FaClock />, title: "Working Hours", value: "Mon - Sat (10:00 AM - 7:00 PM)" },
];

const socialLinks = [
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/abmarketingwings/",
    gradient: "from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
  },
  {
    icon: <FaFacebookF />,
    href: "https://www.facebook.com/profile.php?id=61583328312980",
    gradient: "from-[#1877F2] to-[#0E5FCC]",
  },
  {
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/company/a-b-marketing-wings/",
    gradient: "from-[#0A66C2] to-[#0958A8]",
  },
  {
    icon: <FaYoutube />,
    href: "https://www.youtube.com/@abmarketingwings",
    gradient: "from-[#FF0000] to-[#CC0000]",
  },
  {
    icon: <FaWhatsapp />,
    href: "https://wa.me/917058527549",
    gradient: "from-[#25D366] to-[#1DA851]",
  },
];

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-out-cubic",
      offset: 0,
      delay: 0,
      mirror: false,
      anchorPlacement: "top-bottom",
      disable: false,
    });

    AOS.refresh();

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => AOS.refreshHard(), 150);
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    const loadTimer = setTimeout(() => AOS.refreshHard(), 500);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      clearTimeout(resizeTimer);
      clearTimeout(loadTimer);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid Email Address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone Number must be 10 digits";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
      return;
    }
    setErrors({});
    setLoading(true);

    try {
      await emailjs.send("service_zgagkyp", "template_kfzj0zh", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });
    } catch (err) {
      console.error("EmailJS Error:", err);
    } finally {
      setSuccess("Message Sent Successfully! We will contact you shortly.");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#FFF8EE] font-['Inter',sans-serif] text-[#0F1E3D] overflow-x-hidden">
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F5F9FF] via-[#FFF7F2] to-[#F3FFFE] px-4 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-20 text-center">

        <div className="pointer-events-none absolute inset-0 opacity-[0.06] 
          [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
          [background-size:60px_60px]" />

        <div className="pointer-events-none absolute -top-28 -left-28 h-96 w-96 rounded-full bg-[#FF6B1A]/20 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute top-1/3 -right-28 h-80 w-80 rounded-full bg-[#0EA5A4]/20 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#FFD6A5]/20 blur-3xl" />

        <div className="relative mx-auto max-w-3xl">
          <span
            className="mb-6 inline-block rounded-full border border-[#FF6B1A]/30 bg-white/80 backdrop-blur px-5 py-2 text-sm font-semibold tracking-wide text-[#FF6B1A] shadow-md"
            data-aos="fade-down"
          >
            Get In Touch
          </span>

          <h1
            className="font-['Playfair_Display',serif] text-3xl sm:text-4xl font-bold leading-tight text-[#0F1E3D] md:text-5xl"
            data-aos="fade-up"
          >
            Contact <span className="text-[#FF6B1A]">Us</span>
          </h1>


          

          <p className="mt-5 max-w-3xl mx-auto text-gray-600 leading-7 sm:leading-8 text-sm sm:text-base md:text-lg font-medium px-2">
            Contact Advertising &amp; Branding Marketing. Ready to grow your
            business with professional digital marketing solutions?
          </p>
        </div>
      </section>

      {/* ---------------- CONTACT FORM SECTION ---------------- */}
      <section className="relative overflow-hidden px-4 py-10 sm:py-14 lg:py-20">
        <div className="pointer-events-none absolute top-10 -left-20 h-72 w-72 rounded-full bg-[#0070B8]/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 -right-20 h-80 w-80 rounded-full bg-[#FF6B1A]/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:gap-14 lg:grid-cols-12">

            {/* LEFT - Form */}
            <motion.div
              className="lg:col-span-6"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="rounded-3xl bg-white p-7 sm:p-10 shadow-2xl shadow-[#0F1E3D]/10 border border-slate-100">
               

<span className="inline-flex items-center gap-2 rounded-full bg-[#FFF1E6] px-5 py-2 text-sm font-semibold text-[#FF6B1A] shadow-sm">
       
        Contact Us
      </span>

                <h2 className="mt-2 font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#FF6B1A] ">
                  Let's Grow Your Business
                </h2>
                <p className="mt-3 text-sm sm:text-base text-[#64748B]">
                  Fill out the form below and our team will contact you shortly.
                </p>

                {success && (
                  <div className="mt-5 rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-sm font-medium text-green-700">
                    {success}
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full rounded-xl border bg-[#F8FAFC] px-4 py-3 text-sm sm:text-base text-[#0F1E3D] placeholder:text-gray-400 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#FF6B1A]/40 ${
                        errors.name ? "border-red-400" : "border-slate-200"
                      }`}
                    />
                    {errors.name && (
                      <small className="mt-1 block text-xs text-red-500">{errors.name}</small>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full rounded-xl border bg-[#F8FAFC] px-4 py-3 text-sm sm:text-base text-[#0F1E3D] placeholder:text-gray-400 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#FF6B1A]/40 ${
                        errors.email ? "border-red-400" : "border-slate-200"
                      }`}
                    />
                    {errors.email && (
                      <small className="mt-1 block text-xs text-red-500">{errors.email}</small>
                    )}
                  </div>

                  <div>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      maxLength={10}
                      className={`w-full rounded-xl border bg-[#F8FAFC] px-4 py-3 text-sm sm:text-base text-[#0F1E3D] placeholder:text-gray-400 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#FF6B1A]/40 ${
                        errors.phone ? "border-red-400" : "border-slate-200"
                      }`}
                    />
                    {errors.phone && (
                      <small className="mt-1 block text-xs text-red-500">{errors.phone}</small>
                    )}
                  </div>

                  <div>
                    <textarea
                      rows="5"
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full resize-none rounded-xl border bg-[#F8FAFC] px-4 py-3 text-sm sm:text-base text-[#0F1E3D] placeholder:text-gray-400 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#FF6B1A]/40 ${
                        errors.message ? "border-red-400" : "border-slate-200"
                      }`}
                    ></textarea>
                    {errors.message && (
                      <small className="mt-1 block text-xs text-red-500">{errors.message}</small>
                    )}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-full bg-gradient-to-r from-[#FF6B1A] to-[#FF8A3D] px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-[#FF6B1A]/25 transition-all hover:shadow-xl disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* RIGHT - Image */}
        <motion.div
  className="lg:col-span-6 flex flex-col items-center"
  initial={{ opacity: 0, x: 60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
>
  <motion.img
    src={contactImg}
    alt="Contact"
    className="w-full max-w-xl object-contain"
    animate={{ y: [0, -15, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  />

  <div className="mt-2 w-full rounded-2xl border border-[#FF6B1A]/20 bg-white p-5 shadow-xl text-center">
    <h3 className="font-['Playfair_Display',serif] text-xl sm:text-2xl font-bold text-[#0070B8]">
      <Typewriter
        words={[
          " Grow Your Business With Us..",
          "Generate More Quality Leads..",
          "Build A Powerful Brand Identity..",
          "Increase Online Visibility..",
          "Creative Marketing Solutions..",
        ]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={40}
        delaySpeed={2000}
      />
    </h3>
  </div>
</motion.div>

            

          </div>
        </div>
      </section>

      {/* ---------------- CONTACT INFO CARDS ---------------- */}
      <section className="relative bg-[#FAFAFA] px-4 py-14 sm:py-10 overflow-hidden">
  <div className="mx-auto max-w-7xl">

    <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-sky-100 shadow-sm text-sm font-medium text-blue-600">
        Contact Information
      </span>

      

       <h2 className="mt-4 font-['Playfair_Display',serif] text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
        <span className="text-[#0F1E3D]">
         Get In
        </span>
       
        <span className="text-[#FF6B1A]">
         Touch With Us
        </span>
      </h2>

     <p className="mt-3 max-w-3xl mx-auto text-[#64748B] text-base sm:text-lg md:text-xl leading-8 font-medium">
  We're here to help your business grow with innovative branding,
  strategic marketing, and result-driven digital solutions that create
  lasting impact.
</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {contactData.map((item, i) => (
        <div
          key={item.title}
          data-aos="zoom-in-up"
          data-aos-delay={i * 100}
          className="group relative overflow-hidden rounded-[30px] bg-white p-8 text-center shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(255,107,26,0.18)]"
        >

          {/* Background Shape */}
          <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[#FFF1E6] transition-all duration-500 group-hover:scale-125" />

          {/* Icon */}
          <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-[#FF6B1A] to-[#FF8A3D] text-3xl text-white shadow-xl shadow-orange-200 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
            {item.icon}
          </div>

          {/* Content */}
          <h3 className="mt-7 font-['Playfair_Display',serif] text-2xl font-bold text-[#FF6B1A]">
            {item.title}
          </h3>

          <p className="mt-4 text-[16px] leading-8 text-[#475569]">
            {item.value}
          </p>

          {/* Bottom Line */}
          <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-[#FF6B1A] transition-all duration-500 group-hover:w-24" />
        </div>
      ))}

    </div>
  </div>
</section>
      {/* ---------------- SOCIAL CONNECT ---------------- */}
     <section className="relative overflow-hidden px-4 sm:px-6 py-16 sm:py-24 text-center bg-gradient-to-br from-white via-[#F7FAFF] to-[#FFF6F0]">

  {/* Soft Blobs */}
  <div className="pointer-events-none absolute -top-20 -left-20 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-orange-200/20 blur-3xl" />

  {/* Grid Pattern */}
  <div
    className="pointer-events-none absolute inset-0 opacity-[0.05]
    [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
    [background-size:60px_60px]"
  />

  <div className="relative mx-auto max-w-3xl" data-aos="fade-up">

    <span className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white px-4 py-2 text-sm font-medium text-[#0070B8] shadow-sm">
      Connect With Us
    </span>

    <h2 className="mt-4 font-['Playfair_Display',serif] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
      <span className="text-[#0F1E3D]">Follow Us On </span>
      <span className="text-[#FF7A00]">Social Media</span>
    </h2>

    <p className="mt-5 max-w-3xl mx-auto text-gray-600 text-base sm:text-lg md:text-xl leading-8 font-medium">
      Stay updated with the latest marketing insights, innovative campaigns,
      and proven growth strategies designed to help your business succeed.
    </p>

    <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
      {socialLinks.map((s, i) => (
        <a
          key={i}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          data-aos="zoom-in"
          data-aos-delay={i * 80}
          className={`group flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${s.gradient} text-2xl text-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:shadow-2xl`}
        >
          {s.icon}
        </a>
      ))}
    </div>

  </div>
</section>

      {/* ---------------- MAP ---------------- */}
      <section className="relative">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2233163916158!2d73.9347131!3d18.518807900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x823acbf88bf32149%3A0xf253f989ffa79d77!2sA%20B%20Marketing%20Wings!5e0!3m2!1sen!2sin!4v1780552652790!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          className="block w-full"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}

export default Contact;

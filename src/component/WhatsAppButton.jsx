import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <div className="fixed left-4 bottom-6 z-50">

      {/* Ring Animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></span>

      <a
        href="https://wa.me/917058527549"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl"
      >
        <FaWhatsapp className="text-3xl" />
      </a>

    </div>
  );
}

export default WhatsAppButton;
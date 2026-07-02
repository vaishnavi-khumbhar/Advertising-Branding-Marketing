import React, { useState, useEffect, useRef } from "react";
import { FaRobot } from "react-icons/fa";
import logo from "../assets/logo/ab_logo.png";

const AiChatButton = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [hint, setHint] = useState(false);
  const [typing, setTyping] = useState(false);
  const [msgCount, setMsgCount] = useState(0);

  const chatRef = useRef(null);

  // Welcome message
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages([
        { text: "👋 Welcome! How can we help you?", type: "bot" },
      ]);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Hint animation
  useEffect(() => {
    const interval = setInterval(() => {
      setHint(true);
      setTimeout(() => setHint(false), 2500);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Auto scroll
  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const playSound = () => {
    try {
      const audio = new Audio(
        "https://assets.mixkit.co/sfx/preview/mixkit-message-pop-alert-2354.mp3"
      );
      audio.volume = 0.4;
      audio.play().catch(() => {});
    } catch {}
  };

  const handleSend = () => {
  if (!message.trim()) return;

  const userMsg = { text: message, type: "user" };

  setMessages((prev) => [...prev, userMsg]);
  setMessage("");
  setTyping(true);

  const newCount = msgCount + 1;
  setMsgCount(newCount);

  setTimeout(() => {
    setTyping(false);

    const botMsg =
      newCount === 1
        ? {
            text: "✅ Got it! Tell us more so we can help you better.",
            type: "bot",
          }
        : {
            text: "🙏 Thanks! Our team will contact you shortly.",
            type: "bot",
          };

    setMessages((prev) => [...prev, botMsg]);
    playSound();

    //  CLOSE ONLY ON THIS MESSAGE
    if (botMsg.text === "🙏 Thanks! Our team will contact you shortly.") {
      setTimeout(() => {
        setOpen(false);
      }, 1200);
    }

  }, 1000);
};

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full
        bg-gradient-to-br from-[#0F1E3D] to-[#1B3A6B]
        text-white shadow-2xl transition-all hover:scale-110"
      >
        <FaRobot className="text-2xl" />
      </button>

      {/* Hint */}
    {hint && !open && (
  <div className="fixed bottom-24 right-6 z-50 max-w-[220px]">
    <div className="relative animate-bounce">

      {/* glow effect */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#FF7A00] to-[#1B3A6B] blur opacity-40"></div>

      {/* bubble */}
      <div className="relative rounded-2xl bg-white/90 backdrop-blur-xl px-4 py-3 text-sm shadow-xl text-gray-700 border border-white/40">

        <div className="flex items-center gap-2">
            
              <img src={logo} alt="AB Logo" className="h-10 w-auto" />

          <div>
            <p
  className="text-lg font-bold text-[#0F1E3D]"
  style={{
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 700,
  }}
>
  Need help?
</p>

<p
  className="text-sm font-semibold text-gray-600"
  style={{
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 600,
  }}
>
  I'm your AI assistant
</p>
          </div>
        </div>

      </div>
    </div>
  </div>
)}
      {/* Chat Box */}
      {open && (
        <div
          className="fixed bottom-20 right-6 z-50 flex h-[340px] w-[320px] flex-col 
          overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl 
          shadow-2xl shadow-black/10"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 
          bg-gradient-to-r from-[#EEF6FF]/80 to-[#DDEBFF]/80 backdrop-blur-xl">
            
            <div className="flex items-center gap-2">
              <img src={logo} alt="AB Logo" className="h-10 w-auto" />
              <span className="text-sm font-semibold text-[#0F1E3D]"   style={{ fontFamily: "Cormorant Garamond, serif" }}
>
                Advertising Branding & Marketing
              </span>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-[#0F1E3D] text-lg hover:scale-110 transition"
            >
              ✖
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-2 overflow-y-auto p-3 bg-transparent">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm shadow-sm transition-all duration-300 ${
                  msg.type === "user"
                    ? "ml-auto bg-gradient-to-r from-[#FF7A00] to-[#ff914d] text-white shadow-orange-200"
                    : "mr-auto bg-white/90 text-gray-700 shadow-gray-200"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {typing && (
              <div className="mr-auto w-fit rounded-2xl bg-white/80 px-3 py-2 text-sm shadow-sm animate-pulse">
                typing...
              </div>
            )}

            <div ref={chatRef} />
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 p-2 bg-white/70 backdrop-blur-xl">
            <input
              type="text"
              placeholder="Type message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 rounded-full px-3 py-2 text-sm outline-none bg-white/80
              focus:ring-2 focus:ring-[#FF7A00] transition"
            />

            <button
              onClick={handleSend}
              className="rounded-full bg-gradient-to-r from-[#FF7A00] to-[#ff914d] px-4 py-2 text-white
              hover:scale-105 transition shadow-md"
            >
              ➜
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AiChatButton;
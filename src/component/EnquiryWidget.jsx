import React, { useState } from "react";
import {
  X,
  User,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Send,
} from "lucide-react";

const WHATSAPP_NUMBER = "917058527549";

const SERVICES = [
  "Logo Designing",
  "Digital Marketing",
  "Website Development",
  "Social Media Marketing",
  "Branding & Creative Design",
  "Video Editing",
  "Google Ads / PPC",
  "Meta Advertising",
];

export default function EnquiryWidget() {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    services: [],
    message: "",
  });

  const [errors, setErrors] = useState({});

  const toggleService = (service) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const validate = () => {
    const e = {};

    if (!form.name.trim()) e.name = "Please enter your name";

    if (!form.phone.trim()) e.phone = "Please enter phone number";
    else if (!/^[0-9+\-\s]{7,15}$/.test(form.phone.trim()))
      e.phone = "Enter valid phone number";

    if (!form.email.trim()) e.email = "Please enter email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = "Enter valid email";

    if (!form.city.trim()) e.city = "Please enter city";

    setErrors(e);

    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    if (!validate()) return;

    setSubmitting(true);

    const lines = [
      "*New Enquiry*",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `City: ${form.city}`,
      `Services: ${
        form.services.length
          ? form.services.join(", ")
          : "Not specified"
      }`,
      `Message: ${form.message || "-"}`,
    ];

    const text = encodeURIComponent(lines.join("\n"));

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`,
      "_blank"
    );

    setTimeout(() => {
      setSubmitting(false);
      setOpen(false);

      setForm({
        name: "",
        phone: "",
        email: "",
        city: "",
        services: [],
        message: "",
      });

      setErrors({});
    }, 500);
  };

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open enquiry form"
          className="
          fixed right-0 top-1/2 -translate-y-1/2 z-40
          flex flex-col items-center gap-1.5 sm:gap-2
          bg-gradient-to-b from-orange-500 to-orange-600
          text-white
          px-1.5 py-4 sm:px-2 sm:py-6
          rounded-l-xl sm:rounded-l-2xl
          shadow-xl shadow-orange-500/30
          hover:from-orange-600 hover:to-orange-700
          transition-all duration-300
          "
        >
          <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span
            className="[writing-mode:vertical-rl] rotate-180 tracking-wider text-[11px] sm:text-sm"
          >
            Enquire Now
          </span>
        </button>
      )}

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div
            className="
            relative
            w-full
            sm:max-w-2xl
            max-h-[95vh] sm:max-h-[90vh]
            overflow-y-auto
            hide-scrollbar
            rounded-t-[28px] sm:rounded-[28px]
            bg-gradient-to-br
            from-blue-50
            via-white
            to-blue-100
            shadow-[0_25px_60px_rgba(0,0,0,0.15)]
            border border-white/50
            "
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="
              absolute top-4 right-4 sm:top-5 sm:right-5 z-20
              p-2 rounded-full
              hover:bg-orange-100
              hover:text-orange-600
              transition
              "
            >
              <X size={20} />
            </button>

            {/* Header */}

            <div className="pt-8 sm:pt-10 pb-5 sm:pb-6 px-5 sm:px-8 text-center">
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-600"
                style={{
                  fontFamily: "Cormorant Garamond",
                }}
              >
                Enquire Now
              </h2>

              <div className="w-16 sm:w-20 h-1 bg-orange-500 mx-auto rounded-full mt-3"></div>

              <p className="text-gray-500 mt-3 sm:mt-4 text-xs sm:text-sm px-2">
                Tell us about your project and we'll connect with you as soon as possible.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="
              px-4 sm:px-6 md:px-8 pb-6 sm:pb-8
              space-y-5 sm:space-y-6
              "
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <Field
                  label="Your Name"
                  icon={<User size={16} />}
                  value={form.name}
                  error={errors.name}
                  placeholder="Enter your name"
                  onChange={(v) =>
                    setForm({ ...form, name: v })
                  }
                />

                <Field
                  label="Phone Number"
                  icon={<Phone size={16} />}
                  value={form.phone}
                  error={errors.phone}
                  placeholder="Enter phone number"
                  inputMode="tel"
                  onChange={(v) =>
                    setForm({ ...form, phone: v })
                  }
                />

                <Field
                  label="Email Address"
                  icon={<Mail size={16} />}
                  value={form.email}
                  error={errors.email}
                  placeholder="Enter email address"
                  inputMode="email"
                  onChange={(v) =>
                    setForm({ ...form, email: v })
                  }
                />

                <Field
                  label="City"
                  icon={<MapPin size={16} />}
                  value={form.city}
                  error={errors.city}
                  placeholder="Enter city"
                  onChange={(v) =>
                    setForm({ ...form, city: v })
                  }
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                  Services Required
                </label>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
                  {SERVICES.map((service) => {
                    const active =
                      form.services.includes(service);

                    return (
                      <button
                        key={service}
                        type="button"
                        onClick={() =>
                          toggleService(service)
                        }
                        className={`
                        px-2.5 py-2.5 sm:px-3 sm:py-3 rounded-xl border text-xs sm:text-sm text-left leading-snug
                        transition-all duration-300

                        ${
                          active
                            ? "bg-orange-500 text-white border-orange-500 shadow-md shadow-orange-500/30"
                            : "bg-white/70 border-blue-100 hover:border-orange-400 hover:bg-orange-50"
                        }
                      `}
                      >
                        {service}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                  Message
                </label>

                <div className="relative">
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        message: e.target.value,
                      })
                    }
                    placeholder="Describe your project..."
                    className="
                    w-full
                    rounded-xl
                    border border-blue-100
                    bg-white/80
                    px-4 py-3
                    text-sm sm:text-base
                    resize-none
                    focus:outline-none
                    focus:ring-2
                    focus:ring-orange-300
                    "
                  />

                  <MessageSquare
                    size={16}
                    className="absolute top-4 right-4 text-gray-400"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:gap-4">
                <p className="text-[11px] sm:text-xs text-gray-400 leading-relaxed">
                  By submitting this form, you agree to be
                  contacted regarding your enquiry.
                </p>

                <button
                  type="submit"
                  disabled={submitting}
                  className="
                  w-full
                  bg-gradient-to-r
                  from-orange-500
                  to-orange-600
                  hover:from-orange-600
                  hover:to-orange-700
                  text-white
                  font-semibold
                  text-sm sm:text-base
                  py-3 sm:py-3.5
                  rounded-xl
                  shadow-lg shadow-orange-500/30
                  transition-all
                  duration-300
                  "
                >
                  {submitting
                    ? "Opening WhatsApp..."
                    : "Send Enquiry"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

function Field({
  label,
  icon,
  placeholder,
  value,
  onChange,
  error,
  inputMode,
}) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
        {label}
      </label>

      <div className="relative">
        <input
          value={value}
          placeholder={placeholder}
          inputMode={inputMode}
          onChange={(e) => onChange(e.target.value)}
          className={`
          w-full
          rounded-xl
          border
          bg-white/80
          backdrop-blur-sm
          px-4 py-2.5 sm:py-3
          pr-10
          text-sm sm:text-base
          focus:outline-none
          focus:ring-2
          transition

          ${
            error
              ? "border-red-400 focus:ring-red-300"
              : "border-blue-100 focus:ring-orange-300"
          }
        `}
        />

        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </span>
      </div>

      {error && (
        <p className="text-xs text-red-500 mt-1">
          {error}
        </p>
      )}
    </div>
  );
}

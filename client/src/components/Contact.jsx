import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

const submit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const API_BASE_URL =
        import.meta.env.VITE_API_BASE_URL;

      await axios.post(
        `${API_BASE_URL}/api/contact`,
        form
      );

      toast.success("Message sent successfully ");

      setForm({
        name: "",
        email: "",
        phone: "",
        whatsapp: "",
        message: "",
      });
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          "Failed to send message"
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 relative overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

        <div className="absolute bottom-10 right-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-cyan-300 uppercase tracking-wider font-semibold">
            Contact ADS SATHI
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Let's Grow Together
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full mb-6"></div>

          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Ready to boost your business with AI Videos, Digital Ads,
            Branding and Social Media Marketing? Contact us today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
<motion.div
  initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8"
>
  <h3 className="text-3xl font-bold text-white mb-8">
    Contact Information
  </h3>

  <div className="space-y-6">

    {/* Phone */}
<motion.div
  whileHover={{ x: 5 }}
  onClick={() => {
    navigator.clipboard.writeText("+9779702660378");

    const text = document.getElementById("phone-copy");
    text.innerText = "Copied ✓";

    setTimeout(() => {
      text.innerText = "Click to copy";
    }, 2000);
  }}
  className="flex items-center gap-4 group cursor-pointer"
>

  <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition">
    <FaPhoneAlt size={22} />
  </div>

  <div>
    <h4 className="text-white font-semibold">
      Phone
    </h4>

    <span className="text-blue-100 group-hover:text-cyan-300">
      +977 9702660378
    </span>

    <p
      id="phone-copy"
      className="text-xs text-cyan-300 opacity-0 group-hover:opacity-100 transition"
    >
      Click to copy
    </p>
  </div>

</motion.div>
    {/* WhatsApp */}
    <motion.a
      href="https://wa.me/9779702660378"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ x: 5 }}
      className="flex items-center gap-4 group cursor-pointer"
    >
      <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 group-hover:scale-110 transition">
        <FaWhatsapp size={24} />
      </div>

      <div>
        <h4 className="text-white font-semibold">
          WhatsApp
        </h4>

        <span className="text-blue-100 hover:text-green-300 hover:underline">
          Chat on WhatsApp
        </span>
      </div>
    </motion.a>

    {/* Email → Opens Gmail */}
    <motion.a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=adssathi123@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ x: 5 }}
      className="flex items-center gap-4 group cursor-pointer"
    >
      <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition">
        <FaEnvelope size={22} />
      </div>

      <div>
        <h4 className="text-white font-semibold">
          Email
        </h4>

        <span className="text-blue-100 hover:text-cyan-300 hover:underline">
          adssathi123@gmail.com
        </span>
      </div>
    </motion.a>

    {/* Address */}
    <motion.a
      href="https://maps.google.com/?q=Birgunj-16,Parsa,Nepal"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ x: 5 }}
      className="flex items-center gap-4 group cursor-pointer"
    >
      <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition">
        <FaMapMarkerAlt size={22} />
      </div>

      <div>
        <h4 className="text-white font-semibold">
          Address
        </h4>

        <span className="text-blue-100 hover:text-cyan-300 hover:underline">
          Birgunj-16, Parsa, Nepal
        </span>
      </div>
    </motion.a>

  </div>

  {/* Bottom Card */}
  <div className="mt-10 p-5 rounded-2xl bg-white/5 border border-white/10">
    <h4 className="text-xl font-semibold text-white mb-2">
      ADS SATHI
    </h4>

    <p className="text-blue-100">
      EVOLUTION IN MOTION • AI VIDEO • DIGITAL ADS
    </p>
  </div>
</motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8"
          >
            <h3 className="text-3xl font-bold text-white mb-8">
              Send Message
            </h3>

            <div className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-blue-200 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-blue-200 outline-none"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-blue-200 outline-none"
              />

              <input
                type="text"
                name="whatsapp"
                placeholder="WhatsApp Number"
                value={form.whatsapp}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-blue-200 outline-none"
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Write Your Message..."
                value={form.message}
                onChange={handleChange}
                required
                className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-blue-200 outline-none resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-cyan-100 transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
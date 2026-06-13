import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
// import API from "../api/axios";

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

      await API.post("/contact", form);

      alert("Message Sent Successfully!");

      setForm({
        name: "",
        email: "",
        phone: "",
        whatsapp: "",
        message: "",
      });
    } catch (error) {
      alert("Failed to send message");
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
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-300">
                  <FaPhoneAlt size={22} />
                </div>

                <div>
                  <h4 className="text-white font-semibold">Phone</h4>
                  <p className="text-blue-100">
                    +977 9702660378
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-300">
                  <FaWhatsapp size={24} />
                </div>

                <div>
                  <h4 className="text-white font-semibold">
                    WhatsApp
                  </h4>
                  <p className="text-blue-100">
                    +977 9702660378
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-300">
                  <FaEnvelope size={22} />
                </div>

                <div>
                  <h4 className="text-white font-semibold">
                    Email
                  </h4>
                  <p className="text-blue-100">
                    adssathi123@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-300">
                  <FaMapMarkerAlt size={22} />
                </div>

                <div>
                  <h4 className="text-white font-semibold">
                    Address
                  </h4>
                  <p className="text-blue-100">
                    Birgunj-16, Parsa, Nepal
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-5 rounded-2xl bg-white/5 border border-white/10">
              <h4 className="text-xl font-semibold text-white mb-2">
                ADS SATHI
              </h4>

              <p className="text-blue-100">
                EVOLUTION IN MOTION . AI VIDEO . DIGITAL ADS
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
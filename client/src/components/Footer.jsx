import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 pt-16 pb-8 relative overflow-hidden">
      
      {/* Background blur effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-80 h-80 bg-cyan-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-400/20 blur-3xl rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/ads_sathi_logo.png"
              alt="ADS SATHI"
              className="mb-4 w-32"
            />

            <p className="text-white/90 mb-6">
              ADS SATHI – EVOLUTION IN MOTION. AI Video, Digital Ads,
              Branding & Social Media Marketing Solutions in Nepal.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {[
                "facebook",
                "instagram",
                "tiktok",
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-white hover:bg-cyan-500 transition"
                >
                  {item === "facebook" && "📘"}
                  {item === "instagram" && "📸"}
                  {item === "tiktok" && "🎵"}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-white/80">
              {["About", "Services", "Pricing", "Contact"].map(
                (item, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 5 }}
                    className="hover:text-white cursor-pointer"
                  >
                    {item}
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">
              Our Services
            </h3>

            <ul className="space-y-3 text-white/80">
              {[
                "AI Video Production",
                "Digital Advertising",
                "Graphic Design",
                "Social Media Marketing",
                "Content Creation",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5 }}
                  className="hover:text-white cursor-pointer"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h3>

            <div className="text-white/80 space-y-3">
              <p>📧 adssathi123@gmail.com</p>
              <p>📞 +977 9702660378</p>
              <p>📍 Birgunj-16, Parsa, Nepal</p>
            </div>
          </motion.div>

        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/20 mt-10 pt-6 text-center text-white/70"
        >
          <p>
            © 2026 ADS SATHI. All Rights Reserved. | EVOLUTION IN MOTION 🚀
          </p>
        </motion.div>

      </div>
    </footer>
  );
}

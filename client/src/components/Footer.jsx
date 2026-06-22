
import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTiktok,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 pt-16 pb-8 relative overflow-hidden">

      {/* Background Blur */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-60 md:w-80 h-60 md:h-80 bg-cyan-500/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-10 right-10 w-60 md:w-80 h-60 md:h-80 bg-blue-400/20 blur-3xl rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center sm:text-left"
          >
            <img
              src="/ads_sathi_logo.png"
              alt="ADS SATHI"
              className="w-28 md:w-32 mx-auto sm:mx-0 mb-4"
            />

            <p className="text-white/80 leading-7 text-sm md:text-base">
              ADS SATHI – EVOLUTION IN MOTION.
              <br />
              AI Video • Digital Ads • Branding •
              Social Media Marketing
            </p>

            {/* Social */}
            <div className="flex justify-center sm:justify-start gap-4 mt-6">

              <motion.a
                href="https://www.facebook.com/profile.php?id=61589615277244"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-cyan-300"
              >
                <FaFacebookF />
              </motion.a>

              <motion.a
                href="https://tiktok.com/@adssathi"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white"
              >
                <FaTiktok />
              </motion.a>

            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center sm:text-left"
          >
            <h3 className="text-white font-bold mb-5 text-lg">
              Quick Links
            </h3>

            <ul className="space-y-3">

              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Pricing", href: "#pricing" },
                { name: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white/80 hover:text-cyan-300 transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}

            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center sm:text-left"
          >
            <h3 className="text-white font-bold mb-5 text-lg">
              Our Services
            </h3>

            <div className="space-y-3 text-white/80">
              <p>AI Video Production</p>
              <p>Digital Advertising</p>
              <p>Social Media Marketing</p>
              <p>Graphic Design</p>
              <p>Content Creation</p>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center sm:text-left"
          >
            <h3 className="text-white font-bold mb-5 text-lg">
              Contact Us
            </h3>

            <div className="space-y-5">

              {/* Email */}
              <a
                href="mailto:adssathi123@gmail.com"
                className="flex items-center justify-center sm:justify-start gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-300">
                  <FaEnvelope />
                </div>

                <p className="text-white/80 break-all">
                  adssathi123@gmail.com
                </p>
              </a>

              {/* Phone */}
              <div
                onClick={() =>
                  navigator.clipboard.writeText("+9779702660378")
                }
                className="flex items-center justify-center sm:justify-start gap-3 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-300">
                  <FaPhoneAlt />
                </div>

                <p className="text-white/80">
                  +977 9702660378
                </p>
              </div>

              {/* Address */}
              <a
                href="https://maps.google.com/?q=Birgunj-16,Parsa,Nepal"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center sm:justify-start gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-300">
                  <FaMapMarkerAlt />
                </div>

                <p className="text-white/80">
                  Birgunj-16, Parsa, Nepal
                </p>
              </a>

            </div>
          </motion.div>

        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="border-t border-white/20 mt-12 pt-6 text-center text-white/60 text-sm"
        >
          © 2026 ADS SATHI • All Rights Reserved • EVOLUTION IN MOTION 🚀
        </motion.div>

      </div>
    </footer>
  );
}
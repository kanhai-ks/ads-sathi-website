import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 pt-16 pb-8 relative overflow-hidden">

      {/* Background Blur */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-80 h-80 bg-cyan-500/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-400/20 blur-3xl rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/ads_sathi_logo.png"
              alt="ADS SATHI"
              className="w-32 mb-4"
            />

            <p className="text-white/80 leading-7">
              ADS SATHI – EVOLUTION IN MOTION.
              AI Video • Digital Ads • Branding •
              Social Media Marketing.
            </p>

            <div className="flex gap-4 mt-6">

              <motion.a
                href="https://facebook.com"
                target="_blank"
                whileHover={{ scale: 1.2 }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-cyan-300"
              >
                <FaFacebookF />
              </motion.a>

              <motion.a
                href="https://instagram.com"
                target="_blank"
                whileHover={{ scale: 1.2 }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-pink-400"
              >
                <FaInstagram />
              </motion.a>

              <motion.a
                href="https://tiktok.com"
                target="_blank"
                whileHover={{ scale: 1.2 }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white"
              >
                <FaTiktok />
              </motion.a>

            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-white font-bold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-white/80">

              {[
                "About",
                "Services",
                "Pricing",
                "Contact",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-cyan-300 cursor-pointer"
                >
                  {item}
                </li>
              ))}

            </ul>
          </motion.div>

          {/* Connect With Us */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-white font-bold mb-5">
              Connect With Us
            </h3>

            <div className="space-y-4">

              <a
                href="https://facebook.com"
                className="flex items-center gap-3 text-white/80 hover:text-cyan-300"
              >
                <FaFacebookF />
                Facebook
              </a>

              <a
                href="https://instagram.com"
                className="flex items-center gap-3 text-white/80 hover:text-cyan-300"
              >
                <FaInstagram />
                Instagram
              </a>

              <a
                href="https://tiktok.com"
                className="flex items-center gap-3 text-white/80 hover:text-cyan-300"
              >
                <FaTiktok />
                TikTok
              </a>

            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-white font-bold mb-5">
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
>
  <h3 className="text-white font-bold mb-5">
    Contact Us
  </h3>

  <div className="space-y-5">

    {/* Gmail */}
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=adssathi123@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 group"
    >
      <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition">
        <FaEnvelope />
      </div>

      <div>
        <p className="text-white/80 group-hover:text-cyan-300 transition">
          adssathi123@gmail.com
        </p>
      </div>
    </a>

    {/* Phone Copy */}
    <div
      onClick={() => {
        navigator.clipboard.writeText("+9779702660378");

        const text =
          document.getElementById("footer-copy");

        text.innerText = "Copied ✓";

        setTimeout(() => {
          text.innerText = "+977 9702660378";
        }, 2000);
      }}
      className="flex items-center gap-3 group cursor-pointer"
    >
      <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition">
        <FaPhoneAlt />
      </div>

      <div>
        <p
          id="footer-copy"
          className="text-white/80 group-hover:text-cyan-300 transition"
        >
          +977 9702660378
        </p>
      </div>
    </div>

    {/* Address */}
    <a
      href="https://maps.google.com/?q=Birgunj-16,Parsa,Nepal"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 group"
    >
      <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition">
        <FaMapMarkerAlt />
      </div>

      <div>
        <p className="text-white/80 group-hover:text-cyan-300 transition">
          Birgunj-16, Parsa, Nepal
        </p>
      </div>
    </a>

  </div>
</motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="border-t border-white/20 mt-12 pt-6 text-center text-white/60"
        >
          © 2026 ADS SATHI • All Rights Reserved • EVOLUTION IN MOTION 🚀
        </motion.div>

      </div>
    </footer>
  );
}
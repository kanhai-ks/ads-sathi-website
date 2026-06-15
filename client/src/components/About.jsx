
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

        <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <span className="text-cyan-300 font-semibold uppercase tracking-wider">
            About ADS SATHI
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            AI-Powered Marketing Solutions
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full mb-8"></div>

          <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
            ADS SATHI is a creative advertising and digital marketing agency
            helping businesses grow through AI-generated videos, digital ads,
            branding, graphic design, and social media marketing solutions.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-3xl blur-2xl"></div>

              <img
                src="/ads-sathi.png"
                alt="Krishna Kumar Sah"
                className="relative rounded-3xl shadow-2xl border border-white/10 w-full"
              />
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Meet Our Founder & CEO
            </h3>

            <h4 className="text-2xl text-cyan-300 font-semibold mb-4">
              Krishna Kumar Sah
            </h4>

            <p className="text-blue-100 leading-relaxed mb-6">
              Krishna Kumar Sah founded ADS SATHI with a vision to help
              businesses leverage the power of digital marketing, AI-generated
              content, branding, and creative advertising.
            </p>

            <p className="text-blue-100 leading-relaxed mb-8">
              Today, ADS SATHI provides innovative marketing solutions across
              Birgunj, Kathmandu, Bharatpur, Hetauda and beyond, helping brands
              grow faster through modern digital strategies.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "AI Video",
                "Digital Ads",
                "Branding",
                "Graphic Design",
                "Social Media",
              ].map((item, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
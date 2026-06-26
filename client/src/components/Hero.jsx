import React from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

        <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6 pt-24 pb-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE FIRST ON MOBILE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
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
                alt="ADS SATHI"
                className="
                  relative
                  rounded-3xl
                  shadow-2xl
                  border
                  border-white/10
                  w-full
                  max-w-[700px]
                  mx-auto
                  object-contain
                "
              />
            </motion.div>

            {/* Bottom Badge */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="
                absolute
                bottom-3
                left-3
                bg-cyan-500
                text-white
                px-5
                py-3
                rounded-2xl
                shadow-xl
                text-sm
              "
            >
              Digital Ads
            </motion.div>

            {/* Top Badge */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="
                absolute
                top-3
                right-3
                bg-cyan-500
                text-white
                px-5
                py-3
                rounded-2xl
                shadow-xl
                text-sm
              "
            >
              AI Video Services
            </motion.div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="
              text-white
              order-2
              lg:order-1
              text-center
              lg:text-left
            "
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-100 mb-6">
              EVOLUTION IN MOTION
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              AI VIDEO &
              <span className="block bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">
                DIGITAL ADS
              </span>
            </h1>

           <p className="mt-6 text-blue-100 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
  ADS SATHI empowers businesses with AI-generated videos, professional video editing,
  social media marketing, branding, graphic design and digital advertising solutions.
</p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">

              <a
                href="#contact"
                className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
              >
                Contact Us
              </a>

              <a
                href="#services"
                className="flex items-center justify-center gap-2 border border-white/30 px-8 py-3 rounded-full hover:bg-white/10 transition"
              >
                <FaPlay />
                View Services
              </a>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
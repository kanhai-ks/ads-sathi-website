

import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPlay,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

        <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-100 mb-6">
              🚀 EVOLUTION IN MOTION
            </span>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              AI VIDEO &
              <span className="block bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">
                DIGITAL ADS
              </span>
            </h1>

            <p className="mt-6 text-lg text-blue-100 leading-relaxed">
              ADS SATHI helps businesses grow through AI-generated videos,
              social media marketing, branding, content creation, graphic
              design, and digital advertising solutions.
            </p>

        
            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
                Contact Us
              </button>

              <button className="flex items-center gap-2 border border-white/30 px-8 py-3 rounded-full hover:bg-white/10 transition">
                <FaPlay />
                View Services
              </button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Floating Animation */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="relative"
            >
              <div className="absolute -inset-5 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-3xl blur-2xl"></div>

              <img
                src="/ads-sathi.png"
                alt="ADS SATHI"
                className="relative rounded-3xl shadow-2xl border border-white/10"
              />
            </motion.div>

            {/*  */}
            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute -bottom-5 left-0 bg-white text-gray-800 rounded-2xl p-5 shadow-xl"
            >
              {/* <h3 className="font-bold text-xl"></h3> */}
              <p>Digitals Ads</p>
            </motion.div>

            {/* Service Badge */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute top-0 right-0 bg-cyan-500 text-white px-5 py-3 rounded-2xl shadow-xl"
            >
              🎬 AI Video Services
            </motion.div>
          </motion.div>
        </div>

    
      </div>
    </section>
  );
};

export default Hero;



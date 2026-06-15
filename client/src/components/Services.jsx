
import React from "react";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaVideo,
  FaBullhorn,
  FaPalette,
  FaInstagram,
  FaRocket,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const services = [
  {
    icon: <FaRobot />,
    title: "AI Video Creation",
    description:
      "Professional AI-generated promotional videos for businesses and brands.",

    features: [
      "AI Generated Videos",
      "Voice Over",
      "Motion Graphics",
      "HD Export",
    ],
  },

  {
    icon: <FaVideo />,
    title: "Video Editing",
    description:
      "Creative editing for reels, ads and business promotional videos.",

    features: [
      "Professional Editing",
      "Transitions",
      "Visual Effects",
      "Social Media Ready",
    ],
  },

  {
    icon: <FaBullhorn />,
    title: "Digital Advertising",
    description:
      "Powerful advertising campaigns to increase reach and sales.",

    features: [
      "Facebook Ads",
      "Instagram Ads",
      "Lead Generation",
      "Optimization",
    ],
  },

  {
    icon: <FaPalette />,
    title: "Creative Design",
    description:
      "Eye-catching visual designs for branding and promotion.",

    features: [
      "Social Media Posts",
      "Banner Design",
      "Creative Posters",
      "Brand Visuals",
    ],
  },

  {
    icon: <FaInstagram />,
    title: "Social Media Management",
    description:
      "Complete management of your business social platforms.",

    features: [
      "Content Planning",
      "Regular Posting",
      "Audience Engagement",
      "Growth Strategy",
    ],
  },

  {
    icon: <FaRocket />,
    title: "Branding & Content Creation",
    description:
      "Build a professional brand identity and digital presence.",

    features: [
      "Brand Building",
      "Content Creation",
      "Marketing Materials",
      "Business Promotion",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute top-10 left-20 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl"
        />

      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-20"
        >
          <span className="text-cyan-300 uppercase tracking-wider font-semibold">
            Our Services
          </span>

          <h2 className="text-5xl font-bold text-white mt-4 mb-6">
            Digital Solutions For Growth
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full mb-6"></div>

          <p className="text-blue-100 max-w-3xl mx-auto text-lg">
            ADS SATHI provides AI-powered marketing, digital advertising,
            branding, creative content and social media solutions.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              viewport={{
                once: true,
              }}
              className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-3xl mb-6">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-blue-100 mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">

                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className="text-blue-100 flex gap-3"
                  >
                    <span className="text-cyan-300">
                      ✓
                    </span>

                    {feature}
                  </li>
                ))}

              </ul>

              <button className="w-full mt-8 bg-white text-blue-900 py-3 rounded-xl font-bold hover:bg-cyan-100 transition">
                Learn More
              </button>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}


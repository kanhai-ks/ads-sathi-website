import React from "react";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Plan A",
    price: "Rs 3,500",
    features: [
      "FB/Insta Boost - $5",
      "Social Media Management",
      "12 Social Media Posts",
      "All Festival Contents",
    ],
  },
  {
    name: "Plan B",
    price: "Rs 6,060",
    popular: true,
    features: [
      "FB/Insta Boost - $15",
      "16 Social Media Posts",
      "All Festival Contents",
      "Social Media Handling",
    ],
  },
  {
    name: "Plan C",
    price: "Rs 13,460",
    features: [
      "16 Custom Posts",
      "All Festival Contents",
      "Social Media Handling",
      "Social Media Boost - $26",
      "1 Brand Video Content",
    ],
  },
];



export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 relative overflow-hidden"
    >
      {/* Background Effects */}
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
            Pricing Plans
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Choose Your Perfect Package
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full mb-6"></div>

          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Affordable digital marketing solutions designed to grow your
            business and strengthen your online presence.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className={`relative rounded-3xl p-8 backdrop-blur-lg border shadow-xl ${
                plan.popular
                  ? "bg-cyan-500/10 border-cyan-400"
                  : "bg-white/10 border-white/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-cyan-400 text-blue-950 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <Star size={16} />
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-3xl font-bold text-white text-center mb-4">
                {plan.name}
              </h3>

              <div className="text-center mb-8">
                <span className="text-5xl font-bold text-cyan-300">
                  {plan.price}
                </span>

                <p className="text-blue-100 mt-2">Per Month</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-blue-100"
                  >
                    <Check size={18} className="text-cyan-300" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold transition ${
                  plan.popular
                    ? "bg-cyan-400 text-blue-950 hover:bg-cyan-300"
                    : "bg-white text-blue-900 hover:bg-cyan-100"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

      

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 max-w-4xl mx-auto bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-10 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Need a Custom Package?
          </h3>

          <p className="text-blue-100 mb-8">
            We can create a custom digital marketing plan specifically
            tailored for your business goals and budget.
          </p>

          <a
            href="tel:+9779702660378"
            className="inline-block bg-cyan-400 text-blue-950 px-8 py-4 rounded-xl font-bold hover:bg-cyan-300 transition"
          >
            Contact ADS SATHI
          </a>
        </motion.div>
      </div>
    </section>
  );
}
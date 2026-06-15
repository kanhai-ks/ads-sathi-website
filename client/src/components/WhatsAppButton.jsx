import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/9779702660378?text=Hello%20ADS%20SATHI%2C%20I%20want%20to%20know%20more%20about%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Pulse Animation */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-30 animate-ping"></span>

      {/* Button */}
      <div className="relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-xl hover:shadow-green-500/40 transition-all duration-300 hover:scale-110 flex items-center justify-center">

        <FaWhatsapp size={26} />

      </div>

      {/* Tooltip */}
      <div className="absolute right-16 bottom-2 hidden group-hover:block bg-black text-white text-xs px-3 py-1 rounded-md whitespace-nowrap">
        Chat with ADS SATHI
      </div>
    </a>
  );
}
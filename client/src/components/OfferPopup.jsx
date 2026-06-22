
import { useEffect, useState } from "react";

export default function OfferPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const phoneNumber = "9779702660378";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hello ADS SATHI, I want AI Video for Rs 1000 offer"
  )}`;

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">

      <div className="relative w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl">

        {/* Close */}
        <button
          onClick={() => setShow(false)}
          className="absolute right-3 top-2 text-xl text-gray-500 hover:text-red-500"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-center text-2xl font-bold text-blue-600">
          🔥 Special Offer
        </h2>

        <p className="mt-2 text-center text-gray-600">
          Get AI Video Creation Only
        </p>

        {/* Price */}
        <p className="mt-2 text-center text-3xl font-bold text-green-600">
          Rs 1000
        </p>

        {/* Video */}
      
<div className="mt-4 overflow-hidden rounded-xl bg-black">
  <video
    className="w-full max-h-[300px] object-contain"
    controls
    autoPlay
    muted
    playsInline
  >
    <source src="/ai-video.mp4" type="video/mp4" />

  </video>
</div>
        {/* CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 block w-full rounded-lg bg-green-500 py-3 text-center font-semibold text-white transition hover:bg-green-600"
        >
           Get Offer Now
        </a>

      </div>
    </div>
  );
}
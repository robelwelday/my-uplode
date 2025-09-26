import React, { memo } from "react";

export default memo(function Hero({ t, lang }) {
  return (
    <section
      className="relative h-[70vh] md:h-screen flex items-center justify-center text-center text-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero.png')", // Changed path to '/image/hero.png'
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Restored to "fixed" for parallax effect
        backgroundColor: "#f0f8ff", // Added fallback color in case image doesn't load
      }}
    >
      <div className="relative z-10 max-w-4xl px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 drop-shadow-2xl text-yellow-300">
          {t.hero.title[lang]}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 drop-shadow-2xl text-white font-medium animate-fade-in">
          {t.hero.subtitle[lang]}
        </p>
        <a
          href="#products"
          className="inline-block px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-900 font-bold rounded-full shadow-2xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-110 hover:shadow-yellow-500/50"
        >
          {t.hero.button[lang]}
        </a>
      </div>
      <img
        src="/images/solar-panel.png"
        alt="Solar panel"
        className="absolute bottom-0 right-0 w-1/4 md:w-1/3 lg:w-1/2 hidden md:block opacity-80 hover:opacity-100 transition-opacity duration-500 animate-fade-in"
        loading="lazy" // Add lazy loading for performance
      />
    </section>
  );
});

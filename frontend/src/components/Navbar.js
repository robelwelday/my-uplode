import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { lang, switchLanguage } = useLanguage();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown

  const translations = {
    home: { en: "Home", am: "መነሻ", ti: "መበገሲ" },
    products: { en: "Products", am: "ምርቶች", ti: "ምህርቲ" },
    news: { en: "Projects", am: "ፕሮጀክቶች", ti: "ፕሮጀክትታት" },
    aboutUs: { en: "About Us", am: "ስለ እኛ", ti: "ብዛዕባና" },
    contactUs: { en: "Contact Us", am: "አግኙን", ti: "የግንዩና" },
    brand: { en: "Nexus Solar", am: "ኔክሰስ ሶላር", ti: "ኔክሰስ ሶላር" },
    subtitle: {
      en: "Importer and Distributor of Solar System P.L.C",
      am: "የሶላር ሲስተም አስመጪና አከፋፋይ ",
      ti: "ኣምጻኢን አከፋፋሊን ሶላር ሲስተም ",
    },
  };

  const navLinks = [
    { path: "/", label: translations.home[lang] },
    { path: "/products", label: translations.products[lang] },
    { path: "/news", label: translations.news[lang] },
    { path: "/about", label: translations.aboutUs[lang] },
    { path: "/contact", label: translations.contactUs[lang] },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white p-4 md:p-6 flex justify-between items-center sticky top-0 z-50 shadow-lg backdrop-blur-sm">
      <div className="flex items-center space-x-4">
        <img src="/images/logo.png" alt="Nexus Solar Logo" className="h-10 w-10 md:h-14 md:w-14 rounded-lg shadow-md" />
        <div className="flex flex-col">
          <div className="text-lg md:text-2xl font-bold">{translations.brand[lang]}</div>
        </div>
      </div>
      <button
        className="md:hidden text-white hover:bg-blue-500 p-2 rounded transition-colors duration-200"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        ☰
      </button>
      <div className={`md:flex items-center space-x-6 ${isMobileMenuOpen ? "block" : "hidden"} md:block absolute md:relative top-full left-0 w-full md:w-auto bg-blue-700 md:bg-transparent p-4 md:p-0 z-40`}>
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`hover:underline text-lg md:text-lg hover:scale-105 transition-all duration-300 block md:inline-block py-2 md:py-0 ${
                location.pathname === link.path ? "font-bold underline text-yellow-300" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="relative mt-4 md:mt-0">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-white text-blue-600 px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200 text-sm md:text-base font-semibold w-full md:w-auto"
            >
              {lang.toUpperCase()} ▼
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white text-blue-600 rounded-lg shadow-xl border border-gray-200 overflow-hidden w-full md:w-auto z-50">
                <button
                  onClick={() => {
                    switchLanguage("en");
                    setIsDropdownOpen(false);
                  }}
                  className={`block px-4 py-2 text-sm hover:bg-blue-50 transition-colors duration-200 w-full text-left ${
                    lang === "en" ? "bg-blue-100 font-bold" : ""
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => {
                    switchLanguage("am");
                    setIsDropdownOpen(false);
                  }}
                  className={`block px-4 py-2 text-sm hover:bg-blue-50 transition-colors duration-200 w-full text-left ${
                    lang === "am" ? "bg-blue-100 font-bold" : ""
                  }`}
                >
                  ኣማርኛ
                </button>
                <button
                  onClick={() => {
                    switchLanguage("ti");
                    setIsDropdownOpen(false);
                  }}
                  className={`block px-4 py-2 text-sm hover:bg-blue-50 transition-colors duration-200 w-full text-left ${
                    lang === "ti" ? "bg-blue-100 font-bold" : ""
                  }`}
                >
                  ትግርኛ
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
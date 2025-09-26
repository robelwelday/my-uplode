import React, { useState, memo } from "react";
import { useLanguage } from "../context/LanguageContext";
import api from "../api/api";

export default memo(function Contact() {
  const { lang } = useLanguage();
  const [formData, setFormData] = useState({ name: "", message: "" });

  const translations = {
    heroTitle: {
      en: "Contact Us",
      am: "አግኙን",
      ti: "የግንዩና",
    },
    heroSubtitle: {
      en: "Get in touch with us for solar solutions and inquiries.",
      am: "ለሶላር መፍትሄዎች እና ጥያቄዎች ይጎብኙን።",
      ti: "ንሶላር መፍትሒ እና ሕቶታት ይጎብንዩና።",
    },
    formTitle: {
      en: "Send Us a Message",
      am: "መልእክት ይላኩልን",
      ti: "መልእኽቲ ልኣኽ",
    },
    namePlaceholder: {
      en: "Your Name",
      am: "ስም",
      ti: "ስም",
    },
    messagePlaceholder: {
      en: "Your Message",
      am: "መልክትዎ",
      ti: "መልክትኹም",
    },
    submitButton: {
      en: "Send Message",
      am: "መልእክት ይላኩ",
      ti: "መልእኽቲ ለኣኽ",
    },
    contactInfoTitle: {
      en: "Contact Information",
      am: "ኣድራሻ",
      ti: "ኣድራሻ",
    },
    email: { en: "Email", am: "ኢሜል", ti: "ኢሜል" },
    phone: { en: "Phone", am: "ስልክ", ti: "ስልኪ" },
    address: {
      en: "Mekelle Ethiopia\nKedamayWeyane Market behind Desta Alcohol\n tsegabu Belay building ",
      am: "ቀዳማይ ወያነ ገበያ፣ደስታ አልኮል መሸጫ ጀርባ ፣\nፅጋቡ በላይ ህንፃ",
      ti: "ቀዳማይ ወያነ ዕዳጋ፣ደስታ አልኮል መሸጢ ግልባጥ፣\nህንፃ ፅጋቡ በላይ",
    },
    viewOnGoogleMaps: {
      en: "View on Google Maps",
      am: "በ ጎጉል ካርታ ላይ ይመልከቱ",
      ti: "ብ ጎግል ካርታ ይርአዩ",
    },
    addressLabel: { en: "Address", am: "ኣድራሻ", ti: "ኣድራሻ" },
    locationLabel: { en: "Location", am: "የቢሮ ቦታ", ti: "ናይ ቢሮ ቦታ" },
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/contact', formData);
      alert(translations.submitButton[lang] + " sent successfully!");
      setFormData({ name: "", message: "" });
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Unknown error";
      alert(`Failed to send message: ${errorMessage}. Please try again.`);
      console.error("Error details:", err.response?.data || err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center text-center text-white bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/images/pattern.png')", backgroundSize: "cover" }}></div>
        <div className="relative z-10 max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg">{translations.heroTitle[lang]}</h1>
          <p className="text-xl md:text-2xl drop-shadow-md">{translations.heroSubtitle[lang]}</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('/images/subtle-pattern.png')", backgroundSize: "cover" }}></div>
        <div className="relative z-10">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 max-w-lg mx-auto hover:shadow-3xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">{translations.formTitle[lang]}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-400">👤</span>
                <input
                  type="text"
                  name="name"
                  placeholder={translations.namePlaceholder[lang]}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200"
                />
              </div>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-400">💬</span>
                <textarea
                  name="message"
                  placeholder={translations.messagePlaceholder[lang]}
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {translations.submitButton[lang]}
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info and Map */}
        <div className="relative z-10 space-y-10">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">{translations.contactInfoTitle[lang]}</h2>
            <div className="space-y-6">
              <div>
                <h3 className="flex items-center text-xl font-semibold text-gray-800 mb-2">
                  <span className="mr-3 text-blue-500">📧</span>
                  {translations.email[lang]}
                </h3>
                <a href="mailto:nexussolarsolution@gmail.com" className="block text-lg text-gray-700 font-semibold hover:text-blue-600">
                  nexussolarsolution@gmail.com
                </a>
                <a href="mailto:nexcussolar@gmail.com" className="block text-lg text-gray-700 font-semibold hover:text-blue-600">
                  nexcussolar@gmail.com
                </a>
              </div>
              <div>
                <h3 className="flex items-center text-xl font-semibold text-gray-800 mb-2">
                  <span className="mr-3 text-blue-500">📞</span>
                  {translations.phone[lang]}
                </h3>
                <a href="tel:+251914750444" className="block text-lg text-gray-700 font-semibold hover:text-blue-600">
                  +251914750444
                </a>
                <a href="tel:+251914309082" className="block text-lg text-gray-700 font-semibold hover:text-blue-600">
                  +251914309082
                </a>
                <a href="tel:+251914285791" className="block text-lg text-gray-700 font-semibold hover:text-blue-600">
                  +251914285791
                </a>
              </div>
              <div>
                <h3 className="flex items-center text-xl font-semibold text-gray-800 mb-2">
                  <span className="mr-3 text-blue-500">📍</span>
                  {translations.addressLabel[lang]}
                </h3>
                <p className="whitespace-pre-line text-lg text-gray-700">{translations.address[lang]}</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">{translations.locationLabel[lang]}</h3>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
              <img
                src="/images/map-image.jpg"
                alt="Map showing the location"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/zSmy7Y3LuUg37qsF7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-blue-600 hover:text-blue-800 font-semibold underline transition-colors duration-200"
            >
              {translations.viewOnGoogleMaps[lang]}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});
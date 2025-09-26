import React from "react";
import { useLanguage } from "../context/LanguageContext"; // Import LanguageContext

export default function Footer() {
  const { lang } = useLanguage(); // Get the selected language

  const translations = {
    contactUs: { en: "Contact Us", am: "አግኙን", ti: "የግንዩና" },
    email: { en: "Email", am: "ኢሜል", ti: "ኢሜል" },
    phone: { en: "Phone", am: "ስልክ", ti: "ስልኪ" },
    map: { en: "Map", am: "ካርታ", ti: "ካርታ" },
    followUs: { en: "Follow Us", am: "ተከተሉን", ti: "ተኸታተሉና" },
    location: { en: "Location", am: "አካባቢ", ti: "ቦታ" },
    aboutUs: { en: "About Us", am: "ስለ እኛ", ti: "ብዛዕባና" },
    aboutText: {
      en: "Nexus Solar Solutions is committed importer and distributer of solar systems",
      am: "ኔክስስ ሶላር ሶሉሽንስ አስተማማኝ እና በቂ የሶላር ኃይል መፍትሄዎችን አስመጪና አከፋፋይ ነው።",
      ti: "ኔክስስ ሶላር ሶሉሽንስ መምፅአን መከፋፈሊን መተኣማመኒ እና ብቁዕን ናይ ሶላር ሓይሊ መፍትሒ እዩ።",
    },
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
  };

  return (
    <footer className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-8 mt-auto shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 px-6">
        {/* About Us Section */}
        <div className="space-y-4 transform hover:scale-105 transition-transform duration-300 lg:col-span-1 sm:col-span-2">
          <h3 className="text-lg font-bold border-b-2 border-yellow-400 pb-2">{translations.aboutUs[lang]}</h3>
          <p className="text-sm leading-relaxed">{translations.aboutText[lang]}</p>
        </div>

        {/* Contact Us Section */}
        <div className="space-y-4 transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-lg font-bold border-b-2 border-yellow-400 pb-2">{translations.contactUs[lang]}</h3>
          <p className="text-sm">{translations.email[lang]}: <li>nexussolarsolution@gmail.com</li><li>nexucssolar@gmail.com</li></p>
          <p className="text-sm">{translations.phone[lang]}:</p>
          <ul className="space-y-2">
            <li className="text-sm">+251914750444</li>
            <li className="text-sm">+251914309082</li>
            <li className="text-sm">+251914285791</li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="space-y-4 transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-lg font-bold border-b-2 border-yellow-400 pb-2">{translations.followUs[lang]}</h3>
          <ul className="flex space-x-4 items-center"> {/* Updated for vertical alignment */}
            <li>
              <a href="https://web.facebook.com/profile.php?id=61580342417633" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline hover:text-yellow-300 transition-colors duration-200" aria-label="Follow us on Facebook">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/nexus-solar/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline hover:text-yellow-300 transition-colors duration-200" aria-label="Follow us on LinkedIn">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://chat.whatsapp.com/GjxxH9vyUoUGavflNMGdrH?mode=ems_copy_t" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline hover:text-yellow-300 transition-colors duration-200" aria-label="Follow us on WhatsApp">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://t.me/+SAI9sAGN_bdiNmE0" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline hover:text-yellow-300 transition-colors duration-200" aria-label="Follow us on Telegram">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>

        {/* Location Section */}
        <div className="space-y-4 transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-lg font-bold border-b-2 border-yellow-400 pb-2">{translations.location[lang]}</h3>
          <p className="text-sm whitespace-pre-line">{translations.address[lang]}</p>
        </div>

        {/* Map Section */}
        <div className="space-y-4 transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-lg font-bold border-b-2 border-yellow-400 pb-2">{translations.map[lang]}</h3>
          <img
            src="/images/map-image.jpg" // Use the image from the public/images folder
            alt="Map showing the location"
            className="w-full h-32 object-cover rounded-lg shadow-lg"
          />
          <a
            href="https://maps.app.goo.gl/zSmy7Y3LuUg37qsF7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-200 hover:underline block text-sm hover:text-yellow-300 transition-colors duration-200" // Changed to a lighter blue color
          >
            {translations.viewOnGoogleMaps[lang]}
          </a>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-blue-200">
        © {new Date().getFullYear()} Nexus Solar Solutions. All rights reserved.
      </div>
    </footer>
  );
}
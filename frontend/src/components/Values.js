import React, { memo, useState, useEffect } from "react";

export default memo(function Values({ lang }) {
  const values = [
    {
      title: { en: "Dual Expertise", am: "ድርብ ልምድ", ti: "ድርብ ልምዲ" },
      desc: {
        en: "Unique capability in both solar backup and water pumping provides integrated solutions for our clients.",
        am: "በሁለቱም የፀሐይ ሃይል መጠባበቂያ እና በውሃ ውስጥ ፓምፕ ያለን ልዩ ችሎታ ለደንበኞቻችን የተቀናጁ መፍትሄዎችን ይሰጣል.",
        ti: "ኣብ ክልቲኡ ሶላር ሓይሊ መሐለውታን ማይ ናይ ምስሓብ ዘለና ፍሉይ ዓቕሚ ንዓማዊልና ዝተዋደደ ፍታሕ ይህብ።",
      },
      image: "/images/Dual Expertise.png",
    },
    {
      title: { en: "End-to-End Service", am: "ሙሉ ኣገልግሎት", ti: "ሙሉእ ኣገልግሎት" },
      desc: {
        en: "We handle everything—consultation, design, supply, installation, commissioning, and maintenance.",
        am: " ሙሉ የ ምክክር፣ ዲዛይን፣አቅርቦት፣ተከላ፣ተልዕኮ እና ጥገና ኣገልግሎት ለደንበኞቻችን እንሰጣለን።",
        ti: "ሙሉእ ናይ ምኽሪ፣ዲዛይን፣ቀረብ፣ምትካል፣ምጅማርን ፅገናን ምግባር ኣገልግሎት ንህብ ።",
      },
      image: "/images/End-to-End Service.png",
    },
    {
      title: { en: "Quality Assurance", am: "የጥራት ማረጋገጫ", ti: "ምርግጋፅ ፅሬት" },
      desc: {
        en: "We use only certified and proven components,backed by strong warrantiesce.",
        am: "ደረጃቸው በ ባለሞያ የተረጋገጡ እና ደረጃቸው የተረጋገጡ ምርቶች ብቻ ንጠቀማለን ።",
        ti: "ደረጅኦም ብበዓል  ሞያ ዝተረጋገፁን  ደረጅኦም ዝሓለዩንምህርትታት ንጥቀም ",
      },
      image: "/images/QualityAssurance.png",
    },
    {
      title: { en: "Technical Excellence", am: "ቴክኒካል ልቀት", ti: "ቴክኒካዊ ብሉፅነት" },
      desc: {
        en: "ur team comprises certified engineers and technicians with deep domain knowledge.",
        am: " ቡድናችን እውቅና ያላቸው መሐንዲሶችን እና ጥልቅ የጎራ እውቀት ያላቸው ቴክኒሻኖች ያካትታል።",
        ti: " ጉጅለና ሰርቲፊኬት ዘለዎም መሃንድሳትን ዓሚቕ ናይ ዓውዲ ፍልጠት ዘለዎም ቴክኒሻናት ዝተመስረተ እዩ ",
      },
      image: "/images/TechnicalExcellence.png",
    },
    {
      title: { en: "Customization", am: "ማበጀት", ti: "ምምዕርራይ" },
      desc: {
        en: "We design systems based on your specific needs—whether it's required backup hours or daily water output.",
        am: " ለሚፈለግ የመጠባበቂያ ሰዓታት ወይም የዕለት ተዕለት የውሃ አቅርቦት በልዩ ፍላጎቶችዎ መሰረት ስርዓቶችን እንቀርጻለን",
        ti: "ናይ መሐለውታ ሰዓታት  ይኹን ወይ መዓልታዊ ድፍኢት  ማይ ኣብ ፍሉይ ድሌታትኩም ተመርኲስና ሲስተማት ንነድፍ።",
      },
      image: "/images/Customization.png",
    },
    {
      title: { en: "Cost-Effectiveness", am: "ወጪ-ቆጣቢነት", ti: "ወጪ-ቆጣቢነት" },
      desc: {
        en: "Eliminate fuel costs and electricity bills. Enjoy a strong return on investment and low lifetime maintenance.",
        am: " የነዳጅ ወጪዎችን እና የኤሌክትሪክ ክፍያዎችን ያስወግዱ። በ ውጤታማ በኢንቨስትመንት ላይ የተመሰረተ ጠንካራ ገቢ እና ዝቅተኛ የህይወት ዘመን ጥገና ያጣጥሙ .።",
        ti: " ወጻኢታት ነዳዲን ሕሳብ ኤሌክትሪክን ብምውጋድ አብ ጠንካራ ኢንቨስትመንት ዝተመሰረተ አታዊን ትሑት ናይ ሂወት ዘመን ፅገና  ያጣዓዕጥሙ።",
      },
      image: "/images/Cost-Effectiveness.png",
    },
    {
      title: { en: "Trust & Reliability", am: "እምነት እና ተአማኒነት ", ti: "እምነት እና ተአማኒነት" },
      desc: {
        en: "We are a local business built on a foundation of trust, with a proven track record of successful projects.",
        am: "በምንሰራው ሁሉ ከፍተኛውን እምነት እና ተአማኒነት መርሃችን ነው  ።",
        ti: "ብኹሉ እንገብሮ ነገራት ዝለዓለ እምነት እና ተአማኒነት ንምጭባጥ ምጽዓር።",
      },
      image: "/images/Trust&Reliability.png",
    },
  ];

  const [currentCard, setCurrentCard] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentCard((prev) => (prev + 1) % values.length);
      }, 4000); // Change card every 4 seconds
      return () => clearInterval(interval);
    }
  }, [values.length, isHovered]);

  return (
    <div
      className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 min-h-[600px] px-4 py-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Horizontal Display */}
      <div className="flex-grow lg:w-3/4">
        <div
          key={currentCard}
          className="relative flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-green-200 h-full"
        >
          <div className="absolute inset-0 bg-white/30 rounded-lg"></div>
          {/* Text Section */}
          <div
            className="relative text-center md:text-left flex-1 mb-6 md:mb-0 md:mr-8"
            style={{ animation: "fadeIn 0.8s ease-in-out" }}
          >
            <h3 className="text-3xl font-bold mb-4 text-green-800">
              {values[currentCard].title[lang]}
            </h3>
            <p className="text-lg text-gray-700">
              {values[currentCard].desc[lang]}
            </p>
          </div>
          {/* Image Section */}
          <img
            src={values[currentCard].image}
            alt={values[currentCard].title[lang]}
            className="w-64 h-64 md:w-80 md:h-80 object-contain rounded transition-transform duration-500"
            style={{ animation: "slideInRight 1s ease-in-out" }}
            loading="lazy"
          />
        </div>
      </div>

      {/* Vertical List */}
      <div className="lg:w-1/4 flex flex-col gap-2">
        {values.map((value, index) => (
          <button
            key={index}
            onClick={() => setCurrentCard(index)}
            className={`w-full text-left p-4 rounded-lg transition-all duration-300 border-l-4 ${
              currentCard === index
                ? "bg-green-100 border-green-500 shadow-md scale-105"
                : "bg-white hover:bg-gray-50 border-transparent hover:border-green-300"
            }`}
          >
            <h4
              className={`font-semibold ${
                currentCard === index ? "text-green-800" : "text-gray-800"
              }`}
            >
              {value.title[lang]}
            </h4>
          </button>
        ))}
      </div>
    </div>
  );
});

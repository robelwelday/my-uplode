import React, { memo } from "react";

export default memo(function CoreSpecializations({ lang }) {
  const specializations = {
    title: {
      en: "Our Services",
      am: "አገልግሎቶቻችን",
      ti: "ኣገልግሎታትና",
    },
    sections: [
      {
        category: {
          en: "A. Solar Power Backup Solutions",
          am: ". የሶላር ሃይል መጠባበቂያ መፍትሄዎች",
          ti: ". ናይ ሶላር ሓይሊ መተካእታ መፍትሒታት",
        },
        intro: {
          en: "We provide peace of mind against power outages with a range of reliable products.",
          am: "የኤሌክትሪክ መቆራረጥን በመከላከል ሰላምን በሚሰጡ የተለያዩ አስተማማኝ ምርቶች እናቀርባለን።",
          ti: "ምቁራፅ ኤሌክትሪክ ብምክልኻል ሰላም ዝህቡ ዝተፈላለዩ ውሑሳት ፍርያት ነቕርብ።",
        },
        items: [
          {
            title: {
              en: "Solar Home Lighting Kits",
              am: "የሶላር የቤት ማብራት ኪቶች",
              ti: "ናይ ገዛ መብራህቲ ሶላር ኪት",
            },
            desc: {
              en: "All-in-one systems for essential lighting and device charging.",
              am: "ለአስፈላጊ መብራት እና ለመሳሪያ ቻርጅ ሁሉን-በአንድ-የያዙ ስርዓቶች።",
              ti: "ንኣገደስቲ መብራህትን መሳርሒ ቻርጅ ምግባርን ኩሉ-ኣብ-ሓደ ዝሓዙ ስርዓታት።",
            },
          },
          {
            title: {
              en: "Solar Inverters & Batteries",
              am: "የሶላር ኢንቬርተሮች እና ባትሪዎች",
              ti: "ናይ ሶላር ኢንቨርተራትን ባትሪታትን",
            },
            desc: {
              en: "Seamless backup power for homes and small businesses, from basic lighting to full-house backup solutions.",
              am: "ለቤቶች እና ለአነስተኛ ንግዶች እንከን የለሽ የመጠባበቂያ ሃይል፣ ከመሰረታዊ መብራት እስከ ሙሉ-ቤት የመጠባበቂያ መፍትሄዎች።",
              ti: "ንኣባይትን ንኣናእሽተ ንግድታትን እንከን ዘይብሉ ናይ ምትካእ ሓይሊ፣ ካብ መሰረታዊ መብራህቲ ክሳብ ምሉእ-ገዛ ናይ ምትካእ መፍትሒታት።",
            },
          },
          {
            title: {
              en: "Solar Street Lights",
              am: "የሶላር መንገድ መብራቶች",
              ti: "ናይ ጽርግያ መብራህቲ ሶላር",
            },
            desc: {
              en: "Efficient and autonomous lighting for security, pathways, and community areas.",
              am: "ለደህንነት፣ ለመንገዶች እና ለማህበረሰብ አካባቢዎች ቀልጣፋ እና ራሱን የቻለ መብራት።",
              ti: "ንውሕስነት፣ ንመንገድታትን ንማሕበረሰብ ከባቢታትን ዝሰማማዕን ርእሱ ዝኸኣለን መብራህቲ።",
            },
          },
          {
            title: {
              en: "Solar Generators & Portable Power Stations",
              am: "የሶላር ጀነሬተሮች እና ተንቀሳቃሽ የሃይል ጣቢያዎች",
              ti: "ናይ ሶላር ጀነርተራትን ተንቀሳቐስቲ ናይ ሓይሊ ጣቢያታትን",
            },
            desc: {
              en: "Clean, silent power for camping, events, and mobile needs.",
              am: "ለካምፕ፣ ለዝግጅቶች እና ለተንቀሳቃሽ ፍላጎቶች ንጹህ፣ ጸጥ ያለ ሃይል።",
              ti: "ንካምፕ፣ ንዝግጅታትን ንተንቀሳቐስቲ ድሌታትን ጽሩይ፣ ሰላማዊ ሓይሊ።",
            },
          },
        ],
      },
      {
        category: {
          en: "B. Solar Water Pumping Systems",
          am: "ለ. የሶላር ውሃ ፓምፕ ስርዓቶች",
          ti: "ለ. ናይ ሶላር ማይ ፓምፕ ስርዓታት",
        },
        intro: {
          en: "We deliver water sustainably from any source, anywhere the sun shines.",
          am: "ፀሀይ በምትልበት ቦታ ሁሉ ከማንኛውም ምንጭ ውሃን በዘላቂነት እናደርሳለን።",
          ti: "ጸሓይ ኣብ ዝበርቀሉ ቦታ ኩሉ ካብ ዝኾነ ምንጪ ማይ ብዘላቕነት ነብጽሕ።",
        },
        items: [
          {
            title: {
              en: "Surface Solar Pumps",
              am: "የገጸ-ምድር ሶላር ፓምፖች",
              ti: "ናይ ላዕሊ ሶላር ፓምፕታት",
            },
            desc: {
              en: "For drawing water from shallow sources like ponds, rivers, and tanks for irrigation and livestock.",
              am: "ለመስኖ እና ለከብቶች ከጥቃቅን ምንጮች እንደ ኩሬዎች፣ ወንዞች እና ታንኮች ውሃ ለመሳብ።",
              ti: "ንምስኖን ንእንስሳ ዘቤትን ካብ ንእስ  ዝበሉ ምንጭታት ከም ቀላያት፣ ኣፍላጋትን ታንክታትን ማይ ንምስሓብ።",
            },
          },
          {
            title: {
              en: "Submersible Solar Pumps",
              am: "የውሃ ውስጥ ሶላር ፓምፖች",
              ti: "ናይ ውሽጢ ማይ ሶላር ፓምፕታት",
            },
            desc: {
              en: "For extracting water from deep boreholes and wells for agriculture, drinking water, and industrial use.",
              am: "ለግብርና፣ ለመጠጥ ውሃ እና ለኢንዱስትሪ አገልግሎት ከጥልቅ ጉድጓዶች እና ጉድጓዶች ውሃ ለማውጣት።",
              ti: "ንሕርሻ፣ ንስተ ማይን ንኢንዱስትሪ ኣገልግሎትን ካብ ዓሚቝ ጉድጓዳትን ዓይኒ ማያትን ማይ ንምውጻእ።",
            },
          },
          {
            title: {
              en: "Complete Pump Systems",
              am: "የተሟላ የፓምፕ ስርዓቶች",
              ti: "ምሉኣት ናይ ፓምፕ ስርዓታት",
            },
            desc: {
              en: "We supply and install full kits, including pumps, solar panels, controllers, mounting structures, and piping.",
              am: "ፓምፖችን፣ የሶላር ፓነሎችን፣ መቆጣጠሪያዎችን፣ የመጫኛ መዋቅሮችን እና ቧንቧዎችን ጨምሮ ሙሉ ኪቶችን እናቀርባለን እና እንጭናለን።",
              ti: "ፓምፕታት፣ ናይ ሶላር ፓነላት፣ ተቆጻጸርቲ፣ ናይ ምትካል መዋቕራትን ቧንቧታትን ሓዊሱ ምሉኣት ኪትታት ነቕርብን ንተክልን።",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
        {specializations.title[lang]}
      </h2>

      {specializations.sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-16">
          {/* Category Title */}
          <h3 className="text-2xl font-semibold text-green-700 mb-4 text-center">
            {section.category[lang]}
          </h3>
          <p className="text-gray-600 mb-8 text-center">{section.intro[lang]}</p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {section.items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl p-6 border border-green-100 hover:border-green-400 transition-all duration-300 flex flex-col items-center justify-center text-center hover:scale-105 min-h-[150px] sm:col-span-1 lg:col-span-2"
              >
                <p
                  className="text-gray-700 transition-transform duration-300 transform group-hover:scale-105"
                  style={{ animation: "fadeIn 0.5s ease-in-out" }}
                >
                  <strong className="text-xl font-bold text-green-800">{item.title[lang]}:</strong> {item.desc[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
});

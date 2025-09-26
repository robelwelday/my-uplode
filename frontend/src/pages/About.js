import React, { memo } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import CoreSpecializations from "../components/CoreSpecializations";
import Values from "../components/Values";

export default memo(function About() {
  const { lang } = useLanguage();

  const translations = {
    heroTitle: {
      en: "About Us", 
      am: "ስለ እኛ",
      ti: "ብዛዕባና",
    },
    heroParagraphs: {
      en: [
        "Nexus Solar and Energy Solution PLC is  a registered electromechanical contracting and solar equipment supplier based in Mekelle, Tigray. Since 2012 E.C., we have been delivering innovative solar energy and electrical solutions across Tigray and beyond.",
        "Our team brings together over 8 years of professional experience in solar system installation, electrical works, and renewable energy projects.",
        "Backed by strong technical expertise, industry certifications, and a track record of successful installations, we are committed to providing reliable, affordable, and high-quality solar solutions to households, businesses, NGOs, and institutions.",
        "At Nexus, we believe in building long-term partnerships with our clients while supporting sustainable energy development in Ethiopia."
      ],
      am: [
        "ኔክሰስ ሶላር ሶሉሽን በመቀለ ከተማ የተመሰረተ የኤሌክትሮ መካኒካል ኮንትራክተር እና የሶላር መሳሪያ አቅራቢ ድርጅት ነው። ከ 2012 ጀምሮ በትግራይ እና ከትግራይ ውጪ ባሉ የ ሃገሪቱ ኣካባቢዎች አዳዲስ የፀሐይ ኃይል እና የኤሌክትሪክ መፍትሄዎችን በማቅረብ ላይ እንገኛለን።",
        "ቡድናችን ከ ስምንት ዓመታት በላይ በሶላር ሲስተም ተከላ፣ በኤሌክትሪክ ስራዎች እና በታዳሽ ሃይል ፕሮጀክቶች ላይ የሙያ ልምድ ባለቤት ነው።",
        "በጠንካራ ቴክኒካል እውቀት፣ በኢንዱስትሪ ሰርተፊኬቶች እና የተሳካ ተከላዎች ታሪክ በመታገዝ አስተማማኝ፣ ተመጣጣኝ እና ከፍተኛ ጥራት ያለው የሶላር መፍትሄዎችን ለቤተሰብ፣ ንግዶች፣ መንግሥታዊ ያልሆኑ ድርጅቶች እና ተቋማት ለማቅረብ ቆርጠን ተነስተናል።",
        "በኔክሰስ፣ በኢትዮጵያ ዘላቂ የኃይል ልማትን እየደገፍን ከደንበኞቻችን ጋር የረጅም ጊዜ አጋርነት እንገነባለን ብለን እናምናለን።"
      ],
      ti: [
        "ኔክሰስ ሶላር ሶሉሽን ኣብ ትግራይ ከተማ መቐለ ዝመደብሩ ኤሌክትሮሜካኒካል ኮንትራክተርን ናይ ሶላር መሳርሒታትን ኣቕራቢ ትካል እዩ። ካብ 2012 ዓም ጀሚርና ኣብ መላእ ትግራይን ካልኦት ከባቢታት ኢትዮጲያን ሓደሽቲ ናይ ሶላርን ኤሌክትሪካልን መፍትሒታት ከነቕርብ ፀኒሕና ኢና።",
        "ድርጅትና ኣብ ምትካል ሶላር ሲስተም፣ ስራሕቲ ኤሌክትሪክን፣ ፕሮጀክትታት ተሓዳሲ ሓይሊን ናይ ልዕሊ 8 ዓመት ሞያዊ ልምዲ አለዎ።",
        "ብዕሙቅ ናይ ቴክኒካዊ ክእለት፡ ናይ ኢንዱስትሪ ምስክር ወረቐት፡ ከምኡ’ውን ናይ ዕዉታት ስራሕቲ ተደጊፍና፡ ንስድራቤታት፡ ትካላት ንግዲ፡ ዘይመንግስታውያን ትካላትን ዘተኣማምን፡ ብተመጣጣኒ ዋጋን ልዑል ጽሬት ዘለዎን ናይ ሶላር ሓይሊ ፍታሕ ንምሃብ ቃል ኣቲና ኣለና።",
        "ኣብ ኔክሰስ ኣብ ኢትዮጵያ ዘላቒ ልምዓት ሓይሊ ኤሌትሪክ ንምህናፅ ምስ ዓማዊልና ናይ ነዊሕ ግዜ ሽርክነት ኣብ ምህናጽ ንኣምን።"
      ]
    },
    heroSubtitle: {
      en: "Nexus Solar and Energy Solution PLC is a registered electromechanical contracting and solar equipment supplier based in Mekelle, Tigray. Since 2012 E.C., we have been delivering innovative solar energy and electrical solutions across Tigray and beyond. Our team brings together over 8 years of professional experience in solar system installation, electrical works, and renewable energy projects. Backed by strong technical expertise, industry certifications, and a track record of successful installations, we are committed to providing reliable, affordable, and high-quality solar solutions to households, businesses, NGOs, and institutions. At Nexus, we believe in building long-term partnerships with our clients while supporting sustainable energy development in Ethiopia.",
      am: "ማህበራትን በቀጣይነት የሶላር ኃይል መፍትሄዎች በማሳበል።",
      ti: "ማህበራት ብቀፃላይነት ናይ ሶላር ሓይሊ መፍትሒ ብማሳበል።",
    },
    missionTitle: {
      en: "Our Mission",
      am: "ተልእኮ",
      ti: "ተልእኾ",
    },
    missionText: {
      en: "Our mission is to make renewable energy accessible and affordable for all. We aim to position Tigray and Ethiopia as leaders in clean energy adoption by providing innovative solar and electromechanical solutions with expert execution. Every project we undertake is guided by a commitment to quality, efficiency, and customer satisfaction. By supplying certified, reliable, and affordable solar products, we strive to meet the growing demand for sustainable power. Ultimately, our goal is to help communities reduce energy costs and smoothly transition to cleaner, renewable energy sources.",
      am: "የእኛ ተልእኮ ታዳሽ ኃይል ለሁሉም ተደራሽ እና ተመጣጣኝ እንዲሆን ማድረግ ነው። አዳዲስ የፀሐይ እና የኤሌክትሮ መካኒካል መፍትሄዎችን በባለሙያ አፈፃፀም በማቅረብ ትግራይን እና ኢትዮጵያን በንፁህ ኢነርጂ  መሪነት የመሾም አላማ አለን። የምንሰራው እያንዳንዱ ፕሮጀክት ለጥራት፣ ቅልጥፍና እና የደንበኛ እርካታ ባለው ቁርጠኝነት ይመራል። የተመሰከረ፣ አስተማማኝ እና በተመጣጣኝ ዋጋ የፀሃይ ምርቶችን በማቅረብ እያደገ የመጣውን የዘላቂ ሃይል ፍላጎት ለማሟላት እንጥራለን። በመጨረሻም ግባችን ማህበረሰቦች የኃይል ወጪዎችን እንዲቀንሱ እና ወደ ንጹህ ታዳሽ የኃይል ምንጮች እንዲሸጋገሩ መርዳት ነው።።",
      ti: "ተልእኾና ተሓዳሲ ሓይሊ ንኹሉ ብተመጣጣኒ ዋጋ ተበጻሒ ምግባር እዩ። ቀፃሊ ዕላማና  ትግራይን ኢትዮጵያን ኣብ ምቕባል ተሓዳሲ ሓይሊ  መራሕቲ ኮይነን ንምቕማጥ  ሓደሽቲ ሶላርን ኤሌክትሮሜካኒካልን መፍትሒታት  ምቕራብ እዩ። ኩሉ እንሰርሖ ፕሮጀክት ብተወፋይነት፣ጽሬትን ዝለዓለ ብቕዓትን ዝምራሕ ስለ ዝኾነ ብዕግበት ዓማዊል ዝተመስከረሉ እዩ። ሰርቲፊኬት ዘለዎም፣ ዘተኣማምኑን ብተመጣጣኒ ዋጋ ዝሽየጡን ፍርያት ብምቕራብ ነቲ እናዓበየ ዝኸይድ ዘሎ ጠለብ ዘላቒ ሓይሊ ንምምላእ ንጽዕር። ኣብ መወዳእታ ዕላማና ማሕበረሰባት ወጻኢታት ሓይሊ ኤለትሪክ ክቕንሱን ናብ ጽሩይን ተሓዳሲን ምንጪ ብዘይ ገለ ጸገም ክሰጋገሩን ምሕጋዝ እዩ።",
    },
    teamTitle: {
      en: "Meet Our Team",
      am: "ቡድናችንን ያውቁ",
      ti: "ቡድና ይርእዩ",
    },
    teamMember1Name: {
      en: "Kibrom Hluf  ",
      am: "ክብሮም ሕሉፍ",
      ti: "ክብሮም ሕሉፍ",
    },
    teamMember1Role: {
      en: "CoFounder",
      am: "መስራች",
      ti: "መስራቲ",
    },
    teamMember2Name: {
      en: "Seare G/Michal  ",
      am: "ሰዓረ ገ/ሚካኤል",
      ti: "ሰዓረ ገ/ሚካኤል",
    },
    teamMember2Role: {
      en: "CEO & CoFounder",
      am: "ሥራ አስፈፃሚ እና መስራች",
      ti: "ሥራሕ አስፈፃሚ እና መስራቲ ",
    },
    teamMember3Name: {
      en: "Daniel grmay ",
      am: "ዳንኤል ግርማይ",
      ti: "ዳንኤል ግርማይ",
    },
    teamMember3Role: {
      en: "technician",
      am: "የ ሶላር ባለሞያ",
      ti: "በዓል ሞያ ሶላር",
    },
    ctaTitle: {
      en: "Join Us in Making a Difference",
      am: "ለውጥ ለማምጣት ከእኛ ጋር ይስሩ",
      ti: "ለውጢ ንማምፃእ ምሳና ይሰርሑ",
    },
    ctaText: {
      en: "Contact us today to learn more about our solar solutions.",
      am: "ስለ የሶላር መፍትሄዎች ተጨማሪ ለማወቅ ዛሬ ያግኙን።",
      ti: "ብዛዕባና ናይ ሶላር መፍትሒ ተወሳኺ ሓበሬታ የግንዩና።",
    },
    contactUsButton: {
      en: "Contact Us",
      am: "አግኙን",
      ti: "የግንዩና",
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-center text-white bg-gray-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-5xl px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 drop-shadow-2xl text-yellow-300">{translations.heroTitle[lang]}</h1>
          <div className="text-lg md:text-xl leading-relaxed drop-shadow-lg text-white font-medium space-y-4">
            {translations.heroParagraphs[lang].map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        </div>
        <img
          src="/images/solar-panel.png"
          alt="Solar panel"
          className="absolute bottom-0 right-0 w-1/3 md:w-1/4 opacity-80 hover:opacity-100 transition-opacity duration-500"
          loading="lazy"
        />
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-blue-800">{translations.missionTitle[lang]}</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">{translations.missionText[lang]}</p>
          </div>
          <div className="order-1 md:order-2 text-center">
            <img src="/images/mission_image.jpg" alt="Mission Image" className="w-full h-80 object-cover rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300" loading="lazy" />
          </div>
        </div>
      </section>

      <section id="services">
        <CoreSpecializations lang={lang} />
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-blue-800">{translations.teamTitle[lang]}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div className="text-center p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-blue-50 to-green-50">
              <img src="/images/kb.jpg" alt="Team Member 1" className="w-40 h-40 object-cover rounded-full mx-auto mb-6 shadow-lg" />
              <h3 className="text-2xl font-semibold mb-2 text-blue-700">{translations.teamMember1Name[lang]}</h3>
              <p className="text-lg text-gray-600">{translations.teamMember1Role[lang]}</p>
            </div>
            <div className="text-center p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-blue-50 to-green-50">
              <img src="/images/ሰአረ.jpg" alt="Team Member 2" className="w-40 h-40 object-cover rounded-full mx-auto mb-6 shadow-lg" />
              <h3 className="text-2xl font-semibold mb-2 text-blue-700">{translations.teamMember2Name[lang]}</h3>
              <p className="text-lg text-gray-600">{translations.teamMember2Role[lang]}</p>
            </div>
            <div className="text-center p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-blue-50 to-green-50">
              <img src="/images/dani.jpg" alt="Team Member 3" className="w-40 h-40 object-cover rounded-full mx-auto mb-6 shadow-lg" />
              <h3 className="text-2xl font-semibold mb-2 text-blue-700">{translations.teamMember3Name[lang]}</h3>
              <p className="text-lg text-gray-600">{translations.teamMember3Role[lang]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white text-center px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 drop-shadow-lg">{translations.ctaTitle[lang]}</h2>
          <p className="text-xl mb-10 drop-shadow-md">{translations.ctaText[lang]}</p>
          <Link to="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 inline-block">
            {translations.contactUsButton[lang]}
          </Link>
        </div>
      </section>
    </div>
  );
});
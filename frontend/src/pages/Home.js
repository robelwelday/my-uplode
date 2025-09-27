import React, { useEffect, useState, memo } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Values from "../components/Values";
import { useLanguage } from "../context/LanguageContext";
import api from "../api/api"; // Axios instance
import NewsPreview from '../components/NewsPreview';
import ProductCard from '../components/ProductCard'; // Import ProductCard

export default memo(function Home() {
  const { lang } = useLanguage(); // Get the selected language
  const [products, setProducts] = useState([]);
  const [projects, setProjects] = useState([]);
  const [latestProjects, setLatestProjects] = useState([]);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const t = {
    hero: {
      title: { en: "Welcome to Nexus Solar Solutions", am: "እንኳን ወደ ኔክሰስ ሶላር በደህና መጡ", ti: "እንኳዕ ናብ ኔክሰስ ሶላር ብሰላም መፁ" },
      subtitle: { en: "Providing clean energy solutions for everyone", am: "ለሁሉም ጥሩ ኃይል መፍትሄ እንሰጣለን", ti: "ብሉፅ ናይ ሶላር መፍትሒ ንኩሉ " },
      button: { en: "View Products", am: "ምርቶችን ይመልከቱ", ti: "ምህርትታትና ይምልከቱ" },
    },
    sections: {
      values: { en: "Our Values", am: "እሴቶች", ti: "እሴታትና" },
      products: { en: "Products", am: "ምርቶች", ti: "ምህርትታትና" },
      projects: { en: "Latest Projects", am: "የቅርብ ጊዜ ፕሮጀክቶች", ti: "ናይ ቀረባ ፕሮጀክትታት" },
      seeMore: { en: "See More", am: "ተጨማሪ ይመልከቱ", ti: "ተወሳኺ ይመልከቱ" },
      aboutUs: {
        title: { en: "About Us", am: "ስለ እኛ", ti: "ብዛዕባና" },
        subtitle: { en: "Empowering communities with sustainable solar energy solutions.", am: "ማህበራትን በቀጣይነት የሶላር ኃይል መፍትሄዎች በማሳበል።", ti: "ማህበራት ብቀፃላይነት ናይ ሶላር ሓይሊ መፍትሒ ብማሳበል።" },
        description: { 
          en: "Nexus Solar and Energy Solution PLC is a registered electromechanical contracting and solar equipment supplier based in Mekelle, Tigray. Since 2012 E.C., we have been delivering innovative solar energy and electrical solutions across Tigray and beyond. Our team brings together over 8 years of professional experience in solar system installation, electrical works, and renewable energy projects. Backed by strong technical expertise, industry certifications, and a track record of successful installations, we are committed to providing reliable, affordable, and high-quality solar solutions to households, businesses, NGOs, and institutions. At Nexus, we believe in building long-term partnerships with our clients while supporting sustainable energy development in Ethiopia.", 
          am: "ኔክሰስ ሶላር  ሶሉሽን በመቀለ ከተማ  የተመሰረተ የኤሌክትሮ መካኒካል ኮንትራክተር እና የሶላር  መሳሪያ አቅራቢ ድርጅት ነው። ከ 2012 ጀምሮ በትግራይ እና ከትግራይ ውጪ ባሉ የ ሃገሪቱ ኣካባቢዎች አዳዲስ የፀሐይ ኃይል እና የኤሌክትሪክ መፍትሄዎችን በማቅረብ ላይ እንገኛለን።ቡድናችን ከ ስምንት  ዓመታት በላይ በሶላር ሲስተም ተከላ፣ በኤሌክትሪክ ስራዎች እና በታዳሽ ሃይል ፕሮጀክቶች ላይ የሙያ ልምድ ባለቤት ነው። በጠንካራ ቴክኒካል እውቀት፣ በኢንዱስትሪ ሰርተፊኬቶች እና የተሳካ ተከላዎች ታሪክ በመታገዝ አስተማማኝ፣ ተመጣጣኝ እና ከፍተኛ ጥራት ያለው የሶላር መፍትሄዎችን ለቤተሰብ፣ ንግዶች፣ መንግሥታዊ ያልሆኑ ድርጅቶች እና ተቋማት ለማቅረብ ቆርጠን ተነስተናል። በኔክሰስ፣ በኢትዮጵያ ዘላቂ የኃይል ልማትን እየደገፍን ከደንበኞቻችን ጋር የረጅም ጊዜ አጋርነት እንገነባለን ብለን እናምናለን።", 
          ti: "ኔክሰስ ሶላር ሶሉሽን ኣብ ትግራይ ከተማ መቐለ ዝመደብሩ  ኤሌክትሮሜካኒካል ኮንትራክተርን ናይ ሶላር መሳርሒታትን ኣቕራቢ ትካል እዩ። ካብ 2012 ዓም ጀሚርና ኣብ መላእ ትግራይን ካልኦት ከባቢታት ኢትዮጲያን ሓደሽቲ ናይ ሶላርን ኤሌክትሪካልን መፍትሒታት ከነቕርብ ፀኒሕና ኢና።ድርጅትና ኣብ ምትካል ሶላር ሲስተም፣ ስራሕቲ ኤሌክትሪክን፣ ፕሮጀክትታት ተሓዳሲ ሓይሊን ናይ ልዕሊ 8 ዓመት ሞያዊ ልምዲ አለዎ። ብዕሙቅ ናይ  ቴክኒካዊ ክእለት፡ ናይ ኢንዱስትሪ ምስክር ወረቐት፡ ከምኡ’ውን ናይ ዕዉታት ስራሕቲ ተደጊፍና፡ ንስድራቤታት፡ ትካላት ንግዲ፡ ዘይመንግስታውያን ትካላትን ዘተኣማምን፡ ብተመጣጣኒ ዋጋን ልዑል ጽሬት ዘለዎን ናይ ሶላር ሓይሊ ፍታሕ ንምሃብ ቃል ኣቲና ኣለና።ኣብ ኔክሰስ ኣብ ኢትዮጵያ ዘላቒ ልምዓት ሓይሊ ኤሌትሪክ ንምህናፅ ምስ ዓማዊልና ናይ ነዊሕ ግዜ ሽርክነት ኣብ ምህናጽ ንኣምን።" 
        },
      },
    },
  };

  useEffect(() => {
    setLoading(true);
    setError(null);
    Promise.all([
      api.get(`/api/products?lang=${lang}`).then((res) => setProducts(res.data)).catch((err) => { throw new Error('Failed to load products'); }),
      api.get(`/api/projects?lang=${lang}`).then((res) => setProjects(res.data)).catch((err) => { throw new Error('Failed to load projects'); }),
      api.get(`/api/projects?lang=${lang}`).then((res) => setLatestProjects(res.data)).catch((err) => { throw new Error('Failed to load latest projects'); }),
      api.get('/api/news').then(res => {
        const sortedNews = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setNews(sortedNews);
      }).catch((err) => { throw new Error('Failed to load news'); })
    ]).catch((err) => {
      setError(err.message);
    }).finally(() => setLoading(false));
  }, [lang]); // Refetch when language changes

  if (loading) return <p className="text-center text-lg text-gray-600 animate-pulse">Loading...</p>;
  if (error) return <p className="text-center text-red-500 text-lg bg-red-100 p-4 rounded-lg shadow-md">{error}</p>;

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-green-50 min-h-screen animate-fade-in">
      <Hero t={t} lang={lang} />
      {/* Enhanced About Us section with gradient background and icon */}
      <section 
        className="my-16 py-12 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg shadow-lg mx-4 md:mx-8"
        style={{
          backgroundImage: "url('/images/subtle-pattern.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-green-800 drop-shadow-md" style={{ animation: 'fadeIn 1s ease-in-out' }}>{t.sections.aboutUs.title[lang]}</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto" style={{ animation: 'fadeIn 1s ease-in-out 0.5s both' }}>
            {t.sections.aboutUs.description[lang]}
          </p>
        </div>
      </section>
      <section id="values" className="my-16 bg-gradient-to-b from-white to-gray-100 py-16 px-4 md:px-8 overflow-x-hidden shadow-inner">
        <h2 className="text-5xl font-bold text-center mb-8 text-blue-800 drop-shadow-lg">{t.sections.values[lang]}</h2>
        <Values lang={lang} />
      </section>
      <section id="products" className="my-16 bg-gradient-to-b from-white to-gray-100 py-16 px-4 md:px-8 overflow-x-hidden shadow-inner">
        <h2 className="text-5xl font-bold text-center mb-12 text-blue-800 drop-shadow-lg">{t.sections.products[lang]}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.slice(0, 3).map((product, idx) => ( // Limit to 3 products
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/products" className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-full hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl">
            {t.sections.seeMore[lang]}
          </Link>
        </div>
      </section>

      {/* New Section for Latest Project and Top News */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Latest Project */}
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-blue-800 text-center">Latest Project</h2>
          {news.length > 0 ? (
            <NewsPreview news={news.slice(0, 3)} lang={lang} />
          ) : (
            <p className="text-center text-gray-500">No Projects available.</p>
          )}
          <div className="text-center mt-12">
            <Link to="/news" className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-full hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl">
              See More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
});

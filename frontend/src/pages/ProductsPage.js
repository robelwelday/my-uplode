import React, { useEffect, useState, memo } from "react";
import { useLanguage } from "../context/LanguageContext";
import api from "../api/api";
import { Link } from "react-router-dom";

export default memo(function ProductsPage() {
  const { lang } = useLanguage(); // Remove switchLanguage function
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Local translations for the page title
  const translations = {
    title: {
      en: "Our Products",
      am: "ምርቶችና",
      ti: "ምህርትታትና",
    },
  };

  useEffect(() => {
    setLoading(true);
    setError(null);
    api.get(`/api/products?lang=${lang}`) // Pass the selected language to the API
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err.message); // Log errors for debugging
        setError("Failed to load products");
      })
      .finally(() => setLoading(false));
  }, [lang]); // Refetch products when the language changes

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="flex-grow p-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-800 drop-shadow-lg">{translations.title[lang]}</h1>

        {loading && <p className="text-center text-lg text-gray-600 animate-pulse">Loading...</p>}
        {error && <p className="text-center text-red-500 text-lg bg-red-100 p-4 rounded-lg shadow-md">{error}</p>}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <div key={product._id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200 hover:border-blue-300">
                {product.image && (
                  <img
                    src={`${product.image}`}
                    alt={product.name?.[lang] || product.name?.en || "Product Image"}
                    className="w-1/2 h-96 object-cover rounded mb-6 shadow-md"
                    loading="lazy" // Add lazy loading
                  />
                )}
                <h4 className="text-xl font-bold mb-2 whitespace-normal break-words text-blue-700">
                  {product.name?.[lang] || product.name?.en || "Unnamed Product"}
                </h4>
                <p className={`mt-2 text-sm font-bold ${product.available ? "text-green-500" : "text-red-500"}`}>
                  {product.available ? "Available" : "Unavailable"}
                </p>
                <Link
                  to={`/products/${product._id}`}
                  className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  See More
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
});



import React, { memo } from "react";
import { useLanguage } from "../context/LanguageContext"; // Import LanguageContext

export default memo(function ProductCard({ product }) {
  const { lang } = useLanguage(); // Get the selected language

  return (
    <div className="relative bg-white rounded-2xl shadow-md p-4 sm:p-6 md:p-8 hover:shadow-2xl hover:border-2 hover:border-yellow-400 transition-all duration-300 group flex flex-col h-full min-w-0 border border-gray-200"> {/* Added subtle border */}
      {product.image && (
        <img
          src={`http://localhost:5000${product.image}`} // Ensure the backend URL is prefixed
          alt={product.name?.[lang] || product.name?.en || "Product Image"} // Improved alt attribute
          className="w-full max-w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-contain rounded-lg mb-4 border border-gray-300 hover:border-green-400 transition-colors"
          loading="lazy" // Add lazy loading
        />
      )}
      <div className="flex flex-col flex-grow">
        <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 whitespace-normal">
          {product.name?.[lang] || product.name?.en || "Unnamed Product"} {/* Display name dynamically */}
        </h2>
        
        <p className={`mt-2 text-xs sm:text-sm md:text-base font-bold break-words overflow-wrap-anywhere ${product.available ? "text-green-500" : "text-red-500"}`}>
          {product.available ? "Available" : "Unavailable"}
        </p>
      </div>

      {/* Tooltip for description */}
      {product.description?.[lang] && (
        <div className="absolute inset-0 bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-center p-4 rounded-lg overflow-hidden">
          <p className="text-xs sm:text-sm md:text-base break-words overflow-wrap-anywhere">{product.description[lang]}</p>
        </div>
      )}
    </div>
  );
});

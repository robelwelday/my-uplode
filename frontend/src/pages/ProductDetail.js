import React, { useEffect, useState, memo } from "react";
import { useParams, Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import api from "../api/api";

export default memo(function ProductDetail() {
  const { id } = useParams();
  const { lang } = useLanguage();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    api.get(`/api/products/${id}?lang=${lang}`) // Ensure /api prefix is included
      .then((res) => {
        if (!res.data) throw new Error("No data returned from API");
        setProduct(res.data);
      })
      .catch((err) => {
        console.error("Error fetching product detail:", err);
        setError("Failed to load product details.");
      })
      .finally(() => setLoading(false));
  }, [id, lang]);

  if (loading) return <p className="text-center mt-10 animate-pulse">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!product) return <p className="text-center mt-10">Product not found.</p>;

  return (
    <div className="px-4 md:px-40 py-20">
      <Link to="/products" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to Products
      </Link>

      {product.image && (
        <img
          src={product.image}
          alt={product.name?.[lang] || product.name?.en || "Product Image"}
          className="w-full md:w-4/5 h-96 object-cover rounded mb-6"
        />
      )}

      <h1 className="text-4xl font-bold mb-4 break-words whitespace-pre-wrap">
        {product.name?.[lang] || product.name?.en || "Unnamed Product"}
      </h1>

      <div className="text-lg leading-relaxed break-words whitespace-pre-wrap">
        {product.description?.[lang] || product.description?.en || "No description available."}
      </div>
    </div>
  );
});

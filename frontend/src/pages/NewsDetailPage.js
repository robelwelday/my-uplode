import React, { useEffect, useState, memo } from "react";
import { useParams, Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import api from "../api/api";

export default memo(function NewsDetail() {
  const { id } = useParams();
  const { lang } = useLanguage();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    api.get(`/api/news/${id}?lang=${lang}`) // Add /api prefix
      .then((res) => {
        if (!res.data) {
          throw new Error("No data returned from API");
        }
        setNewsItem(res.data);
      })
      .catch((err) => {
        console.error("Error fetching news detail:", err);
        setError("Failed to load news item.");
      })
      .finally(() => setLoading(false));
  }, [id, lang]);

  if (loading) return <p className="text-center mt-10 animate-pulse">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="px-4 md:px-20 py-10">
      <Link to="/news" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to News
      </Link>

      {newsItem.coverImage && (
        <img
          src={newsItem.coverImage}
          alt={newsItem.title?.[lang] || newsItem.title?.en || "News Image"}
          className="w-full md:w-5/6 h-96 object-cover rounded mb-6"
        />
      )}

      <h1 className="text-4xl font-bold mb-4 break-words whitespace-pre-wrap">
        {newsItem.title?.[lang] || newsItem.title?.en || "No Title Available"}
      </h1>

      <div className="text-lg leading-relaxed break-words whitespace-pre-wrap">
        {(newsItem.content?.[lang] || newsItem.content?.en || "No Description Available")
          .split("\n")
          .map((p, i) => (
            <p key={i} className="mb-4">{p}</p>
          ))}
      </div>
    </div>
  );
});

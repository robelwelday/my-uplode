import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import api from "../api/api";

export default function NewsDetail() {
  const { id } = useParams();
  const { lang } = useLanguage();
  const [newsItem, setNewsItem] = useState(null);

  useEffect(() => {
    api.get(`/news/${id}?lang=${lang}`)
      .then((res) => {
        console.log("Fetched news data:", res.data); // Debug: Log the full response
        setNewsItem(res.data);
      })
      .catch((err) => console.error(err));
  }, [id, lang]);

  if (!newsItem) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="px-4 md:px-20 py-10">
      <Link to="/news" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to News
      </Link>

      {newsItem.coverImage && (
        <img
          src={`http://localhost:5000${newsItem.coverImage}`}
          alt={newsItem.title?.[lang] || newsItem.title?.en || "News Image"}
          className="w-85/100 h-96 object-cover rounded mb-6"
        />
      )}

      <h1 className="text-4xl font-bold mb-4 break-words whitespace-pre-wrap">
        {newsItem.title?.[lang] || newsItem.title?.en || JSON.stringify(newsItem.title) || "No Title Available"}
      </h1>

      <div className="text-lg leading-relaxed break-words whitespace-pre-wrap">
        {(newsItem.content?.[lang] || newsItem.content?.en || JSON.stringify(newsItem.content) || "No Description Available")
          .split("\n")
          .map((p, i) => (
            <p key={i} className="mb-4">{p}</p>
          ))}
      </div>
    </div>
  );
}

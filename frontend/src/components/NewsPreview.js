import React from "react";
import { Link } from "react-router-dom";

export default function NewsPreview({ news, lang }) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {news.map((n) => (
        <div key={n._id} className="bg-white p-4 rounded shadow hover:shadow-lg transition h-full flex flex-col">
          <img src={`http://localhost:5000${n.coverImage}`} alt={n.title?.[lang] || n.title?.en || "News Image"} className="w-full h-48 object-cover rounded mb-4" />
          <h3 className="text-xl font-bold mb-2 break-words">{n.title?.[lang] || n.title?.en || "Untitled News"}</h3>
          <Link
            to={`/news/${n._id}`}
            className="text-blue-600 hover:underline mt-auto"
          >
            See More
          </Link>
        </div>
      ))}
    </div>
  );
}

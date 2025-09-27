import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import api from '../api/api';

function NewsDetail() {
  const { id } = useParams();
  const { lang } = useLanguage();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get(`/news/${id}?lang=${lang}`)
      .then(res => {
        setNewsItem(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch news item:", err);
        setError("Failed to load news item.");
        setLoading(false);
      });
  }, [id, lang]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;
  if (!newsItem) return <p className="text-center mt-10">Project item not found.</p>;

  const title = newsItem.title?.[lang] || newsItem.title?.en || "Untitled News";
  const content = newsItem.content?.[lang] || newsItem.content?.en || "No content available.";

  return (
    <div className="px-4 md:px-20 py-10 bg-gray-50 min-h-screen">
      <Link to="/news" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to Projects
      </Link>

      {newsItem.coverImage && (
        <div className="flex justify-center mb-6">
          <img
            src={`${newsItem.coverImage}`}
            alt={title}
            className="w-full md:w-2/3 lg:w-1/2 h-auto max-h-96 object-contain rounded-lg shadow-md"
          />
        </div>
      )}

      <h1 className="text-4xl font-bold mb-4 text-gray-800 text-center break-words">{title}</h1>
      
      <div className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap max-w-4xl mx-auto">
        <p className="break-words">{content}</p>
      </div>
    </div>
  );
}

export default NewsDetail;

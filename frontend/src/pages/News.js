import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import api from '../api/api';

function News() {
  const { lang } = useLanguage();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get('/news')
      .then(res => {
        setNews(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch news:", err);
        setError("Failed to load news.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <Link to={`/news/${item._id}`} key={item._id} className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col">
              {item.coverImage && (
                <div className="overflow-hidden">
                  <img 
                    src={`http://localhost:5000${item.coverImage}`} 
                    alt={item.title?.[lang] || item.title?.en} 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors duration-300 break-words">
                  {item.title?.[lang] || item.title?.en || "Untitled News"}
                </h3>
                <span className="text-blue-600 hover:underline mt-4 font-semibold self-start">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;

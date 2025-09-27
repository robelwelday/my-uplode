import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext'; // Import LanguageContext
import API from '../api/api';

function ProductDetail() {
  const { id } = useParams();
  const { lang } = useLanguage(); // Get the selected language
  const [product, setProduct] = useState(null);

  useEffect(() => {
    API.get(`/api/products/${id}?lang=${lang}`) // Fetch product based on selected language
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id, lang]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="px-4 md:px-40 py-20">
      <Link to="/products" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to Products
      </Link>

      {product.image && (
        <img
          src={`http://localhost:5000${product.image}`}
          alt={product.name?.[lang] || product.name?.en || "Product Image"}
          className="w-85/100 h-96 object-cover rounded mb-6"
        />
      )}

      <h1 className="text-4xl font-bold mb-4">
        {product.name?.[lang] || product.name?.en || "Unnamed Product"}
      </h1>

      <div className="text-lg leading-relaxed">
        <p className="mb-4 whitespace-pre-wrap break-words">
          {product.description?.[lang] || product.description?.en || "No description available."}
        </p>
      </div>
    </div>
  );
}

export default ProductDetail;

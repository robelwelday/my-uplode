import { useEffect, useState } from 'react';
import API from '../api/api';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    API.get('/products?lang=en')
      .then(res => {
        const data = Array.isArray(res.data) ? res.data : res.data.products || [];
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Failed to load products');
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ padding: '2rem' }}>Loading products...</p>;
  if (error) return <p style={{ padding: '2rem', color: 'red' }}>{error}</p>;

  return (
    <div style={{ padding: '2rem', background: '#f4f4f4', minHeight: '100vh' }}>
      <h2>Our Products</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {products.map(product => (
          <div key={product._id} style={{ background: 'white', padding: '1rem', borderRadius: '8px', width: '250px' }}>
            <img 
              src={product.image?.startsWith('http') ? product.image : `http://localhost:5000${product.image}`} 
              alt={product.name} 
              style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
            />
            <h4>{product.name}</h4>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

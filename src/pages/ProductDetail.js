import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{product.name.en}</h1>
      <p>{product.description.en}</p>
      {product.image && <img src={product.image} alt={product.name.en} />}
      <p>Available: {product.available ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default ProductDetail;
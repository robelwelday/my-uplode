import React, { useState, useEffect } from 'react';
import NavigationBar from '../components/NavigationBar';

const ProductPage = () => {
    const [language, setLanguage] = useState('en');
    const [productName, setProductName] = useState('');

    useEffect(() => {
        const fetchProductName = async () => {
            const response = await fetch(`/api/products?lang=${language}`);
            const data = await response.json();
            setProductName(data.name);
        };

        fetchProductName();
    }, [language]);

    return (
        <div>
            <NavigationBar onLanguageChange={setLanguage} />
            <h1>{productName}</h1>
        </div>
    );
};

export default ProductPage;

// ProductName.js
import React from 'react';
import { getProductData } from './data/dataManager';

const ProductName = () => {
    const product = getProductData();

    return <p>Name: {product.name}</p>;
};

export default ProductName;

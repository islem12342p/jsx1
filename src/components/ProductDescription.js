// ProductDescription.js
import React from 'react';
import { getProductData } from './data/dataManager';

const ProductDescription = () => {
    const product = getProductData();

    return <p>Description: {product.description}</p>;
};

export default ProductDescription;

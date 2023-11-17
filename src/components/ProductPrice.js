// ProductPrice.js
import React from 'react';
import { getProductData } from './data/dataManager';

const ProductPrice = () => {
    const product = getProductData();
    

    return <p>Price: ${product.price}</p>;
};

export default ProductPrice;

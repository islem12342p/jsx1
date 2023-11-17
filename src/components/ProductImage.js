// ProductImage.js
import React from 'react';
import { getProductData } from './data/dataManager';

const ProductImage = () => {
    const product = getProductData();
    console.log(product.imagePath)  
    

    return <img src={product.imagePath} alt="Product" />;
};

export default ProductImage;

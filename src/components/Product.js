import React from 'react';
import './Product.css';

function Product({ product }) {
    const { title, price, description, brand, category } = product;

    return (
        <div className="product-box">
                <h2>{title}</h2>
                <div className="price">${price}</div>
                <p>Description: {description}</p>
                <p>Brand: {brand}</p>
                <p>Category: {category}</p>
        </div>
    );
}

export default Product;

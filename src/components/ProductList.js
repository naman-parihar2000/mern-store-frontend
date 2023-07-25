import React from 'react';
import './ProductList.css'
import { Link } from 'react-router-dom';
import Product from './Product';

const ProductList = ({ products }) => {
    return (
        <div>
            <h1>Product List</h1>
            <div className="product-list-container">
                {products.map((product) => (
                    <Link to={`/products/${product._id}`} key={product._id} className="product-item link">
                        <Product key={product._id} product={product} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProductList;

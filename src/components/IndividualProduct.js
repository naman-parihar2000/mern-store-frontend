import React, { useState } from 'react';
import './Product.css';
import './IndividualProduct.css'
import { useParams, useNavigate } from 'react-router-dom';
import { useGetIndividualProductQuery } from '../store/slices/apiSlice';
import { addToCart } from '../store/slices/cartSlice';
import { useDispatch } from 'react-redux';

const IndividualProduct = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { _id: productId } = useParams();

  const [quantityToAdd, setQuantityToAdd] = useState(1)

  const { data, isLoading, isError, error } = useGetIndividualProductQuery(
    productId
  );

  const addToCartHandler = () => {
    dispatch(addToCart({ ...data, quantityToAdd: Number(quantityToAdd) }))
  }
  const goToCartHandler = () => {
    navigate('/cart')
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error: {error.message}</h2>;
  }

  if (!data) {
    return <h2>Product not found</h2>;
  }

  const { thumbnail, title, price, description, brand, category, } = data.product;

  return (
    <div className="product-box">
      <img className="product-img" src={thumbnail} alt="ProductImage" />
      <h2>{title}</h2>
      <div>${price}</div>
      <p>Description: {description}</p>
      <p>Brand: {brand}</p>
      <p>Category: {category}</p>
      <br />

      <input
        type='number'
        placeholder='add more...'
        defaultValue={quantityToAdd}
        onChange={(event) => setQuantityToAdd(event.target.value)}
      />
      <br />

      <button onClick={addToCartHandler}>
        ADD TO CART
      </button>
      <br />

      <button onClick={goToCartHandler}>GO TO CART</button>
    </div>
  );
};

export default IndividualProduct;

import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import IndividualProduct from './components/IndividualProduct';
import { useGetProductsQuery } from './store/slices/apiSlice';
import ProductList from './components/ProductList';
import LoginSignup from './components/LoginSignup';

const App = () => {
  const { data, isLoading, error } = useGetProductsQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    console.log(error);
    return error.message;
  }

  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList products={data.products} />} />
        <Route path="/products/:_id" element={<IndividualProduct products={data.products} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login-signup" element={<LoginSignup />} />
      </Routes>
    </Fragment>
  );
};

export default App;

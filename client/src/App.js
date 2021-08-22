import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
import {Router} from '@reach/router';
import CreateProduct from './components/CreateProduct';
import AllProducts from './components/AllProducts';
import EditProduct from './components/EditProduct';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      <h1>Wild Again</h1>
      <h3>A Sustainable Guide to Living</h3>
      <Router>
        <CreateProduct path = "/api/products/new" />
        <AllProducts default path = "/api/products" />
        <ProductDetails path="/api/products/:id" />
        <EditProduct path = "/api/products/:id/edit" />
      </Router>
    </div>
  );
}

export default App;

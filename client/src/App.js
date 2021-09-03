import './App.css';
import React from 'react';
import {Router, Link} from '@reach/router';
import CreateProduct from './components/CreateProduct';
import AllProducts from './components/AllProducts';
import EditProduct from './components/EditProduct';
import ProductDetails from './components/ProductDetails';
import TabPanel from './components/TabPanel';
import HomePage from './components/HomePage';

import ImageList from './components/ImageList';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faChevronCircleLeft, faPen, faTrashAlt, faLightbulb, faEdit, faPlus } from '@fortawesome/free-solid-svg-icons'
import Contact from './components/HomePage';
import {Button} from '@material-ui/core';

library.add(fab, faChevronCircleLeft, faTrashAlt, faPen, faLightbulb, faEdit, faPlus )

function App() {
  return (
    <div className="App">
      <h1>Wild Again</h1>
      <h3 id="subtitle">Your Sustainable Guide to Living</h3>
      <Router>
        <HomePage default path="/api/home" default />
        <CreateProduct path = "/api/products/new" />
        <AllProducts path = "/api/products" />
        <ProductDetails path="/api/products/:id" />
        <EditProduct path = "/api/products/:id/edit" />
        <ImageList path="/api/products/local"/>
        <TabPanel path="/api/products/tips" />
      </Router>

    </div>
  );
}

export default App;

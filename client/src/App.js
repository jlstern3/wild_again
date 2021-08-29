import './App.css';
import React from 'react';
import {Router, Link} from '@reach/router';
import CreateProduct from './components/CreateProduct';
import AllProducts from './components/AllProducts';
import EditProduct from './components/EditProduct';
import ProductDetails from './components/ProductDetails';
import TabPanel from './components/TabPanel';
import ImageList from './components/ImageList';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faChevronCircleLeft, faPen, faTrashAlt, faLightbulb, faEdit } from '@fortawesome/free-solid-svg-icons'
import Contact from './components/Contact';
import {Button} from '@material-ui/core';

library.add(fab, faChevronCircleLeft, faTrashAlt, faPen, faLightbulb, faEdit )

function App() {
  return (
    <div className="App">
      <h1>Wild Again</h1>
      <h3 id="subtitle">Your Sustainable Guide to Living</h3>
      <Router>
        <CreateProduct path = "/api/products/new" />
        <AllProducts default path = "/api/products" />
        <ProductDetails path="/api/products/:id" />
        <EditProduct path = "/api/products/:id/edit" />
      </Router>
      <TabPanel />
      <ImageList />
    </div>
  );
}

export default App;

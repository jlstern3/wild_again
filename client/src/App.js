import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
import {Router} from '@reach/router';
import CreateProduct from './components/CreateProduct';

function App() {
  return (
    <div className="App">
      <h1>Wild Again</h1>
      <h3>A Sustainable Guide to Living</h3>
      <Router>
        <CreateProduct path = "/api/products/new" />
      </Router>
    </div>
  );
}

export default App;

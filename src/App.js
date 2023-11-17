import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Importing Routes

import Navbar from './components/Navbar';
import Header from './components/Header';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import FAQ from './components/FAQ';
import Home from './components/Home';
import Catalog from './components/Catalog';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        
        <Footer />
      
    </Router>
    </div>
  );
}

export default App;

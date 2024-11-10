import React from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Shop } from './pages/Shop';
import { Cart } from './pages/Cart';
import { ShopContextProvider } from './components/shop-context';
import { ProductProvider } from './components/ProductContext';

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <ShopContextProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Router>
        </ShopContextProvider>
      </ProductProvider>
    </div>
  );
}

export default App;
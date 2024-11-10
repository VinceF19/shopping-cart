import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../components/shop-context';
import { ProductContext } from '../components/ProductContext'; // Add this line

import './navbar.css';
import { ShoppingCart } from 'phosphor-react';

const Navbar = () => {
  const { cartItems } = useContext(ShopContext);
  const { products } = useContext(ProductContext);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const getTotalItems = () => {
    return Object.values(cartItems).reduce((total, count) => total + count, 0);
  };

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <nav className="navbar">
      <Link to="/">Shop</Link>
      <div
        className="cart-icon"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link to="/cart">
          <ShoppingCart size={32} />({getTotalItems()})
        </Link>
        {isDropdownVisible && (
          <div className="cart-dropdown">
            {Object.keys(cartItems).map((itemId) => {
              const numericItemId = Number(itemId);
              if (cartItems[numericItemId] > 0) {
                const item = products.find((product) => product.id === numericItemId);
                return (
                  <div className="cart-item" key={numericItemId}>
                    <img src={item.images[0]} alt={item.title} className="cart-item-image" />
                    <div className="cart-item-details">
                      <h3>{item.title}</h3>
                      <p>Price: ${item.price}</p>
                      <p>Quantity: {cartItems[numericItemId]}</p>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

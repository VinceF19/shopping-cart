import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../components/shop-context';
import { ProductContext } from '../components/ProductContext';
import './cart.css';

export const Cart = () => {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount, setCartItems } = useContext(ShopContext);
  const { products } = useContext(ProductContext);
  const navigate = useNavigate();

  const totalAmount = getTotalCartAmount();

  const handleCancel = () => {
    navigate(-1); // Go back to the last page
  };

  const handlePay = () => {
    alert('Payment successful!');
    setCartItems({}); // Reset cart items
    navigate('/'); // Redirect to the main page
  };

  return (
    <div className='cart'>
      <h1>Your Cart</h1>
      <div className='cart-items'>
        {Object.keys(cartItems).map((itemId) => {
          const numericItemId = Number(itemId);
          if (cartItems[numericItemId] > 0) {
            const item = products.find((product) => product.id === numericItemId);
            return (
              <div className='cart-item' key={numericItemId}>
                <img src={item.images[0]} alt={item.title} className='cart-item-image' />
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {cartItems[numericItemId]}</p>
                <button onClick={() => addToCart(numericItemId)}>+</button>
                <button onClick={() => removeFromCart(numericItemId)}>-</button>
                <input
                  type='number'
                  value={cartItems[numericItemId]}
                  onChange={(e) => updateCartItemCount(Number(e.target.value), numericItemId)}
                />
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className='total'>
        <h2>Total Amount: ${totalAmount}</h2>
      </div>
      <div className='cart-actions'>
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handlePay}>Pay</button>
      </div>
    </div>
  );
};
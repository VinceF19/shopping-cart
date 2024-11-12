import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../components/shop-context';
import { ProductContext } from '../components/ProductContext';
import SearchBar from '../components/searchbar';
import './shop.css';

export const Shop = () => {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(ShopContext);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [query, setQuery] = useState('');

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [products, query]);

  const handleAddToCart = (product) => {
    addToCart(product.id);
    console.log(`Added to cart: ${product.title}`);
  };

  return (
    <div className='shop'>
      <div className='shop-title'>
        <h1>Shop Now!</h1>
      </div>
      <div className='searchbox'>
        <SearchBar query={query} setQuery={setQuery} />
      </div>
      <div className='products-container'>
        {filteredProducts.map((product) => (
          <div className='product-card' key={product.id}>
            <img src={product.images[0]} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

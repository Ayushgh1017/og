import React, { useState } from 'react';

interface Product {
  title: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const [price, setPrice] = useState<string>('');

  const products: Product[] = [
    { title: 'Product1' },
    { title: 'Product2' },
    { title: 'Product3' },
  ];

  const handleProductChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProduct(event.target.value);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };

  const handleAddToCart = () => {
    if (selectedProduct && price) {
      const newItem: Product = { title: selectedProduct };
      setCartItems([...cartItems, newItem]);
      setSelectedProduct('');
      setPrice('');
    }
  };

  return (
    <div>
      <h1>Cart</h1>
      <div>
        <label htmlFor="productSelect">Select Product:</label>
        <select id="productSelect" value={selectedProduct} onChange={handleProductChange}>
          <option value="">-- Select a product --</option>
          {products.map((product, index) => (
            <option key={index} value={product.title}>
              {product.title}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="priceInput">Price:</label>
        <input type="text" id="priceInput" value={price} onChange={handlePriceChange} />
      </div>
      <button onClick={handleAddToCart}>Add</button>
      <h2>Cart Items</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;

import React, { useState } from 'react';
const Shirt = ({ title, price, image, stock, handleBuy }) => {
  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (event) => {
    setQuantity(Number(event.target.value));
  };

  return (
    <div className="Shirt">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>${price.toFixed(2)}</p>
      <p className={stock === 0 ? 'out-of-stock' : ''}>
  {stock > 0 ? `In Stock: ${stock}` : 'Out of Stock'}
</p>

      {stock > 0 && (
        <div className="buy-section">
          <label htmlFor={`quantity-${title}`} className="quantity-label">Quantity:</label>
          <select
            id={`quantity-${title}`}
            className="quantity-select"
            value={quantity}
            onChange={updateQuantity}
          >
          
            {[...Array(stock).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>
          <button onClick={() => handleBuy (quantity)} disabled={stock === 0}>
            Buy
          </button>
        </div>
      )}
    </div>
  );
};

export default Shirt;

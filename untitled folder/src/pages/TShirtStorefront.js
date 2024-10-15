import React, { useState } from 'react';
import Tshirt from '../components/Shirt';
import TShirts from '../Data/t-shirts'; 

const TShirtStorefront = () => {
  const [Stock, setStock] = useState(TShirts);
  const buyItem = (id, quantity) => {
    setStock((prevStock) =>
      prevStock.map((tshirt) =>
        tshirt.id === id ? { ...tshirt, stock: tshirt.stock - quantity } : tshirt
      )
    );
  };

  return (
    <div className="TShirtStorefront">
      {Stock.map((tshirt) => (
        <Tshirt
          key={tshirt.id}
          title={tshirt.title}
          price={tshirt.price}
          image={tshirt.image}
          stock={tshirt.stock}
          handleBuy={(quantity) => buyItem(tshirt.id, quantity)}
        />
      ))}
    </div>
  );
};

export default TShirtStorefront;

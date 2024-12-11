/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import './ProductItem.css';
import { useAuth } from '../AuthContext';

const ProductItem = ({ product }:any) => {
  const [isReserved, setIsReserved] = useState(product.reserved);
  const { user } = useAuth();

  const reserveProduct = async () => {
    if (!isReserved) {
      setIsReserved(true);
      // await fetch(`http://localhost:4000/products/${product.id}`, {
      await fetch(`https://faltshower.onrender.com/products/${product.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...product,reserved: true, whoSelect: user.username }),
      });
    }
  };

  return (
    <div className="product-card">
      <div className="image-wrapper">
        <img src={product.urlImg} alt={product.name} className="product-image" />
      </div>
      <h2>{product.name}</h2>
      <button onClick={reserveProduct} disabled={isReserved}>
        {isReserved ? 'Reservado' : 'Apartar'}
      </button>
    </div>
  );
};

export default ProductItem;

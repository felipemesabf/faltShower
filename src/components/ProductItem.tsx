/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

const ProductItem = ({ product }:any) => {
  const [isReserved, setIsReserved] = useState(product.reserved);

  const reserveProduct = async () => {
    if (!isReserved) {
      setIsReserved(true);
      await fetch(`https://faltshower.onrender.com/products/products/${product.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...product,reserved: true }),
      });
    }
  };

  return (
    <div>
      <span>{product.name}</span>
      <button onClick={reserveProduct} disabled={isReserved}>
        {isReserved ? 'Reservado' : 'Apartar'}
      </button>
    </div>
  );
};

export default ProductItem;

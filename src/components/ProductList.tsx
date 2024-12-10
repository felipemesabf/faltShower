import { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import { Products } from '../common/shareInterfaces';
import { useAuth } from '../AuthContext';

const ProductList = () => {
    const {logout} = useAuth()
  const [products, setProducts] = useState<Array<Products>>([]);

  useEffect(() => {
    // Simula una API para obtener productos
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:4000/products',{
      });
      console.log("response",response.body);
      
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Listado de Productos</h1>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
      <button onClick={()=>logout()}>Logout</button>
    </div>
  );
};

export default ProductList;

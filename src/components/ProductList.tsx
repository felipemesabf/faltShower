import { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import { Products } from '../common/shareInterfaces';
import { useAuth } from '../AuthContext';
import './ProductList.css';


const ProductList = () => {
  const {logout} = useAuth()
  const [products, setProducts] = useState<Array<Products>>([]);

  useEffect(() => {
    // Simula una API para obtener productos
    const fetchProducts = async () => {
      const response = await fetch('https://faltshower.onrender.com/products',{
      // const response = await fetch('http://localhost:4000/products',{
      });
      
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
    <button onClick={()=>logout()}>Logout</button>
    <h1>Listado de Productos</h1>
    <div className="message-container">
        <p>
        "Si entre los productos que ves a continuación no encuentras algo que consideres imprescindible, ¡no te preocupes! Confiamos en tu criterio y sabemos que sabes lo que se necesita en un hogar. Adelante, estaremos encantados de recibir lo que desees brindarnos."
        </p>
      </div>
    
    <div className="product-list-container">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  </div>
  );
};

export default ProductList;

import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import axios from 'axios';

export default function ProductsView() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {});
  }, []);
  return (
    <div className="px-5 grow grid grid-cols-2  lg:grid-cols-3 gap-4">
      {products.map((el) => (
        <ProductCard key={el.id} product={el} />
      ))}
    </div>
  );
}

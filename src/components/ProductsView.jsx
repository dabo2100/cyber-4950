import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import axios from 'axios';

export default function ProductsView() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let domain = 'http://82.112.241.233:2500';
    let endPoint = '/api/products?populate=*';
    let url = domain + endPoint;
    axios
      .get(url)
      .then((res) => {
        setProducts(res.data.data);
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

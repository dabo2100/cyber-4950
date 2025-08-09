import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import axios from 'axios';
import { activeCategory, domain } from '../store';

export default function ProductsView() {
  const { value } = activeCategory();
  const [products, setProducts] = useState([]);

  const [view, setView] = useState([]);

  useEffect(() => {
    let endPoint = '/api/products?populate=*';
    let url = domain + endPoint;
    axios
      .get(url)
      .then((res) => {
        setProducts(res.data.data);
        setView(res.data.data);
      })
      .catch((err) => {});
  }, []);

  useEffect(() => {
    if (value) {
      let endPoint = `/api/categories/${value.documentId}`;
      let url = domain + endPoint;
      axios
        .get(url, {
          params: {
            populate: {
              products: {
                populate: '*',
              },
            },
          },
        })
        .then((res) => {
          setView(res.data.data.products);
        })
        .catch((err) => {});
    } else {
      setView(products);
    }
  }, [value]);

  return <div className="px-5 grow grid grid-cols-2  lg:grid-cols-3 gap-4">{view.length > 0 ? view.map((el) => <ProductCard key={el.id} product={el} />) : <h1>There are no products into this cat</h1>}</div>;
}

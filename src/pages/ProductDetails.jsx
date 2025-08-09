import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { domain } from '../store';

export default function ProductDetails() {
  const [product, setProduct] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let endPoint = '/api/products/' + params.productId + '?populate=*';
    let url = domain + endPoint;
    axios
      .get(url)
      .then((res) => {
        let final = res.data.data;
        let colors = final.allColors;
        let finalColors = colors?.split('\n');
        setProduct(final);

      })
      .catch((err) => {
        navigate('/404');
      });
  }, []);

  return (
    <div className="w-full h-full p-4">
      <table className="table w-full">
        <tbody>
          <tr>
            <th>Product Image</th>
            <td>
              <img src={domain + product?.img?.url} alt="" />
            </td>
          </tr>
          <tr>
            <th>Product Name</th>
            <td>{product.name}</td>
          </tr>
          <tr>
            <th>Product Price</th>
            <td>{product.price} $</td>
          </tr>
          <tr>
            <th>Avilable Colors Price</th>
            <td>Red , Green , Blue</td>
          </tr>
          <tr>
            <th>Additional Data</th>
            <td>
              <ul>
                <li>Battery : 4000ma</li>
                <li>charger : 30 W</li>
                <li></li>
                <li></li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

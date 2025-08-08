import toast from 'react-hot-toast';
import { userCart } from '../store';

export default function ProductCard({ product }) {
  let domain = 'http://82.112.241.233:2500';
  console.log(product);
  const { addToCart } = userCart();
  return (
    <div className="bg-[#F6F6F6] px-4 py-6 flex flex-col gap-3">
      <img className="w-full h-[160px] object-cover" src={domain + product.img.url} />
      <h1>{product.name}</h1>
      <p>{product.price} $</p>
      <button
        onClick={() => {
          addToCart({ ...product, qty: 1 });
          toast.success('Added To Cart!');
        }}
        className="btn btn-neutral w-full"
      >
        Add To Cart
      </button>
    </div>
  );
}

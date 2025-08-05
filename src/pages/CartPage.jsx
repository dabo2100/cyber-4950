import { userCart } from '../store';

export default function CartPage() {
  const { value: cartProducts } = userCart();
  return (
    <div className="flex flex-wrap w-full">
      {cartProducts.map((el) => (
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img src={el.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

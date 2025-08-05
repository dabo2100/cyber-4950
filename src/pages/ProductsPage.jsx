import CategoryFilter from '../components/CategoryFilter';
import ProductsView from '../components/ProductsView';

export default function ProductsPage() {
  return (
    <div className="w-full flex justify-center bg-white py-[40px]">
      <div className="container flex items-start">
        <CategoryFilter />
        <ProductsView />
      </div>
    </div>
  );
}

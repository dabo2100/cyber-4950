import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './MainLayout';
import ProductsPage from './pages/ProductsPage';
import { Toaster } from 'react-hot-toast';
import CartPage from './pages/CartPage';

export default function App() {
  return (
    <div className="w-full bg-white text-black flex">
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<ProductsPage />} />
            <Route path="product-details" element={<h1>Product Details</h1>}></Route>
            <Route path="cart" element={<CartPage />}></Route>
          </Route>

          <Route path="login" element={<h1>Login Page</h1>}></Route>
          <Route path="register" element={<h1>Register Page</h1>}></Route>

          <Route path="*" element={<h1>404 Page</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

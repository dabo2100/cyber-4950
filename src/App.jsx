import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './MainLayout';
import ProductsPage from './pages/ProductsPage';
import { Toaster } from 'react-hot-toast';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

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

          <Route path="login" element={<LoginPage />}></Route>
          <Route path="register" element={<RegisterPage />}></Route>

          <Route path="*" element={<h1>404 Page</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

export default function MainLayout() {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

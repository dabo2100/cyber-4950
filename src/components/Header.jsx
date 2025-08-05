import { Link } from 'react-router-dom';
import abanob from '../assets/Logo.svg';
import { CiHeart } from 'react-icons/ci';
import { GrCart } from 'react-icons/gr';
import { CiUser } from 'react-icons/ci';
import { IoMenuOutline } from 'react-icons/io5';
import { userCart } from '../store';
export default function Header() {
  const { value: userProducts } = userCart();
  return (
    <header className="w-full bg-white p-4 flex justify-center border-b border-b-[#B5B5B5]">
      <div className="container flex justify-between items-center">
        <img src={abanob} alt="cyber Logo" />
        <input className="input bg-[#F5F5F5] hidden md:block" type="text" placeholder="Search" />
        <nav className="hidden md:flex gap-[52px] items-center">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
        </nav>
        <div className="hidden md:flex  gap-6 items-center">
          <CiHeart className="text-[32px]" />
          <Link className='flex relative' to={"/cart"}>
            <GrCart className="text-[32px]" />
            {userProducts.length > 0 && <span className="bg-black absolute top-[-20px] text-[10px] rounded-full text-white p-3">{userProducts.length}</span>}
          </Link>

          <CiUser className="text-[32px]" />
        </div>
        <IoMenuOutline className="block md:hidden" />
      </div>
    </header>
  );
}

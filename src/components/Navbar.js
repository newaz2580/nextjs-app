'use client';
import Link from 'next/link';
import LoginButton from './LoginButton';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <div className="navbar bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-30 px-4 md:px-20">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile dropdown */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 dark:bg-gray-800 rounded-box w-52"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/add-product">Add Product</Link>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link href="/" className="btn btn-ghost text-xl ml-2">
          GadgetZoom
        </Link>
      </div>

      {/* Navbar Center for large screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-black dark:text-white">
          <li>
            <Link href="/" className=''>Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/add-product">Add Product</Link>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex gap-2">
        
        <LoginButton />
      </div>
    </div>
  );
}

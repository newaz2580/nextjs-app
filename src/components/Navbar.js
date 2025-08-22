"use client";

import Link from "next/link";
import LoginButton from "./LoginButton";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-30">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl">
          MyShop
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <ThemeToggle />
        <LoginButton />
      </div>
    </div>
  );
}

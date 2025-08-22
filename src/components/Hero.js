"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-[70vh] flex items-center"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/sv9kLnjn/6870665-29227.jpg')",
      }}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-center md:items-start justify-center text-center md:text-left text-white space-y-6">
        
        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Welcome to <span className="text-yellow-400">GadgetZoom</span>
        </h1>

        {/* Hero Description */}
        <p className="text-lg sm:text-xl md:text-2xl max-w-2xl drop-shadow-sm text-gray-200">
          Explore the latest gadgets and tech products. Manage your store and
          discover amazing items easily. Log in to add your products!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link
            href="/products"
            className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition transform hover:-translate-y-1 hover:scale-105 duration-300"
          >
            View Products
          </Link>
          <Link
            href="/login"
            className="px-8 py-3 border border-white rounded-lg font-semibold hover:bg-white hover:text-black transition transform hover:-translate-y-1 hover:scale-105 duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
}

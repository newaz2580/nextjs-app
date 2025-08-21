"use client"

import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between">
        
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Welcome to <span className="text-yellow-300">My Shop</span>
          </h1>
          <p className="text-lg md:text-xl">
            Discover amazing products and manage your store easily. Login to add new products!
          </p>

          {/* Call-to-Action Buttons */}
          <div className="space-x-4">
            <Link href="/products" className="px-6 py-3 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300 transition">
              View Products
            </Link>
            <Link href="/login" className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition">
              Login
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="md:w-1/2 mt-8 md:mt-0">
        
         {/* <Image src="https://i.ibb.co.com/B513hRpQ/Home-Repair.jpg" width={500} height={400} alt="Banner" /> */}
        </div>
      </div>
    </section>
  )
}

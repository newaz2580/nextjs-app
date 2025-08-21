import Image from "next/image"
import React from "react"

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", { cache: "no-store" })
  if (!res.ok) throw new Error("Failed to fetch products")
  return res.json()
}

const SingleProduct = async ({ params }) => {
  const { id } = params
  const products = await getProducts()
  const product = products.find(p => p.id === id)

  if (!product) {
    return (
      <div className="container mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold text-red-500">Product not found</h2>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-6 py-10">
      
      {product.image && (
                    <div className="w-full h-48 relative mb-4">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover rounded"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}
      {/* Product Name */}

      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

      {/* Price */}
      <p className="text-xl font-semibold mb-4">${product.price}</p>

      {/* Description */}
      <p className="text-gray-700 mb-4">{product.description}</p>

      {/* Additional Info */}
      <ul className="mb-4 list-disc list-inside text-gray-600">
        <li><strong>Brand:</strong> {product.brand}</li>
        <li><strong>Category:</strong> {product.category}</li>
        <li><strong>Stock:</strong> {product.stock}</li>
      </ul>

      {/* Features */}
      {product.features && (
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Features:</h3>
          <ul className="list-disc list-inside text-gray-600">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Back Link */}
      <a href="/products" className="text-blue-500 underline">Back to Products</a>
    </div>
  )
}

export default SingleProduct

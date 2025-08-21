import Link from "next/link"
import Image from "next/image"

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", { cache: "no-store" })
  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }
  return res.json()
}

export default async function Page() {
  const products = await getProducts()

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            {/* Product Image */}
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

            {/* Product Info */}
            <h2 className="text-xl font-semibold">{product.name}</h2>
            
            <p className="font-bold mt-2">${product.price}</p>

            {/* Details Link */}
            <Link
              href={`/products/${product.id}`}
              className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400 transition"
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

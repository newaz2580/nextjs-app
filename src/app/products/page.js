import Link from "next/link";
import Image from "next/image";

async function getProducts() {
  const url = `https://nextjs-app-six-eosin.vercel.app/`
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="container mx-auto px-6 py-12 md:px-20">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-gray-800 dark:text-white drop-shadow">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product._id} className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2">
            {product.image && product.image.startsWith("http") && (
              <div className="relative w-full h-48">
                <Image src={product.image.trim()} alt={product.name} fill className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"/>
              </div>
            )}

            <div className="p-4 flex flex-col justify-between h-48">
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white">{product.name}</h2>
                <p className="text-blue-500 font-bold mt-2 text-lg">Price: ${product.price}</p>
              </div>

              <Link href={`/products/${product._id}`} className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition font-medium text-center">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

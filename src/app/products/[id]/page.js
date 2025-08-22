import clientPromise from "@/lib/mongodb";
import Image from "next/image";
import Link from "next/link";
import { ObjectId } from "mongodb";

const SingleProduct = async ({ params }) => {
  const { id } = params;

  // Connect to MongoDB
  const client = await clientPromise;
  const db = client.db("productDB"); // Your database name
  const collection = db.collection("products");

  // Find product by _id
  let product;
  try {
    product = await collection.findOne({ _id: new ObjectId(id) });
  } catch (error) {
    return (
      <div className="container mx-auto px-6 py-10 text-center">
        <h2 className="text-2xl font-bold text-red-500">Invalid Product ID</h2>
        <Link href="/products" className="text-blue-500 underline mt-4 inline-block">
          Back to Products
        </Link>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-6 py-10 text-center">
        <h2 className="text-2xl font-bold text-red-500">Product not found</h2>
        <Link href="/products" className="text-blue-500 underline mt-4 inline-block">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12 md:px-20">
      {/* Product Wrapper */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
        
        {/* Product Image */}
        {product.image && product.image.startsWith("http") && (
          <div className="relative w-full lg:w-1/2 h-80 md:h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={product.image.trim()}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}

        {/* Product Details */}
        <div className="lg:w-1/2 flex flex-col justify-start">
          <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-4">
            {product.name}
          </h1>
          <p className="text-2xl text-blue-600 font-bold mb-4">${product.price}</p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">{product.description}</p>

          {/* Additional Info */}
          <div className="mb-6 space-y-2">
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Stock:</strong> {product.stock}</p>
          </div>

          {/* Features */}
          {product.features && product.features.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Features:</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/products"
              className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              Back to Products
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

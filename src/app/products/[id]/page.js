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
      <div className="container mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold text-red-500">Invalid Product ID</h2>
        <Link href="/products" className="text-blue-500 underline mt-4 inline-block">
          Back to Products
        </Link>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold text-red-500">Product not found</h2>
        <Link href="/products" className="text-blue-500 underline mt-4 inline-block">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-10">
      {/* Product Image */}
      {product.image && product.image.startsWith("http") && (
        <div className="w-full h-80 relative mb-6">
          <Image
            src={product.image.trim()}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}

      {/* Product Info */}
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-xl font-semibold mb-4">${product.price}</p>
      <p className="text-gray-700 mb-4">{product.description}</p>

      {/* Additional Info */}
      <ul className="mb-4 list-disc list-inside text-gray-600">
        <li><strong>Brand:</strong> {product.brand}</li>
        <li><strong>Category:</strong> {product.category}</li>
        <li><strong>Stock:</strong> {product.stock}</li>
      </ul>

      {/* Features */}
      {product.features && product.features.length > 0 && (
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Features:</h3>
          <ul className="list-disc list-inside text-gray-600">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Back Link */}
      <Link href="/products" className="text-blue-500 underline">
        Back to Products
      </Link>
    </div>
  );
};

export default SingleProduct;

import React, { useState, useEffect } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from your database
    // This is a placeholder function, replace it with your actual data fetching logic
    const fetchProducts = async () => {
      // Example: fetch('your-api-endpoint')
      // Then set the products in state
      setProducts([
        {
          id: 1,
          name: "Product 1",
          description: "Some description about the product.",
          price: 99.99,
          image: "https://generated.vusercontent.net/placeholder.svg",
        },
        // Add more products as needed
      ]);
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
      {products.map((product) => (
        <div key={product.id} className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={product.image}
            height="300"
            width="300"
            alt="Product Image"
            style={{ aspectRatio: "200 / 200", objectFit: "cover" }}
          />
          <div className="p-4">
            <h2 className="font-semibold text-lg">{product.name}</h2>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-red-500 font-bold">${product.price}</p>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-4">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;

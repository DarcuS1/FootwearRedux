import React, { useState, useEffect } from "react";

const Product = ({ criteria }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const requestBody = {
          pageIndex: 0,
          criteria: criteria,
        };

        const response = await fetch("/api/v1/shoes/fetch", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch shoe products");
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching shoe products:", error);
      }
    };

    fetchProducts();
  }, [criteria]);

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

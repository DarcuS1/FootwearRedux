import React, { useState, useEffect } from "react";
import { useCart } from "../CartContext/CartCOntext";
import { toast } from "react-toastify";

const Product = ({ criteria }) => {
  const [products, setProducts] = useState([]);
  const jwtToken = localStorage.getItem('jwtToken')

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const requestBody = {
          pageIndex: 0,
          criteria: criteria,
        };
        console.log(requestBody);

        const response = await fetch("http://localhost:8080/api/v1/shoes/fetch", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
          redirect: 'follow'
        });

        if (!response.ok) {
          throw new Error("Failed to fetch shoe products");
        }

        const data = (await response.json()).filter((v, _) => { return v.coverImageUuid !== "" });
        setProducts(data);
      } catch (error) {
        console.error("Error fetching shoe products:", error);
      }
    };

    fetchProducts();
  }, [criteria]);

  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${jwtToken}`);

    var raw = JSON.stringify({
      "shoeUUID": product.productUUID
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:8080/api/v1/cart/addshoe", requestOptions)
      .then(response => {
        if (!response.ok) {
          console.log(`Add shoe to cart response not ok ${response}`)
          throw new Exception(`Add shoe to cart response not ok`);
        }
      })
      .then(responseText => {
        toast.success("Product added to cart", { autoClose: 2000 });
      })
      .catch(err => {
        toast.error("Failed to add product to cart", { position: "top-center" })
      })

  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
      {products.map((product) => (
        <div key={product.id} className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={`http://localhost:8080/api/v1/shoe_images/fetch/${product.coverImageUuid}`}
            height="300"
            width="300"
            alt="Product Image"
            style={{ aspectRatio: "200 / 200", objectFit: "cover" }}
          />
          <div className="p-4">
            <h2 className="font-semibold text-lg">{product.name}</h2>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-red-500 font-bold">${product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-4"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;

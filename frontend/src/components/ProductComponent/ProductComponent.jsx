import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"; // Import useParams to get the product ID
import { useCart } from "../CartContext/CartCOntext";
import { toast } from "react-toastify";

// Define the Button component
const Button = ({ children, ...props }) => {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white rounded-md" {...props}>
      {children}
    </button>
  );
};

// Radio button component
const RadioButton = ({ id, name, value, children, ...props }) => {
  return (
    <label className="border cursor-pointer rounded-md p-2 flex items-center gap-2">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        className="form-radio"
        {...props}
      />
      {children}
    </label>
  );
};

export default function ProductComponent() {
  const { productId } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null); // Initialize product as null
  const { addToCart } = useCart();
  const navigate = useNavigate()
  const jwtToken = localStorage.getItem('jwtToken')

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        console.log('Getting product: ' + productId)
        const response = await fetch(`http://localhost:8080/api/v1/shoes/get_product/${productId}`, {
          method: "GET",
          headers: myHeaders,
          redirect: "follow"
        });

        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }

        var product = await response.json()
        console.log(product)
        setProduct(product);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {

    if (!jwtToken) {
      toast.error('Cannot add to cart without logging in', {
        position: 'top-center'
      })
      return
    }

    if (product) {

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
          navigate('/shop')
        })
        .catch(err => {
          toast.error("Failed to add product to cart", { position: "top-center" })
        })


      addToCart(product);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
      {product ? (
        <>
          {/* Image section */}
          <div className="grid md:grid-cols-3 gap-3 items-start">
            {/* Main image */}
            <div className="md:col-span-3">
              <img
                alt={product.shoeName}
                className="aspect-[1/1] object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                src={`http://localhost:8080/api/v1/shoe_images/fetch/${product.coverImageUuid}`}
              />
            </div>
            {/* Additional images */}
            {product.additionalImages && product.additionalImages.map((image, index) => (
              <div className="md:col-span-1" key={index}>
                <img
                  alt={`${product.shoeName} - Additional ${index + 1}`}
                  className="aspect-[1/1] object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800 my-2"
                  src={`http://localhost:8080/api/v1/shoe_images/fetch/${image}`}
                />
              </div>
            ))}
          </div>

          {/* Details and form section */}
          <div className="grid gap-4 md:gap-10 items-start">
            <div>
              <h1 className="font-bold text-3xl lg:text-4xl">{product.shoeName}</h1>
              <h2>{product.description}</h2>
              <div className="text-4xl font-bold">${product.price}</div>
            </div>
            <form className="grid gap-4">
              <div>
                <label htmlFor="size" className="text-base">
                  Size
                </label>
                <div className="flex items-center gap-2">
                  {/* Dynamic size buttons - assuming product.shoeSize is an array */}
                  {product.shoeSize}
                </div>
              </div>
              {
                jwtToken ? (<Button onClick={handleAddToCart}>Add to cart</Button>) :
                  (<div></div>)
              }

            </form>
            <div>
              <h1 className="font-bold text-3xl lg:text-4xl">
                Product Features
              </h1>
              <ul className="list-disc list-inside">
                <li>Category: {product.shoeCategory}</li>
                <li>Brand: {product.brand}</li>
                <li>Color: {product.color}</li>
                <li>Style: {product.shoeStyle}</li>
                <li>Gender: {product.gender}</li>
                {/* Additional product features can be added here */}
              </ul>
            </div>
          </div>
        </>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
}

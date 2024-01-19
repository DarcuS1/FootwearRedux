// import React from "react";

// // Define the Button component
// const Button = ({ children, ...props }) => {
//   return (
//     <button className="px-4 py-2 bg-blue-500 text-white rounded-md" {...props}>
//       {children}
//     </button>
//   );
// };

// // Radio button component
// const RadioButton = ({ id, name, value, children, ...props }) => {
//   return (
//     <label className="border cursor-pointer rounded-md p-2 flex items-center gap-2">
//       <input
//         type="radio"
//         id={id}
//         name={name}
//         value={value}
//         className="form-radio"
//         {...props}
//       />
//       {children}
//     </label>
//   );
// };

// export default function ProductComponent() {
//   return (
//     <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
//       {/* Image section */}
//       <div className="grid md:grid-cols-3 gap-3 items-start">
//         {/* Main image */}
//         <div className="md:col-span-3">
//           <img
//             alt="Pre-owned Eco-friendly Shoe"
//             className="aspect-[1/1] object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
//             src="https://generated.vusercontent.net/placeholder.svg"
//           />
//         </div>
//         {/* Additional images */}
//         <div className="md:col-span-1">
//           <img
//             alt="Pre-owned Eco-friendly Shoe"
//             className="aspect-[1/1] object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
//             src="https://generated.vusercontent.net/placeholder.svg"
//           />
//         </div>
//         <div className="md:col-span-1">
//           <img
//             alt="Pre-owned Eco-friendly Shoe"
//             className="aspect-[1/1] object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
//             src="https://generated.vusercontent.net/placeholder.svg"
//           />
//         </div>
//         <div className="md:col-span-1">
//           <img
//             alt="Pre-owned Eco-friendly Shoe"
//             className="aspect-[1/1] object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
//             src="https://generated.vusercontent.net/placeholder.svg"
//           />
//         </div>
//       </div>

//       {/* Details and form section */}
//       <div className="grid gap-4 md:gap-10 items-start">
//         <div>
//           <h1 className="font-bold text-3xl lg:text-4xl">
//             Pre-Owned Eco-Friendly Running Shoes
//           </h1>
//           <p>100% recycled materials, zero waste production, gently used.</p>
//           <div className="text-4xl font-bold">$59</div>
//         </div>
//         <form className="grid gap-4">
//           <div>
//             <label htmlFor="size" className="text-base">
//               Size
//             </label>
//             <div className="flex items-center gap-2">
//               <RadioButton id="size-s" name="size" value="s">
//                 S
//               </RadioButton>
//               <RadioButton id="size-m" name="size" value="m">
//                 M
//               </RadioButton>
//               <RadioButton id="size-l" name="size" value="l">
//                 L
//               </RadioButton>
//               <RadioButton id="size-xl" name="size" value="xl">
//                 XL
//               </RadioButton>
//             </div>
//           </div>
//           <Button>Add to cart</Button>
//         </form>
//         <div>
//           <h1 className="font-bold text-3xl lg:text-4xl">
//             Eco-Friendly Features
//           </h1>
//           <ul className="list-disc list-inside">
//             <li>100% recycled materials</li>
//             <li>Zero waste production</li>
//             <li>Carbon neutral shipping</li>
//             <li>10% of profits donated to environmental charities</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams to get the product ID
import { useCart } from "../CartContext/CartCOntext";

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
  const { productId } = useParams();
  console.log(productId); // Get the product ID from the URL
  const [product, setProduct] = useState(null); // Initialize product as null
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log("LOADING");
        const response = await fetch(
          `http://localhost:8080/api/v1/shoes/fetchSingleProduct/${productId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            body: null,
            redirect: "follow",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }

        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      // Show a pop-up notification here (you can use a library like react-toastify)
      // Example: toast.success("Product added to cart", { autoClose: 2000 });
      toast.success("Product added to cart", { autoClose: 2000 });
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
                alt={product.name}
                className="aspect-[1/1] object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                src={product.mainImage}
              />
            </div>
            {/* Additional images */}
            <div className="md:col-span-1">
              {product.additionalImages.map((image, index) => (
                <img
                  key={index}
                  alt={product.name}
                  className="aspect-[1/1] object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                  src={image}
                />
              ))}
            </div>
          </div>

          {/* Details and form section */}
          <div className="grid gap-4 md:gap-10 items-start">
            <div>
              <h1 className="font-bold text-3xl lg:text-4xl">{product.name}</h1>
              <p>{product.description}</p>
              <div className="text-4xl font-bold">${product.price}</div>
            </div>
            <form className="grid gap-4">
              <div>
                <label htmlFor="size" className="text-base">
                  Size
                </label>
                <div className="flex items-center gap-2">
                  {product.sizes.map((size) => (
                    <RadioButton
                      key={size}
                      id={`size-${size}`}
                      name="size"
                      value={size}
                    >
                      {size}
                    </RadioButton>
                  ))}
                </div>
              </div>
              <Button onClick={handleAddToCart}>Add to cart</Button>
            </form>
            <div>
              <h1 className="font-bold text-3xl lg:text-4xl">
                Eco-Friendly Features
              </h1>
              <ul className="list-disc list-inside">
                {product.ecoFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
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

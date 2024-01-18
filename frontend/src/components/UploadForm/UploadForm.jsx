// import React, { useState } from "react";

// const UploadForm = () => {
//   const [productImage, setProductImage] = useState(
//     "https://th.bing.com/th/id/OIP.-he5w7aO-lMN5XIHANMGaAHaFO?w=235&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
//   );

//   const handleImageChange = (e) => {
//     // Assuming only the first file is of interest
//     const file = e.target.files[0];
//     const imageUrl = URL.createObjectURL(file);
//     setProductImage(imageUrl);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add form submission logic here
//     console.log("Form submitted");
//   };

//   return (
//     <div className="container max-w-lg px-4 py-5 mx-auto mt-px md:max-w-none md:text-center">
//       <div className="container px-4 md:px-6">
//         <h2 className="text-3xl font-bold text-center mb-6">
//           Upload Your Product
//         </h2>
//         <div className="grid lg:grid-cols-3 gap-8 items-start">
//           <div className="flex justify-center lg:order-last">
//             <img
//               src={productImage}
//               width="450"
//               height="450"
//               alt="Uploaded Product"
//               className="rounded-xl"
//               style={{ aspectRatio: "450 / 450", objectFit: "cover" }}
//             />
//           </div>
//           <div className="space-y-6 lg:col-span-2">
//             <form onSubmit={handleSubmit}>
//               <label
//                 className="block text-lg font-medium mb-2"
//                 htmlFor="product-name"
//               >
//                 Product Name
//               </label>
//               <input
//                 id="product-name"
//                 className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 type="text"
//               />
//               {/* ... other form fields ... */}
//               <label
//                 className="block text-lg font-medium mt-4 mb-2"
//                 htmlFor="product-image"
//               >
//                 Product Image (This image will be displayed on the right)
//               </label>
//               <input
//                 id="product-image"
//                 className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 type="file"
//                 onChange={handleImageChange}
//               />
//               {/* ... seller information fields ... */}
//               <button
//                 type="submit"
//                 className="w-full md:w-auto bg-blue-500 rounded border-black border-5 text-white mt-6"
//               >
//                 Upload
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UploadForm;

import React, { useState } from "react";

const UploadForm = () => {
  const [productImage, setProductImage] = useState(
    "https://th.bing.com/th/id/OIP.-he5w7aO-lMN5XIHANMGaAHaFO?w=235&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  );
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [sellerContact, setSellerContact] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setProductImage(imageUrl);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      productName,
      productDescription,
      productPrice,
      sellerName,
      sellerContact,
      productImage,
    };
    console.log("Form Data:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="container max-w-lg px-4 py-5 mx-auto mt-px md:max-w-none md:text-center">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          Upload Your Product
        </h2>
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="flex justify-center lg:order-last">
            <img
              src={productImage}
              width="450"
              height="450"
              alt="Uploaded Product Image"
              className="rounded-xl"
              style={{ aspectRatio: "450 / 450", objectFit: "cover" }}
            />
          </div>
          <div className="space-y-6 lg:col-span-2">
            <form onSubmit={handleSubmit} className="">
              <label
                className="block text-lg font-medium mb-2"
                htmlFor="product-name"
              >
                Product Name
              </label>
              <input
                id="product-name"
                className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />

              <label
                className="block text-lg font-medium mt-4 mb-2"
                htmlFor="product-description"
              >
                Product Description
              </label>
              <textarea
                id="product-description"
                rows="4"
                className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
              ></textarea>

              <label
                className="block text-lg font-medium mt-4 mb-2"
                htmlFor="product-price"
              >
                Product Price
              </label>
              <input
                id="product-price"
                className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="number"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
              />

              <label
                className="block text-lg font-medium mt-4 mb-2"
                htmlFor="product-image"
              >
                Product Image (This image will be displayed on the right)
              </label>
              <input
                id="product-image"
                className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="file"
                onChange={handleImageChange}
              />

              <div className="space-y-6 mt-6">
                <div className="text-lg font-bold mb-4">Seller Information</div>
                <label
                  className="block text-lg font-medium mb-2"
                  htmlFor="seller-name"
                >
                  Seller Name
                </label>
                <input
                  id="seller-name"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  value={sellerName}
                  onChange={(e) => setSellerName(e.target.value)}
                />

                <label
                  className="block text-lg font-medium mt-4 mb-2"
                  htmlFor="seller-contact"
                >
                  Seller Contact
                </label>
                <input
                  id="seller-contact"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  value={sellerContact}
                  onChange={(e) => setSellerContact(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto bg-blue-500 rounded border-black border-5 text-white mt-6"
              >
                Upload
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadForm;

import React, { useState } from "react";

const UploadForm = () => {
  const [productImage, setProductImage] = useState(null);
  const [additionalImage1, setAdditionalImage1] = useState(null);
  const [additionalImage2, setAdditionalImage2] = useState(null);
  const [additionalImage3, setAdditionalImage3] = useState(null);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [sellerContact, setSellerContact] = useState("");

  const jwtToken = localStorage.getItem('jwtToken')

  const handleImageChange = (e, setImage) => {
    const file = e.target.files[0];
    setImage(file);
  };

  async function uploadShoeProduct(data) {
    try {

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${jwtToken}`);

      var raw = JSON.stringify({
        "shoeName": "nike smecheri",
        "category": "adsas",
        "price": "123",
        "brand": "dasdasd",
        "color": "green",
        "shoeSize": "12",
        "shoeStyle": "nice",
        "gender": "FEMALE",
        "description": "Some big butty description"
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      const response = await fetch("http://localhost:8080/api/v1/shoes/add", requestOptions)

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }


      const result = await response.json();
      return result.shoeUUID;
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  }

  async function uploadCoverImage(shoeUuid, file) {
    console.log(`uploadCoverImage: file: ${file}`);

    try {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${jwtToken}`);

      var formdata = new FormData();
      formdata.append("file", file);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

      const response = await fetch(`http://localhost:8080/api/v1/shoe_images/set_cover/${shoeUuid}`, requestOptions);
      const responseText = await response.text();  // Or response.json() based on your API response
      console.log(`SetCover response: ${responseText}`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      console.log('Cover image uploaded successfully');
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  }

  async function uploadAdditionalImage(shoeUuid, file) {
    console.log(`uploadAdditionalImage: file: ${file}`);

    try {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${jwtToken}`);

      var formdata = new FormData();
      formdata.append("file", file);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

      const response = await fetch(`http://localhost:8080/api/v1/shoe_images/add_image/${shoeUuid}`, requestOptions);
      const responseText = await response.text();  // Or response.json() based on your API response
      console.log(`SetAdditional response: ${responseText}`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      console.log('Additional images image uploaded successfully');
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  }



  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      productName,
      productDescription,
      productPrice,
      sellerName,
      sellerContact,
      productImage,
      additionalImage1,
      additionalImage2,
      additionalImage3
    };
    console.log("Form Data:", formData);

    // Example usage
    const shoeData = {
      shoeName: "nike smecheri",
      categor: "adsas",
      price: "123",
      brand: "dasdasd",
      color: "green",
      shoeSize: "12",
      shoeStyle: "nice",
      gender: "FEMALE",
      description: "some description"
    }

    console.log(shoeData)
    console.log(`Auth token: ${jwtToken}`)

    uploadShoeProduct(shoeData).then(shoeUuid => {
      if (shoeUuid) {
        // Upload the cover image
        // Assuming 'coverImageFile' is the file you want to upload
        uploadCoverImage(shoeUuid, productImage);

        // Upload additional images
        // Assuming 'additionalImageFiles' is an array of files
        uploadAdditionalImage(shoeUuid, additionalImage1);
        uploadAdditionalImage(shoeUuid, additionalImage2);
        uploadAdditionalImage(shoeUuid, additionalImage3);
      }
    });


  };

  return (
    <div className="container max-w-lg px-4 py-5 mx-auto mt-px md:max-w-none md:text-center">
      <h2 className="text-3xl font-bold text-center mb-6">Upload Your Product</h2>
      <div className="grid lg:grid-cols-3 gap-8 items-start">
        <div className="flex flex-col space-y-4 justify-center items-center lg:order-last">
          <img
            src={productImage}
            width="200"
            height="200"
            alt="Uploaded Product Image"
            className="rounded-xl"
            style={{ aspectRatio: "1 / 1", objectFit: "cover" }}
          />
          <img
            src={additionalImage1 || 'https://via.placeholder.com/200'}
            width="200"
            height="200"
            alt="Additional Image 1"
            className="rounded-xl"
            style={{ aspectRatio: "1 / 1", objectFit: "cover" }}
          />
          <img
            src={additionalImage2 || 'https://via.placeholder.com/200'}
            width="200"
            height="200"
            alt="Additional Image 2"
            className="rounded-xl"
            style={{ aspectRatio: "1 / 1", objectFit: "cover" }}
          />
          <img
            src={additionalImage3 || 'https://via.placeholder.com/200'}
            width="200"
            height="200"
            alt="Additional Image 3"
            className="rounded-xl"
            style={{ aspectRatio: "1 / 1", objectFit: "cover" }}
          />
        </div>
        <div className="space-y-6 lg:col-span-2">
          <form onSubmit={handleSubmit}>
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
              onChange={(e) => handleImageChange(e, setProductImage)}
            />
            <input
              type="file"
              onChange={(e) => handleImageChange(e, setAdditionalImage1)}
            />
            <input
              type="file"
              onChange={(e) => handleImageChange(e, setAdditionalImage2)}
            />
            <input
              type="file"
              onChange={(e) => handleImageChange(e, setAdditionalImage3)}
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
  );
};

export default UploadForm;

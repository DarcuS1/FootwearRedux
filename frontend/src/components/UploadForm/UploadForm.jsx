import React, { useState } from "react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Define the Select component
const Select = ({ placeholder, options, value, onChange }) => {
  return (
    <select
      className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      value={value}
      onChange={onChange}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

const UploadForm = () => {
  // State hooks for all input fields
  const [shoeName, setShoeName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [shoeSize, setShoeSize] = useState("");
  const [shoeStyle, setShoeStyle] = useState("");
  const [description, setDescription] = useState("");
  const [gender, setGender] = useState("");

  // State hooks for images
  const [coverImage, setCoverImage] = useState(null);
  const [secondImage, setSecondImage] = useState(null);
  const [thirdImage, setThirdImage] = useState(null);
  const [fourthImage, setFourthImage] = useState(null);

  const navigator = useNavigate();

  // Option arrays for Select components
  const categories = [
    { value: "sneakers", label: "Sneakers" },
    { value: "boots", label: "Boots" },
    { value: "sandals", label: "Sandals" },
    { value: "dress", label: "Dress Shoes" },
    // Add more categories as needed
  ];

  const brands = [
    { value: "nike", label: "Nike" },
    { value: "adidas", label: "Adidas" },
    { value: "puma", label: "Puma" },
    { value: "reebok", label: "Reebok" },
    // Add more brands as needed
  ];

  const colors = [
    { value: "black", label: "Black" },
    { value: "white", label: "White" },
    { value: "red", label: "Red" },
    { value: "blue", label: "Blue" },
    // Add more colors as needed
  ];

  const shoeSizes = [
    { value: "35", label: "EU 35" },
    { value: "40", label: "EU 40" },
    { value: "43", label: "EU 43" },
    { value: "45", label: "EU 45" },
    // Add more shoe sizes as needed
  ];

  const shoeStyles = [
    { value: "casual", label: "Casual" },
    { value: "athletic", label: "Athletic" },
    { value: "formal", label: "Formal" },
    // Add more shoe styles as needed
  ];

  const genders = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "kid", label: "Kid" },
    // Add more genders as needed
  ];

  async function uploadShoeProduct(data) {
    try {

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${jwtToken}`);

      var raw = JSON.stringify(data);

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

    navigator('/home')
  }

  const jwtToken = localStorage.getItem('jwtToken')

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

  // Image change handler
  const handleImageChange = (e, setImage) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);

    // Create an image element
    const img = new Image();

    img.onload = () => {
      // Create a canvas
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      // Set canvas dimensions
      canvas.width = 300;
      canvas.height = 300;

      // Draw the image onto the canvas
      ctx.drawImage(img, 0, 0, 300, 300);

      // Convert the canvas to a data URL
      canvas.toBlob(blob => {
        const resizedFile = new File([blob], file.name, {
          type: 'image/jpeg',
          lastModified: Date.now()
        });

        const resizedImageUrl = URL.createObjectURL(resizedFile);

        // Set the resized image
        setImage({ url: resizedImageUrl, file: resizedFile });
      }, 'image/jpeg');
    };

    // Set the source of the image to the original file's URL
    img.src = imageUrl;
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const shoeData = {
      shoeName,
      category,
      price,
      brand,
      color,
      shoeSize,
      shoeStyle,
      description,
      gender: gender.toUpperCase()
    };
    console.log("Form Data:", shoeData);

    if (shoeName == "" ||
      category == "" ||
      price == "" ||
      brand == "" ||
      color == "" ||
      shoeSize == "" ||
      shoeStyle == "" ||
      description == "" ||
      gender == "" ||
      coverImage == null ||
      secondImage == null ||
      thirdImage == null ||
      fourthImage == null) {
      toast.error("Please fill out all form fields", {
        position: "top-center"
      });
      return;
    }

    uploadShoeProduct(shoeData).then(shoeUuid => {
      if (shoeUuid) {
        // Upload the cover image
        // Assuming 'coverImageFile' is the file you want to upload
        uploadCoverImage(shoeUuid, coverImage.file);

        // Upload additional images
        // Assuming 'additionalImageFiles' is an array of files
        uploadAdditionalImage(shoeUuid, secondImage.file);
        uploadAdditionalImage(shoeUuid, thirdImage.file);
        uploadAdditionalImage(shoeUuid, fourthImage.file);
      }
    });

  };

  return (
    <div className="container max-w-screen-lg mx-auto py-5 px-4 md:py-10 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="w-full md:w-1/2 space-y-4">
        <h2 className="text-3xl font-bold text-center mb-6">
          Upload Shoe Product
        </h2>
        <input
          type="text"
          placeholder="Shoe Name"
          value={shoeName}
          onChange={(e) => setShoeName(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        <Select
          placeholder="Select a category"
          options={categories}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => {
            if (e.target.value <= 0) {
              e.stopPropagation()
              return
            }
            setPrice(e.target.value)
          }}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        <Select
          placeholder="Select a brand"
          options={brands}
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        <Select
          placeholder="Select a color"
          options={colors}
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <Select
          placeholder="Select a shoe size"
          options={shoeSizes}
          value={shoeSize}
          onChange={(e) => setShoeSize(e.target.value)}
        />
        <Select
          placeholder="Select a shoe style"
          options={shoeStyles}
          value={shoeStyle}
          onChange={(e) => setShoeStyle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        <Select
          placeholder="Select gender"
          options={genders}
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <div className="flex space-x-2">
          <input
            type="file"
            onChange={(e) => handleImageChange(e, setCoverImage)}
          />
          <input
            type="file"
            onChange={(e) => handleImageChange(e, setSecondImage)}
          />
          <input
            type="file"
            onChange={(e) => handleImageChange(e, setThirdImage)}
          />
          <input
            type="file"
            onChange={(e) => handleImageChange(e, setFourthImage)}
          />
        </div>
        <button
          type="submit"
          className="block w-full px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Upload
        </button>
      </form>
      {/* Image preview cards */}
      <div className="w-full md:w-1/2 md:ml-8 space-y-4">
        {coverImage && (
          <div className="max-w-xs rounded-md overflow-hidden">
            <img src={coverImage.url} alt="Cover" className="w-full" />
            <p className="text-center">Cover Image</p>
          </div>
        )}
        {secondImage && (
          <div className="max-w-xs rounded-md overflow-hidden">
            <img src={secondImage.url} alt="Second" className="w-full" />
            <p className="text-center">Second Image</p>
          </div>
        )}
        {thirdImage && (
          <div className="max-w-xs rounded-md overflow-hidden">
            <img src={thirdImage.url} alt="Third" className="w-full" />
            <p className="text-center">Third Image</p>
          </div>
        )}
        {fourthImage && (
          <div className="max-w-xs rounded-md overflow-hidden">
            <img src={fourthImage.url} alt="Fourth" className="w-full" />
            <p className="text-center">Fourth Image</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadForm;

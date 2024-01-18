import React, { useState } from "react";

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
    { value: "us_6", label: "US 6" },
    { value: "us_7", label: "US 7" },
    { value: "us_8", label: "US 8" },
    { value: "us_9", label: "US 9" },
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
    { value: "unisex", label: "Unisex" },
    // Add more genders as needed
  ];

  // Image change handler
  const handleImageChange = (e, setImage) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      shoeName,
      category,
      price,
      brand,
      color,
      shoeSize,
      shoeStyle,
      description,
      gender,
      coverImage,
      secondImage,
      thirdImage,
      fourthImage,
    };
    console.log("Form Data:", formData);
    // Typically, you'd send formData to your server here
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
          onChange={(e) => setPrice(e.target.value)}
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
            <img src={coverImage} alt="Cover" className="w-full" />
            <p className="text-center">Cover Image</p>
          </div>
        )}
        {secondImage && (
          <div className="max-w-xs rounded-md overflow-hidden">
            <img src={secondImage} alt="Second" className="w-full" />
            <p className="text-center">Second Image</p>
          </div>
        )}
        {thirdImage && (
          <div className="max-w-xs rounded-md overflow-hidden">
            <img src={thirdImage} alt="Third" className="w-full" />
            <p className="text-center">Third Image</p>
          </div>
        )}
        {fourthImage && (
          <div className="max-w-xs rounded-md overflow-hidden">
            <img src={fourthImage} alt="Fourth" className="w-full" />
            <p className="text-center">Fourth Image</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadForm;

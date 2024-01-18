import React, { useState } from "react";

// Define Select component
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

// Define Button component
const Button = ({ children, variant, ...props }) => {
  const buttonClasses =
    variant === "default" ? "px-4 py-2 bg-blue-500 text-white rounded-md" : ""; // Add more variants as needed
  return (
    <button className={`mt-2 ${buttonClasses}`} {...props}>
      {children}
    </button>
  );
};

export default function Filter() {
  // State for each select
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [shoeSize, setShoeSize] = useState("");
  const [shoeStyle, setShoeStyle] = useState("");
  const [gender, setGender] = useState("");

  // Select options
  const categories = [
    { value: "", label: "Select a category" },
    { value: "category1", label: "Category 1" },
    { value: "category2", label: "Category 2" },
    { value: "category3", label: "Category 3" },
    // ... Define options for other selects similarly ...
  ];

  const priceRanges = [
    { value: "", label: "Select a price range" },
    { value: "price1", label: "Under $50" },
    { value: "price2", label: "$50 - $100" },
    { value: "price3", label: "Above $100" },
    // ... more price ranges ...
  ];

  const brands = [
    { value: "", label: "Select a brand" },
    { value: "brand1", label: "Brand 1" },
    { value: "brand2", label: "Brand 2" },
    { value: "brand3", label: "Brand 3" },
    // ... more brands ...
  ];

  const colors = [
    { value: "", label: "Select a color" },
    { value: "color1", label: "Color 1" },
    { value: "color2", label: "Color 2" },
    { value: "color3", label: "Color 3" },
    // ... more colors ...
  ];

  const shoeSizes = [
    { value: "", label: "Select a size" },
    { value: "size1", label: "Size 1" },
    { value: "size2", label: "Size 2" },
    { value: "size3", label: "Size 3" },
    // ... more shoe sizes ...
  ];

  const shoeStyles = [
    { value: "", label: "Select a style" },
    { value: "style1", label: "Style 1" },
    { value: "style2", label: "Style 2" },
    { value: "style3", label: "Style 3" },
    // ... more shoe styles ...
  ];

  const genders = [
    { value: "", label: "Select gender" },
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "kids", label: "Kids" },
    // ... more genders ...
  ];

  return (
    <section className="container px-4 md:px-6 grid md:grid-cols-[240px_1fr] gap-4 items-start">
      <div className="flex flex-col gap-2 items-start py-2 bg-white shadow-sm rounded-lg p-6 border border-gray-600">
        <h2 className="text-xl font-bold mb-4">Filter</h2>
        <Select
          placeholder="Select a category"
          options={categories}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <Select
          placeholder="Select a price range"
          options={priceRanges}
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
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
          placeholder="Select a size"
          options={shoeSizes}
          value={shoeSize}
          onChange={(e) => setShoeSize(e.target.value)}
        />
        <Select
          placeholder="Select a style"
          options={shoeStyles}
          value={shoeStyle}
          onChange={(e) => setShoeStyle(e.target.value)}
        />
        <Select
          placeholder="Select gender"
          options={genders}
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <Button variant="default">Apply Filters</Button>
      </div>
    </section>
  );
}

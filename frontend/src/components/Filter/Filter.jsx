import React, { useState } from "react";

// Define Select component
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

export default function Filter({ onFilterChange }) {
  // State for each select
  const [criteria, setCriteria] = useState({
    category: "",
    priceMin: "",
    priceMax: "",
    brand: "",
    color: "",
    shoeSize: "",
    shoeStyle: "",
    gender: "",
  });

  // const [category, setCategory] = useState("");
  // const [priceRange, setPriceRange] = useState("");
  // const [brand, setBrand] = useState("");
  // const [color, setColor] = useState("");
  // const [shoeSize, setShoeSize] = useState("");
  // const [shoeStyle, setShoeStyle] = useState("");
  // const [gender, setGender] = useState("");

  // Select options
  const categories = [
    { value: "sneakers", label: "Sneakers" },
    { value: "boots", label: "Boots" },
    { value: "sandals", label: "Sandals" },
    { value: "dress", label: "Dress Shoes" },
  ];

  const priceRanges = [
    { value: "under_50", label: "Under $50" },
    { value: "50_to_100", label: "$50 - $100" },
    { value: "above_100", label: "Above $100" },
  ];

  const brands = [
    { value: "nike", label: "Nike" },
    { value: "adidas", label: "Adidas" },
    { value: "puma", label: "Puma" },
    { value: "reebok", label: "Reebok" },
  ];

  const colors = [
    { value: "black", label: "Black" },
    { value: "white", label: "White" },
    { value: "red", label: "Red" },
    { value: "blue", label: "Blue" },
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
  ];

  const genders = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "kid", label: "Kid" },
    // Add more genders as needed
  ];

  const handleCategoryChange = (selectedCategory) => {
    setCriteria((prevCriteria) => ({
      ...prevCriteria,
      category: selectedCategory,
    }));
  };

  const mapPriceRange = (selectedPriceRange) => {
    let priceMin, priceMax;

    switch (selectedPriceRange) {
      case "under_50":
        priceMin = 0;
        priceMax = 50;
        break;
      case "50_to_100":
        priceMin = 50;
        priceMax = 100;
        break;
      case "above_100":
        priceMin = 100;
        priceMax = Infinity; // or a large number to represent 'above $100'
        break;
      default:
        // Handle unexpected values
        throw new Error("Invalid price range");
    }

    return { priceMin, priceMax };
  }

  const handlePriceRangeChange = (selectedPriceRange) => {
    const { priceMin, priceMax } = mapPriceRange(selectedPriceRange);
    setCriteria((prevCriteria) => (
      {
        ...prevCriteria,
        priceMin: priceMin,
        priceMax: priceMax
      }));
  };

  const handleBrandChange = (selectedBrand) => {
    setCriteria((prevCriteria) => ({
      ...prevCriteria,
      brand: selectedBrand,
    }));
  };

  const handleColorChange = (selectedColor) => {
    setCriteria((prevCriteria) => ({
      ...prevCriteria,
      color: selectedColor,
    }));
  };

  const handleShoeSizeChange = (selectedShoeSize) => {
    setCriteria((prevCriteria) => ({
      ...prevCriteria,
      shoeSize: selectedShoeSize,
    }));
  };

  const handleShoeStyleChange = (selectedShoeStyle) => {
    setCriteria((prevCriteria) => ({
      ...prevCriteria,
      shoeStyle: selectedShoeStyle,
    }));
  };

  const handleGenderChange = (selectedGender) => {
    setCriteria((prevCriteria) => ({
      ...prevCriteria,
      gender: selectedGender,
    }));
  };

  const handleApplyFilters = () => {
    onFilterChange(criteria);
    console.log(criteria);
  };

  return (
    <section className="container px-4 md:px-6 grid md:grid-cols-[240px_1fr] gap-4 items-start">
      <div className="flex flex-col gap-2 items-start py-2 bg-white shadow-sm rounded-lg p-6 border border-gray-600">
        <h2 className="text-xl font-bold mb-4">Filter</h2>
        <Select
          placeholder="Select a category"
          options={categories}
          value={criteria.category}
          onChange={(e) => handleCategoryChange(e.target.value)}
        />
        <Select
          placeholder="Select a price range"
          options={priceRanges}
          value={criteria.priceRange}
          onChange={(e) => handlePriceRangeChange(e.target.value)}
        />
        <Select
          placeholder="Select a brand"
          options={brands}
          value={criteria.brand}
          onChange={(e) => handleBrandChange(e.target.value)}
        />
        <Select
          placeholder="Select a color"
          options={colors}
          value={criteria.color}
          onChange={(e) => handleColorChange(e.target.value)}
        />
        <Select
          placeholder="Select a size"
          options={shoeSizes}
          value={criteria.shoeSize}
          onChange={(e) => handleShoeSizeChange(e.target.value)}
        />
        <Select
          placeholder="Select a style"
          options={shoeStyles}
          value={criteria.shoeStyle}
          onChange={(e) => handleShoeStyleChange(e.target.value)}
        />
        <Select
          placeholder="Select gender"
          options={genders}
          value={criteria.gender}
          onChange={(e) => handleGenderChange(e.target.value)}
        />
        <Button variant="default" onClick={handleApplyFilters}>
          Apply Filters
        </Button>
      </div>
    </section>
  );
}

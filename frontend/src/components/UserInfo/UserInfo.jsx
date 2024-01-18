import React from "react";
import UserDetails from "../UserDetails/userDetails";

function ProductCard({ name, price }) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <img
        alt={name}
        className="object-cover w-full h-48 rounded"
        height={200}
        src="https://generated.vusercontent.net/placeholder.svg"
        style={{
          aspectRatio: "200/200",
          objectFit: "cover",
        }}
        width={200}
      />
      <h3 className="mt-4 text-xl font-semibold">{name}</h3>
      <p className="mt-2 text-gray-700">{price}</p>
      <div className="mt-4 flex items-center gap-2">
        {/* <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
          Edit
        </button> */}
        <button className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600">
          Delete
        </button>
        {/* <button className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600">
          Manage
        </button> */}
      </div>
    </div>
  );
}

export default function UserInfo() {
  return (
    <div className="w-full min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">My Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard name="Product 1" price="$99.99" />
          <ProductCard name="Product 2" price="$79.99" />
          <ProductCard name="Product 3" price="$89.99" />
        </div>
        <div className="pt-3"></div>
        <h1 className="text-3xl font-bold mb-6">My Info</h1>
        <UserDetails />
      </div>
    </div>
  );
}

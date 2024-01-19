import React, { useState, useEffect } from "react";
import UserDetails from "../UserDetails/UserDetails";

function UserProductCard({ imageUuid, name, price }) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <img
        src={`http://localhost:8080/api/v1/shoe_images/fetch/${imageUuid}`}
        alt={name}
        className="object-cover w-full h-48 rounded"
        height={200}
        style={{
          aspectRatio: "200/200",
          objectFit: "cover",
        }}
        width={200}
      />
      <h3 className="mt-4 text-xl font-semibold">{name}</h3>
      <p className="mt-2 text-gray-700">{price}</p>
      <div className="mt-4 flex items-center gap-2">
        {/* Add buttons for Edit, Delete, or Manage here */}
      </div>
    </div>
  );
}

export default function UserInfo() {
  const [products, setProducts] = useState([]);
  const jwtToken = localStorage.getItem('jwtToken')

  // Fetch user products from your API
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${jwtToken}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      body: null,
      redirect: 'follow'
    };

    fetch("http://localhost:8080/api/v1/user/current", requestOptions)
      .then(response => {
        if (!response.ok) {
          console.log(`Getting current user response not ok ${response}`)
          throw new Exception(`Getting current user response not ok`);
        }
        return response.json()
      })
      .then((data) => {
        console.log(data)
        return data
      })
      .then((data) => setProducts(data.sellingProducts || []));

  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">My Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <UserProductCard
              key={product.productUUID}
              name={product.shoeName}
              price={product.price}
              imageUuid={product.coverImageUuid}
            />
          ))}
        </div>
        <div className="pt-3"></div>
        <h1 className="text-3xl font-bold mb-6">My Info</h1>
        <UserDetails />
      </div>
    </div>
  );
}

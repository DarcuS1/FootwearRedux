import React, { useState, useEffect } from "react";

export default function UserDetails() {
  const [user, setUser] = useState({});

  // Fetch user details from your API
  useEffect(() => {
    // Replace 'user-api-endpoint' with your actual user API endpoint
    fetch("user-api-endpoint")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div className="bg-white shadow rounded-lg p-6 mt-6">
      <div className="flex items-center">
        <img
          alt="User Avatar"
          className="w-12 h-12 rounded-full mr-4"
          src={
            user.avatar || "https://generated.vusercontent.net/placeholder.svg"
          }
        />
        <div>
          <h2 className="text-xl font-semibold">{user.name || "John Doe"}</h2>
          <p className="text-gray-500">{user.phone || "(123) 456-7890"}</p>
          <p className="text-gray-500">{user.email || "johndoe@example.com"}</p>
        </div>
      </div>
      <div className="mt-4">
        {/* Add a button to edit profile here if needed */}
      </div>
    </div>
  );
}

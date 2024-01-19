import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function UserDetails() {
  const [user, setUser] = useState({});
  const jwtToken = localStorage.getItem('jwtToken')

  // Fetch user details from your API
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
          console.log(`Failed to get current user ${response}`)
          throw new Exception(`Failed to get current user`);
        }
        return response.json()
      })
      .then(user => {
        toast.success("Successfully got user details", { position: "top-center", autoClose: 2000 });
        setUser(user)
        console.log(user)
      })
      .catch(err => {
        toast.error("Failed to get current user", { position: "top-center" })
      })

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
          <h2 className="text-xl font-semibold">{user.firstName + " " + user.lastName || "John Doe"}</h2>
          <p className="text-gray-500">{user.email || "johndoe@example.com"}</p>
        </div>
      </div>
      <div className="mt-4">
        {/* Add a button to edit profile here if needed */}
      </div>
    </div>
  );
}

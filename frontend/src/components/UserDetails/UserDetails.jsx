import React from "react";

function UserDetails() {
  return (
    <div className="bg-white shadow rounded-lg p-6 mt-6">
      <div className="flex items-center">
        <img
          alt="User Avatar"
          className="w-12 h-12 rounded-full mr-4"
          src="https://generated.vusercontent.net/placeholder.svg"
        />
        <div>
          <h2 className="text-xl font-semibold">John Doe</h2>
          <p className="text-gray-500">(123) 456-7890</p>
          <p className="text-gray-500">johndoe@example.com</p>{" "}
          {/* Added email */}
        </div>
      </div>
      <div className="mt-4">
        {/* <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Edit Profile
        </button> */}
      </div>
    </div>
  );
}

export default UserDetails;

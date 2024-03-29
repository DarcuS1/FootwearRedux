import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic goes here
    console.log({ firstName, lastName, email, password });

    const url = "http://localhost:8080/api/v1/auth/register";
    const data = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    };


    fetch(url, {
      method: "POST", // HTTP method
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
      body: JSON.stringify(data), // Convert data to JSON format
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parse the response JSON
      })
      .then((responseData) => {
        // Handle the response data here
        console.log("Register response Data:", responseData);
        if (responseData.error !== null) {
          throw new Error(`Register error: ${responseData.error}`)
        } else {
          navigate('/sign-in')
        }

      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch
        console.error("Fetch Error:", error);
      });
  };

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row">
          <div className="relative w-full bg-cover lg:w-6/12 xl:w-7/12 bg-gradient-to-r from-white via-white to-gray-100">
            <div
              className="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0 tails-selected-element"
              contenteditable="false"
            >
              <div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                <div className="relative">
                  <p className="mb-2 font-medium text-gray-700 uppercase">
                    Start your eco-fashion career
                  </p>
                  <h2 className="text-5xl font-bold text-gray-900 xl:text-6xl">
                    Features to help you be an eco-chic
                  </h2>
                </div>
                <p className="text-2xl text-gray-700">
                  We've created a simple formula to follow in order to gain more
                  out of your eco-fashion interest.
                </p>
                <a
                  href="/home"
                  className="inline-block px-8 py-5 text-xl font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease"
                  data-primary="blue-600"
                  data-rounded="rounded-lg"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>

          <div className="w-full bg-white lg:w-6/12 xl:w-5/12">
            <div className="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
              <h4 className="w-full text-3xl font-bold">Signup</h4>
              <p className="text-lg text-gray-500">
                or, if you have an account you can{" "}
                <a href="/sign-in" className="text-blue-600 underline">
                  sign in
                </a>
              </p>
              <form
                onSubmit={handleSubmit}
                className="relative w-full mt-10 space-y-8"
              >
                <div className="relative">
                  <label className="font-medium text-gray-900">First Name</label>
                  <input
                    type="text"
                    className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                    placeholder="Enter Your First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <label className="font-medium text-gray-900">Last Name</label>
                  <input
                    type="text"
                    className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                    placeholder="Enter Your Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <label className="font-medium text-gray-900">Email</label>
                  <input
                    type="text"
                    className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                    placeholder="Enter Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <label className="font-medium text-gray-900">Password</label>
                  <input
                    type="password"
                    className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <button
                    type="submit"
                    className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700"
                  >
                    Create Account
                  </button>
                  {/* <a
                    href="#_"
                    class="inline-block w-full px-5 py-4 mt-3 text-lg font-bold text-center text-gray-900 transition duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ease tails-selected-element"
                    data-rounded="rounded-lg"
                  >
                    Sign up with Google
                  </a> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpComponent;

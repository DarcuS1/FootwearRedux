import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignInComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });

    const url = 'http://localhost:8080/api/v1/auth/authenticate';
    const data = {
      email: email,
      password: password
    }

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
        console.log("Authentication response data:", responseData);
        if (responseData.error !== null) {
          throw new Error(`Authentication error: ${responseData.error}`)
        } else {
          localStorage.setItem("jwtToken", responseData.token)
          navigate('/home')
        }

      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch
        console.error("Fetch Error:", error);
      });

  };

  return (
    <section className="w-full px-8 py-16 bg-gray-100 xl:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center md:flex-row">
          <div className="w-full space-y-5 md:w-3/5 md:pr-16">
            <p className="font-medium text-blue-500 uppercase">
              Building eco-fashion together
            </p>
            <h2 className="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl">
              Changing The Way People Do Fashion.
            </h2>
            <p className="text-xl text-gray-600 md:pr-16">
              Engage with our visitors and explore together the new and
              revolutionizing eco-fashion era
            </p>
          </div>

          <div className="w-full mt-16 md:mt-0 md:w-2/5">
            <div className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
              <h3 className="mb-6 text-2xl font-medium text-center">
                Sign in to your Account
              </h3>
              <form onSubmit={handleLogin}>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="block">
                  <button
                    type="submit"
                    className="w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg"
                  >
                    Log Me In
                  </button>
                </div>
              </form>
              <p className="w-full mt-4 text-sm text-center text-gray-500">
                Don't have an account?{" "}
                <a href="/sign-up" className="text-blue-500 underline">
                  Sign up here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInComponent;

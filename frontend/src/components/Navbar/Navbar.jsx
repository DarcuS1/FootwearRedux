import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [showSearch, setShowSearch] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false); // Modify this based on your authentication logic
  const [username, setUsername] = useState("User");

  const handleNavLinkClick = (page) => {
    setCurrentPage(page);
    setShowSearch(false);
    setShowMenu(false);
  };

  const isCurrentPage = (page) => {
    return currentPage === page ? "text-indigo-600" : "text-gray-700";
  };

  return (
    <nav className="relative z-50 h-24 select-none">
      <div className="container relative flex flex-wrap items-center justify-between h-24 mx-auto overflow-hidden font-medium border-b border-gray-200 md:overflow-visible lg:justify-center sm:px-4 md:px-2 lg:px-0">
        <div className="flex items-center justify-start w-1/4 h-full pr-4">
          <Link
            to="/"
            className="inline-block py-4 md:py-0"
            onClick={() => handleNavLinkClick("home")}
          >
            <span className="p-1 text-xl font-black leading-none text-gray-900">
              FootwearRedux.
            </span>
          </Link>
        </div>
        <div
          className={`top-0 left-0 w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:items-center md:w-3/4 md:absolute lg:text-base md:bg-transparent md:p-0 md:relative md:flex ${
            showMenu ? "flex fixed" : "hidden"
          }`}
        >
          <div className="flex-col w-full h-auto overflow-hidden bg-white rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row">
            {/* Navigation Links */}
            <Link
              to="/home"
              className={`inline-block w-full py-2 mx-0 ml-6 font-medium text-left md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center ${isCurrentPage(
                "home"
              )}`}
              onClick={() => handleNavLinkClick("home")}
            >
              Home
            </Link>
            {/* Other links */}
            <Link
              to="/shop"
              className={`inline-block w-full py-2 mx-0 ml-6 font-medium text-left md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center ${isCurrentPage(
                "shop"
              )}`}
              onClick={() => handleNavLinkClick("shop")}
            >
              Shop
            </Link>
            <Link
              to="/sell"
              className={`inline-block w-full py-2 mx-0 ml-6 font-medium text-left md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center ${isCurrentPage(
                "sell"
              )}`}
              onClick={() => handleNavLinkClick("sell")}
            >
              Sell
            </Link>
            <Link
              to="/about-us"
              className={`inline-block w-full py-2 mx-0 ml-6 font-medium text-left md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center ${isCurrentPage(
                "about-us"
              )}`}
              onClick={() => handleNavLinkClick("about-us")}
            >
              About-us
            </Link>
            <Link
              to="/contact"
              className={`inline-block w-full py-2 mx-0 ml-6 font-medium text-left md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center ${isCurrentPage(
                "contact"
              )}`}
              onClick={() => handleNavLinkClick("contact")}
            >
              Contact
            </Link>
            {/* More links as per your requirement */}
            <div className="relative py-2 mt-6 ml-6 mr-2 lg:inline-block md:mt-0 md:ml-2 lg:mx-3 md:relative">
              <svg
                onClick={() => setShowSearch(!showSearch)}
                className="inline w-5 h-5 cursor-pointer text-gray-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              {showSearch && (
                <input
                  type="text"
                  placeholder="Search..."
                  className="absolute ml-1  p-2 border rounded-lg focus:outline-none focus:ring top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              )}
            </div>

            <div className="flex flex-col items-start justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0">
              {isLoggedIn ? (
                <div className="ml-6 text-gray-700 md:mr-2 lg:mr-3 md:w-auto">
                  Hi, {username}
                </div>
              ) : (
                <>
                  <Link
                    to="/sign-in"
                    className="w-full px-3 py-2 mr-0 ml-6 text-gray-700 md:mr-2 lg:mr-3 md:w-auto"
                    onClick={() => handleNavLinkClick("sign-in")}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/sign-up"
                    className="inline-flex items-end ml-6 w-full px-6 py-3 text-sm font-medium leading-4 text-white bg-indigo-600 md:px-3 md:w-auto md:rounded-full lg:px-5 hover:bg-indigo-500 focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-indigo-600"
                    onClick={() => handleNavLinkClick("sign-up")}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
            {/* Cart Icon */}
            <Link to="/cart" className="ml-5">
              <svg
                className="w-8 h-8 ml-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 1024 1024"
              >
                {/* SVG path for cart icon */}
                <path
                  d="M845.4 383H758c-16.6 0-30-13.4-30-30s13.4-30 30-30h87.4c16.6 0 30 13.4 30 30s-13.5 30-30 30zM662.3 383H263.1c-16.6 0-30-13.4-30-30s13.4-30 30-30h399.2c16.6 0 30 13.4 30 30s-13.5 30-30 30z"
                  fill="#33CC99"
                />
                <path
                  d="M433.2 873.2m-55 0a55 55 0 1 0 110 0 55 55 0 1 0-110 0Z"
                  fill="#FFB89A"
                />
                <path
                  d="M854.5 873.2m-55 0a55 55 0 1 0 110 0 55 55 0 1 0-110 0Z"
                  fill="#FFB89A"
                />
                <path
                  d="M889.8 722.1h-511c-37.7 0-68.4-30.7-68.4-68.4v-1.4L274.5 270v-0.2-0.2l-6-55.4c-8.6-86.8-57.6-117.5-97.3-128.1L101.5 69c-16.1-4-32.3 5.9-36.3 22s5.9 32.3 22 36.3l68.9 16.9c16.2 4.3 28.1 12.4 36.6 24.7 8.6 12.4 14 29.7 16.1 51.4l6 55.6 35.6 379.3c0.8 70.1 58.1 126.9 128.4 126.9h511c16.6 0 30-13.4 30-30s-13.4-30-30-30z"
                  fill="#45484C"
                />
                <path
                  d="M840.3 197.8H381c-16.6 0-30 13.4-30 30s13.4 30 30 30h459.3c30.2 0 54.9 24.3 55.5 54.3l-19.9 226.5-0.1 1.3v1.3c0 30.6-24.9 55.5-55.5 55.5H436c-16.6 0-30 13.4-30 30s13.4 30 30 30h384.3c63.2 0 114.7-51.1 115.5-114.1L955.7 316l0.1-1.3v-1.3c0-63.8-51.8-115.6-115.5-115.6z"
                  fill="#45484C"
                />
                <path
                  d="M408.5 842.1c7.2 0 13.1 5.9 13.1 13.1s-5.9 13.1-13.1 13.1-13.1-5.9-13.1-13.1 5.9-13.1 13.1-13.1m0-60c-40.4 0-73.1 32.7-73.1 73.1s32.7 73.1 73.1 73.1 73.1-32.7 73.1-73.1-32.7-73.1-73.1-73.1zM823.1 842.1c7.2 0 13.1 5.9 13.1 13.1s-5.9 13.1-13.1 13.1-13.1-5.9-13.1-13.1 5.9-13.1 13.1-13.1m0-60c-40.4 0-73.1 32.7-73.1 73.1s32.7 73.1 73.1 73.1 73.1-32.7 73.1-73.1-32.7-73.1-73.1-73.1z"
                  fill="#45484C"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div
          className="absolute right-0 flex flex-col items-center items-end justify-center w-10 h-10 bg-white rounded-full cursor-pointer md:hidden hover:bg-gray-100"
          onClick={() => setShowMenu(!showMenu)}
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {showMenu ? (
              <path d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

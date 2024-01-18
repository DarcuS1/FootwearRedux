import React from "react";

const MainHero = () => {
  // Dummy data for categories
  const categories = [
    {
      title: "WOMEN",
      imageUrl: "https://cdn.devdojo.com/images/may2021/quench-satisfying.jpg",
      description: "WOMEN Description",
      badgeColor: "purple-500",
      textColor: "purple-100",
      badgeTextColor: "purple-500",
    },
    {
      title: "MEN",
      imageUrl: "https://cdn.devdojo.com/images/may2021/orange.jpg",
      description: "MEN Description",
      badgeColor: "blue-500",
      textColor: "blue-100",
      badgeTextColor: "blue-500",
    },
    {
      title: "KIDS",
      imageUrl: "https://cdn.devdojo.com/images/may2021/gbc.jpg",
      description: "KIDS Description",
      badgeColor: "red-500",
      textColor: "red-100",
      badgeTextColor: "red-500",
    },
    {
      title: "WINTER",
      imageUrl: "https://cdn.devdojo.com/images/may2021/workstation.jpg",
      description: "WINTER Description",
      badgeColor: "blue-500",
      textColor: "blue-100",
      badgeTextColor: "blue-500",
    },
    {
      title: "AUTUMN",
      imageUrl: "https://cdn.devdojo.com/images/may2021/snacks.jpg",
      description: "AUTUMN Description",
      badgeColor: "purple-500",
      textColor: "purple-100",
      badgeTextColor: "purple-500",
    },
    {
      title: "SUMMER",
      imageUrl: "https://cdn.devdojo.com/images/may2021/book-design.jpg",
      description: "SUMMER Description",
      badgeColor: "red-500",
      textColor: "red-100",
      badgeTextColor: "red-500",
    },
  ];

  return (
    <div className="relative w-full px-5 py-10 mx-auto sm:py-12 md:py-16 md:px-10 max-w-7xl">
      <h1 className="mb-1 text-4xl font-extrabold leading-none text-gray-900 lg:text-5xl xl:text-6xl sm:mb-3">
        <a href="#_" className="">
          Our top picks
        </a>
      </h1>
      <p className="text-lg font-medium text-gray-500 sm:text-2xl">
        Picks from each category that might suit your taste
      </p>
      <div className="flex grid h-full grid-cols-12 gap-10 pb-10 mt-8 sm:mt-16">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4"
          >
            <a
              href="#_"
              className="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110"
              style={{ backgroundImage: `url('${category.imageUrl}')` }}
            ></a>
            <div
              className={`relative z-20 w-full h-auto py-8 text-white bg-${category.badgeColor} border-t-0 border-gray-200 px-7`}
            >
              <a
                href="#_"
                className={`inline-block text-xs font-semibold absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-${category.badgeTextColor} bg-white`}
              >
                {category.title}
              </a>
              <h2
                className={`mb-5 text-5xl font-bold text-${category.textColor}`}
              >
                {category.title} Title
              </h2>
              <p
                className={`mb-2 text-lg font-normal text-${category.textColor}`}
              >
                {category.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainHero;

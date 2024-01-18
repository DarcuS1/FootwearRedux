import React, { useState, useEffect } from "react";

const MainHeroApi = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Example API call
    fetch("your-api-endpoint-url")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div className="relative w-full px-5 py-10 mx-auto sm:py-12 md:py-16 md:px-10 max-w-7xl">
      {/* Other content */}
      <div className="flex grid h-full grid-cols-12 gap-10 pb-10 mt-8 sm:mt-16">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4"
          >
            <a
              href="#_"
              className="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110"
              style={{ backgroundImage: `url(${product.imageUrl})` }}
            ></a>
            <div className="relative z-20 w-full h-auto py-8 text-white bg-purple-500 border-t-0 border-yellow-200 px-7">
              <a
                href="#_"
                className="inline-block text-xs font-semibold absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-purple-500 bg-white"
              >
                {product.category}
              </a>
              <h2 className="mb-5 text-5xl font-bold">{product.title}</h2>
              <p className="mb-2 text-lg font-normal text-purple-100 opacity-100">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainHeroApi;

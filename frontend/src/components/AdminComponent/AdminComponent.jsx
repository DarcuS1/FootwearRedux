// import React, { useState, useEffect } from "react";

// export default function AdminComponent() {
//   const [products, setProducts] = useState([]);

//   // Fetch products from your API
//   useEffect(() => {
//     // Replace 'your-api-endpoint' with your actual API endpoint
//     fetch("your-api-endpoint")
//       .then((response) => response.json())
//       .then((data) => setProducts(data));
//   }, []);

//   const handleDelete = (productId) => {
//     // Send a DELETE request to your API to delete the product by productId
//     // You need to implement this logic based on your API structure
//     // After deleting, you can update the products state accordingly
//   };

//   return (
//     <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
//       <div className="hidden border-r bg-gray-100/40 lg:block ">
//         <div className="flex h-full max-h-screen flex-col gap-2">
//           <div className="flex-1 overflow-auto py-2">
//             <nav className="grid items-start px-4 text-sm font-medium">
//               <a
//                 className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 "
//                 href="/admin-orders"
//               >
//                 <ShoppingCartIcon className="h-4 w-4" />
//                 Orders
//               </a>
//               <a
//                 className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 "
//                 href="/admin-products"
//               >
//                 <PackageIcon className="h-4 w-4" />
//                 Products
//               </a>
//             </nav>
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col">
//         <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 ">
//           <a className="lg:hidden" href="#">
//             <Package2Icon className="h-6 w-6" />
//             <span className="sr-only">Home</span>
//           </a>
//           <div className="w-full flex-1">
//             <form>
//               <div className="relative">
//                 <SearchIcon className="absolute left-2.5 top-1 h-4 w-4 text-gray-500 " />
//                 <input
//                   className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 "
//                   placeholder="Search products..."
//                   type="search"
//                 />
//               </div>
//             </form>
//           </div>
//         </header>
//         <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
//           <div className="flex items-center">
//             <h1 className="font-semibold text-lg md:text-2xl">Products</h1>
//             <a href="/sell" className="ml-auto text-sm">
//               <button
//                 className="ml-auto text-sm text-blue-500 hover:text-blue-600"
//                 style={{ outline: "none" }}
//               >
//                 Add product
//               </button>
//             </a>
//           </div>
//           <div className="border shadow-sm rounded-lg">
//             <table className="min-w-full">
//               <thead>
//                 <tr>
//                   <th className="w-[80px]">Image</th>
//                   <th className="max-w-[150px]">Name</th>
//                   <th className="hidden md:table-cell">Status</th>
//                   <th className="hidden md:table-cell">Inventory</th>
//                   <th>Vendor</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {products.map((product) => (
//                   <tr key={product.id}>
//                     <td>
//                       <img
//                         alt="Product image"
//                         className="aspect-square rounded-md object-cover"
//                         height="64"
//                         src={product.imageUrl}
//                         width="64"
//                       />
//                     </td>
//                     <td className="font-medium">{product.name}</td>
//                     <td className="hidden md:table-cell">{product.status}</td>
//                     <td>{`${product.inventory} in stock`}</td>
//                     <td className="hidden md:table-cell">{product.vendor}</td>
//                     <td>
//                       <button
//                         onClick={() => handleDelete(product.id)}
//                         className="text-red-500 hover:text-red-600"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// function Package2Icon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
//       <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
//       <path d="M12 3v6" />
//     </svg>
//   );
// }

// function PackageIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m7.5 4.27 9 5.15" />
//       <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
//       <path d="m3.3 7 8.7 5 8.7-5" />
//       <path d="M12 22V12" />
//     </svg>
//   );
// }

// function SearchIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="11" cy="11" r="8" />
//       <path d="m21 21-4.3-4.3" />
//     </svg>
//   );
// }

// function ShoppingCartIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="8" cy="21" r="1" />
//       <circle cx="19" cy="21" r="1" />
//       <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
//     </svg>
//   );
// }

// function UsersIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
//       <circle cx="9" cy="7" r="4" />
//       <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
//       <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//     </svg>
//   );
// }

import React, { useState, useEffect } from "react";

export default function AdminComponent() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hiddenProductIds, setHiddenProductIds] = useState([]);
  const requestBody = {
    pageIndex: 0,
    criteria: null,
  };

  // Fetch products from your API
  useEffect(() => {
    // Replace 'your-api-endpoint' with your actual API endpoint
    fetch("http://localhost:8080/api/v1/shoes/fetch", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
      redirect: "follow",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  const handleDelete = (productId) => {
    // Send a DELETE request to your API to delete the product by productId
    // You need to implement this logic based on your API structure
    // After deleting, you can update the products state accordingly
    setHiddenProductIds([...hiddenProductIds, productId]);
  };

  const filteredProducts = products.filter(
    (product) => !hiddenProductIds.includes(product.productUUID)
  );

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <a
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
                href="/admin-orders"
              >
                <ShoppingCartIcon className="h-4 w-4" />
                Orders
              </a>
              <a
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900"
                href="/admin-products"
              >
                <PackageIcon className="h-4 w-4" />
                Products
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6">
          <a className="lg:hidden" href="#">
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </a>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-1 h-4 w-4 text-gray-500" />
                <input
                  className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3"
                  placeholder="Search products..."
                  type="search"
                />
              </div>
            </form>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center">
            <h1 className="font-semibold text-lg md:text-2xl">Products</h1>
            <a href="/sell" className="ml-auto text-sm">
              <button
                className="ml-auto text-sm text-blue-500 hover:text-blue-600"
                style={{ outline: "none" }}
              >
                Add product
              </button>
            </a>
          </div>
          <div className="border shadow-sm rounded-lg">
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  <th className="w-[80px] border p-2">Image</th>
                  <th className="max-w-[150px] border p-2">Name</th>
                  <th className="border p-2">Vendor</th>
                  <th className="border p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.productUUID} className="border-b">
                    <td className="border p-2">
                      <img
                        alt="Product image"
                        className="aspect-square rounded-md object-cover"
                        height="64"
                        src={`http://localhost:8080/api/v1/shoe_images/fetch/${product.coverImageUuid}`}
                        width="64"
                      />
                    </td>
                    <td className="font-medium border p-2">
                      {product.shoeName}
                    </td>
                    <td className="border p-2">{product.sellerUUID}</td>
                    <td className="border p-2">
                      <button
                        onClick={() => handleDelete(product.productUUID)}
                        className="text-red-500 hover:text-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

function PackageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

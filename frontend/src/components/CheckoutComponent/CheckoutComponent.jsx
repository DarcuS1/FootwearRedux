// import React, { useState } from "react";

// const CheckoutComponent = () => {
//   const [shippingInfo, setShippingInfo] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     address: "",
//     city: "",
//     state: "",
//     country: "",
//     postal: "",
//   });
//   const [paymentType, setPaymentType] = useState("card");

//   const handleShippingChange = (e) => {
//     setShippingInfo({ ...shippingInfo, [e.target.id]: e.target.value });
//   };

//   const handlePaymentTypeChange = (e) => {
//     setPaymentType(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Process checkout data here
//     console.log("Shipping Info:", shippingInfo);
//     console.log("Payment Type:", paymentType);
//   };

//   return (
//     <div className="bg-gray-100 overflow-y-auto">
//       <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
//         {/* Order Summary */}
//         <div className="bg-white rounded-lg shadow p-4 md:p-6 space-y-4">
//           {/* Your order summary logic here */}
//         </div>

//         {/* Shipping Information Form */}
//         <div className="bg-white rounded-lg shadow p-4 md:p-6 space-y-4">
//           <h2 className="text-xl font-semibold">Shipping Information</h2>
//           <form className="space-y-2" onChange={handleShippingChange}>
//             {/* Shipping form fields here */}
//           </form>
//         </div>

//         {/* Payment Information Form */}
//         <div className="bg-white rounded-lg shadow p-4 md:p-6 space-y-4">
//           <h2 className="text-xl font-semibold">Payment Information</h2>
//           <form className="space-y-2">
//             <div className="flex flex-col">
//               <label htmlFor="paymentType" className="font-medium mb-1">
//                 Payment Type
//               </label>
//               <select
//                 id="paymentType"
//                 className="border rounded p-2"
//                 value={paymentType}
//                 onChange={handlePaymentTypeChange}
//               >
//                 <option value="card">Card</option>
//                 <option value="applePay">Apple Pay</option>
//                 <option value="gPay">Google Pay</option>
//                 <option value="courierPay">Courier Pay</option>
//               </select>
//             </div>
//           </form>
//         </div>

//         {/* Place Order Button */}
//         <button
//           className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-white text-primary-foreground hover:bg-primary/90 px-4 py-2 w-full h-12"
//           onClick={handleSubmit}
//         >
//           Place Order
//         </button>
//       </div>
//     </div>
//   );
// };

import React from "react";

// Define the Button component
const Button = ({ children, ...props }) => {
  return (
    <button
      className="w-full h-12 bg-blue-500 text-white rounded-md px-4 py-2"
      {...props}
    >
      {children}
    </button>
  );
};

export default function CheckoutComponent() {
  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto space-y-6 md:space-y-8 py-4 md:py-6">
        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow p-4 md:p-6 space-y-4">
          <h2 className="text-xl font-semibold">Order Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Product 1 x 2</span>
              <span>$200.00</span>
            </div>
            <div className="flex justify-between">
              <span>Product 2 x 1</span>
              <span>$100.00</span>
            </div>
            <div className="border-t pt-2 flex justify-between font-semibold">
              <span>Total</span>
              <span>$300.00</span>
            </div>
          </div>
        </div>

        {/* Shipping Information */}
        <div className="bg-white rounded-lg shadow p-4 md:p-6 space-y-4">
          <h2 className="text-xl font-semibold">Shipping Information</h2>
          <form className="space-y-2">
            <input
              className="border rounded p-2 w-full"
              placeholder="Full Name"
            />
            <input
              className="border rounded p-2 w-full"
              placeholder="Phone Number"
            />
            <input
              className="border rounded p-2 w-full"
              placeholder="Email Address"
            />
            <input
              className="border rounded p-2 w-full"
              placeholder="Address"
            />
            <input className="border rounded p-2 w-full" placeholder="City" />
            <input
              className="border rounded p-2 w-full"
              placeholder="State/Province"
            />
            <input
              className="border rounded p-2 w-full"
              placeholder="Country"
            />
            <input
              className="border rounded p-2 w-full"
              placeholder="Postal Code"
            />
          </form>
        </div>

        {/* Payment Information */}
        <div className="bg-white rounded-lg shadow p-4 md:p-6 space-y-4">
          <h2 className="text-xl font-semibold">Payment Information</h2>
          <form className="space-y-2">
            <div className="flex flex-col">
              <label className="font-medium mb-1" htmlFor="paymentType">
                Payment Type
              </label>
              <select className="border rounded p-2" id="paymentType">
                <option value="card">Card</option>
                <option value="applePay">Apple Pay</option>
                <option value="gPay">Google Pay</option>
                <option value="courierPay">Courier Pay</option>
              </select>
            </div>
          </form>
        </div>

        <Button>Place Order</Button>
      </div>
    </div>
  );
}

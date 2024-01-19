import React from "react";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();
  const orderDetails = location.state?.orderDetails || {};

  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto space-y-6 md:space-y-8 py-4 md:py-6">
        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow p-4 md:p-6 space-y-4">
          <h2 className="text-xl font-semibold">Order Summary</h2>
          <div className="space-y-2">
            {orderDetails.cart &&
              orderDetails.cart.map((item) => (
                <div className="flex justify-between" key={item.id}>
                  <div className="md:col-span-1">
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                  <span>
                    {item.name} x {orderDetails.itemQuantities[item.id] || 1}
                  </span>
                  <span>
                    $
                    {(
                      item.price * (orderDetails.itemQuantities[item.id] || 1)
                    ).toFixed(2)}
                  </span>
                </div>
              ))}
            <div className="border-t pt-2 flex justify-between font-semibold">
              <span>Total</span>
              <span>${orderDetails.total?.toFixed(2)}</span>
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

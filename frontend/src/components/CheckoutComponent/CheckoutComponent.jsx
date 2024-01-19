import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const jwtToken = localStorage.getItem('jwtToken')

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const formDataRef = useRef({
    fullName: '',
    phoneNumber: '',
    email: '',
    address: '',
    city: '',
    state: '',
    country: '',
    postalCode: ''
  });

  // Update the ref whenever state changes
  useEffect(() => {
    formDataRef.current = {
      fullName,
      phoneNumber,
      email,
      address,
      city,
      state,
      country,
      postalCode
    };
  }, [fullName, phoneNumber, email, address, city, state, country, postalCode]);

  const onPaypalButtonClick = (e) => {
    const { fullName, phoneNumber, email, address, city, state, country, postalCode } = formDataRef.current;
    if (!fullName || !phoneNumber || !email || !address || !city || !state || !country || !postalCode) {
      toast.error("All fields must be filled!", { position: "top-center" });
      e.stopPropagation();
    }
  }

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: orderDetails.total?.toFixed(2), // Total amount of the order
          },
        },
      ],
    });
  };

  const handlePlaceOrder = () => {
    if (!fullName || !phoneNumber || !email || !address || !city || !state || !country || !postalCode) {
      toast.error("All fields must be filled!", {
        position: "top-center"
      })
      return null
    }

    const paymentType = document.getElementById("paymentType").value;
    if (paymentType === "courierPay") {
      // Display toast and navigate to the home page
      toast.success("Order placed successfully by courier!", {
        autoClose: 2000,
      });
      navigate("/home");
    } else {
      toast.error("PAY BY PAYPAL OR CARD", {
        autoClose: 2000,
      });
    }
  };

  // Function to handle approval of payment
  const onApprove = async (data, actions) => {
    return actions.order.capture().then(async (details) => {
      // Handle successful payment here
      toast.success("HURRAY YOU DID IT", 2000);
      console.log("Payment Successful:", details);

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${jwtToken}`);

      const { fullName, phoneNumber, email, address, city, state, country, postalCode } = formDataRef.current;
      var raw = JSON.stringify({
        "fullName": fullName,
        "phoneNumber": phoneNumber,
        "email": email,
        "address": address,
        "city": city,
        "state": state,
        "country": country,
        "postalCode": postalCode
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      try {
        const response = await fetch('http://localhost:8080/api/v1/cart/checkout', requestOptions);

        if (!response.ok) {
          console.log(`Checkout cart response not ok: ${response.status}`);
          throw new Error(`Checkout cart response not ok: status ${response.status}`);
        }

        toast.success("Successfully checkout", {
          position: "top-center"
        });
      } catch (e) {
        console.error('Checkout failed:', e);
        toast.error(`Checkout failed`, {
          position: "top-center"
        });
      }
      navigate("/home");
    });
  };

  const handlePlaceOrder = () => {
    const paymentType = document.getElementById("paymentType").value;
    if (paymentType === "courierPay") {
      // Display toast and navigate to the home page
      toast.success("Order placed successfully by courier!", {
        autoClose: 2000,
      });
      navigate("/home");
    } else {
      toast.error("PAY BY PAYPAL OR CARD", {
        autoClose: 2000,
      });
    }
  };

  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AeBNG4DvnhBBaMihtE514d1wLtgMsYujwcnC2m281KCi1fo-lGN7lPWZLcTdga8zxvGPdA_csWkrBHOE", // Use your sandbox client ID here
        currency: "USD", // Set the currency if needed
        intent: "capture", // Intent for the payment
        components: "buttons", // Load only the buttons component
        //"disable-funding": "credit,card", // Optionally disable funding methods
        debug: true, // Enable debug mode for development
      }}
    >
      <div className="bg-white">
        <div className="max-w-3xl mx-auto space-y-6 md:space-y-8 py-4 md:py-6">
          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow p-4 md:p-6 space-y-4">
            <h2 className="text-xl font-semibold">Order Summary</h2>
            <div className="space-y-2">
              {orderDetails.cart &&
                orderDetails.cart.map((item) => (
                  <div className="flex justify-between" key={item.productUUID}>
                    <div className="md:col-span-1">
                      <h2 className="font-semibold">{item.shoeName}</h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                    <span>
                      {item.shoeName} x {1}
                    </span>
                    <span>
                      $
                      {(
                        item.price
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
            <form className="space-y-2" onSubmit={(e) => { e.stopPropagation() }}>
              <input
                className="border rounded p-2 w-full"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <input
                className="border rounded p-2 w-full"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <input
                className="border rounded p-2 w-full"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="border rounded p-2 w-full"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <input
                className="border rounded p-2 w-full"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                className="border rounded p-2 w-full"
                placeholder="State/Province"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              <input
                className="border rounded p-2 w-full"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
              <input
                className="border rounded p-2 w-full"
                placeholder="Postal Code"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
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
          <div className="bg-white rounded-lg shadow p-4 md:p-6 space-y-4">
            <h2 className="text-xl font-semibold">Payment Information</h2>
            <PayPalButtons onClick={onPaypalButtonClick} createOrder={createOrder} onApprove={onApprove} />
          </div>
          <Button onClick={handlePlaceOrder}>Place Order</Button>
        </div>
      </div>
    </PayPalScriptProvider >
  );
}

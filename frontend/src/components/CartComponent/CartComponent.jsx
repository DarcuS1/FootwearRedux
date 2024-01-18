import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import useHistory
import { useNavigate } from "react-router-dom";

import { useCart } from "../CartContext/CartCOntext";

// ... Rest of your code remains the same

export default function CartComponent() {
  const navigate = useNavigate();

  const { cart, removeFromCart } = useCart();
  const [itemQuantities, setItemQuantities] = useState({});

  // Calculate subtotal and shipping cost
  const subtotal = cart.reduce(
    (total, item) => total + item.price * (itemQuantities[item.id] || 1),
    0
  );
  const shipping = 10; // You can change this value as needed
  const total = subtotal + shipping;

  // Function to increase item quantity
  const increaseQuantity = (itemId) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 1) + 1,
    }));
  };

  // Function to decrease item quantity
  const decreaseQuantity = (itemId) => {
    setItemQuantities((prevQuantities) => {
      const newQuantity = (prevQuantities[itemId] || 1) - 1;
      const updatedQuantities = { ...prevQuantities };
      if (newQuantity > 0) {
        updatedQuantities[itemId] = newQuantity;
      } else {
        delete updatedQuantities[itemId];
      }
      return updatedQuantities;
    });
  };

  const goToCheckout = () => {
    const orderDetails = {
      cart,
      itemQuantities,
      subtotal,
      shipping,
      total,
    };
    navigate("/checkout", { state: { orderDetails } });
  };

  return (
    <div className="flex flex-col gap-6 px-4 py-6 md:px-6 md:py-8 lg:px-12 lg:py-12">
      <h1 className="text-2xl font-bold">Your Cart</h1>
      <div className="grid gap-6 md:grid-cols-7">
        <div className="md:col-span-5">
          {cart.map((item) => (
            <div
              key={item.id}
              className="grid gap-4 md:grid-cols-[80px_1fr_100px_100px_80px] items-start"
            >
              {/* Product details */}
              <img
                alt="Product Image"
                className="rounded-md object-cover md:col-span-1"
                height={80}
                src={item.image}
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width={80}
              />
              <div className="md:col-span-1">
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
              <div className="md:col-span-1">
                <p className="font-semibold">${item.price}</p>
              </div>
              <div className="md:col-span-1">
                <div className="flex items-center gap-2">
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    <MinusIcon className="ml-3 h-4 w-4" />
                    <span className="sr-only">Decrease quantity</span>
                  </Button>
                  <span>{itemQuantities[item.id] || 1}</span>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    <PlusIcon className="ml-3 h-4 w-4" />
                    <span className="sr-only">Increase quantity</span>
                  </Button>
                </div>
              </div>
              <div className="md:col-span-1">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => removeFromCart(item.id)}
                >
                  <TrashIcon className="ml-3 h-4 w-4" />
                  <span className="sr-only">Remove item</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center">
                <div>Subtotal</div>
                <div className="ml-auto">${subtotal.toFixed(2)}</div>
              </div>
              <div className="flex items-center">
                <div>Shipping</div>
                <div className="ml-auto">${shipping.toFixed(2)}</div>
              </div>
              <Separator />
              <div className="flex items-center font-medium">
                <div>Total</div>
                <div className="ml-auto">${total.toFixed(2)}</div>
              </div>
            </CardContent>
            <CardFooter className="flex items-center gap-2">
              <Button size="lg" onClick={goToCheckout}>
                Proceed to Checkout
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
const Button = ({ size, variant, children, ...props }) => {
  let sizeClasses = size === "icon" ? "h-10 w-10" : "py-2 px-4";
  let variantClasses =
    variant === "outline" ? "border border-gray-300" : "bg-blue-500 text-white";

  return (
    <button
      className={`rounded-md ${sizeClasses} ${variantClasses}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Define the Card components
const Card = ({ children }) => (
  <div className="bg-white shadow rounded-lg">{children}</div>
);
const CardHeader = ({ children }) => (
  <div className="border-b p-4">{children}</div>
);
const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);
const CardFooter = ({ children }) => (
  <div className="border-t p-4">{children}</div>
);
const CardTitle = ({ children }) => (
  <h2 className="text-lg font-semibold">{children}</h2>
);

// Define the Separator component
const Separator = () => <hr className="my-4" />;

function PlusIcon(props) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function MinusIcon(props) {
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
      <path d="M5 12h14" />
    </svg>
  );
}

function TrashIcon(props) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}

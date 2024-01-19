import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import useHistory
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function CartComponent() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [updateCart, setUpdateCart] = useState(false)
  const jwtToken = localStorage.getItem('jwtToken')

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${jwtToken}`);


    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      body: null,
      redirect: 'follow'
    };


    fetch('http://localhost:8080/api/v1/cart/fetch', requestOptions)
      .then(response => {
        if (!response.ok) {
          console.log(`Add shoe to cart response not ok ${response}`)
          throw new Exception(`Add shoe to cart response not ok`);
        }
        return response.json()
      })
      .then(response => {
        return response
      })
      .then(data => {
        setCart(data)
      })
      .catch(error => console.error(`Error fetching cart data: ${error}`));

  }, [updateCart])
  // Calculate subtotal and shipping cost
  console.log(`Cart list value: ${cart}`)
  const subtotal = cart.reduce(
    (total, item) => total + item.price,
    0
  );
  const shipping = 10; // You can change this value as needed
  const total = subtotal + shipping;

  const removeFromCart = (uuid) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${jwtToken}`);

    var raw = JSON.stringify({
      "shoeUUID": uuid
    });

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch('http://localhost:8080/api/v1/cart/removeshoe', requestOptions)
      .then(response => {
        if (!response.ok) {
          console.log(`Add shoe to cart response not ok ${response}`)
          throw new Exception(`Add shoe to cart response not ok`);
        }
        setUpdateCart(!updateCart)
        toast.success("Successfully removed item", {
          position: "top-center"
        })
      })
      .catch((e) => {
        toast.error(`Failed to remove item from cart`, {
          position: "top-center"
        })
      })
  }

  const goToCheckout = () => {
    const itemNames = cart.map((item) => item.name);
    const orderDetails = {
      itemNames: itemNames,
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
          {cart.map((item, _) => (
            <div
              key={item.id}
              className="grid gap-4 md:grid-cols-[80px_1fr_100px_100px_80px] items-start"
            >
              {/* Product details */}
              <img
                alt="Product Image"
                className="rounded-md object-cover md:col-span-1"
                height={80}
                src={`http://localhost:8080/api/v1/shoe_images/fetch/${item.coverImageUuid}`}
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width={80}
              />
              <div className="md:col-span-1">
                <h2 className="font-semibold">Name: {item.shoeName}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Description: {item.description}
                </p>
              </div>
              <div className="md:col-span-1">
                <p className="font-semibold">${item.price}</p>
              </div>
              <div className="md:col-span-1">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => removeFromCart(item.productUUID)}
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

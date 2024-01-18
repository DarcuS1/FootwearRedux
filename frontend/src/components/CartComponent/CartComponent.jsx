import React from "react";
import { Link } from "react-router-dom";
// Define the Button component
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
export default function Component() {
  return (
    <div className="flex flex-col gap-6 px-4 py-6 md:px-6 md:py-8 lg:px-12 lg:py-12">
      <h1 className="text-2xl font-bold">Your Cart</h1>
      <div className="grid gap-6 md:grid-cols-7">
        <div className="md:col-span-5">
          <div className="grid gap-6">
            <div className="grid gap-4 md:grid-cols-[80px_1fr_100px_100px_80px] items-start">
              <img
                alt="Product Image"
                className="rounded-md object-cover md:col-span-1"
                height={80}
                src="https://generated.vusercontent.net/placeholder.svg"
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width={80}
              />
              <div className="md:col-span-1">
                <h2 className="font-semibold">Classic Sneakers</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  White, Size 42
                </p>
              </div>
              <div className="md:col-span-1">
                <p className="font-semibold">$120.00</p>
              </div>
              <div className="md:col-span-1">
                <div className="flex items-center gap-2">
                  <Button size="icon" variant="outline">
                    <MinusIcon className="ml-3  h-4 w-4" />
                    <span className="sr-only">Decrease quantity</span>
                  </Button>
                  <span>1</span>
                  <Button size="icon" variant="outline">
                    <PlusIcon className="ml-3  h-4 w-4" />
                    <span className="sr-only">Increase quantity</span>
                  </Button>
                </div>
              </div>
              <div className="md:col-span-1">
                <Button size="icon" variant="outline">
                  <TrashIcon className="ml-3  h-4 w-4" />
                  <span className="sr-only">Remove item</span>
                </Button>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-[80px_1fr_100px_100px_80px] items-start">
              <img
                alt="Product Image"
                className="rounded-md object-cover md:col-span-1"
                height={80}
                src="https://generated.vusercontent.net/placeholder.svg"
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width={80}
              />
              <div className="md:col-span-1">
                <h2 className="font-semibold">Running Shoes</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Black, Size 40
                </p>
              </div>
              <div className="md:col-span-1">
                <p className="font-semibold">$90.00</p>
              </div>
              <div className="md:col-span-1">
                <div className="flex items-center gap-2">
                  <Button size="icon" variant="outline">
                    <MinusIcon className="ml-3  h-4 w-4" />
                    <span className="sr-only">Decrease quantity</span>
                  </Button>
                  <span>2</span>
                  <Button size="icon" variant="outline">
                    <PlusIcon className="ml-3  h-4 w-4" />
                    <span className="sr-only">Increase quantity</span>
                  </Button>
                </div>
              </div>
              <div className="md:col-span-1">
                <Button size="icon" variant="outline">
                  <TrashIcon className="ml-3 h-4 w-4" />
                  <span className="sr-only">Remove item</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center">
                <div>Subtotal</div>
                <div className="ml-auto">$300.00</div>
              </div>
              <div className="flex items-center">
                <div>Shipping</div>
                <div className="ml-auto">$10.00</div>
              </div>
              <Separator />
              <div className="flex items-center font-medium">
                <div>Total</div>
                <div className="ml-auto">$310.00</div>
              </div>
            </CardContent>
            <CardFooter className="flex items-center gap-2">
              <Link to="/checkout">
                <Button size="lg">Proceed to Checkout</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
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

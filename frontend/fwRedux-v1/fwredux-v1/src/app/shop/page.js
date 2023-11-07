/**
 * v0 by Vercel.
 * @see https://v0.dev/t/GVcfVoc978D
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectGroup,
  SelectContent,
  Select,
} from "@/components/ui/select";

export default function Shop() {
  return (
    <div
      key="1"
      className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900"
    >
      <header className="w-full px-6 py-4 flex items-center justify-between bg-blue-200 dark:bg-blue-800">
        <div className="flex items-center space-x-2">
          <svg
            className=" h-8 w-8 text-blue-900 dark:text-blue-100"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
          </svg>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text dark:from-blue-300 dark:to-purple-400">
            FootwearRedux
          </span>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link
            className="text-blue-800 hover:underline dark:text-blue-200"
            href="#"
          >
            Home
          </Link>
          <Link
            className="text-blue-800 hover:underline dark:text-blue-200"
            href="#"
          >
            Shop
          </Link>
          <Link
            className="text-blue-800 hover:underline dark:text-blue-200"
            href="#"
          >
            Sell
          </Link>
          <Link
            className="text-blue-800 hover:underline dark:text-blue-200"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-blue-800 hover:underline dark:text-blue-200"
            href="#"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button
            className="border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white dark:border-blue-200 dark:text-blue-200 dark:hover:bg-blue-200 dark:hover:text-blue-800"
            variant="outline"
          >
            Log In
          </Button>
          <Link href="#">
            <div className="relative cursor-pointer">
              <svg
                className=" h-8 w-8 text-blue-900 dark:text-blue-100"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m5 11 4-7" />
                <path d="m19 11-4-7" />
                <path d="M2 11h20" />
                <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4" />
                <path d="m9 11 1 9" />
                <path d="M4.5 15.5h15" />
                <path d="m15 11-1 9" />
              </svg>
              <span className="absolute top-0 right-0 bg-red-500 rounded-full h-4 w-4 flex items-center justify-center text-white text-xs">
                3
              </span>
            </div>
          </Link>
        </div>
      </header>
      <main className="flex-grow bg-gray-100 dark:bg-gray-900 overflow-auto">
        <section className="container mx-auto px-6 py-12 flex flex-col md:flex-row">
          <aside className="w-full md:w-64 mb-6 md:mb-0 md:mr-6 bg-white shadow-md rounded-lg p-6 sticky top-0 dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4">
              Filter by:
            </h2>
            <div className="mb-4">
              <label className="block text-blue-600 dark:text-blue-400 mb-2">
                Price
              </label>
              <div className="flex space-x-2 items-center">
                <input
                  className="w-1/2"
                  max="500"
                  min="0"
                  placeholder="Min Price"
                  type="number"
                />
                <span> to </span>
                <input
                  className="w-1/2"
                  max="500"
                  min="0"
                  placeholder="Max Price"
                  type="number"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-blue-600 dark:text-blue-400 mb-2">
                Size
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="small">Small</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="large">Large</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="mb-4">
              <label className="block text-blue-600 dark:text-blue-400 mb-2">
                Color
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a color" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="red">Red</SelectItem>
                    <SelectItem value="blue">Blue</SelectItem>
                    <SelectItem value="green">Green</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="mb-4">
              <label className="block text-blue-600 dark:text-blue-400 mb-2">
                Brand
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a brand" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="nike">Nike</SelectItem>
                    <SelectItem value="adidas">Adidas</SelectItem>
                    <SelectItem value="reebok">Reebok</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </aside>
          <div className="flex-grow grid grid-cols-2 gap-6">
            <h1 className="col-span-full text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6 text-center">
              Shop our entire collection
            </h1>
            <h2 className="col-span-full text-xl text-blue-600 dark:text-blue-400 mb-8 text-center">
              Discover the perfect pair for your style and comfort
            </h2>
            <div className="bg-white shadow-md rounded-lg p-6 dark:bg-gray-800">
              <img
                alt="Product Image 1"
                className="mb-4"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
                Product Name 1
              </h3>
              <p className="text-blue-600 dark:text-blue-400 mb-4">
                Product Description 1
              </p>
              <Button
                className="w-full bg-blue-800 text-white dark:bg-blue-200 dark:text-blue-800"
                variant="default"
              >
                Buy Now
              </Button>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 dark:bg-gray-800">
              <img
                alt="Product Image 2"
                className="mb-4"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
                Product Name 2
              </h3>
              <p className="text-blue-600 dark:text-blue-400 mb-4">
                Product Description 2
              </p>
              <Button
                className="w-full bg-blue-800 text-white dark:bg-blue-200 dark:text-blue-800"
                variant="default"
              >
                Buy Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-blue-200 dark:bg-blue-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <span className="text-blue-500 dark:text-blue-300 mb-4 md:mb-0">
            © 2023 FootwearRedux. All rights reserved.
          </span>
          <nav className="space-x-4">
            <Link
              className="text-blue-500 hover:underline dark:text-blue-300"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-blue-500 hover:underline dark:text-blue-300"
              href="#"
            >
              Terms & Conditions
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <svg
              className=" h-6 w-6 text-blue-500 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-500"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
            <svg
              className=" h-6 w-6 text-blue-500 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-500"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
            <svg
              className=" h-6 w-6 text-blue-500 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-500"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </div>
          <div className="flex items-center space-x-4">
            <svg
              className=" h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
              <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
              <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
            </svg>
            <svg
              className=" h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect height="14" rx="2" width="20" x="2" y="5" />
              <line x1="2" x2="22" y1="10" y2="10" />
            </svg>
            <svg
              className=" h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect height="14" rx="2" width="20" x="2" y="5" />
              <line x1="2" x2="22" y1="10" y2="10" />
            </svg>
            <svg
              className=" h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
              <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
              <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
            </svg>
          </div>
        </div>
      </footer>
    </div>
  );
}

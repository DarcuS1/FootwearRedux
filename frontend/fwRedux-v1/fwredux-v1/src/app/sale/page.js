/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hfiDDBKBR3s
 */
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectGroup,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function Sale() {
  return (
    <div
      key="1"
      className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900"
    >
      <header className="w-full px-6 py-4 flex items-center justify-between bg-blue-200 dark:bg-blue-800" />
      <main className="flex-grow bg-gray-100 dark:bg-gray-900 overflow-auto">
        <section className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-blue-800 dark:text-blue-200 mb-6 text-center">
            List Your Product
          </h1>
          <form className="bg-white shadow-lg rounded-xl p-8 dark:bg-gray-800">
            <label className="block text-blue-600 dark:text-blue-400 mb-2">
              Product Name
              <input
                className="w-full mt-1 border border-gray-300 rounded-md p-2 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                placeholder="Enter product name"
                type="text"
              />
            </label>
            <label className="block text-blue-600 dark:text-blue-400 mb-2 mt-4">
              Detailed Description
              <textarea
                className="w-full mt-1 border border-gray-300 rounded-md p-2 h-32 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                placeholder="Describe your product in detail"
              />
            </label>
            <label className="block text-blue-600 dark:text-blue-400 mb-2 mt-4">
              Select Category
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="shoes">Shoes</SelectItem>
                    <SelectItem value="boots">Boots</SelectItem>
                    <SelectItem value="sandals">Sandals</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </label>
            <label className="block text-blue-600 dark:text-blue-400 mb-2 mt-4 border border-gray-300 dark:border-gray-700 rounded-md p-2">
              Upload Product Images
              <div className="grid grid-cols-3 gap-4 mt-2">
                <div className="relative">
                  <img
                    alt="Head listing"
                    className="aspect-[1/1] object-cover rounded-lg"
                    height={100}
                    src="/placeholder.svg"
                    width={100}
                  />
                  <p className="absolute inset-0 flex items-center justify-center">
                    Head Listing
                  </p>
                </div>
                <div className="relative">
                  <img
                    alt="Picture 2"
                    className="aspect-[1/1] object-cover rounded-lg"
                    height={100}
                    src="/placeholder.svg"
                    width={100}
                  />
                  <p className="absolute inset-0 flex items-center justify-center">
                    Picture Number 2
                  </p>
                </div>
                <div className="relative">
                  <img
                    alt="Picture 3"
                    className="aspect-[1/1] object-cover rounded-lg"
                    height={100}
                    src="/placeholder.svg"
                    width={100}
                  />
                  <p className="absolute inset-0 flex items-center justify-center">
                    Picture Number 3
                  </p>
                </div>
                <div className="relative">
                  <img
                    alt="Picture 4"
                    className="aspect-[1/1] object-cover rounded-lg"
                    height={100}
                    src="/placeholder.svg"
                    width={100}
                  />
                  <p className="absolute inset-0 flex items-center justify-center">
                    Picture Number 4
                  </p>
                </div>
                <div className="relative">
                  <img
                    alt="Picture 5"
                    className="aspect-[1/1] object-cover rounded-lg"
                    height={100}
                    src="/placeholder.svg"
                    width={100}
                  />
                  <p className="absolute inset-0 flex items-center justify-center">
                    Picture Number 5
                  </p>
                </div>
                <div className="relative">
                  <img
                    alt="Picture 6"
                    className="aspect-[1/1] object-cover rounded-lg"
                    height={100}
                    src="/placeholder.svg"
                    width={100}
                  />
                  <p className="absolute inset-0 flex items-center justify-center">
                    Picture Number 6
                  </p>
                </div>
              </div>
              <input
                className="w-full mt-1 border border-gray-300 rounded-md p-2 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                multiple
                type="file"
              />
            </label>
            <label className="block text-blue-600 dark:text-blue-400 mb-2 mt-4">
              Set Price (USD)
              <input
                className="w-full mt-1 border border-gray-300 rounded-md p-2 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                placeholder="Set product price in USD"
                type="number"
              />
            </label>
            <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-6 mt-6 text-center">
              Contact Information
            </h2>
            <label className="block text-blue-600 dark:text-blue-400 mb-2">
              Contact Name
              <input
                className="w-full mt-1 border border-gray-300 rounded-md p-2 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                placeholder="Enter your name"
                type="text"
              />
            </label>
            <label className="block text-blue-600 dark:text-blue-400 mb-2 mt-4">
              Contact Phone
              <input
                className="w-full mt-1 border border-gray-300 rounded-md p-2 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                placeholder="Enter your phone number"
                type="tel"
              />
            </label>
            <label className="block text-blue-600 dark:text-blue-400 mb-2 mt-4">
              Contact Email
              <input
                className="w-full mt-1 border border-gray-300 rounded-md p-2 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                placeholder="Enter your email address"
                type="email"
              />
            </label>
            <Button
              className="w-full bg-blue-800 text-white mt-6 dark:bg-blue-200 dark:text-blue-800"
              type="submit"
              variant="default"
            >
              List Product
            </Button>
          </form>
        </section>
      </main>
      <footer className="w-full py-6 bg-blue-200 dark:bg-blue-800" />
    </div>
  );
}

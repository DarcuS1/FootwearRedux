import React from "react";

const Testimonial = () => {
  return (
    <section className="flex items-center justify-center py-20 bg-white min-w-screen">
      <div className="px-16 bg-white">
        <div className="container flex flex-col items-start mx-auto lg:items-center">
          <p className="relative flex items-start justify-start w-full text-lg font-bold tracking-wider text-purple-500 uppercase lg:justify-center lg:items-center">
            Don't just take our word for it
          </p>

          <h2 className="relative flex items-start justify-start w-full max-w-3xl text-5xl font-bold lg:justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-gray-200 lg:inline-block"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            See what our customers are saying
          </h2>
          <div className="block w-full h-0.5 max-w-lg mt-6 bg-purple-100 rounded-full"></div>

          <div className="items-center justify-center w-full mt-12 mb-4 lg:flex">
            {/* Testimonial 1 */}
            <div className="flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0">
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                  <img
                    src="https://th.bing.com/th/id/OIP.eg6RQixzzomm6GlpilKe_AHaHa?rs=1&pid=ImgDetMain"
                    className="object-cover w-full h-full"
                    alt="Customer 1"
                  />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <h4 className="font-bold text-gray-800">Sarah Smith</h4>
                  <p className="text-gray-600">Happy Customer</p>
                </div>
              </div>
              <blockquote className="mt-8 text-lg text-gray-500">
                "I love shopping at this shoe store! They have a fantastic
                selection and amazing customer service."
              </blockquote>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col items-start justify-start w-full h-auto px-0 mx-0 mb-12 border-l border-r border-transparent lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200 tails-selected-element">
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                  <img
                    src="https://th.bing.com/th/id/OIP.3-nNcOddBHtqH4zcXiVEeAAAAA?rs=1&pid=ImgDetMain"
                    className="object-cover w-full h-full"
                    alt="Customer 2"
                  />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <h4 className="font-bold text-gray-800">Michael Johnson</h4>
                  <p className="text-gray-600">Frequent Shopper</p>
                </div>
              </div>
              <blockquote className="mt-8 text-lg text-gray-500">
                "The quality of their shoes is unmatched. I keep coming back for
                more!"
              </blockquote>
            </div>
            {/* Testimonial 3 */}
            <div className="flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0">
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                  <img
                    src="https://th.bing.com/th/id/R.de87fa37b87937d73e66aa0ee97eae5f?rik=0tPY39AEzMdjSg&riu=http%3a%2f%2fww1.prweb.com%2fprfiles%2f2013%2f10%2f10%2f12035459%2fKimK+Head+shot.jpg&ehk=20jmPACLz3AAMrspK7bSTGtjMrUPK1CtboQM5QHzyZ8%3d&risl=&pid=ImgRaw&r=0"
                    className="object-cover w-full h-full"
                    alt="Customer 3"
                  />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <h4 className="font-bold text-gray-800">Emily Davis</h4>
                  <p className="text-gray-600">Satisfied Shopper</p>
                </div>
              </div>
              <blockquote className="mt-8 text-lg text-gray-500">
                "I've found the perfect pair of shoes every time I visit this
                store. Their staff is knowledgeable and friendly."
              </blockquote>
            </div>
            {/* Repeat the structure for other testimonials */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
